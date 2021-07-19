/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";const r=null;function e(n){return null!=n}function t(n){return null==n}function u(n){return void 0===n}function o(n,t){return e(n)?t(n):r}function l(n){return n}function f(n,r){if(t(n))throw new Error(r);return n}function i(n,r){return e(n)?n:"function"==typeof r?r():r}function c(n){return e(n)&&n.destroy(),null}function s(n){return e(n)&&n.dispose(),null}function a(n){return e(n)&&n.remove(),null}function p(n){return e(n)&&n.abort(),null}function y(n){return e(n)&&n.release(),null}function m(n){return null}function d(n,r){const t=new Array;return n.forEach((n=>{const u=r(n);e(u)&&t.push(u)})),t}function b(n,r){const e=new Array;for(const t of n)e.push(w(t,null,r));return e}function h(n,r){for(const e of n)w(e,null,r)}function w(n,r,t){return e(n)?t(n):r}function M(n,r){return e(n)?r(n):null}function N(n,r){for(const t of n){const n=r(t);if(e(n))return n}return null}function S(n){return n.filter((n=>e(n)))}function v(n,...r){let e=n;for(let t=0;t<r.length&&e;++t)e=e[r[t]];return e}function O(n){return n}n.abortMaybe=p,n.andThen=M,n.applySome=o,n.assumeNonNull=O,n.destroyMaybe=c,n.disposeMaybe=s,n.filterNones=S,n.forEachSome=h,n.get=v,n.isNone=t,n.isSome=e,n.isUndefined=u,n.mapMany=b,n.mapOr=w,n.mapSome=d,n.mapSomeFirst=N,n.none=r,n.nullifyNonnullableForDispose=m,n.releaseMaybe=y,n.removeMaybe=a,n.unwrap=l,n.unwrapOr=i,n.unwrapOrThrow=f,Object.defineProperty(n,"__esModule",{value:!0})}));
