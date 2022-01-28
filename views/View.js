/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Map","../TimeExtent","../core/Accessor","../core/Collection","../core/CollectionFlattener","../core/Error","../core/Evented","../core/HandleOwner","../core/handleUtils","../core/Loadable","../core/Logger","../core/maybe","../core/Promise","../core/promiseUtils","../core/reactiveUtils","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/support/OwningCollection","../geometry/Extent","../geometry/HeightModelInfo","../geometry/SpatialReference","../support/AnalysesCollection","../support/GraphicsCollection","./BasemapView","./LayerViewManager","./Magnifier","./ToolViewManager","./input/Input","./input/ViewEvents","./navigation/Navigation","./support/DefaultsFromMap"],(function(e,t,r,a,i,o,n,s,l,p,d,c,y,u,h,f,_,g,w,v,m,M,V,R,S,F,b,O,C,E,L,k,x,I,T,P,z,G){"use strict";var q;const D=y.getLogger("esri.views.View");let H=q=function(t){function r(r){var a;return(a=t.call(this,r)||this)._userSpatialReference=null,a._cursor=null,a.allLayerViews=new n({getCollections:()=>{var e,t,r;return[null==(e=a.basemapView)?void 0:e.baseLayerViews,null==(t=a.groundView)?void 0:t.layerViews,a.layerViews,null==(r=a.basemapView)?void 0:r.referenceLayerViews]},getChildrenFunction:e=>e.layerViews}),a.groundView=null,a.animation=null,a.basemapView=null,a.fatalError=null,a.extent=null,a.graphics=new E.GraphicsCollection,a.analyses=new C.AnalysesCollection,a.navigating=!1,a.typeSpecificPreconditionsReady=!0,a.layerViews=new o,a.magnifier=new x,a.padding={left:0,top:0,right:0,bottom:0},a.ready=!1,a.spatialReferenceWarningDelay=1e3,a.supportsGround=!0,a.timeExtent=null,a.type=null,a.scale=null,a.updating=!1,a.initialExtentRequired=!0,a.input=new T,a.navigation=new z,a.layerViewManager=null,a.analysisViewManager=null,a.isHeightModelInfoRequired=!1,a.width=null,a.height=null,a.resizing=!1,a.suspended=!1,a.viewEvents=new P.ViewEvents(e._assertThisInitialized(a)),a.persistableViewModels=new o,a._isValid=!1,a._readyCycleForced=!1,a.handles.add(a.watch("preconditionsReady",(t=>{var r,i;(t?(a._currentSpatialReference=a.spatialReference,q.views.add(e._assertThisInitialized(a))):(a._currentSpatialReference=null,q.views.remove(e._assertThisInitialized(a))),a.notifyChange("spatialReference"),!t&&a.ready)?(null==(r=a.layerViewManager)||r.clear(),null==(i=a.toolViewManager)||i.detach(),u.isSome(a.analysisViewManager)&&a.analysisViewManager.detach(),a._teardown()):t&&!a.ready&&(u.isSome(a.analysisViewManager)&&a.analysisViewManager.attach(),a._startup(),a.toolViewManager.attach())}),!0)),a}e._inheritsLoose(r,t);var a=r.prototype;return a.initialize=function(){this.addResolvingPromise(this.validate().then((()=>(this._isValid=!0,g.whenOnce(this,"ready"))))),this.basemapView=new L.BasemapView({view:this}),this.layerViewManager=new k({view:this,layerViewImporter:{importLayerView:e=>this.importLayerView(e),hasLayerViewModule:e=>this.hasLayerViewModule(e)},supportsGround:this.supportsGround}),this.toolViewManager=new I({view:this}),this._setupSpatialReferenceLogger(),this.handles.add([_.react((()=>this.initialExtentRequired),(e=>this.defaultsFromMap.required={...this.defaultsFromMap.required,extent:e}),{sync:!0,initial:!0}),_.react((()=>this.ready),(e=>{this.defaultsFromMap&&(this.defaultsFromMap.suspended=e,this.defaultsFromMap.userSpatialReference=e?this.spatialReference:this._userSpatialReference)}),{sync:!0}),_.react((()=>this._userSpatialReference),(e=>{this.defaultsFromMap&&(this.defaultsFromMap.userSpatialReference=e)}),{sync:!0,initial:!0})])},a._setupSpatialReferenceLogger=function(){var t=this;let r=null;this.handles.add([_.react((()=>{var e;return null==(e=this.defaultsFromMap)?void 0:e.ready}),(a=>{var i;const o=(null==(i=this.map)?void 0:i.allLayers.length)>0;if(a&&!this.spatialReference&&o){if(u.isSome(r))return;const a=d.makeHandle((()=>r=u.abortMaybe(r)));r=f.createTask(function(){var a=e._asyncToGenerator((function*(e){try{yield f.after(t.spatialReferenceWarningDelay,null,e)}catch{return}finally{r=null}D.warn("#spatialReference","no spatial reference could be derived from the currently added map layers")}));return function(e){return a.apply(this,arguments)}}()),this.handles.add(a,"spatial-reference-logger-task")}else this.handles.remove("spatial-reference-logger-task")}),{sync:!0})])},a.destroy=function(){if(this.destroyed)return;this.viewEvents.destroy(),this.allLayerViews.destroy(),this.navigation&&(this.navigation.destroy(),this._set("navigation",null)),this.graphics=u.destroyMaybe(this.graphics),this.analyses=u.destroyMaybe(this.analyses),this.handles.remove("defaultsFromMap"),this.defaultsFromMap.destroy(),this._set("defaultsFromMap",null),this.toolViewManager=u.destroyMaybe(this.toolViewManager),this.layerViewManager=u.destroyMaybe(this.layerViewManager),this.basemapView=u.destroyMaybe(this.basemapView),this.invalidate(),this._emitter.clear(),this.handles.removeAll();const e=this.map;this.map=null,null==e||e.destroy()},a._startup=function(){this._set("ready",!0)},a._teardown=function(){this._set("ready",!1)},a.whenReady=function(){return Promise.resolve(this)},a.toMap=function(){return D.error("#toMap()","Not implemented on this instance of View"),null},a.whenLayerView=function(e){return this.layerViewManager.whenLayerView(e)},a.getDefaultSpatialReference=function(){var e;return null==(e=this.defaultsFromMap)?void 0:e.spatialReference},a.getDefaultHeightModelInfo=function(){var e,t,r;return null!=(e=null!=(t=this.map&&"heightModelInfo"in this.map?this.map.heightModelInfo:void 0)?t:null==(r=this.defaultsFromMap)?void 0:r.heightModelInfo)?e:null},a.importLayerView=function(e){throw new s("importLayerView() not implemented")},a.hasLayerViewModule=function(e){return!1},a.validate=function(){var t=e._asyncToGenerator((function*(){}));function r(){return t.apply(this,arguments)}return r}(),a.invalidate=function(){this._isValid=!1},a.getSpatialReferenceSupport=function(){return{}},a._validateSpatialReference=function(e){return u.isSome(this.getSpatialReferenceSupport({spatialReference:e}))},a.when=function(e,r){return this.isResolved()&&!this.ready&&D.warn("#when()",'Calling view.when() while the view is no longer ready but was already resolved once will resolve immediately. Use watchUtils.whenOnce(view, "ready").then(...) instead.'),t.prototype.when.call(this,e,r)},a.forceReadyCycle=function(){this.ready&&(g.whenFalseOnce(this,"preconditionsReady",(()=>this._readyCycleForced=!1)),this._readyCycleForced=!0)},a.addAndActivateTool=function(e){this.toolViewManager.tools.add(e),this.activeTool=e},a.tryFatalErrorRecovery=function(){this.fatalError=null},e._createClass(r,[{key:"_defaultsFromMapSettings",get:function(){return{}}},{key:"defaultsFromMap",get:function(){return new G({required:{tileInfo:!1,heightModelInfo:!1,extent:!1},map:()=>this.map,getSpatialReferenceSupport:e=>this.getSpatialReferenceSupport(e),...this._defaultsFromMapSettings})}},{key:"heightModelInfo",get:function(){return this.getDefaultHeightModelInfo()}},{key:"interacting",get:function(){return this.navigating}},{key:"preconditionsReady",get:function(){var e;return!(this.fatalError||!this._isValid||this._readyCycleForced||!this.map||c.isLoadable(this.map)&&!this.map.loaded||0===this.width||0===this.height||!this.spatialReference||!this.typeSpecificPreconditionsReady||!this._validateSpatialReference(this.spatialReference)||!(this._currentSpatialReference||null!=(e=this.defaultsFromMap)&&e.ready))}},{key:"map",set:function(e){var t;e!==this._get("map")&&(null!=(t=e)&&t.destroyed&&(D.warn("#map","The provided map is already destroyed",{map:e}),e=null),c.isLoadable(e)&&e.load().catch((()=>{})),this.initialized&&(this.forceReadyCycle(),this._currentSpatialReference=null),this._set("map",e))}},{key:"spatialReference",get:function(){var e,t;let r=this._userSpatialReference||this._currentSpatialReference||this.getDefaultSpatialReference()||null;return r&&null!=(e=this.defaultsFromMap)&&null!=(t=e.required)&&t.heightModelInfo&&(r=r.clone(),r.vcsWkid=this.defaultsFromMap.vcsWkid,r.latestVcsWkid=this.defaultsFromMap.latestVcsWkid),r},set:function(e){this._userSpatialReference=e,this._set("spatialReference",e)}},{key:"stationary",get:function(){return!this.animation&&!this.navigating&&!this.resizing}},{key:"initialExtent",get:function(){var e;return null==(e=this.defaultsFromMap)?void 0:e.extent}},{key:"cursor",get:function(){const e=this.toolViewManager?this.toolViewManager.cursor:null;return u.isSome(e)?e:this._cursor||"default"},set:function(e){this._cursor=e,this.notifyChange("cursor")}},{key:"size",get:function(){return[this.width,this.height]}}]),r}(p.HandleOwnerMixin(l.EventedMixin(h.EsriPromiseMixin(i))));H.views=new o,t.__decorate([V.property()],H.prototype,"_userSpatialReference",void 0),t.__decorate([w.aliasOf("toolViewManager.activeTool")],H.prototype,"activeTool",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"allLayerViews",void 0),t.__decorate([V.property()],H.prototype,"groundView",void 0),t.__decorate([V.property()],H.prototype,"animation",void 0),t.__decorate([V.property()],H.prototype,"basemapView",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"_defaultsFromMapSettings",null),t.__decorate([V.property()],H.prototype,"defaultsFromMap",null),t.__decorate([V.property()],H.prototype,"fatalError",void 0),t.__decorate([V.property({type:F})],H.prototype,"extent",void 0),t.__decorate([V.property(S.owningCollectionProperty(E.GraphicsCollection,"graphics"))],H.prototype,"graphics",void 0),t.__decorate([V.property(S.owningCollectionProperty(C.AnalysesCollection,"analyses"))],H.prototype,"analyses",void 0),t.__decorate([V.property({readOnly:!0,type:b})],H.prototype,"heightModelInfo",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"interacting",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"navigating",void 0),t.__decorate([V.property({readOnly:!0,dependsOn:["fatalError","_isValid","_readyCycleForced","map","map.loaded?","width","height","spatialReference","_currentSpatialReference","defaultsFromMap.ready","typeSpecificPreconditionsReady"]})],H.prototype,"preconditionsReady",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"typeSpecificPreconditionsReady",void 0),t.__decorate([V.property({type:o,readOnly:!0})],H.prototype,"layerViews",void 0),t.__decorate([V.property({type:x})],H.prototype,"magnifier",void 0),t.__decorate([V.property({value:null,type:r})],H.prototype,"map",null),t.__decorate([V.property()],H.prototype,"padding",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"ready",void 0),t.__decorate([V.property({type:O})],H.prototype,"spatialReference",null),t.__decorate([V.property()],H.prototype,"spatialReferenceWarningDelay",void 0),t.__decorate([V.property()],H.prototype,"stationary",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"supportsGround",void 0),t.__decorate([V.property({type:a})],H.prototype,"timeExtent",void 0),t.__decorate([w.aliasOf("toolViewManager.tools")],H.prototype,"tools",void 0),t.__decorate([V.property()],H.prototype,"toolViewManager",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"type",void 0),t.__decorate([V.property({type:Number})],H.prototype,"scale",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"updating",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"initialExtentRequired",void 0),t.__decorate([V.property({readOnly:!0,type:F})],H.prototype,"initialExtent",null),t.__decorate([V.property()],H.prototype,"cursor",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"input",void 0),t.__decorate([V.property({type:z,nonNullable:!0})],H.prototype,"navigation",void 0),t.__decorate([V.property()],H.prototype,"layerViewManager",void 0),t.__decorate([V.property()],H.prototype,"analysisViewManager",void 0),t.__decorate([V.property()],H.prototype,"width",void 0),t.__decorate([V.property()],H.prototype,"height",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"resizing",void 0),t.__decorate([V.property({value:null,readOnly:!0})],H.prototype,"size",null),t.__decorate([V.property({readOnly:!0})],H.prototype,"suspended",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"viewEvents",void 0),t.__decorate([V.property({readOnly:!0})],H.prototype,"persistableViewModels",void 0),t.__decorate([V.property()],H.prototype,"_isValid",void 0),t.__decorate([V.property()],H.prototype,"_readyCycleForced",void 0),t.__decorate([V.property()],H.prototype,"_currentSpatialReference",void 0),H=q=t.__decorate([R.subclass("esri.views.View")],H);return H}));
