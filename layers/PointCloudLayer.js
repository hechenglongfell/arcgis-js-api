/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../PopupTemplate","../request","../core/Error","../core/lang","../core/Logger","../core/maybe","../core/MultiOriginJSONSupport","../core/object","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Layer","./mixins/APIKeyMixin","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./mixins/SceneService","./pointCloudFilters/typeUtils","./support/commonProperties","./support/Field","./support/fieldProperties","../popup/ExpressionInfo","../renderers/support/pointCloud/typeUtils","../support/popupUtils"],(function(e,r,t,o,n,i,a,s,p,l,d,u,c,y,f,v,h,g,m,_,I,w,S,b,x,T,P,L,F,E,C){"use strict";const j=a.getLogger("esri.layers.PointCloudLayer"),N=L.defineFieldProperties();let O=function(r){function t(...e){var t;return(t=r.call(this,...e)||this).operationalLayerType="PointCloudLayer",t.popupEnabled=!0,t.popupTemplate=null,t.opacity=1,t.filters=[],t.fields=null,t.fieldsIndex=null,t.outFields=null,t.path=null,t.legendEnabled=!0,t.renderer=null,t.type="point-cloud",t}e._inheritsLoose(t,r);var a=t.prototype;return a.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},a.getFieldDomain=function(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null},a.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new P;return"FieldTypeInteger"===e.type&&((e=i.clone(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new P({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null},a.writeRenderer=function(e,r,t,o){l.setDeepValue("layerDefinition.drawingInfo.renderer",e.write({},o),r)},a.load=function(e){const r=s.isSome(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.throwIfAbortError).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)},a.createPopupTemplate=function(e){const r=C.createPopupTemplate(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r},a.formatPopupTemplateReturnsField=function(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new F({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"},a.formatPopupTemplateRGBField=function(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new F({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"},a.queryCachedStatistics=function(){var r=e._asyncToGenerator((function*(e,r){if(yield this.load(r),!this.attributeStorageInfo)throw new n("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const t=this.fieldsIndex.get(e);if(!t)throw new n("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const n of this.attributeStorageInfo)if(n.name===t.name){const e=u.join(this.parsedUrl.path,`./statistics/${n.key}`);return o(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new n("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}));function t(e,t){return r.apply(this,arguments)}return t}(),a.saveAs=function(){var r=e._asyncToGenerator((function*(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}));function t(e,t){return r.apply(this,arguments)}return t}(),a.save=function(){var r=e._asyncToGenerator((function*(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}));function t(){return r.apply(this,arguments)}return t}(),a.validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new n("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new n("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},a.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))},a._getTypeKeywords=function(){return["PointCloud"]},a._validateElevationInfo=function(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&j.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&j.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))},e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}}]),t}(b.SceneService(_.ArcGISService(I.OperationalLayer(w.PortalLayer(S.ScaleRangeLayer(p.MultiOriginJSONMixin(m.APIKeyMixin(g))))))));r.__decorate([c.property({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),r.__decorate([c.property(T.popupEnabled)],O.prototype,"popupEnabled",void 0),r.__decorate([c.property({type:t,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),r.__decorate([c.property({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),r.__decorate([c.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),r.__decorate([c.property({type:["show","hide"]})],O.prototype,"listMode",void 0),r.__decorate([c.property({types:[x.types],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),r.__decorate([c.property({type:[P]})],O.prototype,"fields",void 0),r.__decorate([c.property(N.fieldsIndex)],O.prototype,"fieldsIndex",void 0),r.__decorate([f.reader("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),r.__decorate([c.property(N.outFields)],O.prototype,"outFields",void 0),r.__decorate([c.property({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),r.__decorate([c.property(T.elevationInfo)],O.prototype,"elevationInfo",null),r.__decorate([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),r.__decorate([c.property(T.legendEnabled)],O.prototype,"legendEnabled",void 0),r.__decorate([c.property({types:E.types,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:E.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),r.__decorate([h.writer("renderer")],O.prototype,"writeRenderer",null),r.__decorate([c.property({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=r.__decorate([v.subclass("esri.layers.PointCloudLayer")],O);return O}));
