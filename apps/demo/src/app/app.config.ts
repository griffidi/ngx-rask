import { authInterceptor } from '#/app/common/auth';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
      runCoalescing: true,
    }),
    provideRouter(
      [
        {
          path: '',
          loadComponent: () => import('./feature-layout/layout.component'),
          loadChildren: () => import('./feature-layout/layout.routes'),
        },
      ],
      withComponentInputBinding()
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAnimations(),
  ],
};
