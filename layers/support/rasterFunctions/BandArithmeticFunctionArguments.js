/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","./bandIndexUtils","./BaseFunctionArguments"],(function(e,r,t,o,s,n,c,a,u){"use strict";var i;let p=i=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).method="custom",e}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new i({method:this.method,bandIndexes:this.bandIndexes,raster:t.clone(this.raster)})},o}(u);r.__decorate([o.property({json:{type:String,write:!0}})],p.prototype,"bandIndexes",void 0),r.__decorate([n.enumeration(a.bandIndexMethodMap)],p.prototype,"method",void 0),p=i=r.__decorate([c.subclass("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")],p);return p}));
