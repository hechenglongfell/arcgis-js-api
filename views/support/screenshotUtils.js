/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/mathUtils","../../core/maybe","../../core/imageUtils"],(function(t,e,i,h,o){"use strict";const n=2048,a=1.5,r=8;function l(t,e){const{format:h,quality:o,rotation:n,disableDecorations:a}=t||{},r=v(t,e.padding),l=D(t,{width:e.width-r.left-r.right,height:e.height-r.top-r.bottom}),{width:g,height:d}=b(t,l),u=S(h),f=B[u];return{format:u,quality:i.clamp(null!=o?o:f,0,100),area:l,width:g,height:d,rotation:n,disableDecorations:!!a,ignoreBackground:!(!t||!t.ignoreBackground),ignorePadding:!(!t||!t.ignorePadding)}}function g(t,e){const i=l(t,e),h=i.area,o=i.width/h.width,n=v(i,e.padding),a=n.left+n.right,r=n.top+n.bottom,g=e.width-a,d=e.height-r,u=Math.floor(g*o+a),f=Math.floor(d*o+r),c=t&&t.layers?t.layers:[],s=i.ignoreBackground,w=i.ignorePadding;return{framebufferWidth:u,framebufferHeight:f,region:{x:Math.floor(h.x*o)+n.left,y:Math.floor(h.y*o)+n.top,width:i.width,height:i.height},format:i.format,quality:i.quality,rotation:i.rotation,pixelRatio:o,layers:c,disableDecorations:i.disableDecorations,ignoreBackground:s,ignorePadding:w,objectAndLayerIdColor:!1}}function d(t,e,i){const{ctx:h,canvas:o}=f(t,i),n=h.getImageData(0,0,t.width,t.height),a=m(o,e);return c(o),{dataUrl:a,data:n}}function u(t,e){const{ctx:i,canvas:h}=f(t,e),o=i.getImageData(0,0,t.width,t.height);return c(h),o}function f(t,e){const i=s();e.premultipliedAlpha&&R(t),i.width=t.width,i.height=t.height;const h=i.getContext("2d",{willReadFrequently:!0});return h.putImageData(t,0,0),e.flipY&&I(h),{ctx:h,canvas:i}}function c(t){t.width=0,t.height=0}function s(){return h.isNone(w)&&(w=document.createElement("canvas")),w}let w=null;function m(t,e){const i=P[e.format],h=e.quality/100;return t.toDataURL(i,h)}function M(t,e){const h=S(t),o=B[h];return{format:h,quality:i.clamp(null!=e?e:o,0,100)}}function p(t,e){return e/Math.max(t[0],t[1])}function y(t,e,i,h=0,o=0,n=t.width-h,a=t.height-o,r=!1){const{data:l}=t,{width:g,height:d,data:u}=e,f=n/g,c=a/d,s=Math.ceil(f/2),w=Math.ceil(c/2),m=t.width;for(let M=0;M<d;M++)for(let t=0;t<g;t++){const e=4*(t+(r?d-M-1:M)*g);let n=0,a=0,p=0,y=0,x=0,b=0;const D=(M+.5)*c;for(let r=Math.floor(M*c);r<(M+1)*c;r++){const e=Math.abs(D-(r+.5))/w,g=(t+.5)*f,d=e*e;for(let u=Math.floor(t*f);u<(t+1)*f;u++){const t=Math.abs(g-(u+.5))/s,e=Math.sqrt(d+t*t);if(e>=1)continue;let f=2*e*e*e-3*e*e+1;const c=4*(h+u+(o+r)*m);b+=f*l[c+3],a+=f,!i&&l[c+3]<255&&(f=f*l[c+3]/255),p+=f*l[c],y+=f*l[c+1],x+=f*l[c+2],n+=f}}u[e]=p/n,u[e+1]=y/n,u[e+2]=x/n,u[e+3]=b/a}return e}function x(t,e,i){if(!e)return t;const{framebufferWidth:h,framebufferHeight:o,pixelRatio:l,region:g}=t,d=v(t,i),u=d.left+d.right,f=d.top+d.bottom,c=h-u,s=o-f,w=Math.min(r,Math.min((n-u)/c,(n-f)/s));return w<a?t:{...t,framebufferWidth:Math.round(c*w)+u,framebufferHeight:Math.round(s*w)+f,pixelRatio:l*w,resample:{region:{x:Math.round((g.x-d.left)*w)+d.left,y:Math.round((g.y-d.top)*w)+d.top,width:Math.round(g.width*w),height:Math.round(g.height*w)},width:h,height:o}}}function b(t,e){if(!t)return e;const i=t.width,h=t.height;if(null!=i&&null!=h)return{width:Math.floor(i),height:Math.floor(h)};if(null==i&&null==h)return e;const o=e.width/e.height;return null==h?{width:Math.floor(i),height:Math.floor(i/o)}:{width:Math.floor(h*o),height:Math.floor(h)}}function D(t,e){const i={x:0,y:0,width:e.width,height:e.height};if(t&&t.area){null!=t.area.x&&(i.x=Math.floor(t.area.x)),null!=t.area.y&&(i.y=Math.floor(t.area.y));const h=null!=t.area.width?Math.floor(t.area.width):null,o=null!=t.area.height?Math.floor(t.area.height):null;if(i.width=e.width-i.x,i.height=e.height-i.y,null!=h&&null!=o)i.width=Math.min(i.width,h),i.height=Math.min(i.height,o);else if(null==h&&null!=o){const t=Math.min(i.width,h);i.height=t/i.width*i.height,i.width=t}else if(null!=h&&null==o){const t=Math.min(i.height,o);i.width=t/i.height*i.width,i.height=t}}return j(q(i,t),e)}function j(t,e){const i=Math.floor(Math.max(t.x,0)),h=Math.floor(Math.max(t.y,0)),o={x:i,y:h,width:Math.floor(Math.min(t.width,e.width-i)),height:Math.floor(Math.min(t.height,e.height-h))},n=o.width/o.height,a=t.width/t.height;if(a===n)return o;if(a>n){const t=Math.floor(o.width/a),e=o.height-t;return{x:o.x,y:Math.floor(o.y+e/2),width:o.width,height:t}}const r=Math.floor(o.height*a),l=o.width-r;return{x:Math.floor(o.x+l/2),y:o.y,width:r,height:o.height}}function q(t,e){if(!e||null==e.width||null==e.height)return t;const i=e.width/e.height,h=t.width/t.height;if(h===i)return t;if(h<i){const e=Math.floor(t.height*i);return t.x-=(e-t.width)/2,t.width=e,t}const o=Math.floor(t.width/i);return t.y-=(o-t.height)/2,t.height=o,t}function v(t,e){return!e||t&&t.ignorePadding?H:e}function S(t){switch(t){case"png":case"jpg":case"jpeg":return t;default:return k}}function I(t){t.save(),t.globalCompositeOperation="copy",t.scale(1,-1),t.translate(0,-t.canvas.height),t.drawImage(t.canvas,0,0),t.restore()}function R(t){const e=t.data,i=e.length;for(let h=0;h<i;h+=4){const t=e[h+3];if(255!==t&&t>0){const i=255/t;e[h+0]=e[h+0]*i,e[h+1]=e[h+1]*i,e[h+2]=e[h+2]*i}}}const P={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},U=98,k="png",B={png:100,jpg:U,jpeg:U},H={top:0,right:0,bottom:0,left:0};t.createEmptyImageData=o.createEmptyImageData,t.completeUserSettings=l,t.encode=d,t.encodeData=u,t.getFormatAndQuality=M,t.getMaximumResolutionScale=p,t.resampleHermite=y,t.screenshotSuperSampleSettings=x,t.toDataUrl=m,t.toRenderSettings=g,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
