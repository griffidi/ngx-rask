import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { FileService } from '@ngx-rask/core';
import { take, tap } from 'rxjs';

@Component({
  selector: 'rk-svg',
  standalone: true,
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FileService],
})
export class RkSvg {
  readonly #fileService = inject(FileService);
  #path = '';

  protected readonly svg = signal<SafeHtml>('');

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
