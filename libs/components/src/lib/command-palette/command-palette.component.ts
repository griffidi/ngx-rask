import { OverlayModule } from '@angular/cdk/overlay';
import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { COMMAND_PALETTE_OPTIONS } from './command-palette-options';

@Component({
  selector: 'rk-command-palette',
  standalone: true,
  template: `
    <header>
      <input placeholder="Search..." />
      <mat-icon>search</mat-icon>
    </header>
    <mat-nav-list>
      <mat-list-item
        *ngFor="let item of items()"
        (click)="onNavigate()">
        <a
          class="nav-link"
          matListItemTitle
          [routerLink]="item.path">
          <mat-icon>{{ item.icon }}</mat-icon>
          {{ item.title }}
        </a>
      </mat-list-item>
    </mat-nav-list>
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
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        inline-size: 100%;
        background: var(--app-color-surface-1);
        /* border: 1px solid var(--app-color-border-color); */
        border-radius: var(--app-shape-medium);
        overflow: hidden;
      }

      header {
        display: flex;
        align-items: center;
        block-size: 48px;
        padding-inline: 16px;
      }

      section {
        flex: 1;
      }

      .mat-mdc-list-item {
        a {
          display: flex;
          align-items: center;
        }

        .mat-icon {
          font-size: 20px;
        }
      }

      footer {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-inline: 12px;
        padding-block: 6px;

        label {
          mat-icon {
            font-size: 16px;
            inline-size: 16px;
            block-size: 16px;
          }
        }

        label {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }

      input {
        appearance: none;
        background: transparent;
        inline-size: 100%;
        border: none;
        font-size: 1rem;
        outline: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule, MatListModule, NgFor, OverlayModule, RouterLink],
})
export class RkCommandPalette {
  readonly #options = inject(COMMAND_PALETTE_OPTIONS);

  protected readonly items = signal(this.#options.items);

  @Output() close = new EventEmitter<void>();

  onNavigate() {
    this.close.emit();
  }
}
