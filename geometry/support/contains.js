/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(n,t){"use strict";const o=[0,0];function r(n,o){return!!t.isSome(o)&&a(n,o.x,o.y,o.z)}function e(n,t){if(!t.points||t.points.length)return!1;for(const o of t.points)if(!u(n,o))return!1;return!0}function i(n,t){const{xmin:o,ymin:r,zmin:e,xmax:i,ymax:u,zmax:s}=t;return n.hasZ&&t.hasZ?a(n,o,r,e)&&a(n,o,u,e)&&a(n,i,u,e)&&a(n,i,r,e)&&a(n,o,r,s)&&a(n,o,u,s)&&a(n,i,u,s)&&a(n,i,r,s):a(n,o,r)&&a(n,o,u)&&a(n,i,u)&&a(n,i,r)}function u(n,t){return a(n,t[0],t[1])}function s(n,t){return a(n,t[0],t[1],t[2])}function a(n,t,o,r){return t>=n.xmin&&t<=n.xmax&&o>=n.ymin&&o<=n.ymax&&(null==r||!n.hasZ||r>=n.zmin&&r<=n.zmax)}function f(n,t){return o[1]=t.y,o[0]=t.x,c(n,o)}function c(n,t){return x(n.rings,t)}function x(n,t){if(!n)return!1;if(l(n))return m(!1,n,t);let o=!1;for(let r=0,e=n.length;r<e;r++)o=m(o,n[r],t);return o}function l(n){return!Array.isArray(n[0][0])}function m(n,t,o){const[r,e]=o;let i=n,u=0;for(let s=0,a=t.length;s<a;s++){u++,u===a&&(u=0);const[n,o]=t[s],[f,c]=t[u];(o<e&&c>=e||c<e&&o>=e)&&n+(e-o)/(c-o)*(f-n)<r&&(i=!i)}return i}n.extentContainsCoords2D=u,n.extentContainsCoords3D=s,n.extentContainsExtent=i,n.extentContainsMultipoint=e,n.extentContainsPoint=r,n.extentContainsXYZ=a,n.polygonContainsCoords=c,n.polygonContainsPoint=f,n.ringsContainsCoords=x,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
