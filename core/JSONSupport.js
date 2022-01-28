/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./accessorSupport/read","./accessorSupport/write","./accessorSupport/decorators/subclass"],(function(r,t,e,o,n,s,i){"use strict";const u=r=>{let o=function(r){function e(...t){return r.call(this,...t)||this}t._inheritsLoose(e,r);var o=e.prototype;return o.read=function(r,t){n.read(this,r,t)},o.write=function(r={},t){return s.write(this,r,t)},o.toJSON=function(r){return this.write({},r)},e.fromJSON=function(r,t){return c.call(this,r,t)},e}(r);return o=e.__decorate([i.subclass("esri.core.JSONSupport")],o),o.prototype.toJSON.isDefaultToJSON=!0,o};function c(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");const e=new this;return e.read(r,t),e}function p(r){return r&&"read"in r&&"write"in r&&"toJSON"in r}r.JSONSupport=function(r){function e(){return r.apply(this,arguments)||this}return t._inheritsLoose(e,r),e}(u(o)),r.JSONSupport=e.__decorate([i.subclass("esri.core.JSONSupport")],r.JSONSupport),r.JSONSupportMixin=u,r.isJSONSupport=p,Object.defineProperty(r,"__esModule",{value:!0})}));
