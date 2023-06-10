import { Directive, inject, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: 'form[model][suite]',
  standalone: true,
})
export class FormDirective<T> {
  readonly ngForm = inject(NgForm, { self: true });

  @Input() model!: T;
}
