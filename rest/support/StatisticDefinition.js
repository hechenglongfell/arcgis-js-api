/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer"],(function(t,e,r,i,o,s,a,c,n){"use strict";var p;const u=new r.JSONMap({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let d=p=function(e){function r(t){var r;return(r=e.call(this,t)||this).maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r.statisticParameters=null,r}t._inheritsLoose(r,e);var i=r.prototype;return i.writeStatisticParameters=function(t,e){"percentile-continuous"!==this.statisticType&&"percentile-discrete"!==this.statisticType||(e.statisticParameters=o.clone(t))},i.clone=function(){return new p({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:o.clone(this.statisticParameters)})},r}(i.JSONSupport);e.__decorate([s.property({type:Number,json:{write:!0}})],d.prototype,"maxPointCount",void 0),e.__decorate([s.property({type:Number,json:{write:!0}})],d.prototype,"maxRecordCount",void 0),e.__decorate([s.property({type:Number,json:{write:!0}})],d.prototype,"maxVertexCount",void 0),e.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"onStatisticField",void 0),e.__decorate([s.property({type:String,json:{write:!0}})],d.prototype,"outStatisticFieldName",void 0),e.__decorate([s.property({type:String,json:{read:{source:"statisticType",reader:u.read},write:{target:"statisticType",writer:u.write}}})],d.prototype,"statisticType",void 0),e.__decorate([s.property({type:Object})],d.prototype,"statisticParameters",void 0),e.__decorate([n.writer("statisticParameters")],d.prototype,"writeStatisticParameters",null),d=p=e.__decorate([c.subclass("esri.rest.support.StatisticDefinition")],d);return d}));
