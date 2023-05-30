import type { Product } from '#/app/types/graphql';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductDetailFormComponent } from '../../components';
import { productsStore } from '../../store';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  template: `
    <ng-container *ngIf="product() as product">
      <app-product-detail-form
        [product]="product"
        (save)="onSave($event)"
        (cancel)="onCancel()"></app-product-detail-form>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;

        > * {
          inline-size: 600px;
        }
      }

      .container {
        display: flex;
        flex-direction: column;
        inline-size: 600px;
      }

      header {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatInputModule, NgIf, ProductDetailFormComponent, RouterLink],
})
export default class ProductEditComponent {
  #store = inject(productsStore);

  protected product = this.#store.selectedProduct;

  @Input({ required: true }) set id(value: string) {
    this.#store.setSelectedProductId(value);
  }

  onSave(product: Product) {
    console.log('product', product);
  }

  onCancel() {
    console.log('cancel');
  }
}
