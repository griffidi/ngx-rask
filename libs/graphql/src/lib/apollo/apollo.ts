import { inject, isDevMode } from '@angular/core';
import { InMemoryCache, type ApolloClientOptions } from '@apollo/client/core';
import { type HttpLink } from 'apollo-angular/http';
import { createUploadLink } from 'apollo-upload-client';
import { GRAPHQL_URI_TOKEN } from '../graphql-uri-token';

/**
 * Create Apollo Client Options. The intent of this function
 * is to be used in a provider factory.
 *
 * @param {HttpLink} httpLink The HttpLink service.cd ..
 * @returns {ApolloClientOptions<any>} The Apollo Client Options.
 */
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const uri = inject(GRAPHQL_URI_TOKEN);

  // BUG: This is not the proper way to create a Link.
  // However, all HTTP request using apollo-angular are successful even though the following
  // warning outputted to the console:
  // Error: You are calling concat on a terminating link, which will have no effect.
  const httpLinkHandler = httpLink.create({ uri });
  const link = httpLinkHandler.concat(
    createUploadLink({
      headers: {
        'Apollo-Require-Preflight': 'true',
      },
    })
  );

  // const uploadLink = createUploadLink({
  //   headers: {
  //     'Apollo-Require-Preflight': 'true',
  //   },
  // });

  // const link = uploadLink.concat(httpLink.create({ uri }));

  // const link = httpLink.create({ uri });

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
