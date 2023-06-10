import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
  signal,
} from '@angular/core';
import { FormsModule, type ControlValueAccessor } from '@angular/forms';
import type { ThemePalette } from '@angular/material/core';
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
      [color]="color"
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
  @Input() color: ThemePalette = 'accent';
  @Input({ transform: booleanAttribute }) multiple = false;

  @Input() set options(value: RkSelectionListOption[]) {
    this._options.set(value);
  }
  get options() {
    return this._options();
  }
  protected _options = signal<RkSelectionListOption[]>([]);

  /**
   * Selected list options. If `multiple` is `true`, then the array
   * will only ever have one option.
   */
  @Input()
  set selected(value: RkListOption[]) {
    this._selected.set(value);
    this.selectedChange.emit(value);
    this.onChange(value);
  }
  get selected() {
    return this._selected();
  }
  protected _selected = signal<RkListOption[]>([]);

  onChange = (_value: RkListOption[]) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  @Output() readonly selectedChange = new EventEmitter<RkListOption[]>();

  writeValue(value: RkListOption[]) {
    this._selected.set(value);
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

  /**
   * When list selection changes, get selected options from the list.
   */
  protected onSelectionChange({ source: { selectedOptions } }: MatSelectionListChange) {
    const { selected } = selectedOptions;
    this.selected = selected;
  }
}
