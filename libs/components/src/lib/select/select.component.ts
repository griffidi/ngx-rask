import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { RxFor } from '@rx-angular/template/for';

export interface RkSelectOption {
  id: string;
  label: string;
}

@Component({
  selector: 'rk-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSelectModule, NgIf, RxFor],
  styles: [``],
  template: `
    <mat-form-field>
      <mat-label>{{ _label() }}</mat-label>
      <mat-select [(value)]="value">
        <mat-option
          *rxFor="let option of _options(); trackBy: 'id'"
          [value]="option.id">
          {{ option.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class RkSelect implements ControlValueAccessor {
  @Input()
  set label(value: string) {
    this._label.set(value);
  }
  get label() {
    return this._label();
  }
  protected _label = signal<string>('');

  @Input()
  set options(value: RkSelectOption[]) {
    this._options.set(value);
  }
  get options() {
    return this._options();
  }
  protected _options = signal<RkSelectOption[]>([]);

  @Input()
  set value(value: string | null) {
    // BUG: user selection triggers this setter twice.
    this._value.set(value);
    this.valueChange.emit(value);
    this.onChange(value);
    this.selectionChange.emit(new MatSelectChange(this._matSelect, value));
  }
  get value() {
    return this._value();
  }
  protected _value = signal<string | null>(null);

  onChange = (_value: string | null) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  @Output() readonly selectionChange = new EventEmitter<MatSelectChange>();
  @Output() readonly valueChange = new EventEmitter<string | null>();

  @ViewChild(MatSelect) private _matSelect!: MatSelect;

  writeValue(value: string | null) {
    this._value.set(value);
  }

  registerOnChange(onChange: (value: string | null) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => {}): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
