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
import { mergeSchemas } from '@graphql-tools/schema';
import cors from '@koa/cors';
import { resolvers } from '@prisma/generated/type-graphql/index.js';
import graphqlUploadKoa from 'graphql-upload/graphqlUploadKoa.mjs';
import Koa from 'koa';
import { koaBody } from 'koa-body';
import logger from 'koa-logger';
import http from 'node:http';
import { buildSchema } from 'type-graphql';
import config from './app.config.js';
import type { Context } from './client/context.js';
import { prisma } from './client/index.js';
import { LoginResolver } from './resolvers/login.js';
import { ProductTransactionResolver } from './resolvers/product-transaction.js';
import schemas from './schema/index.js';

await prisma.$connect();

const schema = await buildSchema({
  resolvers: [...resolvers, LoginResolver, ProductTransactionResolver],
  emitSchemaFile: './prisma/schema.graphql',
  validate: false,
});

const mergedSchemas = mergeSchemas({
  schemas: [schema, schemas],
});

const app = new Koa();
const httpServer = http.createServer(app.callback());
const server = new ApolloServer<Context>({
  cache: new InMemoryLRUCache(),
  schema: mergedSchemas,
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

// app.use(
//   koaStatic(config.staticRelativePath, {
//     gzip: true,
//     maxAge: 1 * 60 * 1000, // 1s,
//   })
// );

app.use(
  cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    origin: config.corsOrigin,
  })
);

app.use(
  koaBody({
    multipart: true,
  })
);

app.use(
  graphqlUploadKoa({
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20,
  })
);

// app.use(staticMiddlewares);

app.use(
  koaMiddleware<Context>(server as any, {
    // @ts-ignore
    context: async ({ ctx: { method, url }, next }) => {
      // const token = ctx.headers.authorization;

      return { prisma };
    },
  })
);

await new Promise<void>(resolve => httpServer.listen({ port: config.port }, resolve));
