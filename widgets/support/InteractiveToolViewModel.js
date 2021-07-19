/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Error","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../views/interactive/interactiveToolUtils"],(function(e,t,o,r,i,s,l,n,c,a,u,p,d){"use strict";e.InteractiveToolViewModel=function(e){function o(t){var o;return(o=e.call(this,t)||this).tool=null,o._baseHandles=new s,o._loggedUnsupportedErrorOnce=!1,o._creationAbortController=null,t&&null!=t.visible&&(o.visible=t.visible),o}t._inheritsLoose(o,e);var r=o.prototype;return r.initialize=function(){this._baseHandles.add(l.init(this,["view.ready","isSupported"],(()=>{this.view&&this.view.ready&&!this.isSupported?this._loggedUnsupportedErrorOnce||(this.logUnsupportedError(),this._loggedUnsupportedErrorOnce=!0):this._loggedUnsupportedErrorOnce=!1})))},r.destroy=function(){this.removeTool(),this.view=null,this._baseHandles.destroy(),this._baseHandles=null},r.createTool=function(){var e=t._asyncToGenerator((function*(){if(this.removeTool(),!this.isSupported)return Promise.reject(new i("tool:create","The view does not support the tool"));const e=this.createToolParams(),t=()=>{const t=d.evaluateToolConstructorArguments(e.constructorArguments);return{visible:this.visible,...t}},o=new AbortController,r=o.signal;this._creationAbortController=o;const s=()=>{o===this._creationAbortController&&(this._creationAbortController=null)};try{const o=yield this.view.createTool(e.toolConstructor,t,{signal:r});this._set("tool",o),s()}catch(l){throw s(),l}}));function o(){return e.apply(this,arguments)}return o}(),r.removeTool=function(){this._creationAbortController&&this._creationAbortController.abort(),this._creationAbortController=null;const e=this.tool;e&&(this.view&&this.view.tools&&this.view.tools.remove(e),e.destroyed||e.destroy(),this._set("tool",null))},t._createClass(o,[{key:"isSupported",get:function(){return!this.view||this.view.type===this.supportedViewType}},{key:"view",get:function(){return this._get("view")},set:function(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this._baseHandles.remove(t),e&&this._baseHandles.add(e.tools.on("change",(e=>{if(this.tool)for(const t of e.removed)if(this.tool===t){t.destroyed||t.destroy(),this._set("tool",null);break}})),t)}},{key:"visible",set:function(e){this._set("visible",e),this.tool&&(this.tool.visible=e),!e&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)}},{key:"active",get:function(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active}},{key:"isDisabled",get:function(){return!this.view||!this.view.ready||!this.isSupported}},{key:"creatingTool",get:function(){return!!this._creationAbortController}}]),o}(r),o.__decorate([n.property({constructOnly:!0})],e.InteractiveToolViewModel.prototype,"tool",void 0),o.__decorate([n.property()],e.InteractiveToolViewModel.prototype,"isSupported",null),o.__decorate([n.property({value:null})],e.InteractiveToolViewModel.prototype,"view",null),o.__decorate([n.property({type:Boolean,value:!0})],e.InteractiveToolViewModel.prototype,"visible",null),o.__decorate([n.property()],e.InteractiveToolViewModel.prototype,"active",null),o.__decorate([n.property()],e.InteractiveToolViewModel.prototype,"isDisabled",null),o.__decorate([n.property()],e.InteractiveToolViewModel.prototype,"_creationAbortController",void 0),o.__decorate([n.property({readOnly:!0})],e.InteractiveToolViewModel.prototype,"creatingTool",null),e.InteractiveToolViewModel=o.__decorate([p.subclass("esri.widgets.support.InteractiveToolViewModel")],e.InteractiveToolViewModel),Object.defineProperty(e,"__esModule",{value:!0})}));
