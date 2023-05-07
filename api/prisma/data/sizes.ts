import { nanoid } from 'nanoid';

export const SIZE_SMALL_ID = nanoid(10);
export const SIZE_MEDIUM_ID = nanoid(10);
export const SIZE_LARGE_ID = nanoid(10);

export const SIZE_SMALL = 'Small';
export const SIZE_MEDIUM = 'Medium';
export const SIZE_LARGE = 'Large';

export const sizes = [
  {
    id: SIZE_SMALL_ID,
    name: SIZE_SMALL,
    dateCreated: new Date('2018-01-01'),
    dateUpdated: new Date('2019-01-02'),
  },
  {
    id: SIZE_MEDIUM_ID,
    name: SIZE_MEDIUM,
    dateCreated: new Date('2018-01-01'),
    dateUpdated: new Date('2019-01-02'),
  },
  {
    id: SIZE_LARGE_ID,
    name: SIZE_LARGE,
    dateCreated: new Date('2018-01-01'),
    dateUpdated: new Date('2019-01-02'),
  },
];
