import { GetProductsDocument, type Product } from '#/app/types/graphql';
import { Injectable, inject, signal } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class ProductsService {
  #client = inject(Client);
  #products = signal<Product[]>([]);

  /**
   * Readonly products.
   */
  get products() {
    return this.#products.asReadonly();
  }

  loadProducts() {
    this.#client
      .query(GetProductsDocument)
      .then(({ products }) => this.#products.set(products as Product[]))
      .catch(error => {
        // TODO: add toast and error handling
        console.error(error);
      });
  }
}
