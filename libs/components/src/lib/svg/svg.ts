import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { FileService } from '@ngx-rask/core';
import { take, tap } from 'rxjs';

@Component({
  selector: 'rk-svg',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [FileService],
  styles: [
    `
      :host {
        display: grid;
        place-content: center;
      }
    `,
  ],
  template: `
    <div [innerHTML]="svg()"></div>
  `,
})
export class RkSvg {
  readonly #fileService = inject(FileService);
  #path = '';

  protected readonly svg = signal<SafeHtml>('');

  @Input() set height(value: number | string) {
    this._height.set(value);
  }
  get height(): number | string {
    return this._height();
  }
  protected _height = signal<number | string>('100%');

  @Input() set width(value: number | string) {
    this._width.set(value);
  }
  get width(): number | string {
    return this._width();
  }
  protected _width = signal<number | string>('100%');

  /**
   * Relative path to the SVG file.
   */
  @Input({ required: true })
  set path(value: string) {
    if (this.#path !== value) {
      this.#path = value;
      this.#loadSvg(value);
    }
  }

  #loadSvg(path: string) {
    return this.#fileService
      .getSafeHtml(path)
      .pipe(
        take(1),
        tap(svg => this.svg.set(svg))
      )
      .subscribe();
  }
}
