import { type ProductTransaction } from '#/app/types/graphql';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  effect,
  inject,
  signal,
  type AfterViewInit,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { merge, tap } from 'rxjs';
import { ProductTransactionsService, ProductsService } from '../shared/services';

@Component({
  selector: 'app-product-sales',
  standalone: true,
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductsService, ProductTransactionsService],
  imports: [
    CurrencyPipe,
    DatePipe,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    NgFor,
  ],
})
export default class ProductSales implements AfterViewInit {
  readonly #productsService = inject(ProductsService);
  readonly #productTransactionsService = inject(ProductTransactionsService);

  readonly #pageIndex = signal(10);
  readonly #pageSize = signal(10);

  readonly #productTransactions = this.#productTransactionsService.productTransactions;

  protected readonly dataSource = new MatTableDataSource<ProductTransaction>([]);
  protected readonly displayedColumns = ['product', 'quantity', 'size', 'price', 'dateCreated'];
  protected readonly isLoading = signal(false);
  protected readonly selectedProductId = signal<string>('');
  protected readonly products = this.#productsService.products;

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;

  constructor() {
    this.#productsService.loadProducts();

    // load product transactions
    effect(
      () => {
        this.isLoading.set(true);
        this.#productTransactionsService.loadProductTransactionsByProduct(
          this.#pageIndex(),
          this.#pageSize(),
          this.selectedProductId()
        );
      },
      { allowSignalWrites: true }
    );

    // update product transactions data source
    effect(
      () => {
        this.dataSource.data = this.#productTransactions();
        this.isLoading.set(false);
      },
      { allowSignalWrites: true }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
          const { pageIndex, pageSize } = this.paginator;
          this.#pageIndex.set(pageIndex);
          this.#pageSize.set(pageSize);
        })
      )
      .subscribe();
  }
}
