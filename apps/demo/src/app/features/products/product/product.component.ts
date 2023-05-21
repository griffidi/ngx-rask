import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import ProductFormComponent from '../components/product-form/product-form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTabsModule, ProductFormComponent],
})
export default class ProductComponent {
  @Input({ required: true }) protected accessor id!: string;
}
