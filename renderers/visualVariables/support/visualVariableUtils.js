/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../Color","../../../Graphic","../../../core/compilerUtils","../../../core/Logger","../../../core/maybe","../../support/lengthUtils","./sizeVariableUtils"],(function(e,a,i,r,n,t,s,l){"use strict";const o=n.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),c=new i,u=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function f(e,i,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof i,l=s?null:i,c=l&&l.attributes;let u=s?i:null;const d=n.field,{ipData:f,hasExpression:p}=n.cache;let b=n.cache.compiledFunc;if(!d&&!p){const e=n.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(p){if(!t.isSome(r)||!t.isSome(r.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},a=r.arcade.arcadeUtils,i=a.getViewInfo(e),s=a.createExecContext(l,i);if(!b){const e=a.createSyntaxTree(n.valueExpression);b=a.createFunction(e),n.cache.compiledFunc=b}u=a.executeFunction(b,s)}else c&&(u=c[d]);const v=n.normalizationField,m=c?parseFloat(c[v]):void 0;if(null!=u&&(!v||s||!isNaN(m)&&0!==m)){isNaN(m)||s||(u/=m);const e=D(u,f);if(e){const i=e[0],s=e[1],l=i===s?n.stops[i].color:a.blendColors(n.stops[i].color,n.stops[s].color,e[2],t.isSome(r)?r.color:void 0);return new a(l)}}}function p(e,a,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof a,s=n?null:a,l=s&&s.attributes;let c=n?a:null;const u=r.field,{ipData:d,hasExpression:f}=r.cache;let p=r.cache.compiledFunc;if(!u&&!f){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof c)if(f){if(t.isNone(i)||t.isNone(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(e),l=a.createExecContext(s,n);if(!p){const e=a.createSyntaxTree(r.valueExpression);p=a.createFunction(e),r.cache.compiledFunc=p}c=a.executeFunction(p,l)}else l&&(c=l[u]);const b=r.normalizationField,v=l?parseFloat(l[b]):void 0;if(null!=c&&(!b||n||!isNaN(v)&&0!==v)){isNaN(v)||n||(c/=v);const e=D(c,d);if(e){const a=e[0],i=e[1];if(a===i)return r.stops[a].opacity;{const n=r.stops[a].opacity;return n+(r.stops[i].opacity-n)*e[2]}}}}function b(e,a,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=r.axis||"heading",s="heading"===n&&"arithmetic"===r.rotationType?90:0,l="heading"===n&&"arithmetic"===r.rotationType?-1:1,c="number"==typeof a?null:a,u=c&&c.attributes,d=r.field,{hasExpression:f}=r.cache;let p=r.cache.compiledFunc,b=0;if(!d&&!f)return b;if(f){if(t.isNone(i)||t.isNone(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(e),s=a.createExecContext(c,n);if(!p){const e=a.createSyntaxTree(r.valueExpression);p=a.createFunction(e),r.cache.compiledFunc=p}b=a.executeFunction(p,s)}else u&&(b=u[d]||0);return b="number"!=typeof b||isNaN(b)?null:s+l*b,b}function v(e,a,i){const r="number"==typeof a,n=r?null:a,s=n&&n.attributes;let c=r?a:null;const{isScaleDriven:u}=e.cache;let d=e.cache.compiledFunc;if(u){const a=t.isSome(i)?i.scale:void 0,r=t.isSome(i)?i.view:void 0;c=null==a||"3d"===r?m(e):a}else if(!r)switch(e.inputValueType){case"expression":{if(t.isNone(i)||t.isNone(i.arcade))return void o.error("Use of arcade expressions requires an arcade context");const a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,s=r.getViewInfo(a),l=r.createExecContext(n,s);if(!d){const a=r.createSyntaxTree(e.valueExpression);d=r.createFunction(a),e.cache.compiledFunc=d}c=r.executeFunction(d,l);break}case"field":s&&(c=s[e.field]);break;case"unknown":c=null}if(!l.isValidNumber(c))return null;if(r||!e.normalizationField)return c;const f=s?parseFloat(s[e.normalizationField]):null;return l.isValidNumber(f)&&0!==f?c/f:null}function m(e){let a=null,i=null;const r=e.stops;return r?(a=r[0].value,i=r[r.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}function h(e,a,i){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void o.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=E(v(r,a,i),r,a,i,r.cache.ipData);return null==n||isNaN(n)?0:n}function V(e,a,i){return null==e?null:l.isSizeVariable(e)?h(e,a,i):l.isValidNumber(e)?e:null}function x(e,a,i){return l.isValidNumber(i)&&e>i?i:l.isValidNumber(a)&&e<a?a:e}function g(e,a,i,r){return e+(V(a.minSize,i,r)||a.minDataValue)}function S(e,a,i){const r=e.stops;let n=r&&r.length&&r[0].size;return null==n&&(n=e.minSize),V(n,a,i)}function y(e,a,i,r){const n=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),s=V(a.minSize,i,r),l=V(a.maxSize,i,r),o=t.isSome(r)?r.shape:void 0;if(e<=a.minDataValue)return s;if(e>=a.maxDataValue)return l;if("area"===a.scaleBy&&o){const e="circle"===o,a=e?u*(s/2)**2:s*s,i=a+n*((e?u*(l/2)**2:l*l)-a);return e?2*Math.sqrt(i/u):Math.sqrt(i)}return s+n*(l-s)}function z(e,a,i,r){const n=t.isSome(r)?r.shape:void 0,s=e/a.minDataValue,l=V(a.minSize,i,r),o=V(a.maxSize,i,r);let c=null;return c="circle"===n?2*Math.sqrt(s*(l/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(s*l**2):s*l,x(c,l,o)}function w(e,a,i,r,n){const[t,s,l]=D(e,n);if(t===s)return V(a.stops[t].size,i,r);{const e=V(a.stops[t].size,i,r);return e+(V(a.stops[s].size,i,r)-e)*l}}function F(e,a,i,r){const n=(t.isSome(r)&&r.resolution?r.resolution:1)*s.meterIn[a.valueUnit],l=V(a.minSize,i,r),o=V(a.maxSize,i,r),{valueRepresentation:c}=a;let d=null;return d="area"===c?2*Math.sqrt(e/u)/n:"radius"===c||"distance"===c?2*e/n:e/n,x(d,l,o)}function N(e){return e}function E(e,a,i,r,n){switch(a.transformationType){case"additive":return g(e,a,i,r);case"constant":return S(a,i,r);case"clamped-linear":return y(e,a,i,r);case"proportional":return z(e,a,i,r);case"stops":return w(e,a,i,r,n);case"real-world-size":return F(e,a,i,r);case"identity":return N(e);case"unknown":return null}}function M(e,a,i){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===i||a))return null;const n={scale:a,view:i};let t=V(e.minSize,c,n),s=V(e.maxSize,c,n);if(null!=t||null!=s){if(t>s){const e=s;s=t,t=e}return{minSize:t,maxSize:s}}}function R(e,a,i){if(!e.visualVariables)return;const r=[],n=[],t=[],s=[],l=[];for(const o of e.visualVariables)switch(o.type){case"color":n.push(o);break;case"opacity":t.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return n.forEach((e=>{const n=f(e,a,i);r.push({variable:e,value:n})})),t.forEach((e=>{const n=p(e,a,i);r.push({variable:e,value:n})})),l.forEach((e=>{const n=b(e,a,i);r.push({variable:e,value:n})})),s.forEach((e=>{const n=h(e,a,i);r.push({variable:e,value:n})})),r.filter((e=>null!=e.value))}function D(e,a){if(!a)return;let i=0,r=a.length-1;return a.some(((a,n)=>e<a?(r=n,!0):(i=n,!1))),[i,r,(e-a[i])/(a[r]-a[i])]}function C(e,a,i){const n=["proportional","proportional","proportional"];for(const t of e){const e=t.useSymbolValue?"symbol-value":h(t,a,i);switch(t.axis){case"width":n[0]=e;break;case"depth":n[1]=e;break;case"height":n[2]=e;break;case"width-and-depth":n[0]=e,n[1]=e;break;case"all":case void 0:case null:n[0]=e,n[1]=e,n[2]=e;break;default:r.neverReached(t.axis)}}return n}e.getAllSizes=C,e.getColor=f,e.getOpacity=p,e.getRotationAngle=b,e.getSize=h,e.getSizeForValue=E,e.getSizeFromNumberOrVariable=V,e.getSizeRangeAtScale=M,e.getVisualVariableValues=R,e.viewScaleRE=d,Object.defineProperty(e,"__esModule",{value:!0})}));
