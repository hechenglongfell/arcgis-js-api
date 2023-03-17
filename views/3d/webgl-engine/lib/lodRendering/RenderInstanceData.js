/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry/support/buffer/BufferView","../Util","../VertexAttribute","./BackedBufferObject"],(function(t,e,i,s,n,r){"use strict";let a=function(t){this.modelOriginHi=t.getField(n.VertexAttribute.MODELORIGINHI,i.BufferViewVec3f),this.modelOriginLo=t.getField(n.VertexAttribute.MODELORIGINLO,i.BufferViewVec3f),this.model=t.getField(n.VertexAttribute.MODEL,i.BufferViewMat3f),this.modelNormal=t.getField(n.VertexAttribute.MODELNORMAL,i.BufferViewMat3f),this.color=t.getField(n.VertexAttribute.INSTANCECOLOR,i.BufferViewVec4f),this.featureAttribute=t.getField(n.VertexAttribute.INSTANCEFEATUREATTRIBUTE,i.BufferViewVec4f),this.objectAndLayerIdColor=t.getField(n.VertexAttribute.OBJECTANDLAYERIDCOLOR_INSTANCED,i.BufferViewVec4u8)},h=function(){function t(t,e){this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._rctx=t,this._instanceBufferLayout=e,this._elementSize=e.stride,this._capacity=1}var i=t.prototype;return i.destroy=function(){this._buffer&&this._buffer.destroy()},i.reset=function(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null},i.startUpdateCycle=function(){this._captureFirstIndex=!0},i.beginUpdate=function(){s.assert(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex},i.endUpdate=function(){s.assert(this._updating,"not updating"),this.size<c*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1},i.allocateHead=function(){s.assert(this._updating,"not updating"),this.isFull&&this._grow();const t=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=t,this._captureFirstIndex=!1),this._incrementHead(),s.assert(this._headIndex!==this._tailIndex,"invalid pointers"),t},i.freeTail=function(){s.assert(this._updating,"not updating"),s.assert(this.size>0,"invalid size");const t=this._tailIndex===this._firstIndex;this._incrementTail(),t&&(this._firstIndex=this._tailIndex)},i._grow=function(){const t=Math.max(d,Math.floor(this._capacity*f));this._resize(t)},i._shrink=function(){const t=Math.max(d,Math.floor(this._capacity*u));this._resize(t)},i._resize=function(t){if(s.assert(this._updating,"not updating"),t===this._capacity)return;const e=new r(this._rctx,this._elementSize,t);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const t=this.size,i=this._compactInstances(e);s.assert(i===t,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=i,this._prevHeadIndex=0}this._resized=!0,this._capacity=t,this._buffer=e,this._view=new a(this._instanceBufferLayout.createView(this._buffer.array))},i._compactInstances=function(t){const e=this._headIndex,i=this._tailIndex;return i<e?(this._buffer.copyRange(i,e,t),e-i):i>e?(this._buffer.copyRange(i,this._capacity,t),e>0&&this._buffer.copyRange(0,e,t,this._capacity-i),e+(this._capacity-i)):0},i._incrementHead=function(t=1){this._headIndex=(this._headIndex+t)%this._capacity},i._incrementTail=function(t=1){this._tailIndex=(this._tailIndex+t)%this._capacity},i._transferRange=function(t,e){t<e?this._buffer.transferRange(t,e):t>e&&(e>0&&this._buffer.transferRange(0,e),this._buffer.transferRange(t,this._capacity))},e._createClass(t,[{key:"buffer",get:function(){return this._buffer.buffer}},{key:"view",get:function(){return this._view}},{key:"capacity",get:function(){return this._capacity}},{key:"size",get:function(){const t=this._headIndex,e=this._tailIndex;return t>=e?t-e:t+this._capacity-e}},{key:"isEmpty",get:function(){return this._headIndex===this._tailIndex}},{key:"isFull",get:function(){return this._tailIndex===(this._headIndex+1)%this._capacity}},{key:"headIndex",get:function(){return this._headIndex}},{key:"tailIndex",get:function(){return this._tailIndex}},{key:"firstIndex",get:function(){return this._firstIndex}},{key:"memoryUsage",get:function(){return this._buffer?this._buffer.memoryUsage:{cpu:0,gpu:0}}}]),t}();const d=1024,f=2,c=.3,u=.5;t.RenderInstanceData=h,t.RenderInstanceDataView=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
