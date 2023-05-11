import { type Provider } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, type MatFormFieldDefaultOptions } from '@angular/material/form-field';

export const MAT_FORM_FIELDS: Provider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {
    appearance: 'fill',
  } as MatFormFieldDefaultOptions,
};
