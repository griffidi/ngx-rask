import { HttpEventType, type HttpProgressEvent } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { requestAnimationFrame, setTimeout } from '@rx-angular/cdk/zone-less/browser';
import { RxUnpatch } from '@rx-angular/template/unpatch';
import { filter, finalize, map, tap } from 'rxjs';
import type { FileUploadCompleteEvent } from './file-upload-complete-event';
import { FileUploadService } from './file-upload.service';

const UPLOAD_RESET_TIMEOUT = 2_000;

@Component({
  selector: 'rk-file-upload',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RxUnpatch],
  providers: [FileUploadService],
  styles: [
    `
      input {
        display: none;
      }

      button {
        --_button-border-size: 4px;
        --_button-border-color: var(--app-color-accent);
        --_button-background-gradient-degree: 0deg;

        position: relative;
        border: var(--_border-size) solid transparent;

        &::before {
          position: absolute;
          content: '';
          inset: 0;
          padding: var(--_button-border-size);
          border-radius: var(--app-shape-medium);
          background-clip: border-box;
          background-image: conic-gradient(
            #69f0ae var(--_button-background-gradient-degree),
            transparent 0deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        &.upload-complete-success {
          color: var(--app-color-accent);
        }
      }
    `,
  ],
  template: `
    <button
      #button
      mat-flat-button
      color="primary"
      (click)="input.click()">
      Upload
    </button>

    <input
      #input
      type="file"
      [attr.accept]="fileType"
      [unpatch]="['change']"
      (change)="onFileChange($event)" />
  `,
})
export class RkFileUpload implements ControlValueAccessor {
  readonly #fileUploadService = inject(FileUploadService);

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

  @Output() readonly uploadComplete = new EventEmitter<FileUploadCompleteEvent>();
  @Output() readonly valueChange = new EventEmitter<File | null>();

  @ViewChild('button') protected button!: MatButton;

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
          tap(({ loaded, total }: HttpProgressEvent) => this.#setProgress(loaded, total)),
          finalize(() => {
            this.#reset(true);
            this.uploadComplete.emit({ file: this.value! });
          })
        )
        .subscribe();
    }
  }

  /**
   * Set the upload progress by calculating the current upload values.
   *
   * @param {number} loaded The number of bytes uploaded for the file.
   * @param {number} total  The total number of bytes to upload for the file.
   */
  #setProgress(loaded: number, total: number = 1) {
    const { progress, degree } = this.#calculateProgress(loaded, total);

    this.#setState(progress, degree);
  }

  /**
   * Calculate the file upload progress.
   *
   * @param {number} loaded The number of bytes uploaded for the file.
   * @param {number} total  The total number of bytes to upload for the file.
   * @returns The progress and degree values.
   */
  #calculateProgress(loaded: number, total: number = 1) {
    const progress = loaded / total;
    const degree = Math.round(360 * progress);

    return { progress, degree };
  }

  /**
   * Reset upload UI to original state.
   */
  #reset(isComplete: boolean) {
    this.#setState(0, 0, isComplete);
  }

  #setState(progress: number, degree: number, isComplete = false) {
    const setState = () => {
      const buttonElement = this.button._elementRef.nativeElement as HTMLElement;

      buttonElement.style.setProperty('--_button-background-gradient-degree', `${degree}deg`);

      if (progress === 1) {
        buttonElement.classList.add('upload-complete-success');
        return;
      }

      buttonElement.classList.remove('upload-complete-success');
    };

    if (isComplete) {
      this.#setState(1, 360, false);
      setTimeout(() => requestAnimationFrame(setState), UPLOAD_RESET_TIMEOUT);

      return;
    }

    requestAnimationFrame(setState);
  }
}
