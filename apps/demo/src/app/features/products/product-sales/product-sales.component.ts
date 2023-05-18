import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductSales {
  // #client = inject(Client);
}
