/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../Color","../smartMapping/symbology/support/symbologyUtils","../smartMapping/symbology/support/utils"],(function(o,e,t,i){"use strict";const r={default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",schemes:{point:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},polyline:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygon:{light:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{size:"12px",color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{size:"12px",color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}}}}},c=t.createThemes({themeDictionary:r});function l(o){return t.getThemesforBasemap(c,o)}function n(o){const e="default",i=t.getRawSchemes({basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme,theme:c.get(e)});if(!i)return;const{schemesInfo:r,basemapId:l,basemapTheme:n}=i;return{primaryScheme:a(o,r.primary),secondarySchemes:r.secondary.map((e=>a(o,e))).filter(Boolean),basemapId:l,basemapTheme:n}}function p(o){if(!o)return;const t={...o};return t.color&&(t.color=new e(t.color)),"outline"in t&&t.outline&&(t.outline={color:t.outline.color&&new e(t.outline.color),width:t.outline.width}),t}function a(o,e){const t="mesh"!==o.geometryType&&o.worldScale?o.view:null;switch(o.geometryType){case"point":case"multipoint":{const o=e;return s({color:o.color,outline:{...o.outline},size:o.size},t)}case"polyline":{const o=e;return u({color:o.color,width:o.width},t)}case"polygon":{const o=e;return h({size:o.size,color:o.color,outline:{...o.outline},opacity:o.opacity},t)}case"mesh":{const o=e;return y({color:o.color,opacity:o.opacity})}}}function s(o,t){return{color:new e(o.color),outline:{color:new e(o.outline.color),width:o.outline.width},size:t?i.toWorldScale(o.size,t):o.size,opacity:1}}function u(o,t){return{color:new e(o.color),width:t?i.toWorldScale(o.width,t):o.width,opacity:1}}function h(o,t){return{color:new e(o.color),outline:{color:new e(o.outline.color),width:o.outline.width},size:t?i.toWorldScale(o.size,t):o.size,opacity:o.opacity}}function y(o){return{color:new e(o.color),opacity:o.opacity}}var m=Object.freeze({__proto__:null,getThemes:l,getSchemes:n,cloneScheme:p});o.cloneScheme=p,o.getSchemes=n,o.getThemes=l,o.locationSymbology=m}));
