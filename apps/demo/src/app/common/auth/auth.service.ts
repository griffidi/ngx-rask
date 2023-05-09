import type { User } from '#/app/common/models';
import { injectIsServer } from '#/app/common/utils';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_TOKEN_CACHE_KEY, AUTH_USER_CACHE_KEY, Cache } from '@ngx-rask/core';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #cache = new Cache();
  readonly #isServer = injectIsServer();
  readonly #router = inject(Router);
  readonly #status = signal<AuthStatus>('idle');
  readonly #user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this.#status() === 'authenticated');
  readonly isAuthenticating = computed(() => this.#status() === 'idle');
  readonly user = this.#user.asReadonly();
  readonly username = computed(() => this.#user()?.username || '');

  async refresh() {
    if (this.#isServer) return;

    const token = localStorage.getItem(AUTH_TOKEN_CACHE_KEY);
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

    const user = JSON.parse(localStorage.getItem(AUTH_USER_CACHE_KEY) || 'null');

    this.#user.set(user);
    this.#status.set(user ? 'authenticated' : 'unauthenticated');
    localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(null));
  }

  authenticate(urlSegments: string[] = ['/']) {
    this.refresh().then(() => this.#router.navigate(urlSegments));
  }

  logout() {
    this.#user.set(null);
    this.#status.set('unauthenticated');
    this.#router.navigate(['/']);

    if (!this.#isServer) {
      this.#cache.remove(AUTH_TOKEN_CACHE_KEY);
      this.#cache.remove(AUTH_USER_CACHE_KEY);
    }
  }
}
