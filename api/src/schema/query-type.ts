import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { readdir } from 'node:fs/promises';
import config from '../app.config.js';
import fileType from './file-Type.js';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    uploads: {
      description: 'All stored files.',
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(fileType))),
      resolve: () => readdir(config.staticUrl),
    },
  }),
});
