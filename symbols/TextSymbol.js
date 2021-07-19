/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/lang","../core/screenUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/cast","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./Font","./Symbol"],(function(t,e,o,r,i,n,s,l,p,h,a,c,d,y){"use strict";var u;let g=u=function(e){function o(...t){var o;return(o=e.call(this,...t)||this).backgroundColor=null,o.borderLineColor=null,o.borderLineSize=null,o.font=new d,o.horizontalAlignment="center",o.kerning=!0,o.haloColor=null,o.haloSize=null,o.rightToLeft=null,o.rotated=!1,o.text="",o.type="text",o.verticalAlignment=null,o.xoffset=0,o.yoffset=0,o.angle=0,o.width=null,o.lineWidth=192,o.lineHeight=1,o}t._inheritsLoose(o,e);var n=o.prototype;return n.normalizeCtorArgs=function(t,e,o){if(t&&"string"!=typeof t)return t;const r={};return t&&(r.text=t),e&&(r.font=e),o&&(r.color=o),r},n.writeLineWidth=function(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t},n.castLineWidth=function(t){return i.toPt(t)},n.writeLineHeight=function(t,e,o,r){r&&"string"!=typeof r?r.origin:e[o]=t},n.clone=function(){return new u({angle:this.angle,backgroundColor:r.clone(this.backgroundColor),borderLineColor:r.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:r.clone(this.color),font:this.font&&this.font.clone(),haloColor:r.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})},n.hash=function(){return`${this.backgroundColor&&this.backgroundColor.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color.hash()}.${this.font&&this.font.hash()}.${this.haloColor&&this.haloColor.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`},o}(y);return e.__decorate([n.property({type:o,json:{write:!0}})],g.prototype,"backgroundColor",void 0),e.__decorate([n.property({type:o,json:{write:!0}})],g.prototype,"borderLineColor",void 0),e.__decorate([n.property({type:Number,json:{write:!0}})],g.prototype,"borderLineSize",void 0),e.__decorate([n.property({type:d,json:{write:!0}})],g.prototype,"font",void 0),e.__decorate([n.property({type:["left","right","center","justify"],json:{write:!0}})],g.prototype,"horizontalAlignment",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],g.prototype,"kerning",void 0),e.__decorate([n.property({type:o,json:{write:!0}})],g.prototype,"haloColor",void 0),e.__decorate([n.property({type:Number,cast:i.toPt,json:{write:!0}})],g.prototype,"haloSize",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],g.prototype,"rightToLeft",void 0),e.__decorate([n.property({type:Boolean,json:{write:!0}})],g.prototype,"rotated",void 0),e.__decorate([n.property({type:String,json:{write:!0}})],g.prototype,"text",void 0),e.__decorate([h.enumeration({esriTS:"text"},{readOnly:!0})],g.prototype,"type",void 0),e.__decorate([n.property({type:["baseline","top","middle","bottom"],json:{write:!0}})],g.prototype,"verticalAlignment",void 0),e.__decorate([n.property({type:Number,cast:i.toPt,json:{write:!0}})],g.prototype,"xoffset",void 0),e.__decorate([n.property({type:Number,cast:i.toPt,json:{write:!0}})],g.prototype,"yoffset",void 0),e.__decorate([n.property({type:Number,json:{read:t=>t&&-1*t,write:(t,e)=>e.angle=t&&-1*t}})],g.prototype,"angle",void 0),e.__decorate([n.property({type:Number,json:{write:!0}})],g.prototype,"width",void 0),e.__decorate([n.property({type:Number})],g.prototype,"lineWidth",void 0),e.__decorate([c.writer("lineWidth")],g.prototype,"writeLineWidth",null),e.__decorate([s.cast("lineWidth")],g.prototype,"castLineWidth",null),e.__decorate([n.property({type:Number})],g.prototype,"lineHeight",void 0),e.__decorate([c.writer("lineHeight")],g.prototype,"writeLineHeight",null),g=u=e.__decorate([a.subclass("esri.symbols.TextSymbol")],g),g}));
