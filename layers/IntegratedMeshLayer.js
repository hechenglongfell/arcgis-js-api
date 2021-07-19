/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/Handles","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/watchUtils","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/persistable","./Layer","./mixins/APIKeyMixin","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./mixins/SceneService","./support/commonProperties","./support/I3SLayerDefinitions","./support/SceneModifications","../chunks/persistableUrlUtils"],(function(e,r,t,o,i,n,s,a,p,c,d,y,l,u,f,h,m,v,S,_,g,T,w,I,L,x){"use strict";let O=function(r){function n(...e){var t;return(t=r.call(this,...e)||this).handles=new o,t.geometryType="mesh",t.operationalLayerType="IntegratedMeshLayer",t.type="integrated-mesh",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.profile="mesh-pyramids",t.modifications=null,t._modificationsSource=null,t.elevationInfo=null,t.path=null,t}e._inheritsLoose(n,r);var p=n.prototype;return p.destroy=function(){this.handles.destroy()},p.initialize=function(){this.handles.add(a.on(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))},p.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},p.readModifications=function(e,r,t){this._modificationsSource={url:x.fromJSON(e,t),context:t}},p.load=function(){var r=e._asyncToGenerator((function*(e){return this.addResolvingPromise(this._doLoad(e)),this}));function t(e){return r.apply(this,arguments)}return t}(),p._doLoad=function(){var r=e._asyncToGenerator((function*(e){const r=i.get(e,"signal");try{yield this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(t){s.throwIfAbortError(t)}if(yield this._fetchService(r),i.isSome(this._modificationsSource)){const r=yield L.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}yield this._fetchIndexAndUpdateExtent(this.nodePages,r)}));function t(e){return r.apply(this,arguments)}return t}(),p.beforeSave=function(){if(!i.isNone(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))},p.saveAs=function(){var r=e._asyncToGenerator((function*(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}));function t(e,t){return r.apply(this,arguments)}return t}(),p.save=function(){var r=e._asyncToGenerator((function*(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}));function t(){return r.apply(this,arguments)}return t}(),p.validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new t("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new t("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new t("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},p._getTypeKeywords=function(){return["IntegratedMeshLayer"]},n}(T.SceneService(v.ArcGISService(S.OperationalLayer(_.PortalLayer(g.ScaleRangeLayer(n.MultiOriginJSONMixin(m.APIKeyMixin(h))))))));return r.__decorate([p.property({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),r.__decorate([p.property({type:["show","hide"]})],O.prototype,"listMode",void 0),r.__decorate([p.property({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),r.__decorate([p.property({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),r.__decorate([p.property({type:I.I3SNodePageDefinition,readOnly:!0})],O.prototype,"nodePages",void 0),r.__decorate([p.property({type:[I.I3SMaterialDefinition],readOnly:!0})],O.prototype,"materialDefinitions",void 0),r.__decorate([p.property({type:[I.I3STextureSetDefinition],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),r.__decorate([p.property({type:[I.I3SGeometryDefinition],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),r.__decorate([p.property({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),r.__decorate([p.property({type:L}),f.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),r.__decorate([l.reader(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),r.__decorate([p.property(w.elevationInfo)],O.prototype,"elevationInfo",void 0),r.__decorate([p.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=r.__decorate([u.subclass("esri.layers.IntegratedMeshLayer")],O),O}));
