import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthService } from './auth.service';

export function authGuard(type: 'protected' | 'unprotected') {
  return () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    return toObservable(authService.isAuthenticated).pipe(
      filter(() => !authService.isAuthenticating()),
      map(isAuthenticated => {
        if ((type === 'unprotected' && !isAuthenticated) || (type === 'protected' && isAuthenticated)) {
          return true;
        }

        return router.navigate(['/login']);
      })
    );
  };
}
