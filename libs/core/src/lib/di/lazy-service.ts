import { Injector, Type, inject } from '@angular/core';
import { Observable, defer } from 'rxjs';

/**
 * Lazy load service.
 *
 * @param {() => Promise<Type<T>>} loader The loader function.
 * @returns {Observable<T>} An observable of the loaded service.
 */
export function lazyService<T>(loader: () => Promise<Type<T>>): Observable<T> {
  const injector = inject(Injector);

  return defer(() => {
    return loader().then(service => injector.get(service));
  });
}
