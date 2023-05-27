/**
 * Compare two values for equality.
 *
 * @param {T} a Value to Compare.
 * @param {T} b Value to Compare.
 * @returns {boolean} True if the values are equal, false otherwise.
 */
export function equal<T>(a: T, b: T): boolean {
  return a === b;
}
