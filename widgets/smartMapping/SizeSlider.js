/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../Color","../../core/maybe","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../renderers/visualVariables/SizeVariable","../../renderers/visualVariables/support/SizeStop","./SmartMappingSliderBase","./SizeSlider/SizeSliderViewModel","./support/utils","../support/widgetUtils","../support/decorators/messageBundle","../../core/Logger","../support/jsxFactory"],(function(e,i,s,a,t,r,o,l,n,d,p,m,c,u,z,g,h,v,_){"use strict";var b;const S={base:"esri-size-slider",rampElement:"esri-size-slider__ramp",sliderContainer:"esri-size-slider__slider-container",histogramContainer:"esri-size-slider__histogram-container",zoomCapTop:"esri-size-slider__zoom-cap-top",zoomCapBottom:"esri-size-slider__zoom-cap-bottom",zoomCapLine:"esri-size-slider__zoom-cap-line",zoomCapMask:"esri-size-slider__zoom-cap-mask",zoomCapUnderline:"esri-size-slider__zoom-cap-underline",primaryHandle:"esri-size-slider--primary-handle",track:"esri-size-slider--interactive-track",esriWidget:"esri-widget",esriWidgetPanel:"esri-widget--panel",widgetIcon:"esri-icon-edit",disabled:"esri-disabled"},y={trackFillColor:new s([149,149,149]),trackBackgroundColor:new s([224,224,224])};let f=b=function(i){function s(e,s){var a;return(a=i.call(this,e,s)||this)._maxRampFillWidth=1,a._minRampFillWidth=.2,a._rampNode=null,a.handlesSyncedToPrimary=null,a.label=void 0,a.messages=null,a.persistSizeRangeEnabled=null,a.primaryHandleEnabled=null,a.stops=null,a.style={...y},a.viewModel=new u,a.zoomOptions=null,a}e._inheritsLoose(s,i);var t=s.prototype;return t.castStyle=function(e){return{...y,...e}},s.fromRendererResult=function(e,i){const{visualVariables:s,statistics:a}=e,{avg:t,stddev:r}=a,o=s[0],[l,n]=z.getSizesFromVariable(o),d=e.renderer.authoringInfo.visualVariables[0],p=d.minSliderValue,m=d.maxSliderValue;return new b({max:m,min:p,stops:[{value:o.minDataValue,size:n},{value:o.maxDataValue,size:l}],histogramConfig:{average:t,standardDeviation:r,bins:i?i.bins:[]}})},t.updateFromRendererResult=function(e,i){const{visualVariables:s,statistics:a}=e,{avg:t,stddev:r}=a,o=s[0],[l,n]=z.getSizesFromVariable(o),d=e.renderer.authoringInfo.visualVariables[0],p=d.minSliderValue,m=d.maxSliderValue;this.set({max:m,min:p,stops:[{value:o.minDataValue,size:n},{value:o.maxDataValue,size:l}],histogramConfig:{average:t,standardDeviation:r,bins:i?i.bins:[]}})},t.updateVisualVariable=function(e){const i=e.clone(),{stops:s}=this;if(!e||!s)return null;if(i.stops)return i.stops=s,i;const a=s[0],t=s[s.length-1];let r=i.maxSize,o=i.minSize;if(r instanceof p){const e=r.stops,i=t.size/e[0].size,s=e.map((e=>(e.size*=i,e)));r.stops=s}else r=t.size;if(o instanceof p){const e=o.stops,i=a.size/e[0].size,s=e.map((e=>(e.size*=i,e)));o.stops=s}else o=a.size;return i.set({maxDataValue:t.value,minDataValue:a.value,maxSize:r,minSize:o}),i},t.updateFromVisualVariable=function(e){if(!e)return;const{maxDataValue:i,minDataValue:s,stops:a}=e;if(a)this.stops=a;else{const[a,t]=z.getSizesFromVariable(e);this.stops=[new m({value:s,size:t}),new m({value:i,size:a})]}},t.render=function(){const{label:e,primaryHandleEnabled:i,state:s,visibleElements:a}=this,t="disabled"===s,r=this.classes(S.base,S.esriWidget,S.esriWidgetPanel,{[S.disabled]:t,[S.primaryHandle]:i,[S.track]:a.interactiveTrack});return _.tsx("div",{"aria-label":e,class:r},t?null:this.renderContent(this.renderRamp(),S.sliderContainer,S.histogramContainer))},t.renderRamp=function(){const{style:{trackBackgroundColor:e},zoomOptions:i}=this;return _.tsx("div",{afterCreate:g.storeNode,bind:this,class:S.rampElement,"data-node-ref":"_rampNode"},_.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},_.tsx("rect",{x:"0",y:"0",fill:z.getFillFromColor(e),height:"100%",width:"100%"}),this.renderPath()),i?this.renderZoomCaps():null)},t.renderPath=function(){if(!this._rampNode)return;const{offsetHeight:e=0,offsetWidth:i=0}=this._rampNode;if(!a.isSome(e)||!a.isSome(i))return;const{primaryHandleEnabled:s,stops:t,style:{trackFillColor:r},values:o,viewModel:{max:l,min:n},_maxRampFillWidth:d,_minRampFillWidth:p}=this,m=[d,p];t[0].size<t[t.length-1].size&&m.reverse();const c=o.slice().sort(((e,i)=>e>i?1:-1)),[u,g]=m,[h,v]=c,b=s?z.getDynamicPathForSizeStops({max:l,min:n,pathHeight:e,pathWidth:i,stops:t,padding:g}):z.getPathForSizeStops({bottomValue:h,bottomWidth:u,max:l,min:n,pathHeight:e,pathWidth:i,topValue:v,topWidth:g});return _.tsx("path",{d:b,fill:z.getFillFromColor(r)})},s}(c.SmartMappingSliderBase);i.__decorate([t.aliasOf("viewModel.handlesSyncedToPrimary")],f.prototype,"handlesSyncedToPrimary",void 0),i.__decorate([n.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],f.prototype,"label",void 0),i.__decorate([n.property(),h.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],f.prototype,"messages",void 0),i.__decorate([t.aliasOf("viewModel.persistSizeRangeEnabled")],f.prototype,"persistSizeRangeEnabled",void 0),i.__decorate([t.aliasOf("viewModel.primaryHandleEnabled")],f.prototype,"primaryHandleEnabled",void 0),i.__decorate([t.aliasOf("viewModel.stops")],f.prototype,"stops",void 0),i.__decorate([n.property()],f.prototype,"style",void 0),i.__decorate([l.cast("style")],f.prototype,"castStyle",null),i.__decorate([n.property()],f.prototype,"viewModel",void 0),i.__decorate([t.aliasOf("viewModel.zoomOptions")],f.prototype,"zoomOptions",void 0),f=b=i.__decorate([d.subclass("esri.widgets.smartMapping.SizeSlider")],f);return f}));
