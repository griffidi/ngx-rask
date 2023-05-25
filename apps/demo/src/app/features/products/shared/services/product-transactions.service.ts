import { type Pagination } from '#/app/common/*';
import {
  GetProductTransactionsByProductIdDocument,
  GetProductTransactionsCountByProductIdDocument,
  type ProductTransaction,
} from '#/app/types/graphql';
import { Injectable, inject, signal } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class ProductTransactionsService {
  #client = inject(Client);
  #productTransactions = signal<Pagination<ProductTransaction>>({
    data: [],
    totalCount: 0,
  });

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
    Promise.all([
      this.#loadProductTransactionsByProduct(pageIndex, pageSize, productId),
      this.#getProductTransactionsByProductCount(productId),
    ]).then(([{ productTransactions: data }, { productTransactionCountByProductId: count }]) => {
      this.#productTransactions.mutate(item => {
        item.data = data as ProductTransaction[];
        item.totalCount = parseInt(count ?? '0');
      });
    });
  }

  #loadProductTransactionsByProduct(pageIndex: number, pageSize: number, productId: string) {
    return this.#client.queryPromise(GetProductTransactionsByProductIdDocument, {
      take: pageSize,
      skip: pageIndex * pageSize,
      productId,
    });
    // .then(({ productTransactions }) =>
    //   this.#productTransactions.mutate(
    //     item => (item.data = productTransactions as ProductTransaction[])
    //   )
    // )
    // .catch(error => {
    //   // TODO: add toast and error handling
    //   console.error(error);
    // });
  }

  #getProductTransactionsByProductCount(productId: string) {
    return this.#client.queryPromise(GetProductTransactionsCountByProductIdDocument, { productId });
    // .then(({ productTransactionCountByProductId: count }) =>
    //   this.#productTransactions.mutate(item => (item.totalCount = parseInt(count ?? '0')))
    // )
    // .catch(error => {
    //   console.error(error);
    // });
  }
}
