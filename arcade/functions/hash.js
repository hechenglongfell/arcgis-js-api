/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=2654435761,e=2246822519,i=3266489917,s=668265263,o=374761393;function r(t){const n=[];for(let e=0,i=t.length;e<i;e++){let i=t.charCodeAt(e);i<128?n.push(i):i<2048?n.push(192|i>>6,128|63&i):i<55296||i>=57344?n.push(224|i>>12,128|i>>6&63,128|63&i):(e++,i=65536+((1023&i)<<10|1023&t.charCodeAt(e)),n.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return new Uint8Array(n)}let u=function(){function t(t){this._seed=t,this._totallen=0,this._bufs=[],this.init()}var u=t.prototype;return u.init=function(){return this._bufs=[],this._totallen=0,this},u.updateFloatArray=function(t){const n=[];for(const e of t)isNaN(e)?n.push("NaN"):e===1/0?n.push("Infinity"):e===-1/0?n.push("-Infinity"):0===e?n.push("0"):n.push(e.toString(16));this.update(r(n.join("")))},u.updateIntArray=function(t){const n=Int32Array.from(t);this.update(new Uint8Array(n.buffer))},u.updateUint8Array=function(t){this.update(Uint8Array.from(t))},u.updateWithString=function(t){return this.update(r(t))},u.update=function(t){return this._bufs.push(t),this._totallen+=t.length,this},u.digest=function(){const t=new Uint8Array(this._totallen);let n=0;for(const e of this._bufs)t.set(e,n),n+=e.length;return this.init(),this._xxHash32(t,this._seed)},u._xxHash32=function(t,r=0){const u=t;let h=r+o&4294967295,f=0;if(u.length>=16){const i=[r+n+e&4294967295,r+e&4294967295,r+0&4294967295,r-n&4294967295],s=t,o=s.length-16;let u=0;for(f=0;(4294967280&f)<=o;f+=4){const t=f,o=s[t+0]+(s[t+1]<<8),r=s[t+2]+(s[t+3]<<8),h=o*e+(r*e<<16);let a=i[u]+h&4294967295;a=a<<13|a>>>19;const c=65535&a,l=a>>>16;i[u]=c*n+(l*n<<16)&4294967295,u=u+1&3}h=(i[0]<<1|i[0]>>>31)+(i[1]<<7|i[1]>>>25)+(i[2]<<12|i[2]>>>20)+(i[3]<<18|i[3]>>>14)&4294967295}h=h+t.length&4294967295;const a=t.length-4;for(;f<=a;f+=4){const t=f,n=u[t+0]+(u[t+1]<<8),e=u[t+2]+(u[t+3]<<8);h=h+(n*i+(e*i<<16))&4294967295,h=h<<17|h>>>15,h=(65535&h)*s+((h>>>16)*s<<16)&4294967295}for(;f<u.length;++f){h+=u[f]*o,h=h<<11|h>>>21,h=(65535&h)*n+((h>>>16)*n<<16)&4294967295}return h^=h>>>15,h=((65535&h)*e&4294967295)+((h>>>16)*e<<16),h^=h>>>13,h=((65535&h)*i&4294967295)+((h>>>16)*i<<16),h^=h>>>16,h<0?h+4294967296:h},t}();t.XXH=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
