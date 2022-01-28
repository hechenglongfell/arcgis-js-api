/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/time","../easing","./Definition","./Settings","./apex/Path"],(function(t,i,e,n,a,s,o){"use strict";const r={zoom:0,pan:0,rotate:0};let u=function(){function t(t){this.createCamera=t,this._time=e.Milliseconds(0),this.definition=new a.Definition(t),this.path=new o.Path}var u=t.prototype;return u.update=function(t,i,a){this.definition.update(t,i,a),this.path.update(this.definition,a),this._time=this._applyTimeSettings(e.MillisecondsFromSeconds(this.path.time),a),this._easing=a.easing?a.easing:this._time>=1e3?n.inOutCoastQuad:n.outExpo},u.cameraAt=function(t,i){i=i||this.createCamera(),t=Math.min(Math.max(0,t),1),t=this._normalizedEasing(t);const e=this.path.interpolateComponentsAt(t,r);return i.interpolate(this.definition.source,this.definition.target,e),i},u._normalizedEasing=function(t){const i=this._easing(0,this._time),e=this._easing(1,this._time);return(this._easing(t,this._time)-i)/(e-i)},u._applyTimeSettings=function(t,i){const n=null!=i.speedFactor?i.speedFactor:1;null!=i.duration?t=i.duration:null!=i.speedFactor&&(t=e.Milliseconds(t/n));const a=null!=i.minDuration?i.minDuration:s.defaultSettings.minDuration/n,o=null!=i.maxDuration?i.maxDuration:s.defaultSettings.maxDuration/n;return e.Milliseconds(Math.min(Math.max(a,t),o))},i._createClass(t,[{key:"time",get:function(){return this._time}}]),t}();t.Animation=u,Object.defineProperty(t,"__esModule",{value:!0})}));
