import {
  GetProductTransactionsByProductIdDocument,
  GetProductsDocument,
  type Product,
  type ProductTransaction,
} from '#/app/types/graphql';
import { DatePipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  signal,
  type AfterViewInit,
  type OnInit,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Client } from '@ngx-rask/graphql';

@Component({
  selector: 'app-product-sales',
  standalone: true,
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule, NgFor],
})
export default class ProductSales implements OnInit, AfterViewInit {
  #client = inject(Client);

  protected readonly dataSource = new MatTableDataSource<ProductTransaction>();
  protected readonly products = signal<Product[]>([]);
  protected readonly productTransactions = signal<ProductTransaction[]>([]);
  protected readonly displayedColumns = ['product', 'quantity', 'size', 'price', 'dateCreated'];

  // protected selectedProduct: Product | null = null;

  @ViewChild(MatPaginator) protected paginator!: MatPaginator;
  @ViewChild(MatSort) protected sort!: MatSort;

  async ngOnInit() {
    await this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async loadProducts() {
    const { products } = await this.#client.query(GetProductsDocument);
    this.products.set(products as Product[]);
  }

  async loadProductTransactions(productId: string) {
    const { pageSize, pageIndex } = this.paginator;
    const { productTransactions } = await this.#client.query(
      GetProductTransactionsByProductIdDocument,
      {
        take: pageSize,
        skip: pageIndex * pageSize,
        productId,
      }
    );
    this.productTransactions.set(productTransactions as ProductTransaction[]);
  }

  async onProductsChange(productId: string) {
    await this.loadProductTransactions(productId);
  }
}
