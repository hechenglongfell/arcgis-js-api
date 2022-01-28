/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/jsonMap","../../../core/maybe","../../../core/unitUtils","../../../geometry/support/extentUtils","../../../geometry/support/jsonUtils","../../../geometry/support/normalizeUtils","../../../geometry/support/spatialReferenceUtils","../centroid","../featureConversionUtils","../OptimizedGeometry","./projectionSupport"],(function(e,t,r,n,i,o,s,l,u,c,a,p,y,m){"use strict";const f=new n.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({}),d=new y,h=new y,S=new y,G={esriGeometryPoint:p.convertToPoint,esriGeometryPolyline:p.convertToPolyline,esriGeometryPolygon:p.convertToPolygon,esriGeometryMultipoint:p.convertToMultipoint};function R(e,t,r,n=e.hasZ,o=e.hasM){if(i.isNone(t))return null;const s=e.hasZ&&n,l=e.hasM&&o;if(r){const i=p.quantizeOptimizedGeometry(S,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,o);return p.convertToPoint(i,s,l)}return p.convertToPoint(t,s,l)}function _(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=a.getCentroidOptimizedGeometry(new y,t.geometry,e.hasZ,e.hasM)),R(e,t.centroid,r)):null}function M(e,t,r,n,o,s,l=t,u=r){const c=t&&l,a=r&&u,y=i.isSome(n)?"coords"in n?n:n.geometry:null;if(i.isNone(y))return null;if(o){let n=p.generalizeOptimizedGeometry(h,y,t,r,e,o,l,u);return s&&(n=p.quantizeOptimizedGeometry(S,n,c,a,e,s)),G[e](n,c,a)}if(s){const n=p.quantizeOptimizedGeometry(S,y,t,r,e,s,l,u);return G[e](n,c,a)}return p.removeZMValues(d,y,t,r,l,u),G[e](d,c,a)}function z(e,t,r){return P.apply(this,arguments)}function P(){return(P=r._asyncToGenerator((function*(e,t,r){const{outFields:n,orderByFields:i,groupByFieldsForStatistics:o,outStatistics:s}=e;if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(o)for(let l=0;l<o.length;l++)o[l]=o[l].trim();if(s)for(let l=0;l<s.length;l++)s[l].onStatisticField&&(s[l].onStatisticField=s[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),N(e,t,r)}))).apply(this,arguments)}function U(e,t,r){return O.apply(this,arguments)}function O(){return(O=r._asyncToGenerator((function*(e,t,r){return N(e,t,r)}))).apply(this,arguments)}function N(e,t,r){return T.apply(this,arguments)}function T(){return(T=r._asyncToGenerator((function*(e,t,r){if(!e)return null;let{where:n}=e;if(e.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||t&&t===n)&&(e.where=null),!e.geometry)return e;let o=yield v(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;o=s.getGeometryExtent(o),o.spatialReference=t}e.geometry=o,yield m.checkProjectionSupport(o.spatialReference,r);const c=(yield u.normalizeCentralMeridian(l.fromJSON(o)))[0];if(i.isNone(c))throw g;const a=c.toJSON(),p=yield m.project(a,a.spatialReference,r);if(!p)throw g;return p.spatialReference=r,e.geometry=p,e}))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=r._asyncToGenerator((function*(e){const{geometry:t,distance:r,units:n}=e;if(null==r||"vertexAttributes"in t)return t;const i=t.spatialReference,s=n?f.fromJSON(n):o.getUnitString(i),l=i&&(c.isGeographic(i)||c.isWebMercator(i))?t:yield m.checkProjectionSupport(i,c.WGS84).then((()=>m.project(t,c.WGS84)));return(yield F())(l.spatialReference,l,r,s)}))).apply(this,arguments)}function F(){return j.apply(this,arguments)}function j(){return(j=r._asyncToGenerator((function*(){return(yield new Promise(((t,r)=>e(["../../../geometry/geometryEngineJSON"],t,r)))).geodesicBuffer}))).apply(this,arguments)}function E(e){return e&&J in e?JSON.parse(JSON.stringify(e,b)):e}const J="_geVersion",b=(e,t)=>e!==J?t:void 0;t.QUERY_ENGINE_EMPTY_RESULT=g,t.cleanFromGeometryEngine=E,t.getCentroid=_,t.getGeometry=M,t.normalizeFilter=U,t.normalizeQuery=z,t.normalizeQueryLike=N,t.transformCentroid=R,Object.defineProperty(t,"__esModule",{value:!0})}));
