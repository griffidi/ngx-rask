import { GraphQLSchema } from 'graphql';
import mutation from './mutation-type.js';
import query from './query-type.js';

export default new GraphQLSchema({
  mutation,
  query,
});
