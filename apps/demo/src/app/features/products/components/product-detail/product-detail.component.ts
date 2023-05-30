import type { Product } from '#/app/types/graphql';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `
    <header>
      <span class="title">{{ product.name }}</span>
      <span class="cost">{{ product.cost | currency }}</span>
    </header>

    <div class="rating-container">
      <mat-icon
        *ngFor="let i of [0, 1, 2, 4, 5]"
        [ngClass]="{ 'star-full': i < product.rating }">
        star_rate
      </mat-icon>
      <div class="rating">({{ product.rating }})</div>
    </div>
  `,
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

      /* .title {
        font-weight: 600;
      }

      .cost {
        font-weight: 500;
      } */

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
