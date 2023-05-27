import {
  randCity,
  randEmail,
  randFirstName,
  randLastName,
  randPastDate,
  randPhoneNumber,
  randStreetAddress,
  randZipCode,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { randChanceFn } from './generators/chance-fn.js';
import { randLocationStateId } from './generators/rand-location-state-fn.js';

export const customers = Array.from({ length: 100 }, () => {
  return {
    id: nanoid(),
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    phone: randPhoneNumber(),
    streetAddress: randStreetAddress(),
    city: randCity(),
    stateId: randLocationStateId(),
    zipCode: randZipCode(),
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  };
});
