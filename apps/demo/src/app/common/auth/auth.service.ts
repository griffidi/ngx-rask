import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { User } from '../models';
import { injectIsServer } from '../utils';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // readonly #userService = inject(UserService);
  readonly #router = inject(Router);
  readonly #isServer = injectIsServer();
  readonly #user = signal<User | null>(null);
  readonly #status = signal<AuthStatus>('idle');

  readonly isAuthenticated = computed(() => this.#status() === 'authenticated');
  readonly isAuthenticating = computed(() => this.#status() === 'idle');
  readonly user = this.#user.asReadonly();
  readonly username = computed(() => this.#user()?.username || '');

  async refresh() {
    if (this.#isServer) return;

    const token = localStorage.getItem('auth-token');
    if (!token) {
      this.#user.set(null);
      this.#status.set('unauthenticated');
      return;
    }

    // const currentUserResponse = await this.#userAndAuthenticationApiClient
    //   .getCurrentUser()
    //   .catch(({ error }: HttpErrorResponse) => {
    //     console.error(`error refreshing user -->`, error);
    //     this.#user.set(null);
    //     return { user: null };
    //   });

    this.#user.set(null);
    this.#status.set(null ? 'authenticated' : 'unauthenticated');
    localStorage.setItem('auth-token', JSON.stringify(null));
  }

  authenticate(urlSegments: string[] = ['/']) {
    this.refresh().then(() => this.#router.navigate(urlSegments));
  }
}
