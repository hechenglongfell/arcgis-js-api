/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],(function(t,e,n,s){"use strict";let i=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n,s,i){return new o(t,e,n)},t}();i.instance=null;let o=function(){function t(t,e,n){this._inputGeometries=t,this._angleTolerance=void 0!==e.angleTolerance?e.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}var i=t.prototype;return i.next=function(){let t=this._inputGeometries.next();for(;t;){if(n.isPolygon(t)){this._isClosed=!0;const n=e.clone(t);return this._processMultipath(n.rings),n}if(n.isPolyline(t)){this._isClosed=!1;const n=e.clone(t);return this._processMultipath(n.paths),n}if(n.isExtent(t)){if(this._maxCosAngle)return t;this._isClosed=!0;const e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];return this._processPath(e),{rings:[e]}}t=this._inputGeometries.next()}return null},i._processMultipath=function(t){if(t)for(const e of t)this._processPath(e)},i._processPath=function(t){if(t){let e,n,i,o,r,l,c=t.length,a=t[0];this._isClosed&&++c;for(let u=1;u<c;++u){let h;h=this._isClosed&&u===c-1?t[0]:t[u];const f=h[0]-a[0],p=h[1]-a[1],_=Math.sqrt(f*f+p*p);if(u>1&&_>0&&i>0){(e*f+n*p)/_/i<=this._maxCosAngle&&s.setId(a,1)}1===u&&(o=f,r=p,l=_),_>0&&(a=h,e=f,n=p,i=_)}if(this._isClosed&&i>0&&l>0){(e*o+n*r)/l/i<=this._maxCosAngle&&s.setId(t[0],1)}}},t}();t.EffectAddControlPoints=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
