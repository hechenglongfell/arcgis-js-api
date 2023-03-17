/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/arrayUtils","../../../core/Handles","../../../core/handleUtils","../../../core/maybe","../../../core/reactiveUtils","../../../geometry/ellipsoidUtils","../layers/graphics/ObjectResourceCache","./index","./StreamTextureCollection","../webgl-engine/lib/screenSizePerspectiveUtils","../../webgl/enums"],(function(e,t,s,r,i,n,c,a,l,o,u,p,h){"use strict";let d=function(){function e(e){this.textures=null,this.streamDataRequester=null,this._graphicsOwners=[],this._screenSizePerspectiveHandles=null,this.cimSymbolRasterizer=null,this._viewState=e.viewState,this._view=e.view,this._pointsOfInterest=e.pointsOfInterest,this.streamDataRequester=e.resourceController.createStreamDataRequester(o.ClientType.SYMBOLOGY),this.objectResourceCache=new l.ObjectResourceCache(((t,s)=>e.resourceController.memoryController.newCache(t,s))),this.textures=new u.StreamTextureCollection(this.streamDataRequester,e.view._stage,{preMultiplyAlpha:!0,wrap:{s:h.TextureWrapMode.CLAMP_TO_EDGE,t:h.TextureWrapMode.CLAMP_TO_EDGE}},e.resourceController.scheduler);const t=a.getReferenceEllipsoid(this._view.spatialReference).radius;this.screenSizePerspectiveSettings=p.getSettings(e.viewingMode,t),this.screenSizePerspectiveSettingsLabels=p.getLabelSettings(e.viewingMode,t)}var d=e.prototype;return d.destroy=function(){n.destroyMaybe(this.textures),this.textures=null,this.streamDataRequester=null},d.addGraphicsOwner=function(e){if(!e)return i.makeHandle();this._graphicsOwners.push(e);const t=c.watch((()=>e.layer?.screenSizePerspectiveEnabled),(()=>this._updateScreenSizePerspectiveEnabled()));return this._updateScreenSizePerspectiveEnabled(),i.makeHandle((()=>{t.remove(),s.removeUnordered(this._graphicsOwners,e),this._updateScreenSizePerspectiveEnabled()}))},d._updateScreenSizePerspectiveEnabled=function(){const e=this._graphicsOwners.some((e=>!0===e.layer?.screenSizePerspectiveEnabled));if(e&&!this._screenSizePerspectiveHandles){this._screenSizePerspectiveHandles=new r;const e=()=>this._updateScreenSizePerspectiveSettings();this._screenSizePerspectiveHandles.add([c.watch((()=>this._pointsOfInterest.centerOnSurfaceInfrequent.distance),e,c.sync),this._viewState.events.on("camera-projection-changed",e)]),this._updateScreenSizePerspectiveSettings()}else e||(this._screenSizePerspectiveHandles=n.destroyMaybe(this._screenSizePerspectiveHandles))},d._updateScreenSizePerspectiveSettings=function(){const e=this._pointsOfInterest;S.distance=e.centerOnSurfaceInfrequent.distance,S.fovY=this._viewState.camera.fovY,this.screenSizePerspectiveSettings.update(S),this.screenSizePerspectiveSettingsLabels.update(S),this._view._stage.renderView.requestRender()},t._createClass(e,[{key:"test",get:function(){return{screenSizePerspectiveHandles:this._screenSizePerspectiveHandles}}}]),e}();const S={distance:0,fovY:0};e.SharedSymbolResources=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
