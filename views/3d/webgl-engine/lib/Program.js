/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/PooledArray","../core/shaderTechnique/BindType","../../../webgl/checkWebGLError"],(function(t,e,r,i,n,s){"use strict";let o=function(){function t(t,e,r){this._context=t,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i({deallocator:null}),this._glProgram=t.programCache.acquire(e.generate("vertex"),e.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=e.generateBind(n.BindType.Pass,this),this.bindDraw=e.generateBind(n.BindType.Draw,this),this._fragmentUniforms=s.webglDebugEnabled()?e.fragmentUniforms:null}var o=t.prototype;return o.dispose=function(){this._glProgram.dispose()},o.setUniform1b=function(t,e){this._glProgram.setUniform1i(t,e?1:0)},o.setUniform1i=function(t,e){this._glProgram.setUniform1i(t,e)},o.setUniform1f=function(t,e){this._glProgram.setUniform1f(t,e)},o.setUniform2fv=function(t,e){this._glProgram.setUniform2fv(t,e)},o.setUniform3fv=function(t,e){this._glProgram.setUniform3fv(t,e)},o.setUniform4fv=function(t,e){this._glProgram.setUniform4fv(t,e)},o.setUniformMatrix3fv=function(t,e){this._glProgram.setUniformMatrix3fv(t,e)},o.setUniformMatrix4fv=function(t,e){this._glProgram.setUniformMatrix4fv(t,e)},o.setUniform1fv=function(t,e){this._glProgram.setUniform1fv(t,e)},o.setUniform1iv=function(t,e){this._glProgram.setUniform1iv(t,e)},o.setUniform2iv=function(t,e){this._glProgram.setUniform3iv(t,e)},o.setUniform3iv=function(t,e){this._glProgram.setUniform3iv(t,e)},o.setUniform4iv=function(t,e){this._glProgram.setUniform4iv(t,e)},o.assertCompatibleVertexAttributeLocations=function(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")},o.stop=function(){this._textures.clear(),this._freeTextureUnits.clear()},o.bindTexture=function(t,e){if(r.isNone(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let i=this._textures.get(t);return null==i?(i=this._allocTextureUnit(e),this._textures.set(t,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(e,i.unit),i.unit},o.rebindTextures=function(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),r.isSome(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)}))},o._allocTextureUnit=function(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}},o._freeTextureUnit=function(t){this._freeTextureUnits.push(t.unit)},e._createClass(t,[{key:"glName",get:function(){return this._glProgram.glName}},{key:"compiled",get:function(){return this._glProgram.compiled}}]),t}();t.Program=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
