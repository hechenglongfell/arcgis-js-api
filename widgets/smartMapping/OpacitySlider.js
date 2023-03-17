/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/cast","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./SmartMappingSliderBase","./OpacitySlider/OpacitySliderViewModel","../support/widgetUtils","../support/decorators/messageBundle","../support/jsxFactory"],(function(e,t,i,s,r,a,l,o,n,d,p,c){"use strict";var u;const g="esri-opacity-slider",m={base:g,rampElement:`${g}__ramp`,sliderContainer:`${g}__slider-container`,histogramContainer:`${g}__histogram-container`,track:`${g}--interactive-track`,esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},y={trackFillColor:new i([0,121,193])};let h=u=function(t){function i(e,i){var s;return(s=t.call(this,e,i)||this)._bgFillId=null,s._rampFillId=null,s.messages=null,s.style={...y},s.viewModel=new n,s._rampFillId=`${s.id}-ramp-fill`,s._bgFillId=`${s.id}-bg-fill`,s}e._inheritsLoose(i,t);var s=i.prototype;return s.castStyle=function(e){return{...y,...e}},i.fromVisualVariableResult=function(e,t){const{visualVariable:{stops:i},statistics:s}=e,{avg:r,max:a,min:l,stddev:o}=s;return new u({max:a,min:l,stops:i,histogramConfig:{average:r,standardDeviation:o,bins:t?t.bins:[]}})},s.updateFromVisualVariableResult=function(e,t){const{visualVariable:{stops:i},statistics:s}=e,{avg:r,max:a,min:l,stddev:o}=s;this.set({max:a,min:l,stops:i,histogramConfig:{average:r,standardDeviation:o,bins:t?t.bins:[]}})},s.render=function(){const{state:e,label:t,visibleElements:i}=this,s="disabled"===e,r=this.classes(m.base,m.esriWidget,m.esriWidgetPanel,{[m.disabled]:s,[m.track]:i.interactiveTrack});return c.tsx("div",{"aria-label":t,class:r},s?null:this.renderContent(this.renderRamp(),m.sliderContainer,m.histogramContainer))},s.renderRamp=function(){const{_bgFillId:e,_rampFillId:t,style:{trackFillColor:i},viewModel:s,zoomOptions:r}=this,a=s.getStopInfo(i);return c.tsx("div",{class:m.rampElement},c.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},c.tsx("defs",null,this.renderRampFillDefinition(t,a),this.renderBackgroundFillDefinition(e)),c.tsx("rect",{x:"0",y:"0",fill:`url(#${e})`,height:"100%",width:"100%"}),c.tsx("rect",{x:"0",y:"0",fill:`url(#${t})`,height:"100%",width:"100%"})),r?this.renderZoomCaps():null)},e._createClass(i,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"stops",get:function(){return this.viewModel.stops},set:function(e){this.viewModel.stops=e}}]),i}(o.SmartMappingSliderBase);t.__decorate([s.property()],h.prototype,"label",null),t.__decorate([s.property(),p.messageBundle("esri/widgets/smartMapping/OpacitySlider/t9n/OpacitySlider")],h.prototype,"messages",void 0),t.__decorate([s.property()],h.prototype,"stops",null),t.__decorate([s.property()],h.prototype,"style",void 0),t.__decorate([r.cast("style")],h.prototype,"castStyle",null),t.__decorate([s.property()],h.prototype,"viewModel",void 0),h=u=t.__decorate([l.subclass("esri.widgets.smartMapping.OpacitySlider")],h);return h}));
