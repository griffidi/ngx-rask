import { GetProductsDocument, type Product } from '#/app/types/graphql';
import { CurrencyPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  type OnInit,
  type WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { CreatePathPipe } from '@ngx-rask/core';
import { Client } from '@ngx-rask/graphql';
import { IMAGE_PATH_TOKEN } from '../../../common/assets/image-path-token';

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
export default class ProductList implements OnInit {
  #client = inject(Client);
  #router = inject(Router);

  protected readonly imagePath = inject(IMAGE_PATH_TOKEN);
  protected readonly products: WritableSignal<Product[]> = signal([]);

  async ngOnInit() {
    const { products } = await this.#client.query(GetProductsDocument);
    this.products.set(products as Product[]);
  }

  onCardClick(productId: string) {
    this.#router.navigate(['products', productId]);
  }
}
