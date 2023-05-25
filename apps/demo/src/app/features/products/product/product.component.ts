import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ProductDetailComponent } from '../components';
import { ProductsService } from '../shared/services';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductDetailComponent],
})
export default class ProductComponent {
  #productsService = inject(ProductsService);

  protected readonly product = this.#productsService.product;

  @Input({ required: true }) protected accessor id!: string;
}
