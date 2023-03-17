/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/has","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/reactiveUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/decorators/subclass","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/data/QueryEngine","../../../../../layers/support/FieldsIndex","../FeatureStore2D","../sources/createSource","../support/AttributeStore","../support/BinStore","../support/ClusterStore","../support/ComputedAttributeStorage","../support/FeatureSetReaderJSON","../support/UpdateToken","../../../../support/QueueProcessor"],(function(e,t,r,i,s,n,a,o,u,c,g,h,d,l,p,f,y,m,S,_,v,b,I){"use strict";const T=5e3,Q="tileRenderer.featuresView.attributeView.initialize",E="tileRenderer.featuresView.attributeView.requestUpdate",C="tileRenderer.featuresView.requestRender";function F(e){return"worker:port-closed"===e.name}function k(e){if(!n.isAbortError(e)&&!F(e))throw e}function w(e){return"feature"===e.type&&"snapshot"===e.mode}let A=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._storage=new _.ComputedAttributeStorage,e._markedIdsBufId=e._storage.createBitset(),e._lastCleanup=performance.now(),e._cleanupNeeded=!1,e._invalidated=!1,e._tileToResolver=new Map,e._didEdit=!1,e._updateVersion=1,e.tileStore=null,e.config=null,e.processor=null,e.remoteClient=null,e.service=null,e}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this._initStores(),this._initSource(),this._updateQueue=new I.QueueProcessor({concurrency:"stream"===this._source.type?1:4,process:(e,t)=>this._onTileMessage(e,{signal:t})}),this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this)),a.when((()=>!this.updating),(()=>this.onIdle()))]),this._checkUpdating=setInterval((()=>this.notifyChange("updating")),300)},o._initSource=function(){const e=this.tileStore.tileScheme,t=()=>this._updateQueue&&this._updateQueue.length<50,r=(e,t)=>(this._invalidated=!0,this._patchTile(e,t));this._source=f.createSource(this.service,this.spatialReference,e,r,t,this.featureStore),this._proxyEvents()},o._proxyEvents=function(){if("stream"===this._source.type){const e=this._source.events,t=this._source;this.addHandles([a.watch((()=>t.connectionStatus),(e=>this.remoteClient.invoke("setProperty",{propertyName:"connectionStatus",value:e}).catch(k)),{initial:!0}),a.watch((()=>t.errorString),(e=>this.remoteClient.invoke("setProperty",{propertyName:"errorString",value:e}).catch(k)),{initial:!0}),e.on("data-received",(e=>this.remoteClient.invoke("emitEvent",{name:"data-received",event:{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry}}).catch(k))),e.on("message-received",(e=>this.remoteClient.invoke("emitEvent",{name:"message-received",event:e}).catch(k))),e.on("updateRate",(e=>this.remoteClient.invoke("emitEvent",{name:"update-rate",event:{...e}}).catch(k)))])}},o._initAttributeStore=function(e){this.attributeStore||(this.attributeStore=new y({type:"remote",initialize:(e,t)=>n.ignoreAbortErrors(this.remoteClient.invoke(Q,e,{signal:t}).catch(k)),update:(e,t)=>n.ignoreAbortErrors(this.remoteClient.invoke(E,e,{signal:t}).catch(k)),render:e=>n.ignoreAbortErrors(this.remoteClient.invoke(C,void 0,{signal:e}).catch(k))},e,(()=>this.notifyChange("updating"))))},o._initStores=function(){const e="snapshot"===this.service.type?"snapshot":"on-demand",t={geometryInfo:{geometryType:this.service.geometryType,hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields};this.featureStore=new p.FeatureStore2D(t,this._storage,e)},o._initQueryEngine=function(e){const t=this;this.featureQueryEngine?.destroy(),this.featureQueryEngine=new d.QueryEngine({definitionExpression:e.schema.source.definitionExpression??void 0,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,featureStore:this.featureStore,aggregateAdapter:{getFeatureObjectIds(e){if(s.isNone(t.aggregateStore))return[];return t.aggregateStore.getFeatureDisplayIdsForAggregate(e).map((e=>t.getObjectId(e)))}},timeInfo:this.service.timeInfo})},o._initAggregateQueryEngine=function(e,t){if(this.aggregateQueryEngine?.destroy(),s.isNone(e))return;const r=t.targets.aggregate.params.fields.slice();this.aggregateQueryEngine=new d.QueryEngine({definitionExpression:void 0,fields:r,geometryType:e.geometryInfo.geometryType,objectIdField:e.objectIdField,hasM:e.geometryInfo.hasM,hasZ:e.geometryInfo.hasZ,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!1,featureStore:e,aggregateAdapter:{getFeatureObjectIds:e=>[]}})},o.destroy=function(){this._updateQueue.destroy(),this._source.destroy(),this.featureQueryEngine?.destroy(),this.aggregateQueryEngine?.destroy(),this.attributeStore?.destroy();for(const e of this.tileStore.tiles)this._source.unsubscribe(e);clearInterval(this._checkUpdating)},o.isUpdating=function(){const e=this._source.updating,t=!!this._updateQueue.length,r=!this.attributeStore||this.attributeStore.isUpdating(),s=e||t||r;return i("esri-2d-log-updating")&&console.log(`Updating FeatureController2D: ${s}\n  -> updatingSource ${e}\n  -> updateQueue ${t}\n  -> updatingAttributeStore ${r}\n`),s},o.updateCustomParameters=function(e){"stream"===this._source.type&&this._source.updateCustomParameters(e)},o.enableEvent=function(e){this._source.enableEvent(e.name,e.value)},o.pause=function(){this._updateQueue.pause(),this._updateQueue.clear()},o.resume=function(){this._updateQueue.resume()},o.pauseStream=function(){"stream"===this._source.type&&this._source.pauseStream()},o.resumeStream=function(){"stream"===this._source.type&&this._source.resumeStream()},o.sendMessageToSocket=function(e){"stream"===this._source.type&&this._source.sendMessageToSocket(e)},o.sendMessageToClient=function(e){"stream"===this._source.type&&this._source.sendMessageToClient(e)},o._initAggregateStore=function(e){const t=e.schema.targets?.aggregate?.type,r=s.applySome(this.config,(e=>e.schema.targets?.aggregate?.type));if(r!==t&&(s.isSome(this.aggregateStore)&&(this.removeHandles("valueRangesChanged"),this.aggregateStore.destroy(),this.aggregateStore=null),t)){switch(t){case"cluster":{const e={geometryInfo:{geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields};this.aggregateStore=new S.ClusterStore(e,this.spatialReference,this._storage,this.service),this.addHandles(this.aggregateStore.events.on("valueRangesChanged",(e=>{this.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:e.valueRanges}}).catch(k)})),"valueRangesChanged");break}case"bin":{const e={geometryInfo:{geometryType:"esriGeometryPolygon",hasM:!1,hasZ:!1},spatialReference:this.spatialReference,fieldsIndex:this.fieldsIndex,fields:this.service.fields};this.aggregateStore=new m.BinStore(e,this.spatialReference,this._storage,this.service);break}}this.aggregateStore.onTileUpdate({added:this.tileStore.tiles,removed:[]})}},o.update=function(){var t=e._asyncToGenerator((function*(e,t){this._updateVersion++,this._initQueryEngine(t),this._initAttributeStore(t),this.pause(),yield Promise.all([this._source.update(e,t.schema.source),this.featureStore.updateSchema(e,t.schema.targets.feature),this.attributeStore.update(e,t),this.attributeStore.updateFilters(e,t,this)]),this._initAggregateStore(t),s.isSome(this.aggregateStore)&&(yield this.aggregateStore.updateSchema(e,t.schema.targets.aggregate)),this._initAggregateQueryEngine(this.aggregateStore,t.schema),i("esri-2d-update-debug")&&e.describe(),this._set("config",t)}));function r(e,r){return t.apply(this,arguments)}return r}(),o.applyUpdate=function(){var t=e._asyncToGenerator((function*(e){e.version=this._updateVersion,i("esri-2d-update-debug")&&console.debug(`Applying update ${e.version}`),e.mesh&&this.clearTiles(),this._updateQueue.resume(),yield this._source.applyUpdate(e),this.notifyChange("updating"),yield a.whenOnce((()=>!this.updating)),s.isSome(this.aggregateStore)&&(yield n.after(10),yield a.whenOnce((()=>!this.updating)))}));function r(e){return t.apply(this,arguments)}return r}(),o.onEdits=function(){var t=e._asyncToGenerator((function*({edits:e}){i("esri-2d-update-debug")&&console.debug("Applying Edit:",e),this._didEdit=!0;try{const t=e.removed.map((e=>e.objectId&&-1!==e.objectId?e.objectId:this._lookupObjectIdByGlobalId(e.globalId))),r=e.addOrModified.map((({objectId:e})=>e));this.featureStore.invalidate(),yield this._source.edit(r,t),this.clearTiles(),this.notifyChange("updating"),s.isSome(this.aggregateStore)&&this.aggregateStore.clear(),yield this._source.resend(),yield a.whenOnce((()=>!this.updating))}catch(t){}}));function r(e){return t.apply(this,arguments)}return r}(),o.refresh=function(){var t=e._asyncToGenerator((function*(e){if(!e.dataChanged){const e=b.UpdateToken.empty();return e.storage.filters=!0,this.applyUpdate(e)}this.featureStore.invalidate(),this.clearTiles(),this._source.refresh(this._updateVersion,e),this._cleanupNeeded=!0,this.notifyChange("updating"),yield a.whenOnce((()=>!this.updating))}));function r(e){return t.apply(this,arguments)}return r}(),o.clearTiles=function(){for(const e of this.tileStore.tiles)this.processor.onTileClear(e)},o.onTileUpdate=function(e){s.isSome(this.aggregateStore)&&this.aggregateStore.onTileUpdate(e);for(const t of e.added)this._source.subscribe(t,this._updateVersion),this._level=t.level;for(const t of e.removed)this._source.unsubscribe(t),this._cleanupNeeded=!0,this._tileToResolver.has(t.id)&&(this._tileToResolver.get(t.id).resolve(),this._tileToResolver.delete(t.id));this.notifyChange("updating")},o.onIdle=function(){var t=e._asyncToGenerator((function*(){this._invalidated&&(this._invalidated=!1,(s.isSome(this.aggregateStore)||"heatmap"===this.processor.type)&&(yield this._repushCurrentLevelTiles())),this._markAndSweep()}));function r(){return t.apply(this,arguments)}return r}(),o.querySummaryStatistics=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.featureQueryEngine.executeQueryForSummaryStatistics(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryAggregateSummaryStatistics=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.aggregateQueryEngine.executeQueryForSummaryStatistics(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryUniqueValues=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.featureQueryEngine.executeQueryForUniqueValues(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryAggregateUniqueValues=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.aggregateQueryEngine.executeQueryForUniqueValues(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryClassBreaks=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.featureQueryEngine.executeQueryForClassBreaks(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryAggregateClassBreaks=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.aggregateQueryEngine.executeQueryForClassBreaks(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryHistogram=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.featureQueryEngine.executeQueryForHistogram(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryAggregateHistogram=function(){var t=e._asyncToGenerator((function*({query:e,params:t}){return this.aggregateQueryEngine.executeQueryForHistogram(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o.queryExtent=function(e){return this.featureQueryEngine.executeQueryForExtent(e)},o.queryAggregates=function(e){return this.aggregateQueryEngine.executeQuery(e)},o.queryAggregateCount=function(e){return this.aggregateQueryEngine.executeQueryForCount(e)},o.queryAggregateIds=function(e){return this.aggregateQueryEngine.executeQueryForIds(e)},o.queryFeatures=function(e){return this.featureQueryEngine.executeQuery(e)},o.queryVisibleFeatures=function(){var t=e._asyncToGenerator((function*(e){const t=yield this.featureQueryEngine.executeQuery(e),r=t.objectIdFieldName;return t.features=t.features.filter((e=>{const t=e.attributes[r],i=this.getDisplayId(t);return s.applySome(i,(e=>this.attributeStore.isVisible(e)))})),t}));function r(e){return t.apply(this,arguments)}return r}(),o.queryFeatureCount=function(e){return this.featureQueryEngine.executeQueryForCount(e)},o.queryLatestObservations=function(e){return this.featureQueryEngine.executeQueryForLatestObservations(e)},o.queryObjectIds=function(e){return this.featureQueryEngine.executeQueryForIds(e)},o.queryStatistics=function(){var t=e._asyncToGenerator((function*(){return this.featureStore.storeStatistics}));function r(){return t.apply(this,arguments)}return r}(),o.getObjectId=function(e){return this.featureStore.lookupObjectId(e,this._storage)},o.getDisplayId=function(e){if(s.isSome(this.aggregateStore)){const t=this.aggregateStore.getDisplayId(e);if(s.isNone(t)){const t=this.featureStore.lookupDisplayId(e);return this.aggregateStore.getDisplayIdForReferenceId(t)}return t}return this.featureStore.lookupDisplayId(e)},o.getFeatures=function(e){const t=[],r=[];for(const i of e){const e=s.isSome(this.aggregateStore)?this.getAggregate(i):null;if(s.isSome(e))if(s.isSome(e.attributes.referenceId)){const r=this.getFeature(e.attributes.referenceId);s.isSome(r)&&t.push(r)}else r.push(e);else{const e=this.getFeature(i);s.isSome(e)&&t.push(e)}}return{features:t,aggregates:r}},o.getFeature=function(e){const t=this.featureStore.lookupFeatureByDisplayId(e,this._storage);if(s.isNone(t))return null;const r=t.readHydratedGeometry(),i=h.convertToGeometry(r,t.geometryType,t.hasZ,t.hasM);return{attributes:t.readAttributes(),geometry:i}},o.getAggregate=function(e){return s.isNone(this.aggregateStore)?null:this.aggregateStore.getAggregate(e)},o.getAggregates=function(){return s.isNone(this.aggregateStore)?[]:this.aggregateStore.getAggregates()},o.setHighlight=function(){var t=e._asyncToGenerator((function*(e){const t=s.filterNones(e.map((e=>this.getDisplayId(e))));return this.attributeStore.setHighlight(e,t)}));function r(e){return t.apply(this,arguments)}return r}(),o._lookupObjectIdByGlobalId=function(e){const t=this.service.globalIdField;if(s.isNone(t))throw new Error("Expected globalIdField to be defined");let r=null;if(this.featureStore.forEach((i=>{e===i.readAttribute(t)&&(r=i.getObjectId())})),s.isNone(r))throw new Error(`Expected to find a feature with globalId ${e}`);return r},o._repushCurrentLevelTiles=function(){var t=e._asyncToGenerator((function*(){var t=this;const r=this.tileStore.tiles.filter((e=>e.level===this._level));r.map(function(){var r=e._asyncToGenerator((function*(e){return t._patchTile({type:"append",id:e.key.id,clear:!0,addOrUpdate:null,end:!1})}));return function(e){return r.apply(this,arguments)}}());const i=r.map(function(){var r=e._asyncToGenerator((function*(e){return t._patchTile({type:"append",id:e.key.id,addOrUpdate:v.FeatureSetReaderJSON.fromOptimizedFeatures([],t.service),remove:[],end:!0,isRepush:!0,status:b.UpdateToken.empty()})}));return function(e){return r.apply(this,arguments)}}());yield Promise.all(i)}));function r(){return t.apply(this,arguments)}return r}(),o._maybeForceCleanup=function(){performance.now()-this._lastCleanup>T&&this._markAndSweep()},o._patchTile=function(e,t){const r=this._updateQueue.push(e,t).then((()=>{this.notifyChange("updating")})).catch((e=>{this.notifyChange("updating")}));return this.notifyChange("updating"),r},o._onTileMessage=function(){var t=e._asyncToGenerator((function*(e,t){if(n.throwIfAborted(t),i("esri-2d-update-debug")){const t=s.applySome(e.addOrUpdate,(e=>e.hasFeatures));console.debug(e.id,`FeatureController:onTileMessage: [clear:${e.clear}, end:${e.end}, features: ${t}]`)}const r=this.tileStore.get(e.id);if(!r)return;if(e.clear)return this.processor.onTileClear(r);const a=e.status;this._cleanupNeeded=!0;const o=[];for(const i of e.remove??[]){const e=this.featureStore.lookupDisplayId(i);e&&o.push(e)}e.remove=o;try{if(s.isNone(e.addOrUpdate))return void this.processor.onTileMessage(r,{...e,addOrUpdate:null},s.isSome(this.aggregateStore),t).catch(n.throwIfNotAbortError);if(e.addOrUpdate.setArcadeSpatialReference(this.spatialReference),this.featureStore.hasInstance(e.addOrUpdate.instance)&&a.targets.feature||(a.targets.feature=!0,this.featureStore.onTileData(r,e)),!a.storage.data||!a.storage.filters){a.storage.data=!0,a.storage.filters=!0,this.attributeStore.onTileData(r,e);"stream"===this._source.type||this._didEdit?(yield this.attributeStore.sendUpdates(),n.throwIfAborted(t)):this.attributeStore.sendUpdates()}if(s.isSome(this.aggregateStore)&&!a.targets.aggregate){a.targets.aggregate=!0;const t=w(this._source)&&this._source.loading,i=!w(this._source)||t||e.end;if(this.aggregateStore.onTileData(r,e,this._storage,this.attributeStore,i),!i)return;a.mesh||(this.attributeStore.onTileData(r,e),yield this.attributeStore.sendUpdates())}if(!a.mesh){a.mesh=!0;const i=s.isSome(this.aggregateStore)&&"cluster"===this.aggregateStore.type;yield this.processor.onTileMessage(r,e,i,t),n.throwIfAborted(t)}this._maybeForceCleanup()}catch(u){n.throwIfNotAbortError(u)}}));function r(e,r){return t.apply(this,arguments)}return r}(),o._mark=function(e,t,r){const i=(4294901760&this._storage.getInstanceId(e))>>>16;e&&(t.add(i),r.set(e))},o._markAndSweep=function(){this._lastCleanup=performance.now();if(!(!("feature"===this._source.type&&"snapshot"===this._source.mode)&&("stream"===this._source.type||this._cleanupNeeded)))return;this._cleanupNeeded=!1;const e=this._storage.getBitset(this._markedIdsBufId),t=new Set;e.clear();for(const r of this.tileStore.tiles)for(const i of this._source.readers(r.id)){const r=i.getCursor();for(;r.next();){let i=r.getDisplayId();if(!i){const e=r.getObjectId();i=this.featureStore.lookupDisplayId(e)}this._mark(i,t,e)}}"symbol"===this.processor.type&&this.processor.forEachBufferId((r=>{this._mark(r,t,e)})),this._updateQueue.forEach((r=>{for(const i of r.remove??[]){const r=this.featureStore.lookupDisplayId(i);this._mark(r,t,e)}})),s.isSome(this.aggregateStore)&&(this.aggregateStore.sweepFeatures(e,this.featureStore),"sweepAggregates"in this.aggregateStore&&this.aggregateStore.sweepAggregates(this._storage,this.attributeStore,this._level)),this.featureStore.sweepFeatures(e,this._storage,this.attributeStore),this.featureStore.sweepFeatureSets(t)},e._createClass(r,[{key:"fieldsIndex",get:function(){return new l(this.service.fields)}},{key:"spatialReference",get:function(){return this.tileStore.tileScheme.spatialReference}},{key:"updating",get:function(){return this.isUpdating()}}]),r}(r);t.__decorate([o.property({constructOnly:!0})],A.prototype,"tileStore",void 0),t.__decorate([o.property()],A.prototype,"config",void 0),t.__decorate([o.property({readOnly:!0})],A.prototype,"fieldsIndex",null),t.__decorate([o.property()],A.prototype,"processor",void 0),t.__decorate([o.property({constructOnly:!0})],A.prototype,"remoteClient",void 0),t.__decorate([o.property({constructOnly:!0})],A.prototype,"service",void 0),t.__decorate([o.property()],A.prototype,"spatialReference",null),t.__decorate([o.property()],A.prototype,"updating",null),A=t.__decorate([g.subclass("esri.views.2d.layers.features.controllers.FeatureController2D")],A);return A}));
