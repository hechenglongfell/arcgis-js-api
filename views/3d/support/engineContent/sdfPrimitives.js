/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/floatRGBA","../../webgl-engine/lib/Texture","../../../webgl/enums"],(function(t,e,r,n,a){"use strict";const c=128,u=.5;function o(t,e=c,r=e*u,o=0){const i=s(t,e,r,o);return new n.Texture(i,{mipmap:!1,wrap:{s:a.TextureWrapMode.CLAMP_TO_EDGE,t:a.TextureWrapMode.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0})}function s(t,e=c,r=e*u,n=0){switch(t){case"circle":default:return i(e,r);case"square":return M(e,r);case"cross":return f(e,r,n);case"x":return l(e,r,n);case"kite":return h(e,r);case"triangle":return T(e,r);case"arrow":return S(e,r)}}function i(t,e){const r=t/2-.5;return A(t,x(r,r,e/2))}function M(t,e){return p(t,e,!1)}function h(t,e){return p(t,e,!0)}function f(t,e,r=0){return b(t,e,!1,r)}function l(t,e,r=0){return b(t,e,!0,r)}function T(t,e){return A(t,w(t/2,e,e/2))}function S(t,e){const r=e,n=e/2,a=t/2,c=.8*r,u=x(a,(t-e)/2-c,Math.sqrt(c*c+n*n)),o=w(a,r,n);return A(t,((t,e)=>Math.max(o(t,e),-u(t,e))))}function p(t,e,r){return r&&(e/=Math.SQRT2),A(t,((n,a)=>{let c=n-.5*t+.25,u=.5*t-a-.75;if(r){const t=(c+u)/Math.SQRT2;u=(u-c)/Math.SQRT2,c=t}return Math.max(Math.abs(c),Math.abs(u))-.5*e}))}function b(t,e,r,n=0){e-=n,r&&(e*=Math.SQRT2);const a=.5*e;return A(t,((e,c)=>{let u,o=e-.5*t,s=.5*t-c-1;if(r){const t=(o+s)/Math.SQRT2;s=(s-o)/Math.SQRT2,o=t}return o=Math.abs(o),s=Math.abs(s),u=o>s?o>a?Math.sqrt((o-a)*(o-a)+s*s):s:s>a?Math.sqrt(o*o+(s-a)*(s-a)):o,u-=n/2,u}))}function x(t,e,r){return(n,a)=>{const c=n-t,u=a-e;return Math.sqrt(c*c+u*u)-r}}function w(t,e,r){const n=Math.sqrt(e*e+r*r);return(a,c)=>{const u=Math.abs(a-t)-r,o=c-t+e/2+.75,s=(e*u+r*o)/n,i=-o;return Math.max(s,i)}}function A(t,e){const n=new Uint8Array(4*t*t);for(let a=0;a<t;a++)for(let c=0;c<t;c++){const u=c+t*a;let o=e(c,a);o=o/t+.5,r.packFloatRGBA(o,n,4*u)}return n}t.DEFAULT_SYMBOL_SIZE_RATIO=u,t.DEFAULT_TEX_SIZE=c,t.createArrow=S,t.createCircle=i,t.createCross=f,t.createKite=h,t.createSquare=M,t.createTexture=o,t.createTriangle=T,t.createX=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
