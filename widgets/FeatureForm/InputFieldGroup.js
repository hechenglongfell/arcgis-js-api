/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/HandleOwner","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,t,i,r,o,s,n,l,p,u){"use strict";let a=function(t){function i(e){var i;return(i=t.call(this,e)||this)._expressionTrackingHandles=new Map,i.visibilityExpressionExecutor=null,i.feature=null,i.groupElement=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this.addHandles([s.watch((()=>[this.visible,this.inputFields]),(([e])=>{const{inputFields:t}=this,i=!!e&&void 0;for(const r of t)r.required=i}),{initial:!0,equals:(e,t)=>t[0]===e[0]&&t[1]===e[1]})])},r.destroy=function(){for(const e of this._expressionTrackingHandles.values())e.remove()},r._dirtyEvaluatedVisibilityExpression=function(){const{groupElement:e}=this;o.isSome(e)&&e.visibilityExpression&&this.notifyChange("evaluatedVisibilityExpression")},e._createClass(i,[{key:"visibilityExpression",get:function(){return o.unwrap(this.groupElement)?.visibilityExpression},set:function(e){o.applySome(this.groupElement,(t=>{t.visibilityExpression=e}))}},{key:"evaluatedVisibilityExpression",get:function(){const{visibilityExpressionExecutor:e}=this;return o.isSome(e)?!!e.lastEvaluatedValue:null}},{key:"description",get:function(){return o.unwrap(this.groupElement)?.description},set:function(e){o.applySome(this.groupElement,(t=>{t.description=e}))}},{key:"inputFields",get:function(){return this._get("inputFields")},set:function(e){this.handles.removeAll(),e&&this.handles.add(e.map((e=>s.watch((()=>e.visible),(()=>this._dirtyEvaluatedVisibilityExpression()))))),this._set("inputFields",e)}},{key:"label",get:function(){return o.unwrap(this.groupElement)?.label},set:function(e){o.applySome(this.groupElement,(t=>{t.label=e}))}},{key:"state",get:function(){return o.isSome(this.groupElement)&&this.groupElement.initialState||"expanded"},set:function(e){this._overrideIfSome("state",e)}},{key:"visible",get:function(){return!1!==this.evaluatedVisibilityExpression&&this.inputFields&&this.inputFields.some((e=>e.visible))}}]),i}(r.HandleOwnerMixin(i));t.__decorate([n.property()],a.prototype,"visibilityExpression",null),t.__decorate([n.property()],a.prototype,"visibilityExpressionExecutor",void 0),t.__decorate([n.property()],a.prototype,"evaluatedVisibilityExpression",null),t.__decorate([n.property()],a.prototype,"description",null),t.__decorate([n.property()],a.prototype,"feature",void 0),t.__decorate([n.property()],a.prototype,"groupElement",void 0),t.__decorate([n.property()],a.prototype,"initialFeature",void 0),t.__decorate([n.property()],a.prototype,"inputFields",null),t.__decorate([n.property()],a.prototype,"label",null),t.__decorate([n.property()],a.prototype,"state",null),t.__decorate([n.property()],a.prototype,"visible",null),a=t.__decorate([u.subclass("esri.widgets.FeatureForm.InputFieldGroup")],a);return a}));
