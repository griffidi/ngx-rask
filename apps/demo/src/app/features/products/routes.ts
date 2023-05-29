import { inject } from '@angular/core';
import type { Routes } from '@angular/router';
import { ProductTransactionsService, ProductsService } from './shared/services';
import { productTransactionsStore, productsStore } from './store';

export default [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component'),
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
  {
    path: ':id/edit',
    title: 'Product Edit',
    loadComponent: () => import('./containers/product-edit/product-edit.component'),
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
  {
    path: ':id',
    title: ({ params }) => {
      const store = inject(productsStore);
      store.setSelectedProductId(params['id']);
      return store.selectedProduct()?.name ?? '';
    },
    loadComponent: () => import('./product/product.component'),
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
] satisfies Routes;
