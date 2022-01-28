/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../Color","../smartMapping/symbology/support/colors","../smartMapping/symbology/support/symbologyUtils"],(function(e,a,t,l){"use strict";const r={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"neutral-white-blue",secondary:["heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"dark-white-blue",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","heatmap-v4","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}},o=l.createThemes({themeDictionary:r});function n(e){return l.getThemesforBasemap(o,e)}function m(e){const a="default",t=l.getRawSchemes({basemap:e.basemap,basemapTheme:e.basemapTheme,theme:o.get(a)});if(!t)return;const{schemesInfo:r,basemapId:n,basemapTheme:m}=t,s=`${a}/${n}/`;return{primaryScheme:c(r.primary,s+r.primary),secondarySchemes:r.secondary.map((e=>c(e,s+e))).filter(Boolean),basemapId:n,basemapTheme:m}}function s(e){return l.filterSchemesByName(e.name,m(e))}function u(e){return l.filterSchemesByTag(e.includedTags,e.excludedTags,m(e))}function i(e){if(!e)return;const t={...e};return t.colors=t.colors.map((e=>new a(e))),t}function c(e,a){const l=t[e];if(l)return p({id:a,name:l.name,tags:l.tags,colors:l.stops,opacity:.7})}function p(e){return{id:e.id,name:e.name,tags:[...e.tags],colors:e.colors.map((e=>new a(e))),opacity:e.opacity}}const h=Object.freeze({__proto__:null,getThemes:n,getSchemes:m,getSchemeByName:s,getSchemesByTag:u,cloneScheme:i});e.cloneScheme=i,e.getSchemeByName=s,e.getSchemes=m,e.getSchemesByTag=u,e.getThemes=n,e.heatmapSymbology=h}));
