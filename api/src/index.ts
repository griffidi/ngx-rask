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
import http from 'node:http';
import { buildSchema } from 'type-graphql';
import type { Context } from './client/context.js';
import { prisma } from './client/index.js';
import { CORS_ORIGINS, GRAPHQL_PORT, IS_DEV_MODE } from './constants.js';
import { LoginResolver } from './resolvers/login.js';
import { ProductTransactionResolver } from './resolvers/product-transaction.js';

await prisma.$connect();

const schema = await buildSchema({
  resolvers: [
    ...resolvers,
    LoginResolver,
    ProductTransactionResolver,
  ],
  emitSchemaFile: './prisma/schema.graphql',
  validate: false,
});

const app = new Koa();
const httpServer = http.createServer(app.callback());
const server = new ApolloServer<Context>({
  cache: new InMemoryLRUCache(),
  schema,
  introspection: IS_DEV_MODE,
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

app.use(
  cors({
    allowMethods: [
      'POST',
      'OPTIONS',
    ],
    origin: CORS_ORIGINS,
  })
);
app.use(bodyParser());
app.use(
  koaMiddleware<Context>(server, {
    context: async ({ ctx }) => {
      // @ts-ignore
      // const token = ctx.headers.authorization;

      return { prisma };
    },
  })
);

await new Promise<void>(resolve => httpServer.listen({ port: GRAPHQL_PORT }, resolve));
