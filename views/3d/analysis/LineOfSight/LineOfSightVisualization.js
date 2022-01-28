/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../core/Accessor","../../../../core/Handles","../../../../core/handleUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../interactive/visualElements/LineVisualElement"],(function(e,i,t,n,o,s,a,l,r,c,u,y,d,p,h,f,m,_,O){"use strict";e.LineOfSightVisualization=function(e){function t(i){var t;return(t=e.call(this,i)||this)._handle=null,t._analysisHandles=new s,t}i._inheritsLoose(t,e);var o=t.prototype;return o.initialize=function(){this._handle=this._connectAnalyses()},o.destroy=function(){this._handle=r.removeMaybe(this._handle),this._analysisHandles=r.destroyMaybe(this._analysisHandles)},o.createLineOfSightVisualization=function(){const e=this._configuration,i=this._opacity,t={view:this.view,attached:!0,width:e.outerWidth,innerWidth:e.innerWidth},o=n.toUnitRGBA(e.visibleOuterColor);l.applyOpacity(o,o,i);const s=n.toUnitRGBA(e.visibleInnerColor);l.applyOpacity(s,s,i);const a=n.toUnitRGBA(e.occludedOuterColor);l.applyOpacity(a,a,i);const r=n.toUnitRGBA(e.occludedInnerColor);l.applyOpacity(r,r,i);const c=n.toUnitRGBA(e.undefinedOuterColor);l.applyOpacity(c,c,i);const u=n.toUnitRGBA(e.undefinedInnerColor);l.applyOpacity(u,u,i);return{visibleLineVisualElement:new O.LineVisualElement({...t,color:o,innerColor:s}),occludedLineVisualElement:new O.LineVisualElement({...t,color:a,innerColor:r}),undefinedLineVisualElement:new O.LineVisualElement({...t,color:c,innerColor:u})}},o.destroyLineOfSightVisualization=function(e){e.visibleLineVisualElement=r.destroyMaybe(e.visibleLineVisualElement),e.occludedLineVisualElement=r.destroyMaybe(e.occludedLineVisualElement),e.undefinedLineVisualElement=r.destroyMaybe(e.undefinedLineVisualElement)},o.updateLineOfSightVisualization=function(e,i){const t=this.visible,o=this._configuration,{computationResult:s,inputPoints:a}=e,{start:r,end:c,intersection:u,isValid:y,isTargetVisible:d}=s,{observer:p}=a,h=b;h[12]=p[0],h[13]=p[1],h[14]=p[2];const f=m.subtract(V,r,p),O=m.subtract(v,c,p),L=m.subtract(g,u,p),{visibleLineVisualElement:A,occludedLineVisualElement:C,undefinedLineVisualElement:E}=i;if(!t)return A.visible=!1,C.visible=!1,void(E.visible=!1);if(A.visible=!0,C.visible=!0,E.visible=!0,A.geometry=null,C.geometry=null,E.geometry=null,y)if(d){A.geometry=[[_.fromArray(f),_.fromArray(O)]],A.transform=h;const e=n.toUnitRGBA(o.visibleOuterColor);A.color=l.applyOpacity(e,e,this._opacity)}else{A.geometry=[[_.fromArray(f),_.fromArray(L)]],A.transform=h;const e=n.toUnitRGBA(o.occludedOuterColor);A.color=l.applyOpacity(e,e,this._opacity),C.geometry=[[_.fromArray(L),_.fromArray(O)]],C.transform=h}else E.geometry=[[_.fromArray(f),_.fromArray(O)]],E.transform=h},o.updateVisualizationOpacity=function(e,i){const t=this._configuration,o=this._opacity,s=n.toUnitRGBA(t.visibleOuterColor);l.applyOpacity(s,s,o);const a=n.toUnitRGBA(t.visibleInnerColor);l.applyOpacity(a,a,o);const r=n.toUnitRGBA(t.occludedOuterColor);l.applyOpacity(r,r,o);const c=n.toUnitRGBA(t.occludedInnerColor);l.applyOpacity(c,c,o);const u=n.toUnitRGBA(t.undefinedOuterColor);l.applyOpacity(u,u,o);const y=n.toUnitRGBA(t.undefinedInnerColor);l.applyOpacity(y,y,o),i.visibleLineVisualElement.color=e.computationResult.isTargetVisible?s:r,i.visibleLineVisualElement.innerColor=a,i.occludedLineVisualElement.color=r,i.occludedLineVisualElement.innerColor=c,i.undefinedLineVisualElement.color=u,i.undefinedLineVisualElement.innerColor=y},o.getLineOfSightVisualizationDependencies=function(e){const{computationResult:i}=e,{occludedOuterColor:t,visibleOuterColor:n}=this._configuration;return{computationResult:i,occludedOuterColor:t,visibleOuterColor:n,visible:this.visible}},o._connectAnalysis=function(e){const i=this._analysisHandles;if(i.has(e))return;const t=this.createLineOfSightVisualization();i.add([c.react((()=>this.getLineOfSightVisualizationDependencies(e)),(()=>this.updateLineOfSightVisualization(e,t)),c.syncAndInitial),c.react((()=>this._opacity),(()=>this.updateVisualizationOpacity(e,t)),c.sync),a.makeHandle((()=>this.destroyLineOfSightVisualization(t)))],e)},o._disconnectAnalysis=function(e){this._analysisHandles.remove(e)},o._connectAnalyses=function(){let e=null;return a.handlesGroup([c.react((()=>this._analyses),(i=>{e=r.removeMaybe(e),e=i.on("change",(e=>this._onAnalysesCollectionChange(e))),this._onAnalysesCollectionChange({target:i,added:i.items,removed:[],moved:[]})}),c.syncAndInitial),a.makeHandle((()=>e=r.removeMaybe(e)))])},o._onAnalysesCollectionChange=function(e){e.added.forEach((e=>this._connectAnalysis(e))),e.removed.forEach((e=>this._disconnectAnalysis(e)))},i._createClass(t,[{key:"visible",get:function(){return this.analysisView.visible&&!this.analysisView.suspended}},{key:"_analyses",get:function(){return this.analysisView.analysisViewData.analyses}},{key:"_configuration",get:function(){return this.analysisView.analysisViewData.configuration}},{key:"_opacity",get:function(){return this.analysisView.fullOpacity}}]),t}(o),t.__decorate([u.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"analysis",void 0),t.__decorate([u.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"analysisView",void 0),t.__decorate([u.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"view",void 0),t.__decorate([u.property({readOnly:!0})],e.LineOfSightVisualization.prototype,"visible",null),t.__decorate([u.property()],e.LineOfSightVisualization.prototype,"_analyses",null),t.__decorate([u.property()],e.LineOfSightVisualization.prototype,"_configuration",null),t.__decorate([u.property()],e.LineOfSightVisualization.prototype,"_opacity",null),e.LineOfSightVisualization=t.__decorate([h.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],e.LineOfSightVisualization);const V=_.create(),v=_.create(),g=_.create(),b=f.create();Object.defineProperty(e,"__esModule",{value:!0})}));
