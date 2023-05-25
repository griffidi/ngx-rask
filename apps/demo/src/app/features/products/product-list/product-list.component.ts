import { CurrencyPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { CreatePathPipe } from '@ngx-rask/core';
import { IMAGE_PATH_TOKEN } from '../../../common/assets/image-path-token';
import { productsStore } from '../store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CreatePathPipe,
    CurrencyPipe,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    NgFor,
    RouterLink,
  ],
})
export default class ProductListComponent {
  #productsStore = inject(productsStore);
  #router = inject(Router);

  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly products = this.#productsStore.products;

  onCardClick(productId: string) {
    this.#productsStore.setSelectedProductId(productId);
    this.#router.navigate(['products', productId]);
  }
}
