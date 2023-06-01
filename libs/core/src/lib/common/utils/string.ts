/**
 * Checks if value is empty, null or undefined.
 *
 * @param {string | null | undefined } value The value to check.
 * @returns {boolean} True if value is empty, null or undefined, false otherwise.
 */
export function isEmptyNullOrUndefined(value: string | null | undefined): boolean {
  return value?.length === 0;
}

/**
 * Checks if value is not empty, null or undefined.
 *
 * @param {string | null | undefined } value The value to check.
 * @returns {boolean} True if value is not empty, null or undefined, false otherwise.
 */
export function isNotEmptyNullOrUndefined(value: string | null | undefined): boolean {
  return !isEmptyNullOrUndefined(value);
}
