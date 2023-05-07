export interface CacheChangedEventDetail {
  key: string;
  oldValue: string;
  newValue: string;
}

export interface CacheChangedEvent extends CustomEvent<CacheChangedEventDetail> {}

/**
 * Create cache changed event.
 *
 * @param {string} key Key of cache item that changed.
 * @param {string} oldValue Previous value of changed cache item.
 * @param {string} newValue New value of changed cache item.
 * @returns {CustomEvent<CacheChangedEventDetail>} Cache changed event.
 */
export const createCacheChangedEvent = (key: string, oldValue: string, newValue: string) => {
  return new CustomEvent<CacheChangedEventDetail>('cache-changed', {
    detail: {
      key,
      oldValue,
      newValue,
    },
    bubbles: true,
    composed: true,
  });
};
