/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4","../../../../../chunks/vec2","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4","../../../../../chunks/boundedPlane","./AllRenderPasses","./RenderPass","../util/TwoVectorPosition","../../lib/depthRange"],(function(s,a,e,i,t,r,h,n,o,P,l,m,c,p,d){"use strict";let u=function(){function s(s,a){this.rctx=s,this.shaderTechniqueRepository=a,this.canRender=!0,this._materialPassParams=new m.MaterialPassesParameters,this._shadowPassParams=new m.ShadowMapPassParameters,this._highlightPassParams=new m.HighlightPassParameters,this._systems=new Set,this._passes=new Array,this._shadowMapPass=this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),this.passes={materialOpaque:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),materialTransparent:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository,1)),materialIntegratedMesh:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),shadowMap:this._shadowMapPass,highlight:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),highlightIntegratedMesh:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),highlightShadowMap:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository)),defaultShadowMap:this._registerPass(new c.RenderPass(s,this.shaderTechniqueRepository))}}var t=s.prototype;return t.register=function(s){this._systems.add(s)},t.prepareRender=function(s){0!==this._systems.size&&(this._passes.forEach((s=>s.prepareSubmit())),this._systems.forEach((a=>a.submit(this.passes,{camera:s}))),this._passes.forEach((s=>s.finishSubmit())),this.shaderTechniqueRepository.frameUpdate())},t.render=function(s){if(0===this._systems.size)return!1;if(4===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 3:this._materialPassParams.subPass=3,this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 5:this.passes.highlight.dispatch(this._highlightPassParams);break;case 4:this._shadowMapPass.dispatch(this._shadowPassParams);break;case 7:e.isSome(this.passes.highlightShadowMap)&&this.passes.highlightShadowMap.dispatch(this._shadowPassParams);break;case 6:e.isSome(this.passes.defaultShadowMap)&&this.passes.defaultShadowMap.dispatch(this._shadowPassParams)}if(6===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 1:this._materialPassParams.subPass=1,this._configureMaterialColorPass(s),this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 3:this._materialPassParams.subPass=3,this.passes.materialTransparent.dispatch(this._materialPassParams)}if(1===s.slot)switch(this._configure(s),s.pass){case 0:this._materialPassParams.subPass=0,this._configureMaterialColorPass(s),this._materialPassParams.ssrParams=s.ssrParams,this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2,this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 3:this._materialPassParams.subPass=3,this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 5:this.passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}return!0},t.notifyDirty=function(){this.context.requestRender()},t.slots=function(){return[4,6,1]},t.initializeRenderContext=function(s){this.context=s},t.uninitializeRenderContext=function(){},t.queryDepthRange=function(s){const a={near:1/0,far:-1/0};return this._systems.forEach((i=>{const t=i.queryShadowCasterDepthRange(s);e.isSome(t)&&d.union(a,t,a)})),a},t._configureMaterialColorPass=function(s){this._materialPassParams.bindShadowMap=a=>{s.shadowMap.bind(a);const e=this._materialPassParams.viewTransform;n.add(_,e.worldFromView_TL,e.worldFromView_TH),s.shadowMap.bindView(a,_)},this._materialPassParams.bindAmbientOcclusion=a=>s.ssaoHelper.bind(a),this._materialPassParams.ambientOcclusionEnabled=!!s.ssaoHelper&&s.ssaoHelper.ready,this._materialPassParams.sceneHasOcludees=s.hasOccludees},t._configure=function(s){const a=4===s.pass||7===s.pass||6===s.pass?this._shadowPassParams:5===s.pass?this._highlightPassParams:this._materialPassParams;this._updateParameters(s,a)},t._updateParameters=function(s,a){const e=s.camera,t=e.viewInverseTransposeMatrix;n.set(_,t[3],t[7],t[11]),w.set(_),n.copy(a.viewTransform.worldFromView_TH,w.high),n.copy(a.viewTransform.worldFromView_TL,w.low),i.fromMat4(a.viewTransform.viewFromCameraRelative_RS,e.viewMatrix),r.copy(a.viewTransform.projFromView,e.projectionMatrix),0===a.identifier?(this._materialPassParams.transparent=6===s.slot,this._materialPassParams.integratedMesh=1===s.slot,this._materialPassParams.lighting=s.scenelightingData,i.transpose(g,a.viewTransform.viewFromCameraRelative_RS),i.invert(a.transformNormal_ViewFromGlobal,g),h.set(a.cameraNearFar,e.near,e.far)):1===a.identifier?h.set(a.cameraNearFar,e.near,e.far):2===a.identifier&&(a.highlightDepthTexture=s.highlightDepthTexture,P.copy(a.viewport,e.fullViewport)),0!==a.identifier&&2!==a.identifier||(a.inverseViewport[0]=1/e.fullViewport[2],a.inverseViewport[1]=1/e.fullViewport[3]),l.copyWithoutVerify(s.sliceHelper.plane,a.slicePlane),n.subtract(a.slicePlane.origin,a.slicePlane.origin,_),a.slicePlaneEnabled=s.sliceHelper.isEnabled,this._materialPassParams.transparencyPassType=s.transparencyPassType,this._materialPassParams.multipassTerrainParams=s.multipassTerrainParams},t._registerPass=function(s){return this._passes.push(s),s},a._createClass(s,[{key:"shadowCastingEnabled",get:function(){return e.isSome(this.passes.shadowMap)},set:function(s){s?(this._materialPassParams.shadowsEnabled=!0,this.passes.shadowMap=this._shadowMapPass):(this._materialPassParams.shadowsEnabled=!1,this.passes.shadowMap=null)}},{key:"screenSpaceReflectionsEnabled",get:function(){return e.isSome(this._materialPassParams.ssrParams.ssrEnabled)},set:function(s){this._materialPassParams.ssrParams.ssrEnabled=!!s}},{key:"needsHighlight",get:function(){return this.passes.highlight.count>0||this.passes.highlightIntegratedMesh.count>0}}]),s}();const _=o.create(),g=t.create(),w=new p.TwoVectorPosition;s.RenderPassManager=u,Object.defineProperty(s,"__esModule",{value:!0})}));
