/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","./enums","./MemoryRequirements","./TileBufferData","./TileDisplayData","./Utils","./WGLDisplayRecord","./cpuMapped/DisplayRecordReader","./mesh/VertexBuffer","./mesh/VertexVector","./util/Writer"],(function(e,t,r,n,i,s,o,a,f,l,u,c){"use strict";const d=new n,D=new n,y=1.5,p=5;function m(e,t){const r={};for(const n in e){const i={data:o.allocateTypedArrayBuffer(t,e[n]),stride:e[n]};r[n]=i}return r}function h(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}function x(e){const t=[[],[],[],[],[]],r=e;for(const n of r)for(const e of n.displayRecords)t[e.geometryType].push(e);return t}let B=function(){function e(){this.tileDisplayData=null,this.tileBufferData=null}var n=e.prototype;return n.reshuffle=function(){if(d.reset(),!this.tileDisplayData)return;const t=x(this.tileDisplayData.displayObjects);for(const e of t)for(const t of e)t&&d.needMore(t.geometryType,t.meshData?t.meshData.vertexCount:t.vertexCount,t.meshData?t.meshData.indexData.length:t.indexCount);const r=t.length,n=new i;for(let i=0;i<r;++i){n.geometries[i].indexBuffer=new Uint32Array(Math.round(y*d.indicesFor(i)));const t=[],r=this.tileBufferData?.geometries[i].vertexBuffer;if(!r)continue;for(const e in r)t.push(r[e].stride);const s=e._computeVertexAlignment(t),a=Math.round(y*d.verticesFor(i)),f=e._align(a,s);for(const e in r){const t=r[e].stride;n.geometries[i].vertexBuffer[e]={stride:t,data:o.allocateTypedArrayBuffer(f,t)}}}D.reset(),this.tileDisplayData.displayList?.clear();for(let e=0;e<r;++e){const r=t[e];for(const t of r){if(t.meshData)t.writeMeshDataToBuffers(D.verticesFor(e),n.geometries[e].vertexBuffer,D.indicesFor(e),n.geometries[e].indexBuffer),t.meshData=null;else{const r=this.tileBufferData?.geometries[e];if(r){const i=r.vertexBuffer,s=r.indexBuffer,a=n.geometries[e].vertexBuffer,f=n.geometries[e].indexBuffer,l=D.verticesFor(e),u=D.indicesFor(e);o.copyMeshData(l,u,a,f,t,i,s),t.vertexFrom=l,t.indexFrom=u}}D.needMore(e,t.vertexCount,t.indexCount)}}const{displayList:s,displayObjects:a}=this.tileDisplayData;if(s)for(const e of a)s.addToList(e.displayRecords);this.tileBufferData=n},n.getStrides=function(){const e=[],t=this.tileBufferData?.geometries;if(!t)return e;for(let r=0;r<t.length;++r){const n=t[r];e[r]={};for(const t in n.vertexBuffer)e[r][t]=n.vertexBuffer[t].stride}return e},n.clone=function(){const t=new e;return t.tileBufferData=this.tileBufferData?.clone()??null,t.tileDisplayData=this.tileDisplayData?.clone()??null,t},n._guessSize=function(){const e=this.tileDisplayData?.displayObjects??[],t=Math.min(e.length,4),r=12,n=40;let i=0;for(let s=0;s<t;s++)i=Math.max(i,e[s].displayRecords.length);return 2*(e.length*r+e.length*i*n)},n.serialize=function(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new c(Int32Array,this._guessSize())).buffer();return t.push(r),{result:{displayData:r,bufferData:e},transferList:t}},e.fromVertexData=function(n,i){const s={},c=new Map;for(const e of i)c.set(e.id,e);return o.forEachGeometryType((e=>{const i=n.data[e];if(t.isSome(i)){const t=f.DisplayRecordReader.from(i.records).getCursor();for(;t.next();){const r=t.id,n=t.materialKey,i=t.indexFrom,s=t.indexCount,o=t.vertexFrom,f=t.vertexCount,l=c.get(r),u=new a(r,e,n);u.indexFrom=i,u.indexCount=s,u.vertexFrom=o,u.vertexCount=f,l.displayRecords.push(u)}s[e]=l.VertexBuffers.fromVertexData(i,e)}else s[e]=new u.VertexVectors(e,0,r.WGLSymbologyType.DEFAULT).intoBuffers()})),e.fromMeshData({displayObjects:i,vertexBuffersMap:s})},e.fromMeshData=function(t){const r=new e,n=new s,o=new i;n.displayObjects=t.displayObjects;for(const e in t.vertexBuffersMap){const r=t.vertexBuffersMap[e];o.geometries[e].indexBuffer=r.indexBuffer,o.geometries[e].vertexBuffer=r.namedBuffers}return r.tileDisplayData=n,r.tileBufferData=o,r},e.bind=function(t,r){const n=new e;return n.tileDisplayData=t,n.tileBufferData=r,n},e.create=function(t,r){const n=new e;n.tileDisplayData=new s,n.tileDisplayData.displayObjects=t;const o=[0,0,0,0,0],f=[0,0,0,0,0],l=[[],[],[],[],[]];for(const e of t)for(const t of e.displayRecords)l[t.geometryType].push(t),o[t.geometryType]+=t.meshData.vertexCount,f[t.geometryType]+=t.meshData.indexData.length;const u=new i,c=h(r);for(let e=0;e<p;e++){const t=new Uint32Array(f[e]),r=m(c[e],o[e]);a.writeAllMeshDataToBuffers(l[e],r,t),u.geometries[e]={indexBuffer:t,vertexBuffer:r}}return n.tileBufferData=u,n},e._align=function(e,t){const r=e%t;return 0===r?e:e+(t-r)},e._computeVertexAlignment=function(e){let t=!1,r=!1;for(const n of e)n%4==2?t=!0:n%4!=0&&(r=!0);return r?4:t?2:1},e}();e.TileData=B,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
