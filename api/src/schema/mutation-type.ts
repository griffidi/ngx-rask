import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { default as saveFile, default as storeUpload } from '../static/save-file.js';
import fileType from './file-Type.js';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    singleUpload: {
      description: 'Stores a single file.',
      type: new GraphQLNonNull(fileType),
      args: {
        file: {
          description: 'File to store.',
          type: new GraphQLNonNull(GraphQLUpload),
        },
      },
      resolve: (_, { file }) => saveFile(file),
    },
    multipleUpload: {
      description: 'Stores multiple files.',
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(fileType))),
      args: {
        files: {
          description: 'Files to store.',
          type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLUpload))),
        },
      },
      async resolve(
        _,
        /** @type {{ files: Array<Promise<import("graphql-upload/Upload.mjs").FileUpload>>}} */ {
          files,
        }
      ) {
        const storedFileNames: string[] = [];

        // Ensure an error storing one upload doesn’t prevent storing the rest.
        for (const result of await Promise.allSettled(files.map(storeUpload))) {
          if ('value' in result) {
            storedFileNames.push(result.value);
            continue;
          }

          // Realistically you would do more than just log an error.
          console.error(`Failed to store upload: ${result.reason}`);
        }

        return storedFileNames;
      },
    },
  }),
});
