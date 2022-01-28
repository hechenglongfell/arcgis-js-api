/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/support/jsonUtils"],(function(e,r,t,o,s,p,i,n,c){"use strict";let u=function(r){function t(e){var t;return(t=r.call(this,e)||this).bevelRatio=null,t.geometries=null,t.offsetDistance=null,t.offsetHow=null,t.offsetUnit=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Number,json:{write:!0}})],u.prototype,"bevelRatio",void 0),r.__decorate([o.property({json:{read:{reader:e=>e?e.map((e=>c.fromJSON(e))):null},write:{writer:(e,r)=>{r.geometries=e.map((e=>e.toJSON()))}}}})],u.prototype,"geometries",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],u.prototype,"offsetDistance",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"offsetHow",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],u.prototype,"offsetUnit",void 0),u=r.__decorate([n.subclass("esri.rest.support.OffsetParameters")],u),u.from=i.ensureType(u);return u}));
