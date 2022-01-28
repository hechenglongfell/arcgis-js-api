/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../../chunks/persistableUrlUtils","../../views/support/screenshotUtils"],(function(t,e,a,r,n,o,s,i,c,l,p,u){"use strict";var d;const h=new WeakMap;let g=0,m=d=function(e){function a(t){var a;return(a=e.call(this,t)||this).wrap="repeat",a}t._inheritsLoose(a,e);var r=a.prototype;return r.writeData=function(t,e,a,r){if(t instanceof HTMLImageElement){const n={type:"image-element",src:p.toJSON(t.src,r),crossOrigin:t.crossOrigin};e[a]=n}else if(t instanceof HTMLCanvasElement){const r=t.getContext("2d").getImageData(0,0,t.width,t.height),n={type:"canvas-element",imageData:this.encodeImageData(r)};e[a]=n}else if(t instanceof HTMLVideoElement){const n={type:"video-element",src:p.toJSON(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=n}else{const r={type:"image-data",imageData:this.encodeImageData(t)};e[a]=r}},r.readData=function(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this.decodeImageData(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return this.decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}},r.clone=function(){const t={url:this.url,data:this.data,wrap:this.cloneWrap()};return new d(t)},r.cloneWithDeduplication=function(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a},r.cloneWrap=function(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}},r.encodeImageData=function(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}},r.decodeImageData=function(t){const e=atob(t.data),a=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return u.wrapImageData(a,t.width,t.height)},r.imageDataContainsTransparent=function(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1},a.from=function(t){return"string"==typeof t?new d({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new d({data:t}):s.ensureClass(d,t)},t._createClass(a,[{key:"url",get:function(){return this._get("url")||null},set:function(t){this._set("url",t),t&&this._set("data",null)}},{key:"data",get:function(){return this._get("data")||null},set:function(t){this._set("data",t),t&&this._set("url",null)}},{key:"transparent",get:function(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this.imageDataContainsTransparent(t);if(e){const t=e.substr(e.length-4,4).toLowerCase(),a=e.substr(0,15).toLocaleLowerCase();if(".png"===t||"data:image/png;"===a)return!0}return!1},set:function(t){null!=t?this._override("transparent",t):this._clearOverride("transparent")}},{key:"contentHash",get:function(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++g),e(h.get(this.data))):e()}}]),a}(r.JSONSupport);e.__decorate([n.property({type:String,json:{write:p.write}})],m.prototype,"url",null),e.__decorate([n.property({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),n.property()],m.prototype,"data",null),e.__decorate([l.writer("data")],m.prototype,"writeData",null),e.__decorate([i.reader("data")],m.prototype,"readData",null),e.__decorate([n.property({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],m.prototype,"transparent",null),e.__decorate([n.property({json:{write:!0}})],m.prototype,"wrap",void 0),e.__decorate([n.property({readOnly:!0})],m.prototype,"contentHash",null),m=d=e.__decorate([c.subclass("esri.geometry.support.MeshTexture")],m);return m}));
