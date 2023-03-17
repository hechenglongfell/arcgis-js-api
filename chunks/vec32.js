/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/buffer/math/common"],(function(t,e){"use strict";function r(t,r,f){if(t.count!==r.count)return void e.mathLogger.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],c=f[4],i=f[5],s=f[6],a=f[8],p=f[9],y=f[10],m=f[12],B=f[13],l=f[14],h=t.typedBuffer,S=t.typedBufferStride,g=r.typedBuffer,M=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*S,r=e*M,f=g[r],o=g[r+1],b=g[r+2];h[t]=n*f+c*o+a*b+m,h[t+1]=u*f+i*o+p*b+B,h[t+2]=d*f+s*o+y*b+l}}function f(t,r,f){if(t.count!==r.count)return void e.mathLogger.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],c=f[3],i=f[4],s=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,l=r.typedBuffer,h=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*h,f=l[r],o=l[r+1],S=l[r+2];m[t]=n*f+c*o+a*S,m[t+1]=u*f+i*o+p*S,m[t+2]=d*f+s*o+y*S}}function o(t,e,r){const f=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let c=0;c<f;c++){const t=c*n,e=c*d;o[t]=r*u[e],o[t+1]=r*u[e+1],o[t+2]=r*u[e+2]}}function n(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<r;d++){const t=d*o,e=d*u,r=n[e],c=n[e+1],i=n[e+2],s=r*r+c*c+i*i;if(s>0){const e=1/Math.sqrt(s);f[t]=e*r,f[t+1]=e*c,f[t+2]=e*i}}}function u(t,e,r){const f=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let c=0;c<f;c++){const t=c*n,e=c*d;o[t]=u[e]>>r,o[t+1]=u[e+1]>>r,o[t+2]=u[e+2]>>r}}const d=Object.freeze(Object.defineProperty({__proto__:null,normalize:n,scale:o,shiftRight:u,transformMat3:f,transformMat4:r},Symbol.toStringTag,{value:"Module"}));t.normalize=n,t.scale=o,t.shiftRight=u,t.transformMat3=f,t.transformMat4=r,t.vec3=d}));
