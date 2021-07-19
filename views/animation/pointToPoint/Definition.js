/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./Settings"],(function(e,t,o){"use strict";let r=function(){function e(e){this.createCamera=e,this.compared={sourceZoom:0,targetZoom:0,pan:0,rotate:0},this.settings={desiredScreenFlow:o.defaultSettings.desiredScreenFlow},this.source=e(),this.target=e()}var r=e.prototype;return r.clone=function(){const t=new e(this.createCamera);return t.copyFrom(this),t},r.copyFrom=function(e){this.update(e.source,e.target,e.settings)},r.update=function(e,t,r){this.source!==e&&this.source.copyFrom(e),this.target!==t&&this.target.copyFrom(t),this.compared=this.source.compareTo(this.target,this.compared),this.settings.desiredScreenFlow=null!=r.desiredScreenFlow?r.desiredScreenFlow:o.defaultSettings.desiredScreenFlow,this.desiredPixelFlow=this.settings.desiredScreenFlow*this.target.size,this.halfWindowSize=this.target.size/2},r.halfWindowPanAtZoom=function(e){const t=this.target.pixelsPerPanAtZoom(e);return this.halfWindowSize/t},t._createClass(e,[{key:"hasZoom",get:function(){return Math.abs(this.compared.sourceZoom-this.compared.targetZoom)>1e-5}},{key:"hasPan",get:function(){return this.compared.pan>1e-9}},{key:"hasRotate",get:function(){return this.compared.rotate>1e-9}}]),e}();e.Definition=r,Object.defineProperty(e,"__esModule",{value:!0})}));
