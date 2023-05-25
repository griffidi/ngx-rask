import type { Products } from './product';

export type ProductTransactionsState = {
  loading: boolean;
  selectedPage: number;
  pageSize: number;
  products: Products;
  totalCount: number;
};

export const initialProductTransactionsState: ProductTransactionsState = {
  loading: false,
  selectedPage: 0,
  pageSize: 10,
  products: [],
  totalCount: 0,
};
