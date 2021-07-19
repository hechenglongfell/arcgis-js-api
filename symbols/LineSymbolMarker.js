/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer"],(function(e,r,o,t,l,n,c,s,a,i,p,u,y){"use strict";var d;let _=d=function(r){function o(e){var o;return(o=r.call(this,e)||this).placement="begin-end",o.type="line-marker",o.style="arrow",o}e._inheritsLoose(o,r);var t=o.prototype;return t.writeStyle=function(e,r,o,t){"web-map"===(null==t?void 0:t.origin)?r[o]="arrow":r[o]=e},t.readColor=function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},t.writeColor=function(e,r,o,t){"web-map"===(null==t?void 0:t.origin)||(r[o]=e)},t.clone=function(){return new d({color:l.clone(this.color),placement:this.placement,style:this.style})},t.hash=function(){var e;return`${this.placement}.${null==(e=this.color)?void 0:e.hash()}.${this.style}`},e._createClass(o,[{key:"color",set:function(e){this._set("color",e)}}]),o}(t.JSONSupport);return r.__decorate([n.property({type:["begin","end","begin-end"],json:{write:!0}})],_.prototype,"placement",void 0),r.__decorate([i.enumeration({"line-marker":"line-marker"},{readOnly:!0}),n.property({json:{origins:{"web-map":{write:!1}}}})],_.prototype,"type",void 0),r.__decorate([n.property({type:["arrow","circle","square","diamond","cross","x"]})],_.prototype,"style",void 0),r.__decorate([y.writer("style")],_.prototype,"writeStyle",null),r.__decorate([n.property({type:o,value:null,json:{write:{allowNull:!0}}})],_.prototype,"color",null),r.__decorate([p.reader("color")],_.prototype,"readColor",null),r.__decorate([y.writer("color")],_.prototype,"writeColor",null),_=d=r.__decorate([u.subclass("esri.symbols.LineSymbolMarker")],_),_}));
