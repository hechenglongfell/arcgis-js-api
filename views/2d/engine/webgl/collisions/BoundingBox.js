/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/mathUtils","../../../../../chunks/vec2f32"],(function(t,i,e){"use strict";return function(){function h(t,i,h,n){this.center=e.fromValues(t,i),this.centerT=e.create(),this.halfWidth=h/2,this.halfHeight=n/2,this.width=h,this.height=n}var n=h.prototype;return n.clone=function(){return new h(this.x,this.y,this.width,this.height)},n.serialize=function(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t},n.findCollisionDelta=function(t,e=4){const h=Math.abs(t.centerT[0]-this.centerT[0]),n=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+e)/h,r=(t.halfHeight+this.halfHeight+e)/n,a=Math.min(s,r);return i.log2(a)},n.extend=function(t){const i=Math.min(this.xmin,t.xmin),e=Math.min(this.ymin,t.ymin),h=Math.max(this.xmax,t.xmax)-i,n=Math.max(this.ymax,t.ymax)-e,s=i+h/2,r=e+n/2;this.width=h,this.height=n,this.halfWidth=h/2,this.halfHeight=n/2,this.x=s,this.y=r},h.deserialize=function(t){return new h(t.readF32(),t.readF32(),t.readInt32(),t.readInt32())},t._createClass(h,[{key:"x",get:function(){return this.center[0]},set:function(t){this.center[0]=t}},{key:"y",get:function(){return this.center[1]},set:function(t){this.center[1]=t}},{key:"blX",get:function(){return this.center[0]+this.halfWidth}},{key:"blY",get:function(){return this.center[1]+this.halfHeight}},{key:"trX",get:function(){return this.center[0]-this.halfWidth}},{key:"trY",get:function(){return this.center[1]-this.halfHeight}},{key:"xmin",get:function(){return this.x-this.halfWidth}},{key:"xmax",get:function(){return this.x+this.halfWidth}},{key:"ymin",get:function(){return this.y-this.halfHeight}},{key:"ymax",get:function(){return this.y+this.halfHeight}}]),h}()}));
