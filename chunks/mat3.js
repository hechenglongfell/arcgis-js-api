/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./common"],(function(t,n){"use strict";function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function r(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function o(t,n,a,r,o,u,s,c,e,i){return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=u,t[5]=s,t[6]=c,t[7]=e,t[8]=i,t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function s(t,n){if(t===n){const a=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function c(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],f=M*s-c*i,l=-M*u+c*e,h=i*u-s*e;let m=a*f+r*l+o*h;return m?(m=1/m,t[0]=f*m,t[1]=(-M*r+o*i)*m,t[2]=(c*r-o*s)*m,t[3]=l*m,t[4]=(M*a-o*e)*m,t[5]=(-c*a+o*u)*m,t[6]=h*m,t[7]=(-i*a+r*e)*m,t[8]=(s*a-r*u)*m,t):null}function e(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8];return t[0]=s*M-c*i,t[1]=o*i-r*M,t[2]=r*c-o*s,t[3]=c*e-u*M,t[4]=a*M-o*e,t[5]=o*u-a*c,t[6]=u*i-s*e,t[7]=r*e-a*i,t[8]=a*s-r*u,t}function i(t){const n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],s=t[5],c=t[6],e=t[7],i=t[8];return n*(i*u-s*e)+a*(-i*o+s*c)+r*(e*o-u*c)}function M(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],f=n[8],l=a[0],h=a[1],m=a[2],b=a[3],d=a[4],S=a[5],p=a[6],y=a[7],O=a[8];return t[0]=l*r+h*s+m*i,t[1]=l*o+h*c+m*M,t[2]=l*u+h*e+m*f,t[3]=b*r+d*s+S*i,t[4]=b*o+d*c+S*M,t[5]=b*u+d*e+S*f,t[6]=p*r+y*s+O*i,t[7]=p*o+y*c+O*M,t[8]=p*u+y*e+O*f,t}function f(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],f=n[8],l=a[0],h=a[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=s,t[4]=c,t[5]=e,t[6]=l*r+h*s+i,t[7]=l*o+h*c+M,t[8]=l*u+h*e+f,t}function l(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],f=n[8],l=Math.sin(a),h=Math.cos(a);return t[0]=h*r+l*s,t[1]=h*o+l*c,t[2]=h*u+l*e,t[3]=h*s-l*r,t[4]=h*c-l*o,t[5]=h*e-l*u,t[6]=i,t[7]=M,t[8]=f,t}function h(t,n,a){const r=a[0],o=a[1],u=a[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=u*n[6],t[7]=u*n[7],t[8]=u*n[8],t}function m(t,n,a){const r=a[0],o=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t}function b(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function d(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function S(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function y(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=a+a,c=r+r,e=o+o,i=a*s,M=r*s,f=r*c,l=o*s,h=o*c,m=o*e,b=u*s,d=u*c,S=u*e;return t[0]=1-f-m,t[3]=M-S,t[6]=l+d,t[1]=M+S,t[4]=1-i-m,t[7]=h-b,t[2]=l-d,t[5]=h+b,t[8]=1-i-f,t}function O(t,n){const a=n[0],r=n[1],o=n[2],u=n[4],s=n[5],c=n[6],e=n[8],i=n[9],M=n[10],f=M*s-c*i,l=-M*u+c*e,h=i*u-s*e,m=a*f+r*l+o*h;if(!m)return null;const b=1/m;return t[0]=f*b,t[1]=(-M*r+o*i)*b,t[2]=(c*r-o*s)*b,t[3]=l*b,t[4]=(M*a-o*e)*b,t[5]=(-c*a+o*u)*b,t[6]=h*b,t[7]=(-i*a+r*e)*b,t[8]=(s*a-r*u)*b,t}function x(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],f=n[9],l=n[10],h=n[11],m=n[12],b=n[13],d=n[14],S=n[15],p=a*c-r*s,y=a*e-o*s,O=a*i-u*s,x=r*e-o*c,E=r*i-u*c,L=o*i-u*e,N=M*b-f*m,I=M*d-l*m,P=M*S-h*m,j=f*d-l*b,q=f*S-h*b,g=l*S-h*d;let A=p*g-y*q+O*j+x*P-E*I+L*N;return A?(A=1/A,t[0]=(c*g-e*q+i*j)*A,t[1]=(e*P-s*g-i*I)*A,t[2]=(s*q-c*P+i*N)*A,t[3]=(o*q-r*g-u*j)*A,t[4]=(a*g-o*P+u*I)*A,t[5]=(r*P-a*q-u*N)*A,t[6]=(b*L-d*E+S*x)*A,t[7]=(d*O-m*L-S*y)*A,t[8]=(m*E-b*O+S*p)*A,t):null}function E(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function L(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function N(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function I(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function P(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function j(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function q(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function g(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function A(t,a){const r=t[0],o=t[1],u=t[2],s=t[3],c=t[4],e=t[5],i=t[6],M=t[7],f=t[8],l=a[0],h=a[1],m=a[2],b=a[3],d=a[4],S=a[5],p=a[6],y=a[7],O=a[8];return Math.abs(r-l)<=n.EPSILON*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(o-h)<=n.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(u-m)<=n.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(s-b)<=n.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(c-d)<=n.EPSILON*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(e-S)<=n.EPSILON*Math.max(1,Math.abs(e),Math.abs(S))&&Math.abs(i-p)<=n.EPSILON*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(M-y)<=n.EPSILON*Math.max(1,Math.abs(M),Math.abs(y))&&Math.abs(f-O)<=n.EPSILON*Math.max(1,Math.abs(f),Math.abs(O))}function F(t){const a=n.EPSILON,r=t[0],o=t[1],u=t[2],s=t[3],c=t[4],e=t[5],i=t[6],M=t[7],f=t[8];return Math.abs(1-(r*r+s*s+i*i))<=a&&Math.abs(1-(o*o+c*c+M*M))<=a&&Math.abs(1-(u*u+e*e+f*f))<=a}const _=M,v=P;var B=Object.freeze({__proto__:null,fromMat4:a,copy:r,set:o,identity:u,transpose:s,invert:c,adjoint:e,determinant:i,multiply:M,translate:f,rotate:l,scale:h,scaleByVec2:m,fromTranslation:b,fromRotation:d,fromScaling:S,fromMat2d:p,fromQuat:y,normalFromMat4Legacy:O,normalFromMat4:x,projection:E,str:L,frob:N,add:I,subtract:P,multiplyScalar:j,multiplyScalarAndAdd:q,exactEquals:g,equals:A,isOrthoNormal:F,mul:_,sub:v});t.add=I,t.adjoint=e,t.copy=r,t.determinant=i,t.equals=A,t.exactEquals=g,t.frob=N,t.fromMat2d=p,t.fromMat4=a,t.fromQuat=y,t.fromRotation=d,t.fromScaling=S,t.fromTranslation=b,t.identity=u,t.invert=c,t.isOrthoNormal=F,t.mat3=B,t.mul=_,t.multiply=M,t.multiplyScalar=j,t.multiplyScalarAndAdd=q,t.normalFromMat4=x,t.normalFromMat4Legacy=O,t.projection=E,t.rotate=l,t.scale=h,t.scaleByVec2=m,t.set=o,t.str=L,t.sub=v,t.subtract=P,t.translate=f,t.transpose=s}));
