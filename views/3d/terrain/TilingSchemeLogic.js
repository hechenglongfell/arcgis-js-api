/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Accessor","../../../core/Handles","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/projection","../../../geometry/support/aaBoundingRect","../../../geometry/support/spatialReferenceUtils","../../../layers/support/layerUtils","./terrainUtils","./TilingScheme"],(function(e,t,i,s,o,n,r,c,l,a,h,p,d,g,y,_,u){"use strict";function S(e,t,i){return n.isSome(_.getTiledLayerInfo(e,t,i))}e.TilingSchemeLogic=function(e){function i(t){var i;return(i=e.call(this,t)||this)._handles=new o,i}t._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){this._handles.add(this.layers.on("change",(()=>this._update()))),this._handles.add(this.extentHelper.watch("layerViewsExtent",(()=>this._setAdHocTilingScheme()))),this._update(),this.tilingSchemeLocked||this._setAdHocTilingScheme()},s.destroy=function(){this._handles=n.destroyMaybe(this._handles),this._waitTask=null},s._update=function(){if(this._waitTask=null,this.tilingSchemeLocked)return;let e;if(this._set("tilingSchemeDone",!1),this.layers.some((t=>!(!y.isTiledLayer(t)||t.isRejected())&&(!(t.isFulfilled()&&!S(t,this.viewSpatialReference,this.viewingMode))&&(e=t,!_.isVectorTileLayer(t)&&!_.isProjectableRasterLayer(t))))),e)if(e.isResolved()){const t=e,i=_.getTiledLayerInfo(t,this.viewSpatialReference,this.viewingMode);if(n.isSome(i)){const e=new u(i.tileInfo);this._set("tilingSchemeDone",!0),this._lockTilingScheme(e)}}else this._updateWhen(e);else this._set("tilingSchemeDone",!0)},s._updateWhen=function(e){const t=e.when().catch((()=>{})).then((()=>{t!==this._waitTask||this.destroyed||this._update()}));this._waitTask=t},s._lockTilingScheme=function(e){if(1===this.viewingMode){const t=e.levels.length-1;e.spatialReference.isWebMercator?e=u.makeWebMercatorAuxiliarySphere(t):p.canProjectToWGS84ComparableLonLat(e.spatialReference)&&(e=u.makeGCSWithTileSize(e.spatialReference,e.pixelSize,t))}this.tilingSchemeLocked=!0,this.tilingScheme=e,this.extentHelper.tilingScheme=this.tilingScheme,this._updateTiledLayerExtent(),this._handles.removeAll(),this._handles.add(this.extentHelper.watch("tiledLayersExtent",(()=>this._updateTiledLayerExtent())))},s._updateTiledLayerExtent=function(){this._set("extent",this.extentHelper.tiledLayersExtent)},s._setAdHocTilingScheme=function(){if(1===this.viewingMode){const e=this.extentHelper.viewSpatialReference,t=p.canProjectToWGS84ComparableLonLat(e)||g.isMars(e)||g.isMoon(e);e.isWebMercator?this.tilingScheme=u.WebMercatorAuxiliarySphere:t&&(this.tilingScheme=u.makeGCSWithTileSize(e,256)),this._set("extent",this.extentHelper.layerViewsExtent)}else{const e=this.extentHelper.layerViewsExtent;n.isSome(e)&&!d.equals(e,this.extent)&&(this.tilingScheme=u.fromExtent(e,this.extentHelper.viewSpatialReference),this._set("extent",e))}},t._createClass(i,[{key:"test",get:function(){return{lockTilingScheme:e=>this._lockTilingScheme(e),done:!this._waitTask}}}]),i}(s),i.__decorate([r.property()],e.TilingSchemeLogic.prototype,"tilingScheme",void 0),i.__decorate([r.property({readOnly:!0})],e.TilingSchemeLogic.prototype,"extent",void 0),i.__decorate([r.property({value:!1})],e.TilingSchemeLogic.prototype,"tilingSchemeLocked",void 0),i.__decorate([r.property({readOnly:!0,value:!1})],e.TilingSchemeLogic.prototype,"tilingSchemeDone",void 0),i.__decorate([r.property({constructOnly:!0})],e.TilingSchemeLogic.prototype,"viewSpatialReference",void 0),i.__decorate([r.property({constructOnly:!0})],e.TilingSchemeLogic.prototype,"layers",void 0),i.__decorate([r.property({constructOnly:!0})],e.TilingSchemeLogic.prototype,"extentHelper",void 0),i.__decorate([r.property({constructOnly:!0})],e.TilingSchemeLogic.prototype,"viewingMode",void 0),e.TilingSchemeLogic=i.__decorate([h.subclass("esri.views.3d.terrain.TilingSchemeLogic")],e.TilingSchemeLogic),Object.defineProperty(e,"__esModule",{value:!0})}));
