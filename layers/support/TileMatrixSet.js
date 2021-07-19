/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../geometry/Extent","./TileInfo"],(function(e,t,o,r,n,s,l,i,p,c){"use strict";var u;let a=u=function(t){function o(e){var o;return(o=t.call(this,e)||this).fullExtent=null,o.id=null,o.tileInfo=null,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){const e=new u;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e},o}(o.JSONSupport);return t.__decorate([r.property({type:p,json:{read:{source:"fullExtent"}}})],a.prototype,"fullExtent",void 0),t.__decorate([r.property({type:String,json:{read:{source:"id"}}})],a.prototype,"id",void 0),t.__decorate([r.property({type:c,json:{read:{source:"tileInfo"}}})],a.prototype,"tileInfo",void 0),a=u=t.__decorate([i.subclass("esri.layer.support.TileMatrixSet")],a),a}));
