import { GetLocationStatesDocument } from '#/app/types/graphql';
import { Injectable, inject } from '@angular/core';
import { Client } from '@ngx-rask/graphql';
import { catchError, map, tap } from 'rxjs';
import type { LocationStates } from '../models';

@Injectable()
export class LocationStateService {
  #client = inject(Client);

  /**
   * Load all location states.
   *
   * @returns {Promise<LocationStates>} Location states.
   */
  getLocationStates(): Promise<LocationStates> {
    return new Promise((resolve, reject) => {
      this.#client
        .query(GetLocationStatesDocument)
        .pipe(
          map(({ locationStates }) => locationStates as LocationStates),
          tap(locationStates => resolve(locationStates)),
          catchError(error => {
            reject(error);
            return [];
          })
        )
        .subscribe();
    });
  }
}
