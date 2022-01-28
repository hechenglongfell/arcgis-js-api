/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./commonProperties"],(function(e,r,t,o,s,l,a,i,n){"use strict";var p;let u=p=function(r){function t(e){var t;return(t=r.call(this,e)||this).description=null,t.label=null,t.minValue=null,t.maxValue=0,t.symbol=null,t}e._inheritsLoose(t,r);var o=t.prototype;return o.clone=function(){return new p({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},o.getMeshHash=function(){const e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`},t}(t.JSONSupport);r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"label",void 0),r.__decorate([o.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),r.__decorate([o.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),r.__decorate([o.property(n.rendererSymbolProperty)],u.prototype,"symbol",void 0),u=p=r.__decorate([i.subclass("esri.renderers.support.ClassBreakInfo")],u);return u}));
