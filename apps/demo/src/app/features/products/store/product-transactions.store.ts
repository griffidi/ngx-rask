// import type { Product } from '#/app/types/graphql';
// import { computed, inject } from '@angular/core';
// import {
//   rxEffect,
//   signalStore,
//   withComputed,
//   withEffects,
//   withHooks,
//   withState,
//   withUpdaters,
//   type SignalStoreUpdate,
// } from '@ngx-rask/signal-store';
// import { debounceTime, map, pipe, switchMap, tap } from 'rxjs';
// import {
//   initialProductsState,
//   type ProductsState,
//   type RouteParamsPaginatonState,
// } from '../shared/models';
// import { ProductsService } from '../shared/services';

// export const productListStore = signalStore(
//   withState<ProductsState>(initialProductsState),
//   withComputed(({ totalCount, pageSize }) => ({
//     totalPages: computed(() => Math.ceil(totalCount() / pageSize())),
//   })),
//   withComputed(({ selectedPage, totalPages }) => ({
//     pagination: computed(() => ({ selectedPage, totalPages })),
//   })),
//   withUpdaters(({ update }) => ({
//     setPaginationSettings: (s: RouteParamsPaginatonState) =>
//       update(() => ({
//         selectedPage:
//           s.selectedPage === undefined
//             ? initialProductsState.selectedPage
//             : Number(s.selectedPage) - 1,
//         pageSize: s.pageSize === undefined ? initialProductsState.pageSize : Number(s.pageSize),
//       })),
//     setSelectedPage: (selectedPage: number) =>
//       update(() => ({
//         selectedPage,
//       })),
//   })),
//   withEffects(
//     ({ update }: SignalStoreUpdate<ProductsState>, { loadProducts } = inject(ProductsService)) => ({
//       loadAll: rxEffect(
//         pipe(
//           debounceTime(300),
//           tap(() => update({ loading: true })),
//           switchMap(() => loadProducts()),
//           map(({ products }) => products as Product[]),
//           tap(() => update({ loading: false }))
//         )
//       ),
//     })
//   ),
//   withHooks({
//     onInit: ({ loadAll }) => loadAll(),
//   })
// );
