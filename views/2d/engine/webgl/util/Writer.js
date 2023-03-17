/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";const e=1.25;return function(){function r(t,e){this._pos=0;const r=e?this._roundToNearest(e,t.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(r),this._buffer=new t(this._array),this._ctor=t,this._i16View=new Int16Array(this._array)}var i=r.prototype;return i._roundToNearest=function(t,e){const r=Math.round(t);return r+(e-r%e)},i._ensureSize=function(t){if(this._pos+t>=this._buffer.length){const r=this._roundToNearest((this._array.byteLength+t*this._buffer.BYTES_PER_ELEMENT)*e,this._buffer.BYTES_PER_ELEMENT),i=new ArrayBuffer(r),s=new this._ctor(i);s.set(this._buffer,0),this._array=i,this._buffer=s,this._i16View=new Int16Array(this._array)}},i.ensureSize=function(t){this._ensureSize(t)},i.writeF32=function(t){this._ensureSize(1);const e=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=t,this._pos++,e},i.push=function(t){this._ensureSize(1);const e=this._pos;return this._buffer[this._pos++]=t,e},i.writeFixed=function(t){this._buffer[this._pos++]=t},i.setValue=function(t,e){this._buffer[t]=e},i.i1616Add=function(t,e,r){this._i16View[2*t]+=e,this._i16View[2*t+1]+=r},i.getValue=function(t){return this._buffer[t]},i.incr=function(t){if(this._buffer.length<t)throw new Error("Increment index overflows the target buffer");this._buffer[t]++},i.decr=function(t){this._buffer[t]--},i.writeRegion=function(t){this._ensureSize(t.length);const e=this._pos;return this._buffer.set(t,this._pos),this._pos+=t.length,e},i.writeManyFrom=function(t,e,r){this._ensureSize(r-e);for(let i=e;i!==r;i++)this.writeFixed(t._buffer[i])},i.buffer=function(){const t=this._array.slice(0,4*this._pos);return this.destroy(),t},i.toArray=function(){const t=this._array,e=[];for(let r=0;r<t.byteLength/4;r++)e.push(t[r]);return e},i.seek=function(t){this._pos=t},i.destroy=function(){this._array=null,this._buffer=null},t._createClass(r,[{key:"length",get:function(){return this._pos}}]),r}()}));
