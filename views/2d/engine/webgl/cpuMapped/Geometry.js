/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../FeatureDisplayList","./Buffer","./DisplayRecordReader","../../../../webgl/VertexArrayObject"],(function(e,t,i,r,s,n){"use strict";let o=function(){function e(e,t){this._indicesInvalid=!1,this.geometryType=e}var o=e.prototype;return o.destroy=function(){this._vao&&(this._vao.dispose(),this._vao=null),this._indexBuffer&&this._indexBuffer.destroy(),this._vertexBuffer&&this._vertexBuffer.destroy()},o.insert=function(e,i,n){if(!e.records.byteLength)return;const o=e.stride;if(this._vertexBuffer&&this._indexBuffer){const r=e.indices.byteLength/4,n=e.vertices.byteLength/o;this._indexBuffer.ensure(r),this._vertexBuffer.ensure(n);const{vertices:f,indices:d}=e,u=s.DisplayRecordReader.from(e.records),h=this._vertexBuffer.insert(f,0,f.byteLength/o,0),c=this._indexBuffer.insert(d,0,d.byteLength/4,h);if(u.forEach((e=>{e.indexFrom+=c,e.vertexFrom+=h})),t.unwrapOrThrow(this._records,"Expected records to be defined").link(u),i)this._indicesInvalid=!0;else if(this._displayList){const e=u.getCursor();for(;e.next();)this._displayList.addRecord(e)}}else{const t=e.indices.byteLength/4,n=e.vertices.byteLength/o,f=o/Uint32Array.BYTES_PER_ELEMENT;this._records=s.DisplayRecordReader.from(e.records),this._indexBuffer=new r.Buffer("index",t,1),this._vertexBuffer=new r.Buffer("vertex",n,f),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/o,0),i&&(this._indicesInvalid=!0)}},o.remove=function(e){if(!t.isNone(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const i=e.indexFrom,r=e.vertexFrom;let s=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(i,s),this._vertexBuffer.free(r,n,!0),this._records.delete(t)}},o.draw=function(e,i,r,s,o){if(!this._vertexBuffer||!this._indexBuffer||t.isNone(this._records))return;if((t.isNone(this._vertexBuffer.gpu)||t.isNone(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){const t=this._vertexBuffer.gpu,s=this._indexBuffer.gpu;if(!s||!t)return;this._vao=new n(e,r,i,{geometry:t},s)}const f=this._vao,d=s*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(f),e.drawElements(4,o,5125,d)},o.forEachCommand=function(e){if(!t.isNone(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=i.FeatureDisplayList.from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(e)}},o._sortIndices=function(e){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let t=0;const i=e.getCursor(),r=this._indexBuffer.getBuffer(),s=[],n=[],o=[];for(;i.next();)n.push(i.index),o.push(i.sortKey),s.push(i.id);n.sort(((e,t)=>{const i=o[t],r=o[e];return r===i?s[t]-s[e]:i-r}));const f=e.getCursor();for(const d of n){if(!f.seekIndex(d))throw new Error("Expected to find index");const{indexFrom:e,indexCount:i}=f;f.indexFrom=t;for(let s=0;s<i;s++)this._indexBuffer.set(t++,r.array[e+s])}this._cursorIndexOrder=n,this._displayList=null},e}();e.Geometry=o,Object.defineProperty(e,"__esModule",{value:!0})}));
