import { GetProductByIdDocument, GetProductsDocument, type Product } from '#/app/types/graphql';
import { Injectable, inject, signal } from '@angular/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class ProductsService {
  #client = inject(Client);
  #isLoadingProduct = signal(false);
  #isLoadingProducts = signal(false);
  #product = signal<Product | null>(null);
  #products = signal<Product[]>([]);

  /**
   * Readonly product loading state.
   */
  get isLoadingProduct() {
    return this.#isLoadingProduct.asReadonly();
  }

  /**
   * Readonly products loading state.
   */
  get isLoadingProducts() {
    return this.#isLoadingProducts.asReadonly();
  }

  /**
   * Readonly product.
   */
  get product() {
    return this.#product.asReadonly();
  }

  /**
   * Readonly products.
   */
  get products() {
    return this.#products.asReadonly();
  }

  /**
   * Load all products.
   */
  loadProducts() {
    this.#isLoadingProducts.set(true);

    this.#client
      .query(GetProductsDocument)
      .then(({ products }) => this.#products.set(products as Product[]))
      .catch(error => {
        // TODO: add toast and error handling
        console.error(error);
      })
      .finally(() => this.#isLoadingProducts.set(false));
  }

  /**
   * Load product by id.
   *
   * @param {string} id The product id.
   */
  loadProductById(id: string) {
    this.#isLoadingProduct.set(true);

    this.#client
      .query(GetProductByIdDocument, { id })
      .then(({ product }) => this.#product.set(product as Product))
      .catch(error => {
        // TODO: add toast and error handling
        console.error(error);
      })
      .finally(() => this.#isLoadingProduct.set(false));
  }
}
