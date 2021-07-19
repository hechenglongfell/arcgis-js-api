/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../assets","../../config","../../intl","../../kernel","../has","../Logger","../urlUtils","./loaderConfig","./utils","./WorkerFallback","../../intl/locale","../../support/revision"],(function(e,r,t,o,s,n,i,a,l,c,u,d,f,g){"use strict";const k=a.getLogger("esri.core.workers"),{HANDSHAKE:p}=u.MessageType,h='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let m,w;const b="Failed to create Worker. Fallback to execute module in main thread";function v(){return y.apply(this,arguments)}function y(){return(y=r._asyncToGenerator((function*(){if(!i("esri-workers"))return P(new d);if(!m&&!w)try{const e=h.replace('"{CONFIGURATION}"',`'${A()}'`);m=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(r){w=r||{}}let e;if(m)try{e=new Worker(m,{name:"esri-worker-"+C++})}catch(r){k.warn(b,w),e=new d}else k.warn(b,w),e=new d;return P(e)}))).apply(this,arguments)}function P(e){return E.apply(this,arguments)}function E(){return(E=r._asyncToGenerator((function*(e){return new Promise((r=>{function t(s){const n=u.receiveMessage(s);n&&n.type===p&&(e.removeEventListener("message",t),e.removeEventListener("error",o),r(e))}function o(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",o),k.warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new d).addEventListener("message",t),e.addEventListener("error",o)}e.addEventListener("message",t),e.addEventListener("error",o)}))}))).apply(this,arguments)}function A(){let e;if(null!=o.default){const r={...o};delete r.default,e=JSON.parse(JSON.stringify(r))}else e=JSON.parse(JSON.stringify(o));e.assetsPath=l.makeAbsolute(e.assetsPath),e.request.interceptors=[],e.log.interceptors=[],e.locale=f.getLocale(),e.has={"csp-restrictions":i("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":i("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":i("esri-2d-query-centroid-enabled"),"featurelayer-pbf":i("featurelayer-pbf"),"esri-atomics":i("esri-atomics"),"esri-shared-array-buffer":i("esri-shared-array-buffer"),"esri-tiles-debug":i("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":i("esri-workers-arraybuffer-transfer"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=l.makeAbsolute(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=l.makeAbsolute(e.workers.workerPath):e.workers.workerPath=l.makeAbsolute(t.getAssetUrl("esri/core/workers/RemoteClient.js"));const r=o.workers.loaderConfig,s=c.default({baseUrl:null==r?void 0:r.baseUrl,locale:f.getLocale(),has:{"csp-restrictions":i("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==r?void 0:r.has},map:{...null==r?void 0:r.map},paths:{...null==r?void 0:r.paths},packages:(null==r?void 0:r.packages)||[]}),a={version:n.version,buildDate:g.buildDate,revision:g.commitHash};return JSON.stringify({esriConfig:e,loaderConfig:s,kernelInfo:a})}let C=0;e.createWorker=v,Object.defineProperty(e,"__esModule",{value:!0})}));
