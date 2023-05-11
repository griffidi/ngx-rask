import { GetProductsDocument, type Product } from '#/app/types/graphql';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, type OnInit, type WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatCardModule, NgFor],
})
export default class ProductList implements OnInit {
  #apollo = inject(Apollo);

  protected products: WritableSignal<Product[]> = signal([]);

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
