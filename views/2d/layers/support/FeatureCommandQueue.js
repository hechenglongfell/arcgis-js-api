/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../support/QueueProcessor"],(function(e,r,t,s,o,n,u,a,i){"use strict";function c(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>{var r;return null!=(r=e.objectId)?r:e.globalId}))}function l(e,r){const t=new Set(e);for(const s of r.values())t.add(s);return t}function p(e,r){const t=new Set(e);for(const s of r.values())t.delete(s);return t}let f=function(r){function t(e){var t;return(t=r.call(this,e)||this)._hasGlobalIds=!1,t}e._inheritsLoose(t,r);var s=t.prototype;return s.normalizeCtorArgs=function(e){return this._queueProcessor=new i.QueueProcessor({concurrency:1,process:e.process}),{}},s.destroy=function(){this._queueProcessor.clear()},s.push=function(e){const r=this._queueProcessor,t=r.last();switch(e.type){case"update":case"refresh":if((null==t?void 0:t.type)===e.type)return;r.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const s="processed-edit"===(null==t?void 0:t.type)?t:null;s&&r.popLast();const o=this._mergeEdits(s,e);for(const e of o)r.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")},s._mergeEdits=function(e,r){var t,s;const{addedFeatures:o,deletedFeatures:n,updatedFeatures:u}=r.edits;if(this._hasGlobalIds=this._hasGlobalIds||c(o)||c(u)||c(n),this._hasGlobalIds){return[e,{type:"processed-edit",edits:{addOrModified:[...o,...u],removed:n}}]}const a=new Set(d(null!=(t=null==e?void 0:e.edits.addOrModified)?t:[])),i=new Set(d(null!=(s=null==e?void 0:e.edits.removed)?s:[])),f=new Set([...d(o),...d(u)]),h=new Set(d(n));return[{type:"processed-edit",edits:{addOrModified:Array.from(l(p(a,h),f)).map((e=>({objectId:e}))),removed:Array.from(l(p(i,f),h)).map((e=>({objectId:e})))}}]},e._createClass(t,[{key:"updating",get:function(){return this._queueProcessor.length>0}}]),t}(t);r.__decorate([s.property({readOnly:!0})],f.prototype,"updating",null),f=r.__decorate([a.subclass("esri.views.2d.layers.support.FeatureCommandQueue")],f);return f}));
