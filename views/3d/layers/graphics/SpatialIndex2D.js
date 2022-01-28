/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/has","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../core/libs/rbush/PooledRBush","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures"],(function(e,t,i,n,s,r,a,o,d,c,u,p){"use strict";e.SpatialIndex2D=function(e){function i(t){var i;return(i=e.call(this,t)||this)._index=new c.PooledRBush(9,s("esri-csp-restrictions")?e=>({minX:e.extent[0],minY:e.extent[1],maxX:e.extent[2],maxY:e.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),i._missing=new Set,i._boundsByFeature=new Map,i.spatialReference=null,i.hasZ=null,i.hasM=null,i.objectIdField=null,i.updating=!1,i}t._inheritsLoose(i,e);var n=i.prototype;return n.setup=function(e){this._addMany(e)},n.destroy=function(){this._missing.clear(),this._index.destroy(),this._index=null,this._boundsByFeature.clear(),this._boundsByFeature=null},n.update=function(){this._missing.size>0&&(this._addMany(Array.from(this._missing.values())),this.updating=!1,this._missing.clear())},n.queryGraphicUIDsInExtent=function(e,t,i){t.equals(this.spatialReference)&&(l.minX=e[0],l.minY=e[1],l.maxX=e[2],l.maxY=e[3],this.update(),this._index.search(l,(e=>i(e.graphic.uid))))},n.add=function(e){this._missing.add(e),this.updating=!0},n.remove=function(e){if(this._missing.delete(e))return void(this.updating=this._missing.size>0);this._index.remove(e);const t=p.getObjectId(e.graphic,this._get("objectIdField"));null!=t&&this._boundsByFeature.delete(t)},n._addMany=function(e){if(0===e.length)return;const t=this._get("objectIdField");for(const i of e){i.computeExtent(this.spatialReference);const e=p.getObjectId(i.graphic,t);null!=e&&this._boundsByFeature.set(e,i.extent)}this._index.load(e)},n.clear=function(){this._index.clear(),this._missing.clear(),this._boundsByFeature.clear(),this.updating=!1},n.forEachInBounds=function(e,t){l.minX=e[0],l.minY=e[1],l.maxX=e[2],l.maxY=e[3],this.update(),this._index.search(l,(e=>{t(e)}))},n.getBounds=function(e,t){this.update();const i=this._boundsByFeature.get(e);return i?u.fromRect(t,i):null},t._createClass(i,[{key:"updatingRemaining",get:function(){return this._missing.size}}]),i}(n),i.__decorate([r.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"spatialReference",void 0),i.__decorate([r.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"hasZ",void 0),i.__decorate([r.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"hasM",void 0),i.__decorate([r.property({constructOnly:!0})],e.SpatialIndex2D.prototype,"objectIdField",void 0),i.__decorate([r.property()],e.SpatialIndex2D.prototype,"updating",void 0),i.__decorate([r.property({readOnly:!0})],e.SpatialIndex2D.prototype,"updatingRemaining",null),e.SpatialIndex2D=i.__decorate([d.subclass("esri.views.3d.layers.graphics.SpatialIndex2D")],e.SpatialIndex2D);const l={minX:0,minY:0,maxX:0,maxY:0};Object.defineProperty(e,"__esModule",{value:!0})}));
