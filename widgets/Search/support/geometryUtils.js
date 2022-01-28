/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../geometry/support/scaleUtils","../../../geometry/Extent"],(function(e,t,r,n,i,o,s){"use strict";const a=n.getLogger("esri.widgets.Search.support.geometryUtils");function l(e,t){var n,i;if(!t)return a.error("missing-parameter: view is missing."),Promise.reject(new r("searchgeometryutils:missing-parameter","view is missing."));if(!e)return a.error("missing-parameter: point is missing."),Promise.reject(new r("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||"2d"===t.type)return Promise.resolve(e);const o=null==t||null==(n=t.map)?void 0:n.ground;return o&&o.layers.length?o.queryElevation(e,{cache:null==(i=t.basemapTerrain)?void 0:i.elevationQueryCache}).then((e=>e.geometry)):Promise.resolve(e)}function m(e){if(i.isNone(e))return null;switch(e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"multipoint":return e.getPoint(0);case"polyline":return e.getPoint(0,0)}return null}function u(e,t,r){return i.isNone(e)?null:"extent"===e.type?e:"multipoint"===e.type||"polygon"===e.type||"polyline"===e.type?e.extent:"point"===e.type?p(e,t,r):void 0}function c(e,t,r){return i.isNone(e)||i.isNone(t)?null:p(e.center,t,r)}function p(e,t,r){const n=e.hasZ?e.z:void 0;if(t&&t.map){return(r?o.getExtentForScale(t,r):t.extent).clone().centerAt(e).set({zmax:n,zmin:n})}return new s({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference,zmin:n,zmax:n})}e.createExtentFromGeometry=u,e.getPointFromGeometry=m,e.getPointWithElevation=l,e.scaleExtent=c,Object.defineProperty(e,"__esModule",{value:!0})}));
