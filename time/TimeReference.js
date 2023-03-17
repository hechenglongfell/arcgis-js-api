/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Clonable","../core/JSONSupport","../core/maybe","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./timeReferenceUtils"],(function(e,r,o,t,n,i,c,s,a,p,l,u){"use strict";let m=function(r){function o(e){var o;return(o=r.call(this,e)||this).legacy=null,o.timeZone="system",o}e._inheritsLoose(o,r);var t=o.prototype;return t.readLegacy=function(e,r){const{timeZone:o,respectsDaylightSaving:t}=r;return{timeZone:o,respectsDaylightSaving:t}},t.readTimeZone=function(e,r){return"timeZoneIANA"in r?r.timeZoneIANA:u.convertLegacyTimeZone(r)},t.writeTimeZone=function(e,r){r.timeZoneIANA=e},t.equals=function(e){return!(n.isNone(e)||n.isNone(this.timeZone)||n.isNone(e.timeZone))&&this.timeZone===e.timeZone},o}(o.ClonableMixin(t.JSONSupport));r.__decorate([i.property()],m.prototype,"legacy",void 0),r.__decorate([a.reader("legacy",["timeZone"])],m.prototype,"readLegacy",null),r.__decorate([i.property({type:String,nonNullable:!0})],m.prototype,"timeZone",void 0),r.__decorate([a.reader("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],m.prototype,"readTimeZone",null),r.__decorate([l.writer("timeZone")],m.prototype,"writeTimeZone",null),m=r.__decorate([p.subclass("esri.time.TimeReference")],m);return m}));
