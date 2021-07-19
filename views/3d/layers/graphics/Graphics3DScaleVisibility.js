/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Handles","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../support/layerViewUtils","../../../support/Scheduler"],(function(e,i,t,a,s,r,l,n,c,h,o,u){"use strict";let p=function(i){function t(){var e;return(e=i.apply(this,arguments)||this)._scaleRangeActive=!1,e.layerScaleRangeVisibilityQuery=!1,e.handles=new a,e.layerView=null,e.layer=null,e.queryGraphicUIDsInExtent=null,e.extent=null,e.graphicsCore=null,e.basemapTerrain=null,e.layerScaleEnabled=!0,e.suspended=!1,e.updating=!0,e}e._inheritsLoose(t,i);var r=t.prototype;return r.setup=function(e,i,t,a,s){this.layerView=e,this.layer=i,this.queryGraphicUIDsInExtent=t,this.graphicsCore=a,this.basemapTerrain=s,this.updateScaleRangeActive();const r=this.layerView.view.resourceController.scheduler;this.handles.add(r.registerTask(u.TaskPriority.SCALE_VISIBILITY,this))},r.destroy=function(){this.handles.destroy(),this.handles=null,this.layerView=null,this.extent=null,this.queryGraphicUIDsInExtent=null,this.graphicsCore=null},r._setDirty=function(){this.updating||this._set("updating",!0)},r.setExtent=function(e){this.extent=e,this._setDirty()},r.scaleRangeActive=function(){return this._scaleRangeActive},r.updateScaleRangeActive=function(){const e=this.layer;let i=this.layerScaleEnabled&&y(e.minScale,e.maxScale);e.labelingInfo&&!i&&(i=e.labelingInfo.some((e=>e&&y(e.minScale,e.maxScale))));const t=this._scaleRangeActive!==i;return this._scaleRangeActive=i,i&&!this.handles.has(d)&&this.basemapTerrain?(this.handles.add(this.basemapTerrain.on("scale-change",(e=>this.scaleUpdateHandler(e))),d),this.layerScaleEnabled&&this.handles.add(this.basemapTerrain.on("tiles-visibility-changed",(()=>this._setDirty())),d)):!i&&this.handles.has(d)&&this.handles.remove(d),t},r.runTask=function(){const e=this.layerView.view.basemapTerrain;this.extent&&e&&e.ready&&this._scaleRangeActive&&this.layerScaleEnabled?this.layerScaleRangeVisibilityQuery||(this.layerScaleRangeVisibilityQuery=!0,e.queryVisibleScaleRange(this.extent,this.layer.minScale,this.layer.maxScale,(e=>this.finishUpdate(e)))):this.finishUpdate(!0)},r.finishUpdate=function(e){this.layerScaleRangeVisibilityQuery=!1,this._set("suspended",!e),this._set("updating",!1)},r.visibleAtLayerScale=function(e){return!this.layerScaleEnabled||o.scaleBoundsPredicate(e,this.layer.minScale||0,this.layer.maxScale||0)},r.visibleAtLabelScale=function(e,i){return o.scaleBoundsPredicate(e,i.minScale||0,i.maxScale||0)},r.graphicScale=function(e){let i;if(s.isSome(e.centroid)?i=e.centroid:s.isSome(e.graphic.geometry)&&"point"===e.graphic.geometry.type&&(i=e.graphic.geometry),i){return this.layerView.view.basemapTerrain?this.layerView.view.basemapTerrain.getScale(i):1}return null},r.graphicVisible=function(e){if(!this.layerScaleEnabled)return!0;const i=this.graphicScale(e);return this.visibleAtLayerScale(i)},r.updateVisibility=function(e){if(this._scaleRangeActive){const i=this.graphicVisible(e);return e.setVisibilityFlag(1,i,0)}return!1},r.updateGraphicLabelScaleVisibility=function(e){if(!this._scaleRangeActive)return!1;if(!e.labelGraphics||0===e.labelGraphics.length)return!1;const i=this.graphicScale(e),t=this.updateLabelScaleVisibility(e,i);return t&&(this.layerView.view.deconflictor.setDirty(),this.layerView.view.labeler.setDirty()),t},r.updateLabelScaleVisibility=function(e,i){if(!e.labelGraphics||0===e.labelGraphics.length)return!1;const t=e.labelGraphics[0]._labelClass;if(t&&null!=t.minScale&&null!=t.maxScale){const a=this.visibleAtLabelScale(i,t);if(e.setVisibilityFlag(1,a,1))return!0}return!1},r.scaleUpdateHandler=function(e){if(this._setDirty(),this.layerView.suspended)return;const i=e.extent,t=e.scale,a=this.visibleAtLayerScale(t);let r=!1;this.queryGraphicUIDsInExtent(i,e.spatialReference,(e=>{const l=this.graphicsCore.getGraphics3DGraphicById(e);if(s.isNone(l))return;const n=l.centroid;s.isSome(n)&&(i[0]>n.x||i[1]>n.y||i[2]<n.x||i[3]<n.y)||(l.setVisibilityFlag(1,a,0)&&(r=!0),this.updateLabelScaleVisibility(l,t)&&(r=!0))})),r&&(this.layerView.view.deconflictor.setDirty(),this.layerView.view.labeler.setDirty())},r.layerMinMaxScaleChangeHandler=function(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities((e=>e.clearVisibilityFlag(1))):this._scaleRangeActive&&this.graphicsCore.updateAllGraphicsVisibility(),this._setDirty()},e._createClass(t,[{key:"running",get:function(){return!(!this.layerView.view.basemapTerrain||!this.updating)}}]),t}(t);function y(e,i){return e>0||i>0}i.__decorate([r.property({constructOnly:!0})],p.prototype,"layerScaleEnabled",void 0),i.__decorate([r.property({readOnly:!0})],p.prototype,"suspended",void 0),i.__decorate([r.property({readOnly:!0})],p.prototype,"updating",void 0),p=i.__decorate([h.subclass("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],p);const d="terrain-events";return p}));
