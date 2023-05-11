import type { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./employee-list/employee-list.component'),
    title: 'Employees',
  },
  {
    path: ':id',
    loadComponent: () => import('./employee/employee.component'),
    title: 'Employee',
  },
] satisfies Routes;
