/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../input/gamepad/GamepadInputDevice"],(function(e,o,r,t,p,a,c,n,i){"use strict";let l=function(o){function r(e){var r;return(r=o.call(this,e)||this).enabled=!0,r.device=null,r.mode="pan",r.tiltDirection="forward-down",r.velocityFactor=1,r}return e._inheritsLoose(r,o),r}(r);return o.__decorate([t.property({type:Boolean,nonNullable:!0})],l.prototype,"enabled",void 0),o.__decorate([t.property({type:i})],l.prototype,"device",void 0),o.__decorate([t.property({type:["pan","zoom"],nonNullable:!0})],l.prototype,"mode",void 0),o.__decorate([t.property({type:["forward-down","forward-up"],nonNullable:!0})],l.prototype,"tiltDirection",void 0),o.__decorate([t.property({type:Number,nonNullable:!0})],l.prototype,"velocityFactor",void 0),l=o.__decorate([n.subclass("esri.views.navigation.gamepad.GamepadSettings")],l),l}));
