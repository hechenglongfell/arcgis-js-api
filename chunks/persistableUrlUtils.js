/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","../core/urlUtils"],(function(e,r,t){"use strict";function o(e,r){const o=r&&r.url&&r.url.path;if(e&&o&&(e=t.makeAbsolute(e,o,{preserveProtocolRelative:!0}),r.portalItem&&r.readResourcePaths)){const o=t.makeRelative(e,r.portalItem.itemUrl);i.test(o)&&r.readResourcePaths.push(r.portalItem.resourceFromPath(o).path)}return m(e,r&&r.portal)}function l(e,r,o=0){if(!e)return e;!t.isAbsolute(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);let l=t.makeAbsolute(e);if(r){const o=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;if(o){const s=m(o,r.portal);l=t.makeRelative(m(l,r.portal),s,s),l!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(l)}}return l=c(l,r&&r.portal),t.isAbsolute(l)&&(l=t.normalize(l)),null!=r&&r.resources&&null!=r&&r.portalItem&&!t.isAbsolute(l)&&!t.isDataProtocol(l)&&0===o&&r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(l)}),l}function s(e,r,t){return o(e,t)}function a(e,r,t,o){const s=l(e,o);void 0!==s&&(r[t]=s)}const u=/\/items\/([^\/]+)\/resources\//,i=/^\.\/resources\//;function n(e){const t=r.isSome(e)?e.match(u):null;return r.isSome(t)?t[1]:null}function c(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?t.changeDomain(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function m(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const o=`${r.urlKey}.${r.customBaseUrl}`;return t.hasSameOrigin(t.appUrl,`${t.appUrl.scheme}://${o}`)?t.changeDomain(e,r.portalHostname,o):t.changeDomain(e,o,r.portalHostname)}var p=Object.freeze({__proto__:null,fromJSON:o,toJSON:l,read:s,write:a,itemIdFromResourceUrl:n});e.fromJSON=o,e.itemIdFromResourceUrl=n,e.persistableUrlUtils=p,e.read=s,e.toJSON=l,e.write=a}));
