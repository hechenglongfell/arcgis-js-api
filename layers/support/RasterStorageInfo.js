/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../geometry/Point"],(function(o,e,r,t,p,i,y,s,a){"use strict";let c=function(e){function r(){var o;return(o=e.apply(this,arguments)||this).blockWidth=void 0,o.blockHeight=void 0,o.compression=null,o.origin=null,o.firstPyramidLevel=null,o.maximumPyramidLevel=null,o.pyramidScalingFactor=2,o.pyramidBlockWidth=null,o.pyramidBlockHeight=null,o.isVirtualTileInfo=!1,o.tileInfo=null,o.blockBoundary=null,o}return o._inheritsLoose(r,e),r}(r.JSONSupport);e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"blockWidth",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"blockHeight",void 0),e.__decorate([t.property({type:String,json:{write:!0}})],c.prototype,"compression",void 0),e.__decorate([t.property({type:a,json:{write:!0}})],c.prototype,"origin",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"firstPyramidLevel",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"maximumPyramidLevel",void 0),e.__decorate([t.property({json:{write:!0}})],c.prototype,"pyramidResolutions",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"pyramidScalingFactor",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"pyramidBlockWidth",void 0),e.__decorate([t.property({type:Number,json:{write:!0}})],c.prototype,"pyramidBlockHeight",void 0),e.__decorate([t.property({type:Boolean,json:{write:!0}})],c.prototype,"isVirtualTileInfo",void 0),e.__decorate([t.property({json:{write:!0}})],c.prototype,"tileInfo",void 0),e.__decorate([t.property()],c.prototype,"blockBoundary",void 0),c=e.__decorate([s.subclass("esri.layers.support.RasterStorageInfo")],c);return c}));
