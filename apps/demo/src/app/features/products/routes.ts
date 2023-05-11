import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component'),
    title: 'Products',
  },
  {
    path: ':id',
    loadComponent: () => import('./product/product.component'),
    title: 'Product',
  },
] satisfies Routes;
