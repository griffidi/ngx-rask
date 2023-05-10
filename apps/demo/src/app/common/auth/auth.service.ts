import { injectIsServer } from '#/app/common/utils';
import { GetUserByUserNameDocument, type GetUserByUserNameQuery, type User } from '#/app/types/graphql';
import type { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import type { ApolloQueryResult } from '@apollo/client/core';
import { AUTH_TOKEN_CACHE_KEY, AUTH_USER_CACHE_KEY, Cache, type CachedToken } from '@ngx-rask/core';
import { Apollo } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #apollo = inject(Apollo);
  readonly #cache = new Cache();
  readonly #isServer = injectIsServer();
  readonly #router = inject(Router);
  readonly #status = signal<AuthStatus>('idle');
  readonly #user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this.#status() === 'authenticated');
  readonly isAuthenticating = computed(() => this.#status() === 'idle');
  readonly user = this.#user.asReadonly();
  readonly userName = computed(() => this.#user()?.userName || '');

  async refresh() {
    if (this.#isServer) return;

    const tokenRaw = localStorage.getItem(AUTH_TOKEN_CACHE_KEY);
    if (!tokenRaw) {
      this.#user.set(null);
      this.#status.set('unauthenticated');
      return;
    }
    ``;
    const { userName = '' } = JSON.parse(tokenRaw) as CachedToken;

    const currentUserResponse = (await firstValueFrom(
      this.#apollo.query({
        query: GetUserByUserNameDocument,
        variables: { userName },
      })
    ).catch(({ error }: HttpErrorResponse) => {
      console.error(`error refreshing user -->`, error);
      this.#user.set(null);
      return { user: null };
    })) as ApolloQueryResult<GetUserByUserNameQuery>;

    const user = currentUserResponse.data?.user as unknown as User;

    this.#user.set(user);
    this.#status.set(user ? 'authenticated' : 'unauthenticated');
    // localStorage.setItem(AUTH_TOKEN_CACHE_KEY, JSON.stringify(null));
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
