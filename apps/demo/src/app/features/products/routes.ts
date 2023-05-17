import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list.component'),
    title: 'Products',
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
  },
] satisfies Routes;
