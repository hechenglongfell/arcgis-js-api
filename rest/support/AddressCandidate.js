/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","../../geometry/Point"],(function(e,t,r,o,s,p,c,n,i,u){"use strict";let a=function(t){function r(e){var r;return(r=t.call(this,e)||this).address=null,r.attributes=null,r.extent=null,r.location=null,r.score=null,r}return e._inheritsLoose(r,t),r}(r.JSONSupport);t.__decorate([o.property({type:String,json:{write:!0}})],a.prototype,"address",void 0),t.__decorate([o.property({type:Object,json:{write:!0}})],a.prototype,"attributes",void 0),t.__decorate([o.property({type:i,json:{write:!0}})],a.prototype,"extent",void 0),t.__decorate([o.property({type:u,json:{write:!0}})],a.prototype,"location",void 0),t.__decorate([o.property({type:Number,json:{write:!0}})],a.prototype,"score",void 0),a=t.__decorate([n.subclass("esri.rest.support.AddressCandidate")],a);return a}));
