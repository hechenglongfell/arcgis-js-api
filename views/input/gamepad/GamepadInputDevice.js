/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass"],(function(e,t,r,n,o,s,a,c){"use strict";let i=function(t){function r(e){var r;return(r=t.call(this)||this).nativeIndex=null,r._detectedDeviceType="unknown","standard"===e.mapping?r._detectedDeviceType="standard":p.test(e.id)?r._detectedDeviceType="spacemouse":r._detectedDeviceType="unknown",r.nativeIndex=e.index,r}return e._inheritsLoose(r,t),e._createClass(r,[{key:"native",get:function(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]}},{key:"deviceType",get:function(){return this._detectedDeviceType}},{key:"axisThreshold",get:function(){return d[this.deviceType]}}]),r}(r);t.__decorate([n.property({nonNullable:!0,readOnly:!0})],i.prototype,"nativeIndex",void 0),t.__decorate([n.property({type:String,readOnly:!0})],i.prototype,"deviceType",null),t.__decorate([n.property({type:Number,readOnly:!0})],i.prototype,"axisThreshold",null),i=t.__decorate([c.subclass("esri.views.input.gamepad.GamepadInputDevice")],i);const p=new RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))","i"),d={standard:.15,spacemouse:.025,unknown:0};return i}));
