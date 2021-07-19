/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./aaBoundingRect","./boundsUtils","./jsonUtils","./spatialReferenceUtils"],(function(e,t,s,n,o){"use strict";function f(e){if(!e)return null;if(!e.spatialReference)return e;const t=o.getInfo(e.spatialReference);if(!t)return e;const s=t.valid[1];return n.isPolygon(e)?i(e,s):n.isPolyline(e)?r(e,s):e}function r(e,n){let o={paths:[],spatialReference:e.spatialReference};const[f,,r]=s.getBoundsXY(t.create(),e);let i=Math.ceil((f-n)/(2*n))*(2*n)+n;if(i>r)o=e;else{let t,s;for(;i<r;){const f=u(e,i);if(t=f[0],s=f[1],t)for(const e of t.paths)o.paths.push(e);if(null==s)break;e=s,i+=2*n}if(s)for(const e of s.paths)o.paths.push(e)}for(const t of o.paths){const e=g(s.getPointsBoundsCenterX(t),n);for(const s of t)s[0]-=2*e*n}return o}function i(e,n){let o={rings:[],spatialReference:e.spatialReference};const[f,,r]=s.getBoundsXY(t.create(),e);let i=Math.ceil((f-n)/(2*n))*(2*n)+n;if(i>r)o=e;else{let t,s;for(;i<r;){if([t,s]=h(e,i),t)for(const e of t.rings)o.rings.push(e);if(null==s)break;e=s,i+=2*n}if(s)for(const e of s.rings)o.rings.push(e)}for(const t of o.rings){const e=g(s.getPointsBoundsCenterX(t),n);for(const s of t)s[0]-=2*e*n}return o}const l=t.create();function u(e,t){const[n,,o]=s.getBoundsXY(l,e);let f,r;if(o<=t)f=e;else if(n>=t)r=e;else{f={paths:[]},r={paths:[]};const n=f.paths,o=r.paths;for(const f of e.paths){const[e,,r]=s.getPointsBounds(l,f);if(r<=t)n.push(f);else if(e>=t)o.push(f);else{let e=f[0],s=p(e,t),r=[];r.push(e);for(let i=1;i<f.length;i++){const l=f[i],u=p(l,t);if(u===s)r.push(l);else{const f=a(e,l,t);r.push(f),s?n.push(r):o.push(r),r=[f,l],s=u}e=l}s?n.push(r):o.push(r)}}}return[f,r]}function h(e,n){let o,f;const[r,,i]=s.getBoundsXY(t.create(),e);if(i<=n)o=e;else if(r>=n)f=e;else{const r=[],i=[],l=[];for(const o of e.rings){const[e,,f]=s.getPointsBounds(t.create(),o);if(f<=n)r.push(o);else if(e>=n)i.push(o);else{let e=o[o.length-1],t=p(e,n),s=[];for(const f of o){const o=p(f,n);if(o===t)s.push(f);else{const u=a(e,f,n);s.push(u),t?r.push(s):i.push(s),l.push(u[1]),s=[],s.push([u[0],u[1]]),s.push(f),t=o}e=f}t?r.push(s):i.push(s)}}l.sort();for(let e=0;e<l.length-1;e+=2){const t=[];t.push([n,l[e]]),t.push([n,l[e+1]]),r.length>0&&r.push(t),i.length>0&&i.push(t)}r.length>0&&(o=c(r)),i.length>0&&(f=c(i))}return[o,f]}function c(e){let t;const n={rings:[]};for(;e.length>0;){const o=e[0];let f=!1;const[r,i]=o[0],[l,u]=o[o.length-1];if(r!==l||i!==u)for(let h=1;h<e.length;h++){const c=e[h],[p,a]=c[0],[g,B]=c[c.length-1];if(u===a&&l===p){for(t=1;t<c.length;t++)o.push([c[t][0],c[t][1]]);f=!0}else if(u===B&&l===g){for(t=c.length-2;t>=0;t--)o.push([c[t][0],c[t][1]]);f=!0}else if(i===B&&r===g){for(t=0;t<c.length-1;t++)o.splice(t,0,[c[t][0],c[t][1]]);f=!0}else if(i===a&&r===p){for(t=1;t<c.length;t++)o.unshift([c[t][0],c[t][1]]);f=!0}if(f){e.splice(h,1),d(o[0],o[o.length-1])&&(e.shift(),s.getPointsBoundsWidth(o)>0&&n.rings.push(o));break}}f||(e.shift(),o.length,n.rings.push(o))}return n}function p([e],t){return e<t}function a([e,t],[s,n],o){return[o,t+(n-t)/(s-e)*(o-e)]}function g(e,t){let s=(e+t)/(2*t);return s%2==1&&s--,Math.floor(s)}function d([e,t],[s,n]){return e===s&&t===n}e.normalize=f,Object.defineProperty(e,"__esModule",{value:!0})}));
