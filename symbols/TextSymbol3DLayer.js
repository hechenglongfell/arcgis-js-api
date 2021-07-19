/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/lang","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Font","./Symbol3DLayer","./support/materialUtils","./support/Symbol3DHalo","./support/Symbol3DMaterial"],(function(e,t,o,r,n,s,i,l,a,c,u,p,h,y,f,_){"use strict";var d;let z=d=function(t){function n(e){var o;return(o=t.call(this,e)||this)._userSize=void 0,o.halo=null,o.material=null,o.text=void 0,o.type="text",o}e._inheritsLoose(n,t);var s=n.prototype;return s.writeFont=function(e,t,o,r){const n={...r,textSymbol3D:!0};t.font=e.write({},n),delete t.font.size},s.clone=function(){return new d({enabled:this.enabled,font:this.font&&o.clone(this.font),halo:this.halo&&o.clone(this.halo),material:r.isSome(this.material)?this.material.clone():null,size:this.size,text:this.text})},n.fromTextSymbol=function(e){const t=S(e.haloColor,e.haloSize),o=e.font?e.font.clone():new p;return new d({size:o.size,font:o,halo:t,material:e.color?{color:e.color.clone()}:null,text:e.text})},e._createClass(n,[{key:"font",get:function(){return this._get("font")||null},set:function(e){e&&this._userSize&&(e.size=this._userSize),this._set("font",e)}},{key:"size",get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(e){this._userSize=e,this.font&&(this.font.size=this._userSize),this.notifyChange("size")}}]),n}(h);function S(e,t){return e&&t>0?{color:o.clone(e),size:t}:null}return t.__decorate([n.property({type:p,json:{write:!0}})],z.prototype,"font",null),t.__decorate([u.writer("font")],z.prototype,"writeFont",null),t.__decorate([n.property({type:f.default,json:{write:!0}})],z.prototype,"halo",void 0),t.__decorate([n.property({type:_.default,json:{write:!0}})],z.prototype,"material",void 0),t.__decorate([n.property(y.screenSizeProperty),n.property()],z.prototype,"size",null),t.__decorate([n.property({type:String,json:{write:!0}})],z.prototype,"text",void 0),t.__decorate([a.enumeration({Text:"text"},{readOnly:!0})],z.prototype,"type",void 0),z=d=t.__decorate([c.subclass("esri.symbols.TextSymbol3DLayer")],z),z}));
