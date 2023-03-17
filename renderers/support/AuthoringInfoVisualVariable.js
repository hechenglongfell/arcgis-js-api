/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,n,i,s){"use strict";var l;const p=new r.JSONMap({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),a=new r.JSONMap({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),u={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},c=["high-to-low","above-and-below","centered-on","extremes"],y=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","90-10","above","below"],...["high-to-low","above-and-below","90-10","above","below"]])],d=["seconds","minutes","hours","days","months","years"];let m=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).endTime=null,r.field=null,r.maxSliderValue=null,r.minSliderValue=null,r.startTime=null,r.type=null,r.units=null,r}e._inheritsLoose(r,t);var o=r.prototype;return o.castEndTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},o.castStartTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},o.clone=function(){return new l({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})},e._createClass(r,[{key:"style",get:function(){return"color"===this.type?this._get("style"):null},set:function(e){this._set("style",e)}},{key:"theme",get:function(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null},set:function(e){this._set("theme",e)}}]),r}(o.JSONSupport);t.__decorate([n.property({types:u,json:{write:!0}})],m.prototype,"endTime",void 0),t.__decorate([i.cast("endTime")],m.prototype,"castEndTime",null),t.__decorate([n.property({type:String,json:{write:!0}})],m.prototype,"field",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],m.prototype,"maxSliderValue",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],m.prototype,"minSliderValue",void 0),t.__decorate([n.property({types:u,json:{write:!0}})],m.prototype,"startTime",void 0),t.__decorate([i.cast("startTime")],m.prototype,"castStartTime",null),t.__decorate([n.property({type:p.apiValues,value:null,json:{type:p.jsonValues,read:p.read,write:p.write}})],m.prototype,"style",null),t.__decorate([n.property({type:y,value:null,json:{type:y,origins:{"web-scene":{type:c,write:{writer:(e,t)=>{c.includes(e)&&(t.theme=e)}}}},write:!0}})],m.prototype,"theme",null),t.__decorate([n.property({type:a.apiValues,json:{type:a.jsonValues,read:a.read,write:a.write}})],m.prototype,"type",void 0),t.__decorate([n.property({type:d,json:{type:d,write:!0}})],m.prototype,"units",void 0),m=l=t.__decorate([s.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],m);return m}));
