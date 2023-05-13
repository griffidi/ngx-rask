import { authGuard } from '#/app/common/auth';
import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    canActivate: [authGuard('protected')],
    data: { animation: 'HomePage' },
    loadComponent: () => import('../home/home.component'),
    title: 'Home',
  },
  {
    path: 'login',
    canActivate: [authGuard('unprotected')],
    data: { animation: 'LoginPage' },
    loadComponent: () => import('../login/login.component'),
    title: 'Sign in',
  },
  {
    path: 'employees',
    canActivate: [authGuard('protected')],
    data: { animation: 'EmployeesPage' },
    loadChildren: () => import('../employees/routes'),
  },
  {
    path: 'products',
    canActivate: [authGuard('protected')],
    data: { animation: 'ProductsPage' },
    loadChildren: () => import('../products/routes'),
  },
] satisfies Routes;
