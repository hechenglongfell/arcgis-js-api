/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/HandleOwner","../../../../core/Logger","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/projection","../../../../geometry/support/aaBoundingRect","./enums","../../../support/layerViewUtils","../../../support/Scheduler"],(function(e,i,t,r,a,s,n,l,c,o,h,p,u,y){"use strict";const d=r.getLogger("esri.views.3d.layers.graphics.Graphics3DScaleVisibility");let g=function(i){function t(e){var t;return(t=i.call(this,e)||this)._scaleRangeActive=!1,t._layerScaleRangeVisibilityQuery=!1,t._extent=null,t.graphicsCoreOwner=null,t.layer=null,t.queryGraphicUIDsInExtent=null,t.graphicsCore=null,t.basemapTerrain=null,t.layerScaleEnabled=!0,t.suspended=!1,t._dirty=!0,t}e._inheritsLoose(t,i);var r=t.prototype;return r.initialize=function(){this.updateScaleRangeActive();const e=this.graphicsCoreOwner.view.resourceController.scheduler;this.handles.add(e.registerTask(y.TaskPriority.SCALE_VISIBILITY,this)),this.updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.layerMinMaxScaleChangeHandler()))},r.destroy=function(){this.updatingHandles.removeAll(),this.handles.removeAll(),this._dirty=!1,this._extent=null,this.graphicsCoreOwner=null,this.layer=null,this.queryGraphicUIDsInExtent=null,this.graphicsCore=null,this.basemapTerrain=null},r._setDirty=function(){this._dirty=!0},r.setExtent=function(e){const i=this.graphicsCoreOwner.view.spatialReference,t=this.graphicsCoreOwner.view.basemapTerrain.spatialReference;if(i===t)this._extent=e??null;else{const r=h.create();o.projectBoundingRect(e,i,r,t)?this._extent=r:this._extent=null}this._setDirty()},r.scaleRangeActive=function(){return this._scaleRangeActive},r.updateScaleRangeActive=function(){const e=this.layer,i=e.effectiveScaleRange;let t=this.layerScaleEnabled&&null!=i&&_(i.minScale,i.maxScale);e.labelingInfo&&!t&&(t=e.labelingInfo.some((e=>e&&_(e.minScale??0,e.maxScale??0))));const r=this._scaleRangeActive!==t;return this._scaleRangeActive=t,t&&!this.handles.has(b)&&this.basemapTerrain?(this.handles.add(this.basemapTerrain.on("scale-change",(e=>this._scaleUpdateHandler(e))),b),this.layerScaleEnabled&&this.handles.add(this.basemapTerrain.on("tiles-visibility-changed",(()=>this._setDirty())),b)):!t&&this.handles.has(b)&&this.handles.remove(b),r},r.runTask=function(e){const i=this.graphicsCoreOwner.view.basemapTerrain;if(this._extent&&i&&i.ready&&this._scaleRangeActive&&this.layerScaleEnabled){if(this._layerScaleRangeVisibilityQuery)return y.Task.YIELD;{this._layerScaleRangeVisibilityQuery=!0;const{minScale:e,maxScale:t}=this.layer.effectiveScaleRange;i.queryVisibleScaleRange(this._extent,e,t,(e=>this._finishUpdate(e)))}}else this._finishUpdate(!0);e.madeProgress()},r._finishUpdate=function(e){this._layerScaleRangeVisibilityQuery=!1,this._set("suspended",!e),this._dirty=!1},r._visibleAtLayerScale=function(e){const i=this.layer.effectiveScaleRange;return!this.layerScaleEnabled||u.scaleBoundsPredicate(e,i.minScale||0,i.maxScale||0)},r._visibleAtLabelScale=function(e,i){return u.scaleBoundsPredicate(e,i.minScale||0,i.maxScale||0)},r._graphicScale=function(e){let i;if(a.isSome(e.centroid)?i=e.centroid:a.isSome(e.graphic.geometry)&&"point"===e.graphic.geometry.type&&(i=e.graphic.geometry),i){return this.graphicsCoreOwner.view.basemapTerrain?this.graphicsCoreOwner.view.basemapTerrain.getScale(i):1}return null},r._graphicVisible=function(e){if(!this.layerScaleEnabled)return!0;const i=this._graphicScale(e);return this._visibleAtLayerScale(i)},r.updateVisibility=function(e){if(this._scaleRangeActive){const i=this._graphicVisible(e);return e.setVisibilityFlag(p.VisibilityFlag.SCALE_RANGE,i,p.VisibilityGroup.GRAPHIC)}return!1},r.updateGraphicLabelScaleVisibility=function(e){if(!this._scaleRangeActive)return!1;if(!e.labelLayers||0===e.labelLayers.length)return!1;const i=this._graphicScale(e),t=this._updateLabelScaleVisibility(e,i);return t&&(this.graphicsCoreOwner.view.deconflictor.setDirty(),this.graphicsCoreOwner.view.labeler.setDirty()),t},r._updateLabelScaleVisibility=function(e,i){if(!e.labelLayers||0===e.labelLayers.length)return!1;const t=e.labelLayers[0]._labelClass;if(t&&null!=t.minScale&&null!=t.maxScale){const r=this._visibleAtLabelScale(i,t);if(e.setVisibilityFlag(p.VisibilityFlag.SCALE_RANGE,r,p.VisibilityGroup.LABEL))return!0}return!1},r._scaleUpdateHandler=function(e){if(this._setDirty(),!this.graphicsCore.visible)return;const i=e.extent,t=e.scale,r=this._visibleAtLayerScale(t);let s=!1;const n=this.graphicsCoreOwner.view.spatialReference,l=e.spatialReference;if(a.isNone(l))return void d.error("scaleUpdate: Internal error, no SpatialReference given for tiles");const c=!l.equals(n);if(c){if(!o.projectBoundingRect(i,l,f,n))return void d.error("scaleUpdate: Internal error, cannot project AABR from "+l+" to wkid "+n)}const h=c?f:i;this.queryGraphicUIDsInExtent(h,n,(e=>{const n=this.graphicsCore.getGraphics3DGraphicById(e);if(a.isNone(n))return;const l=n.centroid;a.isSome(l)&&(i[0]>l.x||i[1]>l.y||i[2]<l.x||i[3]<l.y)||(n.setVisibilityFlag(p.VisibilityFlag.SCALE_RANGE,r,p.VisibilityGroup.GRAPHIC)&&(s=!0),this._updateLabelScaleVisibility(n,t)&&(s=!0))})),s&&(this.graphicsCoreOwner.view.deconflictor.setDirty(),this.graphicsCoreOwner.view.labeler.setDirty())},r.layerMinMaxScaleChangeHandler=function(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities((e=>e.clearVisibilityFlag(p.VisibilityFlag.SCALE_RANGE))):this._scaleRangeActive&&this.graphicsCore.updateAllGraphicsVisibility(),this._setDirty()},e._createClass(t,[{key:"updating",get:function(){return this._dirty||this.updatingHandles.updating}},{key:"running",get:function(){return!(!this.graphicsCoreOwner.view.basemapTerrain||!this.updating)}}]),t}(t.HandleOwner);function _(e,i){return e>0||i>0}i.__decorate([s.property()],g.prototype,"graphicsCoreOwner",void 0),i.__decorate([s.property()],g.prototype,"layer",void 0),i.__decorate([s.property()],g.prototype,"queryGraphicUIDsInExtent",void 0),i.__decorate([s.property()],g.prototype,"graphicsCore",void 0),i.__decorate([s.property()],g.prototype,"basemapTerrain",void 0),i.__decorate([s.property({constructOnly:!0})],g.prototype,"layerScaleEnabled",void 0),i.__decorate([s.property({readOnly:!0})],g.prototype,"suspended",void 0),i.__decorate([s.property({readOnly:!0})],g.prototype,"updating",null),i.__decorate([s.property()],g.prototype,"_dirty",void 0),g=i.__decorate([c.subclass("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],g);const b="terrain-events",f=h.create();return g}));
