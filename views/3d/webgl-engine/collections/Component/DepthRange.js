/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/PooledArray","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/plane","../../../support/orientedBoundingBox","../../lib/depthRange"],(function(e,t,n,a,o,r,c,s,u,i,l){"use strict";function f(e,t){const n=l.empty(),{eye:a,frustum:o,viewForward:r}=e;for(let s=0;s<t.length;s++){const e=t[s].obb,u=c.dot(c.sub(M,e.center,a),r),f=i.projectedRadius(e,r);if(l.within(n,u-f)&&l.within(n,u+f))continue;const p=q(e,o);if(-1===p)continue;if(0===p){d.far=u+f,d.near=u-f,l.union(n,d);continue}const g=h.pushNew();g.near=u-f,g.far=u+f,g.mask=p,g.object=t[s]}for(let s=0;s<h.length;s++){const e=h.data[s];if(l.within(n,e.near)&&l.within(n,e.far))continue;d.far=e.far,d.near=1/0;0===j(e.object.obb,a,m,(t=>{let n=b;for(let a=0;a<S&&t.length>0;a++){if(0==(e.mask&1<<a))continue;w(o[a],t,n);const r=t;t=n,n=r}for(let e=0;e<t.length;e+=3){c.set(p,t.data[e+0],t.data[e+1],t.data[e+2]);const n=c.dot(c.sub(p,p,a),r);d.near=Math.min(d.near,n)}}))&&(d.near=0),l.union(n,d)}return h.length=0,n}const h=new t({allocator:e=>e||{near:1/0,far:-1/0,mask:0,object:null},deallocator:e=>(e.object=null,e)}),d=l.empty(),p=s.create(),g=s.create(),m=new t({deallocator:null}),b=new t({deallocator:null});function w(e,t,n){n.length=0;const a=t.length-3;k(p,t,a);const o=u.signedDistance(e,p);o<=0&&(n.push(p[0]),n.push(p[1]),n.push(p[2]));let r=0,s=o;for(;r<a;r+=3){k(g,t,r);const a=u.signedDistance(e,g);if(s*a<0){const e=a/(a-s);c.lerp(p,g,p,e),y(n,p)}a<=0&&y(n,g),s=a,c.copy(p,g)}if(s*o<0){k(g,t,a);const e=o/(o-s);c.lerp(p,g,p,e),y(n,p)}}function k(e,t,n){return c.set(e,t.data[n+0],t.data[n+1],t.data[n+2])}function y(e,t){e.push(t[0]),e.push(t[1]),e.push(t[2])}function j(e,t,a,r){o.conjugate(D,e.quaternion),c.sub(M,t,e.center),c.transformQuat(M,M,D);const s=8*((M[0]<-e.halfSize[0]?-1:M[0]>e.halfSize[0]?1:0)+3*(M[1]<-e.halfSize[1]?-1:M[1]>e.halfSize[1]?1:0)+9*(M[2]<-e.halfSize[2]?-1:M[2]>e.halfSize[2]?1:0)+13),u=z[s];if(0===u)return u;n.fromQuat(v,e.quaternion),n.scale(v,v,e.halfSize);const i=(t,n)=>{const a=z[s+n+1];return c.set(t,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),c.transformMat3(t,t,v),c.add(t,e.center,t)};return a.length=0,y(a,i(P,0)),y(a,i(R,1)),y(a,i(M,2)),y(a,i(x,3)),r(a),1===u?u:(a.length=0,y(a,P),y(a,x),y(a,i(M,4)),y(a,i(A,5)),r(a),2===u||(a.length=0,y(a,P),y(a,A),y(a,i(M,6)),y(a,R),r(a)),u)}const z=(()=>{const e=new Int8Array(216);let t=0;const n=n=>{for(let a=0;a<n.length;a++)e[t+a]=n[a];t+=8};return n([3,0,6,2,3,1,5,4]),n([2,0,2,3,1,5,4,0]),n([3,1,0,2,3,7,5,4]),n([2,0,1,3,2,6,4,0]),n([1,0,1,3,2,0,0,0]),n([2,1,5,7,3,2,0,0]),n([3,2,0,1,3,7,6,4]),n([2,2,0,1,3,7,6,0]),n([3,3,0,1,5,7,6,2]),n([2,0,1,5,4,6,2,0]),n([1,0,1,5,4,0,0,0]),n([2,1,3,7,5,4,0,0]),n([1,0,2,6,4,0,0,0]),n([0,0,0,0,0,0,0,0]),n([1,1,3,7,5,0,0,0]),n([2,2,3,7,6,4,0,0]),n([1,2,3,7,6,0,0,0]),n([2,3,1,5,7,6,2,0]),n([3,4,0,1,5,7,6,2]),n([2,5,7,6,4,0,1,0]),n([3,5,0,1,3,7,6,4]),n([2,4,5,7,6,2,0,0]),n([1,4,5,7,6,0,0,0]),n([2,5,1,3,7,6,4,0]),n([3,6,0,2,3,7,5,4]),n([2,6,2,3,7,5,4,0]),n([3,7,6,2,3,1,5,4]),e})(),S=4;function q(e,t){let n=0;for(let a=0;a<S;a++){const o=i.intersectPlane(e,t[a]);if(o>0)return-1;0===o&&(n|=1<<a)}return n}const v=a.create(),D=r.create(),M=s.create(),P=s.create(),R=s.create(),x=s.create(),A=s.create();e.computeDepthRange=f,Object.defineProperty(e,"__esModule",{value:!0})}));
