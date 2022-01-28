/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./Column"],(function(t,e,n,o,r,i,a,u){"use strict";const l={input:"esri-editor-column__cell-input",inputContainer:"esri-editor-column__cell-input--container"},c={showInput:"Enter",hideInput:"Escape"};let p=function(e){function n(n){var o;return(o=e.call(this,n)||this).activeEditInfo=null,o.cellValueValidatorFunction=({oldValue:t,value:e})=>t!==e,o.editable=!1,o.inputRenderFunction=({root:t,column:e,rowData:n})=>{var r,i;if(null!=(r=o.activeEditInfo)&&r.updating)return;if(!o.editable)return;const a=o.getCellValue(e,n),u=o.createInputElement({root:t,column:e,rowData:n,value:a});o._set("activeEditInfo",{column:e,input:u,root:t,rowData:n,updating:!0,oldValue:a});const l=o.createInputContainer();l.appendChild(u),o.removeCellContent(t),t.appendChild(l),u.focus(),u instanceof HTMLInputElement&&u.select(),null==(i=o.grid)||i.notifyResize()},o.loadingMessage="",o.inputType="text",o.maxLength=null,o.parseInputValueFunction=({input:t})=>t.value,o.renderFunction=e=>{var n;const{root:r,column:i,rowData:a}=e,{activeEditInfo:u}=t._assertThisInitialized(o);if(u&&u.updating)return;const l=o.getCellValue(i,a),p=o.cellValueFormatFunction({column:i,rowData:a,value:l});r.onclick=()=>r.focus(),r.ondblclick=()=>o.inputRenderFunction(e),r.ontouchend=()=>o.inputRenderFunction(e);const d=null==(n=o.grid)?void 0:n.getSlotElementByName(r.slot),s=null==d?void 0:d.parentElement;s&&!s.onkeydown&&(s.onkeydown=t=>{t.key!==c.showInput||o.activeEditInfo||o.inputRenderFunction(e),t.key===c.hideInput&&o.activeEditInfo&&o.cancel()}),(null==p?void 0:p.toString())!==r.innerHTML&&(r.innerHTML=p)},o.required=!1,o.store=null,o.updateRowItemFunction=({rowData:t,column:e,value:n})=>{t.item[e.path]=n},o.updateStoreItemFunction=({rowData:t,column:e,value:n})=>{var r;return null==(r=o.store)?void 0:r.updateItem({index:t.index,name:e.path,value:n})},o}t._inheritsLoose(n,e);var o=n.prototype;return o.cancel=function(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:n,root:o,rowData:r,oldValue:i}=e;this._set("activeEditInfo",null);const a=this.cellValueFormatFunction({column:n,rowData:r,value:i});o.innerHTML=a,null==(t=this.grid)||t.notifyResize()},o.createInputContainer=function(){const t=document.createElement("div");return t.classList.add(l.inputContainer),t},o.createInputElement=function({value:t}){const e=document.createElement("input");return e.classList.add(l.input),e.maxLength=this.maxLength,e.type=this.inputType,e.value=t,e.onblur=()=>{e.onblur=null,this.submit()},e},o.submit=function(){var e=t._asyncToGenerator((function*(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:n,input:o,root:r,rowData:i,oldValue:a}=e,u=this.parseInputValueFunction({input:o,column:n,rowData:i});if(!this.cellValueValidatorFunction({value:u,oldValue:a,column:n,rowData:i}))this.cancel();else{r.innerHTML=this.loadingMessage,null==(t=this.grid)||t.notifyResize();try{var l;yield this.updateStoreItemFunction({rowData:i,column:n,value:u}),this.updateRowItemFunction({rowData:i,column:n,value:u});const t=this.getCellValue(n,i),e=this.cellValueFormatFunction({column:n,rowData:i,value:t});r.innerHTML=e,this.emit("value-change",{column:n,rowData:i,value:t}),this._set("activeEditInfo",null),null==(l=this.grid)||l.notifyResize()}catch(c){this.cancel()}}}));function n(){return e.apply(this,arguments)}return n}(),n}(u);e.__decorate([n.property({readOnly:!0})],p.prototype,"activeEditInfo",void 0),e.__decorate([n.property()],p.prototype,"cellValueValidatorFunction",void 0),e.__decorate([n.property()],p.prototype,"editable",void 0),e.__decorate([n.property()],p.prototype,"inputRenderFunction",void 0),e.__decorate([n.property({constructOnly:!0})],p.prototype,"loadingMessage",void 0),e.__decorate([n.property()],p.prototype,"inputType",void 0),e.__decorate([n.property()],p.prototype,"maxLength",void 0),e.__decorate([n.property()],p.prototype,"parseInputValueFunction",void 0),e.__decorate([n.property()],p.prototype,"renderFunction",void 0),e.__decorate([n.property()],p.prototype,"required",void 0),e.__decorate([n.property()],p.prototype,"store",void 0),e.__decorate([n.property()],p.prototype,"updateRowItemFunction",void 0),e.__decorate([n.property()],p.prototype,"updateStoreItemFunction",void 0),p=e.__decorate([a.subclass("esri.widgets.FeatureTable.EditorColumn")],p);return p}));
