import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {
  ProductDetailComponent,
  ProductImagesComponent,
  ProductTransactionsComponent,
} from '../components';
import { productsStore } from '../store';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .mat-accordion {
        inline-size: 600px;
      }

      .mat-expansion-panel {
        background: var(--app-color-surface-2);
      }

      .mat-expansion-panel-header {
        color: var(--app-color-accent);
      }

      .mat-action-row {
        padding-inline: 20px;
        border-block-start: none;

        & .mat-icon {
          font-size: 20px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    NgIf,
    ProductDetailComponent,
    ProductImagesComponent,
    ProductTransactionsComponent,
    RouterLink,
  ],
})
export default class ProductComponent {
  #productsStore = inject(productsStore);

  protected readonly product = this.#productsStore.selectedProduct;

  @Input({ required: true })
  protected set id(value: string) {
    this.#productsStore.setSelectedProductId(value);
  }

  protected onEdit() {}
}
