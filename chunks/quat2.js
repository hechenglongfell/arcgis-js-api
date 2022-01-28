/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./quatf64","./vec3f64","./common","./mat4","./quat"],(function(t,n,a,e,r,o){"use strict";function s(t,n,a){const e=.5*a[0],r=.5*a[1],o=.5*a[2],s=n[0],u=n[1],c=n[2],i=n[3];return t[0]=s,t[1]=u,t[2]=c,t[3]=i,t[4]=e*i+r*c-o*u,t[5]=r*i+o*s-e*c,t[6]=o*i+e*u-r*s,t[7]=-e*s-r*u-o*c,t}function u(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function c(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function i(t,n){const a=l;r.getRotation(a,n);const e=h;return r.getTranslation(e,n),s(t,a,e),t}const l=n.create(),h=a.create();function f(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function M(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function b(t,n,a,e,r,o,s,u,c){return t[0]=n,t[1]=a,t[2]=e,t[3]=r,t[4]=o,t[5]=s,t[6]=u,t[7]=c,t}const m=o.copy;function d(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}const g=o.copy;function p(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function q(t,n){const a=n[4],e=n[5],r=n[6],o=n[7],s=-n[0],u=-n[1],c=-n[2],i=n[3];return t[0]=2*(a*i+o*s+e*c-r*u),t[1]=2*(e*i+o*u+r*s-a*c),t[2]=2*(r*i+o*c+a*u-e*s),t}function L(t,n,a){const e=n[0],r=n[1],o=n[2],s=n[3],u=.5*a[0],c=.5*a[1],i=.5*a[2],l=n[4],h=n[5],f=n[6],M=n[7];return t[0]=e,t[1]=r,t[2]=o,t[3]=s,t[4]=s*u+r*i-o*c+l,t[5]=s*c+o*u-e*i+h,t[6]=s*i+e*c-r*u+f,t[7]=-e*u-r*c-o*i+M,t}function x(t,n,a){let e=-n[0],r=-n[1],s=-n[2],u=n[3];const c=n[4],i=n[5],l=n[6],h=n[7],f=c*u+h*e+i*s-l*r,M=i*u+h*r+l*e-c*s,b=l*u+h*s+c*r-i*e,m=h*u-c*e-i*r-l*s;return o.rotateX(t,n,a),e=t[0],r=t[1],s=t[2],u=t[3],t[4]=f*u+m*e+M*s-b*r,t[5]=M*u+m*r+b*e-f*s,t[6]=b*u+m*s+f*r-M*e,t[7]=m*u-f*e-M*r-b*s,t}function y(t,n,a){let e=-n[0],r=-n[1],s=-n[2],u=n[3];const c=n[4],i=n[5],l=n[6],h=n[7],f=c*u+h*e+i*s-l*r,M=i*u+h*r+l*e-c*s,b=l*u+h*s+c*r-i*e,m=h*u-c*e-i*r-l*s;return o.rotateY(t,n,a),e=t[0],r=t[1],s=t[2],u=t[3],t[4]=f*u+m*e+M*s-b*r,t[5]=M*u+m*r+b*e-f*s,t[6]=b*u+m*s+f*r-M*e,t[7]=m*u-f*e-M*r-b*s,t}function E(t,n,a){let e=-n[0],r=-n[1],s=-n[2],u=n[3];const c=n[4],i=n[5],l=n[6],h=n[7],f=c*u+h*e+i*s-l*r,M=i*u+h*r+l*e-c*s,b=l*u+h*s+c*r-i*e,m=h*u-c*e-i*r-l*s;return o.rotateZ(t,n,a),e=t[0],r=t[1],s=t[2],u=t[3],t[4]=f*u+m*e+M*s-b*r,t[5]=M*u+m*r+b*e-f*s,t[6]=b*u+m*s+f*r-M*e,t[7]=m*u-f*e-M*r-b*s,t}function P(t,n,a){const e=a[0],r=a[1],o=a[2],s=a[3];let u=n[0],c=n[1],i=n[2],l=n[3];return t[0]=u*s+l*e+c*o-i*r,t[1]=c*s+l*r+i*e-u*o,t[2]=i*s+l*o+u*r-c*e,t[3]=l*s-u*e-c*r-i*o,u=n[4],c=n[5],i=n[6],l=n[7],t[4]=u*s+l*e+c*o-i*r,t[5]=c*s+l*r+i*e-u*o,t[6]=i*s+l*o+u*r-c*e,t[7]=l*s-u*e-c*r-i*o,t}function O(t,n,a){const e=n[0],r=n[1],o=n[2],s=n[3];let u=a[0],c=a[1],i=a[2],l=a[3];return t[0]=e*l+s*u+r*i-o*c,t[1]=r*l+s*c+o*u-e*i,t[2]=o*l+s*i+e*c-r*u,t[3]=s*l-e*u-r*c-o*i,u=a[4],c=a[5],i=a[6],l=a[7],t[4]=e*l+s*u+r*i-o*c,t[5]=r*l+s*c+o*u-e*i,t[6]=o*l+s*i+e*c-r*u,t[7]=s*l-e*u-r*c-o*i,t}function I(t,n,a,r){if(Math.abs(r)<e.EPSILON)return f(t,n);const o=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);r*=.5;const s=Math.sin(r),u=s*a[0]/o,c=s*a[1]/o,i=s*a[2]/o,l=Math.cos(r),h=n[0],M=n[1],b=n[2],m=n[3];t[0]=h*l+m*u+M*i-b*c,t[1]=M*l+m*c+b*u-h*i,t[2]=b*l+m*i+h*c-M*u,t[3]=m*l-h*u-M*c-b*i;const d=n[4],g=n[5],p=n[6],q=n[7];return t[4]=d*l+q*u+g*i-p*c,t[5]=g*l+q*c+p*u-d*i,t[6]=p*l+q*i+d*c-g*u,t[7]=q*l-d*u-g*c-p*i,t}function N(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function R(t,n,a){const e=n[0],r=n[1],o=n[2],s=n[3],u=a[4],c=a[5],i=a[6],l=a[7],h=n[4],f=n[5],M=n[6],b=n[7],m=a[0],d=a[1],g=a[2],p=a[3];return t[0]=e*p+s*m+r*g-o*d,t[1]=r*p+s*d+o*m-e*g,t[2]=o*p+s*g+e*d-r*m,t[3]=s*p-e*m-r*d-o*g,t[4]=e*l+s*u+r*i-o*c+h*p+b*m+f*g-M*d,t[5]=r*l+s*c+o*u-e*i+f*p+b*d+M*m-h*g,t[6]=o*l+s*i+e*c-r*u+M*p+b*g+h*d-f*m,t[7]=s*l-e*u-r*c-o*i+b*p-h*m-f*d-M*g,t}const S=R;function T(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}const A=o.dot;function B(t,n,a,e){const r=1-e;return A(n,a)<0&&(e=-e),t[0]=n[0]*r+a[0]*e,t[1]=n[1]*r+a[1]*e,t[2]=n[2]*r+a[2]*e,t[3]=n[3]*r+a[3]*e,t[4]=n[4]*r+a[4]*e,t[5]=n[5]*r+a[5]*e,t[6]=n[6]*r+a[6]*e,t[7]=n[7]*r+a[7]*e,t}function D(t,n){const a=v(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Q(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}const _=o.length,j=_,v=o.squaredLength,z=v;function X(t,n){let a=v(n);if(a>0){a=Math.sqrt(a);const e=n[0]/a,r=n[1]/a,o=n[2]/a,s=n[3]/a,u=n[4],c=n[5],i=n[6],l=n[7],h=e*u+r*c+o*i+s*l;t[0]=e,t[1]=r,t[2]=o,t[3]=s,t[4]=(u-e*h)/a,t[5]=(c-r*h)/a,t[6]=(i-o*h)/a,t[7]=(l-s*h)/a}return t}function Y(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Z(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function k(t,n){const a=t[0],r=t[1],o=t[2],s=t[3],u=t[4],c=t[5],i=t[6],l=t[7],h=n[0],f=n[1],M=n[2],b=n[3],m=n[4],d=n[5],g=n[6],p=n[7];return Math.abs(a-h)<=e.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-f)<=e.EPSILON*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(o-M)<=e.EPSILON*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(s-b)<=e.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(u-m)<=e.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-d)<=e.EPSILON*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(i-g)<=e.EPSILON*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(l-p)<=e.EPSILON*Math.max(1,Math.abs(l),Math.abs(p))}const w=Object.freeze({__proto__:null,fromRotationTranslation:s,fromTranslation:u,fromRotation:c,fromMat4:i,copy:f,identity:M,set:b,getReal:m,getDual:d,setReal:g,setDual:p,getTranslation:q,translate:L,rotateX:x,rotateY:y,rotateZ:E,rotateByQuatAppend:P,rotateByQuatPrepend:O,rotateAroundAxis:I,add:N,multiply:R,mul:S,scale:T,dot:A,lerp:B,invert:D,conjugate:Q,length:_,len:j,squaredLength:v,sqrLen:z,normalize:X,str:Y,exactEquals:Z,equals:k});t.add=N,t.conjugate=Q,t.copy=f,t.dot=A,t.equals=k,t.exactEquals=Z,t.fromMat4=i,t.fromRotation=c,t.fromRotationTranslation=s,t.fromTranslation=u,t.getDual=d,t.getReal=m,t.getTranslation=q,t.identity=M,t.invert=D,t.len=j,t.length=_,t.lerp=B,t.mul=S,t.multiply=R,t.normalize=X,t.quat2=w,t.rotateAroundAxis=I,t.rotateByQuatAppend=P,t.rotateByQuatPrepend=O,t.rotateX=x,t.rotateY=y,t.rotateZ=E,t.scale=T,t.set=b,t.setDual=p,t.setReal=g,t.sqrLen=z,t.squaredLength=v,t.str=Y,t.translate=L}));
