/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","../FieldInfo","./Content"],(function(e,t,r,o,i,s,n,p,c){"use strict";var l;let d=l=function(t){function o(e){var r;return(r=t.call(this,e)||this).attributes=null,r.description=null,r.fieldInfos=null,r.title=null,r.type="fields",r}e._inheritsLoose(o,t);var i=o.prototype;return i.writeFieldInfos=function(e,t){t.fieldInfos=e&&e.map((e=>e.toJSON()))},i.clone=function(){return new l(r.clone({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))},o}(c);t.__decorate([o.property({type:Object,json:{write:!0}})],d.prototype,"attributes",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"description",void 0),t.__decorate([o.property({type:[p]})],d.prototype,"fieldInfos",void 0),t.__decorate([n.writer("fieldInfos")],d.prototype,"writeFieldInfos",null),t.__decorate([o.property({type:String,json:{write:!0}})],d.prototype,"title",void 0),t.__decorate([o.property({type:["fields"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=l=t.__decorate([s.subclass("esri.popup.content.FieldsContent")],d);return d}));
