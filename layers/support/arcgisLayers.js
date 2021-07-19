/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/maybe","../../core/urlUtils","./arcgisLayerUrl","./lazyLayerLoader"],(function(e,r,n,t,l,a,o,s,u){"use strict";function i(e){return Object.freeze({__proto__:null,default:e})}function y(e){return c.apply(this,arguments)}function c(){return(c=n._asyncToGenerator((function*(r){var n;const t=null==(n=r.properties)?void 0:n.customParameters,l=yield f(r.url,t),a={...r.properties,url:r.url};if(!l.sublayerIds)return null!=l.layerOrTableId&&(a.layerId=l.layerOrTableId,a.sourceJSON=l.sourceJSON),new l.Constructor(a);const o=new(0,(yield new Promise((function(r,n){e(["../GroupLayer"],(function(e){r(i(e))}),n)}))).default)({title:l.parsedUrl.title});return p(o,l,a),o}))).apply(this,arguments)}function d(e,r){return e?e.find((e=>e.id===r)):null}function p(e,r,n){function t(e,t){const l={...n,layerId:e,sublayerTitleMode:"service-name"};return a.isSome(t)&&(l.sourceJSON=t),new r.Constructor(l)}r.sublayerIds.forEach((n=>{const l=t(n,d(r.sublayerInfos,n));e.add(l)})),r.tableIds.forEach((n=>{const l=t(n,d(r.tableInfos,n));e.tables.add(l)}))}function f(e,r){return h.apply(this,arguments)}function h(){return(h=n._asyncToGenerator((function*(e,r){let n=s.parse(e);if(a.isNone(n)&&(n=yield v(e,r)),a.isNone(n))throw new l("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:o}=n;let u;const i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":u=null!=o?"FeatureLayer":P(e,r).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=N(e,r).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=N(n.url.path,r).then((e=>{const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"}));break;default:u=i[t]}const y={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===t,d={parsedUrl:n,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},p=yield u;if(y[p]&&null==o){const n=yield S(e,t,r);c&&(d.sublayerInfos=n.layerInfos,d.tableInfos=n.tableInfos);if(1!==n.layerIds.length+n.tableIds.length)d.sublayerIds=n.layerIds,d.tableIds=n.tableIds;else if(c){var f,h;d.layerOrTableId=null!=(f=n.layerIds[0])?f:n.tableIds[0],d.sourceJSON=null!=(h=n.layerInfos[0])?h:n.tableInfos[0]}}return d.Constructor=yield w(p),d}))).apply(this,arguments)}function v(e,r){return b.apply(this,arguments)}function b(){return(b=n._asyncToGenerator((function*(e,r){var n;const t=yield N(e,r);let l=null,u=null;const i=t.type;if("Feature Layer"===i||"Table"===i?(l="FeatureServer",u=t.id):"indexedVector"===i?l="VectorTileServer":t.hasOwnProperty("mapName")?l="MapServer":t.hasOwnProperty("bandCount")&&t.hasOwnProperty("pixelSizeX")?l="ImageServer":t.hasOwnProperty("maxRecordCount")&&t.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":t.hasOwnProperty("streamUrls")?l="StreamServer":I(t)?(l="SceneServer",u=t.id):t.hasOwnProperty("layers")&&I(null==(n=t.layers)?void 0:n[0])&&(l="SceneServer"),!l)return null;const y=null!=u?s.parseNonStandardSublayerUrl(e):null;return{title:a.isSome(y)&&t.name||o.getFilename(e),serverType:l,sublayer:u,url:{path:a.isSome(y)?y.serviceUrl:o.urlToObject(e).path}}}))).apply(this,arguments)}function I(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}function S(e,r,n){return m.apply(this,arguments)}function m(){return(m=n._asyncToGenerator((function*(e,r,n){var t,l;let a,o=!1;if("FeatureServer"===r){const r=yield L(e,n);o=!!r.layersJSON,a=r.layersJSON||r.serviceJSON}else a=yield N(e,n);const s=null==(t=a)?void 0:t.layers,u=null==(l=a)?void 0:l.tables;return{layerIds:(null==s?void 0:s.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:o?s:[],tableInfos:o?u:[]}}))).apply(this,arguments)}function T(e){return!e.type||"Feature Layer"===e.type}function L(e,r){return O.apply(this,arguments)}function O(){return(O=n._asyncToGenerator((function*(e,r){var n,t;let l=yield N(e,r);l=l||{},l.layers=(null==(n=l.layers)?void 0:n.filter(T))||[];const a={serviceJSON:l};if(l.currentVersion<10.5)return a;const o=yield N(e+"/layers",r);return a.layersJSON={layers:(null==o||null==(t=o.layers)?void 0:t.filter(T))||[],tables:(null==o?void 0:o.tables)||[]},a}))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=n._asyncToGenerator((function*(e){return(0,u.layerLookupMap[e])()}))).apply(this,arguments)}function P(e,r){return _.apply(this,arguments)}function _(){return(_=n._asyncToGenerator((function*(e,r){return(yield N(e,r)).tileInfo}))).apply(this,arguments)}function N(e,r){return C.apply(this,arguments)}function C(){return(C=n._asyncToGenerator((function*(e,r){return(yield t(e,{responseType:"json",query:{f:"json",...r}})).data}))).apply(this,arguments)}r.fromUrl=y,Object.defineProperty(r,"__esModule",{value:!0})}));
