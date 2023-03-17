/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/vec2f64","../../../chunks/vec4f64","../../../chunks/ChapmanAtmosphere.glsl","../webgl-engine/core/shaderModules/interfaces","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/Program","../../webgl/enums","../../webgl/renderState"],(function(e,r,n,t,a,i,o,l,s,c,u,h,d){"use strict";let g=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).heightParameters=a.create(),r.radii=t.create(),r.innerFadeDistance=0,r.altitudeFade=0,r.hazeStrength=1,r}return n._inheritsLoose(r,e),r}(o.NoParameters),p=function(e){function r(){return e.apply(this,arguments)||this}n._inheritsLoose(r,e);var t=r.prototype;return t.initializeProgram=function(e){return new u.Program(e.rctx,r.shader.get().build(this.configuration),c.Default3D)},t.initializePipeline=function(){return this.configuration.haze?d.makePipelineState({blending:d.separateBlendingParams(h.BlendFactor.ONE,h.BlendFactor.ZERO,h.BlendFactor.ONE_MINUS_SRC_COLOR,h.BlendFactor.ONE),colorWrite:d.defaultColorWriteParams}):d.makePipelineState({blending:d.separateBlendingParams(h.BlendFactor.SRC_ALPHA,h.BlendFactor.ONE,h.BlendFactor.ONE_MINUS_SRC_ALPHA,h.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:h.CompareFunction.LEQUAL},colorWrite:d.defaultColorWriteParams})},r}(s.ShaderTechnique);p.shader=new l.ReloadableShaderModule(i.ChapmanAtmosphere,(()=>new Promise(((r,n)=>e(["./ChapmanAtmosphere.glsl"],r,n))))),r.ChapmanAtmospherePassParameters=g,r.ChapmanAtmosphereTechnique=p,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
