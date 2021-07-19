/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Evented","../../../../core/Handles"],(function(e,t,n){"use strict";let s=function(){function e(e){this.handles=new n,this.events=new t,this.contentLayerViews=e.contentLayerViews,this.handles.add(this.contentLayerViews.on("change",(e=>this.layerViewsChanged(e)))),this.layerViewsChanged({added:this.contentLayerViews.toArray(),removed:[],moved:[],target:this.contentLayerViews})}var s=e.prototype;return s.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},s.layerViewsChanged=function(e){e.added.forEach((e=>{"esri.views.3d.layers.SceneLayerView3D"===e.declaredClass&&this.handles.add(e.on("visible-geometry-changed",(()=>this.contentChanged())),e.uid)})),e.removed.forEach((e=>this.handles.remove(e.uid)))},s.contentChanged=function(){this.events.emit("request-update",d)},e}();const d={};e.ContentGeometryUpdates=s,e.default=s,Object.defineProperty(e,"__esModule",{value:!0})}));
