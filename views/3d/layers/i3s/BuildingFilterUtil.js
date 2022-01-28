/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/vec4f64","../support/edgeUtils"],(function(e,r,a,o){"use strict";const t=.15,l=.5*t;function c(e){switch(e.filterMode.type){case"solid":return{mode:0};case"wire-frame":return{mode:1,edgeMaterial:o.createMaterialFromEdges(e.filterMode.edges,{})};case"x-ray":return{mode:2}}}function i(e,a){if(r.isNone(a))return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(a.mode){case 0:return;case 1:return e.color[3]=0,e.edgeMaterial=a.edgeMaterial,void(e.pickable=!1);case 2:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=t,e.colorMixMode=3,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=n(e.edgeMaterial))}}function n(e){return r.isNone(e)?null:(s.lastMaterial!==e&&(s.cachedMaterial=d(e),s.lastMaterial=e),s.cachedMaterial)}function d(e){const r=a.clone(e.color);return r[3]*=l,{...e,color:r}}const s={cachedMaterial:null,lastMaterial:null};e.applyFilterMode=i,e.parseFilterMode=c,Object.defineProperty(e,"__esModule",{value:!0})}));
