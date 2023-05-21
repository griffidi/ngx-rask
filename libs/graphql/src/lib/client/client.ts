import { Injectable, inject } from '@angular/core';
import type { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, tap } from 'rxjs/operators';

/**
 * GraphQL Client. This is a wrapper around the Apollo Client.
 */
@Injectable({ providedIn: 'root' })
export class Client {
  #apollo = inject(Apollo);

  /**
   * Mutate GraphQL API.
   *
   * @param {DocumentNode | TypedDocumentNode<T, V>} mutation Mutation document.
   * @param {V} variables Mutation variables.
   *
   * @returns {Promise<T>} The unwrapped mutation result.
   */
  async mutate<T, V = OperationVariables>(
    mutation: DocumentNode | TypedDocumentNode<T, V>,
    variables?: V
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.#apollo
        .mutate({ mutation, variables })
        .pipe(
          map(({ data }) => data),
          tap(data => resolve(data as unknown as T)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }

  /**
   * Query GraphQL API.
   *
   * @param {DocumentNode | TypedDocumentNode<T, V>} query Query document.
   * @param {V} variables Query variables.
   *
   * @returns {Promise<T>} The unwrapped query result.
   */
  async query<T, V = OperationVariables>(
    query: DocumentNode | TypedDocumentNode<T, V>,
    variables?: V
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      this.#apollo
        .query({ query, variables })
        .pipe(
          map(({ data }) => data),
          tap(data => resolve(data)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
