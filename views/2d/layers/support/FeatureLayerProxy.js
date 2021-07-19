/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Promise","../../../../core/promiseUtils","../../../../core/workers/workers","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass"],(function(t,r,e,n,o,i,s,c,u,a){"use strict";function l(t){return Array.isArray(t)}let p=function(r){function e(t){var e;return(e=r.call(this,t)||this)._startupResolver=n.createResolver(),e.isReady=!1,e}t._inheritsLoose(e,r);var i=e.prototype;return i.initialize=function(){this._controller=n.createAbortController(),this.addResolvingPromise(this._startWorker(this._controller.signal))},i.destroy=function(){this._controller.abort(),this._connection&&this._connection.close()},i.startup=function(){var r=t._asyncToGenerator((function*(t,r,e,n){yield this.when();const o=this._controller.signal,i=l(e.source)?{transferList:e.source,signal:o}:void 0,s={service:e,config:r,tileInfo:t.tileInfo.toJSON(),tiles:n};yield this._connection.invoke("startup",s,i),this._startupResolver.resolve(),this._set("isReady",!0)}));function e(t,e,n,o){return r.apply(this,arguments)}return e}(),i.updateTiles=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,n.ignoreAbortErrors(this._connection.invoke("updateTiles",t))}));function e(t){return r.apply(this,arguments)}return e}(),i.update=function(){var r=t._asyncToGenerator((function*(t){const r={config:t};return yield this._startupResolver.promise,this._connection.invoke("update",r)}));function e(t){return r.apply(this,arguments)}return e}(),i.applyUpdate=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("applyUpdate",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.setHighlight=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,n.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",t))}));function e(t){return r.apply(this,arguments)}return e}(),i.refresh=function(){var r=t._asyncToGenerator((function*(){return yield this._startupResolver.promise,n.ignoreAbortErrors(this._connection.invoke("controller.refresh"))}));function e(){return r.apply(this,arguments)}return e}(),i.querySummaryStatistics=function(){var r=t._asyncToGenerator((function*(t,r,e){return yield this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:t.toJSON(),params:r},e)}));function e(t,e,n){return r.apply(this,arguments)}return e}(),i.queryFeatures=function(){var r=t._asyncToGenerator((function*(t,r){return yield this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",t.toJSON(),r)}));function e(t,e){return r.apply(this,arguments)}return e}(),i.queryObjectIds=function(){var r=t._asyncToGenerator((function*(t,r){return yield this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",t.toJSON(),r)}));function e(t,e){return r.apply(this,arguments)}return e}(),i.queryFeatureCount=function(){var r=t._asyncToGenerator((function*(t,r){return yield this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",t.toJSON(),r)}));function e(t,e){return r.apply(this,arguments)}return e}(),i.queryExtent=function(){var r=t._asyncToGenerator((function*(t,r){return this._connection.invoke("controller.queryExtent",t.toJSON(),r)}));function e(t,e){return r.apply(this,arguments)}return e}(),i.queryLatestObservations=function(){var r=t._asyncToGenerator((function*(t,r){return yield this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",t.toJSON(),r)}));function e(t,e){return r.apply(this,arguments)}return e}(),i.queryStatistics=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.getObjectId=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.getObjectId",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.getDisplayId=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.getFeature=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.getFeature",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.getAggregate=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.getAggregate",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.getAggregateValueRanges=function(){var r=t._asyncToGenerator((function*(){return yield this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}));function e(){return r.apply(this,arguments)}return e}(),i.mapValidDisplayIds=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",t)}));function e(t){return r.apply(this,arguments)}return e}(),i.onEdits=function(){var r=t._asyncToGenerator((function*(t){return yield this._startupResolver.promise,n.ignoreAbortErrors(this._connection.invoke("controller.onEdits",t))}));function e(t){return r.apply(this,arguments)}return e}(),i.enableEvent=function(){var r=t._asyncToGenerator((function*(t,r){return yield this._startupResolver.promise,n.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",{name:t,value:r}))}));function e(t,e){return r.apply(this,arguments)}return e}(),i._startWorker=function(){var r=t._asyncToGenerator((function*(t){try{this._connection=yield o.open("Pipeline",{client:this.client,strategy:"dedicated",signal:t})}catch(r){n.throwIfNotAbortError(r)}}));function e(t){return r.apply(this,arguments)}return e}(),t._createClass(e,[{key:"tileRenderer",set:function(t){this.client.tileRenderer=t}},{key:"closed",get:function(){return this._connection.closed}}]),e}(e.EsriPromise);return r.__decorate([i.property()],p.prototype,"isReady",void 0),r.__decorate([i.property()],p.prototype,"client",void 0),r.__decorate([i.property()],p.prototype,"tileRenderer",null),p=r.__decorate([a.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],p),p}));
