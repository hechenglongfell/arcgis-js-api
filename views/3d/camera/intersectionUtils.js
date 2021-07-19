/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../chunks/vec3","../../../chunks/vec3f64","../../../geometry/projectionEllipsoid","../../../geometry/support/aaBoundingRect","../webgl-engine/lib/Intersector"],(function(e,n,t,r,i,o,a){"use strict";function s(e,t,r,i){return n.isSome(e.renderCoordsHelper.fromRenderCoords(t.eye,p,i))&&o.containsPoint(r,p)}function c(e,t){return e.elevationProvider?n.unwrapOr(e.elevationProvider.getElevation(t[0],t[1],t[2],e.renderCoordsHelper.spatialReference,"ground"),0):0}function l(e,n,r,i){const o=e.state.camera.clone();n&&(o.eye=n,o.center=r,o.up=i),u(e,o.ray,y)||t.copy(y,o.center);const a=e.state.constraints,s=a.minimumPoiDistance;if(t.squaredDistance(o.eye,y)<s){const n=a.collision.enabled;t.copy(v,o.viewForward),t.scale(v,v,s),n?o.eye=t.subtract(p,y,v):t.add(y,o.eye,v);const r=e.renderCoordsHelper,i=r.getAltitude(o.eye),c=a.collision.elevationMargin;n&&i<c&&(t.subtract(v,y,o.eye),o.eye=r.setAltitude(p,c,o.eye),t.add(y,o.eye,v))}return o.center=y,o}function d(e,n,r){if(!e.state.isGlobal)return!1;const i=c(e,n),o=e.stateManager.constraintsManager.nearFarHeuristic,{far:a}=o.compute(n,r,e.dataExtent,i,b),s=a*a;return t.squaredDistance(n,r)>s}function u(e,n,t){let r=f[e.viewingMode];r||(r=new a.Intersector(e.state.viewingMode),r.options.backfacesTerrain=!e.state.isGlobal,r.options.invisibleTerrain=!0,f[e.viewingMode]=r);const{isGlobal:o}=e.state;return!(!e.sceneIntersectionHelper.intersectRay(n,r,t)||d(e,n.origin,t))||(!(!e.renderCoordsHelper.intersectManifold(n,0,t)||d(e,n.origin,t))||!!o&&g(n,t,i.getReferenceEllipsoid(e.spatialReference).radius))}function g(e,n,r){const i=t.dot(e.origin,e.origin)-r*r,o=i>0?Math.sqrt(i)/3:1;return t.scale(n,e.direction,o/t.length(e.direction)),t.add(n,n,e.origin),!0}const f={},p=r.create(),y=r.create(),v=r.create(),b={near:0,far:0};e.cameraOnContentAlongViewDirection=l,e.eyeWithinExtent=s,e.surfaceElevationBelowRenderLocation=c,Object.defineProperty(e,"__esModule",{value:!0})}));
