/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../rasterRenderers","../../request","../../core/Logger","../../core/maybe","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../geometry/support/spatialReferenceUtils","../support/arcgisLayerUrl","../support/commonProperties","../support/DimensionalDefinition","../support/RasterJobHandler","../support/TileInfo","../support/rasterFunctions/vectorFieldUtils","../../renderers/support/rasterRendererHelper","../../renderers/support/RasterSymbolizer","../../views/2d/engine/flow/dataUtils","../../geometry/Extent","../../geometry/SpatialReference"],(function(e,t,r,n,i,o,s,a,l,u,c,d,p,f,m,h,y,_,b,g,v,I,S,J,x,R){"use strict";const T=s.getLogger("esri.layers.mixins.ImageryTileMixin"),D=e=>{let n=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._rasterJobHandler={instance:null,refCount:0,connectionPromise:null},t.bandIds=null,t.copyright=null,t.fullExtent=null,t.interpolation="nearest",t.multidimensionalDefinition=null,t.raster=null,t.rasterInfo=null,t.sourceJSON=null,t.spatialReference=null,t.tileInfo=null,t.symbolizer=null,t}t._inheritsLoose(r,e);var n=r.prototype;return n.convertVectorFieldData=function(){var e=t._asyncToGenerator((function*(e,t){if(a.isNone(e))return null;const r=this._rasterJobHandler.instance,n=this.rasterInfo.dataType;return r?r.convertVectorFieldData({pixelBlock:e,dataType:n},t):v.convertVectorFieldData(e,n)}));function r(t,r){return e.apply(this,arguments)}return r}(),n.createStreamlinesMesh=function(){var e=t._asyncToGenerator((function*(e,t){const r=this._rasterJobHandler.instance;return r?r.createStreamlinesMesh(e,t):J.createStreamlinesMesh(e.rendererSettings,e.flowData,a.isSome(t.signal)?t.signal:(new AbortController).signal)}));function r(t,r){return e.apply(this,arguments)}return r}(),n.normalizeRasterFetchOptions=function(e){const{multidimensionalInfo:t}=this.rasterInfo;if(a.isNone(t))return e;let r=e.multidimensionalDefinition||this.multidimensionalDefinition;!a.isNone(r)&&r.length||(r=this._getDefaultSlice());const n=e.timeExtent||this.timeExtent;if(a.isSome(r)&&a.isSome(n)&&(a.isSome(n.start)||a.isSome(n.end))){var i,o;r=r.map((e=>e.clone()));const s=null==(i=t.variables.find((({name:e})=>e===r[0].variableName)))||null==(o=i.dimensions)?void 0:o.find((({name:e})=>"StdTime"===e)),l=r.find((({dimensionName:e})=>"StdTime"===e));if(!s||!l)return{...e,multidimensionalDefinition:null};const{start:u,end:c}=n,d=a.isNone(u)?null:u.getTime(),p=a.isNone(c)?null:c.getTime(),f=null!=d?d:p,m=null!=p?p:d;if(a.isSome(s.values)){const e=s.values.filter((e=>{if(Array.isArray(e)){if(f===m)return e[0]<=f&&e[1]>=f;const t=e[0]<=f&&e[1]>f||e[0]<m&&e[1]>=m,r=e[0]>=f&&e[1]<=m||e[0]<f&&e[1]>m;return t||r}return f===m?e===f:e>=f&&e<=m}));if(e.length){const t=e.sort(((e,t)=>{var r,n,i,o;if(f===m)return(null!=(i=e[0])?i:e)-(null!=(o=t[0])?o:t);return Math.abs((null!=(r=e[1])?r:e)-m)-Math.abs((null!=(n=t[1])?n:t)-m)}))[0];l.values=[t]}else r=null}else if(s.hasRegularIntervals&&s.extent){const[e,t]=s.extent;f>t||m<e?r=null:l.values=f===m?[f]:[Math.max(e,f),Math.min(t,m)]}}return{...e,multidimensionalDefinition:r}},n.updateRenderer=function(){var e=t._asyncToGenerator((function*(){if(!this.loaded)return;if(JSON.stringify(this._cachedRendererJson)===JSON.stringify(this.renderer))return;const e=this._rasterJobHandler.instance;e&&(this.symbolizer.rendererJSON=I.normalizeRendererJSON(this.renderer.toJSON()),this.symbolizer.bind(),yield e.updateSymbolizer(this.symbolizer),this._cachedRendererJson=this.renderer.toJSON())}));function r(){return e.apply(this,arguments)}return r}(),n.applyRenderer=function(){var e=t._asyncToGenerator((function*(e,t){const r=e&&e.pixelBlock;if(!(a.isSome(r)&&r.pixels&&r.pixels.length>0))return null;let n;yield this.updateRenderer();const i=this._rasterJobHandler.instance,{bandIds:o}=this;return n=i?yield i.symbolize({...e,simpleStretchParams:t,bandIds:o}):this.symbolizer.symbolize({...e,simpleStretchParams:t,bandIds:o}),n}));function r(t,r){return e.apply(this,arguments)}return r}(),n.getTileUrl=function(e,t,r){return"RasterTileServer"===this.raster.datasetFormat?`${this.url}/tile/${e}/${t}/${r}`:""},n.getCompatibleTileInfo=function(e,t,r=!1){if(!this.loaded||a.isNone(t))return null;if(r&&e.equals(this.spatialReference))return this.tileInfo;const n=m.getInfo(e);return g.create({size:256,spatialReference:e,origin:n?{x:n.origin[0],y:n.origin[1]}:{x:t.xmin,y:t.ymax}})},n.getCompatibleFullExtent=function(e){return this.loaded?(this._compatibleFullExtent&&this._compatibleFullExtent.spatialReference.equals(e)||(this._compatibleFullExtent=this.raster.computeExtent(e)),this._compatibleFullExtent):null},n.fetchTile=function(){var e=t._asyncToGenerator((function*(e,t,r,n={}){if(n.requestAsImageElement){const i=this.getTileUrl(e,t,r);return o(i,{responseType:"image",query:{...this.refreshParameters,...this.raster.ioConfig.customFetchParameters},signal:n.signal}).then((e=>e.data))}if(a.isSome(this.rasterInfo.multidimensionalInfo)&&(n=this.normalizeRasterFetchOptions(n),a.isNone(n.multidimensionalDefinition))){const i=n.tileInfo||this.rasterInfo.storageInfo.tileInfo;return{extent:this.raster.getTileExtentFromTileInfo(e,t,r,i),pixelBlock:null}}return yield this._initJobHandler(),"raster-shaded-relief"===this.renderer.type&&(n={...n,buffer:{cols:1,rows:1}}),this.raster.fetchTile(e,t,r,n)}));function r(t,r,n){return e.apply(this,arguments)}return r}(),n.fetchPixels=function(){var e=t._asyncToGenerator((function*(e,t,r,n={}){return a.isSome(this.rasterInfo.multidimensionalInfo)&&(n=this.normalizeRasterFetchOptions(n),a.isNone(n.multidimensionalDefinition))?{extent:e,pixelBlock:null}:(yield this._initJobHandler(),this.raster.fetchPixels(e,t,r,n))}));function r(t,r,n){return e.apply(this,arguments)}return r}(),n.identify=function(){var e=t._asyncToGenerator((function*(e,t={}){return a.isSome(this.rasterInfo.multidimensionalInfo)&&(t=this.normalizeRasterFetchOptions(t),a.isNone(t.multidimensionalDefinition))?{location:e,value:null}:this.raster.identify(e,t)}));function r(t){return e.apply(this,arguments)}return r}(),n.increaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount++},n.decreaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount--,this._rasterJobHandler.refCount<=0&&this._shutdownJobHandler()},n.hasStandardTime=function(){var e;const t=this.rasterInfo.multidimensionalInfo;if(!a.isSome(t)||"standard-time"!==this.rasterInfo.dataType)return!1;const r=null==(e=this.multidimensionalDefinition[0])?void 0:e.variableName;return t.variables.some((e=>e.name===r&&e.dimensions.some((e=>"StdTime"===e.name))))},n.getStandardTimeValue=function(e){return new Date(24*(e-25569)*3600*1e3).toString()},n._configDefaultSettings=function(){this._configDefaultInterpolation(),this.multidimensionalDefinition||(this.multidimensionalDefinition=this._getDefaultSlice()),this._configDefaultRenderer()},n._initJobHandler=function(){if(null!=this._rasterJobHandler.connectionPromise)return this._rasterJobHandler.connectionPromise;const e=new b;return this._rasterJobHandler.connectionPromise=e.initialize().then((()=>{this._rasterJobHandler.instance=e,this.raster.rasterJobHandler=e,this.renderer&&this.updateRenderer()})).catch((()=>null)),this._rasterJobHandler.connectionPromise},n._shutdownJobHandler=function(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy(),this._rasterJobHandler.instance=null,this._rasterJobHandler.connectionPromise=null,this._rasterJobHandler.refCount=0,this.raster.rasterJobHandler=null},n._configDefaultInterpolation=function(){if(null==this.interpolation){var e;const t=I.getDefaultInterpolation(this.rasterInfo,this.raster.tileType,null==(e=this.sourceJSON)?void 0:e.defaultResamplingMethod);this._set("interpolation",t)}},n._getDefaultSlice=function(){const{multidimensionalInfo:e}=this.raster.rasterInfo;if(!a.isSome(e))return null;const t=e.variables[0];return t.dimensions.map((e=>{var r,n;return new _({variableName:t.name,dimensionName:e.name,values:[null!=(r=null==(n=e.values)?void 0:n[0])?r:e.extent[0]],isSlice:!0})}))},n._configDefaultRenderer=function(){const e=this.raster.rasterInfo;var t;(this.bandIds||(this.bandIds=I.getDefaultBandCombination(e)),this.renderer)||(this.renderer=I.createDefaultRenderer(e,{bandIds:this.bandIds,variableName:a.isSome(this.multidimensionalDefinition)?null==(t=this.multidimensionalDefinition[0])?void 0:t.variableName:null}));this.symbolizer?(this.symbolizer.rendererJSON=I.normalizeRendererJSON(this.renderer.toJSON()),this.symbolizer.rasterInfo=e):this.symbolizer=new S({rendererJSON:this.renderer.toJSON(),rasterInfo:e});const r=this.symbolizer.bind();r.success||T.warn("imagery-tile-mixin",r.error||"The given renderer is not supported by the layer.")},t._createClass(r,[{key:"url",set:function(e){this._set("url",h.sanitizeUrl(e,T))}},{key:"renderer",set:function(e){this._set("renderer",e),this.updateRenderer()}}]),r}(e);return r.__decorate([p.property()],n.prototype,"_cachedRendererJson",void 0),r.__decorate([p.property()],n.prototype,"_compatibleFullExtent",void 0),r.__decorate([p.property()],n.prototype,"_rasterJobHandler",void 0),r.__decorate([p.property()],n.prototype,"bandIds",void 0),r.__decorate([p.property()],n.prototype,"copyright",void 0),r.__decorate([p.property({type:x}),l.aliasOf("rasterInfo.extent")],n.prototype,"fullExtent",void 0),r.__decorate([p.property()],n.prototype,"interpolation",void 0),r.__decorate([p.property()],n.prototype,"ioConfig",void 0),r.__decorate([p.property({type:[_]})],n.prototype,"multidimensionalDefinition",void 0),r.__decorate([p.property()],n.prototype,"raster",void 0),r.__decorate([p.property({readOnly:!0}),l.aliasOf("raster.rasterInfo")],n.prototype,"rasterInfo",void 0),r.__decorate([p.property()],n.prototype,"sourceJSON",void 0),r.__decorate([p.property({type:R}),l.aliasOf("rasterInfo.spatialReference")],n.prototype,"spatialReference",void 0),r.__decorate([p.property({type:g}),l.aliasOf("rasterInfo.storageInfo.tileInfo")],n.prototype,"tileInfo",void 0),r.__decorate([p.property(y.url)],n.prototype,"url",null),r.__decorate([p.property({types:i.rasterRendererTypes})],n.prototype,"renderer",null),r.__decorate([p.property()],n.prototype,"symbolizer",void 0),n=r.__decorate([f.subclass("esri.layers.ImageryTileMixin")],n),n};e.ImageryTileMixin=D,Object.defineProperty(e,"__esModule",{value:!0})}));
