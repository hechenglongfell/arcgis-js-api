/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/CollectionFlattener","../core/Error","../core/HandleOwner","../core/Logger","../core/MapUtils","../core/maybe","../core/promiseUtils","../core/scheduling","../core/watchUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./support/WatchUpdatingTracking"],(function(e,r,t,i,a,o,n,s,l,y,c,p,d,h,w,u,f){"use strict";const _=o.getLogger("esri.views.LayerViewManager");let m=function(){function r(e,r,t){this.layer=e,this.view=r,this.layerViewImporter=t,this._controller=new AbortController,this._deferred=l.createDeferred(),this._started=!1,this.done=!1,l.onAbort(this._controller.signal,(()=>{const r=new i("cancelled:layerview-create","layerview creation cancelled",{layer:e});this._deferred.reject(r)}))}var t=r.prototype;return t.destroy=function(){this._controller.abort();const{layerView:e}=this;if(!e)return;const{layer:r,view:t}=this;r.emit("layerview-destroy",{view:t,layerView:e}),t.emit("layerview-destroy",{layer:r,layerView:e}),this.done=!0,this.layer=null,this.layerView=null,this.view=null,this.layerViewImporter=null},t.start=function(){var r=e._asyncToGenerator((function*(){if(this._started)return;this._started=!0;const{_controller:{signal:e},layer:r,view:t}=this;this._map=t.map;try{var a,o;let y,c;if(yield r.load({signal:e}),"prefetchResources"in r&&(yield r.prefetchResources({signal:e})),r.createLayerView)y=yield r.createLayerView(t,{signal:e});else{if(!this.layerViewImporter.hasLayerViewModule(r))throw new i("layer:view-not-supported","No layerview implementation was found");const a=yield this.layerViewImporter.importLayerView(r);l.throwIfAborted(e),y="default"in a?new a.default({layer:r,view:t}):new a({layer:r,view:t})}const p=()=>{c=s.removeMaybe(c),y.destroyed||y.destroy(),y.layer=null,y.parent=null,y.view=null,this.done=!0};c=l.onAbort(e,p),l.throwIfAborted(e);try{yield y.when()}catch(n){throw p(),n}if(!(null==(a=this._map)||null==(o=a.allLayers)?void 0:o.includes(r)))return p(),void this._deferred.reject(new i("view:no-layerview-for-layer","The layer has been removed from the map",{layer:r}));this.layerView=y,r.emit("layerview-create",{view:t,layerView:y}),t.emit("layerview-create",{layer:r,layerView:y}),this.done=!0,this._deferred.resolve(y)}catch(n){r.emit("layerview-create-error",{view:t,error:n}),t.emit("layerview-create-error",{layer:r,error:n}),this.done=!0,this._deferred.reject(new i("layerview:create-error","layerview creation failed",{layer:r,error:n}))}}));function t(){return r.apply(this,arguments)}return t}(),e._createClass(r,[{key:"promise",get:function(){return this._deferred.promise}}]),r}(),v=function(r){function a(e){var i;return(i=r.call(this,e)||this)._layerLayerViewInfoMap=new Map,i._watchUpdatingTracking=new f.WatchUpdatingTracking,i.supportsGround=!0,i._preloadLayerViewModules=()=>{var e;const r=null==(e=i.view.map)?void 0:e.allLayers;if(r)for(const t of r)i.layerViewImporter.hasLayerViewModule(t)&&i.layerViewImporter.importLayerView(t)},i._reschedule=()=>(s.isNone(i._workPromise)&&(i._workPromise=l.createDeferred()),i.handles.remove("reschedule"),i.handles.add(y.schedule(i._doWork),"reschedule"),i._workPromise.promise),i._doWork=()=>{var e,r,a;const o=i.view.map;if(i._map!==o&&(i.clear(),i._map=o),s.isNone(i._workPromise))return void i.notifyChange("updating");i.handles.remove("reschedule"),i.handles.remove("collection-change");const n=new t({getCollections:()=>i._rootCollectionNames.map((e=>i.get(e))),getChildrenFunction:e=>e&&"layers"in e?e.layers:null});if(!n)return i._workPromise.resolve(),void(i._workPromise=null);for(const t of n)i._createLayerView(t);i._refreshCollections();for(const[t,s]of i._layerLayerViewInfoMap)n.includes(t)||(i._layerLayerViewInfoMap.delete(s.layer),s.destroy());const l=n.filter((e=>"group"===e.type)).map((e=>e.layers)),y=[null==o||null==(e=o.ground)?void 0:e.layers,null==o||null==(r=o.basemap)?void 0:r.baseLayers,null==o||null==(a=o.basemap)?void 0:a.referenceLayers,null==o?void 0:o.layers,...l].filter((e=>!!e));i.handles.add(y.map((e=>i._watchUpdatingTracking.addOnCollectionChange(e,i._reschedule))),"collection-change"),i._workPromise.resolve(),i._workPromise=null},i}e._inheritsLoose(a,r);var o=a.prototype;return o.initialize=function(){this.handles.add([c.on(this,"view.map.allLayers","change",this._preloadLayerViewModules,this._preloadLayerViewModules),c.init(this.view,["map.basemap","map.ground","map.layers","ready"],this._reschedule,!0)]),this._preloadLayerViewModules(),this._reschedule()},o.destroy=function(){this.clear(),this._watchUpdatingTracking.destroy(),this._map=null},o.clear=function(){if(!this.destroyed){for(const e of this._layerLayerViewInfoMap.values())e.destroy();this._layerLayerViewInfoMap.clear(),this._refreshCollections()}},o.whenLayerView=function(){var r=e._asyncToGenerator((function*(e){if(yield this._reschedule(),!this._layerLayerViewInfoMap.has(e))throw new i("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:e});return this._layerLayerViewInfoMap.get(e).promise}));function t(e){return r.apply(this,arguments)}return t}(),o._refreshCollections=function(){for(const[e,r]of this._layersToLayerViews)this._populateLayerViewsOwners(this.get(e),this.get(r),this.view);this.notifyChange("updating"),this.notifyChange("updatingRemaining")},o._populateLayerViewsOwners=function(e,r,t){if(!e||!r)return void(r&&r.removeAll());let i=0;for(const a of e){const e=this._layerLayerViewInfoMap.get(a);if(!e||!e.layerView)continue;const o=e.layerView;o.layer=a,o.parent=t,r.getItemAt(i)!==o&&r.splice(i,0,o),a.layers&&this._populateLayerViewsOwners(a.layers,o.layerViews,o),i+=1}i<r.length&&r.splice(i,r.length)},o._createLayerView=function(e){if(this._layerLayerViewInfoMap.has(e))return this.view.ready&&this._layerLayerViewInfoMap.get(e).start(),this.notifyChange("updating"),void this.notifyChange("updatingRemaining");e.load().catch((()=>{})),this.layerViewImporter.hasLayerViewModule(e)&&this.layerViewImporter.importLayerView(e);const r=new m(e,this.view,this.layerViewImporter);r.promise.then((()=>this._refreshCollections()),(r=>{var t,i;r&&(l.isAbortError(r)||"cancelled:layerview-create"===r.name)||_.error(`Failed to create layerview for layer title:'${null!=(t=e.title)?t:"no title"}', id:'${null!=(i=e.id)?i:"no id"}' of type '${e.type}'.`,{layer:e,error:r});this._refreshCollections()})),this._layerLayerViewInfoMap.set(e,r),this.view.ready&&r.start(),this.notifyChange("updating"),this.notifyChange("updatingRemaining")},e._createClass(a,[{key:"_layersToLayerViews",get:function(){const e=[["view.map.basemap.baseLayers","view.basemapView.baseLayerViews"],["view.map.layers","view.layerViews"],["view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"]];return this.supportsGround&&e.push(["view.map.ground.layers","view.groundView.layerViews"]),new Map(e)}},{key:"_rootCollectionNames",get:function(){return Array.from(this._layersToLayerViews.keys())}},{key:"updating",get:function(){return s.isSome(this._workPromise)||this._watchUpdatingTracking.updating||n.someMap(this._layerLayerViewInfoMap,(e=>!e.done))}},{key:"updatingRemaining",get:function(){let e=0;for(const r of this._layerLayerViewInfoMap.values())r.done||++e;return e}}]),a}(a.HandleOwner);r.__decorate([p.property()],v.prototype,"_workPromise",void 0),r.__decorate([p.property({readOnly:!0})],v.prototype,"_watchUpdatingTracking",void 0),r.__decorate([p.property({readOnly:!0})],v.prototype,"_layersToLayerViews",null),r.__decorate([p.property({readOnly:!0})],v.prototype,"_rootCollectionNames",null),r.__decorate([p.property()],v.prototype,"layerViewImporter",void 0),r.__decorate([p.property()],v.prototype,"supportsGround",void 0),r.__decorate([p.property({readOnly:!0})],v.prototype,"updating",null),r.__decorate([p.property({readOnly:!0})],v.prototype,"updatingRemaining",null),r.__decorate([p.property({constructOnly:!0})],v.prototype,"view",void 0),v=r.__decorate([u.subclass("esri.views.LayerViewManager")],v);return v}));
