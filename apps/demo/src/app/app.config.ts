import { authInterceptor } from '#/app/common/auth';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
} from '@angular/router';

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
          loadComponent: () => import('./features/layout/layout.component'),
          loadChildren: () => import('./features/layout/layout.routes'),
        },
      ],
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAnimations(),
  ],
};
