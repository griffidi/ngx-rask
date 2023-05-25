import { GetSizesDocument, type Size } from '#/app/types/graphql';
import { Injectable, inject, signal } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class SizesService {
  #client = inject(Client);
  #isLoadingSizes = signal(false);
  #sizes = signal<Size[]>([]);

  /**
   * Readonly sizes loading state.
   */
  get isLoadingSizes() {
    return this.#isLoadingSizes.asReadonly();
  }

  /**
   * Readonly sizes..
   */
  get sizes() {
    return this.#sizes.asReadonly();
  }

  loadSizes() {
    this.#isLoadingSizes.set(true);

    this.#client
      .queryPromise(GetSizesDocument)
      .then(({ sizes }) => this.#sizes.set(sizes as Size[]))
      .catch(error => {
        // TODO: add toast and error handling
        console.error(error);
      })
      .finally(() => this.#isLoadingSizes.set(false));
  }
}
