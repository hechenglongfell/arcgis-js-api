/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../has","../Logger","../MapUtils"],(function(e,n,r,t){"use strict";const u=r.getLogger("esri.core.accessorSupport.ensureTypes");function o(e){return null==e?e:new Date(e)}function s(e){return null==e?e:!!e}function a(e){return null==e?e:e.toString()}function i(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function l(e){return null==e?e:Math.round(parseFloat(e))}function c(e){return e&&e.constructor&&void 0!==e.constructor.__accessorMetadata__}function f(e,n){return null!=n&&e&&!(n instanceof e)}function p(e){return e&&"isCollection"in e}function y(e){return e&&e.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function g(e,n){if(!n||!n.constructor||!p(n.constructor))return v(e,n)?n:new e(n);const r=y(e.prototype.itemType),t=y(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(v(e,n),n):new e(n):n}function v(e,n){return!!c(n)&&(u.error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+b(e)+"'"),!0)}function d(e,n){return null==n?n:p(e)?g(e,n):f(e,n)?v(e,n)?n:new e(n):n}function b(e){return e&&e.prototype&&e.prototype.declaredClass||"unknown"}const h=new WeakMap;function m(e){switch(e){case Number:return i;case j:return l;case Boolean:return s;case String:return a;case Date:return o;default:return t.getOrCreateMapValue(h,e,(()=>d.bind(null,e)))}}function A(e,n){const r=m(e);return 1===arguments.length?r:r(n)}function w(e,n,r){return 1===arguments.length?w.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function T(e,n){return 1===arguments.length?w(A.bind(null,e)):w(A.bind(null,e),n)}function $(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>$(e,n-1,r))):e(r)}function O(e,n,r){if(2===arguments.length)return O.bind(null,e,n);if(!r)return r;let t=n,u=r=$(e,n,r);for(;t>0&&Array.isArray(u);)t--,u=u[0];if(void 0!==u)for(let o=0;o<t;o++)r=[r];return r}function S(e,n,r){return 2===arguments.length?O(A.bind(null,e),n):O(A.bind(null,e),n,r)}function k(e){return!!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return!("string"===r||"number"===r||"function"===r&&e.length>1)}))}function M(e,n){if(2===arguments.length)return M(e).call(null,n);const r=new Set,t=e.filter((e=>"function"!=typeof e)),o=e.filter((e=>"function"==typeof e));for(const u of e)"string"!=typeof u&&"number"!=typeof u||r.add(u);let s=null,a=null;return(e,n)=>{if(null==e)return e;const i=typeof e,l="string"===i||"number"===i;return l&&(r.has(e)||o.some((e=>"string"===i&&e===String||"number"===i&&e===Number)))||"object"===i&&o.some((n=>!f(e,n)))?e:(l&&t.length?(s||(s=t.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),u.error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${s}`)):"object"==typeof e&&o.length?(a||(a=o.map((e=>b(e))).join(", ")),u.error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${a}`)):u.error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function N(e,n){if(2===arguments.length)return N(e).call(null,n);const r={},t=[],o=[];for(const u in e.typeMap){const n=e.typeMap[u];r[u]=A(n),t.push(b(n)),o.push(u)}const s=()=>`'${t.join("', '")}'`,a=()=>`'${o.join("', '")}'`,i="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!f(e.base,n))return n;if(null==n)return n;const t=i(n)||e.defaultKeyValue,o=r[t];if(!o)return u.error("Accessor#set",`Invalid property value, value needs to be one of ${s()}, or a plain object that can autocast (having .type = ${a()})`),null;if(!f(e.typeMap[t],n))return n;if("string"==typeof e.key&&!c(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return o(r)}return o(n)}}let j=function(){};const C={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function B(e){if(!e||!("type"in e))return!1;switch(e.type){case"native":case"array":case"one-of":return!0}return!1}function D(e){switch(e.type){case"native":return A(e.value);case"array":return w(D(e.value));case"one-of":return F(e);default:return null}}function F(e){let n=null;return(r,t)=>L(r,e)?r:(null==n&&(n=I(e)),u.error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),t&&(t.valid=!1),null)}function I(e){switch(e.type){case"native":switch(e.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case j:return"integer";case Date:return"date";default:return b(e.value)}case"array":return`array of ${I(e.value)}`;case"one-of":{const n=e.values.map((e=>I(e)));return`one of ${n.slice(0,n.length-1)} or ${n[n.length-1]}`}}return"unknown"}function L(e,n){if(null==e)return!0;switch(n.type){case"native":switch(n.value){case Number:case j:return"number"==typeof e;case Boolean:return"boolean"==typeof e;case String:return"string"==typeof e}return e instanceof n.value;case"array":return!!Array.isArray(e)&&!e.some((e=>!L(e,n.value)));case"one-of":return n.values.some((n=>L(e,n)))}}e.Integer=j,e.ensureArray=T,e.ensureArrayTyped=w,e.ensureBoolean=s,e.ensureClass=d,e.ensureDate=o,e.ensureInteger=l,e.ensureLongFormType=D,e.ensureNArray=S,e.ensureNArrayTyped=O,e.ensureNumber=i,e.ensureOneOf=M,e.ensureOneOfType=N,e.ensureString=a,e.ensureType=A,e.isClassedType=c,e.isLongFormType=B,e.isOneOf=k,e.requiresType=f,e.types=C,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
