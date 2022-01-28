/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../chunks/vec3f64","../../geometry/support/aaBoundingBox"],(function(e,n,t,r){"use strict";function o(e,{isPrimitive:n,width:r,depth:o,height:u}){const s=n?10:1;if(null==r&&null==u&&null==o)return[s*e[0],s*e[1],s*e[2]];const i=t.fromValues(r,o,u);let c;for(let t=0;t<3;t++){const n=i[t];if(null!=n){c=n/e[t];break}}for(let t=0;t<3;t++)null==i[t]&&(i[t]=e[t]*c);return i}const u=r.fromValues(-.5,-.5,-.5,.5,.5,.5),s=r.fromValues(-.5,-.5,0,.5,.5,1),i=r.fromValues(-.5,-.5,0,.5,.5,.5);function c(e){switch(e){case"sphere":case"cube":case"diamond":return u;case"cylinder":case"cone":case"inverted-cone":return s;case"tetrahedron":return i;default:return}}const l=["butt","square","round"],a=[...l,"none"],_=["miter","bevel","round"];e.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=i,e.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=u,e.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=s,e.lineCaps=l,e.lineJoins=_,e.objectSymbolLayerPrimitiveBoundingBox=c,e.objectSymbolLayerSizeWithResourceSize=o,e.pathCaps=a,Object.defineProperty(e,"__esModule",{value:!0})}));
