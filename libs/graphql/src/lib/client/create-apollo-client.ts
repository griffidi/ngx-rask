import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  type NormalizedCacheObject,
  type TypePolicies,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { AUTH_TOKEN_CACHE_KEY, type CachedToken } from '@ngx-rask/core';

export interface ApolloClientOptions {
  uri: string;
  typePolicies?: TypePolicies;
  validateVariables?: boolean;
}

export const createApolloClient = (options?: ApolloClientOptions): ApolloClient<NormalizedCacheObject> => {
  const { uri, typePolicies } = options ?? {};

  // BUG: with empty cache/cookies uri is undefined on first run
  if (!uri) {
    throw new Error('Apollo client requires a uri');
  }

  const cache = new InMemoryCache({
    typePolicies: typePolicies ?? {},
  });

  // persistCacheSync({
  //   cache: cache,
  //   storage: new LocalStorageWrapper(internalCache.storage),
  // });

  const httpLink = new HttpLink({
    fetchOptions: {
      mode: 'cors',
    },
    uri,
    headers: {
      'Access-Control-Allow-Origin': 'true',
    },
  });

  const { token = null } = JSON.parse(localStorage.getItem(AUTH_TOKEN_CACHE_KEY) ?? '') as CachedToken;

  const authLink = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const link = ApolloLink.from([errorLink, httpLink]);
  const client = new ApolloClient({
    link: authLink.concat(link),
    cache,
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network',
    //   },
    // },
    connectToDevTools: true,
  });

  return client;
};
