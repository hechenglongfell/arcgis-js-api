/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","../../../geometry/SpatialReference","../../../geometry/support/typeUtils"],(function(e,r,o,t,a,p,c,u,s,y,i,n,l){"use strict";var d;e.QueryTableDataSource=d=function(e){function o(r){var o;return(o=e.call(this,r)||this).type="query-table",o}return r._inheritsLoose(o,e),o.prototype.clone=function(){var e;const{workspaceId:r,query:o,oidFields:t,spatialReference:a,geometryType:p}=this,c={workspaceId:r,query:o,oidFields:t,spatialReference:null!=(e=null==a?void 0:a.clone())?e:void 0,geometryType:p};return new d(c)},o}(a.JSONSupport),o.__decorate([y.enumeration({queryTable:"query-table"})],e.QueryTableDataSource.prototype,"type",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"workspaceId",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"query",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"oidFields",void 0),o.__decorate([p.property({type:n,json:{write:!0}})],e.QueryTableDataSource.prototype,"spatialReference",void 0),o.__decorate([y.enumeration(l.featureGeometryTypeKebabDictionary)],e.QueryTableDataSource.prototype,"geometryType",void 0),e.QueryTableDataSource=d=o.__decorate([i.subclass("esri.layers.support.source.QueryTableDataSource")],e.QueryTableDataSource),Object.defineProperty(e,"__esModule",{value:!0})}));
