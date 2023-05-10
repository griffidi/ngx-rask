import { type Provider } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const MAT_FORM_FIELDS: Provider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {
    appearance: 'outline',
  },
};
