import { injectIsServer } from '#/app/common/utils';
import { GetUserByUserNameDocument, type User } from '#/app/types/graphql';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_TOKEN_CACHE_KEY, AUTH_USER_CACHE_KEY, type CachedToken } from '@ngx-rask/core';
import { Client } from '@ngx-rask/graphql';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #client = inject(Client);
  readonly #isServer = injectIsServer();
  readonly #router = inject(Router);
  readonly #status = signal<AuthStatus>('idle');
  readonly #user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this.#status() === 'authenticated');
  readonly isAuthenticating = computed(() => this.#status() === 'idle');
  readonly user = this.#user.asReadonly();
  readonly userName = computed(() => this.#user()?.userName || '');

  /**
   * Refresh the user authentication status.
   *
   * @returns {Promise<void>} - A promise that resolves when the user is authenticated.
   */
  async refresh() {
    if (this.#isServer) return;

    const tokenRaw = localStorage.getItem(AUTH_TOKEN_CACHE_KEY);
    if (!tokenRaw) {
      this.#user.set(null);
      this.#status.set('unauthenticated');
      return;
    }

    const { userName = '' } = JSON.parse(tokenRaw) as CachedToken;
    const { user } = await this.#client.queryPromise(GetUserByUserNameDocument, { userName });

    this.#user.set(user as User);
    this.#status.set(user ? 'authenticated' : 'unauthenticated');
  }

  /**
   * Authenticate the user and redirect to the specified url.
   *
   * @param {string[]} urlSegments - The url segments to navigate to after authentication.
   */
  authenticate(urlSegments: string[] = ['/']) {
    this.refresh().then(() => this.#router.navigate(urlSegments));
  }

  /**
   * Logout the user and redirect to the home page.
   */
  logout() {
    this.#user.set(null);
    this.#status.set('unauthenticated');

    // reset cache
    if (!this.#isServer) {
      localStorage.removeItem(AUTH_TOKEN_CACHE_KEY);
      localStorage.removeItem(AUTH_USER_CACHE_KEY);
      // const { value: tokenValue } = useStorage(AUTH_TOKEN_CACHE_KEY);
      // tokenValue.set(null);

      // const { value: userValue } = useStorage(AUTH_USER_CACHE_KEY);
      // userValue.set(null);
    }

    this.#router.navigate(['/']);
  }
}
