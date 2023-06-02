// import { zoneConfig } from '@rx-angular/cdk/zone-configurations';

// zoneConfig.global.disable.timers();
// zoneConfig.events.disable.UNPATCHED_EVENTS([
//   'click',
//   'hover',
//   'keypress',
//   'keydown',
//   'textinput',
//   'input',
//   'mouseenter',
//   'mouseleave',
//   'mousemove',
// ]);
// zoneConfig.unpatchXHR();
window.__Zone_disable_requestAnimationFrame = true;
window.__Zone_disable_timers = true;
window.__zone_symbol__UNPATCHED_EVENTS = [
  'click',
  'hover',
  'keypress',
  'keydown',
  'textinput',
  'input',
  'mouseenter',
  'mouseleave',
  'mousemove',
];
window.__Zone_disable_XHR = true;
