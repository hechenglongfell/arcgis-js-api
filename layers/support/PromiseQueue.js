/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,s,r,t,o,n,c,i,a,u){"use strict";e.PromiseQueue=function(e){function r(){var s;return(s=e.apply(this,arguments)||this)._tasks=new Array,s.running=!1,s}s._inheritsLoose(r,e);var t=r.prototype;return t.destroy=function(){this.cancelAll()},t.runTask=function(e){for(;!e.done&&this._process(e);)e.madeProgress()},t.push=function(e,s,r){return this.running=!0,new Promise(((t,o)=>this._tasks.push(new l(t,o,e,s,r))))},t.unshift=function(e,s,r){return this.running=!0,new Promise(((t,o)=>this._tasks.unshift(new l(t,o,e,s,r))))},t._process=function(e){if(0===this._tasks.length)return!1;const s=this._tasks.shift();try{const r=o.isAborted(s.signal);if(r&&!s.abortCallback)s.reject(o.createAbortError());else{const t=r?s.abortCallback(o.createAbortError()):s.callback(e);o.isPromise(t)?t.then(s.resolve,s.reject):s.resolve(t)}}catch(r){s.reject(r)}return this.running=this._tasks.length>0,!0},t.cancelAll=function(){const e=o.createAbortError();for(const s of this._tasks)if(s.abortCallback){const r=s.abortCallback(e);s.resolve(r)}else s.reject(e);this._tasks.length=0,this.running=!1},s._createClass(r,[{key:"length",get:function(){return this._tasks.length}}]),r}(t),r.__decorate([n.property()],e.PromiseQueue.prototype,"running",void 0),e.PromiseQueue=r.__decorate([u.subclass("esri.layers.support.PromiseQueue")],e.PromiseQueue);let l=function(e,s,r,t,o){this.resolve=e,this.reject=s,this.callback=r,this.signal=t,this.abortCallback=o};Object.defineProperty(e,"__esModule",{value:!0})}));
