/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/Error","../../../../../core/has","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/vec2","../../../../../chunks/vec2f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/ellipsoidUtils","../../../../../geometry/support/axisAngle","../../../../../chunks/sphere","../../../camera/constraintUtils","../../../camera/constraintUtils/ConstraintTypes","../../../camera/constraintUtils/InteractionType","../../../camera/constraintUtils/surfaceCollision","../../../camera/constraintUtils/TiltMode","../InteractiveController","../../utils/navigationUtils","../../../support/geometryUtils/ray"],(function(t,e,i,r,a,n,s,o,c,h,l,m,p,_,u,d,C,P,y,g,v,R,k,A,f,M,S){"use strict";t.ZoomController=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._pickPoint=d.create(),e._tmpP0=_.create(),e._panAxisAngle=P.create(),e._tmpRayDir=d.create(),e._tmpRayDirPick=d.create(),e._targetOnSphere=d.create(),e._navMode=M.NavigationMode.Horizontal,e._tmpRay={origin:d.create(),direction:d.create()},e.dragBeginPoint=n.createScreenPointArray(),e._normalizedAnchorPoint=_.create(),e._constraintOptions={selection:v.ConstraintTypes.ALL_EXCEPT_COLLISION,interactionType:R.InteractionType.ZOOM,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:A.TiltMode.TUMBLE},e._sphere=y.create(),e._hasPickPoint=!1,e}e._inheritsLoose(i,t);var s=i.prototype;return s.begin=function(t){if(!this.active)return;p.copy(this.dragBeginPoint,t),M.normalizeCoordinate(this.startCamera,t,this._normalizedAnchorPoint);const e=C.getReferenceEllipsoid(this.view.spatialReference),i=M.pickPointAndInitSphere(this._intersectionHelper,this.startCamera,t,e,M.SpherePickPointFallback.Ellipsoid,0===this.view.map.ground.opacity?M.contentIntersectorOptions:{});if(this._navMode=M.decideNavigationMode(this.startCamera,t,e),this._navMode===M.NavigationMode.Horizontal)this._hasPickPoint=!!i.scenePickPoint,this._pickPoint=a.unwrapOr(i.scenePickPoint,this._pickPoint),this._sphere=i.sphere;else{let e;S.fromScreenAtEye(this.startCamera,t,this._tmpRay),u.normalize(this._tmpRay.direction,this._tmpRay.direction),a.isSome(i.scenePickPoint)&&(u.subtract(this._tmpRayDirPick,this.startCamera.eye,i.scenePickPoint),e=u.length(this._tmpRayDirPick));const n=Math.abs(this.view.camera.position.z);this.view.renderCoordsHelper.worldUpAtPosition(this.startCamera.eye,E);let s=r.clamp(Math.min(M.PIVOT_DISTANCE_MODIFIER,1/Math.abs(u.dot(E,this._tmpRay.direction)))*n,M.DISTANCE_CLAMP_VALUES[0],M.DISTANCE_CLAMP_VALUES[1]);const o=this.view._stage.renderView.getMinimalDepthForArea(null,t[0],t[1],this.view.state.camera,M.SCREEN_PIXEL_AREA);s=a.isSome(o)?o:s,s=null!=e?Math.min(s,e):s,this._hasPickPoint=!0,u.scale(this._tmpRay.direction,this._tmpRay.direction,s),u.add(this._pickPoint,this._tmpRay.origin,this._tmpRay.direction)}this._constraintOptions.interactionStartCamera=this.startCamera},s.update=function(t){if(this.active){if(this.currentCamera.eye=this.startCamera.eye,this.currentCamera.center=this.startCamera.center,this.currentCamera.up=this.startCamera.up,this._navMode===M.NavigationMode.Horizontal){u.subtract(this._tmpRayDir,this.currentCamera.center,this.currentCamera.eye);const e=u.length(this._tmpRayDir);M.normalizeCoordinate(this.currentCamera,t,this._tmpP0);const i=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]);let r=e*2**i;const a=this.view.state.constraints.minimumPoiDistance;if(i<0&&r<a&&(r=a),Math.abs(e-r)<1e-6)return;if(this._hasPickPoint&&r<e){const t=1-(1-r/e)*(1-this._sphere[3]/u.length(this.currentCamera.center));this.currentCamera.center=u.scale(D,this.currentCamera.center,t)}u.scale(this._tmpRayDir,this._tmpRayDir,-r/e),this.currentCamera.eye=u.add(D,this.currentCamera.center,this._tmpRayDir),this._constraintOptions.interactionFactor=g.pixelDistanceToInteractionFactor(p.distance(this.dragBeginPoint,t)),g.applyAll(this.view,this.currentCamera,this._constraintOptions),this._hasPickPoint&&(M.sphereOrPlanePointFromScreenPoint(this._sphere,this.currentCamera,this.dragBeginPoint,this._targetOnSphere),P.fromPoints(this._pickPoint,this._targetOnSphere,this._panAxisAngle),M.applyRotation(this.currentCamera,this._sphere,this._panAxisAngle))}else{const e=u.length(this._tmpRay.direction);M.normalizeCoordinate(this.currentCamera,t,this._tmpP0);const i=12*(this._normalizedAnchorPoint[1]-this._tmpP0[1]);let r=e*2**i;const a=this.view.state.constraints.minimumPoiDistance;if(i<0&&r<a&&(r=a),Math.abs(e-r)<1e-6)return;u.scale(this._tmpRayDir,this._tmpRay.direction,1-r/e),this.currentCamera.eye=u.add(D,this.currentCamera.eye,this._tmpRayDir),this.currentCamera.center=u.add(D,this.currentCamera.center,this._tmpRayDir)}k.applySurfaceCollisionConstraint(this.view,this.currentCamera),this.commitCamera()}},s.end=function(){this.active&&this.finishController()},e._createClass(i,[{key:"_intersectionHelper",get:function(){return this.view.sceneIntersectionHelper}}]),i}(f.InteractiveController),t.ZoomController=i.__decorate([m.subclass("esri.views.3d.state.controllers.global.ZoomController")],t.ZoomController);const D=d.create(),E=d.create();Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
