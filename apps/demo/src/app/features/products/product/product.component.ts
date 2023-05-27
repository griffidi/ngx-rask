import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
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

      ::ng-deep .mat-expansion-panel .mat-content {
        color: var(--app-color-accent);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatExpansionModule,
    NgIf,
    ProductDetailComponent,
    ProductImagesComponent,
    ProductTransactionsComponent,
  ],
})
export default class ProductComponent {
  #productsStore = inject(productsStore);

  protected readonly product = this.#productsStore.selectedProduct;

  @Input({ required: true })
  protected set id(value: string) {
    this.#productsStore.setSelectedProductId(value);
  }
}
