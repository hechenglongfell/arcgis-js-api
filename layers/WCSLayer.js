/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/maybe","../core/MultiOriginJSONSupport","../core/accessorSupport/decorators/aliasOf","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Layer","./mixins/CustomParametersMixin","./mixins/ImageryTileMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","./support/Field","./support/rasterDatasets/WCSRaster","../support/popupUtils"],(function(e,r,t,o,a,s,i,n,p,l,c,u,d,y,m,g,f,h,v,_,P,O){"use strict";let S=function(r){function a(...e){var t;return(t=r.call(this,...e)||this).coverageId=null,t.coverageInfo=null,t.version=null,t.isReference=null,t.type="wcs",t.popupEnabled=!0,t.popupTemplate=null,t.fields=null,t}e._inheritsLoose(a,r);var s=a.prototype;return s.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},s.load=function(e){const r=o.isSome(e)?e.signal:null;return this.addResolvingPromise(this._openRaster(r)),Promise.resolve(this)},s.createPopupTemplate=function(e){return O.createPopupTemplate({fields:this.rasterFields,title:this.title},e)},s._openRaster=function(){var r=e._asyncToGenerator((function*(e){const r=new P({url:this.url,version:this.version,coverageId:this.coverageId,ioConfig:{sampling:"closest",...this.ioConfig,customFetchParameters:this.customParameters}});if(yield r.open({signal:e}),!r.rasterInfo)throw r.destroy(),new t("wcs-layer:load","cannot load resources on "+this.url);null==this.title&&this.setAtOrigin("title",r.datasetName,"service"),null==this.coverageId&&this.setAtOrigin("coverageId",r.coverageInfo.id,"service"),this.raster=r,this._configDefaultSettings(),this.watch("customParameters",(e=>this.raster.ioConfig.customFetchParameters=e))}));function o(e){return r.apply(this,arguments)}return o}(),e._createClass(a,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"rasterFields",get:function(){return[new _({name:"Raster.ServicePixelValue",alias:"Pixel Value",domain:null,editable:!1,length:50,type:"string"})]}}]),a}(h.ScaleRangeLayer(f.RefreshableLayer(m.OperationalLayer(g.PortalLayer(d.CustomParametersMixin(y.ImageryTileMixin(a.MultiOriginJSONMixin(u))))))));return r.__decorate([l.property({json:{write:!0}})],S.prototype,"coverageId",void 0),r.__decorate([l.property({readOnly:!0}),s.aliasOf("raster.coverageInfo")],S.prototype,"coverageInfo",void 0),r.__decorate([l.property()],S.prototype,"version",void 0),r.__decorate([l.property()],S.prototype,"isReference",void 0),r.__decorate([l.property({readOnly:!0})],S.prototype,"type",void 0),r.__decorate([l.property(v.popupEnabled)],S.prototype,"popupEnabled",void 0),r.__decorate([l.property()],S.prototype,"popupTemplate",void 0),r.__decorate([l.property({readOnly:!0})],S.prototype,"defaultPopupTemplate",null),r.__decorate([l.property({readOnly:!0,type:[_]})],S.prototype,"fields",void 0),r.__decorate([l.property({readOnly:!0,type:[_]})],S.prototype,"rasterFields",null),S=r.__decorate([c.subclass("esri.layers.WCSLayer")],S),S}));
