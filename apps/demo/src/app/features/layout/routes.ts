import { authGuard } from '#/app/common/auth';
import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Home',
    canActivate: [authGuard('protected')],
    data: { animation: 'HomePage' },
    loadComponent: () => import('../home/home.component'),
  },
  {
    path: 'login',
    title: 'Sign in',
    canActivate: [authGuard('unprotected')],
    data: { animation: 'LoginPage' },
    loadComponent: () => import('../login/login.component'),
  },
  {
    path: 'employees',
    title: 'Employees',
    canActivate: [authGuard('protected')],
    data: { animation: 'EmployeesPage' },
    loadChildren: () => import('../employees/routes'),
  },
  {
    path: 'products',
    title: 'Products',
    canActivate: [authGuard('protected')],
    data: { animation: 'ProductsPage' },
    loadChildren: () => import('../products/routes'),
  },
] satisfies Routes;
