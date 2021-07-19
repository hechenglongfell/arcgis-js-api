/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/projection","../../../../../geometry/projectionEllipsoid","../../../../../geometry/support/vectorStacks","../../../support/mathUtils"],(function(e,t,r,n,s,c,i){"use strict";let o=function(){function e(e=r.create(),t=r.create()){this.startRenderSpace=e,this.endRenderSpace=t,this.type="euclidean"}var n=e.prototype;return n.eval=function(e,r,n){return t.lerp(r,this.startRenderSpace,this.endRenderSpace,e),n&&(t.subtract(n,this.endRenderSpace,this.startRenderSpace),t.normalize(n,n)),r},n.createRenderGeometry=function(e,r){const n=[],s=[],i=(r,c)=>{const i=d;t.subtract(i,r,e),n.push([i[0],i[1],i[2]]),s.push([c[0],c[1],c[2]])},o=r.worldUpAtPosition(this.eval(.5,h),c.sv3d.get());return i(this.startRenderSpace,o),i(this.endRenderSpace,o),{points:n,normals:s}},e}(),a=function(){function e(e,t,c){this.startRenderSpace=e,this.endRenderSpace=t,this.renderSpatialReference=c,this.type="geodesic",this._start=r.create(),this._end=r.create(),this._pcpf=s.getSphericalPCPF(c),this._project=n.canProjectWithoutEngine(c,this._pcpf),this._projectIn(e,this._start),this._projectIn(t,this._end)}var c=e.prototype;return c._projectIn=function(e,r){this._project?n.projectVectorToVector(e,this.renderSpatialReference,r,this._pcpf):t.copy(r,e)},c.eval=function(e,r,s){if(this._project)if(s){const c=d;i.slerpTangent(this._start,this._end,e,r,c),t.add(u,r,c),n.projectVectorToVector(r,this._pcpf,r,this.renderSpatialReference),n.projectVectorToVector(u,this._pcpf,u,this.renderSpatialReference),t.subtract(s,u,r),t.normalize(s,s)}else i.slerp(this._start,this._end,e,r),n.projectVectorToVector(r,this._pcpf,r,this.renderSpatialReference);else t.lerp(r,this._start,this._end,e),s&&(t.subtract(s,this._end,this._start),t.normalize(s,s));return r},c.createRenderGeometry=function(e,r){const n=[],s=[],c=(r,c)=>{const i=u;t.subtract(i,r,e),n.push([i[0],i[1],i[2]]),s.push([c[0],c[1],c[2]])},i=128+1&-2;for(let t=0;t<i;++t){const e=t/(i-1),n=h,s=d;this.eval(e,n),r.worldUpAtPosition(n,s),c(n,s)}return{points:n,normals:s}},e}();function p(e,t,r,n){switch(e){case"euclidean":return new o(t,r);case"geodesic":return new a(t,r,n)}}const h=r.create(),d=r.create(),u=r.create();e.EuclideanSegment=o,e.GeodesicSegment=a,e.createSegment=p,Object.defineProperty(e,"__esModule",{value:!0})}));
