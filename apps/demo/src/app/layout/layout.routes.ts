import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../feature-home/home.component'),
    data: { revalidate: 60 },
    title: 'Home',
  },
] satisfies Routes;
