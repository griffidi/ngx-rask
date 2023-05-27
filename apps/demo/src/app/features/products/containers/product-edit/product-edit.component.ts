import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { productsStore } from '../../store';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  templateUrl: './product-edit.component.html',
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
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
  imports: [MatButtonModule, MatInputModule, NgIf, RouterLink],
})
export default class ProductEditComponent {
  #store = inject(productsStore);

  protected product = this.#store.selectedProduct;

  @Input({ required: true }) set id(value: string) {
    this.#store.setSelectedProductId(value);
  }
}
