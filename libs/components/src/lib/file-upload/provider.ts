import { makeEnvironmentProviders, type EnvironmentProviders, type Provider } from '@angular/core';
import { FILE_UPLOAD_URI } from './file-upload.token';

export function provideFileUpload(uri: string): EnvironmentProviders {
  const providers: Provider[] = [
    {
      provide: FILE_UPLOAD_URI,
      useValue: uri,
    },
  ];

  return makeEnvironmentProviders(providers);
}
