/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../Color","./size","../smartMapping/symbology/support/colors","../smartMapping/symbology/support/symbologyUtils","../smartMapping/symbology/support/utils"],(function(e,o,n,a,r,t){"use strict";const i={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},c="#aaaaaa",m=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],s=["cat-symbols-strong","cat-symbols-autumnal","cat-symbols-bright","cat-symbols-midrange","cat-symbols-subdued","cat-symbols-pastel","cat-symbols-red","cat-symbols-blue","cat-symbols-green","cat-symbols-gray"],l={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",schemes:{point:{light:{common:{noDataColor:c,outline:i.light,size:"8px"},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)},dark:{common:{noDataColor:c,outline:i.darker,size:"8px"},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)}},polyline:{light:{common:{noDataColor:c,width:"2px"},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)},dark:{common:{noDataColor:c,width:"2px"},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)}},polygon:{light:{common:{noDataColor:c,outline:i.light,fillOpacity:.8,markerSize:"8px"},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)},dark:{common:{noDataColor:c,outline:i.dark,fillOpacity:.8,markerSize:"8px"},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"].concat(s).concat(m)}}}}},p=r.createThemes({themeDictionary:l});function d(e){return r.getThemesforBasemap(p,e)}function y(e){const o="default",a=r.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme,theme:p.get(o)});if(!a)return;const{schemesInfo:t,basemapId:i,basemapTheme:c}=a,m=t.common,s=n.getSchemes({basemap:e.basemap,geometryType:e.geometryType,worldScale:e.worldScale,view:e.view}),l=s&&s.primaryScheme;return{primaryScheme:w(e,t.primary,m,l),secondarySchemes:t.secondary.map((o=>w(e,o,m,l))).filter(Boolean),basemapId:i,basemapTheme:c}}function u(e){return r.filterSchemesByName(e.name,y(e))}function h(e){return r.filterSchemesByTag(e.includedTags,e.excludedTags,y(e))}function g(e){if(!e)return;const a={...e};return a.colors=a.colors.map((e=>new o(e))),a.noDataColor&&(a.noDataColor=new o(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new o(a.outline.color),width:a.outline.width}),"sizeScheme"in a&&a.sizeScheme&&(a.sizeScheme=n.cloneScheme(a.sizeScheme)),a}function w(e,o,n,r){const t=a[o];if(!t)return;const i=t[e.numColors]||t.stops,c="mesh"!==e.geometryType&&e.worldScale?e.view:null;switch(e.geometryType){case"point":case"multipoint":{const e=n;return b({name:t.name,tags:t.tags,colors:i,noDataColor:e.noDataColor,opacity:1,sizeScheme:r,outline:e.outline,size:e.size},c)}case"polyline":{const e=n;return S({name:t.name,tags:t.tags,colors:i,noDataColor:e.noDataColor,opacity:1,sizeScheme:r,width:e.width},c)}case"polygon":{const e=n,o=r;o&&o.marker&&null!=e.markerSize&&(o.marker.size=e.markerSize);return v({name:t.name,tags:t.tags,colors:i,noDataColor:e.noDataColor,opacity:e.fillOpacity,outline:e.outline,sizeScheme:o},c)}case"mesh":{const e=n;return f({name:t.name,tags:t.tags,colors:i,noDataColor:e.noDataColor,opacity:e.fillOpacity})}default:return}}function b(e,n){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),noDataColor:new o(e.noDataColor),outline:{color:new o(e.outline.color),width:e.outline.width},size:n?t.toWorldScale(e.size,n):e.size,sizeScheme:e.sizeScheme,opacity:e.opacity}}function S(e,n){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),noDataColor:new o(e.noDataColor),width:n?t.toWorldScale(e.width,n):e.width,sizeScheme:e.sizeScheme,opacity:e.opacity}}function v(e,n){const{sizeScheme:a}=e;return a.marker.size=n?t.toWorldScale(a.marker.size,n):a.marker.size,{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),noDataColor:new o(e.noDataColor),outline:{color:new o(e.outline.color),width:e.outline.width},sizeScheme:a,opacity:e.opacity}}function f(e){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),noDataColor:new o(e.noDataColor),opacity:e.opacity}}const z=Object.freeze({__proto__:null,getThemes:d,getSchemes:y,getSchemeByName:u,getSchemesByTag:h,cloneScheme:g});e.cloneScheme=g,e.getSchemeByName=u,e.getSchemes=y,e.getSchemesByTag=h,e.getThemes=d,e.predominanceSymbology=z}));
