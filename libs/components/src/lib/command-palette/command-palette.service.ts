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
import { filter, fromEvent, map, take, tap } from 'rxjs';
import { RkCommandPalette } from './command-palette';

const COMMAND_PALETTE_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'rk-command-palette-backdrop',
  panelClass: 'rk-command-palette-panel',
  disposeOnNavigation: true,
  minHeight: '100px',
  maxHeight: '450px',
  width: '600px',
  positionStrategy: new GlobalPositionStrategy().centerHorizontally().centerVertically(),
};

@Injectable()
export class CommandPaletteService {
  #isRegistered = false;

  readonly #viewportRuler = inject(ViewportRuler);
  readonly #destroyRef = inject(DestroyRef);
  readonly #overlay = inject(Overlay);
  readonly #document = inject(DOCUMENT);

  /**
   * Initialize command palette service by subscribing to events
   * that will trigger the command palette to display.
   */
  initialize() {
    if (this.#isRegistered) {
      return;
    }

    this.#isRegistered = true;

    fromEvent<KeyboardEvent>(this.#document, 'keydown')
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

    componentRef.instance.close
      .pipe(
        take(1),
        tap(() => overlayRef.detach())
      )
      .subscribe();

    overlayRef
      .backdropClick()
      .pipe(
        take(1),
        tap(() => overlayRef.detach())
      )
      .subscribe();

    setTimeout(() => {
      const overlayEl = overlayRef.overlayElement;
      overlayEl.setAttribute('opened', '');
      // overlayEl.querySelector('rk-command-palette')?.setAttribute('opened', '');
    });
  }
}
