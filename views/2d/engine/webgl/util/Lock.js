/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/promiseUtils"],(function(e,r,t){"use strict";let i=function(){function e(){this._resolver=null}var i=e.prototype;return i.isHeld=function(){return!!this._resolver},i.acquire=function(){var e=r._asyncToGenerator((function*(){if(!this._resolver)return this._resolver=t.createResolver(),Promise.resolve();yield this._resolver.promise,yield this.acquire()}));function i(){return e.apply(this,arguments)}return i}(),i.release=function(){const e=this._resolver;this._resolver=null,e.resolve()},e}();function n(e,r,t){return o.apply(this,arguments)}function o(){return(o=r._asyncToGenerator((function*(e,r,t){try{yield e.acquire(),yield r(t),e.release()}catch(i){throw e.release(),i}}))).apply(this,arguments)}e.default=i,e.withLock=n,Object.defineProperty(e,"__esModule",{value:!0})}));
