/**
 * Cache key template literal type.
 */
export type CacheKey = `${string}|${string}`;

/**
 * Create key used to store items in cache.
 *
 * @param {string} type Category type name.
 * @param {string} name Name with in type category.
 * @returns {CacheKey} Cache key.
 */
export function createCacheKey(type: string, name: string): CacheKey {
  return `${type}|${name}`;
}
