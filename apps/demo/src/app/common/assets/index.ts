import { makeEnvironmentProviders, type EnvironmentProviders, type Provider } from '@angular/core';
import { ASSETS_PATH_TOKEN } from './assets-path-token';
import { IMAGE_PATH_TOKEN } from './image-path-token';

interface AsssetOptions {
  path: string;
}

/**
 * Provide assets resources.
 */
export function provideAssets(options: AsssetOptions): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: ASSETS_PATH_TOKEN,
      useValue: options.path,
    },
    {
      provide: IMAGE_PATH_TOKEN,
      useValue: `${options.path}/images`,
    },
  ];

  return makeEnvironmentProviders(providers);
}

export { ASSETS_PATH_TOKEN, IMAGE_PATH_TOKEN };
