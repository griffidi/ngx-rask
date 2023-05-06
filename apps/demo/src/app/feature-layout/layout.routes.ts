import type { Routes } from '@angular/router';
import { authGuard } from '../common/auth/auth.guard';

export default [
  {
    path: '',
    canMatch: [authGuard('protected')],
    loadComponent: () => import('../feature-home/home.component'),
    data: { revalidate: 60 },
    title: 'Home',
  },
  {
    path: 'login',
    canMatch: [authGuard('unprotected')],
    loadComponent: () => import('../feature-login/login.component'),
    data: { revalidate: 60 },
    title: 'Sign in',
  },
] satisfies Routes;
