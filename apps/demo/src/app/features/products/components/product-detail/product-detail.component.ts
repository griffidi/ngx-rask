import type { Product } from '#/app/types/graphql';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      header {
        display: flex;
        justify-content: space-between;
        font-size: 1.2em;
      }

      .title {
        font-weight: 600;
      }

      .cost {
        font-weight: 500;
        color: var(--app-color-accent);
      }

      .rating-container {
        display: flex;
        align-items: center;

        & .rating {
          font-weight: 600;
          margin-inline-start: 10px;
        }

        & .mat-icon {
          --_icon-fill: 0;
          --_icon-color: #ffffff;

          font-variation-settings: 'FILL' var(--_icon-fill);
          color: var(--_icon-color);

          &.star-full {
            --_icon-fill: 1;
            --_icon-color: var(--app-color-yellow);
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatIconModule, NgClass, NgFor],
})
export class ProductDetailComponent {
  @Input({ required: true }) product!: Product;
}
