/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Graphic","../../../../core/Accessor","../../../../core/compilerUtils","../../../../core/Handles","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../core/accessorSupport/diffUtils","../../../../geometry/support/webMercatorUtils","../../../../rest/support/Query","./constants","./Graphics3DCore","./Graphics3DElevationAlignment","./Graphics3DFilterVisibility","./Graphics3DFrustumVisibility","./Graphics3DObjectStates","./Graphics3DScaleVisibility","./graphicUtils","../support/attributeUtils","../../../support/WatchUpdatingTracking"],(function(t,e,i,s,r,n,a,o,l,p,c,d,h,u,y,g,b,f,m,E,_,w,x,C,v,V){"use strict";let S=function(e){function s(t){var i;return(i=e.call(this,t)||this)._handles=new n,i.watchUpdatingTracking=new V.WatchUpdatingTracking,i.suspendResumeExtentMode="computed",i.dataExtent=null,i.suspendResumeExtent=null,i}t._inheritsLoose(s,e);var l=s.prototype;return l.normalizeCtorArgs=function(t){const e=t.frustumVisibilityEnabled?new _:null,i=t.scaleVisibilityEnabled?new x:null,s=(t.filterVisibilityEnabled||t.timeExtentVisibilityEnabled)&&"multipatch"!==t.layer.geometryType?new E.Graphics3DFilterVisibility:null,r=t.elevationAlignmentEnabled?new m:null,n=new f.Graphics3DCore({owner:t.owner,layer:t.layer,preferredUpdatePolicy:t.preferredUpdatePolicy,elevationFeatureExpressionEnabled:t.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:t.owner.hasZ,hasM:t.owner.hasM}),{updateClippingExtent:a,suspendResumeExtentMode:o,dataExtent:l}=t;return{graphicsCore:n,frustumVisibility:e,scaleVisibility:i,filterVisibility:s,elevationAlignment:r,updateClippingExtent:a,suspendResumeExtentMode:o,dataExtent:l}},l.initialize=function(){this.scaleVisibility&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(()=>this.scaleVisibility.layerMinMaxScaleChangeHandler())),this.filterVisibility&&(this.watchUpdatingTracking.add(this.owner,"filter",(()=>this.filterVisibility.filterChanged())),this.watchUpdatingTracking.add(this.owner,"timeExtent",(()=>this.filterVisibility.filterChanged()))),this.elevationAlignment&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",((t,e)=>{u.diff(t,e)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})),this.watchUpdatingTracking.add(this.layer,"labelsVisible",(()=>this.graphicsCore.updateVisibilityInfo())),this.watchUpdatingTracking.add(this.layer,"labelingInfo",((t,e)=>{u.diff(t,e)&&this.graphicsCore.updateLabelingInfo()}))},l.setup=function(){var e=t._asyncToGenerator((function*(){this.frustumVisibility&&this.frustumVisibility.setup(this.owner);const t=this.owner,e=this.owner.view.basemapTerrain,i=(t,e,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i);if(this.scaleVisibility&&this.scaleVisibility.setup(t,this.layer,i,this.graphicsCore,e),this.filterVisibility&&("filter"in t||"timeExtent"in t)&&this.filterVisibility.setup(t,this.graphicsCore),this.elevationAlignment){const e=t.view.elevationProvider;this.elevationAlignment.setup(t,i,this.graphicsCore,e)}this._set("objectStates",new w.Graphics3DObjectStates(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",t.view.deconflictor.addGraphicsOwner(this.graphicsCore)),yield a.logOnError(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates})),this.watchUpdatingTracking.add(this.layer,"renderer",(t=>this.watchUpdatingTracking.addPromise(this.graphicsCore.rendererChange(t)))),this.watchUpdatingTracking.add(t,"fullOpacity",(()=>this.graphicsCore.opacityChange())),this.setupSuspendResumeExtent(),this.updateClippingExtent&&(this.watchUpdatingTracking.add(t.view,"clippingArea",(()=>this._updateClippingExtent())),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&(yield a.logOnError(this.graphicsCore.updateLabelingInfo()))}));function i(){return e.apply(this,arguments)}return i}(),l.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null);const t=["watchUpdatingTracking","frustumVisibility","scaleVisibility","filterVisibility","elevationAlignment","objectStates","graphicsCore"];for(const e of t){const t=this[e];t&&(t.destroy(),this._set(e,null))}this._set("layer",null),this._set("owner",null)},l.maskOccludee=function(t){const{set:e,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(e,t.uid),i},l.highlight=function(t,e){if(t instanceof g){const{set:i,handle:s}=this.objectStates.acquireSet(0,e);return this.owner.queryObjectIds(t).then((t=>this.objectStates.setObjectIds(i,t))),s}if("number"==typeof t||"string"==typeof t)return this.highlight([t],e);if(t instanceof i)return this.highlight([t],e);if("toArray"in t&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof i){const i=t;if(null==v.attributeLookup(this.layer.fieldsIndex,i[0].attributes,e)){const t=i.map((t=>t.uid)),{set:e,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(e,t),s}t=i.map((t=>v.attributeLookup(this.layer.fieldsIndex,t.attributes,e)))}if("number"==typeof t[0]||"string"==typeof t[0]){const i=t,{set:s,handle:r}=this.objectStates.acquireSet(0,e);return this.objectStates.setObjectIds(s,i),r}}return R},l._updateClippingExtent=function(){const t=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.owner.view.spatialReference)&&(this.updateClippingExtent(t)||this.graphicsCore.recreateAllGraphics())},l.setupSuspendResumeExtent=function(){(this.frustumVisibility||this.scaleVisibility)&&this._handles.add(o.init(this,"suspendResumeExtentMode",(()=>{switch(this._handles.remove(U),this.suspendResumeExtentMode){case"computed":this._handles.add([o.init(this.graphicsCore,"computedExtent",(t=>this.updateSuspendResumeExtent(t))),this.graphicsCore.watch("extentPadding",(()=>this.updateSuspendResumeExtent(this.graphicsCore.computedExtent)))],U);break;case"data":this._handles.add([o.init(this,"dataExtent",(t=>this.updateSuspendResumeExtent(t))),this.graphicsCore.watch("extentPadding",(()=>this.updateSuspendResumeExtent(this.dataExtent)))],U);break;default:r.neverReached(this.suspendResumeExtentMode)}})))},l.updateSuspendResumeExtent=function(t){t?this.suspendResumeExtentChanged(this.extentToSuspendResumeRect(t,this.suspendResumeExtent)):this.suspendResumeExtentChanged(null)},l.extentToSuspendResumeRect=function(t,e){const i=this.owner.view.spatialReference;if(!t.spatialReference.equals(i)){if(!y.canProject(t,i))return;t=y.project(t,i)}return C.enlargeExtent(t,e,b.SUSPEND_RESUME_EXTENT_OPTIMISM,this.graphicsCore.extentPadding)},l.suspendResumeExtentChanged=function(t){this.frustumVisibility&&this.frustumVisibility.setExtent(t),this.scaleVisibility&&this.scaleVisibility.setExtent(t)},t._createClass(s,[{key:"suspended",get:function(){var t;return null==(t=this.scaleVisibility)?void 0:t.suspended}},{key:"suspendInfo",get:function(){var t,e;const i={};return null!=(t=this.scaleVisibility)&&t.suspended&&(i.outsideScaleRange=!0),null!=(e=this.frustumVisibility)&&e.suspended&&(i.outsideOfView=!0),i}},{key:"updating",get:function(){var t,e,i;return!!(null!=(t=this.graphicsCore)&&t.updating||null!=(e=this.frustumVisibility)&&e.updating||null!=(i=this.watchUpdatingTracking)&&i.updating)}}]),s}(s);e.__decorate([l.property({aliasOf:"graphicsCore.layer"})],S.prototype,"layer",void 0),e.__decorate([l.property({aliasOf:"graphicsCore.owner"})],S.prototype,"owner",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"updateClippingExtent",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"graphicsCore",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"scaleVisibility",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"filterVisibility",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"elevationAlignment",void 0),e.__decorate([l.property({constructOnly:!0})],S.prototype,"frustumVisibility",void 0),e.__decorate([l.property({readOnly:!0})],S.prototype,"deconfliction",void 0),e.__decorate([l.property({readOnly:!0})],S.prototype,"labeling",void 0),e.__decorate([l.property({readOnly:!0})],S.prototype,"objectStates",void 0),e.__decorate([l.property({readOnly:!0})],S.prototype,"watchUpdatingTracking",void 0),e.__decorate([l.property()],S.prototype,"suspendResumeExtentMode",void 0),e.__decorate([l.property()],S.prototype,"dataExtent",void 0),e.__decorate([l.property({readOnly:!0})],S.prototype,"suspended",null),e.__decorate([l.property({readOnly:!0})],S.prototype,"suspendInfo",null),e.__decorate([l.property({readOnly:!0,dependsOn:["graphicsCore.updating","frustumVisibility.updating","watchUpdatingTracking.updating"]})],S.prototype,"updating",null),S=e.__decorate([h.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView")],S);const U="suspendResumeExtentMode",R={remove(){},pause(){},resume(){}};return S}));
