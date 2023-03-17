/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["./utils","../../../../webgl/rasterUtils"],(function(e,t){"use strict";const r={vsPath:"raster/common",fsPath:"raster/hillshade",attributes:new Map([["a_position",0],["a_texcoord",1]])};function o(t,o,s){const{colormap:n}=o.symbolizerParameters,a=[...s?[]:e.getProjectionDefines(o.transformGrid),...e.getInterpolationDefines(o.interpolation,null!=n,t.context)];null!=n&&a.push("applyColormap");return{defines:a,program:t.painter.materialManager.getProgram(r,a)}}function s(e,r,o,s,n=!1){const{names:a,textures:i}=o.getTextures({useProcessedTexture:n});t.setTextures(e.context,r,a,i),t.setUniforms(r,s,o.commonUniforms),r.setUniformMatrix3fv("u_dvsMat3",o.transforms.dvs);const m=o.symbolizerParameters,{colormap:f,colormapOffset:l}=m;if(null!=f){const e=t.getColormapUniforms(f,l);t.setUniforms(r,s,e)}const c=t.getShadedReliefUniforms(m);t.setUniforms(r,s,c)}return{createProgram:o,bindTextureAndUniforms:s}}));
