/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./BitmapTileLayerView2D","./LayerView2D","./support/imageUtils","../tiling/TileInfoView","../tiling/TileKey","../tiling/TileQueue","../tiling/TileStrategy","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,i,r,s,a,n,l,o,h,u,c,f,p,y,d,_,w){"use strict";const g=[102113,102100,3857,3785,900913],m=[0,0],T=i.getLogger("esri.views.2d.layers.WMTSLayerView2D");let I=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}e._inheritsLoose(i,t);var s=i.prototype;return s.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},s.attach=function(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new f(e),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new d({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh())),this.declaredClass),t.prototype.attach.call(this)},s.detach=function(){var e,i;t.prototype.detach.call(this),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(i=this._fetchQueue)||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},s.moveStart=function(){this.requestUpdate()},s.viewChange=function(){this.requestUpdate()},s.moveEnd=function(){this.requestUpdate()},s.releaseTile=function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()},s.acquireTile=function(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(m,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t},s.doRefresh=function(){var t=e._asyncToGenerator((function*(){this.updateRequested||this.suspended||this._refresh()}));function i(){return t.apply(this,arguments)}return i}(),s.isUpdating=function(){return this._fetchQueue.length>0},s.fetchTile=function(){var t=e._asyncToGenerator((function*(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:a=0}=t;if(!i)return this._fetchImage(e,s);const n=new p(0,0,0,0);let l;try{yield i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),l=yield this._fetchImage(n,s)}catch(o){if(r.isAbortError(o))throw o;if(a<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const r=new p(i),s=yield this.fetchTile(r,{...t,resamplingLevel:a+1});return c.resampleImage(this._tileInfoView,s,r,e)}}throw o}return c.resampleImage(this._tileInfoView,l,n,e)}));function i(e){return t.apply(this,arguments)}return i}(),s.canResume=function(){const e=t.prototype.canResume.call(this);return e?null!==this.tileMatrixSet:e},s._enqueueTileFetch=function(){var t=e._asyncToGenerator((function*(e){if(!this._fetchQueue.has(e.key.id)){try{const t=yield this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){r.isAbortError(t)||T.error(t)}this.requestUpdate()}}));function i(e){return t.apply(this,arguments)}return i}(),s._fetchImage=function(){var t=e._asyncToGenerator((function*(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}));function i(e,i){return t.apply(this,arguments)}return i}(),s._refresh=function(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t})).catch((t=>{r.isAbortError(t)||(e.bitmap.source=null)})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0}))};this._tileRequests.set(e,t)})),this.notifyChange("updating")},s._getTileMatrixSetBySpatialReference=function(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>g.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i},e._createClass(i,[{key:"tileMatrixSet",get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}}]),i}(w.RefreshableLayerView(h.BitmapTileLayerView2D(u.LayerView2DMixin(_))));t.__decorate([s.property()],I.prototype,"suspended",void 0),t.__decorate([s.property({readOnly:!0})],I.prototype,"tileMatrixSet",null),I=t.__decorate([o.subclass("esri.views.2d.layers.WMTSLayerView2D")],I);return I}));
