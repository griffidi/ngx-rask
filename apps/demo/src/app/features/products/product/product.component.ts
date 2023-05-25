import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ProductDetailComponent } from '../components';
import { productsStore } from '../store';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductDetailComponent],
})
export default class ProductComponent {
  #productsStore = inject(productsStore);

  protected readonly product = this.#productsStore.selectedProduct;

  @Input({ required: true })
  protected set id(value: string) {
    this.#productsStore.setSelectedProductId(value);
  }
}
