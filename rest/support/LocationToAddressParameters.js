/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./commonProperties","../../geometry/Point","../../geometry/SpatialReference"],(function(e,o,r,t,p,c,n,s,i,a,l){"use strict";let u=function(o){function r(e){var r;return(r=o.call(this,e)||this).apiKey=null,r.location=null,r.locationType=null,r.outSpatialReference=null,r}return e._inheritsLoose(r,o),r}(t.JSONSupport);o.__decorate([p.property(i.apiKey)],u.prototype,"apiKey",void 0),o.__decorate([p.property({type:a,json:{write:{writer:(e,o)=>{const r=e?e.clone().normalize():null,t=void 0!==r;o.location=t?r:null}}}})],u.prototype,"location",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],u.prototype,"locationType",void 0),o.__decorate([p.property({type:l,json:{read:{source:"outSR"},write:{target:"outSR"}}})],u.prototype,"outSpatialReference",void 0),u=o.__decorate([s.subclass("esri.rest.support.LocationToAddressParameters")],u),u.from=c.ensureType(u);return u}));
