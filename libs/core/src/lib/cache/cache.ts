import { effect, Injectable, signal, type Signal } from '@angular/core';
import type { CacheKey } from './cache-key.js';
import { type CacheStorage } from './cache-storage.js';
import { InMemoryStorage } from './in-memory-storage.js';
import type { StorageType } from './storage-type.js';

/**
 * Cache item signal type.
 */
export type CacheItemSignalType<T> = Signal<T | undefined>;

/**
 * Reactive cache.
 *
 * @description The cache is reactive by using Angular signals.The available storage types
 * are localStorage, sessionStorage, and in-memory. If localStorage or sessionStorage are
 * not available then in-memory storage is used. Cached items are tracked so that when
 * they change they are updated in the cache.
 */
@Injectable()
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
    this.#cache.storage = (window[this.storageType] as Storage) ?? new InMemoryStorage();
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
  set<T>(key: CacheKey, data: T): CacheItemSignalType<T> {
    this.#storage.setItem(key, JSON.stringify(data));

    return this.get<T>(key);
  }

  /**
   * Remove item from cache.
   *
   * @param {string} key Key of item to remove from cache.
   */
  remove(key: CacheKey): void {
    this.#storage.removeItem(key);
  }

  /**
   * Track cache item so that when it changes it is updated in the cache.
   *
   * @param {CacheKey} key Cache item key.
   * @param {Signal<T>} item Cache item to track.
   */
  #trackCacheItem<T>(key: CacheKey, item: Signal<T>): void {
    effect(() => {
      this.#storage.setItem(key, JSON.stringify(item()));
    });
  }
}
