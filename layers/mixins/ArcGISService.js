/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Logger","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../support/arcgisLayerUrl"],(function(e,t,r,s,i,o,c,l,u,n,a){"use strict";const p=e=>{let c=function(e){function r(){return e.apply(this,arguments)||this}return t._inheritsLoose(r,e),t._createClass(r,[{key:"title",get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=a.parse(this.url);if(i.isSome(e)&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)}},{key:"url",set:function(e){this._set("url",a.sanitizeUrl(e,s.getLogger(this.declaredClass)))}}]),r}(e);return r.__decorate([o.property()],c.prototype,"title",null),r.__decorate([o.property({type:String})],c.prototype,"url",null),c=r.__decorate([n.subclass("esri.layers.mixins.ArcGISService")],c),c};e.ArcGISService=p,Object.defineProperty(e,"__esModule",{value:!0})}));
