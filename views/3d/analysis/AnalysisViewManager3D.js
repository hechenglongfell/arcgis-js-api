/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Collection","../../../core/Error","../../../core/HandleOwner","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/scheduling","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass"],(function(e,s,t,i,n,a,r,o,l,c,u,d,h){"use strict";const w=e=>Object.freeze({__proto__:null,default:e}),y=o.getLogger("esri.views.3d.analysis.AnalysisViewManager3D"),_="analyses-owner-handles";let m=function(t){function i(e){var s;return(s=t.call(this,e)||this)._allAnalysisViews=new n,s._creatingViewCount=0,s._items=new Map,s._scheduledUpdateHandle=null,s._analysisModules={"area-measurement":{module:null},"direct-line-measurement":{module:null},"line-of-sight":{module:null},slice:{module:null}},s}s._inheritsLoose(i,t);var r=i.prototype;return r.destroy=function(){this.detach()},r.attach=function(){this.handles.add(this._connectOwner(this.view),_)},r.detach=function(){this.handles.remove(_),this._update(),this._creatingViewCount=0},r.whenAnalysisView=function(e){const s=this._items.get(e);if(l.isNone(s)||1===s.state.list){const s=new a("AnalysisViewManager:no-analysisview-for-analysis","The analysis has not been added to the scene.",{analysis:e});return Promise.reject(s)}return s.createAnalysisViewTask.promise},r._connectOwner=function(e){return this._connectAnalysesCollection(e.analyses)},r._connectAnalysesCollection=function(e){for(const i of e)this._addAnalysis(i);const s=e.on("after-add",(e=>this._addAnalysis(e.item))),t=e.on("after-remove",(e=>this._removeAnalysis(e.item)));return{remove:()=>{s.remove(),t.remove();for(const s of e)this._removeAnalysis(s)}}},r._addAnalysis=function(e){const s=this._items.get(e);if(null==s){const s={state:{view:0,list:0},analysis:e,view:null,createAnalysisViewTask:null};this._items.set(e,s),s.createAnalysisViewTask=c.createTask((e=>this._createAnalysisViewPromise(s,e)))}else s.state.list=0},r._removeAnalysis=function(e){const s=this._items.get(e);null!=s?(s.state.list=1,this._scheduleUpdate()):y.error("Trying to remove analysis which was not added")},r._scheduleUpdate=function(){l.isSome(this._scheduledUpdateHandle)||(this._scheduledUpdateHandle=u.schedule((()=>this._update())))},r._update=function(){this._scheduledUpdateHandle=l.removeMaybe(this._scheduledUpdateHandle),this._items.forEach((e=>{if(1===e.state.list)switch(this._items.delete(e.analysis),e.state.view){case 0:e.createAnalysisViewTask=l.abortMaybe(e.createAnalysisViewTask);break;case 1:l.isSome(e.view)&&(this._allAnalysisViews.remove(e.view),e.view=l.destroyMaybe(e.view),e.createAnalysisViewTask=null)}}))},r._createAnalysisViewPromise=function(){var e=s._asyncToGenerator((function*(e,s){const t=e.analysis,i=t.type,n=this._analysisModules[i];if(this._creatingViewCount+=1,l.isNone(n.module))try{n.module=yield this._loadAnalysisModule(i)}catch(r){throw this._creatingViewCount-=1,r}if(c.isAborted(s))throw this._creatingViewCount-=1,c.createAbortError("AnalysisView creation aborted");const a=new n.module.default({analysis:t,view:this.view});try{yield a.when()}catch(r){throw this._creatingViewCount-=1,r}if(c.isAborted(s))throw this._creatingViewCount-=1,a.destroy(),c.createAbortError("AnalysisView creation aborted");return e.view=a,e.state.view=1,this._allAnalysisViews.add(a),this._creatingViewCount-=1,a}));function t(s,t){return e.apply(this,arguments)}return t}(),r._loadAnalysisModule=function(s){switch(s){case"area-measurement":return new Promise(((s,t)=>e(["./AreaMeasurement/AreaMeasurementView3D"],(e=>s(w(e))),t)));case"direct-line-measurement":return new Promise(((s,t)=>e(["./DirectLineMeasurement/DirectLineMeasurementView3D"],(e=>s(w(e))),t)));case"line-of-sight":return new Promise(((s,t)=>e(["./LineOfSight/LineOfSightView3D"],(e=>s(w(e))),t)));case"slice":return new Promise(((s,t)=>e(["./Slice/SliceView3D"],(e=>s(w(e))),t)));default:return null}},s._createClass(i,[{key:"updating",get:function(){return!this.view.ready||0!==this._creatingViewCount||this._allAnalysisViews.some((e=>e.updating))}},{key:"testInfo",get:function(){return{allAnalysisViews:this._allAnalysisViews}}}]),i}(r.HandleOwnerMixin(i));t.__decorate([d.property()],m.prototype,"updating",null),t.__decorate([d.property({constructOnly:!0})],m.prototype,"view",void 0),t.__decorate([d.property()],m.prototype,"_allAnalysisViews",void 0),t.__decorate([d.property()],m.prototype,"_creatingViewCount",void 0),m=t.__decorate([h.subclass("esri.views.3d.analysis.AnalysisViewManager3D")],m);return m}));
