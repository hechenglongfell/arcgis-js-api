/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderLibrary/ShaderOutput","../lib/basicInterfaces","../lib/GLTextureMaterial","../lib/Material","../lib/OrderIndependentTransparency","../lib/RenderSlot","./DefaultBufferWriter","./DefaultLayouts","./TriangleMaterial","../shaders/ImageMaterialTechnique"],(function(e,t,r,a,i,n,s,u,l,o,c,h){"use strict";let p=function(e){function a(t){var r;return(r=e.call(this,t,new d)||this).supportsEdges=!0,r._configuration=new h.ImageMaterialTechniqueConfiguration,r}t._inheritsLoose(a,e);var i=a.prototype;return i.getConfiguration=function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<s.OITPolygonOffsetLimit,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration},i.requiresSlot=function(e,t){if(t===r.ShaderOutput.Color||t===r.ShaderOutput.Alpha||t===r.ShaderOutput.Highlight){if(e===u.RenderSlot.DRAPED_MATERIAL)return!0;if(t===r.ShaderOutput.Highlight)return e===u.RenderSlot.OPAQUE_MATERIAL;return e===(this.parameters.transparent?this.parameters.writeDepth?u.RenderSlot.TRANSPARENT_MATERIAL:u.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.RenderSlot.OPAQUE_MATERIAL)}return!1},i.createGLMaterial=function(e){return new f(e)},i.createBufferWriter=function(){return new l.DefaultBufferWriter(o.PositionUVLayout)},a}(c.TriangleMaterial),f=function(e){function a(t){return e.call(this,{...t,...t.material.parameters})||this}t._inheritsLoose(a,e);var i=a.prototype;return i._updateParameters=function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h.ImageMaterialTechnique,e)},i._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))},i.beginSlot=function(e){return this._output!==r.ShaderOutput.Color&&this._output!==r.ShaderOutput.Alpha||this._updateOccludeeState(e),this._updateParameters(e)},a}(i.GLTextureMaterial),d=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).transparent=!1,t.writeDepth=!0,t.hasSlicePlane=!1,t.cullFace=a.CullFaceOptions.None,t.hasOccludees=!1,t.opacity=1,t.textureId=null,t.initTextureTransparent=!0,t}return t._inheritsLoose(r,e),r}(n.MaterialParameters);e.ImageMaterial=p,e.Parameters=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
