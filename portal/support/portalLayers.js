/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../layers/support/layerUtils","../../layers/support/lazyLayerLoader","../PortalItem","./layersLoader","./portalItemUtils","../../support/requestPresets"],(function(e,r,t,a,n,s,c,o,i){"use strict";function u(e){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e){!e.portalItem||e.portalItem instanceof s||(e={...e,portalItem:new s(e.portalItem)});const r=yield y(e.portalItem);return new(0,r.constructor)({portalItem:e.portalItem,...r.properties})}))).apply(this,arguments)}function y(e){return p.apply(this,arguments)}function p(){return(p=r._asyncToGenerator((function*(e){yield e.load();return d(yield f(e))}))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=r._asyncToGenerator((function*(e){switch(e.type){case"Map Service":return S(e);case"Feature Service":return h(e);case"Feature Collection":return g(e);case"Scene Service":return I(e);case"Image Service":return w(e);case"Stream Service":return M();case"Vector Tile Service":return _();case"GeoJson":return F();case"CSV":return O();case"KML":return A();case"WFS":return C();case"WMTS":return J();case"WMS":return K();case"Feed":return k();default:throw new t("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}))).apply(this,arguments)}function d(e){return L.apply(this,arguments)}function L(){return(L=r._asyncToGenerator((function*(e){const r=n.layerLookupMap[e.className];return{constructor:yield r(),properties:e.properties}}))).apply(this,arguments)}function S(e){return N.apply(this,arguments)}function N(){return(N=r._asyncToGenerator((function*(e){return(yield j(e))?{className:"TileLayer"}:{className:"MapImageLayer"}}))).apply(this,arguments)}function h(e){return T.apply(this,arguments)}function T(){return(T=r._asyncToGenerator((function*(e){if(o.hasTypeKeyword(e,"Oriented Imagery Layer"))return V(e);const r=yield P(e);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return{className:"GroupLayer"}}))).apply(this,arguments)}function I(e){return G.apply(this,arguments)}function G(){return(G=r._asyncToGenerator((function*(e){const r=yield P(e);if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const r of Object.keys(a.sceneServiceLayerTypeToClassName))if(e.typeKeywords.includes(r))return{className:a.sceneServiceLayerTypeToClassName[r]};const s=yield i.fetchArcGISServiceJSON(n);return{className:a.sceneServiceLayerTypeToClassName[s?.layerType]||"SceneLayer",properties:t}}if(!1===r){return"Voxel"===(yield i.fetchArcGISServiceJSON(e.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}return{className:"GroupLayer"}}))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=r._asyncToGenerator((function*(e){yield e.load();const r=o.hasTypeKeyword(e,"Map Notes"),t=o.hasTypeKeyword(e,"Markup");if(r||t)return{className:"MapNotesLayer"};if(o.hasTypeKeyword(e,"Route Layer"))return{className:"RouteLayer"};const a=yield e.fetchData();return 1===c.getNumLayersAndTables(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=r._asyncToGenerator((function*(e){yield e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=(yield e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===t)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t)return{className:"ImageryLayer"};const a=yield i.fetchArcGISServiceJSON(e.url),n=a.cacheType?.toLowerCase(),s=a.capabilities?.toLowerCase().includes("tilesonly");return"map"===n||s?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}))).apply(this,arguments)}function M(){return{className:"StreamLayer"}}function _(){return{className:"VectorTileLayer"}}function F(){return{className:"GeoJSONLayer"}}function O(){return{className:"CSVLayer"}}function A(){return{className:"KMLLayer"}}function C(){return{className:"WFSLayer"}}function K(){return{className:"WMSLayer"}}function J(){return{className:"WMTSLayer"}}function k(){return{className:"StreamLayer"}}function V(e){return W.apply(this,arguments)}function W(){return(W=r._asyncToGenerator((function*(e){yield e.load();const r=yield e.fetchData();return r.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:r}}))).apply(this,arguments)}function j(e){return D.apply(this,arguments)}function D(){return(D=r._asyncToGenerator((function*(e){return(yield i.fetchArcGISServiceJSON(e.url)).tileInfo}))).apply(this,arguments)}function P(e){return $.apply(this,arguments)}function $(){return($=r._asyncToGenerator((function*(e){const r=e.url;if(!r||r.match(/\/\d+$/))return{};yield e.load();const t=yield e.fetchData();if("Feature Service"===e.type){const e=x(yield c.preprocessFSItemData(t,r));if("object"==typeof e){const r=c.getSubtypeGroupLayerIds(t);e.className=null!=e.id&&r.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer"}return e}if(c.getNumLayersAndTables(t)>0)return x(t);return x(yield i.fetchArcGISServiceJSON(r))}))).apply(this,arguments)}function x(e){return 1===c.getNumLayersAndTables(e)&&{id:c.getFirstLayerOrTableId(e)}}e.fromItem=u,e.selectLayerClassPath=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
