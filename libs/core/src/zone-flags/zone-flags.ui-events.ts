/**
 * Vanilla version:
 *
 * @example
 * window.__zone_symbol__UNPATCHED_EVENTS = ["click", "hover", "mousemove"];
 */
import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

zoneConfig.events.disable.UNPATCHED_EVENTS(['click', 'hover', 'mousemove']);
