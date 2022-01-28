/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Logger","../core/promiseUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../portal/Portal","../chunks/persistableUrlUtils","./Symbol","./support/Thumbnail"],(function(e,t,r,o,l,s,n,p,i,a,c,y,u,m,b){"use strict";var d;const h=o.getLogger("esri.symbols.WebStyleSymbol");let f=d=function(e){function r(t){var r;return(r=e.call(this,t)||this).styleName=null,r.portal=null,r.styleUrl=null,r.thumbnail=null,r.name=null,r.type="web-style",r}t._inheritsLoose(r,e);var o=r.prototype;return o.read=function(t,r){this.portal=r?r.portal:void 0,e.prototype.read.call(this,t,r)},o.clone=function(){return new d({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},o.fetchSymbol=function(e){return this._fetchSymbol("webRef",e)},o.fetchCIMSymbol=function(e){return this._fetchSymbol("cimRef",e)},o._fetchSymbol=function(){var e=t._asyncToGenerator((function*(e,t){const r=yield S();l.throwIfAborted(t);const o=r.resolveWebStyleSymbol(this,{portal:this.portal},e,t);return o.catch((e=>{h.error("#fetchSymbol()","Failed to create symbol from style",e)})),o}));function r(t,r){return e.apply(this,arguments)}return r}(),r}(m);function S(){return new Promise(((t,r)=>e(["./support/webStyleSymbolUtils"],t,r)))}r.__decorate([s.property({json:{write:!1}})],f.prototype,"color",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],f.prototype,"styleName",void 0),r.__decorate([s.property({type:y,json:{write:!1}})],f.prototype,"portal",void 0),r.__decorate([s.property({type:String,json:{read:u.read,write:u.write}})],f.prototype,"styleUrl",void 0),r.__decorate([s.property({type:b.default,json:{read:!1}})],f.prototype,"thumbnail",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],f.prototype,"name",void 0),r.__decorate([a.enumeration({styleSymbolReference:"web-style"},{readOnly:!0})],f.prototype,"type",void 0),f=d=r.__decorate([c.subclass("esri.symbols.WebStyleSymbol")],f);return f}));
