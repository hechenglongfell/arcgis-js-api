/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../Color"],(function(e,o){"use strict";const t={main:new o([255,127,0]),selected:new o([255,255,255]),outline:new o([0,0,0,.5]),selectedOutline:new o([255,255,255]),hoverOutline:new o([255,255,255]),secondary:new o([255,255,255]),secondaryOutline:new o([100,100,100]),transparent:new o([0,0,0,0])};function n(e,o){if(o)for(const t in o)e[t]=o[t]}let i=function(e){this.size=8,this.hoverSize=10,this.color=t.main,this.hoverColor=t.main,this.outlineColor=t.outline,this.hoverOutlineColor=t.hoverOutline,n(this,e)},r=function(e){this.color=t.secondary,this.hoverColor=t.main,n(this,e)},s=function(e){this.color=t.transparent,this.hoverColor=t.transparent,this.outlineColor=t.main,this.hoverOutlineColor=t.main,this.stagedColor=t.transparent,this.stagedOutlineColor=t.secondary,n(this,e)},l=function(e){this.vertex=new i,this.midpoint=new i({color:t.secondary,outlineColor:t.secondaryOutline,size:6}),this.selected=new i({color:t.selected,hoverColor:t.selected,hoverOutlineColor:t.hoverOutline}),n(this,e)},h=function(e){this.center=new i({color:t.secondaryOutline}),this.fill=new s,this.line=new r,this.vertex=new i({color:t.selected,outlineColor:t.main,hoverColor:t.selected,hoverOutlineColor:t.secondaryOutline}),n(this,e)};const c=new function(e){this.reshapeGraphics=new l,this.transformGraphics=new h,n(this,e)};e.colors=t,e.settings=c,Object.defineProperty(e,"__esModule",{value:!0})}));
