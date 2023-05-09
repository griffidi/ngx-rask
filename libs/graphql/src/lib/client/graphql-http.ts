import { ApolloLink, Observable, type FetchResult, type Operation } from '@apollo/client/core';
import { print } from 'graphql';
import { createClient, type Client, type ClientOptions } from 'graphql-http';

class HTTPLink extends ApolloLink {
  readonly #client: Client;

  constructor(options: ClientOptions) {
    super();

    this.#client = createClient(options);
  }

  override request(operation: Operation): Observable<FetchResult> {
    return new Observable(sink => {
      return this.#client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        }
      );
    });
  }
}

export interface GraphqlHttpOptions extends Operation {
  uri: string;
}

/**
 * Make a GraphQL request using the GraphQL HTTP protocol.
 *
 * @param {GraphqlHttpOptions} options The options to use for the request.
 * @returns {Promise<FetchResult>} The result of the request.
 */
export const useGraphqlHttp = (options: GraphqlHttpOptions) => {
  const { uri, ...operation } = options;
  const { request } = new HTTPLink({ url: uri });

  return request(operation);
};
