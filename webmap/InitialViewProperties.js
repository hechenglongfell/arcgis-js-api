/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Viewpoint","../core/Accessor","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/SpatialReference","../webdoc/RangeInfo","./background/ColorBackground"],(function(e,r,o,t,n,p,c,a,i,s,l){"use strict";var u;let d=u=function(r){function o(e){var o;return(o=r.call(this,e)||this).background=null,o.rangeInfo=null,o.spatialReference=null,o.viewpoint=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new u(n.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))},o}(t);r.__decorate([p.property({type:l})],d.prototype,"background",void 0),r.__decorate([p.property({type:s})],d.prototype,"rangeInfo",void 0),r.__decorate([p.property({type:i})],d.prototype,"spatialReference",void 0),r.__decorate([p.property({type:o})],d.prototype,"viewpoint",void 0),d=u=r.__decorate([a.subclass("esri.webmap.InitialViewProperties")],d);return d}));
