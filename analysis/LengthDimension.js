/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","./dimensionUtils","../core/Clonable","../core/Cyclical","../core/JSONSupport","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../core/accessorSupport/ensureType","../geometry/Point"],(function(e,r,o,t,s,n,i,p,c,a,l,u,y){"use strict";let d=function(r){function o(e){var o;return(o=r.call(this,e)||this).type="length",o.startPoint=null,o.endPoint=null,o.measureType=t.LengthDimensionMeasureType.Direct,o.offset=0,o.orientation=0,o}return e._inheritsLoose(o,r),o}(i.JSONSupportMixin(s.Clonable));r.__decorate([p.property({type:["length"],json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),r.__decorate([p.property({type:y,json:{write:!0}})],d.prototype,"startPoint",void 0),r.__decorate([p.property({type:y,json:{write:!0}})],d.prototype,"endPoint",void 0),r.__decorate([p.property({type:t.lengthDimensionMeasureType,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"measureType",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],d.prototype,"offset",void 0),r.__decorate([p.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),c.cast((e=>n.cyclicalDegrees.normalize(u.ensureNumber(e),0,!0)))],d.prototype,"orientation",void 0),d=r.__decorate([l.subclass("esri.analysis.LengthDimension")],d);return d}));
