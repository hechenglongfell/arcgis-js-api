/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec2","../../../../chunks/vec2f64","../SnappingConstraint","./SnappingCandidate","../hints/LineSnappingHint","../hints/RightAngleSnappingHint"],(function(n,t,i,e,a,p,r,s){"use strict";let g=function(n){function e({coordinateHelper:t,targetPoint:e,point1:p,point2:r}){var s;return(s=n.call(this,t,e,new a.PlanarCircleConstraint(t,i.lerp(o,p,r,.5),.5*i.distance(p,r)))||this).p1=p,s.p2=r,s}return t._inheritsLoose(e,n),t._createClass(e,[{key:"hints",get:function(){return[new r.LineSnappingHint(1,this.targetPoint,this.p1),new r.LineSnappingHint(1,this.targetPoint,this.p2),new s.RightAngleSnappingHint(this.p1,this.targetPoint,this.p2)]}}]),e}(p.SnappingCandidate);const o=e.create();n.RightAngleTriangleSnappingCandidate=g,Object.defineProperty(n,"__esModule",{value:!0})}));
