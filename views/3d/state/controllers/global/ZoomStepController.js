/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/time","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/Logger","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/projectionEllipsoid","../../../../../chunks/sphere","../../../camera/constraintUtils","../PointToPointAnimationController","../../utils/navigationUtils","../../../support/geometryUtils/ray","../../../support/geometryUtils/sphere","../../../webgl-engine/lib/Camera","../../../webgl-engine/lib/Intersector","../../../../animation/easing","../../../camera/constraintUtils/surfaceCollision"],(function(t,e,i,r,n,o,s,a,c,h,p,l,m,u,d,y,g,C,w,v,f,D){"use strict";const S=.6,b=4,R=12,M=60,z=20;t.ZoomStepController=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).zoomLocation=p.create(),e.tmpCamera=new w,e.tmpViewDir=p.create(),e.tmpRayDir={origin:p.create(),direction:p.create()},e.targetOnSphere=p.create(),e.tmpCenter=p.create(),e.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new w,interactionDirection:null,tiltMode:0},e.sphere=m.create(),e}e._inheritsLoose(i,t);var o=i.prototype;return o.initialize=function(){this.intersector=new v.Intersector(this.view.state.viewingMode)},o.zoomStep=function(t,e){if(!this.active)return;const i=this.view.state,{interactionStartCamera:r}=this.constraintOptions;this.animation.finished?r.copyFrom(i.camera):this.animation.cameraAt(1,r);let n=!1,o=!1;this.intersectionHelper.intersectScreen(e,this.zoomLocation)&&(n=t>0,o=!0),this.tmpCamera.copyFrom(i.camera),n?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:h.copy(this.zoomLocation,this.tmpCamera.center),this.updateCamera(this.tmpCamera,t,this.zoomLocation,e,o),this.begin(this.tmpCamera)},o.animationSettings=function(){return{apex:null,duration:n.Milliseconds(600),easing:f.outExpo}},o.updateCamera=function(t,e,i,n,o){const s=l.getReferenceEllipsoid(this.view.spatialReference);if(y.decideNavigationMode(t,n,o,s)===y.NavigationMode.Horizontal||r("disable-feature:context-navigation")){let r=S**e;this.sphere[3]=h.length(i),h.subtract(this.tmpViewDir,t.center,t.eye);const o=h.length(this.tmpViewDir);let s=o*r;if(r<=1&&s<b&&(s=b,r=s/o),Math.abs(o-s)<1e-6)return;const a=h.length(t.center);if(this.sphere[3]!==a){const e=this.sphere[3]+r*(a-this.sphere[3]);t.center=h.scale(L,t.center,e/a)}h.scale(this.tmpViewDir,this.tmpViewDir,-r),t.eye=h.add(L,t.center,this.tmpViewDir),u.applyAll(this.view,t,this.constraintOptions),h.squaredDistance(i,t.center)>1e-12&&C.intersectScreen(this.sphere,t,n,this.targetOnSphere)&&y.panToPosition(this.sphere,t,i,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0)}else{let r=S**Math.abs(e);const o=e>0?1:-1;let s;g.fromScreenAtEye(t,n,this.tmpRayDir),h.normalize(this.tmpRayDir.direction,this.tmpRayDir.direction),this.view.camera.position.hasZ&&(s=Math.abs(this.view.camera.position.z));let a=Math.max(R*s,z);const c=this.view._stage.renderView.getMinimalDepthForArea(n[0],n[1],this.view.state.camera,M);a=a>c?c:a,h.scale(this.tmpRayDir.direction,this.tmpRayDir.direction,a),h.add(i,this.tmpRayDir.origin,this.tmpRayDir.direction);let p=a*r;if(e>0&&p<b&&(p=b,r=p/a),Math.abs(a-p)<1e-6)return;h.scale(this.tmpRayDir.direction,this.tmpRayDir.direction,o*(1-r)),t.eye=h.add(L,t.eye,this.tmpRayDir.direction),t.center=h.add(L,t.center,this.tmpRayDir.direction)}D.applySurfaceCollisionConstraint(this.view,t)},i}(d.PointToPointAnimationController),t.ZoomStepController=i.__decorate([c.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],t.ZoomStepController);const L=p.create();Object.defineProperty(t,"__esModule",{value:!0})}));
