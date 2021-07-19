/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./Column"],(function(t,e,o,n,r,i,a,u){"use strict";const l={input:"esri-editor-column__cell-input",inputContainer:"esri-editor-column__cell-input--container"},c={showInput:"Enter",hideInput:"Escape"};let p=function(e){function o(o){var n;return(n=e.call(this,o)||this).activeEditInfo=null,n.cellValueValidatorFunction=({oldValue:t,value:e})=>t!==e,n.editable=!1,n.inputRenderFunction=({root:t,column:e,rowData:o})=>{var r,i;if(null!=(r=n.activeEditInfo)&&r.updating)return;if(!n.editable)return;const a=n.getCellValue(e,o),u=n.createInputElement({root:t,column:e,rowData:o,value:a});n._set("activeEditInfo",{column:e,input:u,root:t,rowData:o,updating:!0,oldValue:a});const l=n.createInputContainer();l.appendChild(u),n.removeCellContent(t),t.appendChild(l),u.focus(),u instanceof HTMLInputElement&&u.select(),null==(i=n.grid)||i.notifyResize()},n.loadingMessage="",n.inputType="text",n.maxLength=null,n.parseInputValueFunction=({input:t})=>t.value,n.renderFunction=e=>{var o;const{root:r,column:i,rowData:a}=e,{activeEditInfo:u}=t._assertThisInitialized(n);if(u&&u.updating)return;const l=n.getCellValue(i,a),p=n.cellValueFormatFunction({column:i,rowData:a,value:l});r.onclick=()=>r.focus(),r.ondblclick=()=>n.inputRenderFunction(e),r.ontouchend=()=>n.inputRenderFunction(e);const d=null==(o=n.grid)?void 0:o.getSlotElementByName(r.slot),s=null==d?void 0:d.parentElement;s&&!s.onkeydown&&(s.onkeydown=t=>{t.key!==c.showInput||n.activeEditInfo||n.inputRenderFunction(e),t.key===c.hideInput&&n.activeEditInfo&&n.cancel()}),(null==p?void 0:p.toString())!==r.innerHTML&&(r.innerHTML=p)},n.required=!1,n.store=null,n.updateRowItemFunction=({rowData:t,column:e,value:o})=>{t.item[e.path]=o},n.updateStoreItemFunction=({rowData:t,column:e,value:o})=>{var r;return null==(r=n.store)?void 0:r.updateItem({index:t.index,name:e.path,value:o})},n}t._inheritsLoose(o,e);var n=o.prototype;return n.cancel=function(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:o,root:n,rowData:r,oldValue:i}=e;this._set("activeEditInfo",null);const a=this.cellValueFormatFunction({column:o,rowData:r,value:i});n.innerHTML=a,null==(t=this.grid)||t.notifyResize()},n.createInputContainer=function(){const t=document.createElement("div");return t.classList.add(l.inputContainer),t},n.createInputElement=function({value:t}){const e=document.createElement("input");return e.classList.add(l.input),e.maxLength=this.maxLength,e.type=this.inputType,e.value=t,e.onblur=()=>{e.onblur=null,this.submit()},e},n.submit=function(){var e=t._asyncToGenerator((function*(){var t;const{activeEditInfo:e}=this;if(!e)return;const{column:o,input:n,root:r,rowData:i,oldValue:a}=e,u=this.parseInputValueFunction({input:n,column:o,rowData:i});if(!this.cellValueValidatorFunction({value:u,oldValue:a,column:o,rowData:i}))this.cancel();else{r.innerHTML=this.loadingMessage,null==(t=this.grid)||t.notifyResize();try{var l;yield this.updateStoreItemFunction({rowData:i,column:o,value:u}),this.updateRowItemFunction({rowData:i,column:o,value:u});const t=this.getCellValue(o,i),e=this.cellValueFormatFunction({column:o,rowData:i,value:t});r.innerHTML=e,this.emit("value-change",{column:o,rowData:i,value:t}),this._set("activeEditInfo",null),null==(l=this.grid)||l.notifyResize()}catch(c){this.cancel()}}}));function o(){return e.apply(this,arguments)}return o}(),o}(u);return e.__decorate([o.property({readOnly:!0})],p.prototype,"activeEditInfo",void 0),e.__decorate([o.property()],p.prototype,"cellValueValidatorFunction",void 0),e.__decorate([o.property()],p.prototype,"editable",void 0),e.__decorate([o.property()],p.prototype,"inputRenderFunction",void 0),e.__decorate([o.property({constructOnly:!0})],p.prototype,"loadingMessage",void 0),e.__decorate([o.property()],p.prototype,"inputType",void 0),e.__decorate([o.property()],p.prototype,"maxLength",void 0),e.__decorate([o.property()],p.prototype,"parseInputValueFunction",void 0),e.__decorate([o.property()],p.prototype,"renderFunction",void 0),e.__decorate([o.property()],p.prototype,"required",void 0),e.__decorate([o.property()],p.prototype,"store",void 0),e.__decorate([o.property()],p.prototype,"updateRowItemFunction",void 0),e.__decorate([o.property()],p.prototype,"updateStoreItemFunction",void 0),p=e.__decorate([a.subclass("esri.widgets.FeatureTable.EditorColumn")],p),p}));
