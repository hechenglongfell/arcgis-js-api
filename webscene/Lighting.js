/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer"],(function(e,t,r,o,a,s,d,i,n,c){"use strict";var l;let p=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).date=null,r.directShadowsEnabled=!1,r.displayUTCOffset=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.readDate=function(e,t){return null!=t.datetime&&new Date(t.datetime)||null},o.writeDate=function(e,t,r){t[r]=e.getTime()},o.readDirectShadowsEnabled=function(e,t){return!!t.directShadows},o.writedirectShadowsEnabled=function(e,t,r){e&&(t[r]=e)},o.writeDisplayUTCOffset=function(e,t){null!=e&&(t.displayUTCOffset=e)},o.clone=function(){return new l(this.cloneConstructProperties())},o.cloneConstructProperties=function(){const e={directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null};return null!=this.date&&(e.date=new Date(this.date.getTime())),e},r}(r.JSONSupport);t.__decorate([o.property({type:Date,json:{type:Number,write:{target:"datetime"}}})],p.prototype,"date",void 0),t.__decorate([i.reader("date",["datetime"])],p.prototype,"readDate",null),t.__decorate([c.writer("date")],p.prototype,"writeDate",null),t.__decorate([o.property({type:Boolean,json:{default:!1,write:{target:"directShadows"}}})],p.prototype,"directShadowsEnabled",void 0),t.__decorate([i.reader("directShadowsEnabled",["directShadows"])],p.prototype,"readDirectShadowsEnabled",null),t.__decorate([c.writer("directShadowsEnabled")],p.prototype,"writedirectShadowsEnabled",null),t.__decorate([o.property({type:Number,json:{write:!0}})],p.prototype,"displayUTCOffset",void 0),t.__decorate([c.writer("displayUTCOffset")],p.prototype,"writeDisplayUTCOffset",null),p=l=t.__decorate([n.subclass("esri.webscene.Lighting")],p);return p}));
