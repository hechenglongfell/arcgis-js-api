/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../support/elevationInfoUtils","../../../../interactive/dragEventPipeline"],(function(e,t,n,s,a){"use strict";let i=function(){function e(){this.view=null,this.elevationInfo=null,this.lastDragEvent=null,this.next=new a.EventPipeline,this._enabled=!1}var i=e.prototype;return i.snap=function(e){const t=n.isSome(this.view)?this.view.toMap(e,{exclude:[]}):null;return n.isSome(t)&&n.isSome(this.view)&&(t.z=s.getZForElevationMode(t,this.view,this.elevationInfo)),t},i.createDragEventPipelineStep=function(e,t){return this.view=e,this.elevationInfo=t,this.lastDragEvent=null,e=>{if(this.lastDragEvent="end"!==e.action?{...e}:null,this._enabled){const t=this.snap(e.screenEnd);return n.isSome(t)?{action:e.action,mapStart:e.mapStart,mapEnd:t,screenStart:e.screenStart,screenEnd:e.screenEnd}:null}return{action:e.action,mapStart:e.mapStart,mapEnd:e.mapEnd,screenStart:e.screenStart,screenEnd:e.screenEnd}}},t._createClass(e,[{key:"enabled",get:function(){return this._enabled},set:function(e){if(this._enabled!==e&&n.isSome(this.lastDragEvent)){const t=this.lastDragEvent.mapEnd,s=this.snap(this.lastDragEvent.screenEnd);if(n.isSome(s)){const n={action:"update",mapStart:this.lastDragEvent.mapStart,mapEnd:!0===e?s:t,screenStart:this.lastDragEvent.screenEnd,screenEnd:this.lastDragEvent.screenEnd};this.next.execute(n)}}this._enabled=e}}]),e}();e.SnapToScene=i,Object.defineProperty(e,"__esModule",{value:!0})}));
