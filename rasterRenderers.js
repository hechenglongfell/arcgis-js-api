/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./core/Warning","./renderers/ClassBreaksRenderer","./renderers/RasterColormapRenderer","./renderers/RasterShadedReliefRenderer","./renderers/RasterStretchRenderer","./renderers/UniqueValueRenderer","./renderers/VectorFieldRenderer"],(function(e,r,t,n,s,a,d,o){"use strict";const i={key:"type",base:null,typeMap:{"unique-value":d,"class-breaks":t,"raster-colormap":n,"raster-stretch":a,"vector-field":o,"raster-shaded-relief":s}},l={...i,typeMap:{...i.typeMap}};delete l.typeMap["vector-field"];const c={uniqueValue:d,classBreaks:t,rasterStretch:a,rasterColormap:n,vectorField:o,rasterShadedRelief:s};function u(e){return e&&c[e.type]||null}function p(e,t){if(!e)return null;if("classBreaks"===e.type&&e.classificationMethod){const r=e.authoringInfo||{classificationMethod:""};r.classificationMethod=e.classificationMethod,e.authoringInfo=r}const n=u(e);if(n){const r=new n;return r.read(e,t),r}return t&&t.messages&&e&&t.messages.push(new r("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t})),null}function R(e,r){return p(e,r)}e.ClassBreaksRenderer=t,e.RasterColormapRenderer=n,e.RasterShadedReliefRenderer=s,e.RasterStretchRenderer=a,e.UniqueValueRenderer=d,e.VectorFieldRenderer=o,e.fromJSON=R,e.rasterRendererTypes=i,e.read=p,e.websceneRasterRendererTypes=l,Object.defineProperty(e,"__esModule",{value:!0})}));
