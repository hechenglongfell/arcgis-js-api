/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/screenUtils"],(function(e,t,n){"use strict";function c(e){return n.createScreenPoint(e.x,e.y)}function r(e,t){const c=(e instanceof HTMLElement?e:e.surface).getBoundingClientRect();return n.createScreenPoint(t.clientX-c.left,t.clientY-c.top)}function i(e,t){return t instanceof Event?r(e,t):c(t)}function o(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e){switch(e.type){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"immediate-double-click":case"hold":case"drag":case"mouse-wheel":return!0;default:return!1}}return!1}e.createScreenPointFromEvent=c,e.createScreenPointFromNativeEvent=r,e.createScreenPointFromSupportedEvent=i,e.isSupportedScreenPointEvent=o,Object.defineProperty(e,"__esModule",{value:!0})}));
