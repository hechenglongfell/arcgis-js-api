/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/attributes/VerticalOffset.glsl","../core/shaderLibrary/hud/HUD.glsl","../core/shaderLibrary/shading/MultipassGeometryTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/Program","../materials/internal/MaterialUtil","../../../../chunks/LineCallout.glsl","../../../webgl/renderState"],(function(e,r,t,i,a,n,o,s,l,d,c,p,u,h,m,f,b){"use strict";let g=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var i=r.prototype;return i.initializeProgram=function(e){const t=r.shader.get(),i=this.configuration,a=t.build({occlusionTestEnabled:i.occlusionTestEnabled,verticalOffsetEnabled:i.verticalOffset,screenSizePerspectiveEnabled:i.screenSizePerspective,depthHudEnabled:i.depthHudEnabled,depthHudAlignStartEnabled:i.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:i.screenCenterOffsetUnitsEnabled,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:e.viewingMode,isDraped:!1,multipassGeometryEnabled:i.multipassGeometryEnabled});return new h.Program(e.rctx,a,u.Default3D)},i.bindPass=function(e,r){l.bindProjectionMatrix(this.program,r.camera.projectionMatrix),f.LineCallout.bindUniforms(this.program,e,r.camera.pixelRatio||1),n.bindVerticalOffsetUniforms(this.program,e,r),o.bindHUDUniforms(this.program,r),this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),s.bindMultipassGeometryTexture(this.program,r),this.program.bindTexture(r.hudVisibilityTexture,"hudVisibilityTexture"),this.program.setUniform1f("cameraGroundRelative",r.camera.aboveGround?1:-1),this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset),l.bindViewport(this.program,r),this.program.setUniform1f("perDistancePixelRatio",Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",r.camera.viewInverseTransposeMatrix),this.program.setUniform2f("pixelToNDC",2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]);const t=r.camera.pixelRatio||1;this.program.setUniform1f("lineSize",Math.ceil(e.size)*t),m.bindScreenSizePerspective(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment")},i.bindDraw=function(e){l.bindView(this.program,e),l.bindCameraPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),a.bindSliceUniformsWithOrigin(this.program,this.configuration,e),this.program.rebindTextures()},i.setPipelineState=function(e){const r=e?519:513;return this.configuration.depthHudEnabled?b.makePipelineState({depthTest:{func:r},depthWrite:b.defaultDepthWriteParams}):b.makePipelineState({blending:b.separateBlendingParams(1,770,771,771),depthTest:{func:r},colorWrite:b.defaultColorWriteParams})},i.initializePipeline=function(){return this.setPipelineState(this.configuration.multipassGeometryEnabled)},r}(c.ShaderTechnique);g.shader=new d.ReloadableShaderModule(f.LineCalloutShader,(()=>new Promise(((r,t)=>e(["./LineCallout.glsl"],r,t)))));let v=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).occlusionTestEnabled=!0,r.verticalOffset=!1,r.screenSizePerspective=!1,r.depthHudEnabled=!1,r.depthHudAlignStartEnabled=!1,r.screenCenterOffsetUnitsEnabled=0,r.slicePlaneEnabled=!1,r.multipassGeometryEnabled=!1,r}return t._inheritsLoose(r,e),r}(p.ShaderTechniqueConfiguration);i.__decorate([p.parameter()],v.prototype,"occlusionTestEnabled",void 0),i.__decorate([p.parameter()],v.prototype,"verticalOffset",void 0),i.__decorate([p.parameter()],v.prototype,"screenSizePerspective",void 0),i.__decorate([p.parameter()],v.prototype,"depthHudEnabled",void 0),i.__decorate([p.parameter()],v.prototype,"depthHudAlignStartEnabled",void 0),i.__decorate([p.parameter({count:2})],v.prototype,"screenCenterOffsetUnitsEnabled",void 0),i.__decorate([p.parameter()],v.prototype,"slicePlaneEnabled",void 0),i.__decorate([p.parameter()],v.prototype,"multipassGeometryEnabled",void 0),r.LineCalloutTechnique=g,r.LineCalloutTechniqueConfiguration=v,Object.defineProperty(r,"__esModule",{value:!0})}));
