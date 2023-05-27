import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  ViewChild,
  effect,
  inject,
  type AfterViewInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { merge, tap } from 'rxjs';
import type { ProductTransactions } from '../../shared/models';
import { productTransactionsStore } from '../../store';

@Component({
  selector: 'app-product-transactions',
  standalone: true,
  templateUrl: './product-transactions.component.html',
  styleUrls: ['./product-transactions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, DatePipe, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class ProductTransactionsComponent implements AfterViewInit {
  #destroyRef = inject(DestroyRef);
  #store = inject(productTransactionsStore);

  protected readonly dataSource = new MatTableDataSource<ProductTransactions>([]);
  protected readonly displayedColumns = ['quantity', 'size', 'price', 'dateCreated'];
  protected readonly loading = this.#store.loading;
  protected readonly pageSize = this.#store.pageSize;
  protected readonly totalCount = this.#store.totalCount;

  @Input({ required: true })
  set productId(value: string) {
    this.#store.setProductId(value);
    this.#store.loadProductTransactions();
  }

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;

  constructor() {
    effect(() => {
      // @ts-ignore(ts/4104) - dataSource type ProductTransactions is readonly and not re-assignable
      this.dataSource.data = this.#store.productTransactions();
    });
  }

  ngAfterViewInit() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        tap(() => {
          const { pageIndex, pageSize } = this.paginator;
          this.#store.setPagination(pageIndex, pageSize);
          this.#store.loadProductTransactions();
        })
      )
      .subscribe();
  }
}
