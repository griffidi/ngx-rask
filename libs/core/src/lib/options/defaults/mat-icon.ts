import { type Provider } from '@angular/core';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';

export const MAT_ICON: Provider[] = [
  // {
  //   provide: APP_INITIALIZER,
  //   useFactory: () => () => {
  //     const registry = inject(MatIconRegistry);
  //     registry.registerFontClassAlias('','')
  //   },
  //   deps: [MatIconRegistry],
  // },
  {
    provide: MAT_ICON_DEFAULT_OPTIONS,
    useValue: {
      fontSet: 'material-symbols-outlined',
    },
  },
];
