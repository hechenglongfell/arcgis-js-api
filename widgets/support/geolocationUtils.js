/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../config","../../core/Error","../../core/has","../../core/Logger","../../geometry/Point","../../geometry/support/webMercatorUtils","../../portal/Portal","../../chunks/_rollupPluginBabelHelpers","../../request","../../kernel","../../core/arrayUtils","../../core/urlUtils","../../geometry","../../geometry/Extent","../../geometry/Geometry","../../geometry/Multipoint","../../geometry/Polygon","../../geometry/Polyline","../../rest/geometryService/units","../../rest/operations/generalize","../../rest/support/GeneralizeParameters","../../rest/operations/lengths","../../rest/support/LengthsParameters","../../rest/operations/offset","../../rest/support/OffsetParameters","../../rest/geometryService/project","../../rest/operations/relation","../../rest/support/RelationParameters","../../rest/operations/trimExtend","../../rest/support/TrimExtendParameters","../../rest/support/ProjectParameters"],(function(e,t,r,o,i,n,s,c,a,u,l,g,p,m,d,y,f,P,h,v,w,S,b,x,G,U,M,R,T,j,A,E){"use strict";const L=i.getLogger("esri.widgets.support.geolocationUtils"),k={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};function z(){const e=o("esri-geolocation");return e||L.warn("geolocation-unsupported","Geolocation unsupported."),e}function C(){const e=window.isSecureContext;return e||L.warn("insecure-context","Geolocation requires a secure origin."),e}function W(){return z()&&C()}function q(e){const t=15e3;return e||(e=k),new Promise(((o,i)=>{setTimeout((()=>i(new r("geolocation:timeout","getting the current geolocation position timed out"))),t),navigator.geolocation.getCurrentPosition(o,i,e)}))}function H(e,t){const{position:o,view:i}=e,n=O(o)?.coords;if(!n)throw new r("geometry-service:no-coords","Geolocation has no coordinates");return D(B(n),i,t)}function O(e){const t=e&&e.coords||{},r={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e?{coords:r,timestamp:e.timestamp}:e}function B({longitude:e,latitude:t,altitude:r}){return new n({longitude:e,latitude:t,z:r||void 0,spatialReference:{wkid:4326}})}function D(e,t,o){if(!t)return Promise.resolve(e);const i=t.spatialReference;return i.isWGS84?Promise.resolve(e):i.isWebMercator?Promise.resolve(s.geographicToWebMercator(e)):_(o).then((t=>{if(!t)throw new r("geometry-service:missing-url","Geometry service URL is missing");const n=new E({geometries:[e],outSpatialReference:i});return M.project(t,n,o).then((e=>e[0]))}))}function _(e){if(t.geometryServiceUrl)return Promise.resolve(t.geometryServiceUrl);const r=c.getDefault();return r.load(e).catch((()=>{})).then((()=>r.get("helperServices.geometry.url")))}e.getCurrentPosition=q,e.positionToPoint=H,e.supported=W,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
