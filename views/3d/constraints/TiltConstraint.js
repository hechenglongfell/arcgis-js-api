/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/mathUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/decorators/cast","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../state/Constraints"],(function(t,e,o,r,a,s,n,i,c,u,l){"use strict";const p={min:a.rad2deg(l.TiltDefault.min),max:a.rad2deg(l.TiltDefault.max)};t.TiltConstraint=function(t){function o(){var e;return(e=t.apply(this,arguments)||this).mode="auto",e}e._inheritsLoose(o,t);var r=o.prototype;return r.castMax=function(t){return a.clamp(t,p.min,p.max)},r.autoUpdate=function(t){"auto"===this.mode&&this._get("max")!==t&&this._set("max",t)},e._createClass(o,[{key:"max",get:function(){return this._get("max")},set:function(t){this._set("max",t),this.mode="manual"}}]),o}(r),o.__decorate([s.property({type:["auto","manual"]})],t.TiltConstraint.prototype,"mode",void 0),o.__decorate([s.property({type:Number,value:p.max})],t.TiltConstraint.prototype,"max",null),o.__decorate([i.cast("max")],t.TiltConstraint.prototype,"castMax",null),t.TiltConstraint=o.__decorate([u.subclass("esri.views.3d.constraints.TiltConstraint")],t.TiltConstraint);var m=t.TiltConstraint;t.default=m,Object.defineProperty(t,"__esModule",{value:!0})}));
