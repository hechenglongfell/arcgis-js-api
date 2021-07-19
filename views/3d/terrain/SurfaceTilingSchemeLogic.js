/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/projection","../../../geometry/support/spatialReferenceUtils","../../../layers/support/layerUtils","./terrainUtils","./TilingScheme"],(function(e,t,i,r,n,o,s,c,l,a,h,p,d,u,S){"use strict";function g(e,t,i){return!!u.getTiledLayerInfo(e,t,i).tileInfo}e.SurfaceTilingSchemeLogic=function(e){function i(t){var i;return(i=e.call(this,t)||this)._handles=new n,i}t._inheritsLoose(i,e);var r=i.prototype;return r.initialize=function(){this._handles.add(this.layers.on("change",(()=>this._update()))),this._handles.add(this.extentHelper.watch("layerViewsExtent",(()=>this._setAdHocTilingScheme()))),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},r.destroy=function(){this._handles.destroy(),this._handles=null,this._waitTask=null},r._update=function(){if(this._waitTask=null,this.tilingSchemeLocked)return;let e;if(this._set("tilingSchemeDone",!1),this.layers.some((t=>!(!d.isTiledLayer(t)||t.isRejected())&&(!(t.isFulfilled()&&!g(t,this.viewSpatialReference,this.viewingMode))&&(e=t,!u.isVectorTileLayer(t)&&!u.isProjectableRasterLayer(t))))),e)if(e.isResolved()){const t=e,{tileInfo:i}=u.getTiledLayerInfo(t,this.viewSpatialReference,this.viewingMode),r=new S(i);this._set("tilingSchemeDone",!0),this._lockTilingScheme(r)}else this._updateWhen(e);else this._set("tilingSchemeDone",!0)},r._updateWhen=function(e){const t=e.when().catch((e=>e)).then((()=>{t!==this._waitTask||this.destroyed||this._update()}));this._waitTask=t},r._lockTilingScheme=function(e){if(1===this.viewingMode){const t=e.levels.length-1;e.spatialReference.isWebMercator?e=S.makeWebMercatorAuxiliarySphere(t):h.canProjectToWGS84ComparableLonLat(e.spatialReference)&&(e=S.makeGCSWithTileSize(e.spatialReference,e.pixelSize,t))}this.tilingSchemeLocked=!0,this.tilingScheme=e,this.extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._handles.removeAll(),this._handles.add(this.extentHelper.watch("tiledLayersExtent",(()=>this._updateTiledLayerExtent())))},r._updateTiledLayerExtent=function(){this.extent=this.extentHelper.tiledLayersExtent},r._setAdHocTilingScheme=function(){if(1===this.viewingMode){const e=this.extentHelper.spatialReference,t=h.canProjectToWGS84ComparableLonLat(e)||p.isMars(e)||p.isMoon(e);e.isWebMercator?this.tilingScheme=S.WebMercatorAuxiliarySphere:t&&(this.tilingScheme=S.makeGCSWithTileSize(e,256)),this.extent=this.extentHelper.layerViewsExtent}else{const e=this.extentHelper.layerViewsExtent;e&&(this.tilingScheme=S.fromExtent(e,this.extentHelper.spatialReference),this.extent=e)}},i}(r),i.__decorate([o.property()],e.SurfaceTilingSchemeLogic.prototype,"tilingScheme",void 0),i.__decorate([o.property()],e.SurfaceTilingSchemeLogic.prototype,"extent",void 0),i.__decorate([o.property({value:!1})],e.SurfaceTilingSchemeLogic.prototype,"tilingSchemeLocked",void 0),i.__decorate([o.property({readOnly:!0,value:!1})],e.SurfaceTilingSchemeLogic.prototype,"tilingSchemeDone",void 0),i.__decorate([o.property({constructOnly:!0})],e.SurfaceTilingSchemeLogic.prototype,"viewSpatialReference",void 0),i.__decorate([o.property({constructOnly:!0})],e.SurfaceTilingSchemeLogic.prototype,"layers",void 0),i.__decorate([o.property({constructOnly:!0})],e.SurfaceTilingSchemeLogic.prototype,"extentHelper",void 0),i.__decorate([o.property({constructOnly:!0})],e.SurfaceTilingSchemeLogic.prototype,"viewingMode",void 0),e.SurfaceTilingSchemeLogic=i.__decorate([a.subclass("esri.views.3d.terrain.SurfaceTilingSchemeLogic")],e.SurfaceTilingSchemeLogic),Object.defineProperty(e,"__esModule",{value:!0})}));
