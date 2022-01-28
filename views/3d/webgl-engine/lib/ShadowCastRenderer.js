/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec4","../../../../chunks/vec4f64","./glUtil3D","../shaders/ShadowCastTechnique","../../../webgl/Util"],(function(e,t,i,s,n,a,o,r,u,h,c,l,d,_,p){"use strict";const v=l.fromValues(.01,0,.25,1),f=4e4,b=5e4,m=1/512;e.ShadowCastRenderer=function(e){function i(t,i,s,n){var a;return(a=e.call(this,{})||this)._techniqueRepository=t,a._rctx=i,a._shadowAccumulator=s,a._requestRender=n,a._visualizationParams={shadowCastMap:a._shadowCastTexture,sampleScale:0,color:v,threshold:.5,bandSize:.1,opacityFromElevation:1},a._techniqueConfig=new _.ShadowCastTechniqueConfiguration,a._enabled=!1,a._vao=d.createQuadVAO(i),a._techniqueConfig.pass=1,a._techniqueConfig.visualization=0,a}t._inheritsLoose(i,e);var s=i.prototype;return s.normalizeCtorArgs=function(){return{}},s.dispose=function(){this._stop(),this._vao=n.disposeMaybe(this._vao),this._techniqueRepository.release(this._technique),this._technique=null,this._shadowAccumulator=null},s.render=function(){if(!this._isRenderingVisualization)return;this._sampleScale=1/this._computedSamples,this._rctx.bindVAO(this._vao);const e=this.visualizeShadowCastTechnique;this._rctx.useProgram(e.program),e.bindPipelineState(this._rctx),e.bindPass(this._visualizationParams),this._rctx.drawArrays(e.primitiveType,0,p.vertexCount(this._vao,"geometry"))},s.setOptions=function(e){void 0!==e.enabled&&this._setEnabled(e.enabled),void 0!==e.color&&this._setColor(e.color),void 0!==e.threshold&&(this._threshold=e.threshold),void 0!==e.visualization&&(this._visualization=e.visualization),void 0!==e.bandSize&&(this._bandSize=e.bandSize),void 0!==e.bandsEnabled&&(this._bandsEnabled=e.bandsEnabled)},s._setColor=function(e){const t=this._visualizationParams.color;c.exactEquals(e,t)||(c.copy(this._visualizationParams.color,e),this._requestRenderIfRunning())},s._setEnabled=function(e){e!==this._enabled&&(e?this._start():this._stop())},s._requestRenderIfRunning=function(){this._enabled&&this._requestRender()},s._start=function(){this._enabled=!0,this._requestRender()},s._stop=function(){this._enabled=!1,this._requestRender()},t._createClass(i,[{key:"visualizeShadowCastTechnique",get:function(){return this._technique=this._techniqueRepository.releaseAndAcquire(_.ShadowCastTechnique,this._techniqueConfig,this._technique),this._technique}},{key:"opacityFromElevation",get:function(){return this._visualizationParams.opacityFromElevation},set:function(e){this._visualizationParams.opacityFromElevation!==e&&(this._visualizationParams.opacityFromElevation=e,this.notifyChange("opacityFromElevation"))}},{key:"_isRenderingVisualization",get:function(){return this._enabled&&this._computedSamples>0&&this.opacityFromElevation>m}},{key:"_computedSamples",get:function(){return this._shadowAccumulator.computedSamples}},{key:"_shadowCastTexture",get:function(){return this._shadowAccumulator.shadowCastTexture}},{key:"_sampleScale",get:function(){return this._visualizationParams.sampleScale},set:function(e){this._visualizationParams.sampleScale=e}},{key:"_threshold",get:function(){return this._visualizationParams.threshold},set:function(e){this._threshold!==e&&(this._visualizationParams.threshold=e,this._requestRenderIfRunning())}},{key:"_visualization",get:function(){return this._techniqueConfig.visualization},set:function(e){e!==this._visualization&&(this._techniqueConfig.visualization=e,this._techniqueRepository.release(this._technique),this._technique=null,this._requestRenderIfRunning())}},{key:"_bandSize",get:function(){return this._visualizationParams.bandSize},set:function(e){e!==this._bandSize&&(this._visualizationParams.bandSize=e,this._requestRenderIfRunning())}},{key:"_bandsEnabled",get:function(){return this._techniqueConfig.bandsEnabled},set:function(e){e!==this._bandsEnabled&&(this._techniqueConfig.bandsEnabled=e,this._techniqueRepository.release(this._technique),this._technique=null,this._requestRenderIfRunning())}}]),i}(s),i.__decorate([a.property()],e.ShadowCastRenderer.prototype,"opacityFromElevation",null),e.ShadowCastRenderer=i.__decorate([h.subclass("esri.views.3d.webgl-engine.lib.ShadowCastRenderer")],e.ShadowCastRenderer),e.shadowCastDisableElevationMax=b,e.shadowCastDisableElevationMin=f,e.shadowCastDisabledElevationThreshold=m,Object.defineProperty(e,"__esModule",{value:!0})}));
