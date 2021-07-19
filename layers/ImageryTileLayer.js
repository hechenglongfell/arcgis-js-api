/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../PopupTemplate","../rasterRenderers","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","./Layer","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/ImageryTileMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","./support/Field","./support/rasterEnums","./support/rasterDatasets/RasterFactory","../support/popupUtils"],(function(e,r,t,o,i,a,s,n,p,l,d,c,u,y,h,m,f,_,g,v,P,S,b,T,w,R,I,O){"use strict";function L(){return{enabled:!this.loaded||"RasterTileServer"===this.raster.datasetFormat&&"Raster"===this.raster.tileType}}let x=function(r){function t(...e){var t;return(t=r.call(this,...e)||this).bandIds=null,t.interpolation=null,t.legendEnabled=!0,t.isReference=null,t.listMode="show",t.sourceJSON=null,t.version=null,t.title=null,t.type="imagery-tile",t.operationalLayerType="ArcGISTiledImageServiceLayer",t.popupEnabled=!0,t.popupTemplate=null,t.fields=null,t}e._inheritsLoose(t,r);var s=t.prototype;return s.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},s.load=function(e){const r=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).catch(n.throwIfAbortError).then((()=>this._openRaster(r)))),Promise.resolve(this)},s.readRenderer=function(e,r,t){const i=r&&r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.renderer,a=o.read(i,t)||void 0;if(null!=a)return a},s.createPopupTemplate=function(e){return O.createPopupTemplate({fields:this.rasterFields,title:this.title},e)},s.write=function(e,t){const{raster:o}=this;if(this.loaded?"RasterTileServer"===o.datasetFormat&&("Raster"===o.tileType||"Map"===o.tileType):this.url&&/\/ImageServer(\/|\/?$)/i.test(this.url))return r.prototype.write.call(this,e,t);if(t&&t.messages){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`;t.messages.push(new i("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this}))}return null},s._openRaster=function(){var r=e._asyncToGenerator((function*(e){this.raster?(this.raster.rasterInfo||(yield this.raster.open()),this.url=this.raster.url):this.raster=yield I.open({url:this.url,sourceJSON:this.sourceJSON,ioConfig:{sampling:"closest",...this.ioConfig,customFetchParameters:this.customParameters},signal:e});const{rasterInfo:r}=this.raster;if(!r)throw new i("imagery-tile-layer:load","cannot load resources on "+this.url);this.sourceJSON=this.sourceJSON||this.raster.sourceJSON,null!=this.sourceJSON&&(this._set("version",this.sourceJSON.currentVersion),this._set("copyright",this.sourceJSON.copyrightText)),null==this.title&&(this.title=this.raster.datasetName),"Map"===this.raster.tileType&&(this.popupEnabled=!1),this._configDefaultSettings(),this.watch("customParameters",(e=>this.raster.ioConfig.customFetchParameters=e))}));function t(e){return r.apply(this,arguments)}return t}(),e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"rasterFields",get:function(){var e,r;let t=[new w({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})];const o=null==(e=this.rasterInfo)||null==(r=e.attributeTable)?void 0:r.fields,i="Raster.";if(o){const e=o.filter((e=>"oid"!==e.type&&"value"!==e.name.toLowerCase())).map((e=>{const r=e.clone();return r.name=i+e.name,r}));t=t.concat(e)}return t}},{key:"renderer",set:function(e){this._set("renderer",e),this.updateRenderer()}}]),t}(f.BlendLayer(b.ScaleRangeLayer(S.RefreshableLayer(v.OperationalLayer(P.PortalLayer(_.CustomParametersMixin(g.ImageryTileMixin(s.MultiOriginJSONMixin(m)))))))));return r.__decorate([p.property({type:[d.Integer],json:{write:{overridePolicy:L}}})],x.prototype,"bandIds",void 0),r.__decorate([p.property({json:{write:{overridePolicy:L}}}),u.enumeration(R.interpolationKebab)],x.prototype,"interpolation",void 0),r.__decorate([p.property({json:{write:!0}})],x.prototype,"multidimensionalDefinition",void 0),r.__decorate([p.property(T.legendEnabled)],x.prototype,"legendEnabled",void 0),r.__decorate([p.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],x.prototype,"isReference",void 0),r.__decorate([p.property({type:["show","hide"]})],x.prototype,"listMode",void 0),r.__decorate([p.property()],x.prototype,"sourceJSON",void 0),r.__decorate([p.property({readOnly:!0})],x.prototype,"version",void 0),r.__decorate([p.property()],x.prototype,"title",void 0),r.__decorate([p.property({readOnly:!0,json:{read:!1}})],x.prototype,"type",void 0),r.__decorate([p.property({type:["ArcGISTiledImageServiceLayer"]})],x.prototype,"operationalLayerType",void 0),r.__decorate([p.property({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:L,writer(e,r,t){r[t]=!e}}}})],x.prototype,"popupEnabled",void 0),r.__decorate([p.property({type:t,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:L}}})],x.prototype,"popupTemplate",void 0),r.__decorate([p.property({readOnly:!0})],x.prototype,"defaultPopupTemplate",null),r.__decorate([p.property({readOnly:!0,type:[w]})],x.prototype,"fields",void 0),r.__decorate([p.property({readOnly:!0,type:[w]})],x.prototype,"rasterFields",null),r.__decorate([p.property({types:o.rasterRendererTypes,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:L},origins:{"web-scene":{types:o.websceneRasterRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:e=>({enabled:e&&"vector-field"!==e.type})}}}}})],x.prototype,"renderer",null),r.__decorate([y.reader("renderer")],x.prototype,"readRenderer",null),x=r.__decorate([h.subclass("esri.layers.ImageryTileLayer")],x),x}));
