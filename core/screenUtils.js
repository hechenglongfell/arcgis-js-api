/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";const e=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,r="screenUtils.toPt: input not recognized!",t=96;function c(n){return n?n/72*t:0}function o(n){return n?72*n/t:0}function u(n){if("string"==typeof n){const t=n.match(e);if(t){const e=Number(t[1]),r=t[3]&&t[3].toLowerCase(),c="-"===n.charAt(0),u="px"===r?o(e):e;return c?-u:u}return console.warn(r),null}return n}function i(n=0,e=0){return{x:n,y:e}}function a(n=0,e=0){return[n,e]}function f(n=0,e=0){return{x:n,y:e}}function s(n=0,e=0){return P([n,e])}function y(n=0,e=0,r=0){return d([n,e,r])}function P(n){return n}function d(n){return n}function p(n){return n}function x(n,e){return e?(e.x=n[0],e.y=n[1],e):{x:n[0],y:n[1]}}function A(n,e){return e?(e[0]=n.x,e[1]=n.y,e.length>2&&(e[2]=0),e):[n.x,n.y]}n.castRenderScreenPointArray=P,n.castRenderScreenPointArray3=d,n.castScreenPointArray=p,n.createRenderScreenPoint=f,n.createRenderScreenPointArray=s,n.createRenderScreenPointArray3=y,n.createScreenPoint=i,n.createScreenPointArray=a,n.pt2px=c,n.px2pt=o,n.screenPointArrayToObject=x,n.screenPointObjectToArray=A,n.toPt=u,Object.defineProperty(n,"__esModule",{value:!0})}));
