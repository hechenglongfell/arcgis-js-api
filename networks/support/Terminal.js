/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,s,a,p,n){"use strict";let c=function(r){function t(e){var t;return(t=r.call(this,e)||this).id=null,t.name=null,t}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Number,json:{read:{source:"terminalId"},write:{target:"terminalId"}}})],c.prototype,"id",void 0),r.__decorate([o.property({type:String,json:{read:{source:"terminalName"},write:{target:"terminalName"}}})],c.prototype,"name",void 0),r.__decorate([o.property({type:Boolean,json:{write:!0}})],c.prototype,"isUpstreamTerminal",void 0),c=r.__decorate([n.subclass("esri.networks.support.Terminal")],c);return c}));
