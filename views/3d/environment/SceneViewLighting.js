/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Evented","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../webscene/Lighting"],(function(e,t,n,i,o,s,a,r,c,d){"use strict";var l;function u({hours:e,minutes:t,seconds:n}){return Math.round(e+t/60+n/3600)}e.SceneViewLighting=l=function(e){function n(t){var n;(n=e.call(this,t)||this).positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0},n.cameraTrackingEnabled=!0,n.ambientOcclusionEnabled=!1,n.waterReflectionEnabled=!1;const i=(new Date).getFullYear(),o=new Date("March 15, "+i+" 12:00:00 UTC");return n._set("defaultDate",o),n._set("date",o),n}t._inheritsLoose(n,e),n.fromWebsceneLighting=function(e){return new l({...e.cloneConstructProperties()})};var i=n.prototype;return i.autoUpdate=function(e,t){const n=u(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;let i=null;null!=e&&(this.positionTimezoneInfo.autoUpdated=!0,i=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime())));const o=u(this.positionTimezoneInfo);if(n!==o&&(p.target=this,p.timezoneOffset=o,this.emit("timezone-will-change",p)),null!=e)return i!==e.getTime()},i.clone=function(){const e=this._get("date")===this._get("defaultDate"),t=new l({...this.cloneConstructProperties(),defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled});return e&&t._set("date",t._get("defaultDate")),t.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated,t.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours,t.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes,t.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds,t},i.cloneWithWebsceneLighting=function(e){const t=this.clone();return null!=e.date&&(t.date=e.date),t.directShadowsEnabled=e.directShadowsEnabled,t.displayUTCOffset=e.displayUTCOffset,t},t._createClass(n,[{key:"defaultDate",get:function(){return new Date(this._get("defaultDate").getTime())},set:function(e){const t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)}},{key:"date",set:function(e){null!=e&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())))}}]),n}(i.EventedMixin(d)),n.__decorate([o.property({type:Boolean})],e.SceneViewLighting.prototype,"cameraTrackingEnabled",void 0),n.__decorate([o.property({type:Boolean})],e.SceneViewLighting.prototype,"ambientOcclusionEnabled",void 0),n.__decorate([o.property({type:Boolean})],e.SceneViewLighting.prototype,"waterReflectionEnabled",void 0),n.__decorate([o.property({type:Date})],e.SceneViewLighting.prototype,"defaultDate",null),n.__decorate([o.property({type:Date})],e.SceneViewLighting.prototype,"date",null),e.SceneViewLighting=l=n.__decorate([c.subclass("esri.views.3d.environment.SceneViewLighting")],e.SceneViewLighting);const p={target:null,timezoneOffset:0},h=e.SceneViewLighting;e.calculateTimezoneOffset=u,e.default=h,Object.defineProperty(e,"__esModule",{value:!0})}));
