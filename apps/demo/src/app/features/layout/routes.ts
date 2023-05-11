import { authGuard } from '#/app/common/auth';
import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    canActivate: [authGuard('protected')],
    loadComponent: () => import('../home/home.component'),
    title: 'Home',
  },
  {
    path: 'login',
    canActivate: [authGuard('unprotected')],
    loadComponent: () => import('../login/login.component'),
    title: 'Sign in',
  },
  {
    path: 'employees',
    canActivate: [authGuard('protected')],
    loadChildren: () => import('../employees/routes'),
  },
  {
    path: 'products',
    canActivate: [authGuard('protected')],
    loadChildren: () => import('../products/routes'),
  },
] satisfies Routes;
