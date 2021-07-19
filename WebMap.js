/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./kernel","./Map","./Viewpoint","./core/arrayUtils","./core/Collection","./core/Error","./core/Loadable","./core/loadAll","./core/Logger","./core/maybe","./core/MultiOriginJSONSupport","./core/Promise","./core/promiseUtils","./core/urlUtils","./core/watchUtils","./core/accessorSupport/decorators/property","./core/has","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/reader","./core/accessorSupport/decorators/subclass","./core/accessorSupport/decorators/writer","./core/accessorSupport/originUtils","./core/accessorSupport/read","./geometry/SpatialReference","./geometry/support/webMercatorUtils","./layers/support/arcgisLayerUrl","./networks/UtilityNetwork","./portal/Portal","./portal/PortalItem","./portal/support/portalItemUtils","./rest/support/ProjectParameters","./support/basemapUtils","./support/MapFloorInfo","./webdoc/RangeInfo","./webdoc/Widgets","./webdoc/support/thumbnailUtils","./webdoc/support/writeUtils","./webmap/ApplicationProperties","./webmap/Bookmark","./webmap/InitialViewProperties","./webmap/Version","./webmap/background/ColorBackground"],(function(e,t,r,i,o,n,a,s,l,p,u,c,d,h,y,m,f,_,w,g,b,v,S,A,I,T,O,L,P,V,U,F,W,G,M,R,N,k,K,x,C,j,B,J,E){"use strict";const D=new J.Version(2,20),$="Web Map",z=s.ofType(j),q=s.ofType(V),H=c.getLogger("esri.WebMap"),Q=new Map;Q.set("image/jpeg","jpeg"),Q.set("image/jpg","jpg"),Q.set("image/png","png"),Q.set("image/gif","gif");const X="ArcGIS Pro",Y="ArcGIS API for JavaScript",Z="CollectorDisabled",ee="Collector",te="Data Editing",re="OfflineDisabled",ie="Offline",oe="Workforce Project",ne="Workforce Worker",ae="Workforce Dispatcher",se="Offline Map Areas",le="FieldMapsDisabled",pe="DeveloperBasemap",ue=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((e=>e.toLowerCase()));let ce=function(r){function o(e){var t;return(t=r.call(this,e)||this).applicationProperties=null,t.bookmarks=new z,t.floorInfo=null,t.initialViewProperties=new B,t.portalItem=null,t.presentation=null,t.sourceVersion=null,t.widgets=null,t.utilityNetworks=null,t.authoringApp=t.authoringAppVersion=null,t._isAuthoringAppSetByUser=t._isAuthoringAppVersionSetByUser=!1,t}t._inheritsLoose(o,r);var s=o.prototype;return s.destroy=function(){const e=this.portalItem;this.portalItem=null,null==e||e.destroy()},s.initialize=function(){if(this.when().catch((e=>{H.error("#load()","Failed to load web map",e)})),this.resourceInfo){let t;try{t=this._validateJSON(this.resourceInfo)}catch(e){return void this.addResolvingPromise(Promise.reject(e))}this.read(t)}},s.writeAuthoringApp=function(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp=Y},s.writeAuthoringAppVersion=function(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=i.version},s.readInitialViewProperties=function(e,t){var r;const i=new B;t.background&&(i.background=E.fromJSON(t.background));const o=null==(r=t.initialState)?void 0:r.viewpoint;if(o){if(o.rotation){J.Version.parse(t.version||"","webmap").lessThan(2,20)&&t.authoringApp===X&&(o.rotation*=-1)}i.viewpoint=n.fromJSON(o)}return t.mapRangeInfo&&(i.rangeInfo=N.fromJSON(t.mapRangeInfo)),t.spatialReference&&(i.spatialReference=O.fromJSON(t.spatialReference)),i},s.writeInitialViewProperties=function(e,t,r,i){if(!e)return;const o=e.background;o&&o.color&&(t.background=o.write(null,i)),e.viewpoint&&(t.initialState={viewpoint:e.viewpoint.write(null,i)}),e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(i)),e.spatialReference&&(t.spatialReference=e.spatialReference.write(null,i))},s.writeLayers=function(e,t,r,i){t[r]=this._writeLayers(e,i,"operational-layers")},s.readSourceVersion=function(e,t){const[r,i]=t.version.split(".");return new J.Version(parseInt(r,10),parseInt(i,10))},s.writeSourceVersion=function(e,t,r){t[r]=`${D.major}.${D.minor}`},s.writeTables=function(e,t,r,i){const o=this._writeLayers(e,i,"tables");o.length&&(t[r]=o)},s.load=function(e){return this.addResolvingPromise(this._loadFromSource()),Promise.resolve(this)},s.loadAll=function(){return u.loadAll(this,(e=>{e(this.ground,this.basemap,this.layers,this.tables)}))},s.read=function(e,t){t={...t,origin:"web-map"};const i=this._getAuthoringPropsState();T.readLoadable(this,e,(t=>r.prototype.read.call(this,e,t)),t),this._restoreAuthoringPropsFromState(i)},s.write=function(e,t){if("loaded"!==this.loadStatus){const e=new l("webmap:not-loaded","Web map must be loaded before it can be serialized");throw H.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),e}return this._removeDanglingLayerRefs(),t={...t,origin:"web-map",restrictedWebMapWriting:!0,webmap:this},r.prototype.write.call(this,e,t)},s.save=function(){var e=t._asyncToGenerator((function*(e){e=e||{},this._validateItem(),yield this._updateFromPromise,yield this.load(),yield this._loadLayerContainers(),yield this._beforeSave(),this._validateMap();const t=this.portalItem,r={origin:"web-map",messages:[],writtenProperties:[],url:t.itemUrl&&f.urlToObject(t.itemUrl),portal:t.portal||U.getDefault()},i=this.write(null,r);return this._validateJSONForWriting(r,e),yield this._updateItemProperties(t),yield this._updateItem(t,i,r),yield this._updateItemThumbnail(),t}));function r(t){return e.apply(this,arguments)}return r}(),s.saveAs=function(){var e=t._asyncToGenerator((function*(e,t){t=t||{};const r=this._getPortalItem(e);yield this._updateFromPromise,yield this.load(),yield this._loadLayerContainers(),yield this._beforeSave(),this._validateMap();const i={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:r.portal},o=this.write(null,i);this._validateJSONForWriting(i,t),yield this._updateItemPropertiesForSaveAs(r);const n=this._getThumbnailState();return yield this._createItem(r,o,i,t),this._restoreThumbnailFromState(n),yield this._updateItemThumbnail(),r}));function r(t,r){return e.apply(this,arguments)}return r}(),s.updateFrom=function(){var e=t._asyncToGenerator((function*(e,t){const r=this._updateFromInternal(e,t);this._updateFromPromise=r,yield r;r===this._updateFromPromise&&(this._updateFromPromise=null)}));function r(t,r){return e.apply(this,arguments)}return r}(),s.getLayerJSONFromResourceInfo=function(e){var t,r,i,o;const n=this.resourceInfo;return this._collectAllLayersJSON(a.flatten([null==n||null==(t=n.baseMap)?void 0:t.baseMapLayers,null==n?void 0:n.operationalLayers,null==(r=this.basemap)||null==(i=r.resourceInfo)||null==(o=i.data)?void 0:o.baseMapLayers])).find((t=>t.id===e.id))},s._collectAllLayersJSON=function(e){return e.reduce(((e,t)=>(e.push(t),"GroupLayer"===t.layerType&&(e=e.concat(this._collectAllLayersJSON(t.layers||[]))),e)),[])},s._writeLayers=function(e,t,r){t={...t,layerContainerType:r};return e.map((e=>d.unwrap(x.getLayerJSON(e,"tables"===r?null:this.getLayerJSONFromResourceInfo(e),t)))).filter(Boolean).toArray()},s._loadFromSource=function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):Promise.resolve(null)},s._loadFromItem=function(e){return e.load().catch((e=>{throw new l("webmap:load-portal-item","Failed to load portal item",{error:e})})).then((()=>{if("Web Map"!==e.type)throw new l("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:e.type})})).then((()=>e.fetchData())).then((t=>(this.resourceInfo=t,this._readAndLoadFromJSON(t,{origin:"web-map",portal:e.portal||U.getDefault()})))).then((()=>this._computeInitialViewpoint()))},s._readAndLoadFromJSON=function(e,t){const r=this._validateJSON(e);return this.read(r,t),this._loadFromJSON(r,t)},s._validateJSON=function(e){const t=J.Version.parse(e.version||"","webmap");return D.validate(t),e.version=`${t.major}.${t.minor}`,e},s._loadFromJSON=function(t,r){const i={context:{...r,layerContainerType:"operational-layers"}};return this.portalItem&&(i.context.portal=this.portalItem.portal||U.getDefault()),new Promise((function(t,r){e(["./layers/support/layersCreator"],t,r)})).then((({populateOperationalLayers:e})=>{const r=[],o=t.operationalLayers;o&&o.length&&r.push(e(this.layers,o,i));const n={...i,context:{...i.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},a=t.tables;return a&&a.length&&r.push(e(this.tables,a,n)),m.eachAlways(r).then((()=>{}))}))},s._computeInitialViewpoint=function(){var e=t._asyncToGenerator((function*(){var e,t;let r=this.initialViewProperties;if(null==(e=r)||null==(t=e.viewpoint)?void 0:t.targetGeometry)return;const i=yield this._getExtentFromItem();i&&(r=r?r.clone():new B,r.viewpoint=new n,r.viewpoint.targetGeometry=i,this.initialViewProperties=r)}));function r(){return e.apply(this,arguments)}return r}(),s._getExtentFromItem=function(){var r=t._asyncToGenerator((function*(){var t,r;const i=null==(t=this.initialViewProperties)?void 0:t.spatialReference,o=null==(r=this.portalItem)?void 0:r.extent;if(i&&o){if(i.isWGS84)return o.clone();if(i.isWebMercator)return L.geographicToWebMercator(o);return(yield new Promise((function(t,r){e(["./portal/support/geometryServiceUtils"],t,r)}))).create(this.portalItem).then((e=>{const t=new G;return t.geometries=[o],t.outSpatialReference=i,e.project(t)})).then((e=>e[0])).catch((e=>(H.error("Error projecting item's extent:",e),null)))}return null}));function i(){return r.apply(this,arguments)}return i}(),s._removeDanglingLayerRefs=function(){const e=this.applicationProperties,t=e&&e.viewing&&e.viewing.search,r=e=>!!this.allLayers.find((t=>t.id===e));t&&t.layers&&(t.layers=t.layers.filter((e=>r(e.id)))),t&&t.tables&&(t.tables=t.tables.filter((e=>!!this.tables.find((t=>t.id===e.id)))));const i=e&&e.editing&&e.editing.locationTracking;i&&i.info&&!r(i.info.layerId)&&(e.editing=null);const o=this.presentation&&this.presentation.slides;o&&o.forEach((e=>{e.visibleLayers&&(e.visibleLayers=e.visibleLayers.filter((e=>r(e.id))))}))},s._validateMap=function(){if(!this.basemap||!this.basemap.baseLayers.length)throw new l("webmap:save","Map does not have a valid basemap with a base layer.")},s._validateItem=function(){if(!this.portalItem)throw H.error("save: requires the portalItem property to be set"),new l("webmap:portal-item-not-set","Portal item to save to has not been set on the WebMap");this._validateItemType(this.portalItem)},s._validateItemType=function(e){if(e.type!==$)throw new l("webmap:portal-item-wrong-type",`Portal item needs to have type "${$}"`)},s._loadLayerContainers=function(){const e=[];return this.basemap&&e.push(this.basemap.load()),this.ground&&e.push(this.ground.load()),m.eachAlways(e).then((()=>{}))},s._beforeSave=function(){var e=t._asyncToGenerator((function*(){const e=[];for(const t of this.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const r=t.beforeSave();r&&e.push(r)}yield m.eachAlways(e)}));function r(){return e.apply(this,arguments)}return r}(),s._loadAllLayers=function(){const e=this._getAllLayersAndTables().map((e=>e.load()));return m.eachAlways(e).then((()=>{}))},s._getAllLayersAndTables=function(){return this.allLayers.concat(this.allTables)},s._validateJSONForWriting=function(e,t){let r=e.messages.filter((e=>"error"===e.type)).map((e=>new l(e.name,e.message,e.details)));if(t.ignoreUnsupported&&(r=r.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name))),r.length>0)throw new l("webmap:save","Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})},s._updateItemProperties=function(){var e=t._asyncToGenerator((function*(e){e.extent=yield this._getWGS84Extent(this.initialViewProperties.viewpoint.targetGeometry),yield this._updateTypeKeywords(e)}));function r(t){return e.apply(this,arguments)}return r}(),s._updateItemPropertiesForSaveAs=function(){var e=t._asyncToGenerator((function*(e){W.removeTypeKeyword(e,Z),W.removeTypeKeyword(e,re),W.removeTypeKeyword(e,oe),W.removeTypeKeyword(e,ne),W.removeTypeKeyword(e,ae),W.removeTypeKeyword(e,se),W.removeTypeKeyword(e,le),yield this._updateItemProperties(e)}));function r(t){return e.apply(this,arguments)}return r}(),s._getWGS84Extent=function(){var e=t._asyncToGenerator((function*(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return this._projectToWGS84(r)}));function r(t){return e.apply(this,arguments)}return r}(),s._projectToWGS84=function(){var r=t._asyncToGenerator((function*(t){const r=t.spatialReference;if(r.isWGS84)return t.clone();if(r.isWebMercator)return L.webMercatorToGeographic(t);const i=yield new Promise((function(t,r){e(["./portal/support/geometryServiceUtils"],t,r)})),o=yield i.create(this.portalItem),n=new G;n.geometries=[t],n.outSpatialReference=O.WGS84;return(yield o.project(n))[0]}));function i(e){return r.apply(this,arguments)}return i}(),s._updateTypeKeywords=function(){var e=t._asyncToGenerator((function*(e){W.addTypeKeyword(e,Y),yield this._loadAllLayers(),this._evalCollectorKeyword(e),this._evalDataEditingKeyword(e),this._evalOfflineKeyword(e),this._evalDeveloperBasemapKeyword(e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}));function r(t){return e.apply(this,arguments)}return r}(),s._evalCollectorKeyword=function(e){W.hasTypeKeyword(e,Z)||W.hasTypeKeyword(e,oe)||W.hasTypeKeyword(e,ne)||W.hasTypeKeyword(e,ae)||!this._hasEditableFeatureLayer()?W.removeTypeKeyword(e,ee):W.addTypeKeyword(e,ee)},s._evalDataEditingKeyword=function(e){this._hasEditableFeatureLayer()?W.addTypeKeyword(e,te):W.removeTypeKeyword(e,te)},s._evalOfflineKeyword=function(e){!W.hasTypeKeyword(e,re)&&this._isOfflineCapableMap()?W.addTypeKeyword(e,ie):W.removeTypeKeyword(e,ie)},s._evalDeveloperBasemapKeyword=function(e){M.hasDeveloperBasemapLayer(this.basemap)?W.addTypeKeyword(e,pe):W.removeTypeKeyword(e,pe)},s._hasEditableFeatureLayer=function(){return this._getAllLayersAndTables().some((e=>e.loaded&&this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled))},s._isFeatureServiceLayer=function(e){return!("feature"!==e.type||!e.source||"feature-layer"!==e.source.type)},s._isOfflineCapableMap=function(){return this._getAllLayersAndTables().filter((e=>"group"!==e.type)).every((e=>e.loaded&&this._isOfflineCapableLayer(e)))},s._isOfflineCapableLayer=function(e){return this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsSync||("tile"===e.type||"vector-tile"===e.type)&&(e.capabilities.operations.supportsExportTiles||this._isExportableAGOLTileLayer(e)||M.isDeveloperBasemapLayer(e))&&e.spatialReference.equals(this.initialViewProperties.spatialReference)},s._isExportableAGOLTileLayer=function(e){return"tile"===e.type&&(P.isServerOrServicesAGOLUrl(e.url)&&ue.some((t=>e.url.toLowerCase().indexOf("/"+t+"/")>-1)))},s._updateItem=function(){var e=t._asyncToGenerator((function*(e,t,r){yield e.update({data:t}),this._syncUpInstanceWithItem(e,t,r)}));function r(t,r,i){return e.apply(this,arguments)}return r}(),s._createItem=function(){var e=t._asyncToGenerator((function*(e,t,r,i){const o=this.portalItem,n=!!(o&&o.id&&o.portal.user),a=e.portal;if(yield a._signIn(),!(yield this._canCopyItem(o,n,a)))throw new l("webmap:save-as-copy-not-allowed","Owner of this map does not allow others to save a copy");yield a.user.addItem({item:e,folder:i.folder,data:t}),this.portalItem=e,this._syncUpInstanceWithItem(e,t,r)}));function r(t,r,i,o){return e.apply(this,arguments)}return r}(),s._canCopyItem=function(){var e=t._asyncToGenerator((function*(e,t,r){return!(d.isSome(e)&&e.id&&e.typeKeywords&&e.typeKeywords.indexOf("useOnly")>-1)||e.portal.portalHostname===r.portalHostname&&(t||(yield e.reload()),"admin"===e.itemControl||"update"===e.itemControl)}));function r(t,r,i){return e.apply(this,arguments)}return r}(),s._syncUpInstanceWithItem=function(e,t,r){h.MultiOriginJSONSupport.prototype.read.call(this,{version:t.version,authoringApp:t.authoringApp,authoringAppVersion:t.authoringAppVersion},{origin:"web-map",ignoreDefaults:!0,url:e.itemUrl&&f.urlToObject(e.itemUrl)}),I.updateOrigins(r),this.resourceInfo=t},s._updateItemThumbnail=function(){var e=t._asyncToGenerator((function*(){this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(yield this.portalItem.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename}),this._clearThumbnailOverride())}));function r(){return e.apply(this,arguments)}return r}(),s._getPortalItem=function(e){let t=F.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=$),t.portal||(t.portal=U.getDefault()),this._validateItemType(t),t},s._updateFromInternal=function(){var e=t._asyncToGenerator((function*(e,t){t=t||{},yield _.whenTrueOnce(e,"ready"),this._updateInitialViewProperties(e,t),yield this._updateThumbnailUrl(e,t)}));function r(t,r){return e.apply(this,arguments)}return r}(),s._updateInitialViewProperties=function(e,t){var r;t.backgroundExcluded||(this.initialViewProperties.background=null==(r=e.background)?void 0:r.clone());if(this.initialViewProperties.spatialReference=e.spatialReference.clone(),t.viewpointExcluded||(this.initialViewProperties.viewpoint=new n({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const i of e.persistableViewModels)i.updateWebDocument(this)},s._getViewExtent=function(e){const t=e.center.clone().normalize(),r=e.extent.clone(),i=r.width/2;return r.xmin=t.x-i,r.xmax=t.x+i,r},s._updateThumbnailUrl=function(){var e=t._asyncToGenerator((function*(e,t){if(t.thumbnailExcluded)return;const r=K.getOptimalThumbnailSize(e,t.thumbnailSize),i=yield e.takeScreenshot({format:"png",width:r.width,height:r.height});this._setAutoGeneratedThumbnail(i.dataUrl)}));function r(t,r){return e.apply(this,arguments)}return r}(),s._setAutoGeneratedThumbnail=function(e){this.thumbnailUrl=e,this._thumbnailFilename=null},s._clearThumbnailOverride=function(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null},s._generateCustomThumbnailFilename=function(e){if(f.isDataProtocol(e)){const t=f.dataComponents(e),r=t&&t.mediaType,i=r&&Q.get(r.toLowerCase())||null,o=`thumbnail${Date.now()}`;return i?`${o}.${i}`:o}return null},s._getThumbnailState=function(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:f.addQueryParameter(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}},s._restoreThumbnailFromState=function(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename},s._getAuthoringPropsState=function(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}},s._restoreAuthoringPropsFromState=function(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1},o.fromJSON=function(e){const t=e;if(!t)throw new l("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:t})},t._createClass(o,[{key:"authoringApp",set:function(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}},{key:"authoringAppVersion",set:function(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}},{key:"thumbnailUrl",get:function(){return this.portalItem&&this.portalItem.thumbnailUrl||null},set:function(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}}]),o}(h.MultiOriginJSONMixin(p.LoadableMixin(y.EsriPromiseMixin(o))));return ce.VERSION=D,r.__decorate([w.property({type:C,json:{write:!0}})],ce.prototype,"applicationProperties",void 0),r.__decorate([w.property({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ce.prototype,"authoringApp",null),r.__decorate([A.writer("authoringApp")],ce.prototype,"writeAuthoringApp",null),r.__decorate([w.property({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ce.prototype,"authoringAppVersion",null),r.__decorate([A.writer("authoringAppVersion")],ce.prototype,"writeAuthoringAppVersion",null),r.__decorate([w.property({json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],ce.prototype,"basemap",void 0),r.__decorate([w.property({type:z,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],ce.prototype,"bookmarks",void 0),r.__decorate([w.property({type:R,json:{read:{source:"mapFloorInfo"},write:{target:"mapFloorInfo"}}})],ce.prototype,"floorInfo",void 0),r.__decorate([w.property({type:B,nonNullable:!0,json:{read:{source:["background","initialState.viewpoint","mapRangeInfo","spatialReference"]},write:{ignoreOrigin:!0,target:{background:{type:E},"initialState.viewpoint":{type:n},mapRangeInfo:{type:N},spatialReference:{type:O}}}}})],ce.prototype,"initialViewProperties",void 0),r.__decorate([v.reader("initialViewProperties")],ce.prototype,"readInitialViewProperties",null),r.__decorate([A.writer("initialViewProperties")],ce.prototype,"writeInitialViewProperties",null),r.__decorate([w.property({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],ce.prototype,"layers",void 0),r.__decorate([A.writer("layers")],ce.prototype,"writeLayers",null),r.__decorate([w.property({type:F})],ce.prototype,"portalItem",void 0),r.__decorate([w.property({json:{write:!0}})],ce.prototype,"presentation",void 0),r.__decorate([w.property()],ce.prototype,"resourceInfo",void 0),r.__decorate([w.property({readOnly:!0,type:J.Version,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],ce.prototype,"sourceVersion",void 0),r.__decorate([v.reader("sourceVersion")],ce.prototype,"readSourceVersion",null),r.__decorate([A.writer("sourceVersion")],ce.prototype,"writeSourceVersion",null),r.__decorate([w.property({json:{read:!1,write:{ignoreOrigin:!0}}})],ce.prototype,"tables",void 0),r.__decorate([A.writer("tables")],ce.prototype,"writeTables",null),r.__decorate([w.property()],ce.prototype,"thumbnailUrl",null),r.__decorate([w.property({type:k,json:{write:!0}})],ce.prototype,"widgets",void 0),r.__decorate([w.property({type:q,json:{read:!0,write:!0}})],ce.prototype,"utilityNetworks",void 0),ce=r.__decorate([S.subclass("esri.WebMap")],ce),ce}));
