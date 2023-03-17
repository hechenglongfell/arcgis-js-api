/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../Color","../renderers/support/utils","./support/colors","./support/symbologyUtils"],(function(e,o,t,n,a){"use strict";const r={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},i=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence"],c={default:{name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:{light:{primary:"predominant-v5",secondary:i,common:{outline:r.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:i,common:{outline:r.dark,fillOpacity:.8}}}}}},s=a.createThemes({themeDictionary:c});function l(e){return a.getThemesforBasemap(s,e)}function m(e){const o="default",t=a.getRawSchemes({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:s.get(o)});if(!t)return;const{schemesInfo:n,basemapId:r,basemapTheme:i}=t,c=n.common,l=e.numColors;return{primaryScheme:h(n.primary,c,l),secondarySchemes:n.secondary.map((e=>h(e,c,l))).filter(Boolean),basemapId:r,basemapTheme:i}}function u(e){return a.filterSchemesByName(e.name,m(e))}function p(e){return a.filterSchemesByTag(e.includedTags,e.excludedTags,m(e))}function d(e){if(!e)return;const t={...e};return t.tags=[...t.tags],t.colors&&(t.colors=t.colors.map((e=>new o(e)))),t.outline&&(t.outline={color:t.outline.color&&new o(t.outline.color),width:t.outline.width}),t}function h(e,o,a){const r=n[e];if(!r)return;return f({name:r.name,tags:r.tags,colors:r[a]||t.createColors(r.stops,a),opacity:o.fillOpacity,outline:o.outline})}function f(e){return{name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new o(e))),outline:{color:new o(e.outline.color),width:e.outline.width},opacity:e.opacity}}e.cloneScheme=d,e.getSchemeByName=u,e.getSchemes=m,e.getSchemesByTag=p,e.getThemes=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
