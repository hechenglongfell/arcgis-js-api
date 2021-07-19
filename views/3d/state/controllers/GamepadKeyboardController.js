/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/compilerUtils","../../../../core/mathUtils","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projectionEllipsoid","../../../../geometry/support/ray","../../../../chunks/sphere","../../../../geometry/support/vectorStacks","../../camera/constraintUtils","../Constraints","./InteractiveController","../utils/navigationUtils","../utils/viewUtils","../../support/cameraUtils","../../support/cameraUtilsInternal","../../webgl-engine/lib/Camera","../../../navigation/gamepadAndKeyboardUtils"],(function(t,e,a,i,n,o,r,s,c,l,d,p,m,h,u,f,v,y,g,C,b,w,T,S,O,x,M,z){"use strict";t.GamepadKeyboardController=function(t){function a(e){var a;return(a=t.call(this,e)||this).transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0},a.keysButtonState=[0,0,0,0,0,0,0,0,0,0,0,0],a.tmpCamera=new M,a.constraintOptions={selection:15,interactionType:0,interactionStartCamera:new M,interactionFactor:0,interactionDirection:null,tiltMode:1},a}e._inheritsLoose(a,t);var r=a.prototype;return r.handleEventGamepad=function(t){const e=z.extractTransformation(t,this.view.navigation.gamepad,this.transformation);("end"===t.action||z.isZeroTransformation(e))&&this.finishController()},r.activateDirection=function(t){this.keysButtonState[t]=1,z.extractTransformationKeyboard(this.keysButtonState,this.transformation)},r.deactivateDirection=function(t){this.keysButtonState[t]=0;const e=z.extractTransformationKeyboard(this.keysButtonState,this.transformation);z.isZeroTransformation(e)&&this.finishController()},r.onControllerStart=function(e){this.filteredSurfaceElevation=this.view.pointsOfInterest.cameraOnSurface.location.z,this.headingStart=this.view.camera.heading,t.prototype.onControllerStart.call(this,e)},r.updateFilteredSurfaceElevation=function(t){const e=this.view.pointsOfInterest.cameraOnSurface.location.z,a=1;this.filteredSurfaceElevation+=a*(e-this.filteredSurfaceElevation)*t},r.stepController=function(e,a){this.updateStartHeading(),this.updateFilteredSurfaceElevation(e),this.currentCamera.copyViewFrom(a),this.updateCameraCenter(),this.constraintOptions.interactionStartCamera.copyFrom(this.currentCamera),this.calculateControlTransformation(e,this.currentCamera,U),this.applyDisabledMovementTypes(U),this.applyPan(U.pan),this.applyRotate(U.rotate),this.applyZoom(U.zoom),this.applyAscend(U.ascend),this.constraintOptions.interactionType=0,this.constraintOptions.selection=8,C.applyAll(this.view,this.currentCamera,this.constraintOptions),t.prototype.stepController.call(this,e,a)},r.updateStartHeading=function(){0!==this.transformation.heading&&(this.headingStart=this.view.camera.heading)},r.applyRotate=function(t){if(!t.enabled)return;const e=this.currentCamera;h.subtract(_,e.center,e.eye),h.transformMat4(_,_,t.matrix),e.center=h.add(_,_,e.eye),e.up=h.transformMat4(_,e.up,t.matrix),this.constraintOptions.interactionType=3,this.constraintOptions.selection=7,C.applyAll(this.view,e,this.constraintOptions)},r.applyPan=function(t,e=this.currentCamera){if(!t.enabled)return;e.eye=h.transformMat4(_,e.eye,t.matrix),e.center=h.transformMat4(_,e.center,t.matrix);this.view.state.isGlobal&&(e.up=h.transformMat4(_,e.up,t.matrix)),this.constraintOptions.interactionType=4,this.constraintOptions.selection=15,C.applyAll(this.view,e,this.constraintOptions)},r.applyZoom=function(t){if(!t)return;const e=this.currentCamera.viewForward;this.currentCamera.eye=h.add(_,this.currentCamera.eye,h.scale(g.sv3d.get(),e,t)),h.copy(F,e),h.negate(F,F),this.constraintOptions.interactionDirection=F,this.constraintOptions.interactionType=1,this.constraintOptions.selection=7,C.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null},r.applyAscend=function(t){if(!t)return;const e=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,g.sv3d.get());this.constraintOptions.interactionDirection=h.copy(F,e);if(this.view.state.isGlobal){const e=h.length(this.currentCamera.eye),a=(e+t)/e;this.currentCamera.eye=h.scale(_,this.currentCamera.eye,a),this.currentCamera.center=h.scale(_,this.currentCamera.center,a)}else{const a=h.scale(g.sv3d.get(),e,t);this.currentCamera.eye=h.add(_,this.currentCamera.eye,a),this.currentCamera.center=h.add(_,this.currentCamera.center,a)}this.updateCameraCenter(),this.constraintOptions.interactionType=5,this.constraintOptions.selection=8,C.applyAll(this.view,this.currentCamera,this.constraintOptions)&&this.updateCameraCenter(),this.constraintOptions.selection=7,C.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=null},r.calculateControlTransformation=function(t,e,a){P(a);const i=this.computeVelocities(t);this.view.state.isLocal?this.calculateControlTransformationLocal(i,e,a):this.calculateControlTransformationGlobal(i,e,a)},r.updateCameraCenter=function(){const t=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,e=this.view.renderCoordsHelper,a=this.currentCamera.ray;this.currentCamera.center=e.intersectManifoldClosestSilhouette(a,t,_)},r.calculateControlTransformationLocal=function(t,e,a){const{viewRight:o,viewForward:r}=e,s=this.transformation,c=this.view.navigation.gamepad,l=h.set(g.sv3d.get(),r[0],r[1],0);h.normalize(l,l);const d=s.translation[0]*t.pan;if(0!==d){const t=h.scale(g.sv3d.get(),o,d);p.translate(a.pan.matrix,a.pan.matrix,t),a.pan.enabled=!0}switch(c.mode){case"pan":{const e=-s.translation[1]*t.pan;if(0!==e){const t=h.scale(g.sv3d.get(),l,e);p.translate(a.pan.matrix,a.pan.matrix,t),a.pan.enabled=!0}a.zoom=s.zoom*t.zoom;break}case"zoom":a.zoom=(-s.translation[1]+s.zoom)*t.zoom;break;default:i.neverReached(c.mode)}const m=s.translation[2]*t.ascend;a.ascend=m;const u=-s.heading*t.rotate;0!==u&&(p.rotate(a.rotate.matrix,a.rotate.matrix,u,this.view.renderCoordsHelper.worldUpAtPosition(e.eye,g.sv3d.get())),a.rotate.enabled=!0);const f=s.tilt*t.rotate,v=S.viewAngle(this.view.renderCoordsHelper,e.center,e.eye),y=n.clamp(v+f,b.TiltDefault.min,b.TiltDefault.max)-v;y&&(p.rotate(a.rotate.matrix,a.rotate.matrix,y,o),a.rotate.enabled=!0)},r.calculateControlTransformationGlobal=function(t,e,a){const{eye:i,viewRight:n}=e,o=this.transformation,r=this.view.navigation.gamepad,s=h.cross(g.sv3d.get(),n,i);h.normalize(s,s),h.negate(s,s),T.panMotionToRotationMatrix(this.startCamera,e,o,t,this.view.camera.heading,this.headingStart,this.view.camera.tilt,a,r),this.tmpCamera.copyFrom(this.currentCamera),this.applyPan(U.pan,this.tmpCamera);const c=this.view.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,l=o.translation[2]*t.ascend;a.ascend=l;const d=-o.heading*t.rotate;0!==d&&(p.rotate(a.rotate.matrix,a.rotate.matrix,d,this.tmpCamera.eye),a.rotate.enabled=!0);const m=o.tilt*t.rotate,u=this.clampTiltDeltaGlobalToValidRange(m,e.ray,c);0!==u&&(p.rotate(a.rotate.matrix,a.rotate.matrix,u,this.tmpCamera.viewRight),a.rotate.enabled=!0),a.zoom+=o.zoom*t.zoom},r.clampTiltDeltaGlobalToValidRange=function(t,e,a){const i=f.getReferenceEllipsoid(this.view.spatialReference),o=T.onSurfaceTiltToEyeTiltGlobal(b.TiltDefault.min,e.origin,a,i);let r=0,s=0;const c=g.sv3d.get();if(this.view.renderCoordsHelper.intersectManifold(e,a,c)){const t=S.viewAngle(this.view.renderCoordsHelper,c,e.origin);r=T.onSurfaceTiltToEyeTiltGlobal(t,e.origin,a,i),s=T.onSurfaceTiltToEyeTiltGlobal(b.TiltDefault.max,e.origin,a,i)}else{y.closestPointOnSilhouette(y.fromRadius(a+i.radius),e,c);const t=n.acosClamped(-h.dot(e.direction,h.normalize(c,c)));r=T.offSurfaceTiltToEyeTiltGlobal(t,e.origin,a,i),s=T.offSurfaceTiltToEyeTiltGlobal(b.TiltDefault.max,e.origin,a,i)}return n.clamp(r+t,o,s)-r},r.getPointAbsoluteSurfaceElevation=function(t,e,a){const{renderCoordsHelper:i}=this.view,n=i.getAltitude(t),o=e+Math.abs(n-e);return i.setAltitude(a,o,t),o},r.clampedDistanceToSurface=function(t,e){const{renderCoordsHelper:a}=this.view,{camera:i}=this.view.state,{direction:n}=O.headingTiltToDirectionUp(this.view,e,0,D,K),o=a.intersectManifoldClosestSilhouette(v.wrap(e,n),t,g.sv3d.get()),r=h.distance(e,o),s=a.intersectManifoldClosestSilhouette(v.wrap(e,h.direction(g.sv3d.get(),e,i.center)),t,g.sv3d.get()),c=h.distance(e,s);return Math.min(r,c)},r.computeHeadingRotateRadius=function(t){const{renderCoordsHelper:e,state:a}=this.view,{camera:i,isGlobal:o}=a,r=e.intersectManifoldClosestSilhouette(i.ray,this.filteredSurfaceElevation,g.sv3d.get());if(o){const e=h.subtract(g.sv3d.get(),t,r),a=h.length(e);h.scale(e,e,1/a);const i=h.normalize(g.sv3d.get(),t),o=n.acosClamped(h.dot(i,e));return a*Math.sin(Math.min(G,o))}{const a=h.copy(g.sv3d.get(),t);return e.setAltitude(a,this.filteredSurfaceElevation),h.distance(r,a)}},r.minimumAscendVelocity=function(){return this.view.state.constraints.collision.enabled?0:R},r.computeVelocities=function(t){const e=this.filteredSurfaceElevation,a=e+f.getReferenceEllipsoid(this.view.spatialReference).radius,{camera:i,isGlobal:o}=this.view.state,r=g.sv3d.get(),s=this.getPointAbsoluteSurfaceElevation(i.eye,e,r),c=this.clampedDistanceToSurface(e,r),l=i.width/2,d=E*i.width,p=E*i.width,m=c*Math.tan(.5*i.fovX)/l,h=m/a,u=m/this.computeHeadingRotateRadius(r),v=s-e;return{pan:(o?h:m)*d*t,ascend:Math.max(this.minimumAscendVelocity()*t,2**(d*t/l)*v-v),zoom:2**(d*t/l)*c-c,rotate:n.clamp(u*p,k,H)*t}},r.applyDisabledMovementTypes=function(t){!o.isSome(this.disableMovements)||void 0!==this.disableMovements.mode&&this.view.state.viewingMode!==this.disableMovements.mode||(t.zoom=this.disableMovements.zoom?0:t.zoom,t.ascend=this.disableMovements.ascend?0:t.ascend,t.pan.enabled=!this.disableMovements.pan,this.disableMovements.pan&&p.identity(t.pan.matrix),t.rotate.enabled=!this.disableMovements.rotate,this.disableMovements.rotate&&p.identity(t.rotate.matrix))},a.activatesFor=function(t,e){const a=z.extractTransformation(e,t.navigation.gamepad,A);return!("end"===e.action||z.isZeroTransformation(a))},a}(w.InteractiveController),a.__decorate([r.property({constructOnly:!0})],t.GamepadKeyboardController.prototype,"view",void 0),a.__decorate([r.property({constructOnly:!0})],t.GamepadKeyboardController.prototype,"gamepadDevice",void 0),a.__decorate([r.property({constructOnly:!0})],t.GamepadKeyboardController.prototype,"disableMovements",void 0),t.GamepadKeyboardController=a.__decorate([d.subclass("esri.views.3d.state.controllers.GamepadKeyboardController")],t.GamepadKeyboardController);const A={translation:[0,0,0],heading:0,tilt:0,zoom:0},D=80,G=n.deg2rad(D),E=.75,R=5,k=n.deg2rad(30),H=n.deg2rad(80),U={zoom:0,ascend:0,pan:{enabled:!1,matrix:m.create()},rotate:{enabled:!1,matrix:m.create()}},_=u.create(),F=u.create(),K=x.createDirectionUp();function P(t){t.zoom=0,t.ascend=0,t.pan.enabled=!1,p.identity(t.pan.matrix),t.rotate.enabled=!1,p.identity(t.rotate.matrix)}Object.defineProperty(t,"__esModule",{value:!0})}));
