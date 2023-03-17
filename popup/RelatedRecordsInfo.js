/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./support/RelatedRecordsInfoFieldOrder"],(function(e,r,o,s,t,c,l,d){"use strict";var p;let n=p=function(r){function o(e){var o;return(o=r.call(this,e)||this).showRelatedRecords=null,o.orderByFields=null,o}return e._inheritsLoose(o,r),o.prototype.clone=function(){return new p({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?s.clone(this.orderByFields):null})},o}(o.JSONSupport);r.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"showRelatedRecords",void 0),r.__decorate([t.property({type:[d],json:{write:!0}})],n.prototype,"orderByFields",void 0),n=p=r.__decorate([l.subclass("esri.popup.RelatedRecordsInfo")],n);return n}));
