/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Collection","../../core/has","../../core/promiseUtils","./lazyLayerLoader","../../portal/PortalItem","../../portal/support/featureCollectionUtils","../../portal/support/portalLayers","../../renderers/support/styleUtils"],(function(e,r,a,y,t,i,n,o,l,L){"use strict";function p(e,r,a){return c.apply(this,arguments)}function c(){return(c=r._asyncToGenerator((function*(e,r,a){if(!r)return;const y=[];for(const t of r){const e=f(t,a);"GroupLayer"===t.layerType?y.push(W(e,t,a)):y.push(e)}const i=yield t.eachAlways(y);for(const t of i)!t.value||a.filter&&!a.filter(t.value)||e.add(t.value)}))).apply(this,arguments)}const u={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"UnsupportedLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},T={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function f(e,r){return M.apply(this,arguments)}function M(){return(M=r._asyncToGenerator((function*(e,r){return G(yield v(e,r),e,r)}))).apply(this,arguments)}function G(e,r,a){return g.apply(this,arguments)}function g(){return(g=r._asyncToGenerator((function*(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&A(r)&&(yield C(y,r,a.context)),yield L.loadStyleRenderer(y,a.context),y}))).apply(this,arguments)}function v(e,r){return m.apply(this,arguments)}function m(){return(m=r._asyncToGenerator((function*(e,r){const a=r.context,y=b(a);let t=e.layerType||e.type;!t&&r&&r.defaultLayerType&&(t=r.defaultLayerType);const L=y[t];let p=L?i.layerLookupMap[L]:i.layerLookupMap.UnknownLayer;const c=a&&a.portal;if(h(e)){if(e.itemId){const r=new n({id:e.itemId,portal:c});yield r.load();const a=(yield l.selectLayerClassPath(r)).className||"UnknownLayer";p=i.layerLookupMap[a]}}else"ArcGISFeatureLayer"===t?(yield o.isMapNotesLayer(e,c))?p=i.layerLookupMap.MapNotesLayer:(yield o.isRouteLayer(e,c))?p=i.layerLookupMap.RouteLayer:A(e)&&(p=i.layerLookupMap.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?p=i.layerLookupMap.WMTSLayer:"WFS"===t&&"2.0.0"!==e.wfsInfo.version&&(p=i.layerLookupMap.UnsupportedLayer);return p()}))).apply(this,arguments)}function A(e){if("ArcGISFeatureLayer"!==e.layerType||h(e))return!1;const r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function h(e){return"Feature Collection"===e.type}function b(e){let r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;default:r=u}else switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=I;break;default:r=d}return r}function W(e,r,a){return F.apply(this,arguments)}function F(){return(F=r._asyncToGenerator((function*(e,r,y){const t=new a,i=p(t,Array.isArray(r.layers)?r.layers:[],y),n=yield e;if(yield i,"group"===n.type)return n.layers.addMany(t),n}))).apply(this,arguments)}function C(e,r,a){return k.apply(this,arguments)}function k(){return(k=r._asyncToGenerator((function*(e,r,a){const y=i.layerLookupMap.FeatureLayer,t=yield y(),n=r.featureCollection,o=n.showLegend,l=n.layers.map(((y,i)=>{var n,l;const L=new t;L.read(y,a);const p={...a,ignoreDefaults:!0};return L.read({id:`${e.id}-sublayer-${i}`,visibility:null==(n=null==(l=r.visibleLayers)?void 0:l.includes(i))||n},p),null!=o&&L.read({showLegend:o},p),L}));e.layers.addMany(l)}))).apply(this,arguments)}e.populateOperationalLayers=p,Object.defineProperty(e,"__esModule",{value:!0})}));
