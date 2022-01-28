/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f64","../../../../geometry/support/ray","./IntersectorInterfaces","./intersectorUtils","./verticalOffsetUtils","../materials/renderers/utils"],(function(t,r,e,s,i,n,a,o,c,h,d,u,l,f){"use strict";const y=1e-5;let m=function(){function t(t){this.options=new d.IntersectorOptions,this._results=new p,this.transform=new l.IntersectorTransform,this.tolerance=y,this.verticalOffset=null,this._ray=h.create(),this._rayEnd=a.create(),this._rayBeginTransformed=a.create(),this._rayEndTransformed=a.create(),this.viewingMode=null==t?1:t}var s=t.prototype;return s.reset=function(t,r,e){this.resetWithRay(h.fromPoints(t,r,this._ray),e)},s.resetWithRay=function(t,r){this.camera=r,t!==this._ray&&h.copy(t,this._ray),0!==this.options.verticalOffset?2===this.viewingMode?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,n.add(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)},s.intersect=function(t=null,r,s,i,n){this.point=r,this.filterPredicate=i,this.tolerance=null==s?y:s;const a=l.getVerticalOffsetObject3D(this.verticalOffset);if(e.isSome(t)&&t.length>0){const r=n?t=>{n(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const s of t){const t=s.getSpatialQueryAccelerator&&s.getSpatialQueryAccelerator();e.isSome(t)?(e.isSome(a)?t.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,r,a):t.forEachAlongRay(this._ray.origin,this._ray.direction,r),this.options.selectionMode&&this.options.hud&&t.forEachDegenerateObject(r)):s.objects.forAll((t=>r(t)))}}this.sortResults()},s.intersectObject=function(t){const r=t.geometryRecords;if(!r)return;const s=t.transformation,a=l.getVerticalOffsetObject3D(this.verticalOffset);for(const o of r){const{geometry:r,material:c,instanceParameters:h}=o;if(f.isInstanceHidden(h))continue;const d=r.id;this.transform.setAndInvalidateLazyTransforms(s,o.getShaderTransformation()),n.transformMat4(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),n.transformMat4(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const u=this.transform.transform;e.isSome(a)&&(a.objectTransform=this.transform),c.intersect(r,h,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((r,s,n,a,o,c)=>{if(r>=0){if(e.isSome(this.filterPredicate)&&!this.filterPredicate(this._ray.origin,this._rayEnd,r))return;if(a){if(null==this._results.hud.dist||r<this._results.hud.dist){const e={object:t,geometryId:d,triangleNr:n,center:c};this._results.hud.set(1,e,r,s,i.IDENTITY,o)}return}const h=e=>e.set(0,{object:t,geometryId:d,triangleNr:n},r,s,u,o);if((null==this._results.min.drapedLayerOrder||o>=this._results.min.drapedLayerOrder)&&(null==this._results.min.dist||r<this._results.min.dist)&&h(this._results.min),0!==this.options.store&&(null==this._results.max.drapedLayerOrder||o<this._results.max.drapedLayerOrder)&&(null==this._results.max.dist||r>this._results.max.dist)&&h(this._results.max),2===this.options.store){const e=O(this._ray);e.set(0,{object:t,geometryId:d,triangleNr:n},r,s,u),this._results.all.push(e)}}}),o.shaderTransformation)}},s.sortResults=function(){this._results.all.sort(((t,r)=>t.dist!==r.dist?e.unwrapOr(t.dist,0)-e.unwrapOr(r.dist,0):t.drapedLayerOrder!==r.drapedLayerOrder?e.unwrapOr(t.drapedLayerOrder,Number.MAX_VALUE)-e.unwrapOr(r.drapedLayerOrder,Number.MAX_VALUE):e.unwrapOr(r.drapedLayerGraphicOrder,Number.MIN_VALUE)-e.unwrapOr(t.drapedLayerGraphicOrder,Number.MIN_VALUE)))},r._createClass(t,[{key:"results",get:function(){return this._results}},{key:"ray",get:function(){return this._ray}},{key:"rayBegin",get:function(){return this._ray.origin}},{key:"rayEnd",get:function(){return this._rayEnd}}]),t}();function _(t){return new m(t)}let p=function(){function t(){this._min=new g(h.create()),this._max=new g(h.create()),this._hud=new g(h.create()),this._ground=new g(h.create())}return t.prototype.init=function(t){this._min.init(t),this._max.init(t),this._hud.init(t),this._ground.init(t),this.all=[]},r._createClass(t,[{key:"min",get:function(){return this._min}},{key:"max",get:function(){return this._max}},{key:"hud",get:function(){return this._hud}},{key:"ground",get:function(){return this._ground}}]),t}(),g=function(){function t(t){this.intersector=0,this.normal=a.create(),this.transformation=i.create(),this._ray=h.create(),this.init(t)}var c=t.prototype;return c.getIntersectionPoint=function(t){return!!u.isValidIntersectorResult(this)&&(n.scale(L,this.ray.direction,this.dist),n.add(t,this.ray.origin,L),!0)},c.getTransformedNormal=function(t){return n.copy(v,this.normal),v[3]=0,o.transformMat4(v,v,this.transformation),n.copy(t,v),n.normalize(t,t)},c.init=function(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=0,h.copy(t,this._ray)},c.set=function(t,r,o,c,h,d,u){this.intersector=t,this.dist=o,n.copy(this.normal,e.unwrapOr(c,a.UNIT_Z)),s.copy(this.transformation,e.unwrapOr(h,i.IDENTITY)),this.target=r,this.drapedLayerOrder=d,this.drapedLayerGraphicOrder=u},c.copy=function(t){h.copy(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,n.copy(this.normal,t.normal),s.copy(this.transformation,t.transformation)},r._createClass(t,[{key:"ray",get:function(){return this._ray}},{key:"distanceInRenderSpace",get:function(){return e.isSome(this.dist)?(n.scale(L,this.ray.direction,this.dist),n.length(L)):null}}]),t}();function O(t){return new g(t)}const L=a.create(),v=c.create();t.DEFAULT_TOLERANCE=y,t.newIntersector=_,t.newIntersectorResult=O,Object.defineProperty(t,"__esModule",{value:!0})}));
