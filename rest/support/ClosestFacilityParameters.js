/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Clonable","../../core/Collection","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./commonProperties","./networkEnums","./TravelMode","../../geometry/SpatialReference"],(function(e,t,r,o,i,n,p,a,s,u,c,l,y,d,_,m,w,v){"use strict";var f;function b(e,t,r){p.isSome(e)&&(t[r]=i.isCollection(e)?{features:e.toArray().map((e=>e.toJSON()))}:e.toJSON())}let g=f=function(t){function r(e){var r;return(r=t.call(this,e)||this).accumulateAttributes=null,r.apiKey=null,r.attributeParameterValues=null,r.defaultCutoff=null,r.defaultTargetFacilityCount=null,r.directionsLanguage=null,r.directionsLengthUnits=null,r.directionsOutputType=null,r.directionsStyleName=null,r.directionsTimeAttribute=null,r.facilities=null,r.geometryPrecision=null,r.geometryPrecisionM=null,r.geometryPrecisionZ=null,r.ignoreInvalidLocations=null,r.impedanceAttribute=null,r.incidents=null,r.outputGeometryPrecision=null,r.outputGeometryPrecisionUnits=null,r.outputLines=null,r.outSpatialReference=null,r.overrides=null,r.pointBarriers=null,r.polygonBarriers=null,r.polylineBarriers=null,r.preserveObjectID=null,r.restrictionAttributes=null,r.restrictUTurns=null,r.returnDirections=!1,r.returnFacilities=!1,r.returnIncidents=!1,r.returnPointBarriers=!1,r.returnPolygonBarriers=!1,r.returnPolylineBarriers=!1,r.returnRoutes=!0,r.returnTraversedEdges=null,r.returnTraversedJunctions=null,r.returnTraversedTurns=null,r.returnZ=null,r.timeOfDay=null,r.timeOfDayIsUTC=null,r.timeOfDayUsage=null,r.travelDirection=null,r.travelMode=null,r.useHierarchy=!1,r}e._inheritsLoose(r,t),r.from=function(e){return s.ensureClass(f,e)};var o=r.prototype;return o.readAccumulateAttributes=function(e){return p.isNone(e)?null:e.map((e=>m.impedanceAttributeNameJsonMap.fromJSON(e)))},o.writeAccumulateAttributes=function(e,t,r){!p.isNone(e)&&e.length&&(t[r]=e.map((e=>m.impedanceAttributeNameJsonMap.toJSON(e))))},o.writeFacilities=function(e,t,r){b(e,t,r)},o.writeIncidents=function(e,t,r){b(e,t,r)},o.writePointBarriers=function(e,t,r){b(e,t,r)},o.writePolygonBarrier=function(e,t,r){b(e,t,r)},o.writePolylineBarrier=function(e,t,r){b(e,t,r)},o.readRestrictionAttributes=function(e){return p.isNone(e)?null:e.map((e=>m.restrictionAttributeNameJsonMap.fromJSON(e)))},o.writeRestrictionAttributes=function(e,t,r){!p.isNone(e)&&e.length&&(t[r]=e.map((e=>m.restrictionAttributeNameJsonMap.toJSON(e))))},o.readTimeOfDay=function(e,t){const{timeOfDay:r}=t;return p.isNone(r)?null:"now"===r?"now":new Date(r)},o.writeTimeOfDay=function(e,t){p.isNone(e)||(t.timeOfDay="now"===e?"now":e.getTime())},r}(o.ClonableMixin(n.JSONSupport));t.__decorate([a.property({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],g.prototype,"accumulateAttributes",void 0),t.__decorate([l.reader("accumulateAttributes")],g.prototype,"readAccumulateAttributes",null),t.__decorate([d.writer("accumulateAttributes")],g.prototype,"writeAccumulateAttributes",null),t.__decorate([a.property(_.apiKey)],g.prototype,"apiKey",void 0),t.__decorate([a.property({json:{write:!0}})],g.prototype,"attributeParameterValues",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"defaultCutoff",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"defaultTargetFacilityCount",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],g.prototype,"directionsLanguage",void 0),t.__decorate([c.enumeration(m.directionsLengthUnitJsonMap)],g.prototype,"directionsLengthUnits",void 0),t.__decorate([c.enumeration(m.directionsOutputTypeJsonMap)],g.prototype,"directionsOutputType",void 0),t.__decorate([c.enumeration(m.directionsStyleNameJsonMap)],g.prototype,"directionsStyleName",void 0),t.__decorate([c.enumeration(m.durationImpedanceAttributeNameJsonMap,{name:"directionsTimeAttributeName",ignoreUnknown:!1})],g.prototype,"directionsTimeAttribute",void 0),t.__decorate([a.property({json:{write:!0}})],g.prototype,"facilities",void 0),t.__decorate([d.writer("facilities")],g.prototype,"writeFacilities",null),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"geometryPrecision",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"geometryPrecisionM",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"geometryPrecisionZ",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"ignoreInvalidLocations",void 0),t.__decorate([c.enumeration(m.impedanceAttributeNameJsonMap,{name:"impedanceAttributeName",ignoreUnknown:!1})],g.prototype,"impedanceAttribute",void 0),t.__decorate([a.property({json:{write:!0}})],g.prototype,"incidents",void 0),t.__decorate([d.writer("incidents")],g.prototype,"writeIncidents",null),t.__decorate([a.property({type:Number,json:{write:!0}})],g.prototype,"outputGeometryPrecision",void 0),t.__decorate([c.enumeration(m.lengthUnitJsonMap)],g.prototype,"outputGeometryPrecisionUnits",void 0),t.__decorate([c.enumeration(m.outputLineJsonMap)],g.prototype,"outputLines",void 0),t.__decorate([a.property({type:v,json:{name:"outSR",write:!0}})],g.prototype,"outSpatialReference",void 0),t.__decorate([a.property({json:{write:!0}})],g.prototype,"overrides",void 0),t.__decorate([a.property({json:{name:"barriers",write:!0}})],g.prototype,"pointBarriers",void 0),t.__decorate([d.writer("pointBarriers")],g.prototype,"writePointBarriers",null),t.__decorate([a.property({json:{write:!0}})],g.prototype,"polygonBarriers",void 0),t.__decorate([d.writer("polygonBarriers")],g.prototype,"writePolygonBarrier",null),t.__decorate([a.property({json:{write:!0}})],g.prototype,"polylineBarriers",void 0),t.__decorate([d.writer("polylineBarriers")],g.prototype,"writePolylineBarrier",null),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"preserveObjectID",void 0),t.__decorate([a.property({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],g.prototype,"restrictionAttributes",void 0),t.__decorate([l.reader("restrictionAttributes")],g.prototype,"readRestrictionAttributes",null),t.__decorate([d.writer("restrictionAttributes")],g.prototype,"writeRestrictionAttributes",null),t.__decorate([c.enumeration(m.restrictUTurnJsonMap)],g.prototype,"restrictUTurns",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnDirections",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnFacilities",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnIncidents",void 0),t.__decorate([a.property({type:Boolean,json:{name:"returnBarriers",write:!0}})],g.prototype,"returnPointBarriers",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnPolygonBarriers",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnPolylineBarriers",void 0),t.__decorate([a.property({type:Boolean,json:{name:"returnCFRoutes",write:!0}})],g.prototype,"returnRoutes",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnTraversedEdges",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnTraversedJunctions",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnTraversedTurns",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"returnZ",void 0),t.__decorate([a.property({type:Date,json:{type:Number,write:!0}})],g.prototype,"timeOfDay",void 0),t.__decorate([l.reader("timeOfDay")],g.prototype,"readTimeOfDay",null),t.__decorate([d.writer("timeOfDay")],g.prototype,"writeTimeOfDay",null),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"timeOfDayIsUTC",void 0),t.__decorate([c.enumeration(m.timeOfDayUsageJsonMap)],g.prototype,"timeOfDayUsage",void 0),t.__decorate([c.enumeration(m.travelDirectionJsonMap)],g.prototype,"travelDirection",void 0),t.__decorate([a.property({type:w,json:{write:!0}})],g.prototype,"travelMode",void 0),t.__decorate([a.property({type:Boolean,json:{write:!0}})],g.prototype,"useHierarchy",void 0),g=f=t.__decorate([y.subclass("esri.rest.support.ClosestFacilityParameters")],g);return g}));
