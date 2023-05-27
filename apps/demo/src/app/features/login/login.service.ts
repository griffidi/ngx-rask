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
    const { login: token } = await this.#client.mutate(LoginDocument, { userName, password });

    if (token) {
      const cachedToken: CachedToken = { token, userName };

      localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(cachedToken));
      // this.#authToken.set(cachedToken);
      this.#status.set('success');
      this.#authService.authenticate();
    }

    this.#status.set('error');
  }
}
