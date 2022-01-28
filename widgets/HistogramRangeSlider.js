/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../Color","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","./Histogram","./Slider","./Widget","./HistogramRangeSlider/HistogramRangeSliderViewModel","./smartMapping/support/utils","./support/widgetUtils","./support/decorators/messageBundle","../core/Logger","./support/jsxFactory"],(function(e,t,a,i,r,o,s,n,l,d,u,c,h,p,g,_,m,v,b){"use strict";const y={base:"esri-histogram-range-slider",sliderContainer:"esri-histogram-range-slider__slider-container",histogramContainer:"esri-histogram-range-slider__histogram-container",rangeTypePrefix:"esri-histogram-range-slider__range-type--",esriWidget:"esri-widget",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"};let C=function(t){function r(e,i){var r;return(r=t.call(this,e,i)||this)._barElements=[],r._histogram=null,r._slider=null,r.average=null,r.barCreatedFunction=null,r.bins=null,r.dataLines=null,r.dataLineCreatedFunction=null,r.excludedBarColor=new a("#d7e5f0"),r.hasTimeData=null,r.includedBarColor=new a("#599dd4"),r.label=void 0,r.labelFormatFunction=null,r.max=null,r.messages=null,r.min=null,r.precision=4,r.rangeType=null,r.standardDeviation=null,r.standardDeviationCount=1,r.values=null,r.viewModel=new p,r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){const{average:e,bins:t,hasTimeData:a,max:r,min:o,viewModel:s}=this;this._updateBarFill=this._updateBarFill.bind(this),this._histogram=new u({average:e,bins:t,barCreatedFunction:(e,t)=>{0===e&&(this._barElements=[]),this._barElements.push(t),this._updateBarFill(e,t),this.barCreatedFunction&&this.barCreatedFunction(e,t)},dataLines:this._getDataLines(),dataLineCreatedFunction:(e,t)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(e,t)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:r,min:o}),this._slider=new c({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!a,viewModel:s}),this.own(this._slider.on(["max-change","min-change"],(e=>this.emit(e.type,e))),this._slider.on(["segment-drag","thumb-change","thumb-drag"],(e=>{this._updateBarFills(),this.emit(e.type,e)})),i.watch(this,"bins",(()=>{const{_histogram:e,bins:t}=this;if(t&&e.bins){const a=e.bins.length-t.length;this._barElements.splice(-a,a)}else this._barElements=[];e.set({bins:t}),this._updateBarFills(),this.scheduleRender()})),i.watch(this,["max","min","rangeType","values"],(()=>{const{_histogram:e,max:t,min:a}=this;e.set({max:t,min:a}),this._updateBarFills(),this.scheduleRender()})),i.watch(this,["average","dataLines","standardDeviation","standardDeviationCount"],(()=>{const{_histogram:e,average:t}=this;e.set({average:t,dataLines:this._getDataLines()})})),i.watch(this,"labelFormatFunction",(()=>{const{_histogram:e,labelFormatFunction:t}=this;e.set({labelFormatFunction:t})})),i.watch(this,"hasTimeData",(()=>{this._slider.set({rangeLabelInputsEnabled:!this.hasTimeData})})))},o.generateWhereClause=function(e){return this.viewModel.generateWhereClause(e)},o.render=function(){const{rangeType:e,viewModel:t,label:a}=this,i=this.classes(y.base,y.esriWidget,`${y.rangeTypePrefix}${e}`,"disabled"===t.state?y.disabled:null);return b.tsx("div",{"aria-label":a,class:i},"disabled"===t.state?null:this.renderContent())},o.renderContent=function(){return[this.renderHistogram(),this.renderSlider()]},o.renderSlider=function(){return b.tsx("div",{key:`${this.id}-slider-container`,class:y.sliderContainer},this._slider.render())},o.renderHistogram=function(){return b.tsx("div",{class:y.histogramContainer},this._histogram.render())},o._getDataLines=function(){return[...this._getStandardDeviationDataLines(),...this.dataLines||[]]},o._getStandardDeviationDataLines=function(){const{average:e,standardDeviation:t,standardDeviationCount:a}=this;return g.getDeviationValues(t,e,a).map((e=>({value:e})))},o._updateBarFills=function(){this._barElements.forEach(((e,t)=>this._updateBarFill(t,e)))},o._updateBarFill=function(e,t){t.setAttribute("fill",this._getFillForBar(e).toHex())},o._getFillForBar=function(e){const{bins:t,rangeType:a,values:i}=this;if(!(t&&t.length&&a&&i.length))return null;const r=t[e];if(!r)return null;const{maxValue:o,minValue:s}=r,n=o-s,l=i[0]>s&&i[0]<o;switch(a){case"equal":case"not-equal":return this.includedBarColor;case"less-than":case"at-most":return l?this._getBlendedColor((i[0]-s)/n):o<=i[0]?this.includedBarColor:this.excludedBarColor;case"greater-than":case"at-least":return l?this._getBlendedColor(1-(i[0]-s)/n):s>=i[0]?this.includedBarColor:this.excludedBarColor;case"between":if(2===i.length)return i[0]>s&&i[0]<o?this._getBlendedColor(1-(i[0]-s)/n):i[1]>s&&i[1]<o?this._getBlendedColor((i[1]-s)/n):s>=i[0]&&o<=i[1]?this.includedBarColor:this.excludedBarColor;case"not-between":if(2===i.length)return i[0]>s&&i[0]<o?this._getBlendedColor((i[0]-s)/n):i[1]>s&&i[1]<o?this._getBlendedColor(1-(i[1]-s)/n):s>i[0]&&o<i[1]?this.excludedBarColor:this.includedBarColor;default:return this.includedBarColor}},o._getBlendedColor=function(e){return a.blendColors(this.excludedBarColor,this.includedBarColor,e)},r}(h);t.__decorate([r.aliasOf("viewModel.average")],C.prototype,"average",void 0),t.__decorate([l.property()],C.prototype,"barCreatedFunction",void 0),t.__decorate([r.aliasOf("viewModel.bins")],C.prototype,"bins",void 0),t.__decorate([l.property()],C.prototype,"dataLines",void 0),t.__decorate([l.property()],C.prototype,"dataLineCreatedFunction",void 0),t.__decorate([l.property({type:a,json:{type:[n.Integer],write:!0}})],C.prototype,"excludedBarColor",void 0),t.__decorate([r.aliasOf("viewModel.hasTimeData")],C.prototype,"hasTimeData",void 0),t.__decorate([l.property({type:a,json:{type:[n.Integer],write:!0}})],C.prototype,"includedBarColor",void 0),t.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],C.prototype,"label",void 0),t.__decorate([r.aliasOf("viewModel.labelFormatFunction")],C.prototype,"labelFormatFunction",void 0),t.__decorate([r.aliasOf("viewModel.max")],C.prototype,"max",void 0),t.__decorate([l.property(),m.messageBundle("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],C.prototype,"messages",void 0),t.__decorate([r.aliasOf("viewModel.min")],C.prototype,"min",void 0),t.__decorate([r.aliasOf("viewModel.precision")],C.prototype,"precision",void 0),t.__decorate([r.aliasOf("viewModel.rangeType")],C.prototype,"rangeType",void 0),t.__decorate([r.aliasOf("viewModel.standardDeviation")],C.prototype,"standardDeviation",void 0),t.__decorate([l.property()],C.prototype,"standardDeviationCount",void 0),t.__decorate([r.aliasOf("viewModel.values")],C.prototype,"values",void 0),t.__decorate([l.property()],C.prototype,"viewModel",void 0),C=t.__decorate([d.subclass("esri.widgets.HistogramRangeSlider")],C);return C}));
