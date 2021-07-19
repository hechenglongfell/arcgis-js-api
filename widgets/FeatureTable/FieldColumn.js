/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../intl/date","../../intl/number","../../layers/support/CodedValueDomain","../../layers/support/fieldUtils","../FeatureForm/InputField","./Grid/EditorColumn","../support/DatePicker","../support/TimePicker","../support/widgetUtils"],(function(e,t,n,o,i,r,l,a,u,d,c,s,p,m,f,h){"use strict";const _={cancelEdit:"Escape"},y={headerContent:"esri-field-column__header-content",input:"esri-field-column__cell-input",inputContainer:"esri-field-column__cell__input-container",dateInputContainer:"esri-field-column__cell__date-input-container",dateInputWrapper:"esri-field-column__cell__date-input-wrapper",button:"esri-field-column__button",saveIcon:"esri-icon-save",trashIcon:"esri-icon-trash",locked:"esri-icon-locked"},v=a.convertDateFormatToIntlOptions("short-date-short-time"),g=a.convertDateFormatToIntlOptions("short-date"),b=u.convertNumberFormatToIntlOptions({digitSeparator:!0,places:null});let F=function(t){function n(n){var o;return(o=t.call(this,n)||this)._inputField=null,o.alias=null,o.cellValueFormatFunction=({rowData:t,value:n})=>{if(o.formatFunction){const{config:t,field:i}=e._assertThisInitialized(o);return o.formatFunction({config:t,field:i,value:h.renderingSanitizer.sanitize(n)})}if(null===n)return"&nbsp;";const{config:i,field:r,type:l}=e._assertThisInitialized(o),{item:{feature:d}}=t,s=o._getDomainForFeature(d);if(s)return o._getComputedDomain(n,s);if("date"===l){var p;const e=null!=i&&null!=(p=i.format)&&p.dateFormat?a.convertDateFormatToIntlOptions(i.format.dateFormat):!1===(null==i?void 0:i.includeTime)?g:v;return n?a.formatDate(n,e):null}if(c.isNumericField(r)){const e=null!=i&&i.format?u.convertNumberFormatToIntlOptions(i.format):b;return u.formatNumber(parseFloat(n),e)}return h.renderingSanitizer.sanitize(n)},o.cellValueValidatorFunction=({oldValue:e,value:t})=>e!==t,o.config=null,o.defaultValue=null,o.description=null,o.editingEnabled=!1,o.field=null,o.formatFunction=null,o.headerRenderFunction=t=>{const{root:n}=t,{editable:i,editingEnabled:r,headerMenuEnabled:l,sortable:a}=e._assertThisInitialized(o);if(o.removeCellContent(n),n.classList.add(y.headerContent),r&&!i&&n.appendChild(o.createLockedElement()),a)o.headerSorterRenderFunction(t);else{const{header:t,path:i}=e._assertThisInitialized(o),r=document.createElement("div");r.innerHTML=t||i,n.appendChild(r)}l&&o.headerMenuRenderFunction(t)},o.inputRenderFunction=({root:e,column:t,rowData:n})=>{var i,r;if(null!=(i=o.activeEditInfo)&&i.updating)return;if(!o.editable)return;const l=o.getCellValue(t,n),a=o.createInputElement({root:e,column:t,rowData:n,value:l});if(o._set("activeEditInfo",{column:t,input:a,root:e,rowData:n,updating:!0,oldValue:l}),"date"===o.type)return void o._renderDateEditors(l,e,a);const u=o.createInputContainer();u.appendChild(a),o.removeCellContent(e),e.appendChild(u),a.focus(),a instanceof HTMLInputElement&&a.select(),null==(r=o.grid)||r.notifyResize()},o.layer=null,o.menuConfig=null,o.name=null,o.nullable=!0,o.parseInputValueFunction=({input:e})=>{const t=o._inputField,n=e.value,{required:i,type:r}=t;return i||""!==n?"number"===r||"date"===r?parseFloat(n):n:null},o.path=null,o.type=null,o.updateRowItemFunction=({rowData:e,column:t,value:n})=>{e.item.feature.attributes[t.path]=n},o}e._inheritsLoose(n,t);var o=n.prototype;return o.createInputElement=function({rowData:e,value:t}){const{item:n}=e;if(!n||!n.feature)return null;this._inputField=this._setUpInputField(n.feature,t);const{field:o,maxLength:i,required:r}=this,{domain:l}=this._inputField;let a=null;"coded-value"===(null==l?void 0:l.type)?(a=this._createSelectElement(t,l.codedValues.map((({code:e,name:t})=>({value:e,name:t}))),this._inputField),a.onchange=()=>{a.onblur=null,d()}):(a=document.createElement("input"),a.type=c.isNumericField(o)?"number":"text",i>-1&&(a.maxLength=i)),a.classList.add(y.input),a.value=t,a.required=r;let u=!1;a.onkeydown=e=>{u=e.key===_.cancelEdit},a.onblur=()=>{a.onblur=null,d()};const d=()=>{u?this.cancel():this.submit(),this._inputField=null};return a},o.createInputContainer=function(){const e=document.createElement("div");return e.classList.add(y.inputContainer),e},o.createLockedElement=function(){const e=document.createElement("div");return e.classList.add(y.locked),e},o.getCellValue=function({path:e},{item:t}){var n,o,i;return null!=(n=null==t||null==(o=t.feature)||null==(i=o.attributes)?void 0:i[e])?n:null},o._renderDateEditors=function(e,t,n){var o;const{config:i,messagesCommon:r}=this,l=e?new Date(e):new Date(Date.now()),a=new m({dateInputEnabled:!0,value:l}),u=new f({value:l});n.value=l.getTime().toString();let d=!e;const c=()=>{d=!0;const e=this._getCombinedDateTime(a.value,u.value);n.value=e.getTime().toString()},s=()=>{d?this.submit():this.cancel()},p=()=>{n.value=null,this.submit()};a.watch("value",(()=>c())),u.watch("value",(()=>c()));const h=document.createElement("div"),_=document.createElement("div");a.container=h,u.container=_;const v=document.createElement("button");v.classList.add(y.button,y.saveIcon),v.onclick=()=>s(),v.title=null==r?void 0:r.save;const g=document.createElement("button");g.classList.add(y.button,y.trashIcon),g.onclick=()=>p(),g.title=null==r?void 0:r.clear;const b=document.createElement("div");b.classList.add(y.dateInputWrapper),b.appendChild(h),!1!==i.includeTime&&b.appendChild(_);const F=document.createElement("div");F.classList.add(y.dateInputContainer),F.appendChild(b),F.appendChild(v),F.appendChild(g),a.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),u.when((()=>{var e;return null==(e=this.grid)?void 0:e.notifyResize()})),this.removeCellContent(t),t.appendChild(F),null==(o=this.grid)||o.notifyResize()},o._createSelectElement=function(e,t,n){let o=!1;const i=t.map((t=>{t.value===e&&(o=!0);const n=document.createElement("option");return n.text=t.name,n.value=t.value,n}));if(null!=e&&""!==e&&!o){const t=document.createElement("option");t.text=e,t.value=e,i.unshift(t)}if(!n.required&&null==n.value){const e=document.createElement("option");e.value="",i.unshift(e)}const r=document.createElement("select");return i.forEach((e=>r.add(e))),r.value=e,r},o._setUpInputField=function(e,t){const{config:n,field:o,layer:i}=this,r=new s({config:n,feature:e,field:o,layer:i,group:null,messages:null});return r.set("value",t),r},o._isDomainCompatible=function(e){const{field:t}=this;if(e&&"coded-value"===e.type){const n=typeof e.codedValues[0].code;if("string"===n&&c.isStringField(t)||"number"===n&&c.isNumericField(t))return!0}return!(!e||"range"!==e.type||!c.isNumericField(t))},o._getDomainForFeature=function(e){const{layer:t,name:n}=this,{typeIdField:o}=t,i=o===n,r=this.get("field.domain");if(i&&!r)return new d({name:"__internal-type-based-coded-value-domain__",codedValues:t.types.map((({id:e,name:t})=>({code:e,name:t})))});const l=o&&t.getFieldDomain(n,{feature:e})||r,a=this.get("config.domain");return this._isDomainCompatible(a)?a:l},o._getComputedDomain=function(e,t){if(!t)return null;if("range"===t.type)return e;if("coded-value"===t.type){const n=t.codedValues.filter((t=>t.hasOwnProperty("code")&&t.code===e));return n&&n.length?n[0].name:e}return null},o._getCombinedDateTime=function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())},e._createClass(n,[{key:"editable",get:function(){var e,t,n;return this.editingEnabled?this.config?!1!==this.config.editable&&(null==(t=this.field)?void 0:t.editable):null==(n=this.field)?void 0:n.editable:!!this.config&&(!0===this.config.editable&&(null==(e=this.field)?void 0:e.editable))}},{key:"header",get:function(){var e;return(null==(e=this.config)?void 0:e.label)||this.alias||this.path||null}},{key:"hidden",get:function(){const{config:e}=this;return!1===(null==e?void 0:e.visible)||this._get("hidden")||!1},set:function(e){this._set("hidden",e)}},{key:"loadingMessage",get:function(){var e;return(null==(e=this.messages)?void 0:e.loading)||"..."}},{key:"maxLength",get:function(){var e,t;const n=null==(e=this.field)?void 0:e.length,o=null==(t=this.config)?void 0:t.maxLength;return!isNaN(o)&&o>=-1&&(-1===n||o<=n)?o:n}},{key:"required",get:function(){const e=this.get("field.nullable"),t=this.get("config.required");return this.editable&&(!e||!0===t)}},{key:"sortable",get:function(){var e;return!1!==(null==(e=this.config)?void 0:e.sortable)}}]),n}(p);return t.__decorate([n.property({readOnly:!0,aliasOf:"field.alias"})],F.prototype,"alias",void 0),t.__decorate([n.property()],F.prototype,"cellValueFormatFunction",void 0),t.__decorate([n.property()],F.prototype,"cellValueValidatorFunction",void 0),t.__decorate([n.property()],F.prototype,"config",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"field.defaultValue"})],F.prototype,"defaultValue",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"field.description"})],F.prototype,"description",void 0),t.__decorate([n.property({readOnly:!0})],F.prototype,"editable",null),t.__decorate([n.property()],F.prototype,"editingEnabled",void 0),t.__decorate([n.property()],F.prototype,"field",void 0),t.__decorate([n.property()],F.prototype,"formatFunction",void 0),t.__decorate([n.property({readOnly:!0})],F.prototype,"header",null),t.__decorate([n.property()],F.prototype,"hidden",null),t.__decorate([n.property()],F.prototype,"headerRenderFunction",void 0),t.__decorate([n.property()],F.prototype,"inputRenderFunction",void 0),t.__decorate([n.property()],F.prototype,"layer",void 0),t.__decorate([n.property({readOnly:!0})],F.prototype,"loadingMessage",null),t.__decorate([n.property()],F.prototype,"maxLength",null),t.__decorate([n.property({readOnly:!0,aliasOf:"config.menuConfig"})],F.prototype,"menuConfig",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"field.name"})],F.prototype,"name",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"field.nullable"})],F.prototype,"nullable",void 0),t.__decorate([n.property()],F.prototype,"parseInputValueFunction",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"field.name"})],F.prototype,"path",void 0),t.__decorate([n.property({readOnly:!0})],F.prototype,"required",null),t.__decorate([n.property()],F.prototype,"sortable",null),t.__decorate([n.property({readOnly:!0,aliasOf:"field.type"})],F.prototype,"type",void 0),t.__decorate([n.property()],F.prototype,"updateRowItemFunction",void 0),F=t.__decorate([l.subclass("esri.widgets.FeatureTable.FieldColumn")],F),F}));
