/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/Point","../cameraUtils","../PropertiesPool","./PointOfInterest"],(function(e,t,r,o,n,a,i,s,c,u,d,l,p,h,y,_){"use strict";const f=Array;e.CameraOnSurface=function(e){function r(r){var o;return(o=e.call(this,r)||this)._dirty=!1,o._propertiesPool=new y.PropertiesPool({location:p,renderLocation:f},t._assertThisInitialized(o)),o._estimatedSurfaceAltitude=0,o._pendingElevationQueryController=null,o.cameraName="camera",o.renderLocation=l.create(),o.tmpPoint=new p,o}t._inheritsLoose(r,e);var a=r.prototype;return a.initialize=function(){if(this.scheduler&&this.handles.add(this.scheduler.registerTask(this.task,this)),this.runTask(),this.map){const e=()=>this._setDirty();this.handles.add(n.on(this.map,"ground.layers","change",e,e,e))}this._updateRenderLocation()},a.destroy=function(){this._cancelPendingRequest(),this._propertiesPool.destroy(),this._propertiesPool=null},a.updateRenderLocation=function(){this._setDirty(),this._updateRenderLocation()},a._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))},a._cancelPendingRequest=function(){const e=this._pendingElevationQueryController;e&&(this._pendingElevationQueryController=null,e.abort(),this.notifyChange("updating"))},a.runTask=function(){if(this._cancelPendingRequest(),this._dirty=!1,this.notifyChange("updating"),!this.map||!this.map.ground)return void this._updateSurfaceAltitude(0);this.renderCoordsHelper.fromRenderCoords(this._camera.eye,this.tmpPoint,this.state.spatialReference);let e=new AbortController;this.map.ground.queryElevation(this.tmpPoint,{signal:e.signal,cache:this.cache}).then((e=>this._updateSurfaceAltitude(e.geometry.z))).catch((e=>{o.isAbortError(e)||this._updateSurfaceAltitude(0)})).catch((()=>{})).then((()=>{this._pendingElevationQueryController===e&&(this._pendingElevationQueryController=null,this.notifyChange("updating")),e=null})),this._pendingElevationQueryController=e},a._updateSurfaceAltitude=function(e){this._estimatedSurfaceAltitude!==e&&(this._estimatedSurfaceAltitude=e,this._updateRenderLocation())},a._updateRenderLocation=function(){this.renderCoordsHelper.setAltitude(m,this._estimatedSurfaceAltitude,this._camera.eye),d.exactEquals(this._get("renderLocation"),m)||this._set("renderLocation",d.copy(this._propertiesPool.get("renderLocation"),m))},t._createClass(r,[{key:"_camera",get:function(){return this.state[this.cameraName]}},{key:"location",get:function(){const e=this._propertiesPool.get("location");return this.renderCoordsHelper.fromRenderCoords(this.renderLocation,e,this.state.spatialReference),e}},{key:"scale",get:function(){const e=this._camera,t=d.distance(e.eye,this.renderLocation),r={renderCoordsHelper:this.renderCoordsHelper,state:{camera:e}};return h.distanceToScale(r,t,0)}},{key:"updating",get:function(){return this._dirty||null!=this._pendingElevationQueryController}},{key:"running",get:function(){return!this._pendingElevationQueryController&&this._dirty}}]),r}(_.PointOfInterest),r.__decorate([a.property({constructOnly:!0})],e.CameraOnSurface.prototype,"scheduler",void 0),r.__decorate([a.property({constructOnly:!0})],e.CameraOnSurface.prototype,"cache",void 0),r.__decorate([a.property({constructOnly:!0})],e.CameraOnSurface.prototype,"task",void 0),r.__decorate([a.property({constructOnly:!0})],e.CameraOnSurface.prototype,"cameraName",void 0),r.__decorate([a.property({readOnly:!0})],e.CameraOnSurface.prototype,"location",null),r.__decorate([a.property({constructOnly:!0})],e.CameraOnSurface.prototype,"map",void 0),r.__decorate([a.property({readOnly:!0})],e.CameraOnSurface.prototype,"renderLocation",void 0),r.__decorate([a.property({readOnly:!0})],e.CameraOnSurface.prototype,"scale",null),r.__decorate([a.property({readOnly:!0})],e.CameraOnSurface.prototype,"updating",null),e.CameraOnSurface=r.__decorate([u.subclass("esri.views.3d.support.CameraOnSurface")],e.CameraOnSurface);const m=l.create(),g=e.CameraOnSurface;e.default=g,Object.defineProperty(e,"__esModule",{value:!0})}));
