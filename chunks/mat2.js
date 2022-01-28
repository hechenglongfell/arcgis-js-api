/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./common"],(function(t,n){"use strict";function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function u(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function o(t,n){if(t===n){const a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function e(t,n){const a=n[0],r=n[1],u=n[2],o=n[3];let e=a*o-u*r;return e?(e=1/e,t[0]=o*e,t[1]=-r*e,t[2]=-u*e,t[3]=a*e,t):null}function c(t,n){const a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function s(t){return t[0]*t[3]-t[2]*t[1]}function i(t,n,a){const r=n[0],u=n[1],o=n[2],e=n[3],c=a[0],s=a[1],i=a[2],l=a[3];return t[0]=r*c+o*s,t[1]=u*c+e*s,t[2]=r*i+o*l,t[3]=u*i+e*l,t}function l(t,n,a){const r=n[0],u=n[1],o=n[2],e=n[3],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+o*c,t[1]=u*s+e*c,t[2]=r*-c+o*s,t[3]=u*-c+e*s,t}function f(t,n,a){const r=n[0],u=n[1],o=n[2],e=n[3],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=o*s,t[3]=e*s,t}function m(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function h(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function M(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function b(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2)}function d(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function p(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function y(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function S(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function x(t,a){const r=t[0],u=t[1],o=t[2],e=t[3],c=a[0],s=a[1],i=a[2],l=a[3];return Math.abs(r-c)<=n.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(o-i)<=n.EPSILON*Math.max(1,Math.abs(o),Math.abs(i))&&Math.abs(e-l)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))}function E(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function L(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}const q=i,O=y,A=Object.freeze({__proto__:null,copy:a,identity:r,set:u,transpose:o,invert:e,adjoint:c,determinant:s,multiply:i,rotate:l,scale:f,fromRotation:m,fromScaling:h,str:M,frob:b,LDU:d,add:p,subtract:y,exactEquals:S,equals:x,multiplyScalar:E,multiplyScalarAndAdd:L,mul:q,sub:O});t.LDU=d,t.add=p,t.adjoint=c,t.copy=a,t.determinant=s,t.equals=x,t.exactEquals=S,t.frob=b,t.fromRotation=m,t.fromScaling=h,t.identity=r,t.invert=e,t.mat2=A,t.mul=q,t.multiply=i,t.multiplyScalar=E,t.multiplyScalarAndAdd=L,t.rotate=l,t.scale=f,t.set=u,t.str=M,t.sub=O,t.subtract=y,t.transpose=o}));
