/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/HandleOwner","../../../../core/has","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../layers/support/TileInfo","./processors","./controllers/FeatureController2D","./support/TileStore","./support/UpdateToken","../../tiling/TileInfoView"],(function(e,t,r,o,n,s,i,l,c,a,u,p,d,h,f){"use strict";const y=new Set;function _(){return y}let v=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).controller=null,t.processor=null,t.remoteClient=null,t.tileStore=null,t.service=null,t.viewState=null,t._paused=!1,t._pendingTileUpdates=[],t}t._inheritsLoose(r,e);var o=r.prototype;return o.initialize=function(){this.handles.add(this.watch("updating",(e=>{this.remoteClient.invoke("setUpdating",e).catch((e=>{}))})))},o.destroy=function(){var e,t,r;null==(e=this.controller)||e.destroy(),null==(t=this.processor)||t.destroy(),null==(r=this.tileStore)||r.destroy(),this.controller=this.processor=this.tileStore=this.remoteClient=null},o.startup=function(){var e=t._asyncToGenerator((function*({service:e,config:t,tileInfo:r,tiles:o}){if(this._paused=!0,this.service=e,!this.tileStore){const e=new f(a.fromJSON(r));this.tileStore=new d(e)}for(yield this._createProcessorAndController(t),yield this.update({config:t},!0),this.tileStore.clear(),this.tileStore.updateTiles(o),this._paused=!1;this._pendingTileUpdates.length;)this.tileStore.updateTiles(this._pendingTileUpdates.pop())}));function r(t){return e.apply(this,arguments)}return r}(),o.updateTiles=function(){var e=t._asyncToGenerator((function*(e){this._paused?this._pendingTileUpdates.push(e):this.tileStore.updateTiles(e)}));function r(t){return e.apply(this,arguments)}return r}(),o.update=function(){var e=t._asyncToGenerator((function*({config:e},t=!1){const r=h.UpdateToken.empty();return t||this.controller.pause(),yield Promise.all([this.processor.update(r,e),this.controller.update(r,e)]),r.toJSON()}));function r(t){return e.apply(this,arguments)}return r}(),o.applyUpdate=function(){var e=t._asyncToGenerator((function*(e){return this.controller.applyUpdate(h.UpdateToken.create(e))}));function r(t){return e.apply(this,arguments)}return r}(),o._createProcessorAndController=function(){var e=t._asyncToGenerator((function*(e){yield Promise.all([this._handleControllerConfig(e),this._handleProcessorConfig(e)]),this.controller.processor=this.processor}));function r(t){return e.apply(this,arguments)}return r}(),o._handleControllerConfig=function(){var e=t._asyncToGenerator((function*(e){const t=yield this._createController(this.service,e);return yield t.startup(),t}));function r(t){return e.apply(this,arguments)}return r}(),o._handleProcessorConfig=function(){var e=t._asyncToGenerator((function*(e){return this._createProcessor(this.service,e)}));function r(t){return e.apply(this,arguments)}return r}(),o._createController=function(){var e=t._asyncToGenerator((function*(e,t){this.controller&&this.controller.destroy();const{tileStore:r,remoteClient:o}=this,n=new p({service:e,config:t,tileStore:r,remoteClient:o});return this.controller=n,n}));function r(t,r){return e.apply(this,arguments)}return r}(),o._createProcessor=function(){var e=t._asyncToGenerator((function*(e,t){const r=t.schema.processors[0].type,o=(yield u.loadProcessorModule(r)).default,{remoteClient:n,tileStore:s}=this,i=new o({service:e,config:t,tileStore:s,remoteClient:n});return this.processor&&this.processor.destroy(),this.processor=i,i}));function r(t,r){return e.apply(this,arguments)}return r}(),t._createClass(r,[{key:"updating",get:function(){return!this.controller||this.controller.updating}}]),r}(o.HandleOwner);r.__decorate([s.property()],v.prototype,"controller",void 0),r.__decorate([s.property()],v.prototype,"processor",void 0),r.__decorate([s.property()],v.prototype,"updating",null),r.__decorate([s.property()],v.prototype,"viewState",void 0),v=r.__decorate([c.subclass("esri.views.2d.layers.features.Pipeline")],v);const T=v;e.default=T,e.getInstances=_,Object.defineProperty(e,"__esModule",{value:!0})}));
