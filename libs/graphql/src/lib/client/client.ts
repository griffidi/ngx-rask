import { Injectable } from '@angular/core';
import {
  type ApolloClient,
  type DocumentNode,
  type MutationOptions,
  type NormalizedCacheObject,
  type OperationVariables,
  type QueryOptions,
  type TypedDocumentNode,
} from '@apollo/client/core';
import { extractDataFromQueryResult, unwrapMutateResult } from '../utils/operation-result-unwrapper.js';
import { createApolloClient } from './create-apollo-client.js';

// TODO: get GRAPHQL API from environment
const GRAPHQL_URI = 'http://localhost:8018'; // localStorage.getItem(GRAPHQL_URI_CACHE_KEY);

export interface ClientQueryOptions extends Omit<QueryOptions, 'query'> {}

/**
 * GraphQL client service.
 */
@Injectable({ providedIn: 'root' })
export class Client {
  #apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

  constructor() {
    this.#apolloClient = createApolloClient({ uri: GRAPHQL_URI });
  }

  /**
   * Execute a mutate operation.
   *
   * @param {MutationOptions} options Mutate options.
   * @returns {Promise<FetchResult<T>>} Unwrapped result from mutate operation.
   */
  async mutate<T>(options: MutationOptions): Promise<T> {
    const result = await this.#apolloClient?.mutate(options);
    return unwrapMutateResult(result);
  }

  /**
   * Execute a query operation.
   *
   * @param {QueryOptions} options Query options.
   * @returns {Promise<ApolloQueryResult<T>>} Unwrapped result from query operation.
   */
  // eslint-disable-next-line ts/no-explicit-any
  async query<TData = any, TVariables = OperationVariables>(
    query: DocumentNode | TypedDocumentNode<TData, TVariables>,
    options: ClientQueryOptions = {}
  ): Promise<TData> {
    const result = await this.#apolloClient?.query({
      ...options,
      query,
    } as QueryOptions);
    // return unwrapQueryResult<TData>(result);
    return extractDataFromQueryResult<TData>(result as any);
  }
}
