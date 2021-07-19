/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../geometry","../../../../../core/Accessor","../../../../../core/Handles","../../../../../core/handleUtils","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/accessorSupport/trackingUtils","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/ray","./LineOfSightAnalysis","../../../webgl-engine/lib/Intersector","../../../webgl-engine/lib/intersectorUtilsConversions","../../../../support/Scheduler","../../../../../geometry/Point"],(function(e,t,n,i,o,s,r,a,c,l,u,d,h,p,g,_,y,v,f,m,b,C,A){"use strict";e.LineOfSightController=function(e){function n(t){var n;return(n=e.call(this,t)||this)._tasks=C.ImmediateTask,n._handles=new s,n._analysisHandles=new s,n}t._inheritsLoose(n,e);var i=n.prototype;return i.initialize=function(){var e;const t=null==(e=this.view.resourceController)?void 0:e.scheduler;t&&(this._tasks=t.registerTask(C.TaskPriority.LINE_OF_SIGHT_TOOL));this._handles.add([g.reactionInit((()=>this.model.observer),(e=>this._onObserverChange(e))),this._connectAnalyses(),this._connectTargets()]),this._intersector=new m.Intersector(this.view.state.viewingMode),this._intersector.options.hud=!1,this._intersector.options.store=0},i.destroy=function(){this._handles.destroy(),this._analysisHandles.destroy(),this._analyses.removeAll()},i.getLineOfSightComputationDependencies=function(e){const{inputPoints:t}=e;return{inputPoints:t}},i.computeAnalysis=function(e,t=!1){const{analysis:n}=e,{inputPoints:i,computationResult:o}=n,{observerAdjusted:s,targetAdjusted:r}=i,{start:a,end:c}=o;_.copy(a,s),_.copy(c,r);t||this._canComputeAnalysis(n)?this._computeAnalysisIntersection(e):this._interpolateAnalysisIntersection(e),n.updateComputationResults()},i._adjustStartEndPositions=function(e){const t=this._screenPixelSize,n=this.view,{inputPoints:i}=e,{observer:o,target:s,observerAdjusted:r,targetAdjusted:a}=i,c=T;_.subtract(c,s,o);const l=t;_.normalize(c,c),_.scale(c,c,Math.min(l,1)),_.add(r,o,c),_.subtract(c,o,s);const u=n.state.camera.computeScreenPixelSizeAt(s);_.normalize(c,c),_.scale(c,c,Math.min(u,1)),_.add(a,s,c)},i._computeAnalysisIntersection=function({analysis:e,interpolationInfo:t}){const{view:n}=this,{sceneIntersectionHelper:i,renderCoordsHelper:o}=n;if(a.isNone(i))return;const s=this._intersector,{computationResult:r,inputPoints:c}=e,{observer:l,target:u}=c,{start:d,end:h}=r,p=v.fromPoints(d,h,O);i.intersectToolIntersectorRay(p,s);const g=r.intersection,y=T,f=!!s.results.min&&s.results.min.getIntersectionPoint(g);let m=!0;if(f){_.copy(t.originalIntersection,g),_.copy(t.originalObserver,d),_.copy(t.originalTarget,h),o.fromRenderCoords(g,y,n.spatialReference);const e=1-_.dist(h,u)/_.dist(d,u);m=_.dist(l,g)>=e*_.dist(l,u)}const C=new A(y,n.spatialReference);e.target.intersectedLocation=m?null:C,e.target.intersectedGraphic=m?null:b.toGraphic(s.results.min,n),e.target.visible=!!f&&m,r.isValid=c.isValid=!0,r.isTargetVisible=m},i._interpolateAnalysisIntersection=function({analysis:e,interpolationInfo:t}){const{computationResult:n,inputPoints:i,target:o}=e,{start:s,end:r,intersection:a}=n,{originalIntersection:c,originalObserver:l,originalTarget:u}=t;if(_.copy(a,c),i.isValid){const e=T,t=_.dist(l,c)/_.dist(l,u);_.sub(e,s,l),_.scale(e,e,1-t),_.add(a,a,e),_.sub(e,r,u),_.scale(e,e,t),_.add(a,a,e),n.isValid=!0}else o.intersectedLocation=null,o.intersectedGraphic=null,o.visible=void 0,n.isValid=!1,n.isTargetVisible=!1},i._canComputeAnalysis=function(e){const t=this.model.observer,n=this.view.frustum;if(a.isNone(t)||a.isNone(e.target.location)||a.isNone(n))return!1;const{observerAdjusted:i,targetAdjusted:o}=e.inputPoints,s=n.intersectsPoint(i),r=n.intersectsPoint(o);return s&&r},i._onObserverChange=function(e){if(a.isNone(e))return void this.model.targets.removeAll();const t=y.create();this.view.renderCoordsHelper.toRenderCoords(e,t),this._observerEngineLocation=t,this.priority=C.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE},i._onObserverChangeForAnalysis=function(e){e.inputPoints.isValid=!1},i._onObserverEngineForAnalysis=function(e,t){const{inputPoints:n}=e;_.copy(n.observer,t),this._adjustStartEndPositions(e),e.updateInputPoints(),this.priority=C.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE},i._onTargetLocationChange=function(e,t){const{inputPoints:n}=e;n.isValid=!1,this.view.renderCoordsHelper.toRenderCoords(t,n.target),this._adjustStartEndPositions(e),e.updateInputPoints(),this.priority=C.TaskPriority.LINE_OF_SIGHT_TOOL_INTERACTIVE},i._connectAnalysisToTarget=function(e){return g.reactionInit((()=>({analysis:e,targetLocation:e.target.location})),(({analysis:e,targetLocation:t})=>{a.isSome(t)&&this._onTargetLocationChange(e,t)}))},i._connectAnalysisToObserver=function(e){return g.reactionInit((()=>({analysis:e,observer:this.model.observer})),(({analysis:e})=>{this._onObserverChangeForAnalysis(e)}))},i._connectAnalysisToObserverEngine=function(e){return g.reactionInit((()=>({analysis:e,observer:this._observerEngineLocation})),(({analysis:e,observer:t})=>{this._onObserverEngineForAnalysis(e,t)}))},i._connectAnalysisForCompute=function(e){var n=this;let i=a.none;const o={analysis:e,interpolationInfo:{originalIntersection:y.create(),originalObserver:y.create(),originalTarget:y.create()}};return r.handlesGroup([g.reactionInit((()=>this.getLineOfSightComputationDependencies(e)),(()=>{i=a.abortMaybe(i),i=c.createTask(function(){var e=t._asyncToGenerator((function*(e){yield c.ignoreAbortErrors(n._tasks.schedule((()=>n.computeAnalysis(o)),e))}));return function(t){return e.apply(this,arguments)}}())})),r.makeHandle((()=>i=a.abortMaybe(i)))])},i._connectAnalysis=function(e){const t=this._analysisHandles;t.has(e)||t.add([this._connectAnalysisToTarget(e),this._connectAnalysisToObserver(e),this._connectAnalysisToObserverEngine(e),this._connectAnalysisForCompute(e)])},i._disconnectAnalysis=function(e){this._analysisHandles.remove(e)},i._onAnalysesCollectionChange=function(e){e.added.forEach((e=>this._connectAnalysis(e))),e.removed.forEach((e=>this._disconnectAnalysis(e)))},i._onTargetsChange=function(e){this._analyses.removeAll(),e.items.length>0&&this._onTargetCollectionChange({target:e,added:e.items,removed:[],moved:[]})},i._onTargetCollectionChange=function(e){const t=this._analyses;e.added.forEach((e=>{t.some((t=>t.target===e))||t.add(new f.LineOfSightAnalysis({target:e}))})),e.removed.forEach((e=>{const n=t.find((t=>t.target===e));t.remove(n)}))},i._connectAnalyses=function(){let e=null;return r.handlesGroup([g.reactionInit((()=>this._analyses),(t=>{e=a.removeMaybe(e),e=t.on("change",(e=>this._onAnalysesCollectionChange(e))),this._onAnalysesCollectionChange({target:t,added:t.items,removed:[],moved:[]})})),r.makeHandle((()=>e=a.removeMaybe(e)))])},i._connectTargets=function(){let e=null;return r.handlesGroup([g.reactionInit((()=>this.model.targets),(t=>{e=a.removeMaybe(e),e=t.on("change",(e=>this._onTargetCollectionChange(e))),this._onTargetsChange(t)})),r.makeHandle((()=>e=a.removeMaybe(e)))])},t._createClass(n,[{key:"updating",get:function(){return this._tasks.updating}},{key:"priority",get:function(){return this._tasks.priority},set:function(e){this._tasks.priority=e}},{key:"_viewData",get:function(){return this.model.viewData}},{key:"_analyses",get:function(){return this._viewData.analyses}},{key:"_observerEngineLocation",get:function(){return this._viewData.observerEngineLocation},set:function(e){this._viewData.observerEngineLocation=e}},{key:"_screenPixelSize",get:function(){return this.view.state.camera.computeScreenPixelSizeAt(this._observerEngineLocation)}}]),n}(o),n.__decorate([l.property()],e.LineOfSightController.prototype,"model",void 0),n.__decorate([l.property()],e.LineOfSightController.prototype,"view",void 0),n.__decorate([l.property()],e.LineOfSightController.prototype,"updating",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"priority",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"_viewData",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"_analyses",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"_observerEngineLocation",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"_screenPixelSize",null),n.__decorate([l.property()],e.LineOfSightController.prototype,"_tasks",void 0),e.LineOfSightController=n.__decorate([p.subclass("esri.views.3d.interactive.graphics.LineOfSight.LineOfSightController")],e.LineOfSightController);const T=y.create(),O=v.create();Object.defineProperty(e,"__esModule",{value:!0})}));
