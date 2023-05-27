import { provideAssets } from '#/app/common/assets';
import { authInterceptor } from '#/app/common/auth';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideZoneChangeDetection, type ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { provideCoreOptions } from '@ngx-rask/core';
import { provideGraphQL } from '@ngx-rask/graphql';
import { provideToastr } from 'ngx-toastr';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
      runCoalescing: true,
    }),
    provideRouter(
      [
        /**
         * The default route is the layout component. This is the
         * component that will be loaded when the application is
         * first loaded.
         */
        {
          path: '',
          loadComponent: () => import('./features/layout/layout.component'),
          loadChildren: () => import('./features/layout/routes'),
        },
      ],
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideAnimations(),
    provideToastr(),
    provideCoreOptions(),
    provideGraphQL({ uri: environment.graphqlUri }),
    provideAssets({ path: environment.assetsPath }),
  ],
};
