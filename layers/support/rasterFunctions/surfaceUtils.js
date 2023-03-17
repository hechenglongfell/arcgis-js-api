/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../PixelBlock","./pixelUtils"],(function(e,t,i,l){"use strict";function s(e){let{altitude:t,azimuth:i}=e;const{hillshadeType:l,pixelSizePower:s=1,pixelSizeFactor:n=1,scalingType:a,isGCS:o,resolution:r}=e,c="multi-directional"===l?2*e.zFactor:e.zFactor,{x:h,y:f}=r;let u=c/(8*h),d=c/(8*f);if(o&&c>.001&&(u/=111e3,d/=111e3),"adjusted"===a)if(o){const e=111e3*h,t=111e3*f;u=(c+e**s*n)/(8*e),d=(c+t**s*n)/(8*t)}else u=(c+h**s*n)/(8*h),d=(c+f**s*n)/(8*f);let p=(90-t)*Math.PI/180,x=Math.cos(p),m=(360-i+90)*Math.PI/180,w=Math.sin(p)*Math.cos(m),y=Math.sin(p)*Math.sin(m);const M=[315,270,225,360,180,0],A=[60,60,60,60,60,90],g=new Float32Array([3,5,3,2,1,4]),k=g.reduce(((e,t)=>e+t)),P=g.map((e=>e/k)),S="multi-directional"===l?M.length:1,b=new Float32Array(6),Z=new Float32Array(6),C=new Float32Array(6);if("multi-directional"===l)for(let F=0;F<S;F++)t=A[F],i=M[F],p=(90-t)*Math.PI/180,x=Math.cos(p),m=(360-i+90)*Math.PI/180,w=Math.sin(p)*Math.cos(m),y=Math.sin(p)*Math.sin(m),b[F]=x,Z[F]=w,C[F]=y;else b.fill(x),Z.fill(w),C.fill(y);return{resolution:r,factor:[u,d],sinZcosA:w,sinZsinA:y,cosZ:x,sinZcosAs:Z,sinZsinAs:C,cosZs:b,weights:P,hillshadeType:["traditional","multi-directional"].indexOf(l)}}function n(e,n){if(!l.isValidPixelBlock(e))return e;const{width:a,height:o,mask:r}=e,c=new Uint8Array(a*o);let h=1;if(t.isSome(r)){for(let e=0;e<r.length;e++)if(r[e]){h=r[e];break}c.set(r)}const{factor:f,sinZcosA:u,sinZsinA:d,cosZ:p,sinZcosAs:x,sinZsinAs:m,cosZs:w,weights:y}=s(n),[M,A]=f,{hillshadeType:g}=n,k=e.pixels[0],P=new Uint8Array(a*o);let S,b,Z,C,F,T,V,z;const U=1,v=t.isSome(r);for(let t=U;t<o-U;t++){const e=t*a;for(let t=U;t<a-U;t++){if(r&&!r[e+t]){P[e+t]=0;continue}let i=8;if(v&&(i=(r[e-a+t-1]+r[e-a+t]+r[e-a+t+1]+r[e+t-1]+r[e+t+1]+r[e+a+t-1]+r[e+a+t]+r[e+a+t+1])/h,i<7)){P[e+t]=0,c[e+t]=0;continue}r&&7===i?(S=r[e-a+t-1]?k[e-a+t-1]:k[e+t],b=r[e-a+t]?k[e-a+t]:k[e+t],Z=r[e-a+t+1]?k[e-a+t+1]:k[e+t],C=r[e+t-1]?k[e+t-1]:k[e+t],F=r[e+t+1]?k[e+t+1]:k[e+t],T=r[e+a+t-1]?k[e+a+t-1]:k[e+t],V=r[e+a+t]?k[e+a+t]:k[e+t],z=r[e+a+t+1]?k[e+a+t+1]:k[e+t]):(S=k[e-a+t-1],b=k[e-a+t],Z=k[e-a+t+1],C=k[e+t-1],F=k[e+t+1],T=k[e+a+t-1],V=k[e+a+t],z=k[e+a+t+1]);const l=(Z+F+F+z-(S+C+C+T))*M,s=(T+V+V+z-(S+b+b+Z))*A,n=Math.sqrt(1+l*l+s*s);let o=0;if("traditional"===g){let e=255*(p+d*s-u*l)/n;e<0&&(e=0),o=e}else{const e=m.length;for(let t=0;t<e;t++){let e=255*(w[t]+m[t]*s-x[t]*l)/n;e<0&&(e=0),o+=e*y[t]}}P[e+t]=255&o}}for(let t=0;t<o;t++)P[t*a]=P[t*a+1],P[(t+1)*a-1]=P[(t+1)*a-2];for(let t=1;t<a-1;t++)P[t]=P[t+a],P[t+(o-1)*a]=P[t+(o-2)*a];return new i({width:a,height:o,pixels:[P],mask:r?c:null,pixelType:"u8",validPixelCount:e.validPixelCount,statistics:[{minValue:0,maxValue:255}]})}function a(e,t,i,s){if(!l.isValidPixelBlock(e)||!l.isValidPixelBlock(t))return;const{min:n,max:a}=s,o=e.pixels[0],{pixels:r,mask:c}=t,h=r[0],f=255.00001/(a-n),u=new Uint8ClampedArray(h.length),d=new Uint8ClampedArray(h.length),p=new Uint8ClampedArray(h.length),x=i.length-1;for(let l=0;l<h.length;l++){if(c&&0===c[l])continue;const e=Math.floor((h[l]-n)*f),[t,s]=i[e<0?0:e>x?x:e],a=o[l],r=a*s,m=r*(1-Math.abs(t%2-1)),w=a-r;switch(Math.floor(t)){case 0:u[l]=r+w,d[l]=m+w,p[l]=w;break;case 1:u[l]=m+w,d[l]=r+w,p[l]=w;break;case 2:u[l]=w,d[l]=r+w,p[l]=m+w;break;case 3:u[l]=w,d[l]=m+w,p[l]=r+w;break;case 4:u[l]=m+w,d[l]=w,p[l]=r+w;break;case 5:case 6:u[l]=r+w,d[l]=w,p[l]=m+w}}e.pixels=[u,d,p],e.updateStatistics()}function o(e,s){if(!l.isValidPixelBlock(e))return e;const n=s.zFactor,a=s.pixelSizePower??1,o=s.pixelSizeFactor??1,r=s.slopeType,c=s.isGCS,{width:h,height:f,mask:u}=e,d=e.pixels[0],p=new Uint8Array(h*f);let x=1;if(t.isSome(u)){for(let e=0;e<u.length;e++)if(u[e]){x=u[e];break}p.set(u)}const m=new Float32Array(h*f),{x:w,y}=s.resolution;let M=n/(8*w),A=n/(8*y);c&&Math.abs(n-1)<1e-4&&(M/=111e3,A/=111e3),"adjusted"===r&&(M=(n+w**a*o)/(8*w),A=(n+y**a*o)/(8*y));const g=1;let k,P,S,b,Z,C,F,T;const V=t.isSome(u);for(let t=g;t<f-g;t++){const e=t*h;for(let t=g;t<h-g;t++){if(u&&!u[e+t]){m[e+t]=0;continue}let i=0;if(V&&(i=(u[e-h+t-1]+u[e-h+t]+u[e-h+t+1]+u[e+t-1]+u[e+t+1]+u[e+h+t-1]+u[e+h+t]+u[e+h+t+1])/x,i<7)){m[e+t]=0,p[e+t]=0;continue}u&&7===i?(k=u[e-h+t-1]?d[e-h+t-1]:d[e+t],P=u[e-h+t]?d[e-h+t]:d[e+t],S=u[e-h+t+1]?d[e-h+t+1]:d[e+t],b=u[e+t-1]?d[e+t-1]:d[e+t],Z=u[e+t+1]?d[e+t+1]:d[e+t],C=u[e+h+t-1]?d[e+h+t-1]:d[e+t],F=u[e+h+t]?d[e+h+t]:d[e+t],T=u[e+h+t+1]?d[e+h+t+1]:d[e+t]):(k=d[e-h+t-1],P=d[e-h+t],S=d[e-h+t+1],b=d[e+t-1],Z=d[e+t+1],C=d[e+h+t-1],F=d[e+h+t],T=d[e+h+t+1]);const l=(S+Z+Z+T-(k+b+b+C))*M,s=(C+F+F+T-(k+P+P+S))*A,n=Math.sqrt(l*l+s*s);m[e+t]="percent-rise"===r?100*n:57.2957795*Math.atan(n)}}for(let t=0;t<f;t++)m[t*h]=m[t*h+1],m[(t+1)*h-1]=m[(t+1)*h-2];for(let t=1;t<h-1;t++)m[t]=m[t+h],m[t+(f-1)*h]=m[t+(f-2)*h];const z=new i({width:h,height:f,pixels:[m],mask:u?p:null,pixelType:"f32",validPixelCount:e.validPixelCount});return z.updateStatistics(),z}function r(e,s={}){if(!l.isValidPixelBlock(e))return e;const{width:n,height:a,mask:o}=e,r=e.pixels[0],c=new Uint8Array(n*a);t.isSome(o)&&c.set(o);const h=new Float32Array(n*a),{resolution:f}=s,u=f?1/f.x:1,d=f?1/f.y:1,p=1;let x,m,w,y,M,A,g,k;const P=t.isSome(o);for(let t=p;t<a-p;t++){const e=t*n;for(let t=p;t<n-p;t++){if(o&&!o[e+t]){h[e+t]=0;continue}let i=0;if(P&&(i=o[e-n+t-1]+o[e-n+t]+o[e-n+t+1]+o[e+t-1]+o[e+t+1]+o[e+n+t-1]+o[e+n+t]+o[e+n+t+1],i<7)){h[e+t]=0,c[e+t]=0;continue}o&&7===i?(x=o[e-n+t-1]?r[e-n+t-1]:r[e+t],m=o[e-n+t]?r[e-n+t]:r[e+t],w=o[e-n+t+1]?r[e-n+t+1]:r[e+t],y=o[e+t-1]?r[e+t-1]:r[e+t],M=o[e+t+1]?r[e+t+1]:r[e+t],A=o[e+n+t-1]?r[e+n+t-1]:r[e+t],g=o[e+n+t]?r[e+n+t]:r[e+t],k=o[e+n+t+1]?r[e+n+t+1]:r[e+t]):(x=r[e-n+t-1],m=r[e-n+t],w=r[e-n+t+1],y=r[e+t-1],M=r[e+t+1],A=r[e+n+t-1],g=r[e+n+t],k=r[e+n+t+1]);const l=(w+M+M+k-(x+y+y+A))*u,s=(A+g+g+k-(x+m+m+w))*d;let a=-1;0===l&&0===s||(a=90-57.29578*Math.atan2(s,-l),a<0&&(a+=360),360===a?a=0:a>360&&(a%=360)),h[e+t]=a}}for(let t=0;t<a;t++)h[t*n]=h[t*n+1],h[(t+1)*n-1]=h[(t+1)*n-2];for(let t=1;t<n-1;t++)h[t]=h[t+n],h[t+(a-1)*n]=h[t+(a-2)*n];return new i({width:n,height:a,pixels:[h],mask:o?c:null,pixelType:"f32",validPixelCount:e.validPixelCount,statistics:[{minValue:0,maxValue:360}]})}e.aspect=r,e.calculateHillshadeParams=s,e.hillshade=n,e.slope=o,e.tintHillshade=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
