import { GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, NgZone, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent, map, take, tap } from 'rxjs';
import { RkCommandPalette } from './command-palette';

@Injectable()
export class CommandPaletteService {
  readonly #destroyRef = inject(DestroyRef);
  readonly #ngZone = inject(NgZone);
  readonly #overlay = inject(Overlay);
  readonly #document = inject(DOCUMENT);

  register() {
    this.#ngZone.runOutsideAngular(() => {
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
    });
  }

  show() {
    // this.#build();
    this.#ngZone.run(() => this.#build());
  }

  #build() {
    const overlayRef = this.#overlay.create({
      hasBackdrop: true,
      backdropClass: 'rk-command-palette-backdrop',
      panelClass: 'rk-command-palette-panel',
      disposeOnNavigation: true,
      width: '600px',
      minHeight: '100px',
      maxHeight: '450px',
      positionStrategy: new GlobalPositionStrategy().centerHorizontally().centerVertically(),
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
  }
}
