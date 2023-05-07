import { nanoid } from 'nanoid';

export const departments = [
  {
    id: nanoid(),
    name: 'Accounting',
    dateCreated: new Date('2021-01-01'),
    dateUpdated: new Date('2021-01-02'),
  },
  {
    id: nanoid(),
    name: 'Engineering',
    dateCreated: new Date('2021-01-01'),
    dateUpdated: null,
  },
  {
    id: nanoid(),
    name: 'Back Office',
    dateCreated: new Date('2021-01-01'),
    dateUpdated: new Date('2021-01-02'),
  },
  {
    id: nanoid(),
    name: 'Sales',
    dateCreated: new Date('2022-01-01'),
    dateUpdated: new Date('2021-01-02'),
  },
  {
    id: nanoid(),
    name: 'Marketing',
    dateCreated: new Date('2022-01-01'),
    dateUpdated: new Date('2021-01-02'),
  },
  {
    id: nanoid(),
    name: 'Human Resources',
    dateCreated: new Date('2023-01-01'),
    dateUpdated: null,
  },
  {
    id: nanoid(),
    name: 'Legal',
    dateCreated: new Date('2023-01-01'),
    dateUpdated: null,
  },
  {
    id: nanoid(),
    name: 'Information Technology',
    dateCreated: new Date('2023-01-01'),
    dateUpdated: null,
  },
];
