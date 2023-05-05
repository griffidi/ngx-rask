import { Injectable, computed, signal } from '@angular/core';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #status = signal<AuthStatus>('idle');

  readonly isAuthenticated = computed(() => this.#status() === 'authenticated');
  readonly isAuthenticating = computed(() => this.#status() === 'idle');
}
