import { rand, randNumber, randPastDate } from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { ProductIds } from '../enums/product-ids.js';
import { products } from './products.js';
import { SIZE_LARGE_ID, SIZE_MEDIUM_ID, SIZE_SMALL_ID } from './sizes.js';

export const productTransations = [
  ...Array.from({ length: 850 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.tshirt,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.tshirt)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
  ...Array.from({ length: 350 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.pants,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.pants)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
  ...Array.from({ length: 250 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.shorts,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.shorts)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
  ...Array.from({ length: 450 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.sweater,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.sweater)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
  ...Array.from({ length: 250 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.hat,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.hat)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
  ...Array.from({ length: 120 }, () => {
    return {
      id: nanoid(10),
      productId: ProductIds.hoodie,
      quantity: randNumber({ min: 1, max: 999 }),
      sizeId: rand([SIZE_SMALL_ID, SIZE_MEDIUM_ID, SIZE_LARGE_ID]),
      price: products.find(p => p.id === ProductIds.hoodie)!.cost,
      dateCreated: randPastDate({ years: 10 }),
    };
  }),
];
