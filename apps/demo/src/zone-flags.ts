import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

zoneConfig.global.disable.timers();
zoneConfig.events.disable.UNPATCHED_EVENTS([
  'click',
  'hover',
  'keypress',
  'keydown',
  'textinput',
  'input',
  'mouseenter',
  'mouseleave',
  'mousemove',
]);
zoneConfig.unpatchXHR();
