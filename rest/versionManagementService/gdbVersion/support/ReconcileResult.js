/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/JSONSupport","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass"],(function(e,o,r,t,s,p,c){"use strict";let n=function(o){function r(e){var r;return(r=o.call(this,e)||this).hasConflicts=!1,r.moment=null,r.didPost=!1,r.success=!1,r}return e._inheritsLoose(r,o),r}(r.JSONSupport);o.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"hasConflicts",void 0),o.__decorate([t.property({type:Date,json:{type:Number,write:{writer:(e,o)=>{o.moment=e?e.getTime():null}}}})],n.prototype,"moment",void 0),o.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"didPost",void 0),o.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"success",void 0),n=o.__decorate([c.subclass("esri.rest.versionManagementService.gdbVersion.support.ReconcileResult")],n);return n}));
