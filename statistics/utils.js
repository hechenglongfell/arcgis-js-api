/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../rest/support/ClassBreaksDefinition","../rest/support/generateRendererUtils"],(function(e,n,t){"use strict";const l="<Null>",a="equal-interval",i=1,r=5,u=10,o=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,s=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),c=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){return null==e||"string"==typeof e&&!e?l:e}function f(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function d(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=v(n,e.percentileParams)),l}function p(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,r=null,u=null,o=null,s=null,c=0;const m=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const p of n)Number.isFinite(p)?p>=m&&p<=f&&(r=null===r?p:r+p,a=Math.min(a,p),i=Math.max(i,p),c++):"string"==typeof p&&c++;if(c&&null!=r){u=r/c;let e=0;for(const t of n)Number.isFinite(t)&&t>=m&&t<=f&&(e+=(t-u)**2);s=t?c>1?e/(c-1):0:c>0?e/c:0,o=Math.sqrt(s)}else a=null,i=null;const d={avg:u,count:c,max:i,min:a,stddev:o,sum:r,variance:s};return l&&(d.nullcount=n.length-c),e.percentileParams&&(d.median=v(n,e.percentileParams)),d}function v(e,n){const{fieldType:t,value:l,orderBy:a,isDiscrete:i}=n,r=g(t,"desc"===a);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>r(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const u=(e.length-1)*l,o=Math.floor(u),s=o+1,c=u%1,m=e[o],f=e[s];return s>=e.length||i||"string"==typeof m||"string"==typeof f?m:m*(1-c)+f*c}function g(e,n){const t=n?1:-1,l=h(n),a=V(n);if(!(!!e&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...s].includes(e)))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?a(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const a=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(a)||isNaN(i)?t:l(a,i)};if(s.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>a(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=V(n);return(n,t)=>e(y(n),y(t))}return n?(e,n)=>1:(e,n)=>-1}function b(e,n,t){if(t){if(null==e)return null==n?0:1;if(null==n)return-1}else{if(null==e)return null==n?0:-1;if(null==n)return 1}return null}function V(e){return e?(e,n)=>{const t=b(e,n,!0);return null!=t?t:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const t=b(e,n,!1);return null!=t?t:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}function h(e){return e?(e,n)=>{const t=b(e,n,!0);return null!=t?t:n-e}:(e,n)=>{const t=b(e,n,!1);return null!=t?t:e-n}}function y(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function T(e,n){let t;for(t in e)c.includes(t)&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function F(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function x(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function D(e,n,t,l){const a=e.count,i=[];if(t&&n){const e=[],t=x(n[0]);for(const a of t)if(n[1]){const t=x(n[1]);for(const i of t)if(n[2]){const t=x(n[2]);for(const n of t)e.push(`${m(a)}${l}${m(i)}${l}${m(n)}`)}else e.push(`${m(a)}${l}${m(i)}`)}else e.push(a);for(const n of e)a.hasOwnProperty(n)||(a[n]={data:n,count:0})}for(const r in a){const e=a[r];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function S(e,n,t,l){let a=null;switch(n){case"log":0!==e&&(a=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(a=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(a=e/t);break;case"natural-log":e>0&&(a=Math.log(e));break;case"square-root":e>0&&(a=e**.5)}return a}function z(e,n){const l=I({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||r});return e=N(e,n.minValue,n.maxValue),t.createGenerateRendererClassBreaks({definition:l,values:e,normalizationTotal:n.normalizationTotal})}function N(e,n,t){const l=n??-1/0,a=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=a))}function I(e){const{breakCount:t,field:l,normalizationField:r,normalizationType:u}=e,o=e.classificationMethod||a,s="standard-deviation"===o?e.standardDeviationInterval||i:void 0;return new n({breakCount:t,classificationField:l,classificationMethod:o,normalizationField:"field"===u?r:void 0,normalizationType:u,standardDeviationInterval:s})}function C(e,n){let t=e.classBreaks;const l=t.length,a=t[0].minValue,i=t[l-1].maxValue,r="standard-deviation"===n,u=o;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(r&&n){const e=n.match(u)?.map((e=>+e.trim()))??[];2===e.length?(t.minStdDev=e[0],t.maxStdDev=e[1],e[0]<0&&e[1]>0&&(t.hasAvg=!0)):1===e.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=e[0]):n.includes(">")&&(t.minStdDev=e[0],t.maxStdDev=null))}return t})),{minValue:a,maxValue:i,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function k(e,n){const t=M(e,n),l=t.intervals,a=t.min??0,i=t.max??0,r=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const u of e)if(null!=u&&u>=a&&u<=i){const e=B(l,u);e>-1&&r[e].count++}return{bins:r,minValue:a,maxValue:i,normalizationTotal:n.normalizationTotal}}function M(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:a,normalizationType:i,normalizationField:r,normalizationTotal:o,minValue:s,maxValue:c}=n,m=n.numBins||u;let d=null,v=null,g=null;if((!l||"equal-interval"===l)&&!i){if(null!=s&&null!=c)d=s,v=c;else{const n=p({values:e,minValue:s,maxValue:c,useSampleStdDev:!i,supportsNullCount:f({normalizationType:i,normalizationField:r,minValue:s,maxValue:c})});d=n.min??null,v=n.max??null}g=U(d??0,v??0,m)}else{const{classBreaks:n}=z(e,{field:t,normalizationType:i,normalizationField:r,normalizationTotal:o,classificationMethod:l,standardDeviationInterval:a,minValue:s,maxValue:c,numClasses:m});d=n[0].minValue,v=n[n.length-1].maxValue,g=n.map((e=>[e.minValue,e.maxValue]))}return{min:d,max:v,intervals:g}}function B(e,n){let t=-1;for(let l=e.length-1;l>=0;l--){if(n>=e[l][0]){t=l;break}}return t}function U(e,n,t){const l=(n-e)/t,a=[];let i,r=e;for(let u=1;u<=t;u++)i=r+l,i=Number(i.toFixed(16)),a.push([r,u===t?n:i]),r=i;return a}e.calculateClassBreaks=z,e.calculateHistogram=k,e.calculatePercentile=v,e.calculateStatistics=p,e.calculateStringStatistics=d,e.calculateUniqueValuesCount=F,e.createClassBreaksDefinition=I,e.createUVResult=D,e.getAttributeComparator=g,e.getEqualIntervalBins=U,e.getNormalizedValue=S,e.isNullCountSupported=f,e.processNullValue=m,e.processSummaryStatisticsResult=T,e.resolveCBResult=C,e.statisticTypes=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
