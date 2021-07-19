/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/workers/workers","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../rest/support/FeatureSet","../../../geometry/Extent"],(function(e,t,o,r,n,i,s,c,u,l,a,p,d){"use strict";let h=function(t){function o(e){var o;return(o=t.call(this,e)||this).type="csv",o}e._inheritsLoose(o,t);var n=o.prototype;return n.load=function(e){const t=i.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)},n.destroy=function(){var e;null==(e=this._connection)||e.close(),this._connection=null},n.openPorts=function(){return this.load().then((()=>this._connection.openPorts()))},n.queryFeatures=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>p.fromJSON(e)))},n.queryFeaturesJSON=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))},n.queryFeatureCount=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))},n.queryObjectIds=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))},n.queryExtent=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:d.fromJSON(e.extent)})))},n.querySnapping=function(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))},n._startWorker=function(){var t=e._asyncToGenerator((function*(e){this._connection=yield s.open("CSVSourceWorker",{strategy:r("feature-layers-workers")?"dedicated":"local",signal:e});const t=yield this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}));function o(e){return t.apply(this,arguments)}return o}(),o}(n);return t.__decorate([c.property()],h.prototype,"type",void 0),t.__decorate([c.property()],h.prototype,"url",void 0),t.__decorate([c.property()],h.prototype,"delimiter",void 0),t.__decorate([c.property()],h.prototype,"fields",void 0),t.__decorate([c.property()],h.prototype,"latitudeField",void 0),t.__decorate([c.property()],h.prototype,"longitudeField",void 0),t.__decorate([c.property()],h.prototype,"spatialReference",void 0),t.__decorate([c.property()],h.prototype,"timeInfo",void 0),t.__decorate([c.property()],h.prototype,"locationInfo",void 0),t.__decorate([c.property()],h.prototype,"sourceJSON",void 0),t.__decorate([c.property()],h.prototype,"columnDelimiter",void 0),h=t.__decorate([a.subclass("esri.layers.graphics.sources.CSVSource")],h),h}));
