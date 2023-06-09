import {
  GetEmployeeByIdDocument,
  GetEmployeesDocument,
  UpdateEmployeeDocument,
  type Employee,
  type EmployeeUpdateInput,
} from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import type { EmployeeFilter, Employees } from '../models';

/**
 * BUG: for some reason /employee route requires this even though
 * it's listed as a provider for the route.
 */
@Injectable({ providedIn: 'root' })
export class EmployeesService {
  #client = inject(Client);

  /**
   * Load all employees using filter.
   *
   * @param {EmployeeFilter} filter Filter object.
   * @returns {Promise<Employee>} The employees.
   */
  getEmployeesByQuery(_filter?: EmployeeFilter) {
    // const { departmentIds } = filter ?? {};

    // if (departmentIds?.length) {
    //   return this.getEmployeesByDepartmentId(departmentId);
    // }

    return this.getEmployees();
  }

  /**
   * Load all employees.
   *
   * @returns {Promise<Employee>} The employees.
   */
  getEmployees(): Promise<Employees> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetEmployeesDocument)
        .pipe(
          map(({ employees }) => employees as Employees),
          tap(employees => resolve(employees)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }

  /**
   * Update employee.
   *
   * @param {Employee} employee Employee object to update.
   * @returns {Promise<boolean>} True if the employee was updated successfully.
   */
  updateEmployee(employee: Employee): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.#client
        .mutate(UpdateEmployeeDocument, {
          id: employee.id,
          employee: employee as any as EmployeeUpdateInput,
        })
        .pipe(
          tap(() => resolve(true)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }

  // /**
  //  * Load all employees by department id.
  //  *
  //  * @param {string} departmentId The department id.
  //  * @returns {Promise<Employee>} The employees.
  //  */
  // getEmployeesByDepartmentId(departmentIds: string[]): Promise<Employees> {
  //   return new Promise((resolve, reject) => {
  //     this.#client
  //       .query(GetEmployeesByDepartmentIdDocument, { departmentId })
  //       .pipe(
  //         map(({ employees }) => employees as Employees),
  //         tap(employees => resolve(employees)),
  //         catchError(error => {
  //           reject(error);
  //           return [];
  //         })
  //       )
  //       .subscribe();
  //   });
  // }

  /**
   * Load employee by id.
   *
   * @param {string} id The employee id.
   * @returns {Promise<Employee>} The employee.
   */
  getEmployeeById(id: string): Promise<Employee> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetEmployeeByIdDocument, { id })
        .pipe(
          map(({ employee }) => employee as Employee),
          tap(employee => resolve(employee)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
