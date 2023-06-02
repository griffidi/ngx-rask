import type { Employees } from './employee';

export type EmployeesState = {
  loading: boolean;
  employees: Employees;
  selectedEmployeeId: string;
};

export const initialEmployeesState: EmployeesState = {
  loading: false,
  employees: [],
  selectedEmployeeId: '',
};
