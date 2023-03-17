/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(t,e){"use strict";const o=(t,e)=>{const o=Math.floor(e/8),i=e-8*o,n=t[o],s=1<<i;t[o]=n|s},i=(t,e)=>{const o=Math.floor(e/8),i=e-8*o,n=t[o],s=1<<i,l=(n&s)>>i;return t[o]=n&~s|s*(1-l),l};let n=function(){function t(t){this._size=t,this._levels=Math.log2(this._size),this._index=new Uint8Array(Math.ceil(t/8)),this._data=new Array(t),this._lookupTable=new Map}var n=t.prototype;return n.with=function(t,e){return this.has(e)?this.get(e):this.set(e,t(e))},n.has=function(t){return this._lookupTable.has(t)},n.get=function(t){const o=this._lookupTable.get(t),i=e.isSome(o)?this._getData(o):null;return"object"==typeof i?i:null},n.set=function(t,o){const i=this._freeIndex(),n=this._data[i]=e.isSome(o)?o:t;return this._lookupTable.set("object"==typeof n?n.cacheKey:n,i),o},n.clear=function(){for(let t=0;t<this._index.length;t++)this._index[t]=0;for(let t=0;t<this._data.length;t++)this._data[t]=null;this._lookupTable.clear()},n._getData=function(t){const e=(1<<this._levels)-1,i=t;let n=Math.floor((e+i)/2);for(let s=this._levels-1;s>=0;s--)o(this._index,n),n=Math.floor(n/2);return this._data[t]},n._freeIndex=function(){let t=0,e=0;for(let s=0;s<this._levels;s++)e=i(this._index,t),t=2*t+1+e;const o=t-((1<<this._levels)-1),n=this._data[o];if(n){const t="object"==typeof n?n.cacheKey:n;this._lookupTable.delete(t)}return o},t}();t.PLRUCache=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
