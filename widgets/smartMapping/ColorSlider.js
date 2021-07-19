/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/aliasOf","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","./SmartMappingSliderBase","./ColorSlider/ColorSliderViewModel","../support/widgetUtils","../support/decorators/messageBundle","../support/jsxFactory"],(function(e,r,i,s,t,o,a,l,n,d,p,c,u){"use strict";var m;const g={base:"esri-color-slider",rampElement:"esri-color-slider__ramp",sliderContainer:"esri-color-slider__slider-container",histogramContainer:"esri-color-slider__histogram-container",primaryHandle:"esri-color-slider--primary-handle",track:"esri-color-slider--interactive-track",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};let h=m=function(r){function i(e,i){var s;return(s=r.call(this,e,i)||this)._bgFillId=null,s._rampFillId=null,s.handlesSyncedToPrimary=null,s.label=void 0,s.messages=null,s.primaryHandleEnabled=null,s.stops=null,s.viewModel=new d,s.zoomOptions=null,s._bgFillId=`${s.id}-bg-fill`,s._rampFillId=`${s.id}-linear-gradient`,s}e._inheritsLoose(i,r),i.fromRendererResult=function(e,r){const{visualVariable:{stops:i},statistics:s}=e,{avg:t,stddev:o}=s,a=e.renderer.authoringInfo.visualVariables.filter((e=>"color"===e.type))[0],l=a.minSliderValue,n=a.maxSliderValue;return new m({max:n,min:l,stops:i,histogramConfig:{average:t,standardDeviation:o,bins:r?r.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})};var s=i.prototype;return s.updateFromRendererResult=function(e,r){const{visualVariable:{stops:i},statistics:s}=e,{avg:t,stddev:o}=s,a=e.renderer.authoringInfo.visualVariables.filter((e=>"color"===e.type))[0],l=a.minSliderValue,n=a.maxSliderValue;this.set({max:n,min:l,stops:i,histogramConfig:{average:t,standardDeviation:o,bins:r?r.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})},s.render=function(){const{label:e,primaryHandleEnabled:r,state:i,visibleElements:s}=this,t="disabled"===i,o=this.classes(g.base,g.esriWidget,g.esriWidgetPanel,{[g.disabled]:t,[g.primaryHandle]:r,[g.track]:s.interactiveTrack});return u.tsx("div",{"aria-label":e,class:o},t?null:this.renderContent(this.renderRamp(),g.sliderContainer,g.histogramContainer))},s.renderRamp=function(){const{_bgFillId:e,_rampFillId:r,viewModel:i,zoomOptions:s}=this,t=i.getStopInfo();return u.tsx("div",{class:g.rampElement},u.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},u.tsx("defs",null,this.renderRampFillDefinition(r,t),this.renderBackgroundFillDefinition(e)),u.tsx("rect",{x:"0",y:"0",fill:`url(#${e})`,height:"100%",width:"100%"}),u.tsx("rect",{x:"0",y:"0",fill:`url(#${r})`,height:"100%",width:"100%"})),s?this.renderZoomCaps():null)},i}(n.SmartMappingSliderBase);return r.__decorate([i.aliasOf("viewModel.handlesSyncedToPrimary")],h.prototype,"handlesSyncedToPrimary",void 0),r.__decorate([a.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0),r.__decorate([a.property(),c.messageBundle("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],h.prototype,"messages",void 0),r.__decorate([i.aliasOf("viewModel.primaryHandleEnabled")],h.prototype,"primaryHandleEnabled",void 0),r.__decorate([i.aliasOf("viewModel.stops")],h.prototype,"stops",void 0),r.__decorate([a.property()],h.prototype,"viewModel",void 0),r.__decorate([i.aliasOf("viewModel.zoomOptions")],h.prototype,"zoomOptions",void 0),h=m=r.__decorate([l.subclass("esri.widgets.smartMapping.ColorSlider")],h),h}));
