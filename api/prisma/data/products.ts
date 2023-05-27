import { randPastDate } from '@ngneat/falso';
import { ProductIds } from '../enums/product-ids.js';
import { randChanceFn } from './generators/chance-fn.js';

export const products = [
  {
    id: ProductIds.tshirt,
    name: 'T-Shirt',
    cost: 44.99,
    rating: 4.5,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.pants,
    name: 'Pants',
    cost: 59.99,
    rating: 5,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.shorts,
    name: 'Shorts',
    cost: 39.99,
    rating: 4.0,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.sweater,
    name: 'Sweater',
    cost: 79.99,
    rating: 3.0,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.hat,
    name: 'Hat',
    cost: 19.99,
    rating: 3.0,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.hoodie,
    name: 'Hoodie',
    cost: 69.99,
    rating: 5.0,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
];
