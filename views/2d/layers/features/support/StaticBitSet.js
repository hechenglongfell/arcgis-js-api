/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let n=function(){function t(t,n){this._mask=0,this._buf=t,this._mask=n}t.fromBuffer=function(n,e){return new t(n,e)},t.create=function(n,e=4294967295){return new t(new Uint32Array(Math.ceil(n/32)),e)};var n=t.prototype;return n._getIndex=function(t){return Math.floor(t/32)},n.has=function(t){const n=this._mask&t;return!!(this._buf[this._getIndex(n)]&1<<n%32)},n.hasRange=function(t,n){let e=t,i=n;for(;e%32&&e!==i;){if(this.has(e))return!0;e++}for(;i%32&&e!==i;){if(this.has(e))return!0;i--}if(e===i)return!1;for(let f=e/32;f!==i/32;f++){if(this._buf[f])return!0}return!1},n.set=function(t){const n=this._mask&t,e=this._getIndex(n),i=1<<n%32;this._buf[e]|=i},n.setRange=function(t,n){let e=t,i=n;for(;e%32&&e!==i;)this.set(e++);for(;i%32&&e!==i;)this.set(i--);if(e!==i)for(let f=e/32;f!==i/32;f++)this._buf[f]=4294967295},n.unset=function(t){const n=this._mask&t,e=this._getIndex(n),i=1<<n%32;this._buf[e]&=4294967295^i},n.resize=function(t){const n=this._buf,e=new Uint32Array(Math.ceil(t/32));e.set(n),this._buf=e},n.or=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]|=t._buf[n];return this},n.and=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]&=t._buf[n];return this},n.xor=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]^=t._buf[n];return this},n.ior=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]|=~t._buf[n];return this},n.iand=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]&=~t._buf[n];return this},n.ixor=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]^=~t._buf[n];return this},n.any=function(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1},n.copy=function(t){for(let n=0;n<this._buf.length;n++)this._buf[n]=t._buf[n];return this},n.clone=function(){return new t(this._buf.slice(),this._mask)},n.clear=function(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0},n.forEachSet=function(t){for(let n=0;n<this._buf.length;n++){let e=this._buf[n],i=32*n;if(e)for(;e;){1&e&&t(i),e>>>=1,i++}}},n.countSet=function(){let t=0;return this.forEachSet((n=>{t++})),t},t}();t.StaticBitSet=n,Object.defineProperty(t,"__esModule",{value:!0})}));
