import type { Employees } from './employee';
import type { EmployeeFilter } from './employee-filter';

export type EmployeesState = {
  loading: boolean;
  employees: Employees;
  query: EmployeeFilter;
  selectedEmployeeId: string;
};

export const initialEmployeesState: EmployeesState = {
  loading: false,
  employees: [],
  query: {
    departmentIds: [],
  },
  selectedEmployeeId: '',
};
