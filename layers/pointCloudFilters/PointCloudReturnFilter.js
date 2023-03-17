/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./PointCloudFilter"],(function(e,r,t,o,n,s,u,i){"use strict";var c;let l=c=function(r){function o(e){var t;return(t=r.call(this,e)||this).includedReturns=[],t.type="return",t}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new c({field:this.field,includedReturns:t.clone(this.includedReturns)})},o}(i);r.__decorate([o.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"includedReturns",void 0),r.__decorate([s.enumeration({pointCloudReturnFilter:"return"})],l.prototype,"type",void 0),l=c=r.__decorate([u.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],l);return l}));
