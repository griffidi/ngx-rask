import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          left: 0,
          position: 'absolute',
          top: 20,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%', opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('600ms ease-in', style({ left: '0%', opacity: 1 }))], { optional: true }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        left: 0,
        position: 'absolute',
        top: 20,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('600ms ease-in', style({ left: '0%' }))]),
      query('@*', animateChild()),
    ]),
  ]),
]);
