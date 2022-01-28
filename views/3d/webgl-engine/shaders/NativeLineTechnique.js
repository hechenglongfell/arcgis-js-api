/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/maybe","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/Program","../lib/StencilUtils","../../../../chunks/NativeLine.glsl","../../../webgl/renderState"],(function(e,t,i,r,a,o,n,s,l,p,u,d,c,h,f,m){"use strict";let g=function(e){function t(t,i,r){var a;return(a=e.call(this,t,i,r)||this).stipplePattern=null,a.stippleTextureBind=null,a.stippleTextureRepository=t.stippleTextureRepository,a}i._inheritsLoose(t,e);var r=t.prototype;return r.initializeProgram=function(e){const i=t.shader.get(),r=this.configuration,a=i.build({output:r.output,attributeColor:r.vertexColors,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:r.draped,stippleEnabled:this.stippleEnabled,stippleOffColorEnabled:r.stippleOffColorEnabled,stippleRequiresClamp:!1,stippleScaleWithLineWidth:!1,stipplePreferContinuous:r.stipplePreferContinuous});return new c.Program(e.rctx,a,d.Default3D)},r.dispose=function(){e.prototype.dispose.call(this),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null},r.bindPass=function(e,t){if(s.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.stippleEnabled){const{pixelSize:e,sdfNormalizer:i,pixels:r}=a.isSome(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",i),this.program.setUniform1f("stipplePatternTextureSize",r),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e),this.program.setUniform1f("pixelRatio",t.camera.pixelRatio),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/t.screenToPCSRatio):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/t.camera.perScreenPixelRatio),this.program.setUniform2f("ndcToPixel",t.camera.fullViewport[2]/2,t.camera.fullViewport[3]/2)}if(this.program.setUniform4fv("constantColor",e.color),this.program.setUniform1f("alphaCoverage",Math.min(1,e.width*t.camera.pixelRatio)),this.configuration.stippleOffColorEnabled){const t=a.unwrap(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1)}4===this.configuration.output&&n.bindOutputHighlight(this.program,t)},r.bindDraw=function(e){s.bindView(this.program,e),this.stippleEnabled&&!this.configuration.draped&&s.bindCameraPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),o.bindSliceUniformsWithOrigin(this.program,this.configuration,e),this.program.rebindTextures()},r.initializePipeline=function(){const e=this.configuration,t=m.separateBlendingParams(770,1,771,771),i=(t,i=null,r=null)=>m.makePipelineState({blending:i,depthTest:h.depthCompareLess,depthWrite:r,colorWrite:m.defaultColorWriteParams,stencilWrite:e.sceneHasOcludees?h.stencilWriteMaskOn:null,stencilTest:e.sceneHasOcludees?t?h.stencilToolMaskBaseParams:h.stencilBaseAllZerosParams:null});return 0===e.output?(this._occludeePipelineState=i(!0,e.transparent||this.stippleEnabled?t:null,m.defaultDepthWriteParams),i(!1,e.transparent||this.stippleEnabled?t:null,m.defaultDepthWriteParams)):i(!1)},r.getPipelineState=function(t,i){return i?this._occludeePipelineState:e.prototype.getPipelineState.call(this,t,i)},i._createClass(t,[{key:"stippleEnabled",get:function(){return this.configuration.stippleEnabled&&4!==this.configuration.output}},{key:"primitiveType",get:function(){return 1}}]),t}(p.ShaderTechnique);g.shader=new l.ReloadableShaderModule(f.NativeLineShader,(()=>new Promise(((t,i)=>e(["./NativeLine.glsl"],t,i)))));let P=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=0,t.slicePlaneEnabled=!1,t.vertexColors=!1,t.transparent=!1,t.draped=!1,t.stippleEnabled=!1,t.stippleOffColorEnabled=!1,t.stipplePreferContinuous=!0,t.sceneHasOcludees=!1,t}return i._inheritsLoose(t,e),t}(u.ShaderTechniqueConfiguration);r.__decorate([u.parameter({count:8})],P.prototype,"output",void 0),r.__decorate([u.parameter()],P.prototype,"slicePlaneEnabled",void 0),r.__decorate([u.parameter()],P.prototype,"vertexColors",void 0),r.__decorate([u.parameter()],P.prototype,"transparent",void 0),r.__decorate([u.parameter()],P.prototype,"draped",void 0),r.__decorate([u.parameter()],P.prototype,"stippleEnabled",void 0),r.__decorate([u.parameter()],P.prototype,"stippleOffColorEnabled",void 0),r.__decorate([u.parameter()],P.prototype,"stipplePreferContinuous",void 0),r.__decorate([u.parameter()],P.prototype,"sceneHasOcludees",void 0),t.NativeLineTechnique=g,t.NativeLineTechniqueConfiguration=P,Object.defineProperty(t,"__esModule",{value:!0})}));
