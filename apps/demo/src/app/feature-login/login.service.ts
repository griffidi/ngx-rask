import { AuthService } from '#/app/common/auth';
import { type ApiStatus, type LoginUser } from '#/app/common/models';
import { UserService } from '#/app/common/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { FormErrorsService } from '../common/form-errors';

@Injectable()
export class LoginService {
  readonly #userService = inject(UserService);
  readonly #authService = inject(AuthService);
  readonly #formErrorsService = inject(FormErrorsService);

  readonly #status = signal<ApiStatus>('idle');

  readonly isLoading = computed(() => this.#status() === 'loading');
  readonly errors = this.#formErrorsService.formErrors;

  login(data: LoginUser) {
    this.#status.set('loading');
    this.#userService
      .login({ body: { user: data } })
      .then(response => {
        this.#status.set('success');
        localStorage.setItem('ng-conduit-signals-token', response.user.token);
        localStorage.setItem('ng-conduit-signals-user', JSON.stringify(response.user));
        this.#authService.authenticate();
      })
      .catch(({ error }: HttpErrorResponse) => {
        this.#status.set('error');
        console.error('error login user: ', error);
        if (error.errors) {
          this.#formErrorsService.setErrors(error.errors);
        }
      });
  }
}
