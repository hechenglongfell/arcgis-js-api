/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../kernel","../../request","../../core/maybe","../../core/promiseUtils","../FeatureLayer","../../portal/Portal","../../portal/PortalItem"],(function(t,r,e,n,o,i,a,s,l){"use strict";let u=function(){function t(t,r,e,n){this._parsedUrl=t,this._portalItem=r,this._apiKey=e,this.signal=n,this._rootDocument=null;const o=this._parsedUrl?.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this._urlParts={root:o[1],layerId:parseInt(o[2],10)})}var u=t.prototype;return u.fetch=function(){var t=r._asyncToGenerator((function*(){if(!this._urlParts)return null;const t=this._portalItem??(yield this._portalItemFromServiceItemId());if(o.isNone(t))return this._loadFromUrl();const r=yield this._findAndLoadRelatedPortalItem(t);return o.isNone(r)?null:this._loadFeatureLayerFromPortalItem(r)}));function e(){return t.apply(this,arguments)}return e}(),u.fetchPortalItem=function(){var t=r._asyncToGenerator((function*(){if(!this._urlParts)return null;const t=this._portalItem??(yield this._portalItemFromServiceItemId());return o.isNone(t)?null:this._findAndLoadRelatedPortalItem(t)}));function e(){return t.apply(this,arguments)}return e}(),u._fetchRootDocument=function(){var t=r._asyncToGenerator((function*(){if(o.isSome(this._rootDocument))return this._rootDocument;if(o.isNone(this._urlParts))return this._rootDocument={},{};const t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},r=`${this._urlParts.root}/SceneServer`;try{const e=yield n(r,t);this._rootDocument=e.data}catch{this._rootDocument={}}return this._rootDocument}));function e(){return t.apply(this,arguments)}return e}(),u._fetchServiceOwningPortalUrl=function(){var t=r._asyncToGenerator((function*(){const t=this._parsedUrl?.path,r=t?e.id?.findServerInfo(t):null;if(r?.owningSystemUrl)return r.owningSystemUrl;const o=t?t.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const t=(yield n(o,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(a){i.throwIfAbortError(a)}return null}));function o(){return t.apply(this,arguments)}return o}(),u._findAndLoadRelatedPortalItem=function(){var t=r._asyncToGenerator((function*(t){try{return(yield t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return i.throwIfAbortError(r),null}}));function e(r){return t.apply(this,arguments)}return e}(),u._loadFeatureLayerFromPortalItem=function(){var t=r._asyncToGenerator((function*(t){yield t.load({signal:this.signal});const r=yield this._findMatchingAssociatedSublayerUrl(t.url??"");return new a({url:r,portalItem:t}).load({signal:this.signal})}));function e(r){return t.apply(this,arguments)}return e}(),u._loadFromUrl=function(){var t=r._asyncToGenerator((function*(){const t=yield this._findMatchingAssociatedSublayerUrl(`${this._urlParts?.root}/FeatureServer`);return new a({url:t}).load({signal:this.signal})}));function e(){return t.apply(this,arguments)}return e}(),u._findMatchingAssociatedSublayerUrl=function(){var t=r._asyncToGenerator((function*(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this._urlParts?.layerId,i=this._fetchRootDocument(),a=n(r,e),[s,l]=yield Promise.all([a,i]),u=l&&l.layers,c=s.data&&s.data.layers;if(!Array.isArray(c))throw new Error("expected layers array");if(Array.isArray(u))for(let n=0;n<Math.min(u.length,c.length);n++){if(u[n].id===o)return`${r}/${c[n].id}`}else if(null!=o&&o<c.length)return`${r}/${c[o].id}`;throw new Error("could not find matching associated sublayer")}));function e(r){return t.apply(this,arguments)}return e}(),u._portalItemFromServiceItemId=function(){var t=r._asyncToGenerator((function*(){const t=(yield this._fetchRootDocument()).serviceItemId;if(!t)return null;const r=new l({id:t,apiKey:this._apiKey}),e=yield this._fetchServiceOwningPortalUrl();o.isSome(e)&&(r.portal=new s({url:e}));try{return r.load({signal:this.signal})}catch(n){return i.throwIfAbortError(n),null}}));function e(){return t.apply(this,arguments)}return e}(),t}();t.FetchAssociatedFeatureLayer=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
