/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./commonProperties","../../geometry/Point","../../geometry/SpatialReference"],(function(e,o,r,t,p,c,n,s,i,a,l,u){"use strict";let y=function(o){function r(e){var r;return(r=o.call(this,e)||this).apiKey=null,r.location=null,r.locationType=null,r.outSpatialReference=null,r}return e._inheritsLoose(r,o),r}(t.JSONSupport);return o.__decorate([p.property(a.apiKey)],y.prototype,"apiKey",void 0),o.__decorate([p.property({type:l,json:{write:{writer:(e,o)=>{const r=e?e.clone().normalize():null,t=void 0!==r;o.location=t?r:null}}}})],y.prototype,"location",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],y.prototype,"locationType",void 0),o.__decorate([p.property({type:u,json:{read:{source:"outSR"},write:{target:"outSR"}}})],y.prototype,"outSpatialReference",void 0),y=o.__decorate([i.subclass("esri.rest.support.LocationToAddressParameters")],y),y.from=n.ensureType(y),y}));
