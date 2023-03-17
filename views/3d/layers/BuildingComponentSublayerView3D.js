/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../../core/sql/WhereClause","../../../layers/buildingSublayers/BuildingComponentSublayer","../../../layers/support/FeatureFilter","../../../layers/support/fieldUtils","../../../rest/support/Query","./BuildingSublayerView3D","./I3SMeshView3D","./II3SMeshView3D","./i3s/BuildingFilterUtil","./i3s/I3SGeometryUtil","./i3s/I3SMeshViewFilter","./i3s/I3SQueryEngine","./i3s/I3SQueryFeatureAdapter","./i3s/I3SQueryFeatureStore","./i3s/I3SUtil","./support/DefinitionExpressionSceneLayerView","../../layers/BuildingComponentSublayerView","../../layers/support/popupUtils","../../support/Scheduler"],(function(e,t,r,i,s,n,l,a,o,u,d,p,y,c,h,f,g,F,_,b,S,E,x,w,m,I,v,Q,q,L){"use strict";let C=function(t){function a(){var e;return(e=t.apply(this,arguments)||this).type="building-component-sublayer-3d",e.layerView=null,e._elevationContext="scene",e._isIntegratedMesh=!1,e._supportsLabeling=!1,e.requiredFields=[],e.progressiveLoadFactor=1,e._queryEngine=null,e}e._inheritsLoose(a,t);var o=a.prototype;return o.initialize=function(){this.updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this.updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),l.initial);const e=()=>this._filterChange();this.updatingHandles.add((()=>this.parsedDefinitionExpression),e),this.updatingHandles.add((()=>n.isSome(this._filter)?this._filter.sortedObjectIds:null),e),this.updatingHandles.add((()=>n.isSome(this._filter)?this._filter.parsedWhereClause:null),e),this.updatingHandles.add((()=>[n.isSome(this._filter)?this._filter.parsedGeometry:null,n.isSome(this.filter)?this.filter.spatialRelationship:null]),(()=>this._geometryFilterChange())),this.updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),l.initial),this.addResolvingPromise(this._updateRequiredFields())},o.isUpdating=function(){return t.prototype.isUpdating.call(this)||n.isSome(this._filter)&&this._filter.updating},o._updateSymbologyOverride=function(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[s,n]of e)try{if(s.testFeature(t))return b.applyFilterMode(r,n)}catch(i){this.logError(i)}return b.applyFilterMode(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)},o._createLayerGraphic=function(e){const t=new r(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t},o.canResume=function(){return t.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)},o.fetchPopupFeatures=function(){var t=e._asyncToGenerator((function*(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(n.isNone(t)||!t.clientGraphics||0===t.clientGraphics.length)return[];const i=[],l=[],a=n.isSome(this.sublayer.associatedLayer)?yield this.sublayer.associatedLayer.load():this.sublayer,o=h.unpackFieldNames(this.sublayer.fieldsIndex,yield q.getRequiredFields(a,q.getFetchPopupTemplate(this.sublayer,t))),u=new Set;for(const s of t.clientGraphics)h.populateMissingFields(o,s,u)?l.push(s):i.push(s);return 0===l.length?i:(n.isSome(this.sublayer.associatedLayer)&&(yield this.sublayer.associatedLayer.load().catch((()=>s.getLogger(this.declaredClass).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes.")))),this.whenGraphicAttributes(l,Array.from(u)).catch((()=>l)).then((e=>i.concat(e))))}));function r(e,r){return t.apply(this,arguments)}return r}(),o._updateRequiredFields=function(){var t=e._asyncToGenerator((function*(){const e=h.fixFields(this.sublayer.fieldsIndex,[...this.sublayer.renderer?yield this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}));function r(){return t.apply(this,arguments)}return r}(),o._validateFetchPopupFeatures=function(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?q.getFetchPopupTemplate(t,e)?void 0:new i("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new i("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})},o.getFilters=function(){const e=t.prototype.getFilters.call(this);return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),n.isSome(this._filter)&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e},o.createQuery=function(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return n.isSome(this.filter)?this.filter.createQuery(e):new f(e)},o.queryExtent=function(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t?.signal)},o.queryFeatureCount=function(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t?.signal)},o.queryFeatures=function(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t?.signal).then((e=>{if(!e?.features)return e;const t=this.sublayer,r=t.layer;for(const i of e.features)i.layer=r,i.sourceLayer=t;return e}))},o.queryObjectIds=function(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t?.signal)},o._ensureQueryEngine=function(){return n.isNone(this._queryEngine)&&(this._queryEngine=this._createQueryEngine()),this._queryEngine},o._createQueryEngine=function(){const e=S.createGetFeatureExtent(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new x.I3SQueryEngine({layerView:this,priority:L.TaskPriority.FEATURE_QUERY_ENGINE,spatialIndex:new m.I3SQueryFeatureStore({featureAdapter:new w.I3SQueryFeatureAdapter({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,_.ForAllFeaturesVisibilityMode.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:I.getIndexCrs(this.sublayer),viewSpatialReference:this.view.spatialReference})})},o._ensureQuery=function(e){return this._addDefinitionExpressionToQuery(n.isNone(e)?this.createQuery():f.from(e))},e._createClass(a,[{key:"i3slayer",get:function(){return this.sublayer}},{key:"layerUid",get:function(){return this.sublayer.layer.uid}},{key:"sublayerUid",get:function(){return this.sublayer.uid}},{key:"layerId",get:function(){return this.sublayer.layer.id}},{key:"sublayerId",get:function(){return this.sublayer.id}},{key:"layerPopupEnabled",get:function(){return this.sublayer.popupEnabled}},{key:"lodFactor",get:function(){return this.view.qualitySettings.sceneService.object.lodFactor}},{key:"parsedFilterExpressions",get:function(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((([e,t])=>{let r;try{r=p.WhereClause.create(e,this.sublayer.fieldsIndex)}catch(l){return s.getLogger(this.declaredClass).error("Failed to parse filterExpression: "+l),null}if(!r.isStandardized)return s.getLogger(this.declaredClass).error("filterExpression is using non standard function"),null;const i=[],n=r.fieldNames;return I.findFieldsCaseInsensitive(n,this.sublayer.fields,{missingFields:i}),i.length>0?(s.getLogger(this.declaredClass).error(`filterExpression references unknown fields: ${i.join(", ")}`),null):[r,t]})).filter((e=>null!=e)):[]}},{key:"filter",get:function(){return n.isSome(this._filter)?this._filter.viewFilter:null},set:function(e){!n.isNone(e)&&E.I3SMeshViewFilter.checkSupport(e)?n.isSome(this._filter)?this._filter.viewFilter=e:this._filter=new E.I3SMeshViewFilter({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this._filter=null}},{key:"filterExpressionFields",get:function(){return h.fixFields(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,[t])=>e.concat(t.fieldNames)),new Array))}},{key:"availableFields",get:function(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...h.unpackFieldNames(t,i),...r]}return h.fixFields(t,r)}}]),a}(v.DefinitionExpressionSceneLayerView(F.I3SMeshView3D(g.BuildingSublayerView3DMixin(Q))));t.__decorate([a.property()],C.prototype,"i3slayer",null),t.__decorate([a.property()],C.prototype,"layerView",void 0),t.__decorate([a.property()],C.prototype,"lodFactor",null),t.__decorate([a.property({readOnly:!0})],C.prototype,"parsedFilterExpressions",null),t.__decorate([a.property({type:c})],C.prototype,"filter",null),t.__decorate([a.property()],C.prototype,"_filter",void 0),t.__decorate([a.property({type:[String],readOnly:!0})],C.prototype,"filterExpressionFields",null),t.__decorate([a.property({type:[String],readOnly:!0})],C.prototype,"requiredFields",void 0),t.__decorate([a.property({type:[String],readOnly:!0})],C.prototype,"availableFields",null),C=t.__decorate([d.subclass("esri.views.3d.layers.BuildingComponentSublayerView3D")],C);return C}));
