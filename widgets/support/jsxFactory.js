/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./jsxWidgetSupport"],(function(e,t){"use strict";var r=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},o=function(e,t){for(var n=0,i=e.length;n<i;n++){var d=e[n];Array.isArray(d)?o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=r(d)),t.push(d))}},n=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(1===r.length&&"string"==typeof r[0])return{vnodeSelector:e,properties:t||void 0,children:void 0,text:r[0],domNode:null};var i=[];return o(r,i),{vnodeSelector:e,properties:t||void 0,children:i,text:void 0,domNode:null}};function i(e,r,...o){return"function"!=typeof e||t.isWidgetConstructor(e)?n(e,r,...o):e(r,...o)}function d(...e){return e}e.tsx=i,e.tsxFragment=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
