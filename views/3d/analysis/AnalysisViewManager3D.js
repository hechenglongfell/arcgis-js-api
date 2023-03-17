/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/asyncUtils","../../../core/Collection","../../../core/Error","../../../core/HandleOwner","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/scheduling","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass"],(function(e,s,t,i,n,a,r,o,l,c,d,u,h){"use strict";const w=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),y="analyses-owner-handles";var _,m;!function(e){e[e.PENDING=0]="PENDING",e[e.CREATED=1]="CREATED"}(_||(_={})),function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED"}(m||(m={}));let p=function(t){function r(e){var s;return(s=t.call(this,e)||this)._allAnalysisViews=new n,s._creatingViewCount=0,s._items=new Map,s._scheduledUpdateHandle=null,s._attachedToViewResolver=A(),s._analysisModules={"area-measurement":{module:null},dimension:{module:null},"direct-line-measurement":{module:null},"line-of-sight":{module:null},slice:{module:null}},s}s._inheritsLoose(r,t);var u=r.prototype;return u.destroy=function(){this._disconnectOwners(),this._attachedToViewResolver.reject(c.createAbortError("AnalysisViewManager was destroyed"))},u.attach=function(){this._connectOwners(),this._attachedToViewResolver.resolve()},u.detach=function(){this._disconnectOwners(),this._attachedToViewResolver.reject(c.createAbortError()),this._attachedToViewResolver=A()},u.whenAnalysisView=function(){var e=s._asyncToGenerator((function*(e){yield this._attachedToViewResolver.promise;const s=this._items.get(e);if(l.isNone(s)||s.state.list===m.REMOVED){throw new a("AnalysisViewManager:no-analysisview-for-analysis","The analysis has not been added to view.analyses",{analysis:e})}return s.createAnalysisViewTask.promise}));function t(s){return e.apply(this,arguments)}return t}(),u._connectOwners=function(){this.handles.add(this._connectAnalysesCollection(this.view.analyses),y)},u._disconnectOwners=function(){this.handles.remove(y),this._update(),this._creatingViewCount=0},u._connectAnalysesCollection=function(e){for(const i of e)this._addAnalysis(i);const s=e.on("after-add",(e=>this._addAnalysis(e.item))),t=e.on("after-remove",(e=>this._removeAnalysis(e.item)));return{remove:()=>{s.remove(),t.remove();for(const s of e)this._removeAnalysis(s)}}},u._addAnalysis=function(e){const s=this._items.get(e);if(null==s){const s={state:{view:_.PENDING,list:m.ADDED},analysis:e,view:null,createAnalysisViewTask:null};this._items.set(e,s),s.createAnalysisViewTask=i.createTask((e=>this._createAnalysisViewPromise(s,e)))}else s.state.list=m.ADDED},u._removeAnalysis=function(e){const s=this._items.get(e);null!=s?(s.state.list=m.REMOVED,this._scheduleUpdate()):o.getLogger(this.declaredClass).error("Trying to remove analysis which was not added")},u._scheduleUpdate=function(){l.isSome(this._scheduledUpdateHandle)||(this._scheduledUpdateHandle=d.schedule((()=>this._update())))},u._update=function(){this._scheduledUpdateHandle=l.removeMaybe(this._scheduledUpdateHandle),this._items.forEach((e=>{if(e.state.list===m.REMOVED)switch(this._items.delete(e.analysis),e.state.view){case _.PENDING:e.createAnalysisViewTask=l.abortMaybe(e.createAnalysisViewTask);break;case _.CREATED:l.isSome(e.view)&&(this._allAnalysisViews.remove(e.view),e.view=l.destroyMaybe(e.view),e.createAnalysisViewTask=null)}}))},u._createAnalysisViewPromise=function(){var e=s._asyncToGenerator((function*(e,s){const t=e.analysis,i=t.type,n=this._analysisModules[i];if(this._creatingViewCount+=1,l.isNone(n.module))try{n.module=yield this._loadAnalysisModule(i)}catch(r){throw this._creatingViewCount-=1,r}if(c.isAborted(s))throw this._creatingViewCount-=1,c.createAbortError("AnalysisView creation aborted");const a=new n.module.default({analysis:t,view:this.view});try{yield a.when()}catch(r){throw this._creatingViewCount-=1,r}if(c.isAborted(s))throw this._creatingViewCount-=1,a.destroy(),c.createAbortError("AnalysisView creation aborted");return e.view=a,e.state.view=_.CREATED,this._allAnalysisViews.add(a),this._creatingViewCount-=1,a}));function t(s,t){return e.apply(this,arguments)}return t}(),u._loadAnalysisModule=function(s){switch(s){case"area-measurement":return new Promise(((s,t)=>e(["./AreaMeasurementAnalysisView3D"],(e=>s(w(e))),t)));case"dimension":return new Promise(((s,t)=>e(["./DimensionAnalysisView3D"],(e=>s(w(e))),t)));case"direct-line-measurement":return new Promise(((s,t)=>e(["./DirectLineMeasurementAnalysisView3D"],(e=>s(w(e))),t)));case"line-of-sight":return new Promise(((s,t)=>e(["./LineOfSightAnalysisView3D"],(e=>s(w(e))),t)));case"slice":return new Promise(((s,t)=>e(["./SliceAnalysisView3D"],(e=>s(w(e))),t)))}},s._createClass(r,[{key:"updating",get:function(){return!this.view.ready||0!==this._creatingViewCount||this._allAnalysisViews.some((e=>e.updating))}},{key:"testInfo",get:function(){return{allAnalysisViews:this._allAnalysisViews}}}]),r}(r.HandleOwner);function A(){const e=c.createResolver();return e.promise.catch((()=>{})),e}t.__decorate([u.property()],p.prototype,"updating",null),t.__decorate([u.property({constructOnly:!0})],p.prototype,"view",void 0),t.__decorate([u.property()],p.prototype,"_allAnalysisViews",void 0),t.__decorate([u.property()],p.prototype,"_creatingViewCount",void 0),p=t.__decorate([h.subclass("esri.views.3d.analysis.AnalysisViewManager3D")],p);return p}));
