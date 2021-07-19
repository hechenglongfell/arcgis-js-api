/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,o,t,p,s,i,c){"use strict";let n=function(r){function o(){return r.apply(this,arguments)||this}return e._inheritsLoose(o,r),o}(o.JSONSupport);return r.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"timeDataCumulative",void 0),r.__decorate([t.property({type:Number,json:{write:!0}})],n.prototype,"timeOffset",void 0),r.__decorate([t.property({type:String,json:{write:!0}})],n.prototype,"timeOffsetUnits",void 0),r.__decorate([t.property({type:Boolean,json:{write:!0}})],n.prototype,"useTime",void 0),n=r.__decorate([c.subclass("esri.layers.support.LayerTimeOptions")],n),n}));
