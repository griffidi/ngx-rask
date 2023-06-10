import { GetDepartmentsDocument } from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import type { Departments } from '../models';

@Injectable()
export class DepartmentService {
  #client = inject(Client);

  /**
   * Load all departments.
   *
   * @returns {Promise<Departments>} The departments.
   */
  getDepartments(): Promise<Departments> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetDepartmentsDocument)
        .pipe(
          map(({ departments }) => departments as Departments),
          tap(departments => resolve(departments)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
