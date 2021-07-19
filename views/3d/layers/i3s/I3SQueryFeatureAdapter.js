/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/centroid","../../../../layers/graphics/OptimizedGeometry","./I3SUtil"],(function(t,e,r,i,n,o){"use strict";let u=function(){function t(t){this.objectIdField=t.objectIdField,this.getFeatureExtent=t.getFeatureExtent}var r=t.prototype;return r.getObjectId=function(t){return t.id},r.getAttributes=function(t){const{meta:r,index:i}=t,n={};this.objectIdField&&(n[this.objectIdField]=t.id);const u=e.isSome(r.attributeInfo)&&r.attributeInfo.attributeData;if(e.isSome(u))for(const e of Object.keys(u))n[e]=o.getCachedAttributeValue(u[e],i);return n},r.getAttribute=function(t,r){if(r===this.objectIdField)return t.id;const{meta:i,index:n}=t,u=e.isSome(i.attributeInfo)&&i.attributeInfo.attributeData;return e.isSome(u)?o.getCachedAttributeValue(u[r],n):null},r.getGeometry=function(t){if(t.geometry)return t.geometry;const[e,r,i,o,u]=this.getFeatureExtent(t,a);return new n([5],[e,r,i,o,r,i,o,u,i,e,u,i,e,r,i])},r.getCentroid=function(t,e){if(t.geometry)return i.getCentroidOptimizedGeometry(new n,t.geometry,e.hasZ,e.hasM);const[r,o,u,c,d,s]=this.getFeatureExtent(t,a);return new n([0],[(r+c)/2,(o+d)/2,(u+s)/2])},r.cloneWithGeometry=function(t,e){const{id:r,index:i,meta:n}=t;return{id:r,index:i,meta:n,geometry:e}},t}();const a=r.create();t.I3SQueryFeatureAdapter=u,Object.defineProperty(t,"__esModule",{value:!0})}));
