/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/Accessor","../../core/arrayUtils","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/Logger","../../core/LRUCache","../../core/maybe","../../core/memoize","../../core/unitUtils","../../core/accessorSupport/decorators/aliasOf","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/trackingUtils","../../layers/support/ElevationQueryTileCache","../../properties/defaultUnit","./ElevationProfileController","./ElevationProfileLineGround","./elevationProfileLineTypes","./ElevationProfileTool","./support/constants","./support/geometryUtils","./support/ProfileGenerationError","./support/profileUtils","./support/statisticsUtils"],(function(e,t,i,o,r,n,s,l,a,c,p,u,d,h,f,y,_,v,g,m,b,U,P,S,w,k,O,C,E,T){"use strict";const L=a.getLogger("esri.widgets.ElevationProfile.ElevationProfileViewModel");let M=function(t){function i(e){var i;return(i=t.call(this,e)||this).view=null,i.input=null,i._getEffectiveUnitsMemoized=u.memoize(((e,t)=>({distance:e,elevation:t}))),i.geodesicDistanceThreshold=1e5,i.hoveredChartPosition=null,i.uniformChartScaling=!1,i.highlightEnabled=!0,i.defaultUnit=null,i.queue=null,i._currentTileCache=null,i.error=null,i._handles=new l,i._defaultProfileLineGround=new P,i._userUnitOptions=null,i._userUnit=null,null!=e&&e.profiles||(i.profiles=new n([i._defaultProfileLineGround])),i}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this._handles.add(g.reactionInit((()=>this.view),(e=>{var t;p.isNone(e)?L.warnOnce("no view. Widget will be disabled until a view is provided."):this.queue=E.createProfileQueue("3d"===e.type?null==(t=e.resourceController)?void 0:t.scheduler:void 0)}))),this.tool=new w.ElevationProfileTool({viewModel:this}),this._controller=new U.ElevationProfileController({viewModel:this})},o.destroy=function(){this._handles=p.destroyMaybe(this._handles),this._defaultProfileLineGround=p.destroyMaybe(this._defaultProfileLineGround),this._controller=p.destroyMaybe(this._controller),this._currentTileCache=p.destroyMaybe(this._currentTileCache),this.tool=p.destroyMaybe(this.tool),this.queue=p.destroyMaybe(this.queue)},o.start=function(e){this.tool.interaction.start(e)},o.stop=function(){this.tool.interaction.stop()},o.cancel=function(){this.tool.interaction.cancel()},o.clear=function(){this.tool.interaction.clear()},o._findSelectableUnit=function(e,t){const i=this.unitOptions;return p.isSome(e)&&-1!==i.indexOf(e)?e:t?this._findSelectableUnit(t):i[0]},o._filteredOrAllUnits=function(e){const t=(p.isSome(e)?e:[]).filter((e=>-1!==d.measurementLengthUnits.indexOf(e)));return 0===t.length?d.measurementLengthUnits.slice():t},e._createClass(i,[{key:"profiles",set:function(e){const t=this._get("profiles"),i=null!=e?e:new n;this._set("profiles",s.referenceSetter(i,t))}},{key:"state",get:function(){const e=this.view;return p.isSome(e)&&e.ready?this.tool.state:k.ElevationProfileState.Disabled}},{key:"progress",get:function(){let e=0,t=0;for(const i of this.visibleProfiles)e++,t+=i.progress;return e>0?t/e:0}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(e){this._userUnitOptions=e,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)},set:function(e){this._userUnit=e?this._findSelectableUnit(e,this._userUnit):null,this.notifyChange("unit")}},{key:"effectiveUnits",get:function(){const e=T.getBoundsInMeters(this.visibleProfiles.map((e=>e.result))),t=d.preferredLengthUnit(e.maxDistance,"meters",this.unit),i=d.preferredVerticalLengthUnit(e.maxElevation,"meters",this.unit);return this._getEffectiveUnitsMemoized(t,i)}},{key:"hasVertices",get:function(){const e=p.applySome(this.input,(e=>e.geometry));return O.isPolyline(e)&&e.paths.reduce(((e,t)=>e+t.length),0)>0}},{key:"hoveredPoints",get:function(){return!p.isNone(this.input)&&this.visible&&this.tool.editable?this.visibleProfiles.map((e=>{const t=e.hoveredPoint;return p.isSome(t)?{hoveredPoint:t,color:e.color}:null})).filter(p.isSome):[]}},{key:"statistics",get:function(){return T.mergeStatistics(this.visibleProfiles.map((e=>e.statistics)))}},{key:"chartData",get:function(){if(p.isNone(this.input))return null;const{effectiveUnits:e,progress:t,statistics:i,visibleProfiles:o,uniformChartScaling:r}=this,n=o.filter((e=>e.hasZ)).map((e=>({id:e.id,type:e.type,title:e.title,color:e.color,samples:e.samples,progress:e.progress,chartFillEnabled:e.chartFillEnabled,chartStrokeWidth:e.chartStrokeWidth,chartStrokeOffsetY:e.chartStrokeOffsetY,viewVisualizationEnabled:e.viewVisualizationEnabled})));return 0===n.length?null:{lines:n,effectiveUnits:e,statistics:i,refined:1===t,dynamicElevationRange:o.some((e=>"view"===e.type)),uniformScaling:r}}},{key:"visibleProfiles",get:function(){return this.profiles.toArray().filter((e=>e.available&&e.visible))}},{key:"minDemResolutions",get:function(){const e=[];for(const{minDemResolution:t}of this.visibleProfiles)p.isSome(t)&&e.push(t);return e}},{key:"minDemResolution",get:function(){return r.min(this.minDemResolutions)}},{key:"errorState",get:function(){const e=p.applySome(this.input,(e=>e.geometry));if(!O.isValidInputPath(e))return"no-valid-input";if(p.isSome(this.error)){if(C.isProfileGenerationError(this.error))switch(this.error.cause){case"too-complex":return"too-complex";case"invalid-geometry":return"invalid-geometry";case"invalid-elevation-info":return"invalid-elevation-info";case"elevation-query-error":return"no-valid-input"}return"unknown-error"}return 0===this.visibleProfiles.length?"no-visible-profiles":p.isNone(this.chartData)&&1===this.progress?"refined-but-no-chart-data":"none"}},{key:"tileCache",get:function(){this._currentTileCache=p.destroyMaybe(this._currentTileCache);const e=this.view;if(p.isSome(e)&&"3d"===(null==e?void 0:e.type)){var t;const i=null==(t=e.basemapTerrain)?void 0:t.elevationQueryCache;if(p.isSome(i))return i}return p.isNone(this._currentTileCache)&&(this._currentTileCache=new m.ElevationQueryTileCache(new c(20971520))),this._currentTileCache}},{key:"inputIsSketched",get:function(){return this.tool.interaction.isSketchedGraphic(this.input)}}]),i}(o);return t.__decorate([_.property()],M.prototype,"view",void 0),t.__decorate([_.property({type:i})],M.prototype,"input",void 0),t.__decorate([_.property({type:S.ElevationProfileLineCollection,nonNullable:!0})],M.prototype,"profiles",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"state",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"progress",null),t.__decorate([_.property()],M.prototype,"unitOptions",null),t.__decorate([_.property()],M.prototype,"unit",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"effectiveUnits",null),t.__decorate([_.property({type:Number})],M.prototype,"geodesicDistanceThreshold",void 0),t.__decorate([_.property()],M.prototype,"hoveredChartPosition",void 0),t.__decorate([_.property()],M.prototype,"uniformChartScaling",void 0),t.__decorate([h.aliasOf("tool.highlightEnabled")],M.prototype,"highlightEnabled",void 0),t.__decorate([_.property({readOnly:!0})],M.prototype,"hoveredPoints",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"statistics",null),t.__decorate([_.property()],M.prototype,"chartData",null),t.__decorate([_.property()],M.prototype,"visibleProfiles",null),t.__decorate([_.property()],M.prototype,"minDemResolutions",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"minDemResolution",null),t.__decorate([_.property({readOnly:!0})],M.prototype,"errorState",null),t.__decorate([_.property(b.defaultUnitPropertyMetadata)],M.prototype,"defaultUnit",void 0),t.__decorate([_.property()],M.prototype,"queue",void 0),t.__decorate([_.property()],M.prototype,"tileCache",null),t.__decorate([_.property()],M.prototype,"tool",void 0),t.__decorate([h.aliasOf("tool.visible")],M.prototype,"visible",void 0),t.__decorate([_.property()],M.prototype,"error",void 0),t.__decorate([_.property()],M.prototype,"inputIsSketched",null),t.__decorate([_.property()],M.prototype,"_defaultProfileLineGround",void 0),t.__decorate([_.property()],M.prototype,"_userUnitOptions",void 0),t.__decorate([_.property()],M.prototype,"_controller",void 0),t.__decorate([_.property()],M.prototype,"_userUnit",void 0),M=t.__decorate([v.subclass("esri.widgets.ElevationProfile.ElevationProfileViewModel")],M),M}));
