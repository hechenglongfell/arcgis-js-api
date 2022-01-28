/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../chunks/mat4","../../../chunks/mat4f64","../../../support/requestImageUtils","./SimpleAtmosphereTechnique","./resources/SimpleAtmosphereTexture","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/core/shaderLibrary/util/View.glsl","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/GeometryUtil","../../webgl/BufferObject","../../webgl/Texture","../../webgl/Util","../../webgl/VertexArrayObject"],(function(e,t,r,i,o,n,s,a,l,c,u,h,p,m,g,f,d,y,b){"use strict";const _=r.getLogger("esri.views.3d.environment.PanoramicAtmosphere");let x=function(){function e(){this.type="panoramic",this._atmosphereTechniqueConfig=new l.SimpleAtmosphereTechniqueConfiguration,this._readyResolver=o.createResolver(),this._readyController=new AbortController}var r=e.prototype;return r.destroy=function(){this._readyResolver.reject(),this._texture=i.disposeMaybe(this._texture),this._vao=i.disposeMaybe(this._vao),this._readyController=i.abortMaybe(this._readyController)},r.when=function(){return this._readyResolver.promise},r.initializeRenderContext=function(e){this._atmosphereTechniqueConfig.geometry=1,this._atmosphereTechnique=e.shaderTechniqueRep.acquire(l.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig);const t=e.renderContext.rctx;this._vao=this._createVertexArrayObject(t),this._vaoCount=y.vertexCount(this._vao,"geometry"),a.requestImage(c,{signal:this._readyController.signal}).then((r=>{this._texture=new d(t,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),e.requestRender(),this._readyController=null,this._readyResolver.resolve()})).catch((e=>{o.isAbortError(e)||_.error("Unable to initialize atmosphere: image request failed",e),this._readyResolver.reject()}))},r.render=function(e){const t=e.rctx,r=this._atmosphereTechnique.program;return t.useProgram(r),this._atmosphereTechnique.bindPipelineState(t),r.bindTexture(this._texture,"tex"),p.bindProjectionMatrix(r,e.camera.projectionMatrix),v(w,e.camera.viewMatrix),r.setUniformMatrix4fv("view",w),r.setUniform4f("color",1,1,1,1),e.scenelightingData.setLightDirectionUniform(r),t.bindVAO(this._vao),r.assertCompatibleVertexAttributeLocations(this._vao),t.drawArrays(4,0,this._vaoCount),!0},r.renderHaze=function(){return!1},r._createVertexArrayObject=function(e){const t=g.createPolySphereGeometry(1,2,!1),r=t.indices.get("position");for(let s=0;s<r.length;s+=3){const e=r[s];r[s]=r[s+2],r[s+2]=e}const i=t.vertexAttributes.get("position").data,o=C.createBuffer(r.length),n=o.position;for(let s=0;s<r.length;++s){const e=3*r[s];n.set(s,0,i[e]),n.set(s,1,i[e+1]),n.set(s,2,i[e+2])}return new b(e,m.Default3D,{geometry:u.glLayout(C)},{geometry:f.createVertex(e,35044,o.buffer)})},t._createClass(e,[{key:"canRender",get:function(){return null!=this._texture}}]),e}();function v(e,t){n.copy(e,t),e[12]=0,e[13]=0,e[14]=0,e[15]=1}const w=s.create(),C=h.newLayout().vec3f("position");e.PanoramicAtmosphere=x,Object.defineProperty(e,"__esModule",{value:!0})}));
