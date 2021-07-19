/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","./core/has","./core/urlUtils","./support/revision"],(function(e,t,r,n,s){"use strict";function i(e){return Object.freeze({__proto__:null,default:e})}const o="4.20",a={request(t,r){var n;const s=null==(n=t.options)?void 0:n.responseType;return new Promise((function(t,r){e(["./request"],(function(e){t(i(e))}),r)})).then((({default:e})=>{const n=t.options||{};return n.responseType="native"===s||"native-request-init"===s?"native-request-init":"array-buffer",n.signal=null==r?void 0:r.signal,e(t.url,n)})).then((e=>{const t={data:e.data,ssl:e.ssl};return"native-request-init"===e.requestOptions.responseType?(delete t.data.signal,t):{result:t,transferList:[t.data]}}))}};function u(e){t.id=e}function d(e){const r=t.id&&t.id.findCredential(e);return r&&r.token?n.addQueryParameter(e,"token",r.token):e}t.id=void 0,r("host-webworker")||(r("edge")||r("trident"))&&console.warn("Deprecated browser - see http://esriurl.com/oldbrowser"),t.buildDate=s.buildDate,t.revision=s.commitHash,t.addTokenParameter=d,t.setId=u,t.version=o,t.workerMessages=a,Object.defineProperty(t,"__esModule",{value:!0})}));
