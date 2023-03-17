/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Accessor","../core/Error","../core/Logger","../core/MapUtils","../core/maybe","../core/promiseUtils","../core/reactiveUtils","../core/scheduling","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../core/support/WatchUpdatingTracking"],(function(e,r,t,i,o,a,s,n,l,y,c,p,h,w,d){"use strict";function u(e){return"tryRecycleWith"in e}let f=function(){function r(e,r,t){this.layer=e,this.view=r,this.layerViewImporter=t,this._controller=new AbortController,this._deferred=n.createDeferred(),this._started=!1,this.done=!1,this.promise=this._deferred.promise,n.onAbort(this._controller.signal,(()=>{const r=new i("cancelled:layerview-create","layerview creation cancelled",{layer:e});this._deferred.reject(r)}))}var t=r.prototype;return t.tryRecycle=function(e){if(!this.done||!this.layerView||!u(this.layerView))return null;const r=this.layer.type,t=this._controller.signal;for(let i=0;i<e.length;i++){const o=e[i];if(o.type!==r)continue;const a=this.layerView.tryRecycleWith(o,{signal:t});if(a){e.splice(i,1),this.layer=o;const r=this.layerView,t=r.view;return this.promise=Promise.race([a.then((()=>(n.throwIfAborted(this._controller.signal),o.emit("layerview-destroy",{view:t,layerView:r}),t.emit("layerview-destroy",{view:t,layerView:r}),o.emit("layerview-create",{view:t,layerView:r}),t.emit("layerview-create",{view:t,layerView:r}),r))),new Promise(((e,r)=>n.onAbort(this._controller.signal,(()=>r(n.createAbortError())))))]),this.promise}}return null},t.destroy=function(){this._controller.abort();const{layerView:e}=this;if(!e)return;const{layer:r,view:t}=this;r.emit("layerview-destroy",{view:t,layerView:e}),t.emit("layerview-destroy",{layer:r,layerView:e}),this.done=!0,this.layer=null,this.layerView=null,this.view=null,this.layerViewImporter=null},t.start=function(){var r=e._asyncToGenerator((function*(){if(this._started)return;this._started=!0;const{_controller:{signal:e},layer:r,view:t}=this;this._map=t.map;try{let a,l;if(yield r.load({signal:e}),"prefetchResources"in r&&(yield r.prefetchResources?.({signal:e})),m(r))a=yield r.createLayerView(t,{signal:e});else{if(!this.layerViewImporter.hasLayerViewModule(r))throw new i("layer:view-not-supported","No layerview implementation was found");const o=yield this.layerViewImporter.importLayerView(r);n.throwIfAborted(e),a="default"in o?new o.default({layer:r,view:t}):new o({layer:r,view:t})}const y=()=>{l=s.removeMaybe(l),a.destroyed||a.destroy(),a.layer=null,a.parent=null,a.view=null,this.done=!0};l=n.onAbort(e,y),n.throwIfAborted(e);try{yield a.when()}catch(o){throw y(),o}const c=this._map?.allLayers?.includes(r);if(!c)return y(),void this._deferred.reject(new i("view:no-layerview-for-layer","The layer has been removed from the map",{layer:r}));this.layerView=a,r.emit("layerview-create",{view:t,layerView:a}),t.emit("layerview-create",{layer:r,layerView:a}),this.done=!0,this._deferred.resolve(a)}catch(o){r.emit("layerview-create-error",{view:t,error:o}),t.emit("layerview-create-error",{layer:r,error:o}),this.done=!0,this._deferred.reject(new i("layerview:create-error","layerview creation failed",{layer:r,error:o}))}}));function t(){return r.apply(this,arguments)}return t}(),r}(),_=function(r){function t(e){var t;return(t=r.call(this,e)||this)._layerLayerViewInfoMap=new Map,t._recyclingInfoMap=new Map,t._watchUpdatingTracking=new d.WatchUpdatingTracking,t.supportsGround=!0,t._preloadLayerViewModules=()=>{const e=t.view.map?.allLayers;if(e)for(const r of e)t.layerViewImporter.hasLayerViewModule(r)&&t.layerViewImporter.importLayerView(r)},t._reschedule=()=>(s.isNone(t._workPromise)&&(t._workPromise=n.createDeferred(),t._workPromise.promise.catch((()=>{}))),t.removeHandles("reschedule"),t.addHandles(y.schedule(t._doWork),"reschedule"),t._workPromise.promise),t._doWork=()=>{const e=t.view.map;if(t._map!==e&&(t.clear(),t._map=e),s.isNone(t._workPromise))return void t.notifyChange("updating");t.removeHandles("reschedule"),t.removeHandles("collection-change");const r=new Set,i=[],o=t.view.ready,a=e=>{if(!s.isNone(e))for(const s of e)if(s){r.add(s);const e=t._layerLayerViewInfoMap.get(s);e&&o?e.start():e||t._recyclingInfoMap.has(s)||i.push(s),"layers"in s&&s.layers&&a(s.layers)}};for(const s of t._rootCollectionNames)a(t.get(s));for(const[s,l]of t._layerLayerViewInfoMap)if(!r.has(s)){t._layerLayerViewInfoMap.delete(l.layer);const e=l.tryRecycle(i);e?(t._recyclingInfoMap.set(l.layer,l),e.then((()=>{t._recyclingInfoMap.delete(l.layer),t._layerLayerViewInfoMap.set(l.layer,l),t._reschedule()})).catch((()=>{t._recyclingInfoMap.delete(l.layer),l.destroy(),t._reschedule()}))):l.destroy()}for(const[s,l]of t._recyclingInfoMap)r.has(s)||(t._recyclingInfoMap.delete(l.layer),l.destroy());for(const s of i)t._createLayerView(s);t._refreshCollections();const n=[e?.ground?.layers,e?.basemap?.baseLayers,e?.basemap?.referenceLayers,e?.layers].filter((e=>!!e));r.forEach((e=>"layers"in e&&n.push(e.layers))),t.addHandles(n.map((e=>t._watchUpdatingTracking.addOnCollectionChange((()=>e),t._reschedule))),"collection-change"),t._workPromise.resolve(),t._workPromise=null},t}e._inheritsLoose(t,r);var c=t.prototype;return c.initialize=function(){this.own([l.on((()=>this.view?.map?.allLayers),"change",this._preloadLayerViewModules,{onListenerAdd:this._preloadLayerViewModules}),l.watch((()=>{const e=this.view,r=e?.map;return[r?.basemap,r?.ground,r?.layers,e?.ready]}),(()=>this._reschedule()),l.syncAndInitial)]),this._preloadLayerViewModules(),this._reschedule()},c.destroy=function(){this.clear(),this._watchUpdatingTracking.destroy(),this._map=null,s.isSome(this._workPromise)&&(this._workPromise.reject(n.createAbortError()),this._workPromise=null)},c.clear=function(){if(!this.destroyed){for(const e of this._layerLayerViewInfoMap.values())e.destroy();this._layerLayerViewInfoMap.clear(),this._refreshCollections()}},c.whenLayerView=function(){var r=e._asyncToGenerator((function*(e){if(yield this._reschedule(),!this._layerLayerViewInfoMap.has(e)){if(this._recyclingInfoMap.has(e))return this._recyclingInfoMap.get(e).promise;throw new i("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:e})}return this._layerLayerViewInfoMap.get(e).promise}));function t(e){return r.apply(this,arguments)}return t}(),c._refreshCollections=function(){for(const[e,r]of this._layersToLayerViews)this._populateLayerViewsOwners(this.get(e),this.get(r),this.view);this.notifyChange("updating"),this.notifyChange("updatingRemaining")},c._populateLayerViewsOwners=function(e,r,t){if(!e||!r)return void(r&&r.removeAll());let i=0;for(const o of e){const e=this._layerLayerViewInfoMap.get(o);if(!e||!e.layerView)continue;const a=e.layerView;a.layer=o,a.parent=t,r.getItemAt(i)!==a&&r.splice(i,0,a),o.layers&&this._populateLayerViewsOwners(o.layers,a.layerViews,a),i+=1}i<r.length&&r.splice(i,r.length)},c._createLayerView=function(e){e.load().catch((()=>{})),this.layerViewImporter.hasLayerViewModule(e)&&this.layerViewImporter.importLayerView(e);const r=new f(e,this.view,this.layerViewImporter);r.promise.then((()=>this._refreshCollections()),(r=>{r&&(n.isAbortError(r)||"cancelled:layerview-create"===r.name)||o.getLogger(this.declaredClass).error(`Failed to create layerview for layer title:'${e.title??"no title"}', id:'${e.id??"no id"}' of type '${e.type}'.`,{layer:e,error:r}),this._refreshCollections()})),this._layerLayerViewInfoMap.set(e,r),this.view.ready&&r.start(),this.notifyChange("updating"),this.notifyChange("updatingRemaining")},e._createClass(t,[{key:"_layersToLayerViews",get:function(){const e=[["view.map.basemap.baseLayers","view.basemapView.baseLayerViews"],["view.map.layers","view.layerViews"],["view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews"]];return this.supportsGround&&e.push(["view.map.ground.layers","view.groundView.layerViews"]),new Map(e)}},{key:"_rootCollectionNames",get:function(){return Array.from(this._layersToLayerViews.keys())}},{key:"updating",get:function(){return s.isSome(this._workPromise)||this._watchUpdatingTracking.updating||a.someMap(this._layerLayerViewInfoMap,(e=>!e.done))}},{key:"updatingRemaining",get:function(){let e=0;for(const r of this._layerLayerViewInfoMap.values())r.done||++e;return e}}]),t}(t);r.__decorate([c.property()],_.prototype,"_workPromise",void 0),r.__decorate([c.property({readOnly:!0})],_.prototype,"_watchUpdatingTracking",void 0),r.__decorate([c.property({readOnly:!0})],_.prototype,"_layersToLayerViews",null),r.__decorate([c.property({readOnly:!0})],_.prototype,"_rootCollectionNames",null),r.__decorate([c.property()],_.prototype,"layerViewImporter",void 0),r.__decorate([c.property()],_.prototype,"supportsGround",void 0),r.__decorate([c.property({readOnly:!0})],_.prototype,"updating",null),r.__decorate([c.property({readOnly:!0})],_.prototype,"updatingRemaining",null),r.__decorate([c.property({constructOnly:!0})],_.prototype,"view",void 0),_=r.__decorate([w.subclass("esri.views.LayerViewManager")],_);function m(e){return"createLayerView"in e&&null!=e.createLayerView}return _}));
