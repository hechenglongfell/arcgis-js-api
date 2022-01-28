/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../../../../core/arrayUtils","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./MomentumController","../../utils/navigationUtils"],(function(e,o,t,r,n,s,c,m,a,i,l,u){"use strict";const p=i.create(),h=i.create();e.PanSphericalMomentumController=function(e){function t(o){var t;return(t=e.call(this,o)||this).interactionType=4,t}return o._inheritsLoose(t,e),t.prototype.momentumStep=function(e,o){const t=this.momentum.value1(e),r=this.momentum.value2(e);a.copy(h,o.eye),a.normalize(h,h),a.cross(this.momentum.axis2,h,this.momentum.axis1),u.applyRotationWithTwoAxes(o,p,this.momentum.axis1,t,this.momentum.axis2,r)},t}(l.MomentumController),t.__decorate([r.property({constructOnly:!0})],e.PanSphericalMomentumController.prototype,"momentum",void 0),e.PanSphericalMomentumController=t.__decorate([m.subclass("esri.views.3d.state.controllers.momentum.PanSphericalMomentumController")],e.PanSphericalMomentumController),Object.defineProperty(e,"__esModule",{value:!0})}));
