/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/reader","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer","./Input"],(function(e,r,t,o,n,i,p,c,a,u){"use strict";var s;function l(e){return null!=e?new Date(e):null}function d(e){return e?e.getTime():null}let m=s=function(r){function t(e){var t;return(t=r.call(this,e)||this).includeTime=!1,t.max=null,t.min=null,t.type="datetime-picker",t}e._inheritsLoose(t,r);var o=t.prototype;return o.readMax=function(e,r){return l(r.max)},o.writeMax=function(e,r){r.max=d(e)},o.readMin=function(e,r){return l(r.min)},o.writeMin=function(e,r){r.min=d(e)},o.clone=function(){return new s({includeTime:this.includeTime,max:this.max,min:this.min,type:this.type})},t}(u);return r.__decorate([t.property({type:Boolean,json:{write:!0}})],m.prototype,"includeTime",void 0),r.__decorate([t.property({type:Date,json:{type:Number,write:!0}})],m.prototype,"max",void 0),r.__decorate([p.reader("max")],m.prototype,"readMax",null),r.__decorate([a.writer("max")],m.prototype,"writeMax",null),r.__decorate([t.property({type:Date,json:{type:Number,write:!0}})],m.prototype,"min",void 0),r.__decorate([p.reader("min")],m.prototype,"readMin",null),r.__decorate([a.writer("min")],m.prototype,"writeMin",null),r.__decorate([t.property({type:["datetime-picker"],json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=s=r.__decorate([c.subclass("esri.form.elements.inputs.DateTimePickerInput")],m),m}));
