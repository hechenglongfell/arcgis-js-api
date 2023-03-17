/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../analysis/LineOfSightAnalysis","../../analysis/LineOfSightAnalysisObserver","../../analysis/LineOfSightAnalysisTarget","../../core/Collection","../../core/collectionUtils","../../core/Handles","../../core/handleUtils","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../support/elevationInfoUtils","./LineOfSightTarget","../support/AnalysisViewModel"],(function(e,t,n,s,o,i,a,r,l,c,h,d,g,y,u,p,v,T){"use strict";const f=i.ofType(v);let _=function(t){function i(e){var n;return(n=t.call(this,e)||this).analysis=null,n.supportedViewType="3d",n.unsupportedErrorMessage="LineOfSightViewModel is only supported in 3D views.",n._handles=new r,n._vmTargetsToConnection=new Map,n._analysisTargetsToConnection=new Map,n}e._inheritsLoose(i,t);var d=i.prototype;return d.initialize=function(){this._handles.add([this.targets.on("after-add",(e=>this._onViewModelTargetAdded(e.item))),this.targets.on("after-remove",(e=>this._onViewModelTargetRemoved(e.item))),h.watch((()=>this.analysis),(e=>this._onAnalysisChange(e)),h.syncAndInitial)])},d.destroy=function(){this._analysisTargetsToConnection.forEach((e=>e.remove())),this._handles=c.destroyMaybe(this._handles)},d.continue=function(){c.isSome(this.tool)&&this.tool.continue()},d.stop=function(){c.isSome(this.tool)&&this.tool.stop()},d.constructAnalysis=function(){return new n},d.onConnectToAnalysisView=function(){var t=e._asyncToGenerator((function*(e){this._handles.add([e.on("result-changed",(e=>{const t=this._analysisTargetsToConnection.get(e.target);t&&(c.isSome(e.result)?(t.viewModelTarget.intersectedGraphic=e.result.intersectedGraphic,t.viewModelTarget.intersectedLocation=c.unwrap(e.result.intersectedLocation),t.viewModelTarget.visible=e.result.visible):(t.viewModelTarget.intersectedGraphic=null,t.viewModelTarget.intersectedLocation=null,t.viewModelTarget.visible=void 0))}))],"view")}));function n(e){return t.apply(this,arguments)}return n}(),d.onDisconnectFromAnalysisView=function(){null!=this._handles&&this._handles.remove("view")},d._onViewModelTargetAdded=function(e){if(this._vmTargetsToConnection.get(e))return;const t=new o({position:e.location});this._connectViewModelWithAnalysisTarget(e,t),this.analysis.targets.add(t)},d._onViewModelTargetRemoved=function(e){const t=this._vmTargetsToConnection.get(e);t&&(t.remove(),this.analysis.targets.remove(t.analysisTarget))},d._onAnalysisTargetAdded=function(e){if(this._analysisTargetsToConnection.get(e))return;const t=new v({location:c.applySome(e.position,(t=>this._convertAnalysisPointToAbsoluteHeight(t,e.elevationInfo)))});this._connectViewModelWithAnalysisTarget(t,e),this.targets.add(t)},d._onAnalysisTargetRemoved=function(e){const t=this._analysisTargetsToConnection.get(e);t&&(t.remove(),this.targets.remove(t.viewModelTarget))},d._connectViewModelWithAnalysisTarget=function(e,t){let n=!1;const s=l.handlesGroup([h.watch((()=>({position:t.position,elevationInfo:t.elevationInfo})),(({position:t,elevationInfo:s})=>{n||(n=!0,e.location=c.applySome(t,(e=>this._convertAnalysisPointToAbsoluteHeight(e,s))),n=!1)}),h.sync),h.watch((()=>e.location),(e=>{n||(n=!0,t.position=c.applySome(e,(e=>{const t=e.clone();return t.hasZ||(t.z=0),t})),t.elevationInfo=null,n=!1)}),h.sync)]),o={analysisTarget:t,viewModelTarget:e,remove:()=>{s.remove(),this._vmTargetsToConnection.delete(e),this._analysisTargetsToConnection.delete(t)}};this._vmTargetsToConnection.set(e,o),this._analysisTargetsToConnection.set(t,o)},d._onAnalysisChange=function(e){const t="analysis";this._handles.remove(t),this._handles.add([this.analysis.targets.on("after-add",(e=>this._onAnalysisTargetAdded(e.item))),this.analysis.targets.on("after-remove",(e=>this._onAnalysisTargetRemoved(e.item)))],t),this.targets.removeAll(),e.targets.forEach((e=>{this._onAnalysisTargetAdded(e)}))},d._convertAnalysisPointToAbsoluteHeight=function(e,t){const n=e.clone();if(c.isSome(this.view)){const s=p.getEffectiveElevationInfo(e.hasZ,t);n.z=p.getConvertedElevation(this.view,e,s,p.absoluteHeightElevationInfo)}return n},e._createClass(i,[{key:"state",get:function(){return this.disabled||!this.ready?"disabled":c.isNone(this.tool)?"ready":this.tool.state}},{key:"observer",get:function(){const{observer:e}=this.analysis;return c.isNone(e)||c.isNone(e.position)?null:this._convertAnalysisPointToAbsoluteHeight(e.position,e.elevationInfo)},set:function(e){const t=c.applySome(e,(e=>{const t=e.clone();return t.hasZ||(t.z=0),t}));this.analysis.observer=new s({position:t})}},{key:"targets",get:function(){return this._get("targets")||new f},set:function(e){this._set("targets",a.referenceSetter(e,this.targets,f))}},{key:"testInfo",get:function(){return{analysisView:this.analysisView,getAnalysisTargetFromViewModelTarget:e=>c.applySome(this._vmTargetsToConnection.get(e),(e=>e.analysisTarget))}}}]),i}(T.AnalysisViewModel);t.__decorate([d.property({type:n})],_.prototype,"analysis",void 0),t.__decorate([d.property({readOnly:!0})],_.prototype,"state",null),t.__decorate([d.property()],_.prototype,"observer",null),t.__decorate([d.property({type:f,cast:a.castForReferenceSetter,nonNullable:!0})],_.prototype,"targets",null),_=t.__decorate([u.subclass("esri.widgets.lineOfSight.LineOfSightViewModel")],_);return _}));
