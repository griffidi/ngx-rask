import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

zoneConfig.global.disable.timers();
zoneConfig.events.disable.UNPATCHED_EVENTS([
  'keypress',
  'keydown',
  'textinput',
  'input',
  'mousemove',
]);
