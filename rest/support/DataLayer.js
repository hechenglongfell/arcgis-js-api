/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,r,t,o,s,a,p,i,l,n,c){"use strict";const u=new o.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});let y=function(r){function t(e){var t;return(t=r.call(this,e)||this).geometry=null,t.name=null,t.spatialRelationship=null,t.type="layer",t.where=null,t}return e._inheritsLoose(t,r),t}(s.JSONSupport);return r.__decorate([a.property({types:t.geometryTypes,json:{read:c.fromJSON,write:!0}})],y.prototype,"geometry",void 0),r.__decorate([a.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],y.prototype,"name",void 0),r.__decorate([a.property({type:String,json:{read:{source:"spatialRel",reader:u.read},write:{target:"spatialRel",writer:u.write}}})],y.prototype,"spatialRelationship",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],y.prototype,"type",void 0),r.__decorate([a.property({type:String,json:{write:!0}})],y.prototype,"where",void 0),y=r.__decorate([n.subclass("esri.rest.support.DataLayer")],y),y}));
