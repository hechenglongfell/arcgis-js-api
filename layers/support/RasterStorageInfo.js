/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/Point"],(function(o,e,r,t,i,p,n,s){"use strict";var l;let a=l=function(e){function r(){var o;return(o=e.apply(this,arguments)||this).blockWidth=void 0,o.blockHeight=void 0,o.compression=null,o.origin=null,o.firstPyramidLevel=null,o.maximumPyramidLevel=null,o.pyramidScalingFactor=2,o.pyramidBlockWidth=null,o.pyramidBlockHeight=null,o.isVirtualTileInfo=!1,o.tileInfo=null,o.transposeInfo=null,o.blockBoundary=null,o}return o._inheritsLoose(r,e),r.prototype.clone=function(){return new l({blockWidth:this.blockWidth,blockHeight:this.blockHeight,compression:this.compression,origin:t.clone(this.origin),firstPyramidLevel:this.firstPyramidLevel,maximumPyramidLevel:this.maximumPyramidLevel,pyramidResolutions:t.clone(this.pyramidResolutions),pyramidScalingFactor:this.pyramidScalingFactor,pyramidBlockWidth:this.pyramidBlockWidth,pyramidBlockHeight:this.pyramidBlockHeight,isVirtualTileInfo:this.isVirtualTileInfo,tileInfo:t.clone(this.tileInfo),transposeInfo:t.clone(this.transposeInfo),blockBoundary:t.clone(this.blockBoundary)})},r}(r.JSONSupport);e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"blockWidth",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"blockHeight",void 0),e.__decorate([i.property({type:String,json:{write:!0}})],a.prototype,"compression",void 0),e.__decorate([i.property({type:s,json:{write:!0}})],a.prototype,"origin",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"firstPyramidLevel",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"maximumPyramidLevel",void 0),e.__decorate([i.property({json:{write:!0}})],a.prototype,"pyramidResolutions",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"pyramidScalingFactor",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockWidth",void 0),e.__decorate([i.property({type:Number,json:{write:!0}})],a.prototype,"pyramidBlockHeight",void 0),e.__decorate([i.property({type:Boolean,json:{write:!0}})],a.prototype,"isVirtualTileInfo",void 0),e.__decorate([i.property({json:{write:!0}})],a.prototype,"tileInfo",void 0),e.__decorate([i.property()],a.prototype,"transposeInfo",void 0),e.__decorate([i.property()],a.prototype,"blockBoundary",void 0),a=l=e.__decorate([n.subclass("esri.layers.support.RasterStorageInfo")],a);return a}));
