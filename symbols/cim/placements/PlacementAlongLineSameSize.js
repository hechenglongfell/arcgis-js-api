/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../enums","../GeometryWalker"],(function(t,e,n,i,s){"use strict";let a=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,n,i,s){return new r(t,e,n)},t}();a.instance=null;let r=function(t){function n(e,n,i){var a;return(a=t.call(this,e,!0,!0)||this)._geometryWalker=new s.GeometryWalker,a._geometryWalker.updateTolerance(i),a._angleToLine=n.angleToLine??!0,a._offset=(n.offset?n.offset:0)*i,a._originalEndings=n.endings,a._offsetAtEnd=(n.customEndingOffset?n.customEndingOffset:0)*i,a._position=-(n.offsetAlongLine?n.offsetAlongLine:0)*i,a._pattern=new s.DashPattern,a._pattern.init(n.placementTemplate,!1),a._pattern.scale(i),a._endings=a._originalEndings,a}e._inheritsLoose(n,t);var a=n.prototype;return a.processPath=function(t){if(this._pattern.isEmpty())return null;let e;if(this.iteratePath)e=this._pattern.nextValue();else{this._originalEndings===i.PlacementEndings.WithFullGap&&this.isClosed?this._endings=i.PlacementEndings.WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0;let n,s=!0;switch(this._endings){case i.PlacementEndings.NoConstraint:n=-this._position,n=this._adjustPosition(n),s=!1;break;case i.PlacementEndings.WithHalfGap:default:n=-this._pattern.lastValue()/2;break;case i.PlacementEndings.WithFullGap:n=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue();break;case i.PlacementEndings.WithMarkers:n=0;break;case i.PlacementEndings.Custom:n=-this._position,n=this._adjustPosition(n),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(t,this._pattern,s))return null;this._pattern.reset();let a=0;for(;n>a;)n-=a,a=this._pattern.nextValue();a-=n,e=a,this.iteratePath=!0}const n=new s.Pos;return this._geometryWalker.nextPointAndAngle(e,n)?this._endings===i.PlacementEndings.WithFullGap&&this._geometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===i.PlacementEndings.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(n.pt[0]-this._offset*n.sa,n.pt[1]+this._offset*n.ca),this._angleToLine&&this.internalPlacement.setRotateCS(n.ca,n.sa),this.internalPlacement):(this.iteratePath=!1,null)},a._adjustPosition=function(t){let e=t/this._pattern.length();return e-=Math.floor(e),e*this._pattern.length()},n}(n.PathTransformationCursor);t.PlacementAlongLineSameSize=a,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
