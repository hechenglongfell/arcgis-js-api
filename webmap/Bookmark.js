/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../TimeExtent","../Viewpoint","../core/deprecate","../core/Error","../core/Identifiable","../core/JSONSupport","../core/lang","../core/Logger","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/ensureType","../geometry/Extent","../webdoc/support/Thumbnail"],(function(e,t,o,r,n,i,p,s,a,c,l,u,w,y,d,m,h,_,b){"use strict";var v;const g="esri.webmap.Bookmark",x=c.getLogger(g);let f=v=function(t){function o(e){var o;return(o=t.call(this,e)||this).name=null,o.thumbnail=new b,o.timeExtent=null,o}e._inheritsLoose(o,t);var p=o.prototype;return p.castThumbnail=function(e){return"string"==typeof e?new b({url:e}):h.ensureType(b,e)},p.readViewpoint=function(e,t){const{extent:o,viewpoint:n}=t;return r.fromJSON(n||{targetGeometry:o})},p.writeViewpoint=function(e,t,o,r){if(!e)return;const{targetGeometry:n}=e;if(l.isSome(n)&&"extent"!==n.type){const e="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";null!=r&&r.messages?r.messages.push(new i("property:unsupported",e)):x.error(e)}else t[o]=e.toJSON()},p.clone=function(){return new v(a.clone({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))},e._createClass(o,[{key:"extent",set:function(e){n.deprecatedProperty(x,"extent",{replacement:"viewpoint",version:"4.17"}),this._set("viewpoint",new r({targetGeometry:e.clone()})),this._set("extent",e)}},{key:"viewpoint",set:function(e){const{targetGeometry:t,scale:o}=e;l.isSome(t)&&("extent"===t.type?this._set("extent",t.clone()):"point"===t.type&&l.isNone(o)&&x.warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",e)),this._set("viewpoint",e)}}]),o}(p.IdentifiableMixin(s.JSONSupport));t.__decorate([u.property({type:_,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],f.prototype,"extent",null),t.__decorate([u.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],f.prototype,"name",void 0),t.__decorate([u.property({type:b,json:{write:{overridePolicy:e=>({enabled:!(!e||!e.url)})}}})],f.prototype,"thumbnail",void 0),t.__decorate([w.cast("thumbnail")],f.prototype,"castThumbnail",null),t.__decorate([u.property({type:o,json:{write:!0}})],f.prototype,"timeExtent",void 0),t.__decorate([u.property({type:r,nonNullable:!0,json:{write:!0}})],f.prototype,"viewpoint",null),t.__decorate([y.reader("viewpoint",["extent","viewpoint"])],f.prototype,"readViewpoint",null),t.__decorate([m.writer("viewpoint")],f.prototype,"writeViewpoint",null),f=v=t.__decorate([d.subclass(g)],f);return f}));
