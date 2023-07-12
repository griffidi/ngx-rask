import { OverlayModule } from '@angular/cdk/overlay';
import { DOCUMENT, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { CssVariablePipe, runOutsideAngular } from '@ngx-rask/core';
import { RxFor } from '@rx-angular/template/for';
import { RxUnpatch } from '@rx-angular/template/unpatch';
import { filter, fromEvent } from 'rxjs';
import {
  COMMAND_PALETTE_OPTIONS,
  type CommandPaletteItem,
  type CommandPaletteSearchOption,
} from './command-palette-options';

const DEFAULT_SEARCH_VALUE_PLACEHOLDER = 'Search or jump to...';

@Component({
  selector: 'rk-command-palette',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CssVariablePipe,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    NgIf,
    NgStyle,
    OverlayModule,
    RouterLink,
    RxFor,
    RxUnpatch,
  ],
  styles: [
    `
      :host {
        --_section-block-size: 0;

        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        inline-size: 100%;
        background: var(--app-color-surface-1);
        border-radius: var(--app-shape-medium);
        border: 1px solid var(--app-color-border);
        overflow: hidden;
      }

      .mat-mdc-subheader {
        color: var(--app-color-text-dark-3);
        font-size: 1em;
      }

      header {
        display: flex;
        align-items: center;
        padding-inline: 4px;
        padding-block-end: 8px;

        mat-form-field {
          flex: 1;
        }

        input {
          font-size: 0.9em;
        }

        input::placeholder,
        .mat-icon,
        .mat-mdc-form-field-hint {
          color: var(--app-color-text-dark-3);
        }

        .mat-mdc-form-field-hint {
          display: flex;
          align-items: center;
          gap: 1ch;
        }

        .mat-icon {
          font-size: 20px;
          inline-size: 20px;
          block-size: 20px;
        }
      }

      .special-character {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--app-color-text-dark-3);
        border-radius: var(--app-shape-extra-small);
        min-inline-size: 18px;
        font-size: 0.8em;
        padding-inline: 4px;
      }

      :host([opened]) {
        section {
          /*
            this is set to a max-height of the panel so
            that we don't need to calculate the actual height manually
          */
          --_section-block-size: 450px;

          content-visibility: visible;
        }
      }

      section {
        content-visibility: hidden;
        block-size: var(--_section-block-size);
        transition: 500ms block-size 150ms ease-in-out;
        will-change: block-size;
      }

      .mdc-list-group__subheader {
        margin-block: 4px;
      }

      :host ::ng-deep .mdc-list-item__primary-text {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .mat-mdc-list-item {
        --_jump-to-opacity: 0;

        &.mdc-list-item--with-leading-icon .mdc-list-item__start {
          margin-inline-end: 16px;
        }

        &:hover {
          --_jump-to-opacity: 1;
        }

        a {
          display: flex;
          align-items: center;
          font-size: 0.9em;
          color: var(--app-color-text-dark-1);

          &::after {
            position: absolute;
            content: 'Jump to';
            inset-inline-end: 2ch;
            color: var(--app-color-text-dark-3);
            opacity: var(--_jump-to-opacity);
            font-size: 0.9em;
          }
        }

        .mat-icon {
          font-size: 20px;
          color: var(--app-color-text-dark-3);
        }

        .jump-to {
          display: inline-flex;
          align-items: center;
          gap: 1ch;
          color: var(--app-color-text-dark-3);
          font-size: 0.9em;
          opacity: var(--_jump-to-opacity);

          & .special-character {
            font-size: 0.6em;
            line-height: 1.7;
            padding-block: 2px;
            background: var(--app-color-surface-0);
            block-size: 100%;
          }
        }
      }

      :host ::ng-deep .mdc-notched-outline__leading,
      :host ::ng-deep .mdc-notched-outline__notch,
      :host ::ng-deep .mdc-notched-outline__trailing {
        border-inline: none;
        border-block: none;
      }

      footer {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-inline: 16px;
        padding-block: 12px;

        label {
          mat-icon {
            --_icon-size: 18px;

            font-size: var(--_icon-size);
            inline-size: var(--_icon-size);
            block-size: var(--_icon-size);
          }
        }

        label {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--app-color-text-dark-3);
        }
      }
    `,
  ],
  template: `
    <header>
      <mat-form-field>
        <mat-icon matPrefix>search</mat-icon>
        <input
          matInput
          name="searchValue"
          [placeholder]="searchValuePlaceholder()"
          [(ngModel)]="searchValue" />
        <mat-hint align="start">
          Tip: Type
          <span class="special-character">@</span>
          to search for employees
        </mat-hint>
        <mat-hint align="end">
          Type
          <span class="special-character">#</span>
          to search for products
        </mat-hint>
      </mat-form-field>
    </header>
    <mat-divider />
    <section scrollable>
      <mat-nav-list>
        <div mat-subheader>Pages</div>
        <mat-list-item
          *rxFor="let item of navItems()"
          [unpatch]="['mouseenter', 'mouseleave']"
          (click)="onNavigate(item)"
          (mouseenter)="onListItemMouseenter(item)"
          (mouseleave)="onListItemMouseleave()">
          <mat-icon
            *ngIf="item.icon"
            matListItemIcon>
            {{ item.icon }}
          </mat-icon>
          <a
            class="nav-link"
            [routerLink]="item.path">
            {{ item.title }}
          </a>
        </mat-list-item>
      </mat-nav-list>
      <mat-selection-list *rxFor="let option of searchOptions(); index as i">
        <mat-divider />
        <div mat-subheader>{{ option.header }}</div>
        <mat-list-item
          *rxFor="let item of option.items"
          class="search-option-item"
          (mouseenter)="onListItemMouseenter(item)"
          (mouseleave)="onListItemMouseleave()"
          [unpatch]="['mouseenter', 'mouseleave']">
          <mat-icon
            *ngIf="item.icon"
            matListItemIcon
            class="search-option-icon-{{ i }}"
            [ngStyle]="{ color: item.cssColorCustomProperty | cssVariable }">
            {{ item.icon }}
          </mat-icon>
          {{ item.title }}
          <div class="jump-to">
            <span class="special-character">Tab</span>
            to search
          </div>
        </mat-list-item>
      </mat-selection-list>
    </section>
    <mat-divider />
    <footer>
      <label>
        <mat-icon>keyboard_arrow_up</mat-icon>
        <span>Previous</span>
      </label>
      <label>
        <mat-icon>keyboard_arrow_down</mat-icon>
        <span>Next</span>
      </label>
    </footer>
  `,
})
export class RkCommandPalette {
  readonly #cdr = inject(ChangeDetectorRef);
  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);

  readonly #options = inject(COMMAND_PALETTE_OPTIONS);
  readonly #searchValue = signal<string>('');

  protected readonly searchValuePlaceholder = signal<string>(DEFAULT_SEARCH_VALUE_PLACEHOLDER);
  protected readonly hoveredPageListItem = signal<CommandPaletteItem | null>(null);

  /**
   * Command palette items are derived from the routes provided in the options.
   */
  protected readonly navItems = signal<CommandPaletteItem[]>(
    this.#options.routes.map(({ data, path, title }) => ({
      icon: data?.['icon'],
      path: String(path),
      title: String(title),
    }))
  );

  /**
   * Command palette items are derived from the search options provided in the options.
   */
  protected readonly searchOptions = signal<CommandPaletteSearchOption[]>(
    this.#options.searchOptions ?? []
  );

  protected set searchValue(value: string) {
    this.#searchValue.set(value);
  }
  get searchValue(): string {
    return this.#searchValue();
  }

  @Output() close = new EventEmitter<void>();
  @Output() navigate = new EventEmitter<CommandPaletteItem>();

  @Output() open = fromEvent<KeyboardEvent>(this.#document, 'keydown').pipe(
    takeUntilDestroyed(this.#destroyRef),
    runOutsideAngular(), // run subscription outside angular zone
    filter(({ key, ctrlKey }) => ctrlKey && ['k', '/'].includes(key))
  );

  protected onClose() {
    this.close.emit();
  }

  protected onNavigate(event: CommandPaletteItem) {
    this.navigate.emit(event);
    this.onClose();
  }

  protected onListItemMouseenter(event: CommandPaletteItem) {
    this.hoveredPageListItem.set(event);
    this.searchValuePlaceholder.set(event.title);

    // mouseenter event listener is unpatched so manually triggering change detection is required.
    this.#cdr.detectChanges();
  }

  protected onListItemMouseleave() {
    this.hoveredPageListItem.set(null);
    this.searchValuePlaceholder.set(DEFAULT_SEARCH_VALUE_PLACEHOLDER);

    // mouseleave event listener is unpatched so manually triggering change detection is required.
    this.#cdr.detectChanges();
  }
}
