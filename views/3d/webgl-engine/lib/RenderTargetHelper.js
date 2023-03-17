/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../core/uid","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/Renderbuffer","../../../webgl/Texture","../../../webgl/Util"],(function(e,t,r,i,s,h,o,a,u){"use strict";const d={dataType:s.PixelType.UNSIGNED_BYTE,internalFormat:s.PixelFormat.RGBA},n={};let p=function(){function e(e){this._rctx=e,this._activeTargets=new Set,this._depthTextures=new Map,this._depthBuffers=new Map,this._colorTextures=new Map,this._framebuffers=new Map,this.depthTextureSupported=e.capabilities.depthTexture}var p=e.prototype;return p.dispose=function(){this._depthBuffers.forEach((e=>e.dispose())),this._depthBuffers.clear(),this._depthTextures.forEach((e=>e.dispose())),this._depthTextures.clear(),this._colorTextures.forEach((e=>e.dispose())),this._colorTextures.clear(),this._framebuffers.forEach((e=>e.dispose())),this._framebuffers.clear(),this._activeTargets.clear()},p.disposeTargetResource=function(e){const t=e.id;this._activeTargets.has(t)&&(this._activeTargets.delete(t),this._disposeWithFramebuffers(this._depthTextures,t),this._disposeWithFramebuffers(this._depthBuffers,t),this._disposeWithFramebuffers(this._colorTextures,t))},p._disposeWithFramebuffers=function(e,t){const r=e.get(t);r&&(this._framebuffers.forEach(((e,t)=>{e.colorAttachment!==r&&e.depthStencilAttachment!==r||(e.detachAll(),e.dispose(),this._framebuffers.delete(t))})),r.dispose(),e.delete(t))},p.getDepthTexture=function(e,t){if(!this.depthTextureSupported)return null;let i=this._depthTextures.get(e.id);return!i||i.descriptor.width===t.width&&i.descriptor.height===t.height||(i.dispose(),i=r.nullifyNonNullableForDispose()),i||(i=new a.Texture(this._rctx,{target:s.TextureType.TEXTURE_2D,pixelFormat:s.PixelFormat.DEPTH_STENCIL,dataType:s.PixelType.UNSIGNED_INT_24_8,samplingMode:s.TextureSamplingMode.NEAREST,wrapMode:s.TextureWrapMode.CLAMP_TO_EDGE,width:t.width,height:t.height}),this._depthTextures.set(e.id,i),this._activeTargets.add(e.id)),i},p.getAllocatedDepthTexture=function(e){return this._depthTextures.get(e.id)},p.getDepthBuffer=function(e,t){if(this.depthTextureSupported)return null;let r=this._depthBuffers.get(e.id);return r?r.descriptor.width===t.width&&r.descriptor.height===t.height||r.resize(t.width,t.height):(r=new o.Renderbuffer(this._rctx,{internalFormat:s.RenderbufferFormat.DEPTH_STENCIL,...t}),this._depthBuffers.set(e.id,r),this._activeTargets.add(e.id)),r},p.getColorTexture=function(e,t){let i=this._colorTextures.get(e.id);return i&&(i.descriptor.width===t.width&&i.descriptor.height===t.height||(i.dispose(),i=r.nullifyNonNullableForDispose())),i||(i=new a.Texture(this._rctx,{target:s.TextureType.TEXTURE_2D,pixelFormat:s.PixelFormat.RGBA,internalFormat:e.internalFormat,dataType:e.dataType,samplingMode:null!=e.samplingMode?e.samplingMode:s.TextureSamplingMode.LINEAR,wrapMode:s.TextureWrapMode.CLAMP_TO_EDGE,width:t.width,height:t.height}),this._colorTextures.set(e.id,i),this._activeTargets.add(e.id)),i},p.getAllocatedColorTexture=function(e){return this._colorTextures.get(e.id)},p.registerDepthTarget=function(e={}){return{id:i.generateUID(),...n,...e}},p.registerColorTarget=function(e={}){return{id:i.generateUID(),...d,...e}},p.getFramebuffer=function(e,t,i){const o=this._getKey(t,i);let a=this._framebuffers.get(o);const u=this.getColorTexture(t,e);if(this.depthTextureSupported){const t=i?this.getDepthTexture(i,e):void 0;if(!a)return a=r.isSome(i)?new h.FramebufferObject(this._rctx,{colorTarget:s.TargetType.TEXTURE,depthStencilTarget:s.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE},u,t):new h.FramebufferObject(this._rctx,{colorTarget:s.TargetType.TEXTURE,depthStencilTarget:s.DepthStencilTargetType.NONE},u),this._framebuffers.set(o,a),a;return(a.width!==e.width||a.height!==e.height||a.colorTexture!==u||a.depthStencilTexture!==t)&&(a.detachAll(),a.resize(e.width,e.height),a.attachColorTexture(u),a.attachDepthStencilTexture(t)),a}const d=i?this.getDepthBuffer(i,e):void 0;if(!a)return a=new h.FramebufferObject(this._rctx,{colorTarget:s.TargetType.TEXTURE,depthStencilTarget:i?s.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:s.DepthStencilTargetType.NONE},u,d),this._framebuffers.set(o,a),a;return(a.width!==e.width||a.height!==e.height||a.colorTexture!==u)&&(a.detachAll(),a.resize(e.width,e.height),a.attachColorTexture(u),a.attachDepthStencilBuffer(d)),a},p._getKey=function(e,t){return`${e.id}_${t?t.id:"X"}_${e.name}${t?"_"+t.name:""}`},t._createClass(e,[{key:"gpuMemoryUsage",get:function(){let e=0;const t=new Set,r=r=>{t.has(r)||(t.add(r),e+=u.getGpuMemoryUsage(r))};return this._depthTextures.forEach(r),this._colorTextures.forEach(r),this._depthBuffers.forEach(r),e}}]),e}();e.RenderTargetHelper=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
