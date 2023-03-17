/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","./context-util"],(function(t,e,n,r){"use strict";let o,s;function a(t){const e=r.getContextTypes(t);for(;e.length>1;){const t=l(e.shift());if(t.available)return t}return l(e.shift())}function l(t){switch(t){case r.ContextType.WEBGL1:return i();case r.ContextType.WEBGL2:return u()}}function i(){return o||(o=x()),o}function u(){return s||(s=_()),s}let p=function(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1,this.supportsTextureHalfFloat=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1},f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).type=r.ContextType.WEBGL1,e}return e._inheritsLoose(n,t),n}(p),c=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).type=r.ContextType.WEBGL2,e.supportsElementIndexUint=!0,e.supportsStandardDerivatives=!0,e.supportsInstancedArrays=!0,e.supportsTextureFloat=!0,e.supportsTextureHalfFloat=!0,e}return e._inheritsLoose(n,t),n}(p);function E(t,e){if(t===r.ContextType.WEBGL1&&"undefined"==typeof WebGLRenderingContext||t===r.ContextType.WEBGL2&&"undefined"==typeof WebGL2RenderingContext)return null;const o=document.createElement("canvas");if(!o)return null;let s=r.createContext(o,t,{failIfMajorPerformanceCaveat:!0});if(n.isNone(s)&&(s=r.createContext(o,t),n.isSome(s)&&(e.majorPerformanceCaveat=!0)),n.isNone(s))return s;if(t===r.ContextType.WEBGL1){const t=s.getParameter(s.VERSION)?.match(/^WebGL\s+([\d.]*)/);if(t){const n=parseFloat(t[1]);e.available=n>=.94}}else e.available=!0;e.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),e.supportsVertexShaderSamplers=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const a=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT);return a&&(e.supportsHighPrecisionFragment=a.precision>0),s}function x(){const t=new f,e=E(r.ContextType.WEBGL1,t);return n.isNone(e)||(t.supportsElementIndexUint=null!==e.getExtension("OES_element_index_uint"),t.supportsStandardDerivatives=null!==e.getExtension("OES_standard_derivatives"),t.supportsInstancedArrays=null!==e.getExtension("ANGLE_instanced_arrays"),t.supportsTextureFloat=null!==e.getExtension("OES_texture_float"),t.supportsTextureHalfFloat=null!==e.getExtension("OES_texture_half_float"),t.supportsColorBufferFloat=null!==e.getExtension("WEBGL_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==e.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=null!==e.getExtension("EXT_color_buffer_half_float")),t}function _(){const t=new c,e=E(r.ContextType.WEBGL2,t);return n.isNone(e)||(t.supportsColorBufferFloat=null!==e.getExtension("EXT_color_buffer_float"),t.supportsColorBufferFloatBlend=null!==e.getExtension("EXT_float_blend"),t.supportsColorBufferHalfFloat=t.supportsColorBufferFloat||null!==e.getExtension("EXT_color_buffer_half_float")),t}t.getWebGL1Capabilities=i,t.getWebGL2Capabilities=u,t.getWebGLCapabilities=a,t.getWebGLVersionCapabilities=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
