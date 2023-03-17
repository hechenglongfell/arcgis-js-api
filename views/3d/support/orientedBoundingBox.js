/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/mat3","../../../chunks/mat3f64","../../../chunks/quat","../../../chunks/quatf32","../../../chunks/quatf64","../../../chunks/vec3","../../../chunks/vec3f32","../../../chunks/vec3f64","../../../chunks/vec4","../../../chunks/vec4f64","../../../geometry/support/aaBoundingBox","../../../geometry/support/plane","../../ViewingMode","./dito"],(function(e,t,n,a,r,c,i,o,s,f,u,l,h,S,z){"use strict";const b=c.create(),m=s.create(),d=s.create(),M=u.create(),g=n.create();let q=function(e){const t=56,n=0,a=24,c=36,i=e*t;this.buffer=new ArrayBuffer(i),this.obbs=new Array(e);for(let f=0;f<e;f++)this.obbs[f]={center:s.createView(this.buffer,t*f+n),halfSize:o.createView(this.buffer,t*f+a),quaternion:r.createView(this.buffer,t*f+c)}};function p(e=[0,0,0],t=[-1,-1,-1],n=c.create()){return{center:s.clone(e),halfSize:o.clone(t),quaternion:r.clone(n)}}function y(e){return p(e.center,e.halfSize,e.quaternion)}function A(e,t){i.copy(t.center,e.center),i.copy(t.halfSize,e.halfSize),a.copy(t.quaternion,e.quaternion)}function k(e,t){return t=t||p(),z.computeOBB(e,t),t}function Q(e,t){const n=h.signedDistance(t,e.center),a=P(e,h.normal(t));return n>a?1:n<-a?-1:0}function j(e,n){n||(n=l.create());const a=t.fromQuat(g,e.quaternion),r=e.halfSize[0]*Math.abs(a[0])+e.halfSize[1]*Math.abs(a[3])+e.halfSize[2]*Math.abs(a[6]),c=e.halfSize[0]*Math.abs(a[1])+e.halfSize[1]*Math.abs(a[4])+e.halfSize[2]*Math.abs(a[7]),i=e.halfSize[0]*Math.abs(a[2])+e.halfSize[1]*Math.abs(a[5])+e.halfSize[2]*Math.abs(a[8]);return n[0]=e.center[0]-r,n[1]=e.center[1]-c,n[2]=e.center[2]-i,n[3]=e.center[0]+r,n[4]=e.center[1]+c,n[5]=e.center[2]+i,n}function w(e,t){return h.signedDistance(t,e.center)-P(e,h.normal(t))}function x(e,t){return h.signedDistance(t,e.center)+P(e,h.normal(t))}function B(e,t){return Q(e,t[0])<=0&&Q(e,t[1])<=0&&Q(e,t[2])<=0&&Q(e,t[3])<=0&&Q(e,t[4])<=0&&Q(e,t[5])<=0}function v(e,t,n,r=0){a.conjugate(b,e.quaternion),i.subtract(m,t,e.center);const c=i.transformQuat(m,m,b),o=i.transformQuat(d,n,b);let s=-1/0,f=1/0;for(let a=0;a<3;a++)if(Math.abs(o[a])>1e-6){const t=(r+e.halfSize[a]-c[a])/o[a],n=(-r-e.halfSize[a]-c[a])/o[a];s=Math.max(s,Math.min(t,n)),f=Math.min(f,Math.max(t,n))}else if(c[a]>e.halfSize[a]+r||c[a]<-e.halfSize[a]-r)return!1;return s<=f}function V(e,n,r,c,o){a.conjugate(b,e.quaternion),i.sub(m,n,e.center),i.transformQuat(m,m,b);const s=m[0]<-e.halfSize[0]?-1:m[0]>e.halfSize[0]?1:0,u=m[1]<-e.halfSize[1]?-1:m[1]>e.halfSize[1]?1:0,l=m[2]<-e.halfSize[2]?-1:m[2]>e.halfSize[2]?1:0,h=Math.abs(s)+Math.abs(u)+Math.abs(l);if(0===h)return 1/0;const S=1===h?4:6,z=6*(s+3*u+9*l+13);t.fromQuat(g,e.quaternion),t.scale(g,g,e.halfSize);for(let t=0;t<S;t++){const n=O[z+t];i.set(m,((1&n)<<1)-1,(2&n)-1,((4&n)>>1)-1),i.transformMat3(m,m,g),i.add(M,e.center,m),M[3]=1,f.transformMat4(M,M,r);const a=1/Math.max(1e-6,M[3]);D[2*t]=M[0]*a,D[2*t+1]=M[1]*a}const d=2*S-2;let q=D[0]*(D[3]-D[d+1])+D[d]*(D[1]-D[d-1]);for(let t=2;t<d;t+=2)q+=D[t]*(D[t+3]-D[t-1]);return Math.abs(q)*c*o*.125}const D=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],O=(()=>{const e=new Int8Array(162);let t=0;const n=n=>{for(let a=0;a<n.length;a++)e[t+a]=n[a];t+=6};return n([6,2,3,1,5,4]),n([0,2,3,1,5,4]),n([0,2,3,7,5,4]),n([0,1,3,2,6,4]),n([0,1,3,2,0,0]),n([0,1,5,7,3,2]),n([0,1,3,7,6,4]),n([0,1,3,7,6,2]),n([0,1,5,7,6,2]),n([0,1,5,4,6,2]),n([0,1,5,4,0,0]),n([0,1,3,7,5,4]),n([0,2,6,4,0,0]),n([0,0,0,0,0,0]),n([1,3,7,5,0,0]),n([2,3,7,6,4,0]),n([2,3,7,6,0,0]),n([2,3,1,5,7,6]),n([0,1,5,7,6,2]),n([0,1,5,7,6,4]),n([0,1,3,7,6,4]),n([4,5,7,6,2,0]),n([4,5,7,6,0,0]),n([4,5,1,3,7,6]),n([0,2,3,7,5,4]),n([6,2,3,7,5,4]),n([6,2,3,1,5,4]),e})();function P(e,t){a.conjugate(b,e.quaternion),i.transformQuat(m,t,b);const n=e.halfSize;return Math.abs(m[0]*n[0])+Math.abs(m[1]*n[1])+Math.abs(m[2]*n[2])}function G(e,t){for(let n=0;n<8;++n){const a=t[n];a[0]=1&n?-e.halfSize[0]:e.halfSize[0],a[1]=2&n?-e.halfSize[1]:e.halfSize[1],a[2]=4&n?-e.halfSize[2]:e.halfSize[2],i.transformQuat(a,a,e.quaternion),i.add(a,a,e.center)}}function I(e){return i.len(e.halfSize)}function L(e,t,n,r,c){if(a.copy(c.quaternion,e.quaternion),r===S.ViewingMode.Global){a.conjugate(E,e.quaternion),i.transformQuat(R,e.center,E),i.abs(T,R),i.min(C,T,e.halfSize),i.sub(C,T,C);const r=i.length(C);i.add(C,T,e.halfSize);const o=i.length(C);if(r<n)i.copy(c.center,e.center),i.set(R,n,n,n),i.add(c.halfSize,e.halfSize,R);else{const a=o>0?1+t/o:1,s=r>0?1+n/r:1,f=(s+a)/2,u=(s-a)/2;i.scale(c.halfSize,T,u),i.scaleAndAdd(c.halfSize,c.halfSize,e.halfSize,f),i.scale(c.center,T,f),i.scaleAndAdd(c.center,c.center,e.halfSize,u),i.sign(R,R),i.multiply(c.center,c.center,R),i.transformQuat(c.center,c.center,c.quaternion)}}else{const r=i.set(R,0,0,1);i.scaleAndAdd(c.center,e.center,r,(n+t)/2),a.conjugate(E,e.quaternion),i.transformQuat(r,r,E),i.abs(r,r),i.scaleAndAdd(c.halfSize,e.halfSize,r,(n-t)/2)}return c}const R=s.create(),T=s.create(),C=s.create(),E=c.create();e.ObbArray=q,e.clone=y,e.compute=k,e.computeOffsetObb=L,e.corners=G,e.create=p,e.intersectLine=v,e.intersectPlane=Q,e.isVisible=B,e.maximumDistancePlane=x,e.minimumDistancePlane=w,e.projectedArea=V,e.projectedRadius=P,e.radius=I,e.set=A,e.toAaBoundingBox=j,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
