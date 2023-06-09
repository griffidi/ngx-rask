import { HttpEventType, type HttpProgressEvent } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RxUnpatch } from '@rx-angular/template/unpatch';
import { filter, finalize, map, tap } from 'rxjs';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'rk-file-upload',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatProgressSpinnerModule, RxUnpatch],
  providers: [FileUploadService],
  styles: [
    `
      input {
        display: none;
      }

      button {
        --_border-size: 0.3rem;
        --_border-color: var(--app-color-accent);

        border: var(--_border-size) solid transparent;
        border-image: conic-gradient(var(--_border-color) 0deg, transparent 90deg) 1;
      }
    `,
  ],
  template: `
    <button
      mat-flat-button
      color="primary"
      (click)="upload.click()">
      <!-- <mat-progress-bar
      mode="determinate"
      [value]="progress()" /> -->
      Upload
    </button>
    <!-- <mat-progress-spinner
      color="accent"
      value="90" /> -->

    <input
      #upload
      type="file"
      [unpatch]="['change']"
      [accept]="fileType"
      (change)="onFileChange($event)" />
  `,
})
export class RkFileUpload implements ControlValueAccessor {
  readonly #fileUploadService = inject(FileUploadService);

  protected readonly progress = signal<number>(0);

  @Input() fileType: string | undefined;

  @Input()
  set value(value: File | null) {
    this._value.set(value);
    this.valueChange.emit(value);
    this.onChange(value);
  }
  get value() {
    return this._value();
  }
  protected _value = signal<File | null>(null);

  onChange = (_value: File | null) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  @Output() readonly valueChange = new EventEmitter<File | null>();

  writeValue(value: File | null) {
    this._value.set(value);
  }

  registerOnChange(onChange: (value: File | null) => void) {
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

  protected onFileChange({ target }: Event) {
    const file = (target as HTMLInputElement).files?.[0];
    this.value = file ?? null;

    if (file) {
      this.#fileUploadService
        .upload(file)
        .pipe(
          filter(({ type }) => type === HttpEventType.UploadProgress),
          map(event => event as HttpProgressEvent), // this is only here b/c TypeScript doesn't allow converting the type
          tap(({ loaded, total }: HttpProgressEvent) =>
            this.progress.set(this.#calcProgress(loaded, total))
          ),
          finalize(() => this.#reset())
        )
        .subscribe();
    }
  }

  #calcProgress(loaded: number, total: number = 1) {
    return Math.round((loaded / total) * 100);
  }

  #reset() {
    this.progress.set(0);
  }
}
