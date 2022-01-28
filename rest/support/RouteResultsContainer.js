/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","./FeatureSet","./NAMessage","./RouteResult"],(function(r,e,o,t,s,p,a,i,n,l,u,c,y){"use strict";function d(r){return r&&u.fromJSON(r).features.map((r=>r))}let _=function(e){function o(r){var o;return(o=e.call(this,r)||this).barriers=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.routeResults=null,o}r._inheritsLoose(o,e);var t=o.prototype;return t.readPointBarriers=function(r,e){return d(e.barriers||e.pointBarriers)},t.readPolylineBarriers=function(r){return d(r)},t.readPolygonBarriers=function(r){return d(r)},o}(t.JSONSupport);e.__decorate([s.property({aliasOf:"pointBarriers"})],_.prototype,"barriers",void 0),e.__decorate([s.property({type:[c]})],_.prototype,"messages",void 0),e.__decorate([s.property({type:[o]})],_.prototype,"pointBarriers",void 0),e.__decorate([n.reader("pointBarriers",["barriers","pointBarriers"])],_.prototype,"readPointBarriers",null),e.__decorate([s.property({type:[o]})],_.prototype,"polylineBarriers",void 0),e.__decorate([n.reader("polylineBarriers")],_.prototype,"readPolylineBarriers",null),e.__decorate([s.property({type:[o]})],_.prototype,"polygonBarriers",void 0),e.__decorate([n.reader("polygonBarriers")],_.prototype,"readPolygonBarriers",null),e.__decorate([s.property({type:[y]})],_.prototype,"routeResults",void 0),_=e.__decorate([l.subclass("esri.rest.support.RouteResultsContainer")],_);return _}));
