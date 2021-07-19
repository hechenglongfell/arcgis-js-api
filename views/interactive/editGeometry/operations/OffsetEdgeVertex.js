/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../../core/maybe","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/plane","../../../../geometry/support/vector","./UpdateVertices","../../../support/geometry2dUtils"],(function(t,e,i,n,s,r,o,c,a,h,l,_){"use strict";let d=function(t){function i(e,i,n,s=0,r=0){var o;return(o=t.call(this,e)||this).planeType=i,o.edge=n,o.distance=s,o._plane=a.create(),o._offsetPlane=a.create(),o._minDistance=-1/0,o._maxDistance=1/0,0===r&&o._initialize(),o}e._inheritsLoose(i,t);var l=i.prototype;return l._initialize=function(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()},l._initializeNeighbors=function(){var t,e,i,n;const s=this._toXYZ(this.edge.left.pos),r=this._toXYZ(null==(t=this.edge.left.left)||null==(e=t.left)?void 0:e.pos),a=this._toXYZ(this.edge.right.pos),h=this._toXYZ(null==(i=this.edge.right.right)||null==(n=i.right)?void 0:n.pos);this._edgeDirection=o.direction(c.create(),s,a),this._left=this._computeNeighbor(s,r,this._edgeDirection),this._right=this._computeNeighbor(a,h,this._edgeDirection)},l._toXYZ=function(t){return n.isSome(t)?this.helper.toXYZ(t):null},l._computeNeighbor=function(t,e,i){if(n.isNone(e))return{start:t,end:e,direction:c.fromValues(-i[1],i[0],0),isOriginalDirection:!0};const s=o.direction(c.create(),t,e),r=!this._passesBisectingAngleThreshold(s,i);return{start:t,end:e,direction:r?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!r}},l._passesBisectingAngleThreshold=function(t,e){const i=Math.abs(h.angle(e,t));return i>=u&&i<=Math.PI-u},l._bisectVectorsPerpendicular=function(t,e){const i=o.dot(t,e)<0?t:o.negate(c.create(),t),n=Math.abs(o.dot(i,e));if(!(n<.001||n>.999))return this._bisectDirection(i,e);const s=o.cross(c.create(),i,[0,0,1]);return o.normalize(s,s)},l._bisectDirection=function(t,e){const i=o.add(c.create(),t,e);return o.normalize(i,i)},l._initializePlane=function(){const t=this._computeNormalDirection(this._left),e=this._computeNormalDirection(this._right);o.dot(t,e)<0&&o.negate(e,e),a.fromPositionAndNormal(this._left.start,this._bisectDirection(t,e),this._plane)},l._computeNormalDirection=function(t){const e=o.cross(c.create(),t.direction,this._edgeDirection);o.normalize(e,e);const i=o.cross(c.create(),this._edgeDirection,e);return 1===this.planeType&&(i[2]=0),o.normalize(i,i)},l._initializeDistanceConstraints=function(){n.isSome(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(a.signedDistance(this._plane,this._left.end)),n.isSome(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(a.signedDistance(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)},l._updateDistanceConstraint=function(t){t<=0&&(this._minDistance=Math.max(this._minDistance,t)),t>=0&&(this._maxDistance=Math.min(this._maxDistance,t))},l._updateIntersectDistanceConstraint=function(t){const e=a.normal(t),i=this._edgeDirection,n=o.add(c.create(),this._left.start,this._left.direction),h=o.add(c.create(),this._right.start,this._right.direction),l=this._pointInBasis2D(r.create(),e,i,this._left.start),d=this._pointInBasis2D(r.create(),e,i,n),u=this._pointInBasis2D(r.create(),e,i,this._right.start),p=this._pointInBasis2D(r.create(),e,i,h),[g]=_.intersectLineAndRay({start:d,end:l,type:1},{start:p,end:u,type:1});if(!g)return;const f=s.subtract(r.create(),l,d);s.normalize(f,f);const m=s.subtract(r.create(),g,d),D=s.dot(f,m),y=o.add(c.create(),n,o.scale(c.create(),this._left.direction,-D)),b=a.signedDistance(t,y);this._updateDistanceConstraint(b)},l._pointInBasis2D=function(t,e,i,n){return t[0]=h.projectPointSignedLength(e,n),t[1]=h.projectPointSignedLength(i,n),t},l._offset=function(t,e){Number.isFinite(this._minDistance)&&(e=Math.max(this._minDistance,e)),Number.isFinite(this._maxDistance)&&(e=Math.min(this._maxDistance,e)),a.copy(this._plane,this._offsetPlane),this._offsetPlane[3]-=e;const i=(t,e,i)=>n.isSome(e)&&a.intersectLine(this._offsetPlane,t,o.add(c.create(),t,e),i),s=c.create();(t===this.edge.left?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this.helper.copy(this.helper.fromXYZ(s,void 0,this.helper.getM(t.pos)),t.pos)},l.signedDistanceToPoint=function(t){return a.signedDistance(this.plane,this.helper.toXYZ(this.helper.fromPoint(t)))},l.apply=function(t){this._offset(t,this.distance)},l.undo=function(t){this._offset(t,0)},l.canAccumulate=function(t){return t instanceof i&&this.edge.left.index===t.edge.left.index&&this.edge.right.index===t.edge.right.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&o.equals(a.normal(this._plane),a.normal(t._plane))},l.accumulate=function(t,e){const i=this._plane[3]-e._plane[3]+e.distance;this._offset(t,i)},l.accumulateParams=function(t){const e=t.distance-t._plane[3];this.distance=e+this._plane[3]},l.clone=function(){const t=new i(this.helper,this.planeType,this.edge,this.distance,1);return a.copy(this._plane,t._plane),a.copy(this._offsetPlane,t._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=o.copy(c.create(),this._edgeDirection),t},l._maybeEqualsVec3=function(t,e){return n.isNone(t)&&n.isNone(e)||n.isSome(t)&&n.isSome(e)&&o.equals(t,e)},l._cloneNeighbor=function({start:t,end:e,direction:i,isOriginalDirection:s}){return{start:o.copy(c.create(),t),end:n.isSome(e)?o.copy(c.create(),e):null,direction:o.copy(c.create(),i),isOriginalDirection:s}},e._createClass(i,[{key:"plane",get:function(){return this._plane}},{key:"requiresSplitEdgeLeft",get:function(){return!this._left.isOriginalDirection}},{key:"requiresSplitEdgeRight",get:function(){return!this._right.isOriginalDirection}},{key:"edgeDirection",get:function(){return this._edgeDirection}}]),i}(l.PerVertexOperation);const u=i.deg2rad(15);t.OffsetEdgeVertex=d,Object.defineProperty(t,"__esModule",{value:!0})}));
