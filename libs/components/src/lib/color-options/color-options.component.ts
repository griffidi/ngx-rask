import { LowerCasePipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { RkUnpatch } from 'libs/core/src/lib/zone/unpatch';
import { Colors } from './colors';

@Component({
  selector: 'rk-color-options',
  standalone: true,
  template: `
    <ul>
      <li
        *ngFor="let color of colors()"
        [rkUnpatch]="['mousemove']"
        id="color{{ color }}"
        class="color-option {{ color | lowercase }}"
        [attr.selected]="selectedColor() === color"
        (mouseover)="mouseoverColor(color)"
        (mouseout)="mouseoutColor()"
        (click)="selectColor(color)"></li>
    </ul>
  `,
  styles: [
    `
      :host[vertical] {
        & ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      ul {
        display: flex;
        gap: 14px;
        list-style: none;
        padding-inline-start: 0;
      }

      .color-option {
        --_color-option-size: 14px;
        --_color-option-transform-scale: 1;
        --_color-option-border-color: transparent;

        cursor: pointer;
        display: inline-block;
        inline-size: var(--_color-option-size);
        block-size: var(--_color-option-size);
        border-radius: 50%;
        border: 2px solid var(--_color-option-border-color);
        transform: scale(var(--_color-option-transform-scale));
        transition: transform 100ms ease-in-out;

        &[selected='true'],
        &:hover {
          /* --_color-option-border-color: var(--app-color-text-dark-1); */
          --_color-option-transform-scale: 1.2;
        }

        &.black {
          background: var(--app-color-clothing-black);
        }

        &.blue {
          background: var(--app-color-clothing-blue);
        }

        &.cyan {
          background: var(--app-color-clothing-cyan);
        }

        &.green {
          background: var(--app-color-clothing-green);
        }

        &.pink {
          background: var(--app-color-clothing-pink);
        }

        &.purple {
          background: var(--app-color-clothing-purple);
        }

        &.red {
          background: var(--app-color-clothing-red);
        }

        &.teal {
          background: var(--app-color-clothing-teal);
        }

        &.white {
          background: var(--app-color-clothing-white);
        }

        &.yellow {
          background: var(--app-color-clothing-yellow);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LowerCasePipe, NgClass, NgFor, RkUnpatch],
})
export class RkColorOptions {
  protected readonly colors = signal(Object.values(Colors));
  protected readonly selectedColor = signal(Colors.black);
  protected readonly hoveredColor = signal<Colors | null>(null);

  @Output() selectedColorChange = new EventEmitter<Colors>();
  @Output() hoveredColorChange = new EventEmitter<Colors | null>();

  protected mouseoverColor(color: string) {
    this.hoveredColor.set(Colors[color as keyof typeof Colors]);
    this.hoveredColorChange.emit(Colors[color as keyof typeof Colors]);
  }

  protected mouseoutColor() {
    this.hoveredColor.set(null);
    this.hoveredColorChange.emit(null);
  }

  protected selectColor(color: string) {
    this.selectedColor.set(Colors[color as keyof typeof Colors]);
    this.selectedColorChange.emit(Colors[color as keyof typeof Colors]);
  }
}
