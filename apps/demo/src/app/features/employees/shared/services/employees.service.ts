import { GetEmployeeByIdDocument, GetEmployeesDocument, type Employee } from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import type { Employees } from '../models';

@Injectable()
export class EmployeesService {
  #client = inject(Client);

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
