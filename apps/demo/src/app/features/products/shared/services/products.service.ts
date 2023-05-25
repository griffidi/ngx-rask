import { GetProductByIdDocument, GetProductsDocument, type Product } from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import { type Products } from '../models';

@Injectable()
export class ProductsService {
  #client = inject(Client);

  /**
   * Load all products.
   *
   * @returns {Promise<Products>} The products.
   */
  loadProducts(): Promise<Products> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetProductsDocument)
        .pipe(
          map(({ products }) => products as Products),
          tap(products => resolve(products)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }

  /**
   * Load product by id.
   *
   * @param {string} id The product id.
   * @returns {Promise<Product>} The product.
   */
  loadProductById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetProductByIdDocument, { id })
        .pipe(
          map(({ product }) => product as Product),
          tap(product => resolve(product)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
