/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../Collection","../collectionUtils","../HandleOwner","../has","../Logger","../maybe","../accessorSupport/decorators/property","../arrayUtils","../accessorSupport/ensureType","../accessorSupport/decorators/subclass"],(function(e,t,n,o,r,s,i,l,c,a,u,p,_){"use strict";function f(e,t){return{type:e,cast:r.castForReferenceSetter,set(n){const o=r.referenceSetter(n,this._get(t),e);o.owner=this,this._set(t,o)}}}l.getLogger("esri.core.support.OwningCollection"),e.OwningCollection=function(e){function n(t){var n;return(n=e.call(this,t)||this).handles.add([n.on("before-add",(e=>{c.isNone(e.item)&&e.preventDefault()})),n.on("after-add",(e=>n._own(e.item))),n.on("after-remove",(e=>n._release(e.item)))]),n}t._inheritsLoose(n,e);var r=n.prototype;return r._ownAll=function(){for(const e of this.items)this._own(e)},r._releaseAll=function(){for(const e of this.items)this._release(e)},r._createNewInstance=function(e){return this.itemType?new(o.ofType(this.itemType.Type))(e):new o(e)},t._createClass(n,[{key:"owner",get:function(){return this._get("owner")},set:function(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}}]),n}(s.HandleOwnerMixin(o)),n.__decorate([a.property()],e.OwningCollection.prototype,"owner",null),e.OwningCollection=n.__decorate([_.subclass("esri.core.support.OwningCollection")],e.OwningCollection),e.owningCollectionProperty=f,Object.defineProperty(e,"__esModule",{value:!0})}));
