/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../TimeExtent","../../TimeInterval","../../core/JSONSupport","../../core/lang","../../core/maybe","../../core/object","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer"],(function(e,t,r,o,n,p,s,i,l,u,a,c,d){"use strict";var m;let y=m=function(t){function n(e){var r;return(r=t.call(this,e)||this).currentTimeExtent=null,r.fullTimeExtent=null,r.loop=!1,r.numStops=null,r.numThumbs=null,r.stopDelay=null,r.stopInterval=null,r.stops=null,r}e._inheritsLoose(n,t);var l=n.prototype;return l.readCurrentTimeExtent=function(e){if(!e)return;const t=null!=e[0]?new Date(e[0]):null,o=null!=e[1]?new Date(e[1]):null;return new r({start:t,end:o})},l.writeCurrentTimeExtent=function(e,t,r){e&&i.setDeepValue(r,[s.isSome(e.start)?e.start.getTime():null,s.isSome(e.end)?e.end.getTime():null],t)},l.readFullTimeExtent=function(e,t){const o=t.properties;if(!o)return;const n=null!=o.endTime?new Date(o.endTime):null,p=null!=o.startTime?new Date(o.startTime):null;return new r({start:p,end:n})},l.writeFullTimeExtent=function(e,t){if(!e)return;const r=t.properties=t.properties||{},o=e.end,n=e.start;o&&(r.endTime=s.isSome(o)?o.getTime():null),n&&(r.startTime=s.isSome(n)?n.getTime():null)},l.readStopInterval=function(e,t,r){return e?o.fromJSON({value:e.interval,unit:e.units},r):null},l.writeStopInterval=function(e,t,r,o){if(!e)return;const n=e.toJSON(o);i.setDeepValue(r,{interval:n.value,units:n.unit},t)},l.readStops=function(e){return e&&e.length?e.map((e=>new Date(e))):null},l.writeStops=function(e,t,r){e&&e.length&&i.setDeepValue(r,e.map((e=>e.getTime())),t)},l.clone=function(){return new m(p.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))},n}(n.JSONSupport);t.__decorate([l.property({type:r,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],y.prototype,"currentTimeExtent",void 0),t.__decorate([a.reader("currentTimeExtent")],y.prototype,"readCurrentTimeExtent",null),t.__decorate([d.writer("currentTimeExtent")],y.prototype,"writeCurrentTimeExtent",null),t.__decorate([l.property({type:r,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],y.prototype,"fullTimeExtent",void 0),t.__decorate([a.reader("fullTimeExtent")],y.prototype,"readFullTimeExtent",null),t.__decorate([d.writer("fullTimeExtent")],y.prototype,"writeFullTimeExtent",null),t.__decorate([l.property({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},write:{target:"properties.loop"}}})],y.prototype,"loop",void 0),t.__decorate([l.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var e;const t=!!this.stopInterval,r=!(null==(e=this.stops)||!e.length),o=!(t||r);return{enabled:o,isRequired:o}}}}})],y.prototype,"numStops",void 0),t.__decorate([l.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],y.prototype,"numThumbs",void 0),t.__decorate([l.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],y.prototype,"stopDelay",void 0),t.__decorate([l.property({type:o,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){var e;const t=null!=this.numStops,r=!(null==(e=this.stops)||!e.length);return{enabled:!r,isRequired:!(t||r)}}}}})],y.prototype,"stopInterval",void 0),t.__decorate([a.reader("stopInterval")],y.prototype,"readStopInterval",null),t.__decorate([d.writer("stopInterval")],y.prototype,"writeStopInterval",null),t.__decorate([l.property({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],y.prototype,"stops",void 0),t.__decorate([a.reader("stops")],y.prototype,"readStops",null),t.__decorate([d.writer("stops")],y.prototype,"writeStops",null),y=m=t.__decorate([c.subclass("esri.webdoc.widgets.TimeSlider")],y);return y}));
