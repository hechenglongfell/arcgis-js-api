/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../rest/support/fileFormat","../../rest/support/layoutTemplate"],(function(o,r,e,t,p,s,l,a,u,c){"use strict";let i=function(r){function e(o){var e;return(e=r.call(this,o)||this).description=null,e.format=null,e.label=null,e.layout=null,e.layoutOptions=null,e}return o._inheritsLoose(e,r),e}(e.JSONSupport);r.__decorate([t.property()],i.prototype,"description",void 0),r.__decorate([t.property({json:{read:u.fromJSON}})],i.prototype,"format",void 0),r.__decorate([t.property()],i.prototype,"label",void 0),r.__decorate([t.property({json:{read:c.fromJSON}})],i.prototype,"layout",void 0),r.__decorate([t.property()],i.prototype,"layoutOptions",void 0),i=r.__decorate([a.subclass("esri.widgets.Print.CustomTemplate")],i);return i}));
