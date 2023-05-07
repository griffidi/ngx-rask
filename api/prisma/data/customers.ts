import {
  randCity,
  randEmail,
  randFirstName,
  randLastName,
  randPastDate,
  randPhoneNumber,
  randStateAbbr,
  randStreetAddress,
  randZipCode,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { randChanceFn } from './generators/chance-fn.js';

export const customers = Array.from({ length: 100 }, () => {
  return {
    id: nanoid(),
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    phone: randPhoneNumber(),
    streetAddress: randStreetAddress(),
    city: randCity(),
    state: randStateAbbr(),
    zipCode: randZipCode(),
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  };
});
