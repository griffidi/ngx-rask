import { randPastDate } from '@ngneat/falso';
import { ProductIds } from '../enums/product-ids.js';
import { randChanceFn } from './generators/chance-fn.js';

export const products = [
  {
    id: ProductIds.tshirt,
    name: 'T-Shirt',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.pants,
    name: 'Pants',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.shorts,
    name: 'Shorts',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.sweater,
    name: 'Sweater',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.hat,
    name: 'Hat',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: ProductIds.hoodie,
    name: 'Hoodie',
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
];
