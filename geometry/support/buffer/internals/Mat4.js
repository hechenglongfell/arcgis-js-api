/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let r=function(){function t(t,e,r=0,f,i){this.TypedArrayConstructor=t,this.elementCount=16;const u=this.TypedArrayConstructor;void 0===f&&(f=16*u.BYTES_PER_ELEMENT);const s=0===e.byteLength?0:r;this.typedBuffer=null==i?new u(e,s):new u(e,s,(i-r)/u.BYTES_PER_ELEMENT),this.typedBufferStride=f/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var r=t.prototype;return r.sliceBuffer=function(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)},r.getMat=function(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e},r.setMat=function(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]},r.get=function(t,e){return this.typedBuffer[t*this.typedBufferStride+e]},r.set=function(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r},r.copyFrom=function(t,e,r){const f=this.typedBuffer,i=e.typedBuffer;let u=t*this.typedBufferStride,s=r*e.typedBufferStride;for(let n=0;n<16;++n)f[u++]=i[s++]},e._createClass(t,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),t}();r.ElementCount=16,t.BufferViewMat4Impl=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
