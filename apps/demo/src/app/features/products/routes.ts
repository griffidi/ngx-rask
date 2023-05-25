import type { Routes } from '@angular/router';
import { ProductsService } from './shared/services';
import { productsStore } from './store';

export default [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component'),
    title: 'Products',
    providers: [ProductsService, productsStore],
  },
  {
    path: 'sales',
    loadComponent: () => import('./product-sales/product-sales.component'),
    title: 'Product Sales',
  },
  {
    path: ':id',
    loadComponent: () => import('./product/product.component'),
    title: 'Product',
    providers: [ProductsService, productsStore],
  },
] satisfies Routes;
