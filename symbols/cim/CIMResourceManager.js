/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../request","../../core/Error","../../core/promiseUtils"],(function(e,r,t,o){"use strict";const n=";base64,";let i=function(){function r(){this._resourceMap=new Map,this._inFlightResourceMap=new Map}var t=r.prototype;return t.destroy=function(){this._inFlightResourceMap.clear(),this._resourceMap.clear()},t.getResource=function(e){var r;return null!=(r=this._resourceMap.get(e))?r:null},t.fetchResource=function(){var r=e._asyncToGenerator((function*(e,r){const t={width:0,height:0},o=this._resourceMap,n=o.get(e);if(n)return t.width=n.width,t.height=n.height,t;let i=this._inFlightResourceMap.get(e);return i||(i=u(e,r),this._inFlightResourceMap.set(e,i),i=i.then((r=>{if(this._inFlightResourceMap.delete(e),r.ok){o.set(e,r.value);const n=r.value;return t.width=n.width,t.height=n.height,t}return t})),i)}));function t(e,t){return r.apply(this,arguments)}return t}(),t.deleteResource=function(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)},r}();function u(e,i){if(e.includes(n)){const r=new Image;return r.src=e,r.decode().then((()=>({ok:!0,value:r}))).catch((r=>o.isAbortError(r)?{ok:!1,error:r}:{ok:!1,error:new t("invalid-resource",`Could not fetch requested resource at ${e}`)}))}return r(e,{responseType:"image",...i}).then((e=>({ok:!0,value:e.data}))).catch((r=>o.isAbortError(r)?{ok:!1,error:r}:{ok:!1,error:new t("invalid-resource",`Could not fetch requested resource at ${e}`)}))}return i}));
