import { randChanceBoolean } from '@ngneat/falso';
import { type RandChangeBooleanOptions } from './rand-change-boolean-options.js';
/**
 * Returns a random value from an array.
 *
 * @param {RandChangeBooleanOptions} options chanceTrue and chanceFalse options.
 * @param {T[]} values Array of values to select a random element from.
 * @returns {T | null} An element from the values array.
 */
export function randIf<T>(options: RandChangeBooleanOptions, truthy: T, falsy: T): T {
  const isTrue = randChanceBoolean(options);

  return isTrue ? truthy : falsy;
}
