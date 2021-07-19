/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Handles","../../../../core/watchUtils","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/projectionEllipsoid","../../support/FrustumExtentIntersection","../../../support/Scheduler"],(function(e,t,i,s,n,r,o,a,u,c,l,h,d){"use strict";const p=1.2;let y=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).suspended=!1,e.extent=null,e.extentIntersectionDirty=!0,e._isVisibleBelowSurface=!1,e.handles=new s,e.layerView=null,e.updating=!0,e}e._inheritsLoose(i,t);var r=i.prototype;return r.setup=function(e){this.layerView=e,this.extentIntersection=new h.FrustumExtentIntersection({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,i=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this.viewChange())),t.state.watch("camera",(()=>this.viewChange()),!0),s.registerTask(d.TaskPriority.FRUSTUM_VISIBILITY,this),i.on("elevation-bounds-change",(()=>this.elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([n.init(i,["opacity","wireframe"],(()=>this.updateIsVisibleBelowSurface())),n.init(t,"map.ground.navigationConstraint.type",(()=>this.updateIsVisibleBelowSurface()))])},r.destroy=function(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)},r._setDirty=function(){this.updating||this._set("updating",!0)},r.setExtent=function(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()},r.viewChange=function(){this._setDirty()},r.elevationBoundsChange=function(){this._setDirty(),this.extentIntersectionDirty=!0},r.updateIsVisibleBelowSurface=function(){const e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,s=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||s},r.updateExtentIntersection=function(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*l.getReferenceEllipsoid(e.spatialReference).radius;else{const{min:i,max:s}=e.basemapTerrain.elevationBounds;t=i-Math.max(1,(s-i)*(p-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)},r.runTask=function(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=l.getReferenceEllipsoid(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))},e._createClass(i,[{key:"isVisibleBelowSurface",set:function(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}},{key:"running",get:function(){return this.updating}}]),i}(i);return t.__decorate([r.property({readOnly:!0})],y.prototype,"suspended",void 0),t.__decorate([r.property({readOnly:!0})],y.prototype,"updating",void 0),y=t.__decorate([c.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],y),y}));
