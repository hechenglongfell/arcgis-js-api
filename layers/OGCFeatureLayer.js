/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../PopupTemplate","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../renderers/support/types","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","../geometry/support/typeUtils","./Layer","./graphics/sources/OGCFeatureSource","./mixins/APIKeyMixin","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/commonProperties","./support/FeatureReduction","./support/FeatureReductionCluster","./support/FeatureReductionSelection","./support/FeatureType","./support/Field","./support/fieldProperties","./support/fieldUtils","./support/LabelClass","./support/labelingInfo","../rest/support/Query","../support/popupUtils","../symbols/support/ElevationInfo","../geometry/Extent","../geometry/SpatialReference"],(function(e,r,t,o,i,n,p,a,s,l,d,y,u,c,f,_,g,v,h,m,b,I,x,F,S,L,T,R,D,O,P,j,w,E,C,G,M,k,B,U,V,K,q,z,Q){"use strict";const Z=M.defineFieldProperties();let A=function(r){function t(t){var o;return(o=r.call(this,t)||this).collectionId=null,o.copyright=null,o.definitionExpression=null,o.description=null,o.displayField=null,o.elevationInfo=null,o.featureReduction=null,o.fields=null,o.fieldsIndex=null,o.fullExtent=null,o.geometryType=null,o.hasZ=void 0,o.labelingInfo=null,o.labelsVisible=!0,o.legendEnabled=!0,o.objectIdField=null,o.operationalLayerType="OGCFeatureLayer",o.popupEnabled=!0,o.popupTemplate=null,o.screenSizePerspectiveEnabled=!0,o.source=new I.default({layer:e._assertThisInitialized(o)}),o.spatialReference=null,o.title=null,o.type="ogc-feature",o.typeIdField=null,o.types=null,o.url=null,o}e._inheritsLoose(t,r);var o=t.prototype;return o.destroy=function(){var e;null==(e=this.source)||e.destroy()},o.load=function(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()},o.on=function(e,t){return r.prototype.on.call(this,e,t)},o.createPopupTemplate=function(e){return K.createPopupTemplate(this,e)},o.createQuery=function(){return new V},o.getField=function(e){return this.fieldsIndex.get(e)},o.getFieldDomain=function(e,r){var t;let o,i=!1;const n=null==r||null==(t=r.feature)?void 0:t.attributes,p=this.typeIdField&&(null==n?void 0:n[this.typeIdField]);return null!=p&&this.types&&(i=this.types.some((r=>{var t,i;return r.id==p&&(o=null==(t=r.domains)?void 0:t[e],"inherited"===(null==(i=o)?void 0:i.type)&&(o=this._getLayerDomain(e)),!0)}))),i||o||(o=this._getLayerDomain(e)),o},o.queryFeatures=function(e,r){return this.load().then((()=>this.source.queryFeatures(V.from(e)||this.createQuery(),r))).then((e=>{var r;return null==e||null==(r=e.features)||r.forEach((e=>{e.layer=e.sourceLayer=this})),e}))},o._fetchService=function(){var r=e._asyncToGenerator((function*(e){yield this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),k.fixRendererFields(this.renderer,this.fieldsIndex),k.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)}));function t(e){return r.apply(this,arguments)}return t}(),o._getLayerDomain=function(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null},e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){k.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}}]),t}(x.APIKeyMixin(S.CustomParametersMixin(F.BlendLayer(O.TemporalLayer(D.ScaleRangeLayer(L.OperationalLayer(T.PortalLayer(R.RefreshableLayer(c.MultiOriginJSONMixin(b))))))))));return r.__decorate([f.property({readOnly:!0,json:{origins:{service:{read:!0}}}})],A.prototype,"capabilities",void 0),r.__decorate([f.property({type:String,json:{write:!0}})],A.prototype,"collectionId",void 0),r.__decorate([f.property({type:String})],A.prototype,"copyright",void 0),r.__decorate([f.property({readOnly:!0})],A.prototype,"defaultPopupTemplate",null),r.__decorate([f.property({type:String})],A.prototype,"definitionExpression",void 0),r.__decorate([f.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"collection.description"}}}}})],A.prototype,"description",void 0),r.__decorate([f.property({type:String})],A.prototype,"displayField",void 0),r.__decorate([f.property({type:q})],A.prototype,"elevationInfo",void 0),r.__decorate([f.property({types:{key:"type",base:j.default,typeMap:{selection:E,cluster:w}}})],A.prototype,"featureReduction",void 0),r.__decorate([f.property({type:[G],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],A.prototype,"fields",void 0),r.__decorate([f.property(Z.fieldsIndex)],A.prototype,"fieldsIndex",void 0),r.__decorate([f.property({readOnly:!0,type:z,json:{origins:{service:{read:{source:"layerDefinition.extent"}}}}})],A.prototype,"fullExtent",void 0),r.__decorate([f.property({type:m.featureGeometryTypeKebabDictionary.apiValues,json:{origins:{service:{read:{source:"layerDefinition.geometryType",reader:m.featureGeometryTypeKebabDictionary.read}}}}})],A.prototype,"geometryType",void 0),r.__decorate([f.property({type:Boolean,json:{origins:{service:{read:{source:"layerDefinition.hasZ"}}}}})],A.prototype,"hasZ",void 0),r.__decorate([f.property({type:[B],json:{origins:{"web-map":{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:U.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}}}})],A.prototype,"labelingInfo",void 0),r.__decorate([f.property(P.labelsVisible)],A.prototype,"labelsVisible",void 0),r.__decorate([f.property(P.legendEnabled)],A.prototype,"legendEnabled",void 0),r.__decorate([f.property({type:String,json:{origins:{service:{read:{source:"layerDefinition.objectIdField"}}}}})],A.prototype,"objectIdField",void 0),r.__decorate([f.property({type:["OGCFeatureLayer"]})],A.prototype,"operationalLayerType",void 0),r.__decorate([f.property(P.popupEnabled)],A.prototype,"popupEnabled",void 0),r.__decorate([f.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],A.prototype,"popupTemplate",void 0),r.__decorate([f.property({types:u.rendererTypes,json:{origins:{service:{read:{source:"layerDefinition.drawingInfo.renderer"},write:!1}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],A.prototype,"renderer",null),r.__decorate([f.property({type:Boolean})],A.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([f.property({readOnly:!0})],A.prototype,"source",void 0),r.__decorate([f.property({readOnly:!0,type:Q,json:{origins:{service:{read:!0}}}})],A.prototype,"spatialReference",void 0),r.__decorate([f.property({type:String,json:{origins:{service:{read:{source:"collection.title"}},"web-map":{write:{ignoreOrigin:!0}}}}})],A.prototype,"title",void 0),r.__decorate([f.property({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),r.__decorate([f.property({type:String,readOnly:!0})],A.prototype,"typeIdField",void 0),r.__decorate([f.property({type:[C]})],A.prototype,"types",void 0),r.__decorate([f.property({type:String,json:{write:!0}})],A.prototype,"url",void 0),A=r.__decorate([h.subclass("esri.layers.OGCFeatureLayer")],A),A}));
