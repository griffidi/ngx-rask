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
} from '../../components';
import { productsStore } from '../../store';

@Component({
  selector: 'app-product',
  standalone: true,
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
  host: {
    scrollable: '',
  },
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        block-size: 100%;
        padding-block: 20px;
      }

      .mat-accordion {
        inline-size: 600px;
      }

      .mat-accordion .mat-expansion-panel {
        --_expansion-shape: var(--app-shape-small);

        background: var(--app-color-surface-2);

        &.mat-expanded,
        &:first-of-type,
        &.mat-expanded + .mat-expansion-panel {
          border-start-start-radius: var(--_expansion-shape);
          border-start-end-radius: var(--_expansion-shape);
        }

        &.mat-expanded,
        &:has(+ .mat-expanded),
        &:last-of-type {
          border-end-start-radius: var(--_expansion-shape);
          border-end-end-radius: var(--_expansion-shape);
        }
      }

      .mat-expansion-panel-header {
        font-size: 1.1em;
        /* letter-spacing: 0.05em; */

        & > ::ng-deep .mat-content {
          margin-inline-end: 0;
        }
      }

      .mat-expansion-panel-header-description {
        justify-content: flex-end;
        align-items: center;
        margin-inline-end: 0;
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
  template: `
    <ng-container *ngIf="product() as product">
      <mat-accordion
        multi
        hideToggle>
        <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Detail</mat-panel-title>
            <mat-panel-description>
              <mat-icon>page_info</mat-icon>
            </mat-panel-description>
          </mat-expansion-panel-header>
          <app-product-detail [product]="product" />
          <mat-action-row>
            <a
              mat-stroked-button
              color="primary"
              [routerLink]="['/products', product.id, 'edit']">
              Edit
            </a>
          </mat-action-row>
        </mat-expansion-panel>
        <mat-expansion-panel expanded>
          <mat-expansion-panel-header>
            <mat-panel-title>Images</mat-panel-title>
            <mat-panel-description>
              <mat-icon>image</mat-icon>
            </mat-panel-description>
          </mat-expansion-panel-header>
          <app-product-images [productName]="product.name" />
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>Transactions</mat-panel-title>
            <mat-panel-description>
              <mat-icon>receipt_long</mat-icon>
            </mat-panel-description>
          </mat-expansion-panel-header>
          <app-product-transactions [productId]="product.id" />
        </mat-expansion-panel>
      </mat-accordion>
    </ng-container>
  `,
})
export default class ProductComponent {
  readonly #productsStore = inject(productsStore);

  protected readonly product = this.#productsStore.selectedProduct;

  @Input({ required: true })
  protected set id(value: string) {
    this.#productsStore.setSelectedProductId(value);
  }
}
