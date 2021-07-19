/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/workers/workers","./PixelBlock"],(function(r,e,n,o){"use strict";return function(){function t(){this._workerThread=null,this._destroyed=!1}var i=t.prototype;return i.initialize=function(){var e=r._asyncToGenerator((function*(){const r=yield n.open("RasterWorker");this._destroyed?r.close():this._workerThread=r}));function o(){return e.apply(this,arguments)}return o}(),i.destroy=function(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)},i.decode=function(){var n=r._asyncToGenerator((function*(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const t=yield this._workerThread.invoke("decode",r,n);return t?new o(t):null}));function t(r,e){return n.apply(this,arguments)}return t}(),i.symbolize=function(){var n=r._asyncToGenerator((function*(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const t={extent:r.extent&&r.extent.toJSON(),pixelBlock:r.pixelBlock.toJSON(),simpleStretchParams:r.simpleStretchParams,bandIds:r.bandIds},i=yield this._workerThread.invoke("symbolize",t,n);return i?new o(i):null}));function t(r,e){return n.apply(this,arguments)}return t}(),i.updateSymbolizer=function(){var n=r._asyncToGenerator((function*(r,n){var o;if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");const t=null==r||null==(o=r.rendererJSON)?void 0:o.histograms;yield Promise.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:r.toJSON(),histograms:t},n))}));function o(r,e){return n.apply(this,arguments)}return o}(),i.stretch=function(){var n=r._asyncToGenerator((function*(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||!r.pixelBlock)return null;const t={srcPixelBlock:r.pixelBlock.toJSON(),stretchParams:r.stretchParams},i=yield this._workerThread.invoke("stretch",t,n);return i?new o(i):null}));function t(r,e){return n.apply(this,arguments)}return t}(),i.split=function(){var n=r._asyncToGenerator((function*(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||!r.pixelBlock)return null;const t={srcPixelBlock:r.pixelBlock.toJSON(),tileSize:r.tileSize,maximumPyramidLevel:r.maximumPyramidLevel},i=yield this._workerThread.invoke("split",t,n);return i&&i.forEach(((r,e)=>{i.set(e,r?o.fromJSON(r):null)})),Promise.resolve(i)}));function t(r,e){return n.apply(this,arguments)}return t}(),i.estimateStatisticsHistograms=function(){var n=r._asyncToGenerator((function*(r,n){if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||!r.pixelBlock)return null;const o={srcPixelBlock:r.pixelBlock.toJSON()},t=yield this._workerThread.invoke("estimateStatisticsHistograms",o,n);return Promise.resolve(t)}));function o(r,e){return n.apply(this,arguments)}return o}(),i.mosaicAndTransform=function(){var n=r._asyncToGenerator((function*(r,n){var t;if(!this._workerThread)throw new e("raster-jobhandler:no-connection","no available worker connection");if(null==r||null==(t=r.srcPixelBlocks)||!t.length)return null;const i={...r,srcPixelBlocks:r.srcPixelBlocks.map((r=>r?r.toJSON():null))},l=yield this._workerThread.invoke("mosaicAndTransform",i,n);return l?new o(l):null}));function t(r,e){return n.apply(this,arguments)}return t}(),t}()}));
