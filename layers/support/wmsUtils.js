/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/maybe","../../core/urlUtils","../../geometry/Extent","../../geometry/SpatialReference","../ogc/crsUtils"],(function(e,t,n,r,i,s,o){"use strict";const a={84:4326,83:4269,27:4267};function l(e){if(!e)return null;const r={idCounter:-1};if("string"==typeof e){e=(new DOMParser).parseFromString(e,"text/xml")}const s=e.documentElement;if("ServiceExceptionReport"===s.nodeName){const e=Array.prototype.slice.call(s.childNodes).map((e=>e.textContent)).join("\r\n");throw new t("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const o=p("Capability",s),a=p("Service",s),l=o&&p("Request",o);if(!o||!a||!l)return null;const u=p("Layer",o);if(!u)return null;const d="WMS_Capabilities"===s.nodeName||"WMT_MS_Capabilities"===s.nodeName?s.getAttribute("version"):"1.3.0",f=g("Title",a,"")||g("Name",a,""),x=g("AccessConstraints",a,""),h=/^none$/i.test(x)?"":x,y=g("Abstract",a,""),E=parseInt(g("MaxWidth",a,"5000"),10),w=parseInt(g("MaxHeight",a,"5000"),10),L=b(l,"GetMap"),F=N(l,"GetMap"),v=A(u,d,r);if(!v)return null;let C,I=0;const R=Array.prototype.slice.call(o.childNodes),O=v.sublayers??[],T=e=>{null!=e&&O.push(e)};R.forEach((e=>{"Layer"===e.nodeName&&(0===I?C=e:1===I?(v.name&&(v.name="",T(A(C,d,r))),T(A(e,d,r))):T(A(e,d,r)),I++)}));let D=v.sublayers,U=v.extent;const V=v.fullExtents??[];if(D||(D=[]),0===D.length&&D.push(v),!U){const e=new i(D[0].extent);v.extent=e.toJSON(),U=v.extent}const _=v.spatialReferences.length>0?v.spatialReferences:c(v),k=N(l,"GetFeatureInfo"),B=k?b(l,"GetFeatureInfo"):null,W=m(D),q=v.minScale||0,X=v.maxScale||0,G=v.dimensions??[],P=W.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),j=G.concat(P).filter(M);let $=null;if(j.length){const e=j.map((e=>{const{extent:t}=e;return S(t)?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(n.isSome);$={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:h,description:y,dimensions:G,extent:U,fullExtents:V,featureInfoFormats:B,featureInfoUrl:k,mapUrl:F,maxWidth:E,maxHeight:w,maxScale:X,minScale:q,layers:W,spatialReferences:_,supportedImageFormatTypes:L,timeInfo:$,title:f,version:d}}function u(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((({name:e})=>e)).join():null}function c(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=c(t);if(e.length>0)return e}return[]}function m(e){let t=[];for(const n of e)t.push(n),n.sublayers?.length&&(t=t.concat(m(n.sublayers)),delete n.sublayers);return t}function d(e,t,n){return t.getAttribute(e)??n}function f(e,t,n,r){const i=p(e,n);return i?d(t,i,r):r}function p(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(E(r)&&r.nodeName===e)return r}return null}function x(e,t){if(null==t)return[];const n=[];for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];E(i)&&i.nodeName===e&&n.push(i)}return n}function g(e,t,n){return p(e,t)?.textContent??n}function h(e,t,n){if(!e)return null;const r=parseFloat(e.getAttribute("minx")),o=parseFloat(e.getAttribute("miny")),a=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let u,c,m,d;n?(u=isNaN(o)?-Number.MAX_VALUE:o,c=isNaN(r)?-Number.MAX_VALUE:r,m=isNaN(l)?Number.MAX_VALUE:l,d=isNaN(a)?Number.MAX_VALUE:a):(u=isNaN(r)?-Number.MAX_VALUE:r,c=isNaN(o)?-Number.MAX_VALUE:o,m=isNaN(a)?Number.MAX_VALUE:a,d=isNaN(l)?Number.MAX_VALUE:l);const f=new s({wkid:t});return new i({xmin:u,ymin:c,xmax:m,ymax:d,spatialReference:f})}function N(e,t){const n=p(t,e);if(n){const e=p("DCPType",n);if(e){const t=p("HTTP",e);if(t){const e=p("Get",t);if(e){let t=f("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),v(t,["service","request"])}}}}return null}function b(e,t){const r=x("Operation",e);if(!r.length){return x("Format",p(t,e)).map((({textContent:e})=>e)).filter(n.isSome)}const i=[];for(const n of r)if(n.getAttribute("name")===t){const e=x("Format",n);for(const{textContent:t}of e)null!=t&&i.push(t)}return i}function y(e,t,n){const r=p(t,e);if(!r)return n;const{textContent:i}=r;if(null==i||""===i)return n;const s=Number(i);return isNaN(s)?n:s}function A(e,t,n){if(!e)return null;const r={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},l=p("LatLonBoundingBox",e),u=p("EX_GeographicBoundingBox",e);let c=null;l&&(c=h(l,4326)),u&&(c=new i(0,0,0,0,new s({wkid:4326})),c.xmin=parseFloat(g("westBoundLongitude",u,"0")),c.ymin=parseFloat(g("southBoundLatitude",u,"0")),c.xmax=parseFloat(g("eastBoundLongitude",u,"0")),c.ymax=parseFloat(g("northBoundLatitude",u,"0"))),l||u||(c=new i(-180,-90,180,90,new s({wkid:4326}))),r.minScale=y(e,"MaxScaleDenominator",0),r.maxScale=y(e,"MinScaleDenominator",0);const m=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)r.name=e.textContent||"";else if("Title"===e.nodeName)r.title=e.textContent||"";else if("Abstract"===e.nodeName)r.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(m);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||c||(c="1.3.0"===t?h(e,r,o.isAxesOrderReversedForWkid(r)):h(e,r))}const i=n&&n.indexOf(":");if(i&&i>-1){let s=parseInt(n.substring(i+1,n.length),10);0===s||isNaN(s)||(s=a[s]?a[s]:s);const l="1.3.0"===t?h(e,s,o.isAxesOrderReversedForWkid(s)):h(e,s);l&&r.fullExtents&&r.fullExtents.push(l)}}else if(e.nodeName===m){(e.textContent?.split(" ")??[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=a[t]?a[t]:t;r.spatialReferences.includes(e)||r.spatialReferences.push(e)}}))}else if("Style"!==e.nodeName||r.legendURL){if("Layer"===e.nodeName){const i=A(e,t,n);i&&(i.parentLayerId=r.id,r.sublayers||(r.sublayers=[]),r.sublayers.push(i))}}else{const t=p("LegendURL",e);if(t){const e=p("OnlineResource",t);e&&(r.legendURL=e.getAttribute("xlink:href"))}}})),r.extent=c?.toJSON(),r.dimensions=x("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,i=e.getAttribute("unitSymbol")??void 0,s=e.getAttribute("default")??void 0,o="0"!==d("default",e,"0"),a="0"!==d("nearestValue",e,"0"),l="0"!==d("current",e,"0");if(M({name:t,units:n})){return{name:"time",units:"ISO8601",extent:R(r),default:R(s),multipleValues:o,nearestValue:a,current:l}}if(L({name:t,units:n})){return{name:"elevation",units:n,extent:C(r),unitSymbol:i,default:C(s),multipleValues:o,nearestValue:a}}return{name:t,units:n,extent:I(r),unitSymbol:i,default:I(s),multipleValues:o,nearestValue:a}})),r}function S(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function E(e){return e.nodeType===Node.ELEMENT_NODE}function w(e){return void 0!==e.min&&void 0!==e.max}function L(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function F(e){return!M(e)&&!L(e)}function M(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function v(e,t){const n=[],i=r.urlToObject(e);for(const r in i.query)i.query.hasOwnProperty(r)&&(t.includes(r.toLowerCase())||n.push(r+"="+i.query[r]));return i.path+(n.length?"?"+n.join("&"):"")}function C(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(n.isSome):r.map((e=>parseFloat(e)))}function I(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(n.isSome):r}function R(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?O(t[2]):void 0}})).filter(n.isSome):r.map((e=>new Date(e)))}function O(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);if(!n)return null;return{years:T(n[1]),months:T(n[2]),days:T(n[3]),hours:T(n[4]),minutes:T(n[5]),seconds:T(n[6])}}function T(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,n=e.match(t);if(!n)return 0;const r=n[0].replace(",",".");return Number(r)}function D(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const U=new Set([102100,3857,102113,900913]),V=new Set([3395,54004]);function _(e,t){let r=e.wkid;return n.isNone(t)?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&U.has(r)?t.find((e=>U.has(e)))||t.find((e=>V.has(e)))||102100:r)}e.fromISODuration=O,e.getPopupLayers=u,e.isDimensionInterval=w,e.isElevationDimension=L,e.isGenericDimension=F,e.isTimeDimension=M,e.normalizeWKID=_,e.parseCapabilities=l,e.toISOString=D,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
