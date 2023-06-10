import { CurrencyPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { CreatePathPipe } from '@ngx-rask/core';
import { IMAGE_PATH_TOKEN } from '../../../../common/assets/image-path-token';
import { productsStore } from '../../store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
        grid-gap: 2.2rem;
      }

      .mat-mdc-card {
        --_border-color: transparent;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        background: var(--app-color-surface-2);
        border-radius: var(--app-shape-medium);
        padding-inline: 12px;
        padding-block: 6px;
        border: 2px solid var(--_border-color);
        cursor: pointer;
        transition: transform 200ms ease-in-out;

        &:hover {
          --_border-color: var(--app-color-primary);

          transform: scale(1.02);
        }
      }

      .title {
        font-size: 1.1em;
        font-weight: 500;
      }
      /*

img {
  border-start-start-radius: var(--app-shape-large);
  border-start-end-radius: var(--app-shape-large);
  aspect-ratio: 1 / 1;
  clip-path: fill;
  filter: grayscale(0.8);
} */
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CreatePathPipe,
    CurrencyPipe,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NgFor,
    RouterLink,
  ],
})
export default class ProductListComponent {
  #productsStore = inject(productsStore);
  #router = inject(Router);

  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly products = this.#productsStore.products;

  onCardClick(productId: string) {
    this.#productsStore.setSelectedProductId(productId);
    this.#router.navigate(['products', productId]);
  }
}
