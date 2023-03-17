/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../TimeExtent","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils","../../layers/support/source/DataLayerSource","./FullTextSearch","./QuantizationParameters","./StatisticDefinition","../../geometry/SpatialReference","../../geometry/Point"],(function(e,t,r,o,i,a,n,s,p,l,c,u,d,y,m,_,h,S,f,w,v){"use strict";var g;const j=new i.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),R=new i.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let b=g=function(t){function r(e){var r;return(r=t.call(this,e)||this).aggregateIds=null,r.cacheHint=void 0,r.compactGeometryEnabled=!1,r.datumTransformation=null,r.defaultSpatialReferenceEnabled=!1,r.distance=void 0,r.dynamicDataSource=void 0,r.formatOf3DObjects=null,r.fullText=null,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.sourceSpatialReference=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.timeReferenceUnknownClient=!1,r.units=null,r.where=null,r}e._inheritsLoose(r,t),r.from=function(e){return y.ensureClass(g,e)};var o=r.prototype;return o.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},o.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},o.writeParameterValues=function(e,t){if(e){const r={};for(const t in e){const o=e[t];Array.isArray(o)?r[t]=o.map((e=>e instanceof Date?e.getTime():e)):o instanceof Date?r[t]=o.getTime():r[t]=o}t.parameterValues=r}},o.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},o.writeWhere=function(e,t){t.where=e||"1=1"},o.clone=function(){return new g(n.clone({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:s.isSome(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))},r}(a.JSONSupport);b.MAX_MAX_RECORD_COUNT_FACTOR=5,t.__decorate([p.property({json:{write:!0}})],b.prototype,"aggregateIds",void 0),t.__decorate([p.property({type:Boolean,json:{write:!0}})],b.prototype,"cacheHint",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"compactGeometryEnabled",void 0),t.__decorate([p.property({json:{write:!0}})],b.prototype,"datumTransformation",void 0),t.__decorate([l.cast("datumTransformation")],b.prototype,"castDatumTransformation",null),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"defaultSpatialReferenceEnabled",void 0),t.__decorate([p.property({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],b.prototype,"distance",void 0),t.__decorate([p.property({type:_.DataLayerSource,json:{write:!0}})],b.prototype,"dynamicDataSource",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"formatOf3DObjects",void 0),t.__decorate([p.property({type:[h],json:{write:{enabled:!0,overridePolicy(){return{enabled:s.isSome(this.fullText)&&this.fullText.length>0}}}}})],b.prototype,"fullText",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"gdbVersion",void 0),t.__decorate([p.property({types:r.geometryTypes,json:{read:m.fromJSON,write:!0}})],b.prototype,"geometry",void 0),t.__decorate([p.property({type:Number,json:{write:!0}})],b.prototype,"geometryPrecision",void 0),t.__decorate([p.property({type:[String],json:{write:!0}})],b.prototype,"groupByFieldsForStatistics",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"having",void 0),t.__decorate([p.property({type:Date})],b.prototype,"historicMoment",void 0),t.__decorate([d.writer("historicMoment")],b.prototype,"writeHistoricMoment",null),t.__decorate([p.property({type:Number,json:{write:!0}})],b.prototype,"maxAllowableOffset",void 0),t.__decorate([p.property({type:Number,cast:e=>e<1?1:e>g.MAX_MAX_RECORD_COUNT_FACTOR?g.MAX_MAX_RECORD_COUNT_FACTOR:e,json:{write:{overridePolicy:e=>({enabled:e>1})}}})],b.prototype,"maxRecordCountFactor",void 0),t.__decorate([p.property({type:["xyFootprint"],json:{write:!0}})],b.prototype,"multipatchOption",void 0),t.__decorate([p.property({type:Number,json:{read:{source:"resultRecordCount"}}})],b.prototype,"num",void 0),t.__decorate([p.property({json:{write:!0}})],b.prototype,"objectIds",void 0),t.__decorate([p.property({type:[String],json:{write:!0}})],b.prototype,"orderByFields",void 0),t.__decorate([p.property({type:[String],json:{write:!0}})],b.prototype,"outFields",void 0),t.__decorate([p.property({type:w,json:{name:"outSR",write:!0}})],b.prototype,"outSpatialReference",void 0),t.__decorate([p.property({type:[f],json:{write:{enabled:!0,overridePolicy(){return{enabled:s.isSome(this.outStatistics)&&this.outStatistics.length>0}}}}})],b.prototype,"outStatistics",void 0),t.__decorate([p.property({json:{write:!0}})],b.prototype,"parameterValues",void 0),t.__decorate([d.writer("parameterValues")],b.prototype,"writeParameterValues",null),t.__decorate([p.property({type:v,json:{write:!0}})],b.prototype,"pixelSize",void 0),t.__decorate([p.property({type:S,json:{write:!0}})],b.prototype,"quantizationParameters",void 0),t.__decorate([p.property({type:[Object],json:{write:!0}})],b.prototype,"rangeValues",void 0),t.__decorate([p.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:"relation"===this.spatialRelationship}}}}})],b.prototype,"relationParameter",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"resultType",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"returnCentroid",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"returnDistinctValues",void 0),t.__decorate([p.property({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"returnExceededLimitFeatures",void 0),t.__decorate([p.property({type:Boolean,json:{write:!0}})],b.prototype,"returnGeometry",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"returnQueryGeometry",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"returnM",void 0),t.__decorate([p.property({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"returnZ",void 0),t.__decorate([p.property({type:w,json:{write:!0}})],b.prototype,"sourceSpatialReference",void 0),t.__decorate([c.enumeration(j,{ignoreUnknown:!1,name:"spatialRel"})],b.prototype,"spatialRelationship",void 0),t.__decorate([p.property({type:Number,json:{read:{source:"resultOffset"}}})],b.prototype,"start",void 0),t.__decorate([d.writer("start"),d.writer("num")],b.prototype,"writeStart",null),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"sqlFormat",void 0),t.__decorate([p.property({type:String,json:{write:!0}})],b.prototype,"text",void 0),t.__decorate([p.property({type:o,json:{write:!0}})],b.prototype,"timeExtent",void 0),t.__decorate([p.property({type:Boolean,json:{default:!1,write:!0}})],b.prototype,"timeReferenceUnknownClient",void 0),t.__decorate([c.enumeration(R,{ignoreUnknown:!1}),p.property({json:{write:{overridePolicy(e){return{enabled:!!e&&null!=this.distance&&this.distance>0}}}}})],b.prototype,"units",void 0),t.__decorate([p.property({type:String,json:{write:{overridePolicy(e){return{enabled:null!=e||null!=this.start&&this.start>0}}}}})],b.prototype,"where",void 0),t.__decorate([d.writer("where")],b.prototype,"writeWhere",null),b=g=t.__decorate([u.subclass("esri.rest.support.Query")],b);return b}));
