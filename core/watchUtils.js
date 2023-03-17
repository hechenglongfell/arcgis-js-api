/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./deprecate","./events","./lang","./Logger","./promiseUtils"],(function(e,n,t,r,o,c){"use strict";n.deprecatedModule(o.getLogger("esri.core.watchUtils"),"esri/core/watchUtils",{see:"https://arcg.is/1LTnuf",replacement:"esri/core/reactiveUtils",warnOnce:!0,version:"4.24"});const u=/\?(\.|$)/g;function i(e,n,t,r){const o=Array.isArray(n)?n:n.includes(",")?n.split(","):[n],c=l(e,n,t,r);for(const i of o){const n=i.trim().replace(u,"$1"),r=e.get(n);t.call(e,r,r,n,e)}return c}function l(e,n,t,r){return e.watch(n,t,r)}function a(e,n,t,r){return E(e,n,null,t,r)}function s(e,n,t,r){return q(e,n,D,t,r)}function f(e,n,t,r){return E(e,n,D,t,r)}function h(e,n,t,r){return q(e,n,L,t,r)}function d(e,n,t,r){return E(e,n,L,t,r)}function w(e,n,t,r){return q(e,n,N,t,r)}function p(e,n,t,r){return E(e,n,N,t,r)}function g(e,n,t,r){return q(e,n,F,t,r)}function m(e,n,t,r){return E(e,n,F,t,r)}function v(e,n,t,r){return q(e,n,M,t,r)}function O(e,n,t,r){return E(e,n,M,t,r)}function b(e,n,t,r){return q(e,n,S,t,r)}function y(e,n,t,r){return E(e,n,S,t,r)}function A(e,n,t,o,c){return q(e,n,(e=>r.equals(t,e)),o,c)}function U(e,n,t,o,c){return E(e,n,(e=>r.equals(t,e)),o,c)}function T(e,n,t,r){let o=!1;const c=e.watch(n,((n,r,c,u)=>{o||t.call(e,n,r,c,u)}),r);return{remove(){c.remove()},pause(){o=!0},resume(){o=!1}}}function j(e,n,r,o,c,u,l){const a={};function s(n){const t=a[n];t&&(u&&u(t.target,n,e,r),t.handle.remove(),delete a[n])}const f=i(e,n,((n,u,i)=>{s(i),t.isEventTarget(n)&&(a[i]={handle:t.on(n,r,o),target:n},c&&c(n,i,e,r))}),l);return{remove(){f.remove();for(const e in a)s(e)}}}function q(e,n,t,r,o){const c=e.watch(n,((n,o,c,u)=>{t&&!t(n)||r?.call(e,n,o,c,u)}),o);if(Array.isArray(n))for(const u of n){const o=e.get(u);t&&t(o)&&r?.call(e,o,o,n,e)}else{const o=e.get(n);t&&t(o)&&r?.call(e,o,o,n,e)}return c}function E(e,n,t,r,o){const u="function"==typeof r?r:null,i="object"==typeof r?r:null;"boolean"==typeof r&&(o=r);let l,a=!1;function s(){l&&(l.remove(),l=null)}const f=c.createDeferred();c.onAbort(i,(()=>{s(),f.reject(c.createAbortError())}));const h={then:f.promise.then.bind(f.promise),catch:f.promise.catch.bind(f.promise),remove:s};return Object.freeze(h),l=q(e,n,t,((n,t,r,o)=>{a=!0,s(),u&&u.call(e,n,t,r,o),f.resolve({value:n,oldValue:t,propertyName:r,target:o})}),o),a&&s(),h}function D(e){return!!e}function L(e){return!e}function N(e){return!0===e}function F(e){return!1===e}function M(e){return void 0!==e}function S(e){return void 0===e}e.init=i,e.on=j,e.once=a,e.pausable=T,e.watch=l,e.when=s,e.whenDefined=v,e.whenDefinedOnce=O,e.whenEqual=A,e.whenEqualOnce=U,e.whenFalse=g,e.whenFalseOnce=m,e.whenNot=h,e.whenNotOnce=d,e.whenOnce=f,e.whenTrue=w,e.whenTrueOnce=p,e.whenUndefined=b,e.whenUndefinedOnce=y,e.whenValidOnce=E,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
