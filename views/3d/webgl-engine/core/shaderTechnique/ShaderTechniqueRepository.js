/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe"],(function(e,t,n){"use strict";let r=function(e){this.technique=e,this.refCount=0,this.refZeroFrame=0},o=function(){function e(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}var o=e.prototype;return o.dispose=function(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()},o.acquire=function(e,t){const n=t.key;let o=this._perConstructorInstances.get(e);o||(o=new Map,this._perConstructorInstances.set(e,o));let s=o.get(n);if(void 0===s){const i=new e(this._context,t,(()=>this.release(i)));s=new r(i),o.set(n,s)}return++s.refCount,s.technique},o.releaseAndAcquire=function(e,t,r){if(n.isSome(r)){if(t.key===r.key)return r;r.release()}return this.acquire(e,t)},o.release=function(e){if(n.isNone(e))return;const t=this._perConstructorInstances.get(e.constructor).get(e.key);--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter)},o.frameUpdate=function(){this._frameCounter++,this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((t,n)=>{0===t.refCount&&t.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(t.technique.dispose(),e.delete(n))})),0===e.size&&this._perConstructorInstances.delete(t)}))},o.hotReload=function(){var e=t._asyncToGenerator((function*(){var e=this;const n=new Array;this._perConstructorInstances.forEach(((r,o)=>{const s=function(){var n=t._asyncToGenerator((function*(t,n){const r=n.shader;r&&(yield r.reload(),t.forEach((t=>{t.technique.reload(e._context)})))}));return function(e,t){return n.apply(this,arguments)}}();n.push(s(r,o))})),yield Promise.all(n)}));function n(){return e.apply(this,arguments)}return n}(),t._createClass(e,[{key:"viewingMode",get:function(){return this._context.viewingMode}},{key:"constructionContext",get:function(){return this._context}}]),e}();e.ShaderTechniqueRepository=o,Object.defineProperty(e,"__esModule",{value:!0})}));
