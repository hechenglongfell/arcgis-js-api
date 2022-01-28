/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],(function(e,t,n,r,o,i,l,s,u){"use strict";function c(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const n in e)if("default"!==n){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}let a=o("esri-workers-debug")?1:o("host-browser")?navigator.hardwareConcurrency-1:0;a||(a=o("safari")&&o("mac")||o("trident")?7:2);let f=0;const p=[];function d(){_()}function h(e,t){return y(e,{client:t})}function y(e,t){return m.apply(this,arguments)}function m(){return(m=n._asyncToGenerator((function*(e,t){const n=new l;return yield n.open(e,t),n}))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=n._asyncToGenerator((function*(t,n={}){if("string"!=typeof t)throw new r("workers:undefined-module","modulePath is missing");let l=n.strategy||"distributed";if(o("host-webworker")&&!o("esri-workers")&&(l="local"),"local"===l){let r=yield s.loadWorker(t);r||(r=yield new Promise(((n,r)=>e([
/* @vite-ignore */
/* webpackIgnore: true */
t],(e=>n(c(e))),r)))),i.throwIfAborted(n.signal);const o=n.client||r;return y([s.connect(r)],{...n,client:o})}if(yield _(),i.throwIfAborted(n.signal),"dedicated"===l){const e=f++%a;return y([yield p[e].open(t,n)],n)}if(n.maxNumWorkers&&n.maxNumWorkers>0){const e=Math.min(n.maxNumWorkers,a);if(e<a){const r=new Array(e);for(let o=0;o<e;++o){const e=f++%a;r[o]=p[e].open(t,n)}return y(r,n)}}return y(p.map((e=>e.open(t,n))),n)}))).apply(this,arguments)}function g(){P&&(k.abort(),P=null);for(let e=0;e<p.length;e++)p[e]&&p[e].terminate();p.length=0}let k,P=null;function _(){return O.apply(this,arguments)}function O(){return(O=n._asyncToGenerator((function*(){if(P)return P;k=new AbortController;const e=[];for(let t=0;t<a;t++){const n=u.create(t).then((e=>(p[t]=e,e)));e.push(n)}return P=Promise.all(e),P}))).apply(this,arguments)}t.Connection=l,t.RemoteClient=s,t.initialize=d,t.open=w,t.openWithPorts=h,t.terminate=g,Object.defineProperty(t,"__esModule",{value:!0})}));
