/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../../chunks/vec2","../../../../chunks/vec2f64","../SnappingConstraint","./SnappingCandidate","../hints/LineSnappingHint"],(function(n,t,e,i,r,s,a,o){"use strict";let c=function(n){function r({coordinateHelper:t,lineStart:e,lineEnd:i,targetPoint:r}){var a;return(a=n.call(this,t,r,new s.LineConstraint(t,e,i))||this).referenceLineHint=new o.LineSnappingHint(2,e,i),a}return t._inheritsLoose(r,n),r.prototype.lineEndClosestToTarget=function(){const n=this.constraint.start,t=this.constraint.end;return e.sign(i.dot(i.subtract(l,t,n),i.subtract(p,this.targetPoint,n)))>0?t:n},t._createClass(r,[{key:"hints",get:function(){return[this.referenceLineHint,new o.LineSnappingHint(0,this.lineEndClosestToTarget(),this.targetPoint)]}}]),r}(a.SnappingCandidate);const p=r.create(),l=r.create();n.LineSnappingCandidate=c,Object.defineProperty(n,"__esModule",{value:!0})}));
