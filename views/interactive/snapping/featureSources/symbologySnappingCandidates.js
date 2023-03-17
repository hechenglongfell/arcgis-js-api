/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/lang","../../../../core/LRUCache","../../../../core/promiseUtils","../../../../core/string"],(function(t,e,n,o,r,c,i){"use strict";function s(t=!1,e){return t?new h(e):new a}let a=function(){function t(){}var n=t.prototype;return n.fetch=function(){var t=e._asyncToGenerator((function*(){return[]}));function n(){return t.apply(this,arguments)}return n}(),n.notifySymbologyChange=function(){},t}();const u=1024;let h=function(){function t(t){this._getSymbologyCandidates=t,this._candidatesCache=new r(u),this._cacheVersion=0}var n=t.prototype;return n.fetch=function(){var t=e._asyncToGenerator((function*(t,e){if(0===t.length)return[];const n=[],r=[],i=this._candidatesCache;for(const c of t){const t=f(c),e=i.get(t);if(e)for(const n of e)r.push(o.clone(n));else n.push(c),i.put(t,[],1)}if(0===n.length)return r;const s=this._cacheVersion,{candidates:a,sourceCandidateIndices:u}=yield this._getSymbologyCandidates(n,e);c.throwIfAborted(e);if(s!==this._cacheVersion)return this.fetch(t,e);const h=[],{length:l}=a;for(let c=0;c<l;++c){const t=a[c],e=f(n[u[c]]),r=i.get(e);r.push(t),i.put(e,r,r.length),h.push(o.clone(t))}return r.concat(h)}));function n(e,n){return t.apply(this,arguments)}return n}(),n.notifySymbologyChange=function(){this._candidatesCache.clear(),this._cacheVersion++},t}();function f(t){switch(t.type){case"vertex":{const{objectId:e,target:n}=t,o=`${e}-vertex-${n.x}-${n.y}-${n.z??0}`;return i.numericHash(o).toString()}case"edge":{const{objectId:e,start:n,end:o}=t,r=`${e}-edge-${n.x}-${n.y}-${n.z??0}-to-${o.x}-${o.y}-${o.z??0}`;return i.numericHash(r).toString()}default:return""}}t.getSymbologySnappingCandidatesFetcher=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
