/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,c,s,n,a,u){"use strict";var i;let p=i=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="rainy",o.cloudCover=.5,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new i({cloudCover:this.cloudCover})},o}(o);r.__decorate([a.enumeration({rainy:"rainy"})],p.prototype,"type",void 0),r.__decorate([t.property({type:Number,nonNullable:!0,range:{min:0,max:1}})],p.prototype,"cloudCover",void 0),p=i=r.__decorate([u.subclass("esri.views.3d.environment.RainyWeather")],p);return p}));
