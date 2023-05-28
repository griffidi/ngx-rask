import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type DividerType = 'right-arrow';

@Component({
  selector: 'rk-svg-divider',
  standalone: true,
  template: `
    <svg
      height="16"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      [ngSwitch]="dividerType">
      <path
        *ngSwitchCase="'right-arrow'"
        clip-rule="evenodd"
        fill="currentColor"
        fill-rule="evenodd"
        d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057Z" />
    </svg>
  `,
  styles: [
    `
      :host {
        --_svg-path-color: var(--rk-svg-divider-path-color, var(--app-color-text-dark-1));

        display: grid;
        place-items: center;
      }

      svg {
        inline-size: 100%;
        color: var(--_svg-path-color);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgSwitch, NgSwitchCase],
})
export class RkSvgDivider {
  @Input({ required: true }) dividerType: DividerType = 'right-arrow';
}
