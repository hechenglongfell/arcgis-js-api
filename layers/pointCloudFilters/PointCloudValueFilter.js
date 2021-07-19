/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/has","../../core/Logger","../../core/accessorSupport/decorators/enumeration","../../core/accessorSupport/decorators/subclass","./PointCloudFilter"],(function(e,o,r,t,s,u,i,l,c,n){"use strict";var a;let p=a=function(o){function t(e){var r;return(r=o.call(this,e)||this).mode="exclude",r.type="value",r.values=[],r}return e._inheritsLoose(t,o),t.prototype.clone=function(){return new a({field:this.field,mode:this.mode,values:r.clone(this.values)})},t}(n);return o.__decorate([t.property({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),o.__decorate([l.enumeration({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),o.__decorate([t.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=a=o.__decorate([c.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],p),p}));
