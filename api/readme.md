# 🐇 @rask/api

A [Node.js](https://nodejs.org/) based [GraphQL](https://graphql.org/) project written in [TypeScript](https://typescriptlang.org) that uses [Prisma](https://www.prisma.io) to model, generate and seed a [SQLite](https://sqlite.org/index.html) database. [TypeGraphQL Prisma](https://prisma.typegraphql.com/) for generating type classes and CRUD resolvers from Prisma's `schema.prisma`. The data is randomly generated using [@ngneat/falso](https://ngneat.github.io/falso/), [Koa](https://koajs.com/) for the web framework and a GraphQL API server, [Apollo Server](https://www.apollographql.com/docs/apollo-server).

## Table of Contents

- [Technologies](#technologies)
- [Install](#install)
- [Database](#database)
  - [Prisma SQLite]()
  - [Prisma Schema](#📐-prisma-schema)
- [Development](#development)
  - [Task Items](#task-items)

### Technologies

- [Node.js](https://nodejs.org/)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io)
- [TypeGraphQL Prisma](https://prisma.typegraphql.com/)
- [SQLite](https://sqlite.org/index.html)
- [@ngneat/falso](https://ngneat.github.io/falso/)
- [Koa](https://koajs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [TypeScript](https://typescriptlang.org)

---

### Install

The project dependencies are managed by the workspace. Refer to the root [README.md](../README.md) for installation instructions.

---

### Database

[Prisma](1) is used to model, generate and seed the [SQLite](2) database. The database is stored locally in the project as a `dev.db` file in the root of the [`/prisma`](3) directory. SQLite was chosen for this project because it is 100% managed by this project with zero configuration required.

> The first time this project is ran using the `dev` script, if the `dev.db` does not exists, then the scripts responsible for generating the database, type classes and CRUD resolvers and GraphQL schemas are executed to ensure all runtime dependencices are available.

#### Prisma Schema [`schema.prisma`](/prisma/schema.prisma)

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

#### To manually generate the database, type classes and CRUD resolvers and seed the database, execute the below script

```bash
pnpm generate:db
```

#### Prisma SQLite

For documentation on how to configure Prisma to work with SQLite refer to Prisma's documentation [Database Connectors/SQLite](https://www.prisma.io/docs/concepts/database-connectors/sqlite).

#### Prisma Schema

The [SQLite](1) database schema is managed by [Prisma](2). The [`prisma/schema.prisma`](3) file contains the model definitions that are used to create the database schema.

For more information on how to create and edit the [`prisma/schema.prisma`](3) file, refer to Prisma's documentation on [schemas](4).

---

### Development

#### TODO List

- ❌ Not Started
- 🟡 In Progress
- ✅ Complete

| Task                                                            | Status |
| --------------------------------------------------------------- | :----: |
| Add scripts to ensure dev.db and types exists when `dev` is ran |   ❌   |
| Drop ts-node                                                    |   🟡   |
| Add esbuild                                                     |   🟡   |
| Drop CRUD Type Generation                                       |   ❌   |
