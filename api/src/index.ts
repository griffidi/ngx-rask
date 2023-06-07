/**
 * This is required at the top level because it is used by `type-graphql` and the generated resolvers.
 *
 * @link https://typegraphql.com/docs/installation.html
 */
import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginUsageReportingDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { koaMiddleware } from '@as-integrations/koa';
import cors from '@koa/cors';
import { resolvers } from '@prisma/generated/type-graphql/index.js';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import koaStatic from 'koa-static';
import { readFile } from 'node:fs/promises';
import http from 'node:http';
import { resolve } from 'node:path';
import { buildSchema } from 'type-graphql';
import config from './app.config.js';
import type { Context } from './client/context.js';
import { prisma } from './client/index.js';
import { LoginResolver } from './resolvers/login.js';
import { ProductTransactionResolver } from './resolvers/product-transaction.js';

await prisma.$connect();

const schema = await buildSchema({
  resolvers: [...resolvers, LoginResolver, ProductTransactionResolver],
  emitSchemaFile: './prisma/schema.graphql',
  validate: false,
});

const app = new Koa();
const httpServer = http.createServer(app.callback());
const server = new ApolloServer<Context>({
  cache: new InMemoryLRUCache(),
  schema,
  introspection: config.isDevMode,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginUsageReportingDisabled(),
  ],
  formatError(formattedError, error) {
    console.error((error as any).extensions?.http?.headers); // { status: 400, headers: HeaderMap(0) [Map] {} }
    console.error(error);

    return formattedError;
  },
});

await server.start();

app.use(logger());

app.use(koaStatic(resolve(`import.meta.url, '/public`)));

app.use(
  cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    origin: config.corsOrigin,
  })
);
app.use(bodyParser());

app.use(async (ctx, next: () => Promise<void>) => {
  if (ctx.url.startsWith('/public')) {
    const filePath = resolve(import.meta.url, ctx.url);
    const file = await readFile(ctx.url, { encoding: 'utf-8' });

    ctx.body = file;

    return;
  }

  await next();
});

app.use(
  koaMiddleware<Context>(server, {
    // @ts-ignore
    context: async ({ ctx: { method, url }, next }) => {
      // const token = ctx.headers.authorization;

      if (method === 'POST' && url.startsWith('/files')) {
        console.log('Get Files');
      }

      return { prisma };
    },
  })
);

await new Promise<void>(resolve => httpServer.listen({ port: config.port }, resolve));
