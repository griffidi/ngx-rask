import type { Routes } from '@angular/router';
import { ProductTransactionsService, ProductsService } from './shared/services';
import { productTransactionsStore, productsStore } from './store';

export default [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component'),
    title: 'Products',
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
  // {
  //   path: 'sales',
  //   loadComponent: () => import('./product-sales/product-sales.component'),
  //   title: 'Product Sales',
  // },
  {
    path: ':id/edit',
    loadComponent: () => import('./containers/product-edit/product-edit.component'),
    title: 'Product Edit',
    providers: [ProductsService, productsStore],
  },
  {
    path: ':id',
    loadComponent: () => import('./product/product.component'),
    title: 'Product',
    providers: [
      ProductsService,
      ProductTransactionsService,
      productsStore,
      productTransactionsStore,
    ],
  },
] satisfies Routes;
