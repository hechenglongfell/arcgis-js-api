/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Graphic","../../../../core/Accessor","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../layers/support/rasterFunctions/pixelUtils","../../engine/BitmapContainer","../../engine/Container","../../engine/ImageryBitmapSource","../support/ExportStrategy"],(function(e,t,r,i,a,o,n,s,p,c,l,u,d,h,y,g){"use strict";let m=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).attached=!1,e.container=new h.Container,e.updateRequested=!1,e.type="imagery",e._bitmapView=new d.BitmapContainer,e}e._inheritsLoose(i,t);var s=i.prototype;return s.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1},s.update=function(e){this.strategy.update(e).catch((e=>{n.isAbortError(e)||a.getLogger(this.declaredClass).error(e)}))},s.hitTest=function(e){return new r({attributes:{},geometry:e.clone(),layer:this.layer})},s.attach=function(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new g({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})},s.detach=function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1},s.redraw=function(){var t=this;this.strategy.updateExports(function(){var r=e._asyncToGenerator((function*(e){const{source:r}=e;if(!r||r instanceof ImageBitmap)return;const i=yield t.layer.applyRenderer({extent:r.extent,pixelBlock:r.originalPixelBlock??r.pixelBlock});r.filter=e=>t.layer.pixelFilter?t.layer.applyFilter(e):{...i,extent:r.extent}}));return function(e){return r.apply(this,arguments)}}()).catch((e=>{n.isAbortError(e)||a.getLogger(this.declaredClass).error(e)}))},s.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())},s.isUpdating=function(){return this.strategy.updating||this.updateRequested},s.getPixelData=function(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=u.mosaicPixelData(r,t);return o.isSome(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},s._fetchImage=function(){var t=e._asyncToGenerator((function*(e,t,r,i){(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,i.returnImageBitmap=!0;const a=yield this.layer.fetchImage(e,t,r,i);if(a.imageBitmap)return a.imageBitmap;const o=yield this.layer.applyRenderer(a.pixelData,{signal:i.signal}),n=new y(o.pixelBlock,o.extent?.clone(),a.pixelData.pixelBlock);return n.filter=e=>this.layer.applyFilter(e),n}));function r(e,r,i,a){return t.apply(this,arguments)}return r}(),e._createClass(i,[{key:"updating",get:function(){return!this.attached||this.isUpdating()}}]),i}(i);t.__decorate([s.property()],m.prototype,"attached",void 0),t.__decorate([s.property()],m.prototype,"container",void 0),t.__decorate([s.property()],m.prototype,"layer",void 0),t.__decorate([s.property()],m.prototype,"strategy",void 0),t.__decorate([s.property()],m.prototype,"timeExtent",void 0),t.__decorate([s.property()],m.prototype,"view",void 0),t.__decorate([s.property()],m.prototype,"updateRequested",void 0),t.__decorate([s.property()],m.prototype,"updating",null),t.__decorate([s.property()],m.prototype,"type",void 0),m=t.__decorate([l.subclass("esri.views.2d.layers.imagery.ImageryView2D")],m);return m}));
