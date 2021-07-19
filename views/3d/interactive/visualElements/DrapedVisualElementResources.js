/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/Identifiable","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass"],(function(e,r,s,t,o,i,c,n,a,u,d){"use strict";let h=function(){function e(e){this.resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}var s=e.prototype;return s.destroy=function(){this._destroyResources()},s.recreate=function(){this.attached&&this._createResources()},s.recreateGeometry=function(){this.resourceFactory.recreateGeometry?i.isNone(this._resources)||(this.ensureRenderGeometriesRemoved(),this.resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()},s._createOrDestroyResources=function(){this._attached?i.isNone(this._resources)&&this._createResources():this._destroyResources()},s._createResources=function(){var e;this._destroyResources();const r=this.resourceFactory.createResources();this._resources={layerView:new l({view:this.resourceFactory.view}),external:r,geometriesAdded:!1},this._syncGeometriesToRenderer();const s=null==(e=this.resourceFactory.view.basemapTerrain)?void 0:e.overlayManager;s&&s.registerDrapeSource(this._resources.layerView)},s._destroyResources=function(){var e;if(i.isNone(this._resources))return;this.ensureRenderGeometriesRemoved();const r=null==(e=this.resourceFactory.view.basemapTerrain)?void 0:e.overlayManager;r&&r.unregisterDrapeSource(this._resources.layerView),this._resources=null},s._syncGeometriesToRenderer=function(){this._visible?this.ensureRenderGeometriesAdded():this.ensureRenderGeometriesRemoved()},s.ensureRenderGeometriesRemoved=function(){var e;if(i.isNone(this._resources)||null==(e=this.resourceFactory.view)||!e.basemapTerrain)return;if(!this._resources.geometriesAdded)return;this.resourceFactory.view.basemapTerrain.overlayManager.renderer.removeGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!1},s.ensureRenderGeometriesAdded=function(){if(i.isNone(this._resources))return;if(this._resources.geometriesAdded)return;this.resourceFactory.view.basemapTerrain.overlayManager.renderer.addGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!0},r._createClass(e,[{key:"resources",get:function(){return i.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}},{key:"attached",get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}}]),e}(),l=function(e){function s(r){var s;return(s=e.call(this,r)||this).drapeSourceType=1,s.updatePolicy=1,s}return r._inheritsLoose(s,e),s}(o.IdentifiableMixin(t));s.__decorate([c.property({constructOnly:!0})],l.prototype,"view",void 0),s.__decorate([c.property({readOnly:!0})],l.prototype,"drapeSourceType",void 0),l=s.__decorate([d.subclass("DrapedVisualElementLayerView")],l),e.DrapedVisualElementResources=h,Object.defineProperty(e,"__esModule",{value:!0})}));
