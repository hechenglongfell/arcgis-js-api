/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./materialUtils"],(function(r,o,e,t,l,s,c,a,p,i,n){"use strict";var u;r.Symbol3DMaterial=u=function(r){function e(){var o;return(o=r.apply(this,arguments)||this).color=null,o}return o._inheritsLoose(e,r),e.prototype.clone=function(){return new u({color:l.isSome(this.color)?this.color.clone():null})},e}(t.JSONSupport),e.__decorate([s.property(n.colorAndTransparencyProperty)],r.Symbol3DMaterial.prototype,"color",void 0),r.Symbol3DMaterial=u=e.__decorate([i.subclass("esri.symbols.support.Symbol3DMaterial")],r.Symbol3DMaterial);var y=r.Symbol3DMaterial;r.default=y,Object.defineProperty(r,"__esModule",{value:!0})}));
