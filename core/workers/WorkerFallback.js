/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../nextTick","./RemoteClient","./utils"],(function(e,t,n,r,s){"use strict";function o(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e)for(const n in e)if("default"!==n){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}let i=function(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...n)=>e[t](...n)}))},a=function(){function a(){this._dispatcher=new i,this._workerPostMessage({type:s.MessageType.HANDSHAKE})}var c=a.prototype;return c.terminate=function(){},c.postMessage=function(e){n.nextTick((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))},c.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},c.addEventListener=function(e,t,n){this._dispatcher.addEventListener(e,t,n)},c.removeEventListener=function(e,t,n){this._dispatcher.removeEventListener(e,t,n)},c._workerPostMessage=function(e){n.nextTick((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))},c._workerMessageHandler=function(){var n=t._asyncToGenerator((function*(t){const n=s.receiveMessage(t);if(n&&n.type===s.MessageType.OPEN){const{modulePath:t,jobId:i}=n;let a=yield r.loadWorker(t);a||(a=yield new Promise(((n,r)=>e([/* @vite-ignore */ /* webpackIgnore: true */t],(e=>n(o(e))),r))));const c=r.connect(a);this._workerPostMessage({type:s.MessageType.OPENED,jobId:i,data:c})}}));function i(e){return n.apply(this,arguments)}return i}(),t._createClass(a,[{key:"onmessage",get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}},{key:"onmessageerror",get:function(){return this._onmessageerrorHandler},set:function(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}},{key:"onerror",get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}}]),a}();return a}));
