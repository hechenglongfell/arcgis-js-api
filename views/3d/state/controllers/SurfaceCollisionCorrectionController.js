/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Handles","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../camera/intersectionUtils","../../camera/constraintUtils/surfaceCollision","./CameraController"],(function(e,t,r,o,n,i,a,s,l,c,u,C){"use strict";e.SurfaceCollisionCorrectionController=function(e){function r(t){var r;return(r=e.call(this,t)||this)._handles=new o,r}t._inheritsLoose(r,e);var i=r.prototype;return i.onControllerStart=function(){this.state=C.State.Running,this._handles.add(this.view.basemapTerrain.on("elevation-change",(e=>this._handleElevationChangeEvent(e)))),this._applyCorrection()},i.onControllerEnd=function(){this._handles.removeAll()},i.stepController=function(){},i._handleElevationChangeEvent=function(e){n.isSome(e.spatialReference)&&!c.eyeWithinExtent(this.view,this.desiredCamera,e.extent,e.spatialReference)||this._applyCorrection()},i._applyCorrection=function(){this.view.state.updateCamera((e=>{e.copyViewFrom(this.desiredCamera),u.applySurfaceCollisionConstraint(this.view,e,u.Mode.EYE_AND_CENTER)||this.constraintEnabled||(this.state=C.State.Stopped)}))},t._createClass(r,[{key:"desiredCamera",set:function(e){this._set("desiredCamera",e.clone())}},{key:"canStop",get:function(){return!0}},{key:"constraintEnabled",get:function(){return this.view.state.constraints.collision.enabled}}]),r}(C.CameraController),r.__decorate([i.property({constructOnly:!0})],e.SurfaceCollisionCorrectionController.prototype,"desiredCamera",null),e.SurfaceCollisionCorrectionController=r.__decorate([l.subclass("esri.views.3d.state.controllers.SurfaceCollisionCorrectionController")],e.SurfaceCollisionCorrectionController),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
