import { randChanceBoolean } from '@ngneat/falso';
import type { RandChangeBooleanOptions } from './rand-change-boolean-options.js';

/**
 * Returns a random boolean value based on the chanceTrue and chanceFalse options.
 *
 * @param {RandChangeBooleanOptions} options chanceTrue and chanceFalse options.
 * @param {(options: unknown) => T} func Function to call if the random boolean is true.
 * @returns {T | null} The result of the function call or null if the random boolean is false.
 */
export function randChanceFn<T>(
  options: RandChangeBooleanOptions,
  func: (options: unknown) => T
): T | null {
  const isNotNull = randChanceBoolean(options);

  return isNotNull ? func(options) : null;
}
