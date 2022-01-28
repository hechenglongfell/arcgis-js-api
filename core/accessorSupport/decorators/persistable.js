/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../maybe","../../multiOriginJSONSupportUtils","../../urlUtils","../../uuid","../metadata","../PropertyOrigin","./property","../../../portal/support/resourceExtension","../../../chunks/persistableUrlUtils"],(function(e,t,r,o,n,i,s,u,l,c,p,a){"use strict";const f=e=>Object.freeze({__proto__:null,default:e});function y(e){const t=o.isSome(e)&&e.origins?e.origins:[void 0];return(r,o)=>{const n=d(e,r,o);for(const e of t){const t=c.propertyJSONMeta(r,e,o);for(const e in n)t[e]=n[e]}}}function d(e,t,r){if(o.isSome(e)&&"resource"===e.type)return g(e,t,r);switch(o.isSome(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=a.persistableUrlUtils;return{read:e,write:t}}}}function g(e,t,r){const s=u.getOwnPropertyMetadata(t,r);return{type:String,read:(e,t,r)=>{const o=a.read(e,t,r);return s.type===String?o:"function"==typeof s.type?new s.type({url:o}):void 0},write:{writer(t,u,c,p){if(!p||!p.resources)return"string"==typeof t?void(u[c]=a.toJSON(t,p)):void(u[c]=t.write({},p));const f=w(t),y=f?a.toJSON(f,{...p,verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,d=s.type!==String&&(!n.isMultiOriginJSONMixin(this)||p&&p.origin&&this.originIdOf(r)>l.nameToId(p.origin));p&&p.portalItem&&o.isSome(y)&&!i.isAbsolute(y)?d?h(this,r,t,y,u,c,p,e):U(y,u,c,p):p&&p.portalItem&&(o.isNone(y)||o.isSome(a.itemIdFromResourceUrl(y))||i.isBlobProtocol(y)||d)?m(this,r,t,y,u,c,p,e):u[c]=y}}}}function m(e,t,r,n,u,l,c,a){const f=s.generateUUID(),y=O(r,n,c),d=i.join(o.get(a,"prefix"),f),g=`${d}.${p.getResourceContentExtension(y)}`,m=c.portalItem.resourceFromPath(g);i.isBlobProtocol(n)&&c.resources.pendingOperations.push(b(n).then((e=>{m.path=`${d}.${p.getResourceContentExtension(e)}`,u[l]=m.itemRelativeUrl})).catch((()=>{}))),S(e,t,m,y,c.resources.toAdd),u[l]=m.itemRelativeUrl}function h(e,t,r,o,n,s,u,l){const c=u.portalItem.resourceFromPath(o),a=O(r,o,u);p.getResourceContentExtension(a)===i.getPathExtension(c.path)?(S(e,t,c,a,u.resources.toUpdate),n[s]=o):m(e,t,r,o,n,s,u,l)}function U(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}function S(e,t,r,o,n){n.push({resource:r,content:o,finish:r=>{I(e,t,r)}})}function O(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function b(e){return v.apply(this,arguments)}function v(){return(v=r._asyncToGenerator((function*(t){const r=(yield new Promise(((t,r)=>e(["../../../request"],(e=>t(f(e))),r)))).default,{data:o}=yield r(t,{responseType:"blob"});return o}))).apply(this,arguments)}function w(e){return o.isNone(e)?null:"string"==typeof e?e:e.url}function I(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}t.persistable=y,Object.defineProperty(t,"__esModule",{value:!0})}));
