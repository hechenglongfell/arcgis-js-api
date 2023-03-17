/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has"],(function(t,n){"use strict";let e=function(){function t(){}var n=t.prototype;return n.filter=function(t,n){return n},n.notifyElevationSourceChange=function(){},t}(),r=function(){function t(){}var n=t.prototype;return n.filter=function(t,n){const{point:e,distance:r}=t,{z:i}=e;if(!(null!=i))return n;if(0===n.length)return n;const c=f(r),u=this._updateCandidatesTo3D(n,e,c).filter(o);return u.sort(s),u},n._updateCandidatesTo3D=function(t,n,e){for(const r of t)switch(r.type){case"edge":c(r,n,e);continue;case"vertex":a(r,n,e);continue}return t},t}();function o(t){return t.distance<=1}function i(t=!1){return t?new r:new e}function c(t,n,{x:e,y:r,z:o}){const{start:i,end:c,target:a}=t;t.draped||u(a,n,i,c);const f=(n.x-a.x)/e,s=(n.y-a.y)/r,d=(n.z-a.z)/o;t.distance=Math.sqrt(f*f+s*s+d*d)}function u(t,n,e,r){const o=r.x-e.x,i=r.y-e.y,c=r.z-e.z,u=o*o+i*i+c*c,a=(n.x-e.x)*o+(n.y-e.y)*i+c*(n.z-e.z),f=Math.min(1,Math.max(0,a/u)),s=e.x+o*f,d=e.y+i*f,y=e.z+c*f;t.x=s,t.y=d,t.z=y}function a(t,n,{x:e,y:r,z:o}){const{target:i}=t,c=(n.x-i.x)/e,u=(n.y-i.y)/r,a=(n.z-i.z)/o,f=Math.sqrt(c*c+u*u+a*a);t.distance=f}function f(t){return"number"==typeof t?{x:t,y:t,z:t}:t}function s(t,n){return t.distance-n.distance}t.getSnappingCandidateElevationFilter=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
