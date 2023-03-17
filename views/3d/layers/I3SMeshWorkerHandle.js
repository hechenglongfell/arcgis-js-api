/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Logger","../../../core/maybe","../../../core/PooledArray","../../../core/workers/WorkerHandle","../../../geometry/projection","../../../libs/i3s/enums"],(function(e,s,o,t,i,n,r,p){"use strict";let h=function(e){function o(s){return e.call(this,"SceneLayerWorker","process",{process:e=>[e.geometryBuffer]},s,{hasInitialize:!0})||this}s._inheritsLoose(o,e);var t=o.prototype;return t.setModifications=function(e,s,o,t){const i={context:e,modifications:a(s,o,t),isGeodetic:t.isGeographic};this.broadcast(i,"setModifications")},t.setLegacySchema=function(e,s){const o=JSON.stringify(s);this.broadcast({context:e,jsonSchema:o},"setLegacySchema")},t.destroyContext=function(e){return this.broadcast(e,"destroyContext")},o}(n.WorkerHandle);const u=new i({deallocator:null}),c=[0,0,0];function a(e,s,i){u.clear();let n=1/0,h=1/0,a=-1/0,l=-1/0,f=!1;for(const y of s){const e="clip"===y.type?p.ModificationType.Inside:"mask"===y.type?p.ModificationType.Outside:p.ModificationType.Replace,s=t.unwrapOrThrow(y.geometry,"modification.geometry");let d=e=>e;if(s.spatialReference){if(!r.canProjectWithoutEngine(s.spatialReference,i)){o.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}d=e=>(r.projectVectorToVector(e,s.spatialReference,c,i),c)}else s.hasZ||(c[2]=0,d=e=>(c[0]=e[0],c[1]=e[1],c));f=f||e===p.ModificationType.Outside,u.push(e),u.push(s.rings.length);for(const o of s.rings){u.push(o.length);for(const e of o){const s=d(e);u.push(s[0]),u.push(s[1]),u.push(s[2]),n=Math.min(n,s[0]),h=Math.min(h,s[1]),a=Math.max(a,s[0]),l=Math.max(l,s[1])}}}if(t.isSome(e))if(f){const s=1e-4;u.push(p.ModificationType.Inside),u.push(2),u.push(4),u.push(n-s),u.push(h-s),u.push(0),u.push(a+s),u.push(h-s),u.push(0),u.push(a+s),u.push(l+s),u.push(0),u.push(n-s),u.push(l+s),u.push(0),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0)}else u.push(p.ModificationType.Outside),u.push(1),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0);u.push(p.ModificationType.Finished);const d=new Float64Array(u.length);for(let o=0;o<u.length;++o)d[o]=u.getItemAt(o);return d}e.I3SMeshWorkerHandle=h,e.toWasmModification=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
