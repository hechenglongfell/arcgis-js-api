/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils","../../geometry/Polyline"],(function(e,r,o,t,p,s,n,l,i,c){"use strict";let u=function(r){function o(e){var o;return(o=r.call(this,e)||this).calculationType=null,o.geodesic=null,o.lengthUnit=null,o.polylines=null,o}return e._inheritsLoose(o,r),o}(t.JSONSupport);r.__decorate([p.property({type:String,json:{write:!0}})],u.prototype,"calculationType",void 0),r.__decorate([p.property({type:Boolean,json:{write:!0}})],u.prototype,"geodesic",void 0),r.__decorate([p.property({json:{write:!0}})],u.prototype,"lengthUnit",void 0),r.__decorate([p.property({type:[c],json:{read:{reader:e=>e?e.map((e=>i.fromJSON(e))):null},write:{writer:(e,r)=>{r.polylines=e.map((e=>e.toJSON()))}}}})],u.prototype,"polylines",void 0),u=r.__decorate([l.subclass("esri.rest.support.LengthsParameters")],u),u.from=s.ensureType(u);return u}));
