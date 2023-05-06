import { authGuard } from '#/app/common/auth';
import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    canActivate: [authGuard('protected')],
    loadComponent: () => import('../feature-home/home.component'),
    data: { revalidate: 60 },
    title: 'Home',
  },
  {
    path: 'login',
    canActivate: [authGuard('unprotected')],
    loadComponent: () => import('../feature-login/login.component'),
    data: { revalidate: 60 },
    title: 'Sign in',
  },
] satisfies Routes;
