import {
  randCity,
  randEmail,
  randFirstName,
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
import { randIf } from './generators/rand-if.js';
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
    gender: randIf({ chanceTrue: 0.5 }, 'Male', 'Female'),
    phone: randPhoneNumber(),
    streetAddress: randStreetAddress(),
    city: randCity(),
    stateId: randLocationStateId(),
    zipCode: randZipCode(),
    jobTitle: randJobTitle(),
    departmentId: randDepartmentIdCustom(),
    imagePath: null,
    dateStarted: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.6 }, () => randPastDate({ years: 10 })),
  };
});
