/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";const i=0,t=100;function o(n,i,t){return n[0]=i[0]-t[0],n[1]=i[1]-t[1],n}function e(n,i){return Math.sqrt(n*n+i*i)}function u(n){const i=e(n[0],n[1]);n[0]/=i,n[1]/=i}function r(n,i){return e(n[0]-i[0],n[1]-i[1])}function c(n){return"function"==typeof n}function s(n=2){return 1/Math.max(n,1)}function a(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function f(n){return void 0!==n.points}function l(n){return void 0!==n.x&&void 0!==n.y}function m(n){return void 0!==n.paths}function d(n){return void 0!==n.rings}function x(n,o){return[!!n?.minScale&&o.scaleToZoom(n.minScale)||i,!!n?.maxScale&&o.scaleToZoom(n.maxScale)||t]}n.DEFAULT_MAX_ZOOM=t,n.DEFAULT_MIN_ZOOM=i,n.dist=r,n.getLimitCosine=s,n.getMinMaxZoom=x,n.isExtent=a,n.isFunction=c,n.isMultipoint=f,n.isPoint=l,n.isPolygon=d,n.isPolyline=m,n.len=e,n.normalize=u,n.sub=o,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
