/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/unitUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,p,a,n,i){"use strict";let l=function(r){function t(e){var t;return(t=r.call(this,e)||this).shapeAreaField=null,t.shapeLengthField=null,t.units=null,t}return e._inheritsLoose(t,r),t}(t.ClonableMixin(o.JSONSupport));r.__decorate([p.property({type:String,json:{read:{source:"shapeAreaFieldName"}}})],l.prototype,"shapeAreaField",void 0),r.__decorate([p.property({type:String,json:{read:{source:"shapeLengthFieldName"}}})],l.prototype,"shapeLengthField",void 0),r.__decorate([p.property({type:String,json:{read:e=>s.areaUnitsJSONMap.read(e)||s.lengthUnitsJSONMap.read(e)}})],l.prototype,"units",void 0),l=r.__decorate([i.subclass("esri.layers.support.GeometryFieldsInfo")],l);return l}));
