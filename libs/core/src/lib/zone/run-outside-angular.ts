import { NgZone, inject } from '@angular/core';
import { Subject, Subscription, finalize, type Observable } from 'rxjs';

/**
 * RxJs operator that runs outside the Angular zone.
 *
 * @description
 * This operator is from an article by Brecht Billiet (https://twitter.com/brechtbilliet).
 *
 * Running Outputs outside zone.js for Angular performance Optimization
 * @see https://blog.simplified.courses/running-outputs-outside-zonejs-for-angular-performance-optimization/
 *
 * @example
 * ```ts
 * fromEvent(document, 'click')
 *  .pipe(
 *    runOutsideAngular(),
 *    tap(() => console.log('Clicked!'))
 *  ).subscribe();
 * ```
 */
export const runOutsideAngular =
  <T>() =>
  (source$: Observable<T>) => {
    // Get access to ngZone
    const ngZone = inject(NgZone);

    // Create a subject of the same generic type
    // as the source observable
    const sub$$ = new Subject<T>();

    // Declare the subscription here, we need to clean it up later
    let subscription: Subscription;

    // Run the actual subscription that executes an
    // addEventListener outside of Angular, so that
    // Change Detection won't be triggered automatically
    ngZone.runOutsideAngular(() => {
      subscription = source$.subscribe(sub$$);
    });

    // Return the subject but be sure to unsubscribe from
    // the source observable when the subject completes
    // or errors
    return sub$$.pipe(
      finalize(() => {
        subscription.unsubscribe();
      })
    );
  };
