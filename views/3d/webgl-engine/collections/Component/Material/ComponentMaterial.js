/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/tslib.es6","../../../../../../core/maybe","../../../../../../chunks/vec3","../../../../../../chunks/vec3f32","../../../../../../chunks/vec4","../../../../../../chunks/vec4f32","../../../../../../chunks/vec4f64","./ComponentTechnique","../../../../../../chunks/ComponentShader.glsl","../../../core/material/MaterialBase","../../../core/shaderLibrary/util/AlphaDiscard.glsl"],(function(e,t,r,a,o,s,i,n,l,c,p,u,d){"use strict";let m=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).baseColor=n.fromValues(1,1,1,1),t.usePBR=!1,t.hasParametersFromSource=!1,t.mrrFactors=s.fromValues(1,1,.5),t.emissiveFactor=s.fromValues(0,0,0),t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.emissionTexture=null,t.occlusionTexture=null,t.normalTexture=null,t.overlayTexOffset=l.fromValues(-1,-1,-1,-1),t.overlayTexScale=l.fromValues(0,0,0,0),t.overlayColor=null,t.overlayHighlight=null,t.overlayNormal=null,t.objectOpacity=1,t.commonMaterialParameters=new h,t.componentParameters=new _,t.alphaCutoff=d.defaultMaskAlphaCutoff,t.alphaDiscardMode=1,t.isIntegratedMesh=!1,t.polygonOffsetEnabled=!1,t.ellipsoidMode=1,t.sceneHasOcludees=!1,t._techniqueConfig=new c.ComponentTechniqueConfiguration,t}t._inheritsLoose(r,e);var o=r.prototype;return o.dispose=function(){this._technique=a.releaseMaybe(this._technique),this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.emissionTexture=null,this.occlusionTexture=null,this.normalTexture=null},o.getTechnique=function(e,t,r){const o=this._techniqueConfig;if(o.hasVertexColors=r.colors,o.hasNormals=r.normals,o.vertexTextureCoordinates=r.textureCoordinates,o.usePBR=this.usePBR,o.hasMetalnessAndRoughnessTexture=a.isSome(this.metallicRoughnessTexture),o.hasEmissionTexture=a.isSome(this.emissionTexture),o.hasOcclusionTexture=a.isSome(this.occlusionTexture),o.hasNormalTexture=a.isSome(this.normalTexture),o.transparencyPassType=0===t.identifier&&null!=t.transparencyPassType?t.transparencyPassType:3,o.multipassTerrainEnabled=0===t.identifier&&null!=t.multipassTerrainParams&&t.multipassTerrainParams.multipassTerrainEnabled,o.cullAboveGround=0===t.identifier&&null!=t.multipassTerrainParams&&t.multipassTerrainParams.cullAboveGround,o.ellipsoidMode=this.ellipsoidMode,this.dirty){o.componentData=this.componentParameters.type,o.cullFace=this.commonMaterialParameters.cullFace,o.doubleSidedMode=this.commonMaterialParameters.doubleSided?1:0,o.baseColorTexture=a.isSome(this.baseColorTexture),o.isSchematic=this.hasParametersFromSource&&!a.isSome(this.baseColorTexture);const e=this._computeWhichMaterialPass();o.blendingEnabled=1===e||2===e,o.alphaDiscardMode=this.alphaDiscardMode,o.integratedMeshMode=this.isIntegratedMesh?this.overlayColor?this.overlayNormal?3:2:1:0,o.polygonOffsetEnabled=this.polygonOffsetEnabled,this._setClean()}return o.slicePlaneEnabled=t.slicePlaneEnabled&&this.commonMaterialParameters.slicePlaneEnabled,1===t.identifier?(o.output=3,o.vertexDiscardMode=0):2===t.identifier?(o.output=4,o.vertexDiscardMode=0):(2===this._computeWhichMaterialPass()?o.vertexDiscardMode=t.transparent?2:1:o.vertexDiscardMode=0,o.output=v(t.subPass),1===t.subPass&&(o.sceneHasOcludees=t.sceneHasOcludees),0===t.subPass?(o.receiveAmbientOcclusion=t.ambientOcclusionEnabled,o.sceneHasOcludees=t.sceneHasOcludees,o.receiveShadows=t.shadowsEnabled,o.ssrEnabled=t.ssrParams.ssrEnabled):(o.receiveAmbientOcclusion=!1,o.receiveShadows=!1)),this._technique=e.releaseAndAcquire(c.ComponentTechnique,o,this._technique),this._technique},o.submit=function(e,t){if(0===this.objectOpacity)return;const r=t.renderable.geometry,o=t.components,s=t.renderable.drawParameters,i=t.renderable.meta.cameraDepthSquared,n=o.geometryRanges,l=o.highlightRanges,c=o.defaultShadowMapRanges;switch(this._computeWhichMaterialPass()){case 0:e.materialOpaque.submitDraw(this,r,n,s,i);break;case 1:e.materialTransparent.submitDraw(this,r,n,s,i);break;case 2:e.materialOpaque.submitDraw(this,r,n,s,i),e.materialTransparent.submitDraw(this,r,n,s,i);break;case 3:e.materialIntegratedMesh.submitDraw(this,r,n,s,i),this.overlayHighlight&&e.highlightIntegratedMesh.submitDraw(this,r,n,s,i)}const p=2!==this.componentParameters.castShadows;p&&e.shadowMap.submitDraw(this,r,n,s,i),a.isSome(l)&&(e.highlight.submitDraw(this,r,l,s,i),p&&e.highlightShadowMap.submitDraw(this,r,l,s,i)),p&&a.isSome(c)&&e.defaultShadowMap.submitDraw(this,r,c,s,i)},o._computeWhichMaterialPass=function(){return this.isIntegratedMesh?3:this.objectOpacity<1?1:0===this.componentParameters.opaqueOverride?0:this.baseColor[3]<1||0===this.alphaDiscardMode||3===this.alphaDiscardMode?1:2===this.componentParameters.transparent?0:0===this.componentParameters.transparent?1:2},t._createClass(r,[{key:"attributeLocations",get:function(){return p.attributeLocations}}]),r}(u.MaterialBase);r.__decorate([u.parameter({vectorOps:i.vec4})],m.prototype,"baseColor",void 0),r.__decorate([u.parameter()],m.prototype,"usePBR",void 0),r.__decorate([u.parameter()],m.prototype,"hasParametersFromSource",void 0),r.__decorate([u.parameter({vectorOps:o.vec3})],m.prototype,"mrrFactors",void 0),r.__decorate([u.parameter({vectorOps:o.vec3})],m.prototype,"emissiveFactor",void 0),r.__decorate([u.parameter({dispose:!0})],m.prototype,"baseColorTexture",void 0),r.__decorate([u.parameter({dispose:!0})],m.prototype,"metallicRoughnessTexture",void 0),r.__decorate([u.parameter({dispose:!0})],m.prototype,"emissionTexture",void 0),r.__decorate([u.parameter({dispose:!0})],m.prototype,"occlusionTexture",void 0),r.__decorate([u.parameter({dispose:!0})],m.prototype,"normalTexture",void 0),r.__decorate([u.parameter({vectorOps:{equals:i.exactEquals,copy:i.copy}})],m.prototype,"overlayTexOffset",void 0),r.__decorate([u.parameter({vectorOps:{equals:i.exactEquals,copy:i.copy}})],m.prototype,"overlayTexScale",void 0),r.__decorate([u.parameter()],m.prototype,"overlayColor",void 0),r.__decorate([u.parameter()],m.prototype,"overlayHighlight",void 0),r.__decorate([u.parameter()],m.prototype,"overlayNormal",void 0),r.__decorate([u.parameter()],m.prototype,"objectOpacity",void 0),r.__decorate([u.parameterBlock()],m.prototype,"commonMaterialParameters",void 0),r.__decorate([u.parameterBlock()],m.prototype,"componentParameters",void 0),r.__decorate([u.parameter()],m.prototype,"alphaCutoff",void 0),r.__decorate([u.parameter()],m.prototype,"alphaDiscardMode",void 0),r.__decorate([u.parameter()],m.prototype,"isIntegratedMesh",void 0),r.__decorate([u.parameter()],m.prototype,"polygonOffsetEnabled",void 0),r.__decorate([u.parameter()],m.prototype,"ellipsoidMode",void 0),r.__decorate([u.parameter()],m.prototype,"sceneHasOcludees",void 0);let h=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).doubleSided=!1,t.cullFace=2,t.slicePlaneEnabled=!0,t}return t._inheritsLoose(r,e),r}(u.MaterialParameterBlock);r.__decorate([u.parameter()],h.prototype,"doubleSided",void 0),r.__decorate([u.parameter()],h.prototype,"cullFace",void 0),r.__decorate([u.parameter()],h.prototype,"slicePlaneEnabled",void 0);let _=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).externalColor=n.fromValues(1,1,1,1),t.externalColorMixMode=1,t.castShadows=0,t}return t._inheritsLoose(r,e),t._createClass(r,[{key:"transparent",get:function(){return this.externalColor[3]<1?0:2}},{key:"opaqueOverride",get:function(){return 3===this.externalColorMixMode&&1===this.externalColor[3]?0:2}},{key:"visible",get:function(){return this.externalColor[3]>0?0:2}},{key:"type",get:function(){return 0}}]),r}(u.MaterialParameterBlock);r.__decorate([u.parameter({vectorOps:i.vec4})],_.prototype,"externalColor",void 0),r.__decorate([u.parameter()],_.prototype,"externalColorMixMode",void 0),r.__decorate([u.parameter()],_.prototype,"castShadows",void 0);let y=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).texture=null,t.transparent=2,t.opaqueOverride=2,t.castShadows=2,t}return t._inheritsLoose(r,e),t._createClass(r,[{key:"type",get:function(){return 1}}]),r}(u.MaterialParameterBlock);function v(e){switch(e){case 0:return 0;case 1:return 7;case 2:return 1;case 3:return 2}}r.__decorate([u.parameter()],y.prototype,"texture",void 0),r.__decorate([u.parameter()],y.prototype,"transparent",void 0),r.__decorate([u.parameter()],y.prototype,"opaqueOverride",void 0),r.__decorate([u.parameter()],y.prototype,"castShadows",void 0),e.CommonMaterialParameters=h,e.ComponentMaterial=m,e.ComponentParametersUniform=_,e.ComponentParametersVarying=y,Object.defineProperty(e,"__esModule",{value:!0})}));
