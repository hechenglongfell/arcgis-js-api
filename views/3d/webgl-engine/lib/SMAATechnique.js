/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./DefaultVertexAttributeLocations","./Program","../../../../chunks/SMAA.glsl","../../../webgl/renderState"],(function(e,t,r,i,n,o,a,u,s,l,c){"use strict";let h=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var i=t.prototype;return i.initializeProgram=function(e){const r=t.shader.get(),i=this.configuration,n=r.build({output:i.output,threshold:.05,localConstrastAdaption:2,maxSearchSteps:8,maxDistanceAreaTex:16});return new s.Program(e.rctx,n,u.Default3D)},i.initializePipeline=function(){return c.makePipelineState({colorWrite:c.defaultColorWriteParams})},t}(o.ShaderTechnique);h.shader=new n.ReloadableShaderModule(l.SMAAShader,(()=>new Promise((function(t,r){e(["../shaders/SMAA.glsl"],t,r)}))));let d=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=0,t}return r._inheritsLoose(t,e),t}(a.ShaderTechniqueConfiguration);i.__decorate([a.parameter({count:3})],d.prototype,"output",void 0),t.SMAATechnique=h,t.SMAATechniqueConfiguration=d,Object.defineProperty(t,"__esModule",{value:!0})}));
