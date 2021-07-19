/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],(function(t,e,n,i){"use strict";let o=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n){return new r(t,e,n)},t}();o.instance=null;let r=function(t){function n(e,n,o){var r;return(r=t.call(this,e,!1,!0)||this)._curveHelper=new i.CurveHelper,r._length=(void 0!==n.length?n.length:20)*o,r._angle=void 0!==n.angle?n.angle:225,r._position=void 0!==n.position?n.position:50,r._length<0&&(r._length=-r._length),r._position<20&&(r._position=20),r._position>80&&(r._position=80),r._mirror=!1,r}return e._inheritsLoose(n,t),n.prototype.processPath=function(t){if(this._curveHelper.isEmpty(t,!1))return null;const e=t[0],n=t[t.length-1],i=[n[0]-e[0],n[1]-e[1]];this._curveHelper.normalize(i);const o=[e[0]+(n[0]-e[0])*this._position/100,e[1]+(n[1]-e[1])*this._position/100],r=Math.cos((90-this._angle)/180*Math.PI);let s=Math.sin((90-this._angle)/180*Math.PI);this._mirror&&(s=-s),this._mirror=!this._mirror;return{paths:[[e,[o[0]-this._length/2*r,o[1]-this._length/2*s],[o[0]+this._length/2*r,o[1]+this._length/2*s],n]]}},n}(n.PathGeometryCursor);t.EffectJog=o,Object.defineProperty(t,"__esModule",{value:!0})}));
