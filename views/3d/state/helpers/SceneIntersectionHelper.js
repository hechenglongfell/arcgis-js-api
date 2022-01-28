/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../core/PooledArray","../../../../core/screenUtils","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/ray","../../../../geometry/support/vectorStacks","../../support/geometryUtils/ray","../../webgl-engine/lib/Intersector","../../webgl-engine/lib/intersectorUtils"],(function(e,t,n,r,i,s,o,a,c,l,d){"use strict";let u,h=function(){function e(e,t,r){this.viewingMode=e,this._forEachLayer=t,this.view=r,this.externalIntersectionHandlers=new n,this.tolerance=l.DEFAULT_TOLERANCE,this.tmpRay=o.create(),this.validateHUDIntersector=l.newIntersector(this.viewingMode),this.validateHUDIntersector.options.hud=!1}var s=e.prototype;return s.intersectScreen=function(e,t){return this.intersectRay(this._getPickRay(e,this.tmpRay),y(this.viewingMode),t)},s.intersectScreenFreePointFallback=function(e,t){return this.intersectRayFreePointFallback(this._getPickRay(e,this.tmpRay),t)},s.intersectRayFreePointFallback=function(e,t){return this.intersectRay(e,y(this.viewingMode),t)||this._intersectRayFreePointLocal(e,t)},s.intersectRay=function(e,t,n,r){return t.options.selectionMode=!1,t.options.store=0,this.computeIntersection(e,t,r),!!t.results.min&&t.results.min.getIntersectionPoint(n)},s.getCenterRayWithSubpixelOffset=function(e,t,n=.5,r=.5){return e.getRenderCenter(v,n,r),v[0]+=.0466,v[1]-=.0123,c.fromRenderAtEye(e,v,t)},s.intersectIntersectorScreen=function(e,t,n){this.computeIntersection(this._getPickRay(e,this.tmpRay),t,n)},s.intersectToolIntersectorScreen=function(e,t,n){const r=this._getPickRay(e,this.tmpRay);this.intersectToolIntersectorRay(r,t,n)},s.intersectToolIntersectorRay=function(e,t,n){t.options.selectionMode=!0,this.computeIntersection(e,t,n);const r=t.results.min;!!this.view.basemapTerrain&&this.view.basemapTerrain.opaque||d.isValidIntersectorResult(r)&&2!==r.intersector||(t.options.selectionMode=!1,this.computeIntersection(e,t,n))},s.setTolerance=function(e=l.DEFAULT_TOLERANCE){this.tolerance=e},s.addIntersectionHandler=function(e){this.externalIntersectionHandlers.push(e),this.externalIntersectionHandlers.sort(((e,t)=>2===e.type?1:2===t.type?-1:0))},s.removeIntersectionHandler=function(e){this.externalIntersectionHandlers.removeUnordered(e),this.externalIntersectionHandlers.sort(((e,t)=>2===e.type?1:2===t.type?-1:0))},s._getPickRay=function(e,t){const n=this.view.state.camera;return c.fromScreen(n,e,t)},s._intersectRayFreePointLocal=function(e,n){if(2!==this.viewingMode||t.isNone(e))return!1;const r=this.view.renderDataExtent;if(t.isNone(r))return i.add(n,e.origin,i.normalize(a.sv3d.get(),e.direction)),!0;const s={x:r.xmax-r.xmin,y:r.ymax-r.ymin,z:8*Math.max(r.xmax-r.xmin,r.ymax-r.ymin)},o=Math.max(s.x,s.y,s.z);if(0===o)return i.add(n,e.origin,i.normalize(a.sv3d.get(),e.direction)),!0;const c=this.view.state.camera,l=Math.max(0,r.xmin-c.eye[0],c.eye[0]-r.xmax),d=Math.max(0,r.ymin-c.eye[1],c.eye[1]-r.ymax),u=Math.sqrt(l*l+d*d),h=Math.abs(c.relativeElevation)+Number.MIN_VALUE,y=Math.max(0,Math.log(o/h))**2;let p=o/Math.max(1,y);p=Math.max(p,Math.min(u,o));const m=i.scale(a.sv3d.get(),e.direction,p/i.length(e.direction));return i.add(n,e.origin,m),!0},s.intersectElevationFromScreen=function(e,t,n=0,r=null){return this.intersectElevation(this._getPickRay(e,this.tmpRay),t,n,r)},s.intersectElevation=function(e,n,s=0,o=null){if(t.isNone(e))return null;const c=t.isSome(n)?n.mode:"absolute-height",u=t.isSome(n)?t.unwrapOr(n.offset,0):0,h="on-the-ground"!==c?u+s:0,y=h/this.view.renderCoordsHelper.unitInMeters;if("absolute-height"===c){if(this.view.renderCoordsHelper.intersectInfiniteManifold(e,h,f)){const e=this.view.computeMapPointFromVec3d(f);return e.z-=u,e}return null}const m=this.view.state.camera,v=r.castRenderScreenPointArray3(a.sv3d.get());m.projectToRenderScreen(e.origin,v);const g=new p(null,this._forEachLayer),R=this.view.slicePlane,I=t.isSome(R)?d.sliceFilterPredicate(R):null,w=l.newIntersector(this.viewingMode);w.options.store=0,w.options.verticalOffset=y;const x=e.origin,P=i.add(a.sv3d.get(),x,e.direction);w.reset(x,P,m),w.point=v;const b=t.isSome(o)?"type"in o&&"graphics"===o.type?e=>e.metadata.layerUid!==o.uid:e=>e.metadata.graphicUid!==o.uid:null;switch(c){case"relative-to-scene":{const e=e=>(t.isNone(b)||b(e))&&e.metadata&&e.metadata.isElevationSource;w.intersect(g.layers,v,this.tolerance,null,e),this.externalIntersectionHandlers.forAll((e=>{if(4===e.type||2===e.type){const t=e.slicePlaneEnabled?I:null;e.intersect(w,t,w.rayBegin,w.rayEnd,v)}}))}break;case"on-the-ground":case"relative-to-ground":this.externalIntersectionHandlers.forAll((e=>{if(e.isGround){const t=e.slicePlaneEnabled?I:null;e.intersect(w,t,w.rayBegin,w.rayEnd,v)}}))}if(w.results.min.getIntersectionPoint(f)){const e=this.view.computeMapPointFromVec3d(f);return e.z=s,e}return null},s.computeIntersection=function(e,n,s){if(t.isNone(e))return;const o=this.view.state.camera,c=r.castRenderScreenPointArray3(a.sv3d.get());o.projectToRenderScreen(e.origin,c);const l=new p(s,this._forEachLayer);n.options.selectOpaqueTerrainOnly=!s||!("include"in s||"exclude"in s);const u=e.origin,h=i.add(a.sv3d.get(),e.origin,e.direction);n.reset(u,h,o),n.intersect(l.layers,c,this.tolerance);const y=this.view.slicePlane,m=t.isSome(y)?d.sliceFilterPredicate(y):null;n.intersect(l.sliceableLayers,c,this.tolerance,m);const f=s&&(s.requiresGroundFeedback||s.enableDraped);this.externalIntersectionHandlers.forAll((e=>{if(n.options.isFiltered=!l.filterLayerUid(e.layerUid),e.isGround&&f||!n.options.isFiltered){const t=e.slicePlaneEnabled?m:null;e.intersect(n,t,u,h,c)}}));const v=a.sv3d.get();if(s&&s.enableDraped&&n.results.ground.getIntersectionPoint(v)){const e=this.view.basemapTerrain.overlayManager.renderer,r=this.view.renderCoordsHelper.spatialReference,i=a.sv3d.get();this.view.renderCoordsHelper.fromRenderCoords(v,i,this.view.spatialReference),i[2]=t.unwrapOr(this.view.elevationProvider.getElevation(v[0],v[1],v[2],r,"ground"),0),e.intersect(n,i,n.results.ground,(e=>l.filterRenderGeometry(e)))}n.sortResults();const g=n.results.hud;if(d.isHudIntersectorResult(g)){const e=r.castRenderScreenPointArray3(a.sv3d.get()),t=a.sv3d.get(),s=a.sv3d.get();this.unprojectHUDResultRay(g.target.center,e,t,s);const c=i.distance(g.target.center,t)/i.distance(t,s)*.99;this.validateHUDIntersector.reset(t,s,o),this.validateHUDIntersector.intersect(l.layers,e,this.tolerance),this.validateHUDIntersector.intersect(l.sliceableLayers,e,this.tolerance,m),this.externalIntersectionHandlers.forAll((n=>{if(!l.filterLayerUid(n.layerUid))return;const r=n.slicePlaneEnabled?m:null;n.intersect(this.validateHUDIntersector,r,t,s,e)}));const d=this.validateHUDIntersector.results.min;(null==d.dist||c<=d.dist)&&(n.results.min.copy(g),n.results.all.splice(0,0,g))}},s.unprojectHUDResultRay=function(e,t,n,i){const s=this.view.state.camera;s.projectToRenderScreen(e,t);const o=r.castRenderScreenPointArray3(a.sv3d.get());o[0]=t[0],o[1]=t[1],o[2]=0,s.unprojectFromRenderScreen(o,n),o[2]=1,s.unprojectFromRenderScreen(o,i)},e}();function y(e){return u&&u.viewingMode===e||(u=l.newIntersector(e)),u}let p=function(){function e(e,t){this.layers=new Array,this.sliceableLayers=new Array,this.include=null==e?void 0:e.include,this.exclude=null==e?void 0:e.exclude,t((e=>{e.isPickable&&this.filterLayerUid(e.apiLayerUid)&&(e.isSliceable?this.sliceableLayers:this.layers).push(e)}))}var n=e.prototype;return n.filterLayerUid=function(e){const{include:n,exclude:r}=this;return t.isNone(e)?null==n&&null==r:(null==n||n.has(e))&&(null==r||!r.has(e))},n.filterRenderGeometry=function(e){return this.filterLayerUid(e.layerUid)},e}();function m(e){return"object"==typeof e&&"intersect"in e}const f=s.create(),v=r.createRenderScreenPointArray3();e.SceneIntersectionHelper=h,e.isIntersectionHandler=m,Object.defineProperty(e,"__esModule",{value:!0})}));
