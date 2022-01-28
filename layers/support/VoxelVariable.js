/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./VoxelFormat"],(function(e,r,t,o,p,i,s,n,a){"use strict";let c=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).id=null,e.description="",e.name=null,e.originalFormat=null,e.renderingFormat=null,e.unit="",e.volumeId=0,e.type=null,e}return e._inheritsLoose(t,r),t}(t.JSONSupport);r.__decorate([o.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"id",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"description",void 0),r.__decorate([o.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"name",void 0),r.__decorate([o.property({type:a,json:{write:!0}})],c.prototype,"originalFormat",void 0),r.__decorate([o.property({type:a,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"renderingFormat",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],c.prototype,"unit",void 0),r.__decorate([o.property({type:Number,json:{write:!0}})],c.prototype,"volumeId",void 0),r.__decorate([o.property({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],c.prototype,"type",void 0),c=r.__decorate([n.subclass("esri.layers.support.VoxelVariable")],c);return c}));
