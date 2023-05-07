export class InMemoryStorage implements Storage {
  [name: string]: unknown;

  /**
   * Storage Map is static so that the cache is persisted across instances of this class.
   */
  static #storage: Map<string, string>;

  static {
    this.#storage = new Map<string, string>();
  }

  get length(): number {
    return InMemoryStorage.#storage.size;
  }

  clear(): void {
    InMemoryStorage.#storage.clear();
  }

  getItem(key: string): string | null {
    return InMemoryStorage.#storage.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(InMemoryStorage.#storage.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    InMemoryStorage.#storage.delete(key);
  }

  setItem(key: string, value: string): void {
    InMemoryStorage.#storage.set(key, value);
  }
}
