import { AuthService } from '#/app/common/auth';
import { FormErrorsService } from '#/app/common/form-errors';
import { type ApiStatus, type LoginUser } from '#/app/common/models';
import { Injectable, computed, inject, signal } from '@angular/core';

@Injectable()
export class LoginService {
  readonly #authService = inject(AuthService);
  readonly #formErrorsService = inject(FormErrorsService);
  readonly #status = signal<ApiStatus>('idle');

  readonly errors = this.#formErrorsService.formErrors;
  readonly isLoading = computed(() => this.#status() === 'loading');

  login(data: LoginUser) {
    this.#status.set('loading');

    setTimeout(() => {
      this.#status.set('success');
      localStorage.setItem('auth-token', 'fake-token');
      localStorage.setItem('auth-user', JSON.stringify(data));
      this.#authService.authenticate();
    }, 1000);
  }
}
