/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/JSONSupport","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,p,s,n,i){"use strict";let u=function(o){function r(e){var r;return(r=o.call(this,e)||this).assetGroupCode=null,r.assetTypeCode=null,r.globalId=null,r.networkSourceId=null,r.objectId=null,r.positionFrom=null,r.positionTo=null,r.terminalId=null,r}return e._inheritsLoose(r,o),r}(r.JSONSupport);o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"assetGroupCode",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"assetTypeCode",void 0),o.__decorate([t.property({type:String,json:{write:!0}})],u.prototype,"globalId",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"networkSourceId",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"objectId",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"positionFrom",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"positionTo",void 0),o.__decorate([t.property({type:Number,json:{write:!0}})],u.prototype,"terminalId",void 0),u=o.__decorate([i.subclass("esri.rest.networks.support.NetworkElement")],u);return u}));
