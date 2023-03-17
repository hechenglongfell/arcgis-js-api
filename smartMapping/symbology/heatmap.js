/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../Color","./support/colors","./support/symbologyUtils"],(function(e,a,t,l){"use strict";const r={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"heatmap-v1",secondary:["heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"heatmap-v4",secondary:["dark-white-blue","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}},n=l.createThemes({themeDictionary:r});function o(e){return l.getThemesforBasemap(n,e)}function m(e){const a="default",t=l.getRawSchemes({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:n.get(a)});if(!t)return;const{schemesInfo:r,basemapId:o,basemapTheme:m}=t,u=`${a}/${o}/`;return{primaryScheme:c(r.primary,u+r.primary),secondarySchemes:r.secondary.map((e=>c(e,u+e))).filter(Boolean),basemapId:o,basemapTheme:m}}function u(e){return l.filterSchemesByName(e.name,m(e))}function s(e){return l.filterSchemesByTag(e.includedTags,e.excludedTags,m(e))}function i(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new a(e))),t.tags=[...t.tags],t}function c(e,a){const l=t[e];if(l)return p({id:a,name:l.name,tags:l.tags,colors:l.stops,opacity:.7})}function p(e){return{id:e.id,name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new a(e))),opacity:e.opacity}}e.cloneScheme=i,e.getSchemeByName=u,e.getSchemes=m,e.getSchemesByTag=s,e.getThemes=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
