import type { WritableSignal } from '@angular/core';

/**
 * Patch a signal with a partial state.
 *
 * @param {WritableSignal<T>} signal The signal to patch.
 * @param {Partial<T>} partialState The partial state to patch the signal with.
 */
export function patchSignal<T>(signal: WritableSignal<T>, partialState: Partial<T>) {
  signal.update(state => ({
    ...state,
    ...partialState,
  }));
}
