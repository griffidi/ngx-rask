import { AuthService } from '#/app/common/auth';
import { FormErrorsService } from '#/app/common/form-errors';
import { type ApiStatus, type LoginUser } from '#/app/common/models';
import { LoginDocument } from '#/app/types/graphql';
import { Injectable, computed, inject, signal } from '@angular/core';
import { AUTH_TOKEN_CACHE_KEY, type CachedToken } from '@ngx-rask/core';
import { Client } from '@ngx-rask/graphql';

@Injectable()
export class LoginService {
  // readonly #authToken: WritableSignal<CachedToken | null>;
  readonly #client = inject(Client);
  readonly #authService = inject(AuthService);
  // readonly #cache = inject(Cache);
  readonly #formErrorsService = inject(FormErrorsService);
  readonly #status = signal<ApiStatus>('idle');

  readonly errors = this.#formErrorsService.formErrors;
  readonly isLoading = computed(() => this.#status() === 'loading');

  // constructor() {
  //   const { value } = useStorage<CachedToken>(AUTH_TOKEN_CACHE_KEY);
  //   this.#authToken = value;
  // }

  async login(user: LoginUser) {
    this.#status.set('loading');

    const { userName, password } = user;
    const { login: token } = await this.#client.query(LoginDocument, { userName, password });

    if (token) {
      const cachedToken: CachedToken = { token, userName };

      localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(cachedToken));
      // this.#authToken.set(cachedToken);
      this.#status.set('success');
      this.#authService.authenticate();
    }

    this.#status.set('error');
    // this.#formErrorsService.setErrors(new Error('Invalid user name or password'));

    // this.#client
    //   .query({ query: LoginDocument, variables: { userName, password } })
    //   .pipe(
    //     take(1),
    //     map(({ data }) => data.login),
    //     tap(token => {
    //       if (!token) {
    //         throw new Error('Invalid user name or password');
    //       }

    //       const cachedToken: CachedToken = { token, userName };

    //       localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(cachedToken));
    //       this.#status.set('success');
    //       this.#authService.authenticate();
    //     }),
    //     catchError(error => {
    //       this.#status.set('error');
    //       this.#formErrorsService.setErrors(error);
    //       return [];
    //     })
    //   )
    //   .subscribe();
  }
}
