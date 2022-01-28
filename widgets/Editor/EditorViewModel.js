/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/Error","../../core/Evented","../../core/HandleOwner","../../core/Logger","../../core/watchUtils","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../layers/GraphicsLayer","../../views/interactive/snapping/SnappingOptions","../Attachments/AttachmentsViewModel","./BatchCreateWorkflow","./CreateWorkflow","./UpdateWorkflow","../FeatureForm/FeatureFormViewModel","../FeatureTemplates/FeatureTemplatesViewModel","../Sketch/SketchViewModel","../Spinner/SpinnerViewModel"],(function(e,t,r,o,i,a,n,s,l,c,d,u,p,f,w,h,y,_,k,v,W,g,m,C){"use strict";const b="esri.widgets.Editor.EditorViewModel",M=n.getLogger(b),T=["create","update"];function V(e,t,r){M.error(new o(e,t,r))}function F(e,t){return e&&e.find((e=>e.layer===t))}let O=function(t){function i(e){var r;return(r=t.call(this,e)||this)._sketchGraphicsLayer=new w({listMode:"hide",internal:!0}),r.activeWorkflow=null,r.activityQueue=[],r.failures=[],r.attachmentsViewModel=new y({abilities:{editing:!0}}),r.featureFormViewModel=new W,r.featureTemplatesViewModel=new g,r.layerInfos=null,r.sketchViewModel=new m({layer:r._sketchGraphicsLayer}),r.snappingOptions=new h,r.spinnerViewModel=new C,r}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){this.handles.add([s.on(this,"activeWorkflow","cancel",(()=>this.emit("workflow-cancel"))),s.on(this,"activeWorkflow","commit",(()=>this.emit("workflow-commit"))),s.init(this,"view.map",(e=>{e&&e.add(this._sketchGraphicsLayer)})),s.watch(this,"editableItems",(()=>{const{activeWorkflow:e}=this;if(this.refreshCreationTemplates(),!e)return;const{stepId:t}=e;"create"!==e.type?"update"===e.type&&("awaiting-feature-to-update"===t&&!this.canUpdate||"awaiting-update-feature-candidate"===t&&!e.data.candidates.some((e=>{const t=this.editableItems.find((t=>t.layer===e.layer));return t&&t.supports.indexOf("update")>-1})))&&this._cancelWorkflow():"awaiting-feature-creation-info"!==t||this.canCreate||this._cancelWorkflow()}))])},a.destroy=function(){this._cancelWorkflow().then((()=>{var e;null!=(e=this.view)&&e.map&&this.view.map.remove(this._sketchGraphicsLayer),this.view=null}))},a.startCreateWorkflowAtFeatureTypeSelection=function(){var t=e._asyncToGenerator((function*(){if(!this.canCreate)return void V("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const e=this._createCreateWorkflow();yield e.start(),this._set("activeWorkflow",e)}));function r(){return t.apply(this,arguments)}return r}(),a.startCreateWorkflowAtFeatureCreation=function(){var t=e._asyncToGenerator((function*(e){if(!this.canCreate)return void V("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createCreateWorkflow("awaiting-feature-to-create");t.data.creationInfo=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),a.startBatchCreateWorkflow=function(){var t=e._asyncToGenerator((function*(e,t="awaiting-feature-creation-info"){if(!this.canCreate)throw new o("editing:unsupported-workflow","Batch create workflow is unsupported or disabled.");yield this._cancelWorkflow();const r=this._createBatchCreateWorkflow(e,t);yield r.start(),this._set("activeWorkflow",r)}));function r(e){return t.apply(this,arguments)}return r}(),a.startCreateWorkflowAtFeatureEdit=function(){var t=e._asyncToGenerator((function*(e){if(!this.canCreate)return void V("editing:unsupported-workflow","Create workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createCreateWorkflow("editing-new-feature");t.data.edits.feature=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),a.startUpdateWorkflowAtFeatureSelection=function(){var t=e._asyncToGenerator((function*(){if(!this.canUpdate)return void V("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const e=this._createUpdateWorkflow();yield e.start(),this._set("activeWorkflow",e)}));function r(){return t.apply(this,arguments)}return r}(),a.startUpdateWorkflowAtMultipleFeatureSelection=function(){var t=e._asyncToGenerator((function*(e){if(!this.canUpdate)return void V("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createUpdateWorkflow("awaiting-update-feature-candidate");t.data.candidates=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),a.startUpdateWorkflowAtFeatureEdit=function(){var t=e._asyncToGenerator((function*(e){if(!this.canUpdate)return void V("editing:unsupported-workflow","Update workflow is unsupported or disabled.");yield this._cancelWorkflow();const t=this._createUpdateWorkflow("editing-existing-feature");t.data.edits.feature=e,yield t.start(),this._set("activeWorkflow",t)}));function r(e){return t.apply(this,arguments)}return r}(),a.deleteFeatureFromWorkflow=function(){var t=e._asyncToGenerator((function*(){const{activeWorkflow:e}=this;e&&"update"===e.type?(yield this._delete(e.data.edits.feature),yield e.reset()):V("editing:unsupported-workflow","Deleting requires an active update workflow.")}));function r(){return t.apply(this,arguments)}return r}(),a.cancelWorkflow=function(){var t=e._asyncToGenerator((function*(e){return this._cancelWorkflow({warn:!0,...e})}));function r(e){return t.apply(this,arguments)}return r}(),a.refreshCreationTemplates=function(){const e=[];for(const{layer:t,supports:r}of this.editableItems)"templates"in t&&r.includes("create")&&e.push(t);this.featureTemplatesViewModel.layers=e},a._cancelWorkflow=function(){var t=e._asyncToGenerator((function*(e){const t=this.activeWorkflow;if(!t)return void(e&&e.warn&&V("editing:no-active-workflow","There is no active workflow to cancel."));if(!e||!1!==e.force)return this.emit("workflow-cancel"),this._set("activeWorkflow",null),void(yield t.cancel(e));yield t.cancel(e),this._set("activeWorkflow",null)}));function r(e){return t.apply(this,arguments)}return r}(),a._createBatchCreateWorkflow=function(e,t){return _.create(this,e,t,((e,t)=>this._applyEdits(e,t)))},a._createCreateWorkflow=function(e){return k.create(this,e,((e,t)=>this._applyEdits(e,t)))},a._createUpdateWorkflow=function(e){return v.create(this,e,((e,t)=>this._applyEdits(e,t)))},a._delete=function(){var t=e._asyncToGenerator((function*(e){const t=e.sourceLayer;"applyEdits"in t&&(yield this._applyEdits(t,{deleteFeatures:[e]}))}));function r(e){return t.apply(this,arguments)}return r}(),a._applyEdits=function(){var t=e._asyncToGenerator((function*(t,r){var o=this;yield this._queueOperation(e._asyncToGenerator((function*(){const e=yield o.view.whenLayerView(t),i=yield t.applyEdits(r);return yield s.whenFalseOnce(e,"updating"),i})))}));function r(e,r){return t.apply(this,arguments)}return r}(),a._queueOperation=function(e){this.activityQueue.push(e),this.notifyChange("syncing");const t=(e,t)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)};return e().then((({addFeatureResults:e,deleteFeatureResults:t,updateFeatureResults:r})=>{const o=e.find((e=>!!e.error))||r.find((e=>!!e.error))||t.find((e=>!!e.error));if(o)throw o.error})).catch((r=>{V("editing:operation-error","An error occurred.",{error:r});const o={error:r,retry:()=>(t(o,this.failures),this._queueOperation(e)),cancel:()=>{t(o,this.failures)}};this._set("failures",[...this.failures,o])})).then((()=>{t(e,this.activityQueue),this.notifyChange("syncing")}))},e._createClass(i,[{key:"allowedWorkflows",get:function(){return this._get("allowedWorkflows")},set:function(e){e&&0!==e.length||(e=[...T]),this._set("allowedWorkflows",e)}},{key:"canCreate",get:function(){return this.editableItems.some((e=>e.supports.includes("create")))}},{key:"canUpdate",get:function(){return this.editableItems.some((e=>e.supports.includes("update")))}},{key:"editableItems",get:function(){var e,t,o;const i=null==(e=this.view)?void 0:e.allLayerViews;if(!i)return new r;const a=new Set(null==(t=this.view)||null==(o=t.map)?void 0:o.editableLayers);return i.filter((e=>a.has(e.layer))).map((e=>{const{layer:t,suspended:r}=e,{data:o,operations:i}=t.capabilities,a=F(this.layerInfos,t),n="supportsAttachment"in o&&o.supportsAttachment&&(!a||!1!==a.allowAttachments);if(r)return{hasAttachments:n,layer:t,supports:[]};const s=[];return i.supportsAdd&&this.allowedWorkflows.includes("create")&&(!a||!1!==a.enabled&&!1!==a.addEnabled)&&s.push("create"),i.supportsUpdate&&this.allowedWorkflows.includes("update")&&(!a||!1!==a.enabled&&!1!==a.updateEnabled)&&s.push("update"),!1!==(a&&a.deleteEnabled)&&i.supportsDelete&&s.push("delete"),{hasAttachments:n,layer:t,supports:s}})).reverse()}},{key:"state",get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";const e=this.attachmentsViewModel.mode;if("add"===e)return"adding-attachment";if("edit"===e)return"editing-attachment";const{activeWorkflow:t}=this;return t?t.stepId:"ready"}},{key:"syncing",get:function(){return this.activityQueue.length>0}},{key:"view",set:function(e){this.sketchViewModel.view=e,this.spinnerViewModel.view=e,this._set("view",e)}}]),i}(a.HandleOwnerMixin(i.EventedAccessor));t.__decorate([p.property({readOnly:!0})],O.prototype,"activeWorkflow",void 0),t.__decorate([p.property({readOnly:!0})],O.prototype,"activityQueue",void 0),t.__decorate([p.property({value:[...T]})],O.prototype,"allowedWorkflows",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"canCreate",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"canUpdate",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"editableItems",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"failures",void 0),t.__decorate([p.property()],O.prototype,"attachmentsViewModel",void 0),t.__decorate([p.property()],O.prototype,"featureFormViewModel",void 0),t.__decorate([p.property()],O.prototype,"featureTemplatesViewModel",void 0),t.__decorate([p.property()],O.prototype,"layerInfos",void 0),t.__decorate([p.property()],O.prototype,"sketchViewModel",void 0),t.__decorate([l.aliasOf("sketchViewModel.snappingOptions")],O.prototype,"snappingOptions",void 0),t.__decorate([p.property()],O.prototype,"spinnerViewModel",void 0),t.__decorate([p.property()],O.prototype,"state",null),t.__decorate([p.property({readOnly:!0})],O.prototype,"syncing",null),t.__decorate([p.property()],O.prototype,"view",null),O=t.__decorate([f.subclass(b)],O);return O}));
