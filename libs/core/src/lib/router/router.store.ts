// import { NavigationEnd } from '@angular/router';
// import { signalStore, withEffects, withState } from '@ngx-rask/signal-store';
// import { filter, map } from 'rxjs';
// import { initialRouterState, type RouterState } from './router.state';

// export const routerStore = signalStore(
//   { provideIn: 'root' },
//   withState<RouterState>(initialRouterState),
//   withEffects(({ events }) => {
//     return events.pipe(
//       filter(event => event instanceof NavigationEnd),
//       map(() => ({ type: 'update' }))
//     );
//   })
// );
