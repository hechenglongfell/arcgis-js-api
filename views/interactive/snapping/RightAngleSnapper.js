/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec2","../../../chunks/vec2f64","./SnappingAlgorithm","./SnappingConstraint","./snappingUtils","./candidates/RightAngleSnappingCandidate"],(function(e,t,r,n,i,o,s,a,p){"use strict";let g=function(e){function o(){var t;return(t=e.apply(this,arguments)||this)._tmp=i.create(),t}t._inheritsLoose(o,e);var g=o.prototype;return g.snapNewVertex=function(e,t){const r=t.editGeometryOperations.data.components[0],n=r.vertices.length,i=[];if(n<2)return i;const o=a.anyMapPointToScreenPoint(e,t.coordinateHelper,t.elevationInfo,this.view),s=r.vertices[n-1];this._checkForSnappingCandidate(i,s.leftEdge,s.pos,e,s.leftEdge.leftVertex.pos,s.pos,t,e,o);const p=r.vertices[0];return this._checkForSnappingCandidate(i,p.rightEdge,p.pos,e,p.rightEdge.rightVertex.pos,p.pos,t,e,o),i},g.snapExistingVertex=function(e,t){const n=[],i=r.unwrap(t.vertexHandle),o=i.component,s=o.vertices.length;if(s<3)return n;const p=a.anyMapPointToScreenPoint(e,t.coordinateHelper,t.elevationInfo,this.view),g=i.leftEdge,h=i.rightEdge,d=o.vertices[0],c=o.vertices[s-1];if(!g)return this._checkForSnappingCandidate(n,d.rightEdge.rightVertex.rightEdge,d.rightEdge.rightVertex.pos,e,d.rightEdge.rightVertex.rightEdge.rightVertex.pos,d.rightEdge.rightVertex.pos,t,e,p),n;if(!h)return this._checkForSnappingCandidate(n,c.leftEdge.leftVertex.leftEdge,c.leftEdge.leftVertex.pos,e,c.leftEdge.leftVertex.leftEdge.leftVertex.pos,c.leftEdge.leftVertex.pos,t,e,p),n;if(g&&g.leftVertex.leftEdge){const r=g.leftVertex.leftEdge;this._checkForSnappingCandidate(n,r,g.leftVertex.pos,e,r.leftVertex.pos,g.leftVertex.pos,t,e,p)}if(h&&h.rightVertex.rightEdge){const r=h.rightVertex.rightEdge;this._checkForSnappingCandidate(n,r,h.rightVertex.pos,e,r.rightVertex.pos,h.rightVertex.pos,t,e,p)}return n},g._checkForSnappingCandidate=function(e,t,r,o,g,h,d,c,l){if(!this.edgeExceedsShortLineThreshold(t,d))return;n.subtract(this._tmp,t.rightVertex.pos,t.leftVertex.pos);const f=i.fromValues(this._tmp[1],-this._tmp[0]),x=n.dot(f,n.subtract(this._tmp,o,r))/n.squaredLength(f),u=d.coordinateHelper,V=u.fromXYZ(n.scaleAndAdd(i.create(),h,f,x),u.getZ(c,0));a.squareDistance(l,a.anyMapPointToScreenPoint(V,u,d.elevationInfo,this.view))<this.squaredProximityTreshold(d.pointer)&&e.push(new p.RightAngleSnappingCandidate({coordinateHelper:u,targetPoint:V,constraint:new s.RayConstraint(u,h,n.scaleAndAdd(u.createVector(),h,f,Math.sign(x))),previousVertex:g,otherVertex:h,otherVertexType:1}))},o}(o.SnappingAlgorithm);e.RightAngleSnapper=g,Object.defineProperty(e,"__esModule",{value:!0})}));
