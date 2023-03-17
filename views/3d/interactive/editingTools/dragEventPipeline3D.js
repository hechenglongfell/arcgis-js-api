/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../geometry/support/plane","../../../../geometry/support/ray","../../../../geometry/support/vector","../../../../geometry/support/vectorStacks","../../../../support/elevationInfoUtils","../../support/geometryUtils/ray","../../webgl-engine/lib/Intersector","../../webgl-engine/lib/IntersectorInterfaces","../../webgl-engine/lib/verticalOffsetUtils","../../../interactive/dragEventPipeline"],(function(e,r,n,t,o,c,s,a,i,l,u,p,d,f,m,S){"use strict";function y(e,r){return T(e,(()=>r))}function g(e){return T(e,(e=>e.plane))}function T(e,t){const c=o.create(),a=o.create();let i=!1;return o=>{const u=t(o);if("start"===o.action){const t=n.screenPointObjectToArray(o.screenStart,n.castScreenPointArray(l.sv2d.get())),a=p.fromScreen(e.state.camera,t,U);r.isSome(a)&&(i=s.intersectRay(u,a,c))}if(!i)return null;const d=n.screenPointObjectToArray(o.screenEnd,n.castScreenPointArray(l.sv2d.get())),f=p.fromScreen(e.state.camera,d,U);return r.isNone(f)?null:s.intersectRay(u,f,a)?{...o,renderStart:c,renderEnd:a,plane:u,ray:f}:null}}function E(e,t,o=0,s=null,a=null){let i=null;return l=>{if("start"===l.action&&(i=e.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(l.screenStart.x,l.screenStart.y),t,o,a),r.isSome(i)&&r.isSome(s)&&!c.projectPoint(i,i,s)))return null;if(r.isNone(i))return null;const u=e.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(l.screenEnd.x,l.screenEnd.y),t,o,a);return r.isSome(u)?r.isSome(s)&&!c.projectPoint(u,u,s)?null:{...l,mapStart:i,mapEnd:u}:null}}function v(e,r,n,t=null,o=null){return E(e,n,u.getZForElevationMode(r,e,n),t,o)}function R(e,r,n,t=null,o=null){return v(e,n,u.getGraphicEffectiveElevationInfo(r),t,o)}function P(e,n,t,o){const c=n.toMap(e.screenStart,{include:[t]});return r.isSome(c)?R(n,t,c,o):null}function b(e,r){const n=w,o=N,c=s.create();e.renderCoordsHelper.worldUpAtPosition(r,n);const a=t.cross(c,n,t.subtract(o,r,e.state.camera.eye));return t.cross(a,a,n),s.fromPositionAndNormal(r,a,c)}function I(e,r,n){let t=null;const o=new S.EventPipeline;return o.next(y(e,b(e,r))).next(A(e,r)).next(M(e,n)).next((e=>{e.mapEnd.x=e.mapStart.x,e.mapEnd.y=e.mapStart.y,t=e})),e=>(t=null,o.execute(e),t)}function A(e,r){const n=o.create(),c=t.length(r);e.renderCoordsHelper.worldUpAtPosition(r,n);const s=o.create(),a=o.create(),l=o=>{if(t.subtract(o,o,r),i.projectPoint(n,o,o),"global"===e.viewingMode){t.length(o)*Math.sign(t.dot(n,o))<.001-c&&t.subtract(o,t.scale(o,n,.001),r)}return t.add(o,o,r),o};return e=>(e.renderStart=l(t.copy(s,e.renderStart)),e.renderEnd=l(t.copy(a,e.renderEnd)),e)}function M(e,n){const t=e.renderCoordsHelper;return e=>{const o=t.fromRenderCoords(e.renderStart,n),c=t.fromRenderCoords(e.renderEnd,n);return r.isSome(o)&&r.isSome(c)?{...e,mapStart:o,mapEnd:c}:null}}var x;function O(e){let n=null;return t=>{switch(t.action){case"start":n=e.disableDisplay();break;case"end":case"cancel":r.isSome(n)&&(n.remove(),n=null)}return t}}function h(t,c=null){const s=d.newIntersector(t.state.viewingMode);s.options.selectionMode=!0,s.options.store=f.StoreResults.MIN,s.options.hud=!1;const a=n.createScreenPointArray(),i={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},l=o.create(),u=r.unwrapOr(c,t.spatialReference),p=r=>{t.map.ground&&t.map.ground.opacity<1?i.exclude.add(m.TERRAIN_ID):i.exclude.delete(m.TERRAIN_ID),t.sceneIntersectionHelper.intersectIntersectorScreen(n.screenPointObjectToArray(r,a),s,i);const o=s.results.min;let c;if(o.getIntersectionPoint(l))c=o.intersector===f.IntersectorType.TERRAIN?e.SurfaceType.GROUND:e.SurfaceType.OTHER;else{if(!s.results.ground.getIntersectionPoint(l))return null;c=e.SurfaceType.GROUND}return{location:t.renderCoordsHelper.fromRenderCoords(l,u),surfaceType:c}};let S;return e=>{if("start"===e.action){const n=p(e.screenStart);S=r.isSome(n)?n.location:null}if(r.isNone(S))return null;const n=p(e.screenEnd);return r.isSome(n)&&r.isSome(n.location)?{...e,mapStart:S,mapEnd:n.location,surfaceType:n.surfaceType}:null}}e.SurfaceType=void 0,(x=e.SurfaceType||(e.SurfaceType={}))[x.GROUND=0]="GROUND",x[x.OTHER=1]="OTHER";const w=o.create(),N=o.create(),U=a.create();e.convertToMapCoordinates=M,e.hideManipulatorWhileDragging=O,e.projectToWorldUp=A,e.screenToMap3D=h,e.screenToMapXYAtLocation=v,e.screenToMapXYForGraphic=P,e.screenToMapXYForGraphicAtLocation=R,e.screenToRenderPlane=y,e.screenToRenderPlaneFromEvent=g,e.screenToZConstrained=I,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
