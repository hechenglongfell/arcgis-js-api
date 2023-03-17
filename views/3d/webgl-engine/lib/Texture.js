/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/compilerUtils","../../../../core/Error","../../../../core/Evented","../../../../core/mathUtils","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/typedArrayUtil","../../../../core/urlUtils","../../../../support/requestImageUtils","../../../../support/requestUtils","../../../../chunks/TextureOnly.glsl","./basicInterfaces","./BasisUtil","./ContentObject","./ContentObjectType","./DDSUtil","./glUtil3D","./Util","../../../webgl/context-util","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/Texture","../../../webgl/Util"],(function(e,t,r,i,a,o,s,n,l,u,h,d,p,m,c,T,_,f,g,w,x,A,E,y,M){"use strict";let D=function(e){function T(t,r){var i;return(i=e.call(this)||this)._data=t,i.type=_.ContentObjectType.Texture,i._glTexture=null,i._powerOfTwoStretchInfo=null,i._loadingPromise=null,i._loadingController=null,i.events=new a,i._passParameters=new p.TextureOnlyPassParameters,i.params=r||{},i.params.mipmap=!1!==i.params.mipmap,i.params.noUnpackFlip=i.params.noUnpackFlip||!1,i.params.preMultiplyAlpha=i.params.preMultiplyAlpha||!1,i.params.wrap=i.params.wrap||{s:A.TextureWrapMode.REPEAT,t:A.TextureWrapMode.REPEAT},i.params.powerOfTwoResizeMode=i.params.powerOfTwoResizeMode||m.PowerOfTwoResizeMode.STRETCH,i.estimatedTexMemRequired=T._estimateTexMemRequired(i._data,i.params),i._startPreload(),i}t._inheritsLoose(T,e);var D=T.prototype;return D._startPreload=function(){const e=this._data;s.isNone(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))},D._startPreloadVideoElement=function(e){if(!(u.isBlobProtocol(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}},D._startPreloadImageElement=function(e){u.isDataProtocol(e.src)||u.isBlobProtocol(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)},T._getDataDimensions=function(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e},T._estimateTexMemRequired=function(e,t){if(s.isNone(e))return 0;if(l.isArrayBuffer(e)||l.isUint8Array(e))return t.encoding===m.TextureEncodingMimeType.KTX2_ENCODING?c.estimateMemoryKTX2(e,!!t.mipmap):t.encoding===m.TextureEncodingMimeType.BASIS_ENCODING?c.estimateMemoryBasis(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?T._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0},D.dispose=function(){this._data=void 0},D._createDescriptor=function(e){return{target:A.TextureType.TEXTURE_2D,pixelFormat:A.PixelFormat.RGBA,dataType:A.PixelType.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?A.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:A.TextureSamplingMode.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}},D.load=function(e,t){if(s.isSome(this._glTexture))return this._glTexture;if(s.isSome(this._loadingPromise))return this._loadingPromise;const r=this._data;return s.isNone(r)?(this._glTexture=new y.Texture(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):(l.isArrayBuffer(r)||l.isUint8Array(r))&&this.params.encoding===m.TextureEncodingMimeType.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(l.isArrayBuffer(r)||l.isUint8Array(r))&&this.params.encoding===m.TextureEncodingMimeType.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(l.isArrayBuffer(r)||l.isUint8Array(r))&&this.params.encoding===m.TextureEncodingMimeType.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):l.isUint8Array(r)?this._loadFromPixelData(e,r):l.isArrayBuffer(r)?this._loadFromPixelData(e,new Uint8Array(r)):null},D.frameUpdate=function(e,t,r){if(!(this._data instanceof HTMLVideoElement)||s.isNone(this._glTexture))return r;if(this._data.readyState<P.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if(s.isSome(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:a}=this._powerOfTwoStretchInfo;a.setData(this._data),this._drawStretchedTexture(e,t,r,i,a,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime},D._loadFromDDSData=function(e,t){return this._glTexture=f.createDDSTexture(e,this._createDescriptor(e),t),this._glTexture},D._loadFromKTX2=function(e,t){return this._loadAsync((()=>c.createTextureKTX2(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))},D._loadFromBasis=function(e,t){return this._loadAsync((()=>c.createTextureBasis(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))},D._loadFromPixelData=function(e,t){w.assert(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?A.PixelFormat.LUMINANCE:3===this.params.components?A.PixelFormat.RGB:A.PixelFormat.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new y.Texture(e,r,t),this._glTexture},D._loadFromURL=function(e,r,i){var a=this;return this._loadAsync(function(){var o=t._asyncToGenerator((function*(t){const o=yield h.requestImage(i,{signal:t});return n.throwIfAborted(t),a._loadFromImage(e,o,r)}));return function(e){return o.apply(this,arguments)}}())},D._loadFromImageElement=function(e,r,i){var a=this;return i.complete?this._loadFromImage(e,i,r):this._loadAsync(function(){var o=t._asyncToGenerator((function*(t){const o=yield d.loadImageAsync(i,i.src,!1,t);return n.throwIfAborted(t),a._loadFromImage(e,o,r)}));return function(e){return o.apply(this,arguments)}}())},D._loadFromVideoElement=function(e,t,r){return r.readyState>=P.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)},D._loadFromVideoElementAsync=function(e,t,r){return this._loadAsync((a=>new Promise(((o,l)=>{const u=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",d),s.removeMaybe(p)},h=()=>{r.readyState>=P.HAVE_CURRENT_DATA&&(u(),o(this._loadFromImage(e,r,t)))},d=e=>{u(),l(e||new i("Failed to load video"))};r.addEventListener("loadeddata",h),r.addEventListener("error",d);const p=n.onAbort(a,(()=>d(n.createAbortError())))}))))},D._loadFromImage=function(e,t,r){const i=T._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this.params.components?A.PixelFormat.RGB:A.PixelFormat.RGBA,!this._requiresPowerOfTwo(e,a)||o.isPowerOfTwo(i.width)&&o.isPowerOfTwo(i.height)?(a.width=i.width,a.height=i.height,this._glTexture=new y.Texture(e,a,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,a,r),this._glTexture)},D._loadAsync=function(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r},D._requiresPowerOfTwo=function(e,t){const r=A.TextureWrapMode.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return e.type===x.ContextType.WEBGL1&&(t.hasMipmap||!i)},D._makePowerOfTwoTexture=function(e,t,i,a,s){const{width:n,height:l}=i,u=o.nextHighestPowerOfTwo(n),h=o.nextHighestPowerOfTwo(l);let d;switch(a.width=u,a.height=h,this.params.powerOfTwoResizeMode){case m.PowerOfTwoResizeMode.PAD:a.textureCoordinateScaleFactor=[n/u,l/h],d=new y.Texture(e,a),d.updateData(0,0,0,n,l,t);break;case m.PowerOfTwoResizeMode.STRETCH:case null:case void 0:d=this._stretchToPowerOfTwo(e,t,a,s());break;default:r.neverReached(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&d.generateMipmap(),d},D._stretchToPowerOfTwo=function(e,t,r,i){const a=new y.Texture(e,r),o=new E.FramebufferObject(e,{colorTarget:A.TargetType.TEXTURE,depthStencilTarget:A.DepthStencilTargetType.NONE},a),s=new y.Texture(e,{target:A.TextureType.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:A.PixelType.UNSIGNED_BYTE,wrapMode:A.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:A.TextureSamplingMode.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),n=g.createQuadVAO(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,o,n,s,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:s,framebuffer:o}:(n.dispose(!0),s.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),a},D._drawStretchedTexture=function(e,t,r,i,a,o){this._passParameters.texture=a,e.bindFramebuffer(r);const s=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(A.PrimitiveType.TRIANGLE_STRIP,0,M.vertexCount(i,"geometry")),e.bindFramebuffer(null),e.setViewport(s.x,s.y,s.width,s.height),this._passParameters.texture=null},D.unload=function(){if(s.isSome(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(s.isSome(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),s.isSome(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")},t._createClass(T,[{key:"width",get:function(){return this.params.width}},{key:"height",get:function(){return this.params.height}},{key:"glTexture",get:function(){return this._glTexture}},{key:"requiresFrameUpdates",get:function(){return this._data instanceof HTMLVideoElement}}]),T}(T.ContentObject);var P;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(P||(P={})),e.Texture=D,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
