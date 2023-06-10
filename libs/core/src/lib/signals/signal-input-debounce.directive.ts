import { Directive, forwardRef, Input, type OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription, tap } from 'rxjs';
import { SIGNAL_INPUT_MODIFIER, type SignalInputModifier } from './signal-input-modifier.token';

export const DEBOUNCE_MODIFIER: any = {
  provide: SIGNAL_INPUT_MODIFIER,
  useExisting: forwardRef(() => SignalInputDebounceDirective),
  multi: true,
};

@Directive({
  selector: '[ngModel][formField][debounce]',
  standalone: true,
  providers: [DEBOUNCE_MODIFIER],
})
export class SignalInputDebounceDirective implements SignalInputModifier, OnDestroy {
  #debounced = new Subject();
  #debouncedSub: Subscription | null = null;

  @Input()
  set debounce(value: number) {
    this.#debouncedSub?.unsubscribe();
    this.#debouncedSub = this.#debounced
      .pipe(
        // runOutsideAngular(),
        debounceTime(value),
        tap(value => this._setSignal(value))
      )
      .subscribe();
  }

  registerOnSet(set: (value: unknown) => void): void {
    this._setSignal = set;
  }

  onModelChange(value: unknown): void {
    this.#debounced.next(value);
  }

  ngOnDestroy() {
    this.#debouncedSub?.unsubscribe();
    this.#debouncedSub = null;
  }

  // we replace this in the registerOnSet method with the set function passed by the SignalInputDirective
  private _setSignal(_value: unknown): void {}
}
