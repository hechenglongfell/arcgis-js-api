/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3f64","../../../../../geometry/support/axisAngle","./MomentumController","../../utils/navigationUtils"],(function(t,e,o,r,n,s,c,l,u,i,a,p){"use strict";t.RotationMomentumController=function(t){function o(e){var o;return(o=t.call(this,e)||this).interactionType=2,o}return e._inheritsLoose(o,t),o.prototype.momentumStep=function(t,e){const o=this.momentum.value(t);p.applyRotation(e,this.center,i.wrapAxisAngle(this.axis,o))},e._createClass(o,[{key:"center",set:function(t){this._set("center",u.clone(t))}},{key:"axis",set:function(t){this._set("axis",u.clone(t))}}]),o}(a.MomentumController),o.__decorate([r.property({constructOnly:!0})],t.RotationMomentumController.prototype,"momentum",void 0),o.__decorate([r.property({constructOnly:!0})],t.RotationMomentumController.prototype,"center",null),o.__decorate([r.property({constructOnly:!0})],t.RotationMomentumController.prototype,"axis",null),t.RotationMomentumController=o.__decorate([l.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],t.RotationMomentumController),Object.defineProperty(t,"__esModule",{value:!0})}));
