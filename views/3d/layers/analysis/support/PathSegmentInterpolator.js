/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/projection","../../../../../geometry/projectionEllipsoid","../../../support/mathUtils"],(function(t,o,e,i,s,n){"use strict";let r=function(){function t(t,i){this._startPosition=e.create(),this._endPosition=e.create(),o.copy(this._startPosition,t),o.copy(this._endPosition,i)}return t.prototype.eval=function(t,e){o.lerp(e,this._startPosition,this._endPosition,t)},t}(),c=function(){function t(t,o,n,r){this._startPosition=e.create(),this._endPosition=e.create();const c=s.getSphericalPCPF(n);i.projectVectorToVector(t,n,this._startPosition,c),i.projectVectorToVector(o,n,this._endPosition,c),this._destSR=s.getSphericalPCPF(r)}return t.prototype.eval=function(t,o){n.slerp(this._startPosition,this._endPosition,t,o),i.projectVectorToVector(o,this._destSR,o,this._destSR)},t}();t.Linear=r,t.Spherical=c,Object.defineProperty(t,"__esModule",{value:!0})}));
