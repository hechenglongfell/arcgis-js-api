/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../intl","../../../core/mathUtils","../../../core/maybe","../../../core/timeUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../intl/duration","../../Widget","../css","../../support/widgetUtils","../../support/decorators/messageBundle","../../support/jsxFactory","../../../intl/substitute"],(function(t,e,o,s,r,n,i,a,c,u,d,l,p,m,h,_,S,T,w){"use strict";const y=i.convertTime(1,"minutes","milliseconds"),g=i.convertTime(15,"minutes","milliseconds");t.ShadowTooltipContent=function(t){function o(e,o){var s;return(s=t.call(this,e,o)||this).accumulatedShadowTime=null,s._messages=null,s}return e._inheritsLoose(o,t),o.prototype.render=function(){const t=this._formattedContent;return T.tsx("div",{class:h.TOOLTIP_CSS.base},t&&T.tsx("div",{class:h.TOOLTIP_CSS.content},t))},e._createClass(o,[{key:"_formattedContent",get:function(){const t=this._messages,e=this.accumulatedShadowTime;if(n.isNone(t)||n.isNone(e))return null;const o=e<g?r.roundToNearest(e,y):r.roundToNearest(e,g);return w.substitute(t.timeInShadow,{duration:p.formatDuration(o,{round:!0,largest:2},"milliseconds")})}}]),o}(m),o.__decorate([a.property()],t.ShadowTooltipContent.prototype,"accumulatedShadowTime",void 0),o.__decorate([a.property()],t.ShadowTooltipContent.prototype,"view",void 0),o.__decorate([a.property(),S.messageBundle("esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation")],t.ShadowTooltipContent.prototype,"_messages",void 0),o.__decorate([a.property({readOnly:!0})],t.ShadowTooltipContent.prototype,"_formattedContent",null),t.ShadowTooltipContent=o.__decorate([l.subclass("esri.widgets.ShadowAccumulation.components.ShadowTooltipContent")],t.ShadowTooltipContent),Object.defineProperty(t,"__esModule",{value:!0})}));
