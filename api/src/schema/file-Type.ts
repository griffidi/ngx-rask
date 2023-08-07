import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import config from '../app.config.js';

export default new GraphQLObjectType({
  name: 'File',
  description: 'File type',
  fields: {
    id: {
      description: 'File id',
      type: new GraphQLNonNull(GraphQLString),
      resolve: storedFileName => storedFileName,
    },
    name: {
      description: 'File name',
      type: new GraphQLNonNull(GraphQLString),
      resolve: storedFileName => storedFileName,
    },
    url: {
      description: 'File url',
      type: new GraphQLNonNull(GraphQLString),
      resolve: storedFileName => new URL(storedFileName, config.staticUrl),
    },
  },
});
