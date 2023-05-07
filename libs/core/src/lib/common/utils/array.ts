/**
 * Return a new array with unique values.
 *
 * @param {T[]} array Array to remove duplicates from.
 * @returns {T[]} New array with unique values.
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};
