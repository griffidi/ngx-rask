import {
  randCity,
  randEmail,
  randFirstName,
  randGender,
  randJobTitle,
  randLastName,
  randPastDate,
  randPhoneNumber,
  randStreetAddress,
  randZipCode,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { departments } from './departments.js';
import { randChanceFn } from './generators/chance-fn.js';
import { randLocationStateId } from './generators/rand-location-state-fn.js';

const departmentLength = departments.length;

function randDepartmentIdCustom(): string {
  const randomIndex = Math.floor(Math.random() * departmentLength);
  return departments[randomIndex].id;
}

export const employees = Array.from({ length: 100 }, () => {
  return {
    id: nanoid(),
    firstName: randFirstName(),
    lastName: randLastName(),
    email: randEmail(),
    gender: randGender(),
    phone: randPhoneNumber(),
    streetAddress: randStreetAddress(),
    city: randCity(),
    stateId: randLocationStateId(),
    zipCode: randZipCode(),
    jobTitle: randJobTitle(),
    departmentId: randDepartmentIdCustom(),
    dateStarted: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.6 }, () => randPastDate({ years: 10 })),
  };
});
