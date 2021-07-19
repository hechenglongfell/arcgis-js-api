/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../libs/maquette/projection","../../libs/maquette/projector","../support/WatchUpdatingTracking"],(function(e,t,r,o,i,s,n,c,a,d,l,p){"use strict";let h=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).items=new o,e._watchUpdatingTracking=new p.WatchUpdatingTracking,e._callbacks=new Map,e._projector=l.createProjector(),e._hiddenProjector=l.createProjector(),e}e._inheritsLoose(r,t);var i=r.prototype;return i.initialize=function(){const e=document.createElement("div");e.className="esri-overlay-surface",this._set("surface",e),this._hiddenSurface=document.createElement("div"),this._hiddenSurface.setAttribute("style","visibility: hidden;"),e.appendChild(this._hiddenSurface),this._watchUpdatingTracking.addOnCollectionChange(this.items,(e=>{e.added.map((e=>{const t=()=>e.render();this._callbacks.set(e,t),this._projector.append(this.surface,t)})),e.removed.map((e=>{const t=this._projector.detach(this._callbacks.get(e));this.surface.removeChild(t.domNode),this._callbacks.delete(e)}))}))},i.addItem=function(e){this.items.add(e)},i.removeItem=function(e){this.items.remove(e)},i.destroy=function(){this.items.removeAll(),this._callbacks.forEach((e=>this._projector.detach(e))),this._callbacks=null,this._projector=null,this._watchUpdatingTracking.destroy()},i.render=function(){this._projector.renderNow()},i.computeBoundingRect=function(e){const t=this._hiddenSurface,r=this._hiddenProjector;let o=null;const i=()=>(o=e.render(),o);r.append(t,i),r.renderNow();const s={left:0,top:0,right:0,bottom:0};if(o&&o.domNode){const e=o.domNode.getBoundingClientRect();s.left=e.left,s.top=e.top,s.right=e.right,s.bottom=e.bottom}for(r.detach(i);t.firstChild;)t.removeChild(t.firstChild);return s},i.overlaps=function(e,t){const r=this.computeBoundingRect(e),o=this.computeBoundingRect(t);return Math.max(r.left,o.left)<=Math.min(r.right,o.right)&&Math.max(r.top,o.top)<=Math.min(r.bottom,o.bottom)},i.renderCanvas=function(e){if(!this.items.some((e=>e.visible)))return;const t=e.getContext("2d");t.save(),t.font=`10px ${getComputedStyle(this.surface).fontFamily}`,this.items.forEach((e=>{t.save(),e.renderCanvas(t),t.restore()})),t.restore()},e._createClass(r,[{key:"needsRender",get:function(){return this.items.length>0}},{key:"hasVisibleItems",get:function(){return this.items.some((e=>e.visible))}}]),r}(r);return t.__decorate([i.property({readOnly:!0})],h.prototype,"surface",void 0),t.__decorate([i.property({readOnly:!0})],h.prototype,"items",void 0),t.__decorate([i.property({readOnly:!0})],h.prototype,"needsRender",null),t.__decorate([i.property({readOnly:!0})],h.prototype,"_watchUpdatingTracking",void 0),t.__decorate([i.property({readOnly:!0,aliasOf:"_watchUpdatingTracking.updating"})],h.prototype,"updating",void 0),h=t.__decorate([a.subclass("esri.views.overlay.ViewOverlay")],h),h}));
