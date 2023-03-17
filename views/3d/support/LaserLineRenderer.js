/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec3","../../../geometry/support/clipRay","../../../geometry/support/frustum","../../../geometry/support/lineSegment","../../../geometry/support/ray","../../ViewingMode","./LaserlinePathData","../webgl-engine/lib/glUtil3D","../webgl-engine/lib/RenderSlot","../webgl-engine/materials/internal/MaterialUtil","../webgl-engine/shaders/LaserlinePathTechnique","../webgl-engine/shaders/LaserlinePathTechniqueConfiguration","../webgl-engine/shaders/LaserlineTechnique","../webgl-engine/shaders/LaserlineTechniqueConfiguration","../../webgl/enums"],(function(e,t,i,n,s,a,r,h,l,c,o,u,d,_,p,g,f,P){"use strict";let b=function(){function e(e,t={contrastControlEnabled:!1}){this._config=t,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=l.ViewingMode.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=d.copyParameters(e,new g.LaserlinePassParameters)}var b=e.prototype;return b.setParameters=function(e){d.updateParameters(this._passParameters,e)&&this._requestRender()},b.initializeRenderContext=function(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=o.createQuadVAO(t),this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new f.LaserlineTechniqueConfiguration;const i=new p.LaserlinePathTechniqueConfiguration;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(_.LaserlinePathTechnique,i)},b.uninitializeRenderContext=function(){this._quadVAO=i.disposeMaybe(this._quadVAO),this._technique=i.releaseMaybe(this._technique),this._pathVerticalPlaneData=i.disposeMaybe(this._pathVerticalPlaneData),this._pathTechnique=i.releaseMaybe(this._pathTechnique)},b.prepareTechnique=function(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===l.ViewingMode.Global,this._technique=this._techniqueRepository.releaseAndAcquire(g.LaserlineTechnique,this._techniqueConfig,this._technique),this._technique):this._pathTechnique},b.render=function(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)},b._renderUnified=function(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,this._passParameters,e.bindParameters),i.bindVAO(this._quadVAO),i.drawArrays(P.PrimitiveType.TRIANGLE_STRIP,0,4)},b._renderPath=function(e){if(i.isNone(this._pathVerticalPlaneData)||i.isNone(this._pathTechnique))return;const t=e.rctx,n=this._pathTechnique;t.bindTechnique(n,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx)},b._updatePassParameters=function(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(s.fromRay(h.wrap(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),m),m.c0=-Number.MAX_VALUE,!a.intersectClipRay(t.frustum,m))return;s.getStart(m,this._passParameters.lineStartWorld),s.getEnd(m,this._passParameters.lineEndWorld)}else n.copy(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),n.add(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)},b._requestRender=function(){this._context&&this._context.requestRender()},t._createClass(e,[{key:"renderSlots",get:function(){return[this._config.contrastControlEnabled?u.RenderSlot.LASERLINES_CONTRAST_CONTROL:u.RenderSlot.LASERLINES]}},{key:"needsLinearDepth",get:function(){return!0}},{key:"heightManifoldEnabled",get:function(){return this._heightManifoldEnabled},set:function(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}},{key:"heightManifoldTarget",get:function(){return this._passParameters.heightManifoldTarget},set:function(e){n.copy(this._passParameters.heightManifoldTarget,e),this._requestRender()}},{key:"pointDistanceEnabled",get:function(){return this._pointDistanceEnabled},set:function(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}},{key:"pointDistanceTarget",get:function(){return this._passParameters.pointDistanceTarget},set:function(e){n.copy(this._passParameters.pointDistanceTarget,e),this._requestRender()}},{key:"pointDistanceOrigin",get:function(){return this._passParameters.pointDistanceOrigin},set:function(e){n.copy(this._passParameters.pointDistanceOrigin,e),this._requestRender()}},{key:"lineVerticalPlaneEnabled",get:function(){return this._lineVerticalPlaneEnabled},set:function(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}},{key:"lineVerticalPlaneSegment",get:function(){return this._passParameters.lineVerticalPlaneSegment},set:function(e){r.copy(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}},{key:"intersectsLineEnabled",get:function(){return this._intersectsLineEnabled},set:function(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}},{key:"intersectsLineSegment",get:function(){return this._passParameters.intersectsLineSegment},set:function(e){r.copy(e,this._passParameters.intersectsLineSegment),this._requestRender()}},{key:"intersectsLineRadius",get:function(){return this._passParameters.intersectsLineRadius},set:function(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}},{key:"intersectsLineInfinite",get:function(){return this._intersectsLineInfinite},set:function(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}},{key:"viewingMode",get:function(){return this._viewingMode},set:function(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}},{key:"pathVerticalPlaneEnabled",get:function(){return this._pathVerticalPlaneEnabled},set:function(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,i.isSome(this._pathVerticalPlaneData)&&this._requestRender())}},{key:"pathVerticalPlaneVertices",set:function(e){i.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new c.LaserlinePathData(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}},{key:"pathVerticalPlaneBuffers",set:function(e){i.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new c.LaserlinePathData(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}}]),e}();const m=s.create();e.LaserLineRenderer=b,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
