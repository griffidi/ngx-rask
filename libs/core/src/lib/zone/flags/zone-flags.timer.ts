/**
 * Vanilla version:
 *
 * @example
 * window.__Zone_disable__timers = true;
 */
import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

zoneConfig.global.disable.timers();
