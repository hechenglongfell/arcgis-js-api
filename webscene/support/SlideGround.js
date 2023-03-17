/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Ground","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../webdoc/support/opacityUtils"],(function(r,e,t,o,n,c,p,s,a){"use strict";var i;let u=i=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).opacity=null,r}r._inheritsLoose(o,e);var n=o.prototype;return n.clone=function(){return new i({opacity:this.opacity})},n.cloneAndApplyTo=function(r){return null==this.opacity||((r=null!=r?r.clone():new t).opacity=this.opacity),r},o.fromGround=function(r){return new i({opacity:r.opacity})},o}(o.JSONSupport);e.__decorate([n.property({type:Number,json:{type:c.Integer,read:{reader:a.transparencyToOpacity,source:"transparency"},write:{writer:(r,e)=>{e.transparency=a.opacityToTransparency(r)},target:"transparency"}}})],u.prototype,"opacity",void 0),u=i=e.__decorate([s.subclass("esri.webscene.support.SlideGround")],u);return u}));
