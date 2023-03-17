/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./vec3f64","./common"],(function(t,n,r){"use strict";function a(t){const n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)}function e(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function c(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function i(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function M(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function f(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function l(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function d(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t}function m(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t}function b(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function q(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t}function g(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t}function x(t,n){const r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+a*a+e*e)}function p(t,n){const r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return r*r+a*a+e*e}function v(t){const n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a}function y(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function z(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function A(t,n){const r=n[0],a=n[1],e=n[2];let o=r*r+a*a+e*e;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function D(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function L(t,n,r){const a=n[0],e=n[1],o=n[2],s=r[0],u=r[1],c=r[2];return t[0]=e*c-o*u,t[1]=o*s-a*c,t[2]=a*u-e*s,t}function _(t,n,r,a){const e=n[0],o=n[1],s=n[2];return t[0]=e+a*(r[0]-e),t[1]=o+a*(r[1]-o),t[2]=s+a*(r[2]-s),t}function E(t,n,r,a,e,o){const s=o*o,u=s*(2*o-3)+1,c=s*(o-2)+o,i=s*(o-1),h=s*(3-2*o);return t[0]=n[0]*u+r[0]*c+a[0]*i+e[0]*h,t[1]=n[1]*u+r[1]*c+a[1]*i+e[1]*h,t[2]=n[2]*u+r[2]*c+a[2]*i+e[2]*h,t}function O(t,n,r,a,e,o){const s=1-o,u=s*s,c=o*o,i=u*s,h=3*o*u,M=3*c*s,f=c*o;return t[0]=n[0]*i+r[0]*h+a[0]*M+e[0]*f,t[1]=n[1]*i+r[1]*h+a[1]*M+e[1]*f,t[2]=n[2]*i+r[2]*h+a[2]*M+e[2]*f,t}function P(t,n){n=n||1;const a=r.RANDOM,e=2*a()*Math.PI,o=2*a()-1,s=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(e)*s,t[1]=Math.sin(e)*s,t[2]=o*n,t}function j(t,n,r){const a=n[0],e=n[1],o=n[2];return t[0]=r[0]*a+r[4]*e+r[8]*o+r[12],t[1]=r[1]*a+r[5]*e+r[9]*o+r[13],t[2]=r[2]*a+r[6]*e+r[10]*o+r[14],t}function I(t,n,r){const a=n[0],e=n[1],o=n[2];return t[0]=a*r[0]+e*r[3]+o*r[6],t[1]=a*r[1]+e*r[4]+o*r[7],t[2]=a*r[2]+e*r[5]+o*r[8],t}function Q(t,n,r){const a=r[0],e=r[1],o=r[2],s=r[3],u=n[0],c=n[1],i=n[2];let h=e*i-o*c,M=o*u-a*i,f=a*c-e*u,l=e*f-o*M,d=o*h-a*f,m=a*M-e*h;const b=2*s;return h*=b,M*=b,f*=b,l*=2,d*=2,m*=2,t[0]=u+h+l,t[1]=c+M+d,t[2]=i+f+m,t}function S(t,n,r,a){const e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[0],o[1]=e[1]*Math.cos(a)-e[2]*Math.sin(a),o[2]=e[1]*Math.sin(a)+e[2]*Math.cos(a),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function X(t,n,r,a){const e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[2]*Math.sin(a)+e[0]*Math.cos(a),o[1]=e[1],o[2]=e[2]*Math.cos(a)-e[0]*Math.sin(a),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function Y(t,n,r,a){const e=[],o=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],o[0]=e[0]*Math.cos(a)-e[1]*Math.sin(a),o[1]=e[0]*Math.sin(a)+e[1]*Math.cos(a),o[2]=e[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function Z(t,n){e(N,t),e(R,n),A(N,N),A(R,R);const r=D(N,R);return r>1?0:r<-1?Math.PI:Math.acos(r)}const N=n.create(),R=n.create();function T(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function k(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function w(t,n){if(t===n)return!0;const a=t[0],e=t[1],o=t[2],s=n[0],u=n[1],c=n[2],i=r.getEpsilon();return Math.abs(a-s)<=i*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(e-u)<=i*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(o-c)<=i*Math.max(1,Math.abs(o),Math.abs(c))}function B(t,n,r){const a=r[0]-n[0],e=r[1]-n[1],o=r[2]-n[2];let s=a*a+e*e+o*o;return s>0?(s=1/Math.sqrt(s),t[0]=a*s,t[1]=e*s,t[2]=o*s,t):(t[0]=0,t[1]=0,t[2]=0,t)}const C=u,F=c,G=i,H=x,J=p,K=a,U=v,V=Object.freeze(Object.defineProperty({__proto__:null,abs:f,add:s,angle:Z,bezier:O,ceil:h,copy:e,cross:L,direction:B,dist:H,distance:x,div:G,divide:i,dot:D,equals:w,exactEquals:k,floor:M,hermite:E,inverse:z,len:K,length:a,lerp:_,max:m,min:d,mul:F,multiply:c,negate:y,normalize:A,random:P,rotateX:S,rotateY:X,rotateZ:Y,round:b,scale:q,scaleAndAdd:g,set:o,sign:l,sqrDist:J,sqrLen:U,squaredDistance:p,squaredLength:v,str:T,sub:C,subtract:u,transformMat3:I,transformMat4:j,transformQuat:Q},Symbol.toStringTag,{value:"Module"}));t.abs=f,t.add=s,t.angle=Z,t.bezier=O,t.ceil=h,t.copy=e,t.cross=L,t.direction=B,t.dist=H,t.distance=x,t.div=G,t.divide=i,t.dot=D,t.equals=w,t.exactEquals=k,t.floor=M,t.hermite=E,t.inverse=z,t.len=K,t.length=a,t.lerp=_,t.max=m,t.min=d,t.mul=F,t.multiply=c,t.negate=y,t.normalize=A,t.random=P,t.rotateX=S,t.rotateY=X,t.rotateZ=Y,t.round=b,t.scale=q,t.scaleAndAdd=g,t.set=o,t.sign=l,t.sqrDist=J,t.sqrLen=U,t.squaredDistance=p,t.squaredLength=v,t.str=T,t.sub=C,t.subtract=u,t.transformMat3=I,t.transformMat4=j,t.transformQuat=Q,t.vec3=V}));
