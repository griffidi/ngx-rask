const { resolve } = require("node:path");

module.exports = {
  // client: {
  //   name: '@rask/demo',
  //   service: '@rask/api@development',
  //   includes: ['./src/graphql/**/*.graphql'],
  //   // excludes: ['**/__tests__/**'],
  // },
  client: {
    // includes: ['./src/graphql/**/*.graphql'],
    includes: [resolve(__dirname, "./src/graphql/**/*.graphql")],
    service: {
      name: "@rask/api",
      localSchemaFile: resolve(__dirname, "../../api/prisma/schema.graphql"),
      // localSchemaFile: '../../api/prisma/schema.graphql',
      // url: 'http://localhost:8008/graphql',
      // url: 'c:/repos/rask/api/src/graphql/schema.graphql',
      // skipSSLValidation: true,
    },
  },
};
