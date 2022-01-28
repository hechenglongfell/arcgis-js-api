/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../engine/RasterTileContainer","./BaseImageryTileSubView2D","../support/util"],(function(e,r,t,i,n,o,s,l,a,c,u){"use strict";let p=function(r){function i(){var e;return(e=r.apply(this,arguments)||this).container=null,e.layer=null,e.type="raster",e}e._inheritsLoose(i,r);var n=i.prototype;return n.canUseWebGLForProcessing=function(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&u.canUseMajorityInterpolationOnDataSource(this.layer))},n.fetchTile=function(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)},n.updateTileSource=function(){var r=e._asyncToGenerator((function*(e,r){const{bandIds:i}=this.layer,n=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:s,symbolizerParams:l,globalSymbolizerParams:a,suspended:c,coords:u,resolution:p}=r,{bitmap:y}=e;if([y.x,y.y]=u,y.resolution=p,s&&t.isSome(s)&&t.isSome(s.pixelBlock)){const e={extent:s.extent,pixelBlock:s.pixelBlock};if(y.rawPixelData=e,o)y.source=s.pixelBlock,y.isRendereredSource=!1;else{const r=yield this.layer.applyRenderer(e,"stretch"===(null==a?void 0:a.type)?a:null);y.source=r,y.isRendereredSource=!0}y.symbolizerParameters=o?l:null,o?y.transformGrid||(y.transformGrid=s.transformGrid):y.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();y.source=e,y.symbolizerParameters=o?l:null,y.transformGrid=null}y.bandIds=o?i:null,y.width=this._tileInfoView.tileInfo.size[0],y.height=this._tileInfoView.tileInfo.size[1],y.interpolation=n,y.suspended=c,y.invalidateTexture()}));function i(e,t){return r.apply(this,arguments)}return i}(),n.updateTileSymbolizerParameters=function(){var r=e._asyncToGenerator((function*(e,r){const{local:i,global:n}=r,{bandIds:o}=this.layer,s=this._getLayerInterpolation(),l=this.canUseWebGLForProcessing(),{bitmap:a}=e,{rawPixelData:c}=a;!l&&t.isSome(c)?(a.source=yield this.layer.applyRenderer(c,"stretch"===(null==n?void 0:n.type)?n:null),a.isRendereredSource=!0):(a.isRendereredSource&&t.isSome(c)&&(a.source=c.pixelBlock),a.isRendereredSource=!1),a.symbolizerParameters=l?n||i:null,a.bandIds=l?o:null,a.interpolation=s,a.suspended=!1}));function i(e,t){return r.apply(this,arguments)}return i}(),n.install=function(e){this.container=new a.RasterTileContainer(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,e.addChild(this.container)},n.uninstall=function(){this.container.removeAllChildren(),this.container.remove(),r.prototype.uninstall.call(this)},n._getLayerInterpolation=function(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return"raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r},i}(c.BaseImageryTileSubView2D);r.__decorate([i.property()],p.prototype,"container",void 0),r.__decorate([i.property()],p.prototype,"layer",void 0),r.__decorate([i.property()],p.prototype,"type",void 0),p=r.__decorate([l.subclass("esri.views.2d.layers.imagery.ImageryTileView2D")],p);return p}));
