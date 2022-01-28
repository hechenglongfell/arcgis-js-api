/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/mathUtils","../../core/maybe","./checkWebGLError","./enums","./capabilities/isWebGL2Context"],(function(t,e,i,r,a,o){"use strict";const s=4;let n=function(){function n(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(a.ResourceType.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}var h=n.prototype;return h.dispose=function(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a.ResourceType.Texture,this))},h.release=function(){this.dispose()},h.resize=function(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))},h.setDataCubeMap=function(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)},h.setData=function(t,e=3553){if(!this._context||!this._context.gl)return;const a=this._context.gl;this._glName||(this._glName=a.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const o=this._context.bindTexture(this,n.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;n._validateTexture(this._context,h),a.pixelStorei(a.UNPACK_ALIGNMENT,h.unpackAlignment),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const l=h.pixelFormat;let _=h.internalFormat?h.internalFormat:this._deriveInternalFormat(l,h.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let i=t.width,o=t.height;t instanceof HTMLVideoElement&&(i=t.videoWidth,o=t.videoHeight),h.width&&h.height,a.texImage2D(e,0,_,l,h.dataType,t),r.checkWebGLError(a),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=i),void 0===h.height&&(h.height=o)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),a.DEPTH24_STENCIL8&&_===a.DEPTH_STENCIL&&(_=a.DEPTH24_STENCIL8);let o=h.width,s=h.height;if(p(t)){const i=Math.round(Math.log(Math.max(o,s))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&i===t.levels.length;for(let r=0;;++r){const i=t.levels[Math.min(r,t.levels.length-1)];if(a.compressedTexImage2D(e,r,_,o,s,0,i),1===o&&1===s||!h.hasMipmap)break;o=Math.max(1,o>>1),s=Math.max(1,s>>1)}}else if(i.isSome(t))a.texImage2D(e,0,_,o,s,0,l,h.dataType,t),r.checkWebGLError(a),h.hasMipmap&&this.generateMipmap();else for(let t=0;a.texImage2D(e,t,_,o,s,0,l,h.dataType,null),r.checkWebGLError(a),(1!==o||1!==s)&&h.hasMipmap;++t)o=Math.max(1,o>>1),s=Math.max(1,s>>1)}n._applySamplingMode(a,this._descriptor),n._applyWrapMode(a,this._descriptor),n._applyAnisotropicFilteringParameters(this._context,this._descriptor),r.checkWebGLError(a),this._context.bindTexture(o,n.TEXTURE_UNIT_FOR_UPDATES)},h.updateData=function(t,e,i,r,a,o,s=3553){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl,h=this._descriptor,l=this._context.bindTexture(this,n.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||r>h.width||a>h.height||e+r>h.width||i+a>h.height)&&console.error("An attempt to update out of bounds of the texture!"),p.pixelStorei(p.UNPACK_ALIGNMENT,h.unpackAlignment),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?p.texSubImage2D(s,t,e,i,h.pixelFormat,h.dataType,o):p.texSubImage2D(s,t,e,i,r,a,h.pixelFormat,h.dataType,o),this._context.bindTexture(l,n.TEXTURE_UNIT_FOR_UPDATES)},h.generateMipmap=function(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,n._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,n.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,n.TEXTURE_UNIT_FOR_UPDATES)},h.setSamplingMode=function(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)},h.setWrapMode=function(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,n._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)},h.applyChanges=function(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(n._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(n._applyWrapMode(t,e),this._wrapModeDirty=!1)},h._deriveInternalFormat=function(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t},n._validateTexture=function(t,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const r=e.isPowerOfTwo(i.width)&&e.isPowerOfTwo(i.height);o(t.gl)||r||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},n._applySamplingMode=function(t,e){let i=e.samplingMode,r=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(r=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(r=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)},n._applyWrapMode=function(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))},n._applyAnisotropicFilteringParameters=function(t,e){var i;const r=t.capabilities.textureFilterAnisotropic;if(!r)return;t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)},t._createClass(n,[{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._descriptor}},{key:"isDirty",get:function(){return this._samplingModeDirty||this._wrapModeDirty}}]),n}();function p(t){return i.isSome(t)&&"type"in t&&"compressed"===t.type}return n.TEXTURE_UNIT_FOR_UPDATES=0,n}));
