/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/Error","../../../../core/has","../../../../core/accessorSupport/decorators/subclass","../css","./TooltipContent","../support/TooltipContentWithHelpMessage","../support/TooltipField","../../../../widgets/support/widgetUtils","../../../../widgets/support/jsxFactory"],(function(t,e,o,s,i,n,r,l,p,a,c,u,T,g,h){"use strict";const d=`${a.CONTENT}--extent-rotate`,C={base:`${a.CONTENT} ${d}`};t.TooltipContentExtentRotate=function(t){function o(){return t.apply(this,arguments)||this}return e._inheritsLoose(o,t),o.prototype.render=function(){const{angle:t,tooltipOptions:e}=this.info,{visibleElements:o}=e,s=this._messagesTooltip.sketch;return h.tsx(u.TooltipContentWithHelpMessage,{className:C.base,helpMessage:this._getHelpMessage()},o.rotation&&h.tsx(T.TooltipField,{title:s.rotation,value:this._formatRelativeOrientation(t)}))},o}(c.TooltipContent),t.TooltipContentExtentRotate=o.__decorate([p.subclass("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],t.TooltipContentExtentRotate),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
