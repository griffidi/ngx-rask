import { type HttpLink } from 'apollo-angular/http';
import { createApollo } from './apollo';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('apollo', () => {
  it('test_create_apollo_returns_apollo_client_options', () => {
    const httpLink = {} as HttpLink;
    const result = createApollo(httpLink);
    expect(result).toHaveProperty('link');
    expect(result).toHaveProperty('cache');
  });

  // Tests that createApollo function throws an error when GRAPHQL_URI_TOKEN is not provided.
  it('test_create_apollo_with_missing_graphql_uri_token', () => {
    const httpLink = {} as HttpLink;
    expect(() => createApollo(httpLink)).toThrow();
  });
});
