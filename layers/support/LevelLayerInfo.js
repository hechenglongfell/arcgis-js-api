/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,l,i,p,s){"use strict";let d=function(r){function t(e){var t;return(t=r.call(this,e)||this).facilityIdField=null,t.layerId=null,t.levelIdField=null,t.levelNumberField=null,t.longNameField=null,t.shortNameField=null,t.sublayerId=null,t.verticalOrderField=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"facilityIdField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"layerId",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"levelIdField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"levelNumberField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"longNameField",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"shortNameField",void 0),r.__decorate([o.property({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"sublayerId",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"verticalOrderField",void 0),d=r.__decorate([s.subclass("esri.layers.support.LevelLayerInfo")],d);return d}));
