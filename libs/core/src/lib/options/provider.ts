import { makeEnvironmentProviders, type EnvironmentProviders } from '@angular/core';
import { MAT_ICON } from './defaults';

export const provideCoreOptions = (): EnvironmentProviders => {
  return makeEnvironmentProviders([MAT_ICON]);
};
