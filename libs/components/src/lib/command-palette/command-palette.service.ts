import {
  BlockScrollStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  ViewportRuler,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, NgZone, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { setTimeout } from '@rx-angular/cdk/zone-less/browser';
import { Subscription, filter, fromEvent, map, merge, take, tap } from 'rxjs';
import { RkCommandPalette } from './command-palette';
import { COMMAND_PALETTE_OPTIONS } from './command-palette-options';

const COMMAND_PALETTE_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'rk-command-palette-backdrop',
  panelClass: 'rk-command-palette-panel',
  disposeOnNavigation: true,
  minHeight: '100px',
  maxHeight: '450px',
  width: '600px',
};

@Injectable()
export class CommandPaletteService {
  #keydownSubscription: Subscription | null = null;
  #overlayRef: OverlayRef | null = null;

  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);
  readonly #ngZone = inject(NgZone);
  readonly #options = inject(COMMAND_PALETTE_OPTIONS);
  readonly #overlay = inject(Overlay);
  readonly #viewportRuler = inject(ViewportRuler);

  /**
   * Subscribe to command palette events.
   */
  subscribe() {
    if (this.#keydownSubscription) {
      return;
    }

    this.#ngZone.runOutsideAngular(() => {
      // we also store subscription in a variable, so that we can also unsubscribe manually
      this.#keydownSubscription = fromEvent<KeyboardEvent>(this.#document, 'keydown')
        .pipe(
          takeUntilDestroyed(this.#destroyRef),
          filter(({ key, ctrlKey }) => ctrlKey && ['k', '/'].includes(key)),
          map(event => {
            // need to run show() inside angular zone, otherwise it will not work
            this.#ngZone.run(() => this.show());
            return event;
          })
        )
        .subscribe();
    });
  }

  /**
   * Unsubscribe from command palette events.
   */
  unsubscribe() {
    this.#keydownSubscription?.unsubscribe();
    this.#keydownSubscription = null;
  }

  /**
   * Close command palette.
   */
  close() {
    this.#detachCommandPalette();
  }

  /**
   * Shows the command palette.
   */
  show() {
    this.#createCommandPalette();
  }

  #createCommandPalette() {
    const overlayRef = this.#overlay.create({
      ...COMMAND_PALETTE_OVERLAY_CONFIG,
      scrollStrategy: new BlockScrollStrategy(this.#viewportRuler, this.#document),
      positionStrategy: new GlobalPositionStrategy()
        .centerHorizontally()
        .top(`${this.#options.offsetY + 50}px`),
    });
    const portal = new ComponentPortal(RkCommandPalette);
    const componentRef = overlayRef.attach(portal);

    // subscribe to events to should close the command palette
    merge(componentRef.instance.close, overlayRef.backdropClick())
      .pipe(
        take(1),
        tap(() => this.#detachCommandPalette())
      )
      .subscribe();

    /**
     * Add opened attribute to overlay and command palette. This allows
     * applying animations and custom styling.
     */
    setTimeout(() => {
      const { overlayElement } = overlayRef;
      overlayElement.setAttribute('opened', '');
      const commandPaletteElement = overlayElement.querySelector('rk-command-palette');
      commandPaletteElement?.setAttribute('opened', '');
    });

    this.#overlayRef = overlayRef;

    // unsubscribe from event listener to prevent showing multiple command palettes
    this.unsubscribe();
  }

  #detachCommandPalette() {
    if (this.#overlayRef) {
      this.#overlayRef.detach();
      this.#overlayRef = null;

      // re-subscribe to event listener so command palette can be shown again
      this.subscribe();
    }
  }
}
