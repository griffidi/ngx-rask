import { Overlay as NgOverlay, type OverlayRef } from '@angular/cdk/overlay';
import type { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, inject, type ComponentRef, type OnDestroy } from '@angular/core';
import type { CommandPalette } from './command-palette.component';

@Injectable()
export class Overlay implements OnDestroy {
  #componentRef: ComponentRef<CommandPalette> | undefined;
  #overlayRef: OverlayRef | undefined;

  readonly #overlay = inject(NgOverlay);

  create(portal: ComponentPortal<CommandPalette>) {
    this.#overlayRef = this.#overlay.create({
      backdropClass: 'rk-command-palette-backdrop',
      panelClass: 'rk-command-palette-panel',
    });

    this.#componentRef = this.#overlayRef.attach(portal);
  }

  ngOnDestroy() {
    this.#componentRef?.destroy();
    this.#overlayRef?.detach();
  }
}
