import { InjectionToken, PLATFORM_ID, inject } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  providedIn: 'root',
  factory: () => (inject(PLATFORM_ID) === 'browser' ? window : ({} as Window)),
});
