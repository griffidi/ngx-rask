import { inject, isDevMode } from '@angular/core';
import { InMemoryCache, type ApolloClientOptions } from '@apollo/client/core';
import { type HttpLink } from 'apollo-angular/http';
import { createUploadLink } from 'apollo-upload-client';
import { GRAPHQL_URI_TOKEN } from '../graphql-uri-token';

/**
 * Create Apollo Client Options. The intent of this function
 * is to be used in a provider factory.
 *
 * @param {HttpLink} httpLink The HttpLink service.
 * @returns {ApolloClientOptions<any>} The Apollo Client Options.
 */
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const uri = inject(GRAPHQL_URI_TOKEN);
  const uploadLink = createUploadLink({ uri });
  const link = uploadLink.concat(httpLink.create({ uri }));

  return {
    cache: new InMemoryCache(),
    connectToDevTools: isDevMode(),
    // credentials: 'include',
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network',
    //   },
    // },
    headers: {
      'Access-Control-Allow-Origin': 'true',
    },
    link,
  };
}
