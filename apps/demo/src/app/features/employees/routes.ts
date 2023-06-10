import { inject } from '@angular/core';
import type { Routes } from '@angular/router';
import { EmployeesService } from './shared/services';
import { EmployeesStore } from './store/employees.store';

export default [
  {
    path: '',
    loadComponent: () => import('./containers/employee-list/employee-list.component'),
    title: 'Employees',
    providers: [EmployeesService, EmployeesStore],
  },
  {
    path: ':id',
    title: ({ params }) => {
      const store = inject(EmployeesStore);
      store.setSelectedEmployeeId(params['id']);
      const { firstName, lastName } = store.selectedEmployee() ?? {};
      return `${firstName} ${lastName}`;
    },
    loadComponent: () => import('./containers/employee/employee.component'),
    providers: [EmployeesService, EmployeesStore],
  },
] satisfies Routes;
