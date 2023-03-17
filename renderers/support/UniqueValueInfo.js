/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./commonProperties"],(function(e,r,o,t,s,l,n,i){"use strict";var p;let u=p=function(r){function o(e){var o;return(o=r.call(this,e)||this).description=null,o.label=null,o.symbol=null,o.value=null,o}e._inheritsLoose(o,r);var t=o.prototype;return t.clone=function(){return new p({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},t.getMeshHash=function(){const e=JSON.stringify(this.symbol&&this.symbol.toJSON());return`${this.value}.${e}`},o}(o.JSONSupport);r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"description",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"label",void 0),r.__decorate([t.property(i.rendererSymbolProperty)],u.prototype,"symbol",void 0),r.__decorate([t.property(i.uniqueValueProperty)],u.prototype,"value",void 0),u=p=r.__decorate([n.subclass("esri.renderers.support.UniqueValueInfo")],u);return u}));
