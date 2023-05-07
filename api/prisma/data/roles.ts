import { nanoid } from 'nanoid';

export const ADMIN = 'Administrator';
export const USER = 'User';

export const roles = [
  {
    id: nanoid(),
    name: ADMIN,
    description: 'Full access to all resources',
    dateCreated: new Date('2018-01-01'),
    dateUpdated: new Date('2019-01-02'),
  },
  {
    id: nanoid(),
    name: USER,
    description: 'Limited access to resources',
    dateCreated: new Date('2018-01-01'),
    dateUpdated: null,
  },
];
