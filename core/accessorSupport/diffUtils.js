/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../Accessor","../Collection","../maybe","./utils"],(function(e,t,n,o,r){"use strict";const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(e){return e instanceof t}function c(e){return e instanceof n?Object.keys(e.items):i(e)?r.getProperties(e).keys():e?Object.keys(e):[]}function s(e,t){return e instanceof n?e.items[t]:e[t]}function u(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function l(e){return e?e.declaredClass:null}function p(e,t){const n=e.diff;if(n&&"function"==typeof n)return n(e,t);const r=c(e),a=c(t);if(0===r.length&&0===a.length)return;if(!r.length||!a.length||u(e,t))return{type:"complete",oldValue:e,newValue:t};const y=a.filter((e=>-1===r.indexOf(e))),d=r.filter((e=>-1===a.indexOf(e))),m=r.filter((n=>a.indexOf(n)>-1&&s(e,n)!==s(t,n))).concat(y,d).sort(),h=l(e);if(h&&f.indexOf(h)>-1&&m.length)return{type:"complete",oldValue:e,newValue:t};let b;const g=i(e)&&i(t);for(const f of m){const r=s(e,f),i=s(t,f);let c;(g||"function"!=typeof r&&"function"!=typeof i)&&(r!==i&&(null==r&&null==i||(c=n&&n[f]&&"function"==typeof n[f]?n[f](r,i):"object"==typeof r&&"object"==typeof i&&l(r)===l(i)?p(r,i):{type:"complete",oldValue:r,newValue:i},o.isSome(c)&&(o.isSome(b)?b.diff[f]=c:b={type:"partial",diff:{[f]:c}}))))}return b}function a(e,t){if(o.isNone(e))return!1;const n=t.split(".");let r=e;for(const o of n){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const e=r.diff[o];if(!e)return!1;r=e}}return!0}function y(e,t){for(const n of t)if(a(e,n))return!0;return!1}function d(e,t){if(!("function"==typeof e||"function"==typeof t||o.isNone(e)&&o.isNone(t)))return o.isNone(e)||o.isNone(t)||"object"==typeof e&&"object"==typeof t&&l(e)!==l(t)?{type:"complete",oldValue:e,newValue:t}:p(e,t)}function m(e){if(o.isNone(e))return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!m(e))return!1;for(const e of t.removed)if(!m(e))return!1;for(const e of t.changed)if(!m(e))return!1;return!0}case"partial":for(const t in e.diff){if(!m(e.diff[t]))return!1}return!0}}e.diff=d,e.hasDiff=a,e.hasDiffAny=y,e.isEmpty=m,Object.defineProperty(e,"__esModule",{value:!0})}));
