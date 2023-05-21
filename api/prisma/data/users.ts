import {
  randEmail,
  randFirstName,
  randLastName,
  randNumber,
  randPassword,
  randPastDate,
  randUserName,
} from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { generateHash } from '../../src/crypto/hash.js';
import { randChanceFn } from './generators/chance-fn.js';
import { ADMIN, USER, roles } from './roles.js';

const adminRoleId = roles.find(role => role.name === ADMIN)!.id;
const userRoleId = roles.find(role => role.name === USER)!.id;

const adminUser = {
  id: nanoid(),
  userName: `admin.user-0000001`,
  password: generateHash('test'),
  email: 'dustingriffith@outlook.com',
  firstName: 'Admin',
  lastName: 'One',
  roleId: adminRoleId,
  dateCreated: randPastDate({ years: 10 }),
  dateUpdated: new Date('2023-01-01'),
};

const basicUsers = Array.from({ length: 50 }, () => {
  return {
    id: nanoid(),
    userName: `${randUserName()}-${randNumber({ length: 6, min: 2, max: 999999 })
      .toString()
      .padStart(6, '0')}`,
    password: generateHash(randPassword()),
    email: randEmail(),
    firstName: randFirstName(),
    lastName: randLastName(),
    roleId: userRoleId,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.6 }, () => randPastDate({ years: 10 })),
  };
});

export const users = [adminUser, ...basicUsers];
