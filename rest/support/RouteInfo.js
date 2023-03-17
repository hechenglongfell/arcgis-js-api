/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../PopupTemplate","../../symbols","../../core/Clonable","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../geometry/Polyline","../route/utils","./RouteSettings"],(function(t,e,i,a,o,s,l,r,n,p,u,d,m,b,T,y){"use strict";var f;let c=f=function(e){function a(t){var i;return(i=e.call(this,t)||this).analysisSettings=null,i.endTime=null,i.endTimeOffset=null,i.firstStopId=null,i.geometry=null,i.lastStopId=null,i.messages=null,i.name=null,i.objectId=null,i.popupTemplate=null,i.startTime=null,i.startTimeOffset=null,i.stopCount=null,i.symbol=null,i.totalCosts=null,i.totalDistance=null,i.totalDuration=null,i.totalLateDuration=null,i.totalViolations=null,i.totalWait=null,i.totalWaitDuration=null,i.type="route-info",i.version="1.0.0",i}t._inheritsLoose(a,e);var o=a.prototype;return o.readEndTime=function(t,e){return r.isSome(e.attributes.EndTimeUTC)?new Date(e.attributes.EndTimeUTC):null},o.readEndTimeOffset=function(t,e){return T.getTimezoneOffset(e.attributes.EndTime,e.attributes.EndTimeUTC)},o.readStartTime=function(t,e){return r.isSome(e.attributes.StartTimeUTC)?new Date(e.attributes.StartTimeUTC):null},o.readStartTimeOffset=function(t,e){return T.getTimezoneOffset(e.attributes.StartTime,e.attributes.StartTimeUTC)},o.readTotalCosts=function(t,e){return T.getPrefixedProperties(e.attributes,"Total_")},o.readTotalViolations=function(t,e){return T.getPrefixedProperties(e.attributes,"TotalViolation_")},o.readTotalWait=function(t,e){return T.getPrefixedProperties(e.attributes,"TotalWait_")},a.fromGraphic=function(t){return new f({analysisSettings:r.isSome(t.attributes.AnalysisSettings)?y.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:r.isSome(t.attributes.EndTime)?new Date(t.attributes.EndTime):null,endTimeOffset:t.attributes.EndUTCOffset??null,geometry:t.geometry,messages:r.isSome(t.attributes.Messages)?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:r.isSome(t.attributes.StartTime)?new Date(t.attributes.StartTime):null,startTimeOffset:t.attributes.StartUTCOffset??null,symbol:t.symbol,totalCosts:r.isSome(t.attributes.TotalCosts)?T.toKebabImpedanceAttributes(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:t.attributes.TotalMeters??null,totalDuration:t.attributes.TotalMinutes??null,totalLateDuration:t.attributes.TotalLateMinutes??null,totalWaitDuration:t.attributes.TotalWaitMinutes??null,version:t.attributes.Version})},o.toGraphic=function(){const t={ObjectID:r.unwrap(this.objectId),AnalysisSettings:r.isSome(this.analysisSettings)?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:r.isSome(this.endTime)?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:r.isSome(this.messages)?JSON.stringify(this.messages):null,RouteName:r.unwrap(this.name),StartTime:r.isSome(this.startTime)?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:r.isSome(this.totalCosts)?JSON.stringify(T.fromKebabImpedanceAttributes(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:r.unwrap(this.version)};return new i({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:r.unwrap(this.popupTemplate)})},a}(s.ClonableMixin(l.JSONSupport));c.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"EndUTCOffset",alias:"End Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Messages",alias:"Analysis Messages",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:1024,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"StartUTCOffset",alias:"Start Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Version",alias:"Version",type:"esriFieldTypeString",length:16,editable:!0,nullable:!0,visible:!0,domain:null}],c.popupInfo={title:"Route Details",fieldInfos:[{fieldName:"RouteName",label:"Route Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TotalMinutes",label:"Total Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalMeters",label:"Total Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalLateMinutes",label:"Total Late Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalWaitMinutes",label:"Total Wait Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalCosts",label:"Total Costs",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"StartTime",label:"Start Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"StartUTCOffset",label:"Start Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"EndTime",label:"End Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"EndUTCOffset",label:"End Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Messages",label:"Analysis Messages",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"AnalysisSettings",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"Version",label:"Version",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},e.__decorate([n.property()],c.prototype,"analysisSettings",void 0),e.__decorate([n.property()],c.prototype,"endTime",void 0),e.__decorate([d.reader("endTime",["attributes.EndTimeUTC"])],c.prototype,"readEndTime",null),e.__decorate([n.property()],c.prototype,"endTimeOffset",void 0),e.__decorate([d.reader("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],c.prototype,"readEndTimeOffset",null),e.__decorate([n.property({json:{read:{source:"attributes.FirstStopID"}}})],c.prototype,"firstStopId",void 0),e.__decorate([n.property({type:b})],c.prototype,"geometry",void 0),e.__decorate([n.property({json:{read:{source:"attributes.LastStopID"}}})],c.prototype,"lastStopId",void 0),e.__decorate([n.property()],c.prototype,"messages",void 0),e.__decorate([n.property({json:{read:{source:"attributes.Name"}}})],c.prototype,"name",void 0),e.__decorate([n.property({json:{read:{source:"attributes.ObjectID"}}})],c.prototype,"objectId",void 0),e.__decorate([n.property({type:a})],c.prototype,"popupTemplate",void 0),e.__decorate([n.property()],c.prototype,"startTime",void 0),e.__decorate([d.reader("startTime",["attributes.StartTimeUTC"])],c.prototype,"readStartTime",null),e.__decorate([n.property()],c.prototype,"startTimeOffset",void 0),e.__decorate([d.reader("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],c.prototype,"readStartTimeOffset",null),e.__decorate([n.property({json:{read:{source:"attributes.StopCount"}}})],c.prototype,"stopCount",void 0),e.__decorate([n.property({types:o.symbolTypes})],c.prototype,"symbol",void 0),e.__decorate([n.property()],c.prototype,"totalCosts",void 0),e.__decorate([d.reader("totalCosts",["attributes"])],c.prototype,"readTotalCosts",null),e.__decorate([n.property()],c.prototype,"totalDistance",void 0),e.__decorate([n.property()],c.prototype,"totalDuration",void 0),e.__decorate([n.property()],c.prototype,"totalLateDuration",void 0),e.__decorate([n.property()],c.prototype,"totalViolations",void 0),e.__decorate([d.reader("totalViolations",["attributes"])],c.prototype,"readTotalViolations",null),e.__decorate([n.property()],c.prototype,"totalWait",void 0),e.__decorate([d.reader("totalWait",["attributes"])],c.prototype,"readTotalWait",null),e.__decorate([n.property()],c.prototype,"totalWaitDuration",void 0),e.__decorate([n.property({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),e.__decorate([n.property()],c.prototype,"version",void 0),c=f=e.__decorate([m.subclass("esri.rest.support.RouteInfo")],c);return c}));
