import { authInterceptor } from '#/app/common/auth';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideCoreOptions } from '@ngx-rask/core';
import { provideApollo } from '@ngx-rask/graphql';
import { ApolloModule } from 'apollo-angular';
import { environment } from '../environments/environment';

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
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAnimations(),
    provideCoreOptions(),
    importProvidersFrom(ApolloModule),
    provideApollo({ uri: environment.graphqlUri }),
  ],
};
