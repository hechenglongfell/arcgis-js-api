/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,t,r,a,n,o,s){"use strict";const i=a.getLogger("esri.views.2d.layers.features.sources.FeatureSource");let u=function(e){function a(t){return e.call(this,t)||this}t._inheritsLoose(a,e);var s=a.prototype;return s._fetchDataTile=function(){var e=t._asyncToGenerator((function*(e){const t=6,a=20,n=this._subscriptions.get(e.key.id);let s=!1,u=0,d=0;const c=(t,r)=>{d--,o.throwIfAborted(n);const a=e.id,i=t.reader,u=t.query;if(!i.exceededTransferLimit){if(s=!0,0!==r&&!i.hasFeatures){const e={id:a,addOrUpdate:i,end:0===d,type:"append"};return n.add({message:e,query:u}),void this._onMessage(e)}const e={id:a,addOrUpdate:i,end:0===d,type:"append"};return n.add({message:e,query:u}),void this._onMessage(e)}const c={id:a,addOrUpdate:i,end:s&&0===d,type:"append"};n.add({message:c,query:u}),this._onMessage(c)};let h=0,l=0;for(;!s&&l++<a;){let a;for(let t=0;t<h+1;t++){const t=u++;d++,a=this._fetchDataTilePage(e,t,n).then((e=>e&&c(e,t))).catch((t=>{s=!0,o.isAbortError(t)||(i.error(new r("mapview-query-error","Encountered error when fetching tile",{tile:e,error:t})),this._onMessage({id:e.id,addOrUpdate:null,end:s,type:"append"}))}))}yield a,o.throwIfAborted(n),h=Math.min(h+2,t)}}));function a(t){return e.apply(this,arguments)}return a}(),s._fetchDataTilePage=function(){var e=t._asyncToGenerator((function*(e,t,r){const a=this._queryInfo,s={start:this.pageSize*t,num:this.pageSize,returnExceededLimitFeatures:!0,quantizationParameters:e.getQuantizationParameters()};n.isSome(this.maxRecordCountFactor)&&(s.maxRecordCountFactor=this.maxRecordCountFactor);const i=this._createQuery(e,s);try{const n=r.signal,s=yield this._queue.push({tile:e,query:i,signal:n,depth:t});return o.throwIfAborted(r),s?a!==this._queryInfo?this._fetchDataTilePage(e,t,r):{reader:s,query:i}:null}catch(u){return o.throwIfNotAbortError(u),null}}));function r(t,r,a){return e.apply(this,arguments)}return r}(),a}(s.BaseFeatureSource);e.PagedFeatureSource=u,Object.defineProperty(e,"__esModule",{value:!0})}));
