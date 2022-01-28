/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./BaseRaster","./InMemoryRaster","./pamParser","../rasterFormats/RasterCodec","../rasterFunctions/pixelUtils","../rasterTransforms/PolynomialTransform","../../../geometry/SpatialReference","../../../geometry/Extent"],(function(e,t,r,s,a,n,o,i,l,c,u,p,f,h,d,y,m,g,x){"use strict";let w=function(t){function r(){return t.apply(this,arguments)||this}e._inheritsLoose(r,t);var o=r.prototype;return o.open=function(){var t=e._asyncToGenerator((function*(e){yield this.init();const t=yield this._fetchData(e);let{spatialReference:r,statistics:s,histograms:a,transform:n}=yield this._fetchAuxiliaryData(e);const o=!r;o&&(r=new g({wkid:3857})),null!=a&&a.length&&null==s&&(s=y.estimateStatisticsFromHistograms(a));const{width:i,height:l}=t;let c=new x({xmin:-.5,ymin:.5-l,xmax:i-.5,ymax:.5,spatialReference:r});const u=n?n.forwardTransform(c):c;let p=!0;if(n){const e=n.forwardCoefficients;p=e&&0===e[1]&&0===e[2],p&&(n=null,c=u)}const h=new f({data:{extent:u,nativeExtent:c,transform:n,pixelBlock:t,statistics:s,histograms:a,keyProperties:{DateType:"Processed"},isPseudoSpatialReference:o}});yield h.open(),this._set("rasterInfo",h.rasterInfo),this._inMemoryRaster=h}));function r(e){return t.apply(this,arguments)}return r}(),o.fetchRawTile=function(e,t,r,s={}){return this._inMemoryRaster.fetchRawTile(e,t,r,s)},o._fetchData=function(){var t=e._asyncToGenerator((function*(e){const{data:t}=yield this.request(this.url,{responseType:"array-buffer",signal:null==e?void 0:e.signal}),r=d.getFormat(t).toUpperCase();if("JPG"!==r&&"PNG"!==r&&"GIF"!==r&&"BMP"!==r)throw new s("image-aux-raster:open","the data is not a supported format");this._set("datasetFormat",r);return yield this.decodePixelBlock(t,{format:"jpg",width:1,height:1,useCanvas:!0})}));function r(e){return t.apply(this,arguments)}return r}(),o._fetchAuxiliaryData=function(){var t=e._asyncToGenerator((function*(e){var t,r;const s=a.unwrap(null==e?void 0:e.signal),o=null!=(t=this.ioConfig.skipExtensions)?t:[],i=o.indexOf("aux.xml")>-1?null:this.request(this.url+".aux.xml",{responseType:"xml",signal:s}),l=this.datasetFormat,c="JPG"===l?"jgw":"PNG"===l?"pgw":"BMP"===l?"bpw":null,u=o.indexOf(c)>-1?null:this.request(this.url.slice(0,this.url.lastIndexOf("."))+"."+c,{responseType:"text",signal:s}),p=yield n.eachAlways([i,u]);if(null!=s&&s.aborted)throw n.createAbortError();const f=h.parsePAMInfo(null==(r=p[0].value)?void 0:r.data);if(!f.transform){const e=p[1].value?p[1].value.data.split("\n").slice(0,6).map((e=>Number(e))):null;f.transform=6===(null==e?void 0:e.length)?new m({forwardCoefficients:[e[4],e[5],e[0],-e[1],e[2],-e[3]]}):null}return f}));function r(e){return t.apply(this,arguments)}return r}(),r}(p);t.__decorate([o.property({type:String,json:{write:!0}})],w.prototype,"datasetFormat",void 0),w=t.__decorate([u.subclass("esri.layers.support.rasterDatasets.ImageAuxRaster")],w);return w}));
