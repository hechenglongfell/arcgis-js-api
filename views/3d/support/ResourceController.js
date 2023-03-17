/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/maybe","../../../core/reactiveUtils","../../../core/scheduling","../../../core/time","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","./index","./MemoryController","./StreamDataLoader","../../support/Scheduler"],(function(e,t,r,o,s,a,i,n,l,d,u,c,m,h,_,p){"use strict";let y=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).updating=!1,t}return t._inheritsLoose(r,e),r}(o);function k(e){return new T({view:e})}r.__decorate([l.property({readOnly:!0})],y.prototype,"updating",void 0),y=r.__decorate([c.subclass("esri.views.3d.support.ResourceControllerMain")],y);let T=function(e){function r(){var t;return(t=e.apply(this,arguments)||this)._immediateTask=p.ImmediateTask,t._normalTask=p.ImmediateTask,t._frameTask=null,t}t._inheritsLoose(r,e);var o=r.prototype;return o.initialize=function(){this._scheduler=p.newScheduler(),this._memoryController=h.newMemoryController(this.view),this._streamDataLoader=new _.StreamDataLoader,this._streamDataLoader.setup(m.maxDownloadSlots,m.downloadSlotsPerClient,this._scheduler),this.addHandles([a.watch((()=>this.view.state?.mode),(e=>{null!=e&&(this._scheduler.state=e)}),a.sync),a.watch((()=>this.view.stationary),(()=>this._stationaryChangedHandler()))]),this._frameTask=i.addFrameTask({update:e=>this._frame(e)}),this._immediateTask=this._scheduler.registerTask(p.TaskPriority.RESOURCE_CONTROLLER_IMMEDIATE),this._normalTask=this._scheduler.registerTask(p.TaskPriority.RESOURCE_CONTROLLER)},o.destroy=function(){this._immediateTask.remove(),this._normalTask.remove(),this._frameTask=s.removeMaybe(this._frameTask),this._streamDataLoader=s.destroyMaybe(this._streamDataLoader),this._memoryController=s.destroyMaybe(this._memoryController),this._scheduler=s.destroyMaybe(this._scheduler)},o.createStreamDataRequester=function(e){const t=this._streamDataLoader;return{request:(r,o,s)=>t.request(r,o,e,s),get busy(){return!t.hasDownloadSlots(e)}}},o._frame=function(e){this.view.suspended||this.view.stateManager&&(this.view.stateManager.step(n.secondsFromMilliseconds(e.deltaTime)),!this._scheduler)||(this._scheduler.updateBudget(e)?(this._memoryController.update(),this._scheduler.frame()):this._memoryController.updating&&this._memoryController.update())},o._stationaryChangedHandler=function(){this.memoryController.resetStableQuality()},t._createClass(r,[{key:"immediate",get:function(){return this._immediateTask}},{key:"normal",get:function(){return this._normalTask}},{key:"updating",get:function(){return!!(this._memoryController?.updating||this._streamDataLoader?.updating||this._immediateTask?.updating)}},{key:"scheduler",get:function(){return this._scheduler}},{key:"memoryController",get:function(){return this._memoryController}},{key:"test",get:function(){return{getQueueStats:e=>this._streamDataLoader.test.loadQueue.getStatsForType(e)}}}]),r}(y);r.__decorate([l.property({constructOnly:!0})],T.prototype,"view",void 0),r.__decorate([l.property()],T.prototype,"_scheduler",void 0),r.__decorate([l.property()],T.prototype,"_memoryController",void 0),r.__decorate([l.property()],T.prototype,"_streamDataLoader",void 0),r.__decorate([l.property()],T.prototype,"_immediateTask",void 0),r.__decorate([l.property()],T.prototype,"_normalTask",void 0),r.__decorate([l.property({readOnly:!0})],T.prototype,"updating",null),T=r.__decorate([c.subclass("esri.views.3d.support.ResourceControllerImpl")],T),e.newResourceController=k,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
