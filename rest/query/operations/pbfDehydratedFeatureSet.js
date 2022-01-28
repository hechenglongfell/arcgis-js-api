/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/compilerUtils","../../../core/maybe","../../../core/uid","../../../geometry/SpatialReference","../../../geometry/support/zscale","../../../layers/graphics/dehydratedFeatures","../../../layers/graphics/featureConversionUtils","../../../layers/support/Field"],(function(e,t,r,n,o,i,s,a,h){"use strict";function u(e,t){return t}function c(e,t,r,n){switch(r){case 0:return p(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?p(e,t+n,1):y(e,t+n,1)}}function l(e,t,r,n){return 2===r?p(e,t,2):c(e,t,r,n)}function d(e,t,r,n){return 2===r?p(e,t,3):c(e,t,r,n)}function f(e,t,r,n){return 3===r?p(e,t,3):l(e,t,r,n)}function p({translate:e,scale:t},r,n){return e[n]+r*t[n]}function y({translate:e,scale:t},r,n){return e[n]-r*t[n]}let m=function(){function e(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}var p=e.prototype;return p.createFeatureResult=function(){return new s.DehydratedFeatureSetClass},p.finishFeatureResult=function(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=i.getGeometryZScaler(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!r.isNone(t))for(const r of e.features)t(r.geometry)},p.createSpatialReference=function(){return new o},p.addField=function(e,t){e.fields.push(h.fromJSON(t));const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}},p.addFeature=function(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const n in t.attributes){const e=t.attributes[n];"string"==typeof e&&e.length>r&&(t.attributes[n]="")}e.features.push(t)},p.addQueryGeometry=function(e,t){const{queryGeometry:r,queryGeometryType:n}=t,o=a.unquantizeOptimizedGeometry(r.clone(),r,!1,!1,this.transform),i=a.convertToGeometry(o,n,!1,!1);let s=null;switch(n){case"esriGeometryPoint":s="point";break;case"esriGeometryPolygon":s="polygon";break;case"esriGeometryPolyline":s="polyline";break;case"esriGeometryMultipoint":s="multipoint"}i.type=s,e.queryGeometryType=n,e.queryGeometry=i},p.prepareFeatures=function(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;case"mesh":case"extent":break;default:t.neverReached(e.geometryType)}},p.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new s.DehydratedFeatureClass(n.generateUID(),null,new this.AttributesConstructor)},p.allocateCoordinates=function(){const e=this.lengths.reduce(((e,t)=>e+t),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0},p.addLength=function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)},p.createPointGeometry=function(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t},p.addCoordinatePoint=function(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}},p.transformPathLikeValue=function(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)},p.addCoordinatePolyline=function(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)},p.addCoordinatePolygon=function(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)},p.addCoordinateMultipoint=function(e,t,r){0===r&&e.points.push([]);const n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)},p.createPolygonGeometry=function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},p.createPolylineGeometry=function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},p.createMultipointGeometry=function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},p.dehydratedAddPointsCoordinate=function(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const n=this.transformPathLikeValue(t,r),o=e[e.length-1];0===r&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=n},p.deriveApplyTransform=function(e){const{hasZ:t,hasM:r}=e;return t&&r?f:t?l:r?d:c},e}();e.DehydratedFeatureSetParserContext=m,Object.defineProperty(e,"__esModule",{value:!0})}));
