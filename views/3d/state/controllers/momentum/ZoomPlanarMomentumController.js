/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../../../../core/has","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./MomentumController","../../utils/navigationUtils"],(function(o,t,e,n,r,i,s,c,a,l,m,u){"use strict";o.ZoomPlanarMomentumController=function(o){function e(t){var e;return(e=o.call(this,t)||this).interactionType=1,e.constraintOptions.interactionDirection=l.create(),e}return t._inheritsLoose(e,o),e.prototype.momentumStep=function(o,t){a.copy(this.constraintOptions.interactionDirection,t.eye);const e=this.momentum.valueDelta(0,o);u.applyZoomToPoint(t,this.zoomCenter,e,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=a.direction(this.constraintOptions.interactionDirection,t.eye,this.constraintOptions.interactionDirection)},t._createClass(e,[{key:"zoomCenter",set:function(o){this._set("zoomCenter",l.clone(o))}}]),e}(m.MomentumController),e.__decorate([n.property({constructOnly:!0})],o.ZoomPlanarMomentumController.prototype,"momentum",void 0),e.__decorate([n.property({constructOnly:!0})],o.ZoomPlanarMomentumController.prototype,"zoomCenter",null),o.ZoomPlanarMomentumController=e.__decorate([c.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],o.ZoomPlanarMomentumController),Object.defineProperty(o,"__esModule",{value:!0})}));
