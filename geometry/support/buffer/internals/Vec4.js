/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec4"],(function(t,e,f){"use strict";let r=function(){function t(t,e,f=0,r,i){this.TypedArrayConstructor=t,this.elementCount=4;const u=this.TypedArrayConstructor;void 0===r&&(r=4*u.BYTES_PER_ELEMENT);const s=0===e.byteLength?0:f;this.typedBuffer=null==i?new u(e,s):new u(e,s,(i-f)/u.BYTES_PER_ELEMENT),this.typedBufferStride=r/u.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var r=t.prototype;return r.sliceBuffer=function(t,e,f=this.count-e){const r=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,r,this.stride,r+f*this.stride)},r.getVec=function(t,e){return t*=this.typedBufferStride,f.set(e,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])},r.setVec=function(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]},r.get=function(t,e){return this.typedBuffer[t*this.typedBufferStride+e]},r.set=function(t,e,f){this.typedBuffer[t*this.typedBufferStride+e]=f},r.setValues=function(t,e,f,r,i){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=f,this.typedBuffer[t++]=r,this.typedBuffer[t]=i},r.copyFrom=function(t,e,f){const r=this.typedBuffer,i=e.typedBuffer;let u=t*this.typedBufferStride,s=f*e.typedBufferStride;r[u++]=i[s++],r[u++]=i[s++],r[u++]=i[s++],r[u]=i[s]},e._createClass(t,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),t}();r.ElementCount=4,t.BufferViewVec4Impl=r,Object.defineProperty(t,"__esModule",{value:!0})}));
