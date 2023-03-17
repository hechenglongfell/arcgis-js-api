/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/maybe","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/Error","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../css","./TooltipContent","../support/TooltipContentWithHelpMessage","../support/TooltipField","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(t,e,o,s,i,r,l,n,a,p,c,u,T,h,g,d){"use strict";const m=`${c.CONTENT}--translate-vertex`,v={base:`${c.CONTENT} ${m}`};t.TooltipContentTranslateVertex=function(t){function o(){return t.apply(this,arguments)||this}return e._inheritsLoose(o,t),o.prototype.render=function(){const{distance:t,elevation:e,area:o,totalLength:i,tooltipOptions:r}=this.info,{visibleElements:l}=r,n=this._messagesTooltip.sketch;return d.tsx(T.TooltipContentWithHelpMessage,{className:v.base,helpMessage:this._getHelpMessage()},l.distance&&d.tsx(h.TooltipField,{title:n.distance,value:this._formatLength(t)}),l.elevation&&s.isSome(e)&&d.tsx(h.TooltipField,{title:n.elevation,value:this._formatVerticalLength(e)}),l.area&&s.isSome(o)&&d.tsx(h.TooltipField,{title:n.area,value:this._formatArea(o)}),l.totalLength&&s.isSome(i)&&d.tsx(h.TooltipField,{title:n.totalLength,value:this._formatLength(i)}))},o}(u.TooltipContent),t.TooltipContentTranslateVertex=o.__decorate([p.subclass("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],t.TooltipContentTranslateVertex),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
