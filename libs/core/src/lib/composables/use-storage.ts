import { DestroyRef, effect, inject, signal } from '@angular/core';

/**
 * Attempt to parse a value as JSON, otherwise return the value as-is.
 *
 * @param {string} value Value to parse.
 * @returns {any} Parsed value or original value if parsing fails.
 */
function parseValue(value: string) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export function useStorage(key: string, type: 'localStorage' | 'sessionStorage' = 'localStorage') {
  // state encapsulated and managed by the composable
  const value = signal<string | null>('');
  const storage = type === 'localStorage' ? localStorage : sessionStorage;
  const serializedVal = storage.getItem(key);

  if (serializedVal !== null) {
    value.set(parseValue(serializedVal));
  }

  function handler(e: StorageEvent) {
    if (e.key === key) {
      const newValue = e.newValue ? parseValue(e.newValue) : null;
      value.set(newValue);
    }
  }

  window.addEventListener('storage', handler, true);

  effect(() => {
    storage.setItem(key, JSON.stringify(value()));
  });

  // lifecycle to teardown side effects.
  inject(DestroyRef).onDestroy(() => window.removeEventListener('storage', handler));

  // expose managed state as return value
  return { value };
}
