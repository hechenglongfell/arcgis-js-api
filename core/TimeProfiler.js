/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";let n=function(){function n(t,n=.9){this._alpha=.9,this._startTime=0,this._count=0,this._sum=0,this._smooth=0,this._min=0,this._max=0,this._name=t,this._alpha=n,this.reset()}var i=n.prototype;return i.reset=function(){this._count=0,this._sum=0,this._smooth=0,this._min=1/0,this._max=0},i.begin=function(){this._startTime=performance.now()},i.end=function(){const t=performance.now()-this._startTime;this._count+=1,this._sum+=t,this._smooth=this._alpha*t+(1-this._alpha)*this._smooth,this._min=Math.min(this._min,t),this._max=Math.max(this._max,t)},i.toJSON=function(){return{name:this.name,count:this.count,average:this.average,smooth:this.smooth,min:this.min,max:this.max}},t._createClass(n,[{key:"name",get:function(){return this._name}},{key:"count",get:function(){return this._count}},{key:"average",get:function(){return this._count>0?this._sum/this._count:0}},{key:"smooth",get:function(){return this._smooth}},{key:"min",get:function(){return this._min}},{key:"max",get:function(){return this._max}}]),n}();!function(t){const n=1e3,i={},s={};function e(n){return n in i||(i[n]=new t(n)),i[n]}function o(t){e(t).begin()}function h(t,i=!0){e(t).end();const o=performance.now();i&&(!(t in s)||o>=s[t]+n)&&(u(t),s[t]=o)}function u(t){console.log(e(t).toJSON())}function m(){for(const t in i)u(t)}t.get=e,t.begin=o,t.end=h,t.log=u,t.logAll=m}(n||(n={}));return n}));
