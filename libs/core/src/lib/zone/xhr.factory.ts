import { XhrFactory } from '@angular/common';
import { Injectable, makeEnvironmentProviders } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UnpatchedXhrFactory implements XhrFactory {
  constructor() {
    // If `zone.js` is not nooped and exists in the browser environment.
    // @ts-ignore
    if (typeof Zone !== 'undefined') {
      // @ts-ignore
      XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.__zone_symbol__send;
      XMLHttpRequest.prototype.addEventListener =
        // @ts-ignore
        XMLHttpRequest.prototype.__zone_symbol__addEventListener;
    }
  }

  build() {
    return new XMLHttpRequest();
  }
}

export function provideXhrFactory() {
  return makeEnvironmentProviders([{ provide: XhrFactory, useClass: UnpatchedXhrFactory }]);
}
