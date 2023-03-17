/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/mathUtils","../../../../../core/maybe","../../../../interactive/dragEventPipeline"],(function(t,e,n,a,i){"use strict";function s(t,e){"start"===t.action?e.cursor="grabbing":e.cursor="grab"}let r=function(){function t(){this._lastDragEvent=null,this.next=new i.EventPipeline,this._enabled=!1}var n=t.prototype;return n.createDragEventPipelineStep=function(){return this._lastDragEvent=null,t=>(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled&&this._adjustScaleFactors(t),t)},n._adjustScaleFactors=function(t){const e=0!==t.direction[0]&&0!==t.direction[1]?Math.max(Math.abs(t.factor1),Math.abs(t.factor2)):0===t.direction[0]?Math.abs(t.factor2):Math.abs(t.factor1);t.factor1=t.factor1<0?-e:e,t.factor2=t.factor2<0?-e:e},e._createClass(t,[{key:"enabled",get:function(){return this._enabled},set:function(t){if(this._enabled!==t&&a.isSome(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"};t&&this._adjustScaleFactors(e),this.next.execute(e)}this._enabled=t}}]),t}(),o=function(){function t(){this._lastDragEvent=null,this.next=new i.EventPipeline,this._enabled=!1}var s=t.prototype;return s.createDragEventPipelineStep=function(){return this._lastDragEvent=null,t=>(this._lastDragEvent="end"!==t.action?{...t}:null,this._enabled&&this._adjustRotateAngle(t),t)},s._adjustRotateAngle=function(t){const e=n.rad2deg(t.rotateAngle);t.rotateAngle=n.deg2rad(5*Math.round(e/5))},e._createClass(t,[{key:"enabled",get:function(){return this._enabled},set:function(t){if(this._enabled!==t&&a.isSome(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"};t&&this._adjustRotateAngle(e),this.next.execute(e)}this._enabled=t}}]),t}();t.PreserveAspectRatio=r,t.SnapRotation=o,t.onGrabChangedHandle=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
