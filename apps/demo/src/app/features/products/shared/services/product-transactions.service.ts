import {
  GetProductTransactionsByProductIdDocument,
  GetProductTransactionsCountByProductIdDocument,
} from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import type { ProductTransactions } from '../models';

@Injectable()
export class ProductTransactionsService {
  client = inject(Client);

  /**
   * Get product transactions.
   *
   * @param {number} pageIndex Page index of results.
   * @param {number} pageSize Page size of results.
   * @param {string} productId Product id to get transactions for.
   */
  getProductTransactionsByProductId(
    pageIndex: number,
    pageSize: number,
    productId: string
  ): Promise<ProductTransactions> {
    return new Promise((resolve, reject) => {
      this.client
        .query(GetProductTransactionsByProductIdDocument, {
          take: pageSize,
          skip: pageIndex * pageSize,
          productId,
        })
        .pipe(
          map(({ productTransactions }) => productTransactions as ProductTransactions),
          tap(productTransactions => resolve(productTransactions)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }

  /**
   * Get product transactions count.
   *
   * @param {string} productId Product id to get transactions for.
   * @returns {Promise<number>} The number of transactions for the product.
   */
  getProductTransactionsByProductCount(productId: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client
        .query(GetProductTransactionsCountByProductIdDocument, { productId })
        .pipe(
          map(({ productTransactionCountByProductId }) =>
            parseInt(productTransactionCountByProductId ?? '0')
          ),
          tap(productTransactionsCount => resolve(productTransactionsCount)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
