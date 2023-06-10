import { signal, type Signal, type WritableSignal } from '@angular/core';

/**
 * This variable is used to store the signal
 * created inside `signalInputTransform` function
 * Then it is used to assign it to input property value,
 *
 * This variable should not be exported
 */
let inputSignalStore: WritableSignal<unknown>;

export function toSignalInput(value?: unknown) {
  const signalInput = signal<unknown>(value);
  inputSignalStore = signalInput; // assigning internal signal to another variable
  return inputSignalStore;
}

export function signalInput<T = unknown>(): Signal<T> {
  return inputSignalStore as Signal<T>;
}
