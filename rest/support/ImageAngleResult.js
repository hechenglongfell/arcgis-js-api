/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/SpatialReference"],(function(e,r,t,o,p,s,c,u,n){"use strict";let a=function(r){function t(e){var t;return(t=r.call(this,e)||this).north=null,t.up=null,t.spatialReference=null,t}return e._inheritsLoose(t,r),t}(o.JSONSupport);r.__decorate([p.property({type:Number,json:{write:!0}})],a.prototype,"north",void 0),r.__decorate([p.property({type:Number,json:{write:!0}})],a.prototype,"up",void 0),r.__decorate([p.property({type:n,json:{write:!0}})],a.prototype,"spatialReference",void 0),a=r.__decorate([u.subclass("esri.rest.support.ImageAngleResult")],a);return a}));
