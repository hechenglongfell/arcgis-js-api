/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Clonable","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/reader","../../core/accessorSupport/decorators/subclass","../../core/accessorSupport/decorators/writer","./domains","./FeatureTemplate"],(function(e,o,r,t,s,n,a,p,c,i,u,l){"use strict";let d=function(o){function r(e){var r;return(r=o.call(this,e)||this).id=null,r.name=null,r.domains=null,r.templates=null,r}e._inheritsLoose(r,o);var t=r.prototype;return t.readDomains=function(e){const o={};for(const r of Object.keys(e))o[r]=u.fromJSON(e[r]);return o},t.writeDomains=function(e,o){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());o.domains=r},r}(r.ClonableMixin(t.JSONSupport));o.__decorate([s.property({json:{write:!0}})],d.prototype,"id",void 0),o.__decorate([s.property({json:{write:!0}})],d.prototype,"name",void 0),o.__decorate([s.property({json:{write:!0}})],d.prototype,"domains",void 0),o.__decorate([p.reader("domains")],d.prototype,"readDomains",null),o.__decorate([i.writer("domains")],d.prototype,"writeDomains",null),o.__decorate([s.property({type:[l],json:{write:!0}})],d.prototype,"templates",void 0),d=o.__decorate([c.subclass("esri.layers.support.FeatureType")],d);return d}));
