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
    providers: [ProductsService, productsStore],
  },
  {
    path: ':id',
    title: 'Product',
    loadComponent: () => import('./product/product.component'),
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
] satisfies Routes;
