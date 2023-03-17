/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3f64","../../../../../core/workers/WorkerHandle","../../../../../chunks/sphere","../../SnappingPoint","../../candidates/EdgeSnappingCandidate","../../candidates/VertexSnappingCandidate"],(function(e,r,n,t,o,i,a,c,s,d,p,u,l,y){"use strict";e.SceneLayerSnappingSourceWorkerHandle=function(e){function n(r){var n;return(n=e.call(this,r)||this).availability=0,n._ids=new Set,n}r._inheritsLoose(n,e);var t=n.prototype;return t.destroy=function(){this._workerHandle.destroy(),this._workerHandle=null},t.initialize=function(){this._workerHandle=new h(this.schedule,{fetchAllEdgeLocations:(e,r)=>this._fetchAllEdgeLocations(e,r)})},t.fetchCandidates=function(){var e=r._asyncToGenerator((function*(e,r){const n=e.coordinateHelper,{point:t}=e,o=f;this.renderCoordsHelper.toRenderCoords(t,n.spatialReference,o);const i=e.distance,a="number"==typeof i?i:i.distance,c=yield this._workerHandle.invoke({bounds:p.fromValues(o[0],o[1],o[2],a),types:e.types},r);return c.candidates.sort(((e,r)=>e.distance-r.distance)),c.candidates.map((e=>this._convertCandidate(n,e)))}));function n(r,n){return e.apply(this,arguments)}return n}(),t.add=function(){var e=r._asyncToGenerator((function*(e,r){this._ids.add(e.id),yield this._workerHandle.invokeMethod("add",e,r)}));function n(r,n){return e.apply(this,arguments)}return n}(),t.remove=function(){var e=r._asyncToGenerator((function*(e,r){this._ids.delete(e.id),yield this._workerHandle.invokeMethod("remove",e,r)}));function n(r,n){return e.apply(this,arguments)}return n}(),t._convertCandidate=function(e,r){switch(r.type){case"edge":return new l.EdgeSnappingCandidate({objectId:r.objectId,targetPoint:this._convertRenderCoordinate(e,r.target),edgeStart:this._convertRenderCoordinate(e,r.start),edgeEnd:this._convertRenderCoordinate(e,r.end),isDraped:!1});case"vertex":return new y.VertexSnappingCandidate({objectId:r.objectId,targetPoint:this._convertRenderCoordinate(e,r.target),isDraped:!1})}},t._convertRenderCoordinate=function({spatialReference:e},r){const n=s.create();return this.renderCoordsHelper.fromRenderCoords(r,n,e),u.asSnappingPoint(n)},t._fetchAllEdgeLocations=function(){var e=r._asyncToGenerator((function*(e,n){var t=this;const o=[],i=[];for(const{id:a,uid:c}of e.components)this._ids.has(a)&&o.push(r._asyncToGenerator((function*(){const e=yield t.fetchEdgeLocations(a,n.signal),r=e.locations.buffer;return i.push(r),{id:a,uid:c,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}}))());return{result:{components:(yield Promise.all(o)).filter((({id:e})=>this._ids.has(e)))},transferList:i}}));function n(r,n){return e.apply(this,arguments)}return n}(),n}(t.HandleOwner),n.__decorate([o.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"renderCoordsHelper",void 0),n.__decorate([o.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"fetchEdgeLocations",void 0),n.__decorate([o.property({constructOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"schedule",void 0),n.__decorate([o.property({readOnly:!0})],e.SceneLayerSnappingSourceWorkerHandle.prototype,"availability",void 0),e.SceneLayerSnappingSourceWorkerHandle=n.__decorate([c.subclass("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],e.SceneLayerSnappingSourceWorkerHandle);let h=function(e){function n(r,n){return e.call(this,"SceneLayerSnappingSourceWorker","fetchCandidates",{},r,{strategy:"dedicated",client:n})||this}return r._inheritsLoose(n,e),n}(d.WorkerHandle);const f=s.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
