/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/accessorSupport/decorators/subclass","../../../geometry/support/spatialReferenceUtils","../../../support/GraphicsCollection","../../../core/Error","../../../core/has","../../../core/scheduling","../../../request","../../../chunks/index3","../../../core/urlUtils","../../../chunks/index4","../../../layers/effects/EffectView","../engine/DisplayObject","../engine/webgl/effects/highlight/HighlightGradient","../engine/webgl/BufferPool","../engine/webgl/enums","../engine/webgl/brushes/BrushBitmap","../../../chunks/vec4f32","../engine/webgl/Utils","../engine/webgl/shaders/BackgroundPrograms","../../webgl/enums","../../webgl/checkWebGLError","../../webgl/context-util","../../../chunks/builtins","../../../core/RandomLCG","../engine/webgl/materialKey/MaterialKey","../engine/webgl/techniques/Technique","../engine/webgl/techniques/dotDensity/TechniqueDotDensity","../engine/webgl/techniques/heatmap/TechniqueHeatmap","../engine/webgl/techniques/pieChart/TechniquePieChart","../../webgl/BufferObject","../../webgl/FramebufferObject","../../webgl/Texture","../../webgl/VertexArrayObject","../engine/webgl/brushes/WGLBrushHeatmap","../engine/webgl/DefaultVertexAttributeLayouts","../engine/webgl/shaders/TileInfoPrograms","../engine/webgl/brushes/WGLGeometryBrushMarker","../../../core/mathUtils","../engine/webgl/number","../engine/vectorTiles/style/StyleDefinition","../../../chunks/vec2f32","../engine/vectorTiles/enums","../engine/vectorTiles/shaders/sources/resolver","../engine/webgl/shaders/BitBlitPrograms","../engine/webgl/shaders/sources/resolver","../engine/webgl/TextureManager","../engine/webgl/shaders/StencilPrograms","../engine/webgl/effects/BlendEffect","../engine/webgl/shaders/HighlightPrograms","../engine/webgl/Profiler","../../webgl/renderState","../../3d/webgl-engine/core/shaderModules/interfaces","../../../core/floatRGBA","../../3d/webgl-engine/lib/OrderIndependentTransparency","../../../chunks/webgl-debug","../LabelManager","./graphics/GraphicsView2D","../engine/webgl/AttributeStoreView","../../../chunks/earcut","../../../layers/graphics/featureConversionUtils","../../../core/unitUtils","../../../renderers/support/lengthUtils","../../../chunks/vec3f32","../../../geometry/support/normalizeUtils","../navigation/MapViewNavigation","../../../core/asyncUtils","../engine/webgl/shaders/MagnifierPrograms","./BitmapTileLayerView2D","./LayerView2D","./graphics/HighlightGraphicContainer","./support/imageUtils","../tiling/TileInfoView","../tiling/TileKey","../tiling/TileQueue","../tiling/TileStrategy","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/support/MapServiceLayerViewHelper","../../support/drapedUtils"],(function(e,t,i,r,s,n,l,a,h,o,c,u,g,p,f,d,y,w,b,_,m,v,T,V,I,U,H,q,k,G,S,L,C,B,P,Q,D,E,M,x,A,R,F,z,O,j,K,W,N,J,X,Y,Z,$,ee,te,ie,re,se,ne,le,ae,he,oe,ce,ue,ge,pe,fe,de,ye,we,be,_e,me,ve,Te,Ve,Ie,Ue,He,qe,ke,Ge,Se,Le,Ce){"use strict";const Be=[0,0];let Pe=function(t){function n(){var e;return(e=t.apply(this,arguments)||this)._fetchQueue=null,e._highlightGraphics=new c.GraphicsCollection,e._highlightView=null,e._popupHighlightHelper=null,e._tileStrategy=null,e.layer=null,e}e._inheritsLoose(n,t);var l=n.prototype;return l.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)},l.attach=function(){const e="tileServers"in this.layer?this.layer.tileServers:null;if(this._tileInfoView=new Ue(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new qe({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new ke({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),Le.isMapServiceLayerView(this,this.layer)){const e=this._highlightView=new ce({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Ve(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new Le.MapServiceLayerViewHelper({createFetchPopupFeaturesQueryGeometry:(e,t)=>Ce.createQueryGeometry(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(s.watch((()=>this.resampling),(()=>{this.doRefresh()}))),t.prototype.attach.call(this)},l.detach=function(){t.prototype.detach.call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null},l.fetchPopupFeatures=function(){var t=e._asyncToGenerator((function*(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}));function i(e,i){return t.apply(this,arguments)}return i}(),l.highlight=function(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}},l.moveStart=function(){this.requestUpdate()},l.viewChange=function(){this.requestUpdate()},l.moveEnd=function(){this.requestUpdate()},l.supportsSpatialReference=function(e){return o.equals(this.layer.tileInfo?.spatialReference,e)},l.doRefresh=function(){var t=e._asyncToGenerator((function*(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))))}));function i(){return t.apply(this,arguments)}return i}(),l.isUpdating=function(){return this._fetchQueue?.updating??!1},l.acquireTile=function(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(Be,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t},l.releaseTile=function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()},l.fetchTile=function(){var t=e._asyncToGenerator((function*(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:n=0}=t;if(!i)try{return yield this._fetchImage(e,s)}catch(h){if(!r.isAbortError(h)&&!this.resampling)return Ie.createBlankImage(this._tileInfoView.tileInfo.size);if(n<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const r=new He(i),s=yield this.fetchTile(r,{...t,resamplingLevel:n+1});return Ie.resampleImage(this._tileInfoView,s,r,e)}}throw h}const l=new He(0,0,0,0);let a;try{if(yield i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),l.level!==e.level&&!this.resampling)return Ie.createBlankImage(this._tileInfoView.tileInfo.size);a=yield this._fetchImage(l,s)}catch(h){if(r.isAbortError(h))throw h;a=yield this._fetchImage(e,s)}return this.resampling?Ie.resampleImage(this._tileInfoView,a,l,e):a}));function i(e){return t.apply(this,arguments)}return i}(),l._enqueueTileFetch=function(){var t=e._asyncToGenerator((function*(e){if(!this._fetchQueue.has(e.key.id)){try{const t=yield this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){r.isAbortError(t)||i.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}));function s(e){return t.apply(this,arguments)}return s}(),l._fetchImage=function(){var t=e._asyncToGenerator((function*(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}));function i(e,i){return t.apply(this,arguments)}return i}(),e._createClass(n,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]),n}(Se(ve.BitmapTileLayerView2D(Te.LayerView2DMixin(Ge))));t.__decorate([n.property()],Pe.prototype,"_fetchQueue",void 0),t.__decorate([n.property()],Pe.prototype,"resampling",null),Pe=t.__decorate([h.subclass("esri.views.2d.layers.TileLayerView2D")],Pe);return Pe}));
