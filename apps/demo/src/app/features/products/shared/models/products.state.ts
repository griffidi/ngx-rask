import type { Products } from './product';

export type ProductsState = {
  loading: boolean;
  products: Products;
  selectedProductId: string;
};

export const initialProductsState: ProductsState = {
  loading: false,
  products: [],
  selectedProductId: '',
};
