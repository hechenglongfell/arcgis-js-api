/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../core/mathUtils","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../ViewingMode","../../support/mathUtils"],(function(t,e,i,n,o,s,a){"use strict";const c=o.create(),r=o.create(),h=o.create(),p=o.create(),l=o.create(),d=o.create(),u={upward:o.fromValues(0,0,1),forward:o.fromValues(0,1,0),sideway:o.fromValues(1,0,0)},m=i.create();return function(){function w(t=s.ViewingMode.Global){this.viewingMode=t,this.center=o.create(),this.pitch=0,this.yaw=0,this.distance=0,this.lookAtDirection=o.clone(u.forward)}var y=w.prototype;return y.pixelsPerPanAtZoom=function(t){return this.size/2/(this._zoomToPanScale*t)},y.zoomAtPixelsPerPan=function(t){return this.size/2/(this._zoomToPanScale*t)},y.pixelsPerRotateAtZoom=function(){const t=Math.max(Math.cos(Math.abs(this.pitch)),.5);return this.size/2/t},y.compareTo=function(t,e){if(e||(e={pan:0,rotate:0,sourceZoom:0,targetZoom:0}),this.viewingMode===s.ViewingMode.Global){const i=(n.length(this.center)+n.length(t.center))/2;e.pan=a.angle(this.center,t.center)*i}else e.pan=n.distance(this.center,t.center);let i=Math.abs(t.yaw-this.yaw);i>=Math.PI&&(i=2*Math.PI-i);const o=Math.abs(t.pitch-this.pitch);return e.rotate=Math.max(i,o),e.sourceZoom=this.distance,e.targetZoom=t.distance,e},y.interpolate=function(e,i,o){this.viewingMode===s.ViewingMode.Global?a.slerp(e.center,i.center,o.pan,this.center):n.lerp(this.center,e.center,i.center,o.pan),this.distance=isFinite(i.distance)?t.lerp(e.distance,i.distance,o.zoom):e.distance,this.pitch=t.lerp(e.pitch,i.pitch,o.rotate);let c=e.yaw;const r=i.yaw;Math.abs(r-c)>=Math.PI&&(c+=2*(c<r?1:-1)*Math.PI),this.yaw=t.lerp(c,r,o.rotate)},y.copyFrom=function(t){n.copy(this.center,t.center),this.pitch=t.pitch,this.yaw=t.yaw,this.distance=t.distance,n.copy(this.lookAtDirection,t.lookAtDirection),this.size=t.size,this.copyFromCommon(t),this.viewingMode=t.viewingMode},y.copyFromRenderCamera=function(t){const e=this._lookAtOrientation(t.center,m);n.copy(this.center,t.center),n.subtract(p,t.center,t.eye),n.transformMat3(p,p,e),n.transformMat3(l,t.up,e),this.distance=n.length(p),0!==this.distance&&(p[0]/=this.distance,p[1]/=this.distance,p[2]/=this.distance),this.pitch=this._eyeUpToPitch(p),this.yaw=this._eyeUpToYaw(p,l),this.size=Math.sqrt(t.width*t.width+t.height*t.height),this.copyFromCommon(t)},y.copyFromCommon=function(t){this.fov=t.fov,this._zoomToPanScale=Math.atan(.5*this.fov)},y.copyToRenderCamera=function(t){const i=this._lookAtOrientation(this.center,m);e.transpose(i,i),this._axisAngleVec3(u.sideway,this.pitch-Math.PI/2,u.forward,p),this._axisAngleVec3(u.upward,this.yaw,p),this._axisAngleVec3(u.sideway,this.pitch-Math.PI/2,u.upward,l),this._axisAngleVec3(u.upward,this.yaw,l),n.scale(p,p,this.distance),n.transformMat3(p,p,i),n.transformMat3(l,l,i),t.center=this.center,t.eye=n.subtract(p,this.center,p),t.up=l},y._axisAngleVec3=function(t,e,i,o=i){const s=Math.cos(e),a=Math.sin(e);return n.scale(c,i,s),n.cross(r,t,i),n.scale(r,r,a),n.scale(h,t,(1-s)*n.dot(t,i)),n.add(o,n.add(o,c,r),h)},y._lookAtOrientation=function(t,e=i.create()){return this._upAtLookAt(t,h),n.cross(c,this.lookAtDirection,h),n.normalize(c,c),0===c[0]&&0===c[1]&&0===c[2]&&n.copy(c,u.sideway),n.cross(r,h,c),n.normalize(r,r),e[0]=c[0],e[1]=r[0],e[2]=h[0],e[3]=c[1],e[4]=r[1],e[5]=h[1],e[6]=c[2],e[7]=r[2],e[8]=h[2],e},y._upAtLookAt=function(t,e){return this.viewingMode===s.ViewingMode.Local?n.copy(e,u.upward):n.normalize(e,t)},y._eyeUpToPitch=function(t){return Math.PI-a.angle(u.upward,t)},y._eyeUpToYaw=function(t,e){const i=d;return Math.abs(e[2])<.5?(n.copy(i,e),t[2]>0&&n.scale(i,i,-1)):n.copy(i,t),n.cross(r,i,u.upward),n.normalize(r,r),a.angle(u.sideway,r,u.upward)},w}()}));
