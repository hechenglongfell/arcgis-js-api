/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../intl","../../intl/number"],(function(t,n,e){"use strict";const r=/^-?(\d+)(\.(\d+))?$/i;function i(t,n){return t-n}function o(t,n){let e,r;return e=Number(t.toFixed(n)),e<t?r=e+1/10**n:(r=e,e-=1/10**n),e=Number(e.toFixed(n)),r=Number(r.toFixed(n)),[e,r]}function u(t,n,e,r,i){const o=c(t,n,e,r),u=null==o.previous||o.previous<=i,l=null==o.next||o.next<=i;return u&&l||o.previous+o.next<=2*i}function l(t){const n=String(t),e=n.match(r);if(e&&e[1])return{integer:e[1].split("").length,fractional:e[3]?e[3].split("").length:0};if(n.toLowerCase().indexOf("e")>-1){const t=n.split("e"),e=t[0],r=t[1];if(e&&r){const t=Number(e);let n=Number(r);const i=n>0;i||(n=Math.abs(n));const o=l(t);return i?(o.integer+=n,n>o.fractional?o.fractional=0:o.fractional-=n):(o.fractional+=n,n>o.integer?o.integer=1:o.integer-=n),o}}return{integer:0,fractional:0}}function c(t,n,e,r){const i={previous:null,next:null};if(null!=e){const r=t-e,o=n-e-r;i.previous=Math.floor(Math.abs(100*o/r))}if(null!=r){const e=r-t,o=r-n-e;i.next=Math.floor(Math.abs(100*o/e))}return i}function s(t,n={}){const e=t.slice(0),{tolerance:r=2,strictBounds:c=!1,indexes:s=e.map(((t,n)=>n))}=n;s.sort(i);for(let i=0;i<s.length;i++){const t=s[i],n=e[t],a=0===t?null:e[t-1],f=t===e.length-1?null:e[t+1],m=l(n).fractional;if(m){let l,s=0,g=!1;for(;s<=m&&!g;){const t=o(n,s);l=c&&0===i?t[1]:t[0],g=u(n,l,a,f,r),s++}g&&(e[t]=l)}}return e}const a={maximumFractionDigits:20};function f(t){return e.formatNumber(t,a)}t.format=f,t.numDigits=l,t.percentChange=c,t.round=s,Object.defineProperty(t,"__esModule",{value:!0})}));
