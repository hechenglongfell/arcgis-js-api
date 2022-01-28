/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../core/mathUtils","./mat4","./mat4f64","./vec3","./vec3f64","../geometry/Extent","../geometry/projection","../views/3d/support/cameraUtilsInternal"],(function(e,t,o,r,i,n,a,c,l){"use strict";const T=n.fromValues(0,1,0),d=n.fromValues(0,0,1),s=r.create(),u=n.create(),p=n.create();function f(e,r,n,a=l.createDirectionUp()){o.identity(s);const{direction:c,up:u}=a;return o.rotateZ(s,s,-t.deg2rad(r)),o.rotateX(s,s,t.deg2rad(n)),i.transformMat4(c,d,s),i.scale(c,c,-1),i.transformMat4(u,T,s),a}function m(e,t,o,r){return l.directionToHeadingTilt(t,o,r,d,T)}function g(e,t,o,r){const a=f(e,o,r),c=n.create();return i.scale(c,a.direction,-t),i.add(c,c,e),{up:a.up,eye:c,heading:o,tilt:r}}function y(e){return t.rad2deg(e)}function x(e){return t.deg2rad(e)}function V(e,t,o,r,i){const n=e.renderSpatialReference,l=e.map&&e.spatialReference||t.spatialReference;return c.projectPointToVector(t,u,n),c.projectPointToVector(t,p,n),u[0]-=o/2,p[0]+=o/2,u[1]-=r/2,p[1]+=r/2,c.projectVectorToVector(u,n,u,l),c.projectVectorToVector(p,n,p,l),i?(i.xmin=u[0],i.ymin=u[1],i.xmax=p[0],i.ymax=p[1],i.spatialReference=l):i=new a(u[0],u[1],p[0],p[1],l),i}const h=Object.freeze({__proto__:null,headingTiltToDirectionUp:f,directionToHeadingTilt:m,eyeForCenterWithHeadingTilt:g,lookAtTiltToEyeTilt:y,eyeTiltToLookAtTilt:x,toExtent:V});e.cameraUtilsPlanar=h,e.directionToHeadingTilt=m,e.eyeForCenterWithHeadingTilt=g,e.eyeTiltToLookAtTilt=x,e.headingTiltToDirectionUp=f,e.lookAtTiltToEyeTilt=y,e.toExtent=V}));
