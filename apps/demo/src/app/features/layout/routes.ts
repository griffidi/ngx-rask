import { authGuard } from '#/app/common/auth';
import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Home',
    canActivate: [authGuard('protected')],
    data: { animation: 'HomePage', icon: 'home' },
    loadComponent: () => import('../home/home.component'),
  },
  {
    path: 'login',
    title: 'Sign in',
    canActivate: [authGuard('unprotected')],
    data: { animation: 'LoginPage', icon: 'security' },
    loadComponent: () => import('../login/login.component'),
  },
  {
    path: 'employees',
    title: 'Employees',
    canActivate: [authGuard('protected')],
    data: { animation: 'EmployeesPage', icon: 'people' },
    loadChildren: () => import('../employees/routes'),
  },
  {
    path: 'products',
    title: 'Products',
    canActivate: [authGuard('protected')],
    data: { animation: 'ProductsPage', icon: 'shopping_cart' },
    loadChildren: () => import('../products/routes'),
  },
] satisfies Routes;
