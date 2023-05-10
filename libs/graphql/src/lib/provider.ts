import { makeEnvironmentProviders, type EnvironmentProviders, type Provider } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createApollo } from './apollo';
import { GRAPHQL_URI_TOKEN } from './graphql-uri-token';

export interface ApolloOptions {
  uri: string;
}

/**
 * Provide Apollo Client resources.
 *
 * @param {ApolloOptions} options The Apollo Options.
 * @returns {EnvironmentProviders} The Environment Providers.
 */
export const provideApollo = (options: ApolloOptions): EnvironmentProviders => {
  const providers: Provider[] = [
    {
      provide: GRAPHQL_URI_TOKEN,
      useValue: options.uri,
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ];

  return makeEnvironmentProviders(providers);
};
