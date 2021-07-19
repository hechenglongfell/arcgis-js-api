/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/Logger","../../core/mathUtils","../../core/maybe","../../chunks/mat4","../../chunks/vec3","../../chunks/vec3f64","../../chunks/vec4","../../chunks/vec4f64","./ray","./vector","./vectorStacks","../../chunks/sphere"],(function(e,t,s,o,c,i,a,r,n,u,l,d,h,R){"use strict";e.altitudeAt=R.altitudeAt,e.angleToSilhouette=R.angleToSilhouette,e.axisAt=R.axisAt,e.clear=R.clear,e.closestPoint=R.closestPoint,e.closestPointOnSilhouette=R.closestPointOnSilhouette,e.copy=R.copy,e.create=R.create,e.distanceToSilhouette=R.distanceToSilhouette,e.elevate=R.elevate,e.fromCenterAndRadius=R.fromCenterAndRadius,e.fromRadius=R.fromRadius,e.fromValues=R.fromValues,e.getCenter=R.getCenter,e.getRadius=R.getRadius,e.intersectRay=R.intersectRay,e.intersectRayClosestSilhouette=R.intersectRayClosestSilhouette,e.intersectsRay=R.intersectsRay,e.projectPoint=R.projectPoint,e.setAltitudeAt=R.setAltitudeAt,e.setExtent=R.setExtent,e.wrap=R.wrap,Object.defineProperty(e,"__esModule",{value:!0})}));
