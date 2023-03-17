/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","../lib/Program","../../../../chunks/OverlayCompositing.glsl","../../../webgl/enums","../../../webgl/renderState"],(function(e,r,i,n,t,l,o,a,u,s){"use strict";let d=function(e){function r(){return e.apply(this,arguments)||this}i._inheritsLoose(r,e);var n=r.prototype;return n.initializeProgram=function(e){return new o.Program(e.rctx,r.shader.get().build(),l.Default3D)},n.initializePipeline=function(){return s.makePipelineState({blending:s.simpleBlendingParams(u.BlendFactor.ONE,u.BlendFactor.ONE_MINUS_SRC_ALPHA),colorWrite:s.defaultColorWriteParams})},r}(t.ShaderTechnique);d.shader=new n.ReloadableShaderModule(a.OverlayCompositing,(()=>new Promise(((r,i)=>e(["./OverlayCompositing.glsl"],r,i))))),r.OverlayCompositingTechnique=d,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
