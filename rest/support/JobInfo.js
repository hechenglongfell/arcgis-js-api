/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/has","../../core/jsonMap","../../core/JSONSupport","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../utils","../geoprocessor/GPOptions","../geoprocessor/utils","./GPMessage"],(function(e,t,r,s,o,n,i,a,c,u,l,p,b,d,h,j){"use strict";const m=e=>Object.freeze({__proto__:null,default:e});var f;const _=new n.JSONMap({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let g=f=function(r){function o(e){var t;return(t=r.call(this,e)||this).jobId=null,t.jobStatus=null,t.messages=null,t.requestOptions=null,t.sourceUrl=null,t._timer=null,t}t._inheritsLoose(o,r);var n=o.prototype;return n.cancelJob=function(e){const{jobId:t,sourceUrl:r}=this,{path:o}=b.parseUrl(r),n={...this.requestOptions,...e,query:{f:"json"}};this._clearTimer();return s(`${o}/jobs/${t}/cancel`,n).then((e=>{const t=f.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))},n.destroy=function(){clearInterval(this._timer)},n.checkJobStatus=function(e){const{path:t}=b.parseUrl(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},o=`${t}/jobs/${this.jobId}`;return s(o,r).then((({data:e})=>{const t=f.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))},n.fetchResultData=function(e,t,r){t=d.from(t||{});const{returnFeatureCollection:o,returnM:n,returnZ:i,outSpatialReference:a}=t,{path:c}=b.parseUrl(this.sourceUrl),u={returnFeatureCollection:o,returnM:n,returnZ:i,outSR:a,returnType:"data",f:"json"},l=h.gpEncode(u,null),p={...this.requestOptions,...r,query:l},j=`${c}/jobs/${this.jobId}/results/${e}`;return s(j,p).then((e=>h.decode(e.data)))},n.fetchResultImage=function(e,t,r){const{path:o}=b.parseUrl(this.sourceUrl),n={...t.toJSON(),f:"json"},i=h.gpEncode(n),a={...this.requestOptions,...r,query:i},c=`${o}/jobs/${this.jobId}/results/${e}`;return s(c,a).then((e=>h.decode(e.data)))},n.fetchResultMapImageLayer=function(){var r=t._asyncToGenerator((function*(){const{path:t}=b.parseUrl(this.sourceUrl),r=t.indexOf("/GPServer/"),s=`${t.substring(0,r)}/MapServer/jobs/${this.jobId}`;return new(0,(yield new Promise(((t,r)=>e(["../../layers/MapImageLayer"],(e=>t(m(e))),r)))).default)({url:s})}));function s(){return r.apply(this,arguments)}return s}(),n.waitForJobCompletion=function(){var e=t._asyncToGenerator((function*(e={}){const{interval:t=1e3,signal:r,statusCallback:s}=e;return new Promise(((e,o)=>{a.onAbort(r,(()=>{this._clearTimer(),o(a.createAbortError())})),this._clearTimer();const n=setInterval((()=>{this._timer||o(a.createAbortError()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":s&&s(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),o(this)}}))}),t);this._timer=n}))}));function r(){return e.apply(this,arguments)}return r}(),n._clearTimer=function(){this._timer&&(clearInterval(this._timer),this._timer=null)},o}(i.JSONSupport);r.__decorate([c.property()],g.prototype,"jobId",void 0),r.__decorate([c.property({json:{read:_.read}})],g.prototype,"jobStatus",void 0),r.__decorate([c.property({type:[j]})],g.prototype,"messages",void 0),r.__decorate([c.property()],g.prototype,"requestOptions",void 0),r.__decorate([c.property({json:{write:!0}})],g.prototype,"sourceUrl",void 0),g=f=r.__decorate([p.subclass("esri.rest.support.JobInfo")],g);return g}));
