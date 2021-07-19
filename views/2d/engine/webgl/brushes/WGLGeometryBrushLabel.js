/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,a,o,i){"use strict";const n=e=>a.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_glyphData",count:4,type:5121},{location:7,name:"a_vertexOffset",count:2,type:5122},{location:8,name:"a_texCoords",count:2,type:5123}]});return function(a){function o(){return a.apply(this,arguments)||this}e._inheritsLoose(o,a);var r=o.prototype;return r.dispose=function(){},r.getGeometryType=function(){return t.WGLGeometryType.LABEL},r.drawGeometry=function(e,t,a,o){const{context:r,painter:l,state:s,rendererInfo:u}=e,c=i.LabelMaterialKey.load(a.materialKey),f=c.mapAligned?1:0;if(!f&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return;const{bufferLayouts:m,attributes:p}=n(c),v=l.materialManager.getMaterialProgram(e,c,"materials/label",p,o);e.context.setStencilFunction(514,0,255),r.useProgram(v),this._setSharedUniforms(v,e,t),l.textureManager.bindTextures(r,v,c);const y=1===f?s.displayViewMat3:s.displayMat3;if(c.vvSizeMinMaxValue&&v.setUniform4fv("u_vvSizeMinMaxValue",u.vvSizeMinMaxValue),c.vvSizeScaleStops&&v.setUniform1f("u_vvSizeScaleStopsValue",u.vvSizeScaleStopsValue),c.vvSizeFieldStops){const e=u.getSizeVVFieldStops(t.key.level);v.setUniform1fv("u_vvSizeFieldStopsValues",e.values),v.setUniform1fv("u_vvSizeFieldStopsSizes",e.sizes)}c.vvSizeUnitValue&&v.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",u.vvSizeUnitValueToPixelsRatio),v.setUniform1f("u_mapRotation",Math.floor(s.rotation/360*254)),v.setUniform1f("u_mapAligned",f),v.setUniformMatrix3fv("u_displayMat3",y),v.setUniform1f("u_opacity",1),v.setUniform2fv("u_screenSize",e.state.size),v.setUniform1f("u_isHalo",1),a.draw(r,m,p),v.setUniform1f("u_isHalo",0),a.draw(r,m,p),r.setStencilTestEnabled(!0),r.setBlendingEnabled(!0)},o}(o)}));
