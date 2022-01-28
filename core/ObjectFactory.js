/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define((function(){"use strict";function t(t){return t&&t.release&&"function"==typeof t.release}function i(t){return t&&t.acquire&&"function"==typeof t.acquire}return function(){function e(t,i,e=1,n=0){this.acquireFunction=t,this.releaseFunction=i,this.growthSize=e,this._pool=new Array(n),this._set=new Set,this._initialSize=n;for(let s=0;s<n;s++)this._pool[s]=this.acquireFunction();this.growthSize=Math.max(e,1)}var n=e.prototype;return n.acquire=function(){if(0===this._pool.length){const t=this.growthSize;for(let i=0;i<t;i++)this._pool[i]=this.acquireFunction()}const t=this._pool.shift();return i(t)&&t.acquire(),this._set.delete(t),t},n.release=function(i){i&&!this._set.has(i)&&(this.releaseFunction?this.releaseFunction(i):t(i)&&i.release(),this._pool.push(i),this._set.add(i))},n.prune=function(){if(this._pool.length<=this._initialSize)return;let t;for(;this._initialSize>this._pool.length;)t=this._pool.shift(),this._set.delete(t),t.dispose&&"function"==typeof t.dispose&&t.dispose()},e}()}));
