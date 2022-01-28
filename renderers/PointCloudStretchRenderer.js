/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","./PointCloudRenderer","./support/LegendOptions","./visualVariables/support/ColorStop"],(function(e,r,o,t,s,n,p,i,l,c){"use strict";var d;let a=d=function(r){function t(e){var o;return(o=r.call(this,e)||this).type="point-cloud-stretch",o.field=null,o.legendOptions=null,o.fieldTransformType=null,o.stops=null,o}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new d({...this.cloneProperties(),field:o.clone(this.field),fieldTransformType:o.clone(this.fieldTransformType),stops:o.clone(this.stops),legendOptions:o.clone(this.legendOptions)})},t}(i);r.__decorate([n.enumeration({pointCloudStretchRenderer:"point-cloud-stretch"})],a.prototype,"type",void 0),r.__decorate([t.property({json:{write:!0},type:String})],a.prototype,"field",void 0),r.__decorate([t.property({type:l.default,json:{write:!0}})],a.prototype,"legendOptions",void 0),r.__decorate([t.property({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0),r.__decorate([t.property({type:[c],json:{write:!0}})],a.prototype,"stops",void 0),a=d=r.__decorate([p.subclass("esri.renderers.PointCloudStretchRenderer")],a);return a}));
