import { AUTH_TOKEN_CACHE_KEY, AUTH_USER_CACHE_KEY, AuthService } from '#/app/common/auth';
import { FormErrorsService } from '#/app/common/form-errors';
import { type ApiStatus, type LoginUser } from '#/app/common/models';
import { Injectable, computed, inject, signal } from '@angular/core';

@Injectable()
export class LoginService {
  readonly #authService = inject(AuthService);
  // readonly #cache = inject(Cache);
  readonly #formErrorsService = inject(FormErrorsService);
  readonly #status = signal<ApiStatus>('idle');

  readonly errors = this.#formErrorsService.formErrors;
  readonly isLoading = computed(() => this.#status() === 'loading');

  login(data: LoginUser) {
    this.#status.set('loading');

    setTimeout(() => {
      this.#status.set('success');
      localStorage.setItem(AUTH_USER_CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(AUTH_TOKEN_CACHE_KEY, 'fake-token');
      // this.#cache.set(AUTH_USER_CACHE_KEY, data);
      // this.#cache.set(AUTH_TOKEN_CACHE_KEY, 'fake-token');
      this.#authService.authenticate();
    }, 1000);
  }
}
