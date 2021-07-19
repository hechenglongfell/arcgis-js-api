/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry","../../../../../core/has","../../../../../core/maybe","../../../../../layers/graphics/centroid","../../../../../layers/graphics/featureConversionUtils","../../../../../layers/graphics/OptimizedGeometry","./StaticBitSet","../../../../../geometry/support/jsonUtils"],(function(t,e,n,i,r,s,o,d,u,a){"use strict";let c=0,h=function(){function t(t){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this.instance=t}t.createInstance=function(){return c++,c=c>65535?0:c,c};var n=t.prototype;return n.setArcadeSpatialReference=function(t){this._arcadeSpatialReference=t},n.attachStorage=function(t){this._storage=t},n.getQuantizationTransform=function(){throw new Error("Unable to find transform for featureSet")},n.getStorage=function(){return this._storage},n.getComputedNumeric=function(t){return this.getComputedNumericAtIndex(0)},n.setComputedNumeric=function(t,e){return this.setComputedNumericAtIndex(e,0)},n.getComputedString=function(t){return this.getComputedStringAtIndex(0)},n.setComputedString=function(t,e){return this.setComputedStringAtIndex(0,e)},n.getComputedNumericAtIndex=function(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)},n.setComputedNumericAtIndex=function(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)},n.getComputedStringAtIndex=function(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)},n.setComputedStringAtIndex=function(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)},n.transform=function(t,e,n,i){const r=this.copy();return r._tx+=t,r._ty+=e,r._sx*=n,r._sy*=i,r},n.readAttribute=function(t,e=!1){const n=this._readAttribute(t,e);if(void 0!==n)return n;for(const i of this._joined){i.setIndex(this.getIndex());const n=i._readAttribute(t,e);if(void 0!==n)return n}},n.readAttributes=function(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const n=e._readAttributes();for(const e of Object.keys(n))t[e]=n[e]}return t},n.joinAttributes=function(t){this._joined.push(t)},n.readArcadeFeature=function(){return this},n.geometry=function(){const t=this.readHydratedGeometry(),e=o.convertToGeometry(t,this.geometryType,this.hasZ,this.hasM),n=a.fromJSON(e);return n&&(n.spatialReference=this._arcadeSpatialReference),n},n.field=function(t){return this.readAttribute(t,!0)},n.hasField=function(t){return!0},n.setField=function(t,e){},n.keys=function(){return[]},n.castToText=function(){return""},n.removeIds=function(t){if(r.isNone(this._objectIdToIndex)){const t=new Map,e=this.getCursor();for(;e.next();)t.set(e.getObjectId(),e.getIndex());this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const n of t)e.has(n)&&this.removeAtIndex(e.get(n))},n.removeAtIndex=function(t){r.isNone(this._deleted)&&(this._deleted=u.StaticBitSet.create(this.getSize())),this._deleted.set(t)},n.features=function*(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()},n._getExists=function(){return r.isNone(this._deleted)||!this._deleted.has(this.getIndex())},n._computeCentroid=function(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=r.unwrapOr(this.getQuantizationTransform(),null);return s.getCentroidOptimizedGeometry(new d,t,this.hasM,this.hasZ,e)},n.copyInto=function(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex},e._createClass(t,[{key:"isEmpty",get:function(){return r.isSome(this._deleted)&&this._deleted.countSet()===this.getSize()}}]),t}();t.FeatureSetReader=h,Object.defineProperty(t,"__esModule",{value:!0})}));
