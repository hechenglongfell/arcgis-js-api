/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","./Settings","./snappingUtils"],(function(e,t,i,s,r){"use strict";let o=function(){function e(e,t){this.view=e,this.options=t,this.squaredShortLineThreshold=s.defaults.shortLineThreshold*s.defaults.shortLineThreshold}var o=e.prototype;return o.snap=function(e,t){return i.isSome(t.vertexHandle)?"vertex"!==t.vertexHandle.type?[]:this.snapExistingVertex(e,t):this.snapNewVertex(e,t)},o.edgeExceedsShortLineThreshold=function(e,t){return this.exceedsShortLineThreshold(e.leftVertex.pos,e.rightVertex.pos,t)},o.exceedsShortLineThreshold=function(e,t,{elevationInfo:i,editGeometryOperations:s}){const o=s.data.coordinateHelper;return 0===this.squaredShortLineThreshold||r.squareDistance(r.anyMapPointToScreenPoint(t,o,i,this.view),r.anyMapPointToScreenPoint(e,o,i,this.view))>this.squaredShortLineThreshold},o.squaredProximityTreshold=function(e){return"touch"===e?this.squaredTouchProximityThreshold:this.squaredMouseProximityTreshold},t._createClass(e,[{key:"squaredMouseProximityTreshold",get:function(){return this.options.distance*this.options.distance}},{key:"squaredTouchProximityThreshold",get:function(){const{distance:e,touchSensitivityMultiplier:t}=this.options,i=e*t;return i*i}}]),e}();e.SnappingAlgorithm=o,Object.defineProperty(e,"__esModule",{value:!0})}));
