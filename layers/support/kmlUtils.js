/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../config","../../kernel","../../PopupTemplate","../../request","../../core/lang","../../core/urlUtils","../../geometry/SpatialReference","../../geometry/support/aaBoundingBox","../../geometry/support/boundsUtils","../../renderers/support/jsonUtils","../../rest/support/FeatureSet"],(function(e,t,o,r,n,s,i,a,l,u,f,p,y){"use strict";const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const t=e.folders||[],o=t.slice(),r=new Map,n=new Map,s=new Map,a=new Map,l=new Map,u={esriGeometryPoint:n,esriGeometryPolyline:s,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=i.clone(e);t.featureSet.features=[];const o=e.featureSet.geometryType;r.set(o,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===o?S(n,l,e.featureSet.features):"esriGeometryPolyline"===o?S(s,l,e.featureSet.features):"esriGeometryPolygon"===o&&S(a,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((r=>{const n=I(r,t.id,e.networkLinks);n&&o.push(n)}))})),o.forEach((e=>{e.featureInfos&&(e.points=i.clone(r.get("esriGeometryPoint")),e.polylines=i.clone(r.get("esriGeometryPolyline")),e.polygons=i.clone(r.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const o=u[t.type].get(t.id);o&&e[c[t.type]].featureSet.features.push(o);break}case"GroundOverlay":{const o=l.get(t.id);o&&e.mapImages.push(o);break}}})),e.fullExtent=b([e]))}));const f=b(o);return{folders:t,sublayers:o,extent:f}}function m(e,t,n,i){const l=r.id&&r.id.findCredential(e);e=a.addQueryParameters(e,{token:l&&l.token});const u=o.kmlServiceUrl;return s(u,{query:{url:e,model:"simple",folders:"",refresh:0!==n||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})}function g(e,t,o=null,r=[]){const n=[],s={},i=t.sublayers,a=t.folders.map((e=>e.id));return i.forEach((t=>{const i=new e;if(o?i.read(t,o):i.read(t),r.length&&a.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),s[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=s[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else n.unshift(i)})),n}function S(e,t,o){o.forEach((o=>{e.set(o.attributes[t],o)}))}function h(e,t){let o;return t.some((t=>t.id===e&&(o=t,!0))),o}function I(e,t,o){const r=h(e,o);return r&&(r.parentFolderId=t,r.networkLink=r),r}function G(e){return P.apply(this,arguments)}function P(){return(P=t._asyncToGenerator((function*(e){const t=y.fromJSON(e.featureSet).features,o=e.layerDefinition,r=p.fromJSON(o.drawingInfo.renderer),s=n.fromJSON(e.popupInfo),i=[];for(const n of t){const e=yield r.getSymbolAsync(n);n.symbol=e,n.popupTemplate=s,n.visible=!0,i.push(n)}return i}))).apply(this,arguments)}function b(e){const t=u.create(),o=u.create(u.NEGATIVE_INFINITY);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)f.getBoundsXYZ(t,e.geometry),u.expandWithAABB(o,t);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)f.getBoundsXYZ(t,e.geometry),u.expandWithAABB(o,t);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)f.getBoundsXYZ(t,e.geometry),u.expandWithAABB(o,t);if(r.mapImages)for(const e of r.mapImages)f.getBoundsXYZ(t,e.extent),u.expandWithAABB(o,t)}return u.equals(o,u.NEGATIVE_INFINITY)?null:{xmin:o[0],ymin:o[1],zmin:o[2],xmax:o[3],ymax:o[4],zmax:o[5],spatialReference:l.WGS84}}e.computeExtent=b,e.fetchService=m,e.getGraphics=G,e.parseKML=d,e.sublayersFromJSON=g,Object.defineProperty(e,"__esModule",{value:!0})}));
