/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../geometry","../../../core/Error","../../../geometry/support/webMercatorUtils","../../../rest/support/ProjectParameters","../../../geometry/Point","../../../geometry/SpatialReference"],(function(e,t,o,n,r,i,c){"use strict";const a={utm:{conversionMode:"utmDefault",addSpaces:!0},usng:{numOfDigits:5,rounding:!1,addSpaces:!1},mgrs:{rounding:!1}},s=new Array(3);function u(e,t){const o=d(t);return[e[0].toFixed(o),e[1].toFixed(o)]}function d(e){return e>=500?6:e<500&&e>=50?7:e<50&&e>=5?8:9}function f(e){const{geometryServicePromise:t,coordinate:n,spatialReference:r,formatName:c}=e;return t.then((e=>e.fromGeoCoordinateString({strings:[n],sr:r,conversionType:c}).then((e=>{const t=new i({x:e[0][0],y:e[0][1],spatialReference:r});if(!m(t))throw e;return t})).catch((e=>{throw new o("coordinate-conversion:from-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))))}function l(e,t){const o=e.indexOf(",")>=0?",":" ",[n,r,a]=e.split(o).map((e=>{const t=e.trim();return t?Number(t):null}));if(!p(n)||!p(r))return null;const s=new i({x:n,y:r,spatialReference:t||c.WGS84});return a&&(s.z=a,s.hasZ=!0),s}function p(e){return"number"==typeof e&&isFinite(e)}function m(e){return e&&p(e.x)&&p(e.y)}function g(e,t){if(e.spatialReference.isGeographic&&t){const[o,n]=u([e.x,e.y],t);return`${o}, ${n}`}return`${e.x.toFixed(3)}, ${e.y.toFixed(3)}`}function w(e,t){const{spatialReference:i,geometryServicePromise:c,location:a,scale:u}=e;if(!i||a.spatialReference.wkid===i.wkid)return Promise.resolve({location:a,coordinate:g(a,u)});if((a.spatialReference.isWGS84||a.spatialReference.isWebMercator)&&(i.isWGS84||i.isWebMercator))return Promise.resolve({location:n.project(a,i),coordinate:g(a,u)});if(s[0]===a&&s[1]===i.wkid)return s[2];s[0]=a,s[1]=i.wkid;const d=c.then((e=>e.project(new r({geometries:[a],outSpatialReference:i}),{signal:t}).then((e=>{if(!m(e[0]))throw e[0];return{location:e[0],coordinate:g(e[0],u)}})).catch((e=>{throw new o("coordinate-conversion:projection-failed","Failed to project point",{projectionResult:e})}))));return s[2]=d,d}function y(e){const{formatName:t,location:n,geometryServicePromise:r}=e,i=a[t]||{},c={coordinates:[[n.x,n.y]],sr:n.spatialReference,conversionType:t,...i};return r.then((e=>e.toGeoCoordinateString(c).then((e=>{const t=e[0];if(!t)throw e;return t})).catch((e=>{throw new o("coordinate-conversion:to-geo-coordinate-string-failed","Failed to convert coordinate notation",{notationResult:e})}))))}function h(e){return"dd"===e||"dms"===e||"ddm"===e||"mgrs"===e||"usng"===e||"utm"===e}e.clipLonLat=u,e.fromGeoCoordinateString=f,e.fromXY=l,e.getDegreePrecision=d,e.isSupportedNotation=h,e.isValidPoint=m,e.pointToCoordinate=g,e.project=w,e.toGeoCoordinateString=y,Object.defineProperty(e,"__esModule",{value:!0})}));
