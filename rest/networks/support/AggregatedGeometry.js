/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/Multipoint","../../../geometry/Polygon","../../../geometry/Polyline"],(function(e,o,r,t,p,n,s,l,i,c,u){"use strict";let y=function(o){function r(e){var r;return(r=o.call(this,e)||this).line=null,r.multipoint=null,r.polygon=null,r}return e._inheritsLoose(r,o),r}(r.JSONSupport);return o.__decorate([t.property({type:u,json:{write:!0},readOnly:!0})],y.prototype,"line",void 0),o.__decorate([t.property({type:i,json:{read:{source:"point"},write:{target:"point"}},readOnly:!0})],y.prototype,"multipoint",void 0),o.__decorate([t.property({type:c,json:{write:!0},readOnly:!0})],y.prototype,"polygon",void 0),y=o.__decorate([l.subclass("esri.rest.networks.support.AggregatedGeometry")],y),y}));
