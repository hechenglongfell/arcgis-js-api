/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./has","./lang","./Logger","./maybe","./accessorSupport/PropertyOrigin","./accessorSupport/utils","./accessorSupport/decorators/subclass"],(function(e,n,o,t,r,s,i,c,l,a,u){"use strict";const p=e=>{let t=function(e){function o(){return e.apply(this,arguments)||this}return n._inheritsLoose(o,e),o.prototype.clone=function(){const e=c.unwrapOrThrow(a.getProperties(this),"unable to clone instance of non-accessor class"),n=e.metadatas,o=e.store,t={},r=new Map;for(const c in n){const e=n[c],i=o?.originOf(c),a=e.clonable;if(e.readOnly||!1===a||i!==l.OriginId.USER&&i!==l.OriginId.DEFAULTS&&i!==l.OriginId.WEB_MAP&&i!==l.OriginId.WEB_SCENE)continue;const u=this[c];let p=null;p="function"==typeof a?a(u):"reference"===a?u:s.tryClone(u),null!=u&&null==p||(i===l.OriginId.DEFAULTS?r.set(c,p):t[c]=p)}const i=new(0,Object.getPrototypeOf(this).constructor)(t);if(r.size){const e=a.getProperties(i)?.store;if(e)for(const[n,o]of r)e.set(n,o,l.OriginId.DEFAULTS)}return i},o}(e);return t=o.__decorate([u.subclass("esri.core.Clonable")],t),t};e.Clonable=function(e){function o(){return e.apply(this,arguments)||this}return n._inheritsLoose(o,e),o}(p(t)),e.Clonable=o.__decorate([u.subclass("esri.core.Clonable")],e.Clonable),e.ClonableMixin=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
