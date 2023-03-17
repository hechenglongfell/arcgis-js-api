/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./AllRenderPasses","./RenderPass","../shaderLibrary/ShaderOutput","../util/TwoVectorPosition","../../lib/depthRange","../../lib/RenderSlot"],(function(e,t,a,s,r,i,h,n,o,u,d,p,c,l){"use strict";let m=function(){function e(e,t){this.rctx=e,this.shaderTechniqueRepository=t,this.canRender=!0,this._materialPassParameters=new o.MaterialPassParameters,this._shadowPassParameters=new o.ShadowMapPassParameters,this._highlightPassParameters=new o.HighlightPassParameters,this._systems=new Set,this._passes={materialOpaque:new u.RenderPass(e,t),materialTransparent:new u.RenderPass(e,t,u.RenderPassSorting.BackToFront),materialIntegratedMesh:new u.RenderPass(e,t),shadowMap:new u.RenderPass(e,t),highlight:new u.RenderPass(e,t),highlightIntegratedMesh:new u.RenderPass(e,t),highlightShadowMap:new u.RenderPass(e,t),defaultShadowMap:new u.RenderPass(e,t)}}var r=e.prototype;return r.register=function(e){this._systems.add(e)},r.prepareRender=function(e){if(0!==this._systems.size){for(const e of Object.values(this._passes))e.prepareSubmit();this._systems.forEach((t=>t.submit(this._passes,e.bindParameters)));for(const e of Object.values(this._passes))e.finishSubmit();this.shaderTechniqueRepository.frameUpdate()}},r.render=function(e){if(0!==this._systems.size)switch(this._configure(e),this._materialPassParameters.output=e.output,e.bindParameters.slot){case l.RenderSlot.OPAQUE_MATERIAL:switch(e.output){case d.ShaderOutput.Color:case d.ShaderOutput.Depth:case d.ShaderOutput.Normal:return this._passes.materialOpaque.dispatch(this._materialPassParameters,e.bindParameters);case d.ShaderOutput.Highlight:return this._passes.highlight.dispatch(this._highlightPassParameters,e.bindParameters);case d.ShaderOutput.Shadow:return this._passes.shadowMap.dispatch(this._shadowPassParameters,e.bindParameters);case d.ShaderOutput.ShadowHighlight:return this._passes.highlightShadowMap.dispatch(this._shadowPassParameters,e.bindParameters);case d.ShaderOutput.ShadowExcludeHighlight:return this._passes.defaultShadowMap.dispatch(this._shadowPassParameters,e.bindParameters);case d.ShaderOutput.ObjectAndLayerIdColor:return this._passes.materialOpaque.dispatch(this._materialPassParameters,e.bindParameters)}return;case l.RenderSlot.TRANSPARENT_MATERIAL:switch(e.output){case d.ShaderOutput.Color:case d.ShaderOutput.Alpha:case d.ShaderOutput.Depth:case d.ShaderOutput.Normal:case d.ShaderOutput.ObjectAndLayerIdColor:return this._passes.materialTransparent.dispatch(this._materialPassParameters,e.bindParameters)}return;case l.RenderSlot.INTEGRATED_MESH:switch(e.output){case d.ShaderOutput.Color:case d.ShaderOutput.Depth:case d.ShaderOutput.Normal:return this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,e.bindParameters);case d.ShaderOutput.Highlight:return this._passes.highlightIntegratedMesh.dispatch(this._highlightPassParameters,e.bindParameters);case d.ShaderOutput.ObjectAndLayerIdColor:return this._passes.materialIntegratedMesh.dispatch(this._materialPassParameters,e.bindParameters)}return}},r.notifyDirty=function(){this._context.requestRender()},r.slots=function(){return[l.RenderSlot.OPAQUE_MATERIAL,l.RenderSlot.TRANSPARENT_MATERIAL,l.RenderSlot.INTEGRATED_MESH]},r.initializeRenderContext=function(e){this._context=e},r.uninitializeRenderContext=function(){},r.queryDepthRange=function(e){const t={near:1/0,far:-1/0};return this._systems.forEach((s=>{const r=s.queryShadowCasterDepthRange(e);a.isSome(r)&&c.union(t,r,t)})),t},r._configure=function(e){const t=e.output===d.ShaderOutput.Shadow||e.output===d.ShaderOutput.ShadowHighlight||e.output===d.ShaderOutput.ShadowExcludeHighlight?this._shadowPassParameters:e.output===d.ShaderOutput.Highlight?this._highlightPassParameters:this._materialPassParameters;this._updateParameters(e,t)},r._updateParameters=function(e,t){const a=e.bindParameters.camera,r=a.viewInverseTransposeMatrix;h.set(P,r[3],r[7],r[11]),S.set(P),h.copy(t.transformWorldFromViewTH,S.high),h.copy(t.transformWorldFromViewTL,S.low),h.copy(t.slicePlaneLocalOrigin,P),s.fromMat4(t.transformViewFromCameraRelativeRS,a.viewMatrix),i.copy(t.transformProjFromView,a.projectionMatrix),t.identifier===o.RenderPassIdentifier.Material&&(this._materialPassParameters.transparent=e.bindParameters.slot===l.RenderSlot.TRANSPARENT_MATERIAL,this._materialPassParameters.integratedMesh=e.bindParameters.slot===l.RenderSlot.INTEGRATED_MESH,s.transpose(g,t.transformViewFromCameraRelativeRS),s.invert(t.transformNormalViewFromGlobal,g))},t._createClass(e,[{key:"needsHighlight",get:function(){return this._passes.highlight.count>0||this._passes.highlightIntegratedMesh.count>0}},{key:"needsTransparentPass",get:function(){return this._passes.materialTransparent.count>0}}]),e}();const P=n.create(),g=r.create(),S=new p.TwoVectorPosition;e.RenderPassManager=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
