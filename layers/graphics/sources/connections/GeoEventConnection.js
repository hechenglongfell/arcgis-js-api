/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../request","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/urlUtils","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","./WebSocketConnection","../../../../rest/query/operations/query","../../../../rest/support/Query","../../../../geometry/support/jsonUtils","../../../../geometry/SpatialReference"],(function(e,t,r,n,o,i,s,c,u,a,l,d,f,h,y,g,_,p,m){"use strict";const v=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"})),S=1e4,b={maxQueryDepth:5,maxRecordCountFactor:3};let F=function(r){function n(e){var t;return(t=r.call(this,{...b,...e})||this)._buddyServicesQuery=null,t._relatedFeatures=null,t}t._inheritsLoose(n,r);var l=n.prototype;return l._open=function(){var e=t._asyncToGenerator((function*(){const e=yield this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),yield this._buddyServicesQuery,yield this._tryCreateWebSocket(t);const{filter:r,outFields:n}=this._config;this.destroyed||this._setFilter(r,n)}));function r(){return e.apply(this,arguments)}return r}(),l._onMessage=function(e){if("attributes"in e){let r;try{r=this._enrich(e),c.isSome(this._featureZScaler)&&this._featureZScaler(r.geometry)}catch(t){return void s.getLogger(this.declaredClass).error(new i("geoevent-connection","Failed to parse message",t))}this.onFeature(r)}else this.onMessage(e)},l._fetchServiceDefinition=function(){var e=t._asyncToGenerator((function*(e){const t={f:"json",...this._config.customParameters},r=o(e.path,{query:t,responseType:"json"}),n=(yield r).data;return this._serviceDefinition=n,n}));function r(t){return e.apply(this,arguments)}return r}(),l._fetchWebSocketUrl=function(e,t){const r=e[0],{urls:n,token:o}=r,i=this._inferWebSocketBaseUrl(n);return a.addQueryParameters(`${i}/subscribe`,{outSR:""+t.wkid,token:o})},l._inferWebSocketBaseUrl=function(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s.getLogger(this.declaredClass).error(new i("geoevent-connection","Unable to infer WebSocket url",e)),null},l._setFilter=function(){var e=t._asyncToGenerator((function*(e,t){const r=this._websocket;if(c.isNone(r)||c.isNone(e)&&c.isNone(t))return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const a=u.createResolver(),l=()=>{o||(this.destroyed||this._websocket!==r||s.getLogger(this.declaredClass).error(new i("geoevent-connection","Server timed out when setting filter")),a.reject())},d=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s.getLogger(this.declaredClass).error(new i("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),a.reject(t.error)),this._setWebSocketJSONParseHandler(r),o=!0,a.resolve())};return r.onmessage=d,r.send(n),setTimeout(l,S),a.promise}));function r(t,r){return e.apply(this,arguments)}return r}(),l._serializeFilter=function(e,t){const r={};if(c.isNone(e)&&c.isNone(t))return r;if(c.isSome(e)&&e.geometry)try{const t=p.fromJSON(e.geometry);if("extent"!==t.type)throw new i(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(n){s.getLogger(this.declaredClass).error(new i("geoevent-connection","Encountered an error when setting connection geometryDefinition",n))}return c.isSome(e)&&e.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),c.isSome(t)&&(r.outFields=t.join(",")),r},l._enrich=function(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],n=this._relatedFeatures.get(r);if(!n)return s.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:c}=n;for(const i in o)e.attributes[i]=o[i];return c&&(e.geometry=c),e.geometry||e.centroid||s.getLogger(this.declaredClass).error(new i("geoevent-connection","Found malformed feature - no geometry found",e)),e},l._queryBuddyServices=function(){var e=t._asyncToGenerator((function*(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),n=this._queryArchive(t);yield r;const o=yield n;if(!o)return;for(const i of o.features)this.onFeature(this._enrich(i))}catch(e){s.getLogger(this.declaredClass).error(new i("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}));function r(){return e.apply(this,arguments)}return r}(),l._queryRelatedFeatures=function(){var e=t._asyncToGenerator((function*(e){if(!e)return;const t=yield this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}));function r(t){return e.apply(this,arguments)}return r}(),l._queryArchive=function(){var e=t._asyncToGenerator((function*(e){if(e)return this._queryBuddy(e.featuresUrl)}));function r(t){return e.apply(this,arguments)}return r}(),l._queryBuddy=function(){var r=t._asyncToGenerator((function*(t){const r=new((yield new Promise(((t,r)=>e(["../../../FeatureLayer"],(e=>t(v(e))),r)))).default)({url:t}),{capabilities:n}=yield r.load(),o=n.query.supportsMaxRecordCountFactor,i=n.query.supportsPagination,s=n.query.supportsCentroid,u=this._config.maxRecordCountFactor,a=r.capabilities.query.maxRecordCount,l=o?a*u:a,d=new _;if(d.outFields=c.unwrapOr(this._config.outFields,["*"]),d.where=c.unwrapOr(c.get(this._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=m.fromJSON(this._config.spatialReference),s&&(d.returnCentroid=!0),o&&(d.maxRecordCountFactor=u),i)return d.num=l,r.destroy(),this._queryPages(t,d);const f=yield g.executeQuery(t,d,this._config.sourceSpatialReference);return r.destroy(),f.data}));function n(e){return r.apply(this,arguments)}return n}(),l._queryPages=function(){var e=t._asyncToGenerator((function*(e,t,r=[],n=0){t.start=c.isSome(t.num)?n*t.num:null;const{data:o}=yield g.executeQuery(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&n<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,n+1)):(r.forEach((e=>o.features.push(e))),o)}));function r(t,r){return e.apply(this,arguments)}return r}(),l._addRelatedFeatures=function(e){const t=new Map,r=e.features,n=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[n];t.set(e,o)}this._relatedFeatures=t},n}(y.WebSocketConnection);F=r.__decorate([h.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],F);return F}));
