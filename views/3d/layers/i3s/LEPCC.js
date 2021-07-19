/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Error"],(function(e,t){"use strict";const o=!0,n={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+n.identifierOffset,n.identifierLength)),version:t.getUint16(r+n.versionOffset,o),checksum:t.getUint32(r+n.checksumOffset,o)}}const i={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+i.sizeLo,o),sizeHi:e.getUint32(t+i.sizeHi,o),minX:e.getFloat64(t+i.minX,o),minY:e.getFloat64(t+i.minY,o),minZ:e.getFloat64(t+i.minZ,o),maxX:e.getFloat64(t+i.maxX,o),maxY:e.getFloat64(t+i.maxY,o),maxZ:e.getFloat64(t+i.maxZ,o),errorX:e.getFloat64(t+i.errorX,o),errorY:e.getFloat64(t+i.errorY,o),errorZ:e.getFloat64(t+i.errorZ,o),count:e.getUint32(t+i.count,o),reserved:e.getUint32(t+i.reserved,o)}}function s(e){const o=new DataView(e,0);let s=0;const{identifier:l,version:u}=r(e,o,s);if(s+=n.byteCount,"LEPCC     "!==l)throw new t("lepcc-decode-error","Bad identifier");if(u>1)throw new t("lepcc-decode-error","Unknown version");const a=c(o,s);s+=i.byteCount;if(a.sizeHi*2**32+a.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");const f=new Float64Array(3*a.count),h=[],w=[],g=[],p=[];if(s=d(e,s,h),s=d(e,s,w),s=d(e,s,g),s=d(e,s,p),s!==e.byteLength)throw new t("lepcc-decode-error","Bad length");let m=0,U=0;for(let t=0;t<h.length;t++){U+=h[t];let e=0;for(let o=0;o<w[t];o++){e+=g[m];const t=p[m];f[3*m]=Math.min(a.maxX,a.minX+2*a.errorX*e),f[3*m+1]=Math.min(a.maxY,a.minY+2*a.errorY*U),f[3*m+2]=Math.min(a.maxZ,a.minZ+2*a.errorZ*t),m++}}return{errorX:a.errorX,errorY:a.errorY,errorZ:a.errorZ,result:f}}function d(e,t,o){const n=[];t=l(e,t,n);const r=[];for(let i=0;i<n.length;i++){r.length=0,t=l(e,t,r);for(let e=0;e<r.length;e++)o.push(r[e]+n[i])}return t}function l(e,n,r){const i=new DataView(e,n),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let u=0;if(0===l)u=i.getUint32(1,o),n+=5;else if(1===l)u=i.getUint16(1,o),n+=3;else{if(2!==l)throw new t("lepcc-decode-error","Bad count type");u=i.getUint8(1),n+=2}if(d)throw new t("lepcc-decode-error","LUT not implemented");const a=Math.ceil(u*s/8),f=new Uint8Array(e,n,a);let h=0,w=0,g=0;const p=-1>>>32-s;for(let t=0;t<u;t++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;r[t]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return n+g}const u={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,o),sizeHi:e.getUint32(t+u.sizeHi,o),count:e.getUint32(t+u.count,o),colorMapCount:e.getUint16(t+u.colorMapCount,o),lookupMethod:e.getUint8(t+u.lookupMethod),compressionMethod:e.getUint8(t+u.compressionMethod)}}function f(e){const o=new DataView(e,0);let i=0;const{identifier:c,version:s}=r(e,o,i);if(i+=n.byteCount,"ClusterRGB"!==c)throw new t("lepcc-decode-error","Bad identifier");if(s>1)throw new t("lepcc-decode-error","Unknown version");const d=a(o,i);i+=u.byteCount;if(d.sizeHi*2**32+d.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==e.byteLength||d.colorMapCount>256)throw new t("lepcc-decode-error","Bad count");const o=new Uint8Array(e,i,3*d.colorMapCount),n=new Uint8Array(e,i+3*d.colorMapCount,d.count),r=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=n[e];r[3*e]=o[3*t],r[3*e+1]=o[3*t+1],r[3*e+2]=o[3*t+2]}return r}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==e.byteLength||0!==d.colorMapCount)throw new t("lepcc-decode-error","Bad count");return new Uint8Array(e,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==e.byteLength||1!==d.colorMapCount)throw new t("lepcc-decode-error","Bad count");const n=o.getUint8(i),r=o.getUint8(i+1),c=o.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=n,s[3*e+1]=r,s[3*e+2]=c;return s}throw new t("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function w(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,o),sizeHi:e.getUint32(t+h.sizeHi,o),count:e.getUint32(t+h.count,o),scaleFactor:e.getUint16(t+h.scaleFactor,o),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function g(e){const o=new DataView(e,0);let i=0;const{identifier:c,version:s}=r(e,o,i);if(i+=n.byteCount,"Intensity "!==c)throw new t("lepcc-decode-error","Bad identifier");if(s>1)throw new t("lepcc-decode-error","Unknown version");const d=w(o,i);i+=h.byteCount;if(d.sizeHi*2**32+d.sizeLo!==e.byteLength)throw new t("lepcc-decode-error","Bad size");const u=new Uint16Array(d.count);if(8===d.bitsPerPoint){if(d.count+i!==e.byteLength)throw new t("lepcc-decode-error","Bad size");const o=new Uint8Array(e,i,d.count);for(let e=0;e<d.count;e++)u[e]=o[e]*d.scaleFactor}else if(16===d.bitsPerPoint){if(2*d.count+i!==e.byteLength)throw new t("lepcc-decode-error","Bad size");const o=new Uint16Array(e,i,d.count);for(let e=0;e<d.count;e++)u[e]=o[e]*d.scaleFactor}else{const o=[];if(l(e,i,o)!==e.byteLength)throw new t("lepcc-decode-error","Bad size");for(let e=0;e<d.count;e++)u[e]=o[e]*d.scaleFactor}return u}e.decodeIntensity=g,e.decodeRGB=f,e.decodeXYZ=s,Object.defineProperty(e,"__esModule",{value:!0})}));
