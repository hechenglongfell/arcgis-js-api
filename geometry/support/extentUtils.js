/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./boundsUtils"],(function(n,t){"use strict";function i(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function o(n){return void 0!==n.points}function u(n){return void 0!==n.x&&void 0!==n.y}function e(n){return void 0!==n.paths}function r(n){return void 0!==n.rings}const m=[];function x(n,t,i,o){return{xmin:n,ymin:t,xmax:i,ymax:o}}function s(n,t,i,o,u,e){return{xmin:n,ymin:t,zmin:i,xmax:o,ymax:u,zmax:e}}function a(n,t,i,o,u,e){return{xmin:n,ymin:t,mmin:i,xmax:o,ymax:u,mmax:e}}function c(n,t,i,o,u,e,r,m){return{xmin:n,ymin:t,zmin:i,mmin:o,xmax:u,ymax:e,zmax:r,mmax:m}}function l(n,t=!1,i=!1){return t?i?c(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):s(n[0],n[1],n[2],n[3],n[4],n[5]):i?a(n[0],n[1],n[2],n[3],n[4],n[5]):x(n[0],n[1],n[2],n[3])}function f(n){return n?i(n)?n:u(n)?d(n):r(n)?g(n):e(n)?h(n):o(n)?y(n):null:null}function y(n){const{hasZ:i,hasM:o,points:u}=n;return l(t.getPointsBounds(m,u,i??!1,o??!1),i,o)}function d(n){const{x:t,y:i,z:o,m:u}=n,e=null!=u;return null!=o?e?c(t,i,o,u,t,i,o,u):s(t,i,o,t,i,o):e?a(t,i,u,t,i,u):x(t,i,t,i)}function g(n){const{hasZ:i,hasM:o,rings:u}=n,e=t.getRingsOrPathsBounds(m,u,i??!1,o??!1);return e?l(e,i,o):null}function h(n){const{hasZ:i,hasM:o,paths:u}=n,e=t.getRingsOrPathsBounds(m,u,i??!1,o??!1);return e?l(e,i,o):null}n.getGeometryExtent=f,n.getMultipointExtent=y,n.getPointExtent=d,n.getPolygonExtent=g,n.getPolylineExtent=h,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
