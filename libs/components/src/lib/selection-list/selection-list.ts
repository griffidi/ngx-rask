import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule, type ControlValueAccessor } from '@angular/forms';
import { MatListModule, MatListOption, MatSelectionListChange } from '@angular/material/list';
import { RxFor } from '@rx-angular/template/for';

export interface RkSelectionListOption {
  id: string;
  label: string;
  selected?: boolean;
}

export interface RkListOption<T = string> extends MatListOption {
  value: T;
}

@Component({
  selector: 'rk-selection-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatListModule, RxFor],
  styles: [``],
  template: `
    <mat-selection-list
      [disabled]="disabled"
      [multiple]="multiple"
      (selectionChange)="onSelectionChange($event)">
      <mat-list-option
        *rxFor="let option of _options(); trackBy: 'id'"
        [value]="option.id"
        [selected]="option.selected">
        {{ option.label }}
      </mat-list-option>
    </mat-selection-list>
  `,
})
export class RkSelectionList implements ControlValueAccessor {
  @Input()
  set options(value: RkSelectionListOption[]) {
    this._options.set(value);
  }
  get options() {
    return this._options();
  }
  protected _options = signal<RkSelectionListOption[]>([]);

  @Input() multiple = false;

  @Input()
  set selectedOptions(value: RkListOption[]) {
    // BUG: user selectionlistion triggers this setter twice.
    this._selectedOptions.set(value);
    this.selectedOptionsChange.emit(value);
    this.onChange(value);
  }
  get selectedOptions() {
    return this._selectedOptions();
  }
  protected _selectedOptions = signal<RkListOption[]>([]);

  onChange = (_value: RkListOption[]) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  @Output() readonly selectedOptionsChange = new EventEmitter<RkListOption[]>();
  @Output() readonly selectionListChange = new EventEmitter<MatSelectionListChange>();

  writeValue(value: RkListOption[]) {
    this._selectedOptions.set(value);
  }

  registerOnChange(onChange: (value: RkListOption[]) => void) {
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

  protected onSelectionChange(event: MatSelectionListChange) {
    this.selectedOptions = event.options;
  }
}
