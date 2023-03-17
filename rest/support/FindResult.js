/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../geometry/support/typeUtils"],(function(e,r,t,o,p,a,s,u,i,c,y,n,l){"use strict";let d=function(r){function t(e){var t;return(t=r.call(this,e)||this).displayFieldName=null,t.feature=null,t.foundFieldName=null,t.layerId=null,t.layerName=null,t.value=void 0,t}e._inheritsLoose(t,r);var p=t.prototype;return p.readFeature=function(e,r){const t={attributes:{}};return r.attributes&&(t.attributes=r.attributes),r.geometry&&(t.geometry=r.geometry),o.fromJSON(t)},p.writeFeature=function(e,r){if(!e)return;const{attributes:t,geometry:o}=e;t&&(r.attributes={...t}),a.isSome(o)&&(r.geometry=o.toJSON(),r.geometryType=l.typeKebabDictionary.toJSON(o.type))},t}(p.JSONSupport);r.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),r.__decorate([s.property({type:o})],d.prototype,"feature",void 0),r.__decorate([c.reader("feature",["attributes","geometry"])],d.prototype,"readFeature",null),r.__decorate([n.writer("feature")],d.prototype,"writeFeature",null),r.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"foundFieldName",void 0),r.__decorate([s.property({type:Number,json:{write:!0}})],d.prototype,"layerId",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"layerName",void 0),r.__decorate([s.property({json:{write:!0}})],d.prototype,"value",void 0),d=r.__decorate([y.subclass("esri.rest.support.FindResult")],d);return d}));
