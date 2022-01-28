/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/quat","../../../../chunks/quatf64","../../../../chunks/vec3","../../../../chunks/vec3f32","../../../../chunks/vec3f64","../../../../chunks/vec4f64","../../../../chunks/sphere"],(function(t,e,s,i,n,r,o,a,h,f,c,l,u,b){"use strict";let m=function(){function t(){this._transform=o.create(),this._transformInverse=new p({value:this._transform},r.invert,o.create),this._transformInverseTranspose=new p(this._transformInverse,r.transpose,o.create),this._transformTranspose=new p({value:this._transform},r.transpose,o.create),this._transformInverseRotation=new p({value:this._transform},i.normalFromMat4Legacy,n.create)}var s=t.prototype;return s.invalidateLazyTransforms=function(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()},s.setTransformMatrix=function(t){r.copy(this._transform,t)},s.multiplyTransform=function(t){r.multiply(this._transform,this._transform,t)},s.set=function(t){r.copy(this._transform,t),this.invalidateLazyTransforms()},s.setAndInvalidateLazyTransforms=function(t,e){this.setTransformMatrix(t),this.multiplyTransform(e),this.invalidateLazyTransforms()},e._createClass(t,[{key:"transform",get:function(){return this._transform}},{key:"inverse",get:function(){return this._transformInverse.value}},{key:"inverseTranspose",get:function(){return this._transformInverseTranspose.value}},{key:"inverseRotation",get:function(){return this._transformInverseRotation.value}},{key:"transpose",get:function(){return this._transformTranspose.value}}]),t}(),p=function(){function t(t,e,s){this.original=t,this.update=e,this.dirty=!0,this.transform=s()}return t.prototype.invalidate=function(){this.dirty=!0},e._createClass(t,[{key:"value",get:function(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}]),t}(),v=function(){function t(t=0){this.offset=t,this.tmpVertex=l.create()}var e=t.prototype;return e.applyToVertex=function(t,e,s){const i=t+this.localOrigin[0],n=e+this.localOrigin[1],r=s+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+n*n+r*r);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=e+n*o,this.tmpVertex[2]=s+r*o,this.tmpVertex},e.applyToAabb=function(t){const e=t[0]+this.localOrigin[0],s=t[1]+this.localOrigin[1],i=t[2]+this.localOrigin[2],n=t[3]+this.localOrigin[0],r=t[4]+this.localOrigin[1],o=t[5]+this.localOrigin[2],a=this.offset/Math.sqrt(e*e+s*s+i*i);t[0]+=e*a,t[1]+=s*a,t[2]+=i*a;const h=this.offset/Math.sqrt(n*n+r*r+o*o);return t[3]+=n*h,t[4]+=r*h,t[5]+=o*h,t},t}(),g=function(){function t(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=l.create(),this.mbs=u.create(),this.obb={center:l.create(),halfSize:c.create(),quaternion:null}}var s=t.prototype;return s.applyToVertex=function(t,e,s){const i=t,n=e,r=s+this.componentLocalOriginLength,o=this.offset/Math.sqrt(i*i+n*n+r*r);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=e+n*o,this.tmpVertex[2]=s+r*o,this.tmpVertex},s.applyToAabb=function(t){const e=t[0],s=t[1],i=t[2]+this.componentLocalOriginLength,n=t[3],r=t[4],o=t[5]+this.componentLocalOriginLength,a=this.offset/Math.sqrt(e*e+s*s+i*i);t[0]+=e*a,t[1]+=s*a,t[2]+=i*a;const h=this.offset/Math.sqrt(n*n+r*r+o*o);return t[3]+=n*h,t[4]+=r*h,t[5]+=o*h,t},s.applyToMbs=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this.offset/e;return this.mbs[0]=t[0]+t[0]*s,this.mbs[1]=t[1]+t[1]*s,this.mbs[2]=t[2]+t[2]*s,this.mbs[3]=t[3]+t[3]*this.offset/e,this.mbs},s.applyToObb=function(t){const e=t.center,s=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);this.obb.center[0]=e[0]+e[0]*s,this.obb.center[1]=e[1]+e[1]*s,this.obb.center[2]=e[2]+e[2]*s,f.transformQuat(this.obb.halfSize,t.halfSize,t.quaternion),f.add(this.obb.halfSize,this.obb.halfSize,t.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,f.subtract(this.obb.halfSize,this.obb.halfSize,t.center),a.conjugate(O,t.quaternion),f.transformQuat(this.obb.halfSize,this.obb.halfSize,O),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb},e._createClass(t,[{key:"localOrigin",set:function(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}}]),t}(),y=function(){function t(t=0){this.offset=t,this.sphere=b.create(),this.tmpVertex=l.create()}var e=t.prototype;return e.applyToVertex=function(t,e,s){const i=this.objectTransform.transform;let n=i[0]*t+i[4]*e+i[8]*s+i[12],r=i[1]*t+i[5]*e+i[9]*s+i[13],o=i[2]*t+i[6]*e+i[10]*s+i[14];const a=this.offset/Math.sqrt(n*n+r*r+o*o);n+=n*a,r+=r*a,o+=o*a;const h=this.objectTransform.inverse;return this.tmpVertex[0]=h[0]*n+h[4]*r+h[8]*o+h[12],this.tmpVertex[1]=h[1]*n+h[5]*r+h[9]*o+h[13],this.tmpVertex[2]=h[2]*n+h[6]*r+h[10]*o+h[14],this.tmpVertex},e.applyToMinMax=function(t,e){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i},e.applyToAabb=function(t){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const s=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*s,t[4]+=t[4]*s,t[5]+=t[5]*s,t},e.applyToBoundingSphere=function(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),s=this.offset/e;return this.sphere[0]=t[0]+t[0]*s,this.sphere[1]=t[1]+t[1]*s,this.sphere[2]=t[2]+t[2]*s,this.sphere[3]=t[3]+t[3]*this.offset/e,this.sphere},t}();const S=new y;function z(t){return s.isSome(t)?(S.offset=t,S):null}const T=new g;function _(t){return s.isSome(t)?(T.offset=t,T):null}const V=new v;function M(t){return s.isSome(t)?(V.offset=t,V):null}const d="terrain",O=h.create();t.I3SVerticalOffsetGlobalViewingMode=g,t.IntersectorTransform=m,t.Object3DVerticalOffsetGlobalViewingMode=y,t.TERRAIN_ID=d,t.TerrainVerticalOffsetGlobalViewingMode=v,t.getVerticalOffsetI3S=_,t.getVerticalOffsetObject3D=z,t.getVerticalOffsetTerrain=M,Object.defineProperty(t,"__esModule",{value:!0})}));
