import type { Product } from '#/app/types/graphql';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductDetailFormComponent } from '../../components';
import ProductImageFormComponent from '../../components/product-image-form/product-image-form.component';
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
      <app-product-image-form />
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;

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
  imports: [
    MatButtonModule,
    MatInputModule,
    NgIf,
    ProductDetailFormComponent,
    ProductImageFormComponent,
    RouterLink,
  ],
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
