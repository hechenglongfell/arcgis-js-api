/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,t){"use strict";function n(e){const t={fieldValueMap:new Map,allowedValues:[]};for(const n of e){const e=n.fieldValueMap,o=t.fieldValueMap;e.forEach(((e,n)=>{o.has(n)||(o.set(n,e),t.allowedValues.push(n))}))}return t.allowedValues.sort(((e,t)=>e-t)),t}function o(e){let n=null;for(const o of e)n=t.isSome(n)?Math.min(n,o):o;return n}function l(e){let n=null;for(const o of e)n=t.isSome(n)?Math.max(n,o):o;return n}function a(e,t){return t.allowedValues.length>0?u(e,t.allowedValues):null}function u(e,t){if(0===t.length)return e;if(e===1/0)return t[t.length-1];if(e===-1/0)return t[0];let n=t[0],o=Math.abs(n-e);for(const l of t){const t=Math.abs(l-e);t<o&&(n=l,o=t)}return n}e.findClosest=u,e.getDomainInfo=n,e.getMax=l,e.getMin=o,e.getValidNumber=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
