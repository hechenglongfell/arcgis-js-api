/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define((function(){"use strict";function t(t){return t&&t.release&&"function"==typeof t.release}function i(t){return t&&t.acquire&&"function"==typeof t.acquire}let e=function(){function e(t,i,e,o=1,n=0){if(this.ctor=t,this.acquireFunction=i,this.releaseFunction=e,this.allocationSize=o,this._pool=new Array(n),this._initialSize=n,this.ctor)for(let s=0;s<n;s++)this._pool[s]=new this.ctor;this.allocationSize=Math.max(o,1)}var o=e.prototype;return o.destroy=function(){this.prune(0)},o.acquire=function(...t){let o;if(e.test.disabled)o=new this.ctor;else{if(0===this._pool.length){const t=this.allocationSize;for(let i=0;i<t;i++)this._pool[i]=new this.ctor}o=this._pool.pop()}return this.acquireFunction?this.acquireFunction(o,...t):i(o)&&o.acquire(...t),o},o.release=function(i){i&&!e.test.disabled&&(this.releaseFunction?this.releaseFunction(i):t(i)&&i.release(),this._pool.push(i))},o.prune=function(t=this._initialSize){if(!(t>=this._pool.length)){for(let i=t;i<this._pool.length;++i){const t=this._pool[i];this._dispose(t)}this._pool.length=t}},o._dispose=function(t){t.dispose&&"function"==typeof t.dispose&&t.dispose()},e}();return e.test={disabled:!1},e}));
