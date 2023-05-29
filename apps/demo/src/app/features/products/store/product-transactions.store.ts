import { inject } from '@angular/core';
import { signalStore, withEffects, withState, withUpdaters } from '@ngx-rask/signal-store';
import { initialProductTransactionsState, type ProductTransactionsState } from '../shared/models';
import { ProductTransactionsService } from '../shared/services';

export const productTransactionsStore = signalStore(
  { providedIn: 'root' },
  withState<ProductTransactionsState>(initialProductTransactionsState),
  withUpdaters(({ update }) => ({
    setPagination: (pageIndex: number, pageSize: number) => update({ pageIndex, pageSize }),
    setProductId: (productId: string) => update({ productId }),
  })),
  withEffects(({ pageIndex, pageSize, productId, update }) => {
    const service = inject(ProductTransactionsService);

    return {
      async loadProductTransactions() {
        update({ loading: true });

        const [productTransactions, totalCount] = await Promise.all([
          service.getProductTransactionsByProductId(pageIndex(), pageSize(), productId()),
          service.getProductTransactionsByProductCount(productId()),
        ]);

        update({ loading: false, productTransactions, totalCount });
      },
    };
  })
);
