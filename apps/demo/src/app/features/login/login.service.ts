import { AuthService } from '#/app/common/auth';
import { FormErrorsService } from '#/app/common/form-errors';
import { type ApiStatus, type LoginUser } from '#/app/common/models';
import { LoginDocument } from '#/app/types/graphql';
import { Injectable, computed, inject, signal } from '@angular/core';
import { AUTH_TOKEN_CACHE_KEY, type CachedToken } from '@ngx-rask/core';
import { Apollo } from 'apollo-angular';
import { catchError, map, take, tap } from 'rxjs';

@Injectable()
export class LoginService {
  readonly #apollo = inject(Apollo);
  readonly #authService = inject(AuthService);
  // readonly #cache = inject(Cache);
  readonly #formErrorsService = inject(FormErrorsService);
  readonly #status = signal<ApiStatus>('idle');

  readonly errors = this.#formErrorsService.formErrors;
  readonly isLoading = computed(() => this.#status() === 'loading');

  login(user: LoginUser) {
    this.#status.set('loading');

    const { userName, password } = user;

    this.#apollo
      .query({ query: LoginDocument, variables: { userName, password } })
      .pipe(
        take(1),
        map(({ data }) => data.login),
        tap(token => {
          if (!token) {
            throw new Error('Invalid user name or password');
          }

          const cachedToken: CachedToken = { token, userName };

          localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(cachedToken));
          this.#status.set('success');
          this.#authService.authenticate();
        }),
        catchError(error => {
          this.#status.set('error');
          this.#formErrorsService.setErrors(error);
          return [];
        })
      )
      .subscribe();
  }
}
