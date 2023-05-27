import type { ProductTransactions } from './product-transaction';

export type ProductTransactionsState = {
  loading: boolean;
  pageIndex: number;
  pageSize: number;
  productId: string;
  productTransactions: ProductTransactions;
  totalCount: number;
};

export const initialProductTransactionsState: ProductTransactionsState = {
  loading: false,
  pageIndex: 0,
  pageSize: 10,
  productId: '',
  productTransactions: [],
  totalCount: 0,
};
