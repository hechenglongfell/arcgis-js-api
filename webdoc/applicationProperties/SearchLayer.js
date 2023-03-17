/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./SearchLayerField"],(function(e,r,o,t,s,i,p,c){"use strict";var n;let u=n=function(r){function o(e){var o;return(o=r.call(this,e)||this).field=null,o.id=null,o.subLayer=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new n(t.clone({field:this.field,id:this.id,subLayer:this.subLayer}))},o}(o.JSONSupport);r.__decorate([s.property({type:c,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),r.__decorate([s.property({type:String,json:{write:{isRequired:!0}}})],u.prototype,"id",void 0),r.__decorate([s.property({type:i.Integer,json:{write:!0}})],u.prototype,"subLayer",void 0),u=n=r.__decorate([p.subclass("esri.webdoc.applicationProperties.SearchLayer")],u);return u}));
