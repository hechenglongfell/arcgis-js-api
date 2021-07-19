/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../CIMPlacements"],(function(t,i){"use strict";function s(t){return void 0!==t.rings}let e=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,i,s){return new n(t,i,s)},t}();e.instance=null;let n=function(){function t(t,e,n){if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._stepX=(void 0!==e.stepX?Math.abs(e.stepX):16)*n,this._stepY=(void 0!==e.stepY?Math.abs(e.stepY):16)*n,0!==this._stepX&&0!==this._stepY&&t&&s(t)&&t.rings){if(this._gridType=void 0!==e.gridType?e.gridType:"Fixed","Random"===this._gridType)this._randomness=void 0!==e.randomness?e.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0;else{if(this._randomness=0,this._gridAngle=void 0!==e.gridAngle?e.gridAngle:0,this._shiftOddRows=void 0!==e.shiftOddRows&&e.shiftOddRows,this._offsetX=void 0!==e.offsetX?e.offsetX*n:0,this._offsetY=void 0!==e.offsetY?e.offsetY*n:0,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginX=0,this._graphicOriginY=0,this._internalPlacement=new i.Placement,this._calculateMinMax(t),this._geometry=t}}var e=t.prototype;return e.next=function(){return this._geometry?this._nextInside():null},e._calculateMinMax=function(t){let i,s,e,n,h,_,r,o;this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,h=_=Number.MAX_VALUE,r=o=-Number.MAX_VALUE;for(const f of t.rings){const t=f?f.length:0;for(let a=0;a<t;++a)i=f[a][0]-this._graphicOriginX-this._offsetX,s=f[a][1]-this._graphicOriginY-this._offsetY,e=this._cosAngle*i-this._sinAngle*s,n=this._sinAngle*i+this._cosAngle*s,h=Math.min(h,e),r=Math.max(r,e),_=Math.min(_,n),o=Math.max(o,n)}h+=this._graphicOriginX,r+=this._graphicOriginX,_+=this._graphicOriginY,o+=this._graphicOriginY,this._xMin=Math.round(h/this._stepX),this._xMax=Math.round(r/this._stepX),this._yMin=Math.round(_/this._stepY),this._yMax=Math.round(o/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1},e._nextInside=function(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null;this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let t=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(t+=.5*this._stepX);const i=this._currentY*this._stepY+this._offsetY;let s,e;return this._currentX++,"Random"===this._gridType?(s=this._graphicOriginX+t+this._stepX*this._randomness*(.5-Math.random())*2/3,e=this._graphicOriginY+i+this._stepY*this._randomness*(.5-Math.random())*2/3):(s=this._graphicOriginX+this._cosAngle*t+this._sinAngle*i,e=this._graphicOriginY-this._sinAngle*t+this._cosAngle*i),this._internalPlacement.setTranslate(s,e),this._internalPlacement}},t}();t.PlacementInsidePolygon=e,Object.defineProperty(t,"__esModule",{value:!0})}));
