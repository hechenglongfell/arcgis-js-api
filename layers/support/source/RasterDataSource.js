/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,a,s,c,p,u,n){"use strict";var i;e.RasterDataSource=i=function(e){function t(r){var t;return(t=e.call(this,r)||this).type="raster",t}return r._inheritsLoose(t,e),t.prototype.clone=function(){const{workspaceId:e,dataSourceName:r}=this;return new i({workspaceId:e,dataSourceName:r})},t}(o.JSONSupport),t.__decorate([u.enumeration({raster:"raster"})],e.RasterDataSource.prototype,"type",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],e.RasterDataSource.prototype,"dataSourceName",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],e.RasterDataSource.prototype,"workspaceId",void 0),e.RasterDataSource=i=t.__decorate([n.subclass("esri.layers.support.source.RasterDataSource")],e.RasterDataSource),Object.defineProperty(e,"__esModule",{value:!0})}));
