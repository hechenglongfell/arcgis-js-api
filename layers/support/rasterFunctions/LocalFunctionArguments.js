/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/lang","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../core/accessorSupport/decorators/writer","./BaseFunctionArguments"],(function(r,e,t,o,s,n,p,c){"use strict";var a;let i=a=function(e){function o(){var r;return(r=e.apply(this,arguments)||this).rasters=[],r.processAsMultiband=!0,r}r._inheritsLoose(o,e);var s=o.prototype;return s.writeRasters=function(r,e){e.rasters=r.map((r=>"number"==typeof r||"string"==typeof r?r:r.toJSON()))},s.clone=function(){return new a({operation:this.operation,processAsMultiband:this.processAsMultiband,rasters:t.clone(this.rasters)})},o}(c);e.__decorate([o.property({json:{write:!0}})],i.prototype,"operation",void 0),e.__decorate([o.property({json:{write:!0}})],i.prototype,"rasters",void 0),e.__decorate([p.writer("rasters")],i.prototype,"writeRasters",null),e.__decorate([o.property({json:{write:!0}})],i.prototype,"processAsMultiband",void 0),i=a=e.__decorate([n.subclass("esri.layers.support.rasterFunctions.LocalFunctionArguments")],i);return i}));
