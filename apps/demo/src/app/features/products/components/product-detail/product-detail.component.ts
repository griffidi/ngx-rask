import type { Product } from '#/app/types/graphql';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatIconModule, NgClass, NgFor],
})
export class ProductDetailComponent {
  @Input({ required: true }) product: Product | undefined;
}
