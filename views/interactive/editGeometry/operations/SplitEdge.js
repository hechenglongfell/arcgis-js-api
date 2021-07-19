/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../EditGeometry"],(function(e,t,i){"use strict";let s=function(){function e(e,t,i){this.editGeometry=e,this.edge=t,this.t=i,this.createdVertex=null,this.left=null,this.right=null}var s=e.prototype;return s.apply=function(){let e="redo";const s=this.edge,r=s.component,h=s.component.data,d=s.left,n=s.right;r.edges.splice(r.edges.indexOf(s),1),t.isNone(this.createdVertex)&&(e="apply",this.createdVertex=new i.Vertex(s.component)),r.vertices.push(this.createdVertex),this.createdVertex.pos=h.coordinateHelper.lerp(s.left.pos,s.right.pos,this.t,h.coordinateHelper.createNew()),t.isNone(this.left)&&(this.left=new i.Edge(r,d,this.createdVertex)),this.left.left.left?r.edges.push(this.left):r.edges.unshift(this.left),d.right=this.left,t.isNone(this.right)&&(this.right=new i.Edge(r,this.createdVertex,n)),r.edges.push(this.right),n.left=this.right,r.updateVertexIndex(this.createdVertex,d.index+1);const o={addedVertices:[this.createdVertex],operation:e};this.editGeometry.emit("change",o)},s.undo=function(){if(t.isNone(this.createdVertex)||t.isNone(this.left)||t.isNone(this.right))return null;const e=this.edge,i=e.component,s=this.createdVertex.left,r=this.createdVertex.right,h=s.left,d=r.right;i.vertices.splice(i.vertices.indexOf(this.createdVertex),1),i.edges.splice(i.edges.indexOf(this.left),1),i.edges.splice(i.edges.indexOf(this.right),1),this.edge.left.left?i.edges.push(this.edge):i.edges.unshift(this.edge),h.right=e,d.left=e,i.updateVertexIndex(h,h.index);const n={removedVertices:[this.createdVertex],operation:"undo"};this.editGeometry.emit("change",n)},s.accumulate=function(){return!1},e}();e.SplitEdge=s,Object.defineProperty(e,"__esModule",{value:!0})}));
