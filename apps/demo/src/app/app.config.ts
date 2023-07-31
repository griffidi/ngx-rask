import { provideAssets } from '#/app/common/assets';
import { authInterceptor } from '#/app/common/auth';
import { searchOptions } from '#/app/common/command-palette';
import cssVariables from '#/app/styles/variables';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  importProvidersFrom,
  provideZoneChangeDetection,
  type ApplicationConfig,
} from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { provideCommandPalette, provideFileUpload } from '@ngx-rask/components';
import { provideCoreOptions, provideXhrFactory } from '@ngx-rask/core';
import { provideGraphQL } from '@ngx-rask/graphql';
import { provideToastr } from 'ngx-toastr';
import { environment } from '../environments/environment';
import routes from './features/layout/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: NgZone, useClass: ɵNoopNgZone },
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
    provideXhrFactory(),
    provideCoreOptions(),
    provideGraphQL({ uri: `${environment.apiUrl}/graphql` }),
    provideAssets({ path: environment.assetsPath }),
    provideCommandPalette({
      routes: routes.filter(({ path }) => path !== 'login'),
      searchOptions,
      offsetY: cssVariables.layout.header.blockSizeNumber,
    }),
    provideFileUpload(`${environment.apiUrl}/public`),
    provideToastr(),
    importProvidersFrom(MatNativeDateModule),
  ],
};
