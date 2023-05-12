import { GetProductsDocument, type Product } from '#/app/types/graphql';
import { CurrencyPipe, NgFor, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, type OnInit, type WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CreatePathPipe } from '@ngx-rask/core';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs';

export const IMAGE_PATH = '../../../../assets/images';

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
    NgOptimizedImage,
    RouterLink,
  ],
})
export default class ProductList implements OnInit {
  #apollo = inject(Apollo);

  protected products: WritableSignal<Product[]> = signal([]);

  protected imagePath = IMAGE_PATH;

  ngOnInit(): void {
    this.#apollo
      .query<{ products: Product[] }>({ query: GetProductsDocument })
      .pipe(
        map(({ data }) => data.products),
        tap(products => this.products.set(products))
      )
      .subscribe();
  }
}
