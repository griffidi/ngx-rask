import type { ApolloQueryResult, FetchResult } from '@apollo/client/core';

function unwrapResult<T extends object>(data: T | undefined | null): T | undefined | null {
  if (data) {
    const keys = Object.keys(data);

    // @ts-ignore(ts/7053)`
    return keys.length > 0 ? data[keys[0]] : data;
  }

  return data;
}

/**
 * Unwrap the result object from an ApolloClient mutate operation.
 *
 * @param {FetchResult<T>} result Mutate result object.
 * @returns {T} Unwrapped result object.
 */
export const unwrapMutateResult = <T extends object>(result: FetchResult<T> | undefined): T => {
  const { data } = result ?? {};
  return unwrapResult(data) as T;
};

/**
 * Unwrap the result object from an ApolloClient query operation.
 *
 * @param {ApolloQueryResult<T>} result Query result object.
 * @returns {T} Unwrapped result object.
 */
export const unwrapQueryResult = <T extends object>(result: ApolloQueryResult<T>): T | undefined | null => {
  const { data } = result;
  return unwrapResult(data);
};

/**
 * Extract the data result object from an ApolloClient query operation.
 *
 * @param {ApolloQueryResult<T>} result Query result object.
 * @returns {T} Extracted data object.
 */
export const extractDataFromQueryResult = <T>(result: ApolloQueryResult<T>): T => {
  const { data } = result;
  return data;
};
