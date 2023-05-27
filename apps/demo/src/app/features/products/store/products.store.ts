import type { Product } from '#/app/types/graphql';
import { computed, inject } from '@angular/core';
import {
  signalStore,
  withComputed,
  withEffects,
  withHooks,
  withState,
  withUpdaters,
  type SignalStoreUpdate,
} from '@ngx-rask/signal-store';
import { initialProductsState, type ProductsState } from '../shared/models';
import { ProductsService } from '../shared/services';

export const productsStore = signalStore(
  withState<ProductsState>(initialProductsState),
  withComputed(({ products, selectedProductId }) => ({
    selectedProduct: computed(() =>
      products().find(({ id }: Product) => id === selectedProductId())
    ),
  })),
  withUpdaters(({ update }: SignalStoreUpdate<ProductsState>) => ({
    setSelectedProductId: (selectedProductId: string) => update({ selectedProductId }),
  })),
  withEffects(({ update }: SignalStoreUpdate<ProductsState>) => ({
    async loadProducts() {
      const service = inject(ProductsService);
      update({ loading: true });
      const products = await service.getProducts();
      update({ loading: false, products });
    },
  })),
  withHooks({
    onInit: ({ loadProducts }) => loadProducts(),
  })
);
