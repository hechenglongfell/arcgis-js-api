/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,a,c,s,p,u,n){"use strict";var i;e.TableDataSource=i=function(e){function o(r){var o;return(o=e.call(this,r)||this).type="table",o}return r._inheritsLoose(o,e),o.prototype.clone=function(){const{workspaceId:e,gdbVersion:r,dataSourceName:o}=this;return new i({workspaceId:e,gdbVersion:r,dataSourceName:o})},o}(t.JSONSupport),o.__decorate([u.enumeration({table:"table"})],e.TableDataSource.prototype,"type",void 0),o.__decorate([a.property({type:String,json:{write:!0}})],e.TableDataSource.prototype,"workspaceId",void 0),o.__decorate([a.property({type:String,json:{write:!0}})],e.TableDataSource.prototype,"gdbVersion",void 0),o.__decorate([a.property({type:String,json:{write:!0}})],e.TableDataSource.prototype,"dataSourceName",void 0),e.TableDataSource=i=o.__decorate([n.subclass("esri.layers.support.source.TableDataSource")],e.TableDataSource),Object.defineProperty(e,"__esModule",{value:!0})}));
