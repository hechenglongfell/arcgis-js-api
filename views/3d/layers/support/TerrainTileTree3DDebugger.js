/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/Error","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/support/aaBoundingRect","../../../support/TileTreeDebugger","../../../../geometry/Polygon"],(function(e,r,t,i,s,o,a,n,l,c,u,g,p,T,b){"use strict";e.TerrainTileTree3DDebugger=function(e){function t(r){var t;return(t=e.call(this,r)||this).enablePolygons=!1,t}r._inheritsLoose(t,e);var i=t.prototype;return i.initialize=function(){o.watch((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),o.initial)},i.getTiles=function(){const e=s.isSome(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((r=>({...r,geometry:b.fromExtent(p.toExtent(r.extent,e))})))},t}(T.TileTreeDebugger),e.TerrainTileTree3DDebugger=t.__decorate([g.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],e.TerrainTileTree3DDebugger),Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
