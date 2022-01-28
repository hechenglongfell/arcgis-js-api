/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/Collection","../../core/accessorSupport/watch","../../core/accessorSupport/trackingUtils"],(function(e,r,t,n){"use strict";const o=new r,s=new WeakMap;function c(e){f(e)&&o.push(e)}function i(e){f(e)&&o.includes(e)&&o.remove(e)}function f(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function a(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:a(r,e%r):0}let u=0,l=0;function h(){const e=Date.now();for(const t of o)if(t.refreshInterval){var r;e-(null!=(r=s.get(t))?r:0)+5>=6e4*t.refreshInterval&&(s.set(t,e),t.refresh(e))}}n.autorun((()=>{const e=Date.now();let r=0;for(const t of o)r=a(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?s.get(t)||s.set(t,e):s.delete(t);if(r!==l){if(l=r,clearInterval(u),0===l)return void(u=0);u=setInterval(h,l)}}));const v={get hasRefreshTimer(){return u>0},get tickInterval(){return l},forceRefresh(){h()},hasLayer:e=>f(e)&&o.includes(e),clear(){for(const e of o)s.delete(e);o.removeAll()}};e.registerLayer=c,e.test=v,e.unregisterLayer=i,Object.defineProperty(e,"__esModule",{value:!0})}));
