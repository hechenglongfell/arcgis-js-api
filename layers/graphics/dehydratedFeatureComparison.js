/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe"],(function(e,n,t){"use strict";function r(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],i=n[t];if(r.length!==i.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==i[e])return!1}return!0}function i(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(!r(e[t],n[t]))return!1;return!0}function u(e,n){return!!c(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function a(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!c(e.spatialReference,n.spatialReference)&&i(e.paths,n.paths))}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!c(e.spatialReference,n.spatialReference)&&i(e.rings,n.rings))}function f(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!c(e.spatialReference,n.spatialReference)&&r(e.points,n.points))}function l(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!c(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function c(e,n){return e===n||e&&n&&e.equals(n)}function o(e,n){if(e===n)return!0;if(t.isNone(e)||t.isNone(n))return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return u(e,n);case"extent":return l(e,n);case"polyline":return a(e,n);case"polygon":return s(e,n);case"multipoint":return f(e,n);case"mesh":return!1;default:return}}function h(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const i of t)if(e[i]!==n[i])return!1;return!0}function p(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!o(e.geometry,n.geometry)&&!!h(e.attributes,n.attributes))}e.equals=p,e.pointEquals=u,Object.defineProperty(e,"__esModule",{value:!0})}));
