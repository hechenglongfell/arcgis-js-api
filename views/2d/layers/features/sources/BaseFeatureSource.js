/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../request","../../../../../core/Error","../../../../../core/has","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../rest/support/Query","../controllers/support/sourceAdapters","./DataTileSource","../../../../support/QueueProcessor"],(function(e,t,r,n,s,i,o,u,a,c,l,p){"use strict";const y=i.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource"),d=4;let f=function(e){function i(r){var n,i,a;return(n=e.call(this,r)||this).type="feature",n.mode="on-demand",n._adapter=c.createSourceAdapter(r.serviceInfo),n._queue=new p.QueueProcessor({concurrency:8,process:(i=t._asyncToGenerator((function*(e){if(u.throwIfAborted(e),o.isSome(e.tile)){const t=e.tile.key.id,{signal:r}=e,i=s("esri-tiles-debug")?{tile:t.replace(/\//g,"."),depth:e.depth}:void 0;return n._adapter.executeQuery(e.query,{query:i,signal:r})}return n._adapter.executeQuery(e.query,e)})),function(e){return i.apply(this,arguments)})}),n._patchQueue=new p.QueueProcessor({concurrency:8,process:(a=t._asyncToGenerator((function*(e){if(u.throwIfAborted(e),o.isSome(e.tile)){const t=e.tile.key.id,{signal:r}=e,i=s("esri-tiles-debug")?{tile:t.replace(/\//g,"."),depth:e.depth}:void 0;return n._adapter.executeQuery(e.query,{query:i,signal:r})}return n._adapter.executeQuery(e.query,e)})),function(e){return a.apply(this,arguments)})}),n}t._inheritsLoose(i,e);var l=i.prototype;return l.destroy=function(){e.prototype.destroy.call(this),this._adapter.destroy(),this._queue.destroy(),this._patchQueue.destroy()},l.enableEvent=function(e,t){},l.subscribe=function(t){e.prototype.subscribe.call(this,t);const r=this._subscriptions.get(t.id);this._fetchDataTile(t).catch((e=>{u.isAbortError(e)||y.error(new n("mapview-query-error","Encountered error when fetching tile",{tile:t,error:e}))})).then((()=>r.end()))},l.unsubscribe=function(t){e.prototype.unsubscribe.call(this,t)},l.readers=function(e){return this._subscriptions.get(e).readers()},l.query=function(){var e=t._asyncToGenerator((function*(e){return this._adapter.executeQuery(e)}));function r(t){return e.apply(this,arguments)}return r}(),l.queryLastEditDate=function(){var e=t._asyncToGenerator((function*(){const e=this._serviceInfo.source,t={...e.query,f:"json"};return(yield r(e.path,{query:t,responseType:"json"})).data.editingInfo.lastEditDate}));function n(){return e.apply(this,arguments)}return n}(),l.createTileQuery=function(e){const t=this.createQuery();return t.quantizationParameters=e.getQuantizationParameters(),t.resultType="tile",t.geometry=e.extent,"esriGeometryPolyline"===this._serviceInfo.geometryType&&(t.maxAllowableOffset=e.resolution),this._serviceInfo.capabilities.query.supportsQuantization||(t.quantizationParameters=null,t.maxAllowableOffset=e.resolution),t},l._createQuery=function(e,t){const r=this._queryInfo.historicMoment?new Date(this._queryInfo.historicMoment):null,n=new a({...this._queryInfo,historicMoment:r,...t});return this._serviceInfo.capabilities.query.supportsQuantization||(t.quantizationParameters=null,n.maxAllowableOffset=e.resolution),t.quantizationParameters&&"esriGeometryPolyline"===this._serviceInfo.geometryType&&(n.maxAllowableOffset=e.resolution),n.resultType="tile",n.geometry=e.extent,n},l._executePatchQuery=function(){var e=t._asyncToGenerator((function*(e,t,r,n){const s=t.clone();s.outFields=[this._serviceInfo.objectIdField,...r],s.returnCentroid=!1,s.returnGeometry=!1;const i=o.isSome(s.start)?s.start/8e3:0,u=n.signal;return this._patchQueue.push({tile:e,query:s,signal:u,depth:i})}));function r(t,r,n,s){return e.apply(this,arguments)}return r}(),l._resend=function(){var e=t._asyncToGenerator((function*(e,t){const{query:r,message:n}=e,s=o.isSome(r.outFields)?r.outFields:[],i=this._queryInfo.outFields,a=i.filter((e=>-1===s.indexOf(e)));if(o.isNone(n.addOrUpdate))this._onMessage({...n,type:"append"});else if(a.length)try{const e=this._subscriptions.get(n.id).tile,s=yield this._executePatchQuery(e,r,a,t);u.throwIfAborted(t),r.outFields=i,n.addOrUpdate.joinAttributes(s),this._onMessage({...n,end:n.end,type:"append"})}catch(c){}else this._onMessage({...n,type:"append"})}));function r(t,r){return e.apply(this,arguments)}return r}(),l._resendSubscription=function(){var e=t._asyncToGenerator((function*(e){if(e.empty)return this._onMessage({id:e.tile.id,addOrUpdate:null,end:!1,type:"append"});const t=e.signal;for(const r of e.requests.done)yield this._resend(r,{signal:t});return o.isSome(e.edits)?this._onMessage(e.edits):void 0}));function r(t){return e.apply(this,arguments)}return r}(),l.resend=function(){var e=t._asyncToGenerator((function*(){const e=Array.from(this._subscriptions.values());yield Promise.all(e.map((e=>this._resendSubscription(e))))}));function r(){return e.apply(this,arguments)}return r}(),t._createClass(i,[{key:"updating",get:function(){return!!this._queue.length||Array.from(this._subscriptions.values()).some((e=>!e.done))}},{key:"maxRecordCountFactor",get:function(){const{query:e}=this._serviceInfo.capabilities;return e.supportsMaxRecordCountFactor?d:null}},{key:"maxPageSize",get:function(){var e;const{query:t}=this._serviceInfo.capabilities;return(null!=(e=t.maxRecordCount)?e:8e3)*o.unwrapOr(this.maxRecordCountFactor,1)}},{key:"pageSize",get:function(){return Math.min(8e3,this.maxPageSize)}}]),i}(l.DataTileSource);e.BaseFeatureSource=f,Object.defineProperty(e,"__esModule",{value:!0})}));
