/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../object","./type"],(function(e,t,r){"use strict";function n(e,t){var n;if(!t.write||t.write.writer||!1===t.write.enabled&&!t.write.overridePolicy)return;const o=null!=(n=null==e?void 0:e.ndimArray)?n:0;e&&(1===o||"type"in e&&r.isCollection(e.type))?t.write.writer=l:t.write.writer=o>1?c(o):i}function i(e,r,n,i){t.setDeepValue(n,o(e,i),r)}function o(e,t){return e&&"function"==typeof e.write?e.write({},t):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?u(e):e}function u(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}function l(e,r,n,i){let u;null===e?u=null:e&&"function"==typeof e.map?(u=e.map((e=>o(e,i))),"function"==typeof u.toArray&&(u=u.toArray())):u=[o(e,i)],t.setDeepValue(n,u,r)}function f(e,t,r){return 0!==r&&Array.isArray(e)?e.map((e=>f(e,t,r-1))):o(e,t)}function c(e){return function(r,n,i,o){let u;if(null===r)u=null;else{u=f(r,o,e);let t=e,n=u;for(;t>0&&Array.isArray(n);)t--,n=n[0];if(void 0!==n)for(let e=0;e<t;e++)u=[u]}t.setDeepValue(i,u,n)}}e.create=n,e.numberToJSON=u,Object.defineProperty(e,"__esModule",{value:!0})}));
