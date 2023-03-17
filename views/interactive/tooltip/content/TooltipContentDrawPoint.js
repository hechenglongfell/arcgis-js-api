/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/Error","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../css","./TooltipContent","../support/TooltipContentWithHelpMessage","../support/TooltipField","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(t,e,o,s,i,n,r,l,p,a,c,u,g,h,T){"use strict";const d={base:`${a.CONTENT}--draw-point`};t.TooltipContentDrawPoint=function(t){function o(){return t.apply(this,arguments)||this}return e._inheritsLoose(o,t),o.prototype.render=function(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:o}=e,s=this._messagesTooltip.sketch;return T.tsx(u.TooltipContentWithHelpMessage,{className:d.base,helpMessage:this._getHelpMessage()},o.elevation&&T.tsx(g.TooltipField,{title:s.elevation,value:this._formatVerticalLength(t)}))},o}(c.TooltipContent),t.TooltipContentDrawPoint=o.__decorate([p.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],t.TooltipContentDrawPoint),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
