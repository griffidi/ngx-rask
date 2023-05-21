import {
  GetProductTransactionsByProductIdDocument,
  type ProductTransaction,
} from '#/app/types/graphql';
import { Injectable, inject, signal } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class ProductTransactionsService {
  #client = inject(Client);
  #productTransactions = signal<ProductTransaction[]>([]);

  /**
   * Readonly product transactions.
   */
  get productTransactions() {
    return this.#productTransactions.asReadonly();
  }

  /**
   * Load product transactions.
   *
   * @param {number} pageIndex Page index of results.
   * @param {number} pageSize Page size of results.
   * @param {string} productId Product id to get transactions for.
   */
  loadProductTransactionsByProduct(pageIndex: number, pageSize: number, productId: string) {
    this.#client
      .query(GetProductTransactionsByProductIdDocument, {
        take: pageSize,
        skip: pageIndex * pageSize,
        productId,
      })
      .then(({ productTransactions }) =>
        this.#productTransactions.set(productTransactions as ProductTransaction[])
      )
      .catch(error => {
        // TODO: add toast and error handling
        console.error(error);
      });
  }
}
