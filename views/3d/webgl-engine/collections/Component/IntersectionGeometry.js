/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../../../../geometry/support/buffer/BufferView","./ComponentIntersectionData","../../lib/ComponentUtils","../../lib/geometryDataUtils","../../materials/internal/MaterialUtil"],(function(t,e,n,i,o,s,r,c,p,a){"use strict";let m=function(){function i(t,n){this._indices=e.isSome(t.indices)?t.indices:p.generateDefaultIndexArray(t.positions.length/3),this._positions=new s.BufferViewVec3f(t.positions),this._components=n,this._componentIntersectionData=new Array(n.count)}var o=i.prototype;return o.getComponentAabb=function(t,n){if(e.isSome(this._perComponentAabbs)){for(let e=0;e<6;e++)n[e]=this._perComponentAabbs[6*t+e];return n}return this._computePerComponentAabbs(),this.getComponentAabb(t,n)},o.getComponentPositions=function(t,e){e.indices=this._indices,e.data=this._positions.typedBuffer,e.stride=this._positions.typedBufferStride,e.startIndex=this._components.offsets[t],e.endIndex=this._components.offsets[t+1]},o.intersect=function(t,i,o,s,p,m){const h={data:this._positions.typedBuffer,stride:this._positions.typedBufferStride,size:3},b=this._indices,_=this._components.offsets,l=a.computeInvDir(t,i,f);this._components.visibility.forEachComponent((f=>{if(!c.getVisibility(this._components.pickability,f))return!0;const d=this.getComponentAabb(f,u);if(e.isSome(p)&&p.applyToAabb(d),!a.intersectAabbInvDir(d,t,l,o))return!0;const A=_[f]/3,C=_[f+1]/3,y=(t,e,i)=>{m(f,t,n.transformMat3(e,e,s),i)},g=C-A;return e.isNone(p)&&g>r.componentMinimalSizeForIntersectionData?(null==this._componentIntersectionData[f]&&(this._componentIntersectionData[f]=new r.ComponentIntersectionData(this._indices,A,C,h)),this._componentIntersectionData[f].intersectRay({r0:t,r1:i},y)):a.intersectTriangles(t,i,A,C,b,h,void 0,p,y),!0}))},o._computePerComponentAabbs=function(){const t=this._components.count;this._perComponentAabbs=new Float32Array(6*t);for(let e=0;e<t;e++)this._computeAABB(e)},o._computeAABB=function(t){const e=this._indices,i=this._positions,o=this._components.offsets,s=o[t],r=o[t+1],c=[0,0,0],p=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let f=s;f<r;f++){const t=e[f];i.getVec(t,c),n.min(p,p,c),n.max(a,a,c)}let m=6*t;this._perComponentAabbs[m++]=p[0],this._perComponentAabbs[m++]=p[1],this._perComponentAabbs[m++]=p[2],this._perComponentAabbs[m++]=a[0],this._perComponentAabbs[m++]=a[1],this._perComponentAabbs[m]=a[2]},t._createClass(i,[{key:"positions",get:function(){return this._positions}},{key:"indices",get:function(){return this._indices}}]),i}();const f=i.create(),u=o.create();return m}));
