/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../chunks/vec4f64","../core/shaderLibrary/ShaderOutput","../lib/basicInterfaces","../lib/GLMaterial","../lib/Material","../lib/OrderIndependentTransparency","../lib/RenderSlot","./DefaultBufferWriter","./DefaultLayouts","./TriangleMaterial","../shaders/ColorMaterialTechnique","../shaders/ColorMaterialTechniqueConfiguration"],(function(e,t,r,a,i,n,o,s,u,l,h,c,p,f,d){"use strict";let g=function(e){function a(t){var r;return(r=e.call(this,t,new _)||this).supportsEdges=!0,r._configuration=new d.ColorMaterialTechniqueConfiguration,r}t._inheritsLoose(a,e);var n=a.prototype;return n.getConfiguration=function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<u.OITPolygonOffsetLimit,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration},n.requiresSlot=function(e,t){if(t===i.ShaderOutput.Color||t===i.ShaderOutput.Alpha||t===i.ShaderOutput.Highlight||t===i.ShaderOutput.Depth&&this.parameters.writeLinearDepth||t===i.ShaderOutput.ObjectAndLayerIdColor){if(e===l.RenderSlot.DRAPED_MATERIAL)return!0;if(t===i.ShaderOutput.Highlight)return e===l.RenderSlot.OPAQUE_MATERIAL;return e===(this.parameters.transparent?this.parameters.writeDepth?l.RenderSlot.TRANSPARENT_MATERIAL:l.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:l.RenderSlot.OPAQUE_MATERIAL)}return!1},n.createGLMaterial=function(e){return new O(e)},n.createBufferWriter=function(){return new h.DefaultBufferWriter(r("enable-feature:objectAndLayerId-rendering")?c.PositionColorLayoutObjectAndLayerId:c.PositionColorLayout)},a}(p.TriangleMaterial),O=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var a=r.prototype;return a._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})},a.beginSlot=function(e){return this._output!==i.ShaderOutput.Color&&this._output!==i.ShaderOutput.Alpha||this._updateOccludeeState(e),this.ensureTechnique(f.ColorMaterialTechnique,e)},r}(o),_=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).color=a.ZEROS,t.transparent=!1,t.writeDepth=!0,t.writeLinearDepth=!1,t.hasVertexColors=!1,t.polygonOffset=!1,t.hasSlicePlane=!1,t.cullFace=n.CullFaceOptions.None,t.hasOccludees=!1,t}return t._inheritsLoose(r,e),r}(s.MaterialParameters);e.ColorMaterial=g,e.Parameters=_,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
