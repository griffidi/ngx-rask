import { effect, Injectable, signal, type Signal } from '@angular/core';

/**
 * Cache item signal type.
 */
export type CacheItemSignalType<T> = Signal<T | undefined>;

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

type StorageType = 'localStorage' | 'sessionStorage';

interface CacheStorage {
  storage: Storage | undefined;
}

/**
 * Reactive cache.
 *
 * @description The cache is reactive by using Angular signals.The available storage types
 * are localStorage, sessionStorage, and in-memory. If localStorage or sessionStorage are
 * not available then in-memory storage is used. Cached items are tracked so that when
 * they change they are updated in the cache.
 */
@Injectable({
  providedIn: 'root',
})
export class Cache {
  #cache: CacheStorage = {
    storage: undefined,
  };

  /**
   * Storage type to use for cache.
   * @default 'localStorage'
   */
  storageType: StorageType = 'localStorage';

  get #storage(): Storage {
    return this.#cache.storage as Storage;
  }

  constructor() {
    this.#cache.storage = window[this.storageType] as Storage;
  }

  /**
   * Does item exists in the cache.
   *
   * @param {string} key Key of the item to check if exists in cache.
   * @returns {boolean} True if item exists in cache.
   */
  has(key: CacheKey): boolean {
    return !!this.#storage.getItem(key);
  }

  /**
   * Get item from cache.
   *
   * @param {CacheKey} key Key of item in cache.
   * @returns {CacheItemSignalType<T>} Item in cache and if it doesn't exists then undefined is returned.
   */
  get<T>(key: CacheKey): CacheItemSignalType<T> {
    const data = this.#storage.getItem(key);
    const item = data ? (JSON.parse(data) as T) : undefined;
    const signalItem = signal(item);

    this.#trackCacheItem(key, signalItem);

    return signalItem;
  }

  /**
   * Add or update item in cache.
   *
   * @param {CacheKey} key Key to use for item being stored in cache.
   * @param {T} data Data to store in cache.
   * @returns {CacheItemSignalType<T>} Item in cache and if it doesn't exists then undefined is returned.
   */
  set<T>(key: CacheKey, data: T) {
    this.#storage.setItem(key, JSON.stringify(data));
    // return this.get<T>(key);
  }

  /**
   * Remove item from cache.
   *
   * @param {string} key Key of item to remove from cache.
   */
  remove(key: CacheKey) {
    this.#storage.removeItem(key);
  }

  /**
   * Track cache item so that when it changes it is updated in the cache.
   *
   * @param {CacheKey} key Cache item key.
   * @param {Signal<T>} item Cache item to track.
   */
  #trackCacheItem<T>(key: CacheKey, item: Signal<T>) {
    effect(() => {
      this.#storage.setItem(key, JSON.stringify(item()));
    });
  }
}
