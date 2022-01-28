/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils"],(function(t,e){"use strict";const n=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const a=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)a.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function a(t,e,n,a){const{blurRadius:r,fieldOffset:o,field:c}=e,f=new Float64Array(n*a),l=i(r),s=Math.round(3*r);let h,d=Number.NEGATIVE_INFINITY;const m=u(c,o);for(const{geometry:i,attributes:u}of t){const t=i.x-s,e=i.y-s,r=Math.max(0,t),o=Math.max(0,e),c=Math.min(a,i.y+s),g=Math.min(n,i.x+s),y=+m(u);for(let a=o;a<c;a++){const o=l[a-e];for(let e=r;e<g;e++){const r=l[e-t];h=f[a*n+e]+=o*r*y,h>d&&(d=h)}}}return{matrix:f.buffer,max:d}}function r(t,e,n,a){const{blurRadius:r,fieldOffset:o,field:c}=e,u=new Float64Array(n*a),l=i(r),s=Math.round(3*r);let h,d=Number.NEGATIVE_INFINITY;const m=f(c,o),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const r=t.readLegacyPointGeometry(),o=128;if(r.x<-o||r.x>=n+o||r.y<-o||r.y>a+o)continue;const c=+m(t),i=Math.round(r.x)-s,f=Math.round(r.y)-s,y=Math.max(0,i),M=Math.max(0,f),x=Math.min(a,Math.round(r.y)+s),b=Math.min(n,Math.round(r.x)+s);for(let t=M;t<x;t++){const e=l[t-f];for(let a=y;a<b;a++){const r=l[a-i];h=u[t*n+a]+=e*r*c,h>d&&(d=h)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,a,r,o){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const i=t.getImageData(0,0,e,e);n&&a&&i.data.set(new Uint8ClampedArray(c(e,n,a,r,o))),t.putImageData(i,0,0)}function c(t,n,a,r,o){const c=new Uint32Array(t*t),i="buffer"in n?n:new Float64Array(n),u="buffer"in a?new Uint32Array(a.buffer):new Uint32Array(new Uint8Array(a).buffer),f=u.length/(o-r);for(let l=0;l<i.length;l++){const t=i[l],n=Math.floor((t-r)*f);c[l]=u[e.clamp(n,0,u.length-1)]}return c.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,a=new Float64Array(2*e+1);for(let r=0;r<=a.length;r++)a[r]=Math.exp(-((r-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return a}function u(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function f(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}t.calculateHeatmapIntensityInfo=a,t.calculateHeatmapIntensityInfoReaders=r,t.createHeatmapImageData=c,t.createKernel=i,t.createValueFunction=u,t.createValueFunctionCursor=f,t.drawHeatmap=o,t.generateGradient=n,Object.defineProperty(t,"__esModule",{value:!0})}));
