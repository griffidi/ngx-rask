import cssVariables from '#/app/styles/variables';
import {
  BlockScrollStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  ViewportRuler,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { setTimeout } from '@rx-angular/cdk/zone-less/browser';
import { Subscription, filter, fromEvent, map, merge, take, tap } from 'rxjs';
import { RkCommandPalette } from './command-palette';

const COMMAND_PALETTE_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'rk-command-palette-backdrop',
  panelClass: 'rk-command-palette-panel',
  disposeOnNavigation: true,
  minHeight: '100px',
  maxHeight: '450px',
  width: '600px',
  positionStrategy: new GlobalPositionStrategy()
    .centerHorizontally()
    .top(`${cssVariables.layout.header.blockSizeNumber + 50}px`),
};

@Injectable()
export class CommandPaletteService {
  #isSubscribed = false;
  #keydownSubscription: Subscription | undefined;

  readonly #viewportRuler = inject(ViewportRuler);
  readonly #destroyRef = inject(DestroyRef);
  readonly #overlay = inject(Overlay);
  readonly #document = inject(DOCUMENT);

  /**
   * Subscribe to command palette events.
   */
  subscribe() {
    if (this.#isSubscribed) {
      return;
    }

    this.#isSubscribed = true;

    this.#keydownSubscription = fromEvent<KeyboardEvent>(this.#document, 'keydown')
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        filter(({ key, ctrlKey }) => ctrlKey && ['k', '/'].includes(key)),
        map(event => {
          this.show();
          return event;
        })
      )
      .subscribe();
  }

  /**
   * Unsubscribe from command palette events.
   */
  unsubscribe() {
    this.#keydownSubscription?.unsubscribe();
    this.#isSubscribed = false;
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
    });
    const portal = new ComponentPortal(RkCommandPalette);
    const componentRef = overlayRef.attach(portal);

    // subscribe to events to should close the command palette
    merge(componentRef.instance.close, overlayRef.backdropClick())
      .pipe(
        take(1),
        tap(() => overlayRef.detach())
      )
      .subscribe();

    /**
     * Add opened attribute to overlay and command palette. This allows
     * applying animations and custom styling to  the elements.
     */
    setTimeout(() => {
      const { overlayElement } = overlayRef;
      overlayElement.setAttribute('opened', '');
      const commandPaletteElement = overlayElement.querySelector('rk-command-palette');
      commandPaletteElement?.setAttribute('opened', '');
    });
  }
}
