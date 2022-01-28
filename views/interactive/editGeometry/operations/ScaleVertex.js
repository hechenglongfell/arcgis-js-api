/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/arrayUtils","../../../../chunks/vec2f64","../../../../chunks/vec2"],(function(t,c,i,a){"use strict";let s=function(){function t(t,c,a,s,o=0){this.origin=t,this.axis1=c,this.factor1=a,this.factor2=s,this.accumulationType=o,this.axis2=i.fromValues(c[1],-c[0])}var s=t.prototype;return s.scale=function(t,c,i){a.projectAndScale(t.pos,t.pos,this.origin,this.axis1,c),a.projectAndScale(t.pos,t.pos,this.origin,this.axis2,i)},s.apply=function(t){this.scale(t,this.factor1,this.factor2)},s.undo=function(t){this.scale(t,1/this.factor1,1/this.factor2)},s.canAccumulate=function(i){return i instanceof t&&c.equals(this.origin,i.origin)&&c.equals(this.axis1,i.axis1)},s.accumulate=function(t,c){1===c.accumulationType?this.scale(t,c.factor1/this.factor1,c.factor2/this.factor2):this.scale(t,c.factor1,c.factor2)},s.accumulateParams=function(t){const c=1===t.accumulationType;this.factor1=c?t.factor1:this.factor1*t.factor1,this.factor2=c?t.factor2:this.factor2*t.factor2},t}();t.ScaleVertex=s,Object.defineProperty(t,"__esModule",{value:!0})}));
