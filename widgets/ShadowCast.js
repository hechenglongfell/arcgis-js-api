/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../intl","../core/Handles","../core/maybe","../core/reactiveUtils","../core/timeUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../intl/substitute","./Slider","./Widget","./ShadowCast/css","./ShadowCast/ShadowCastState","./ShadowCast/ShadowCastViewModel","./ShadowCast/ShadowCastVisibleElements","./ShadowCast/ShadowVisualizationType","./ShadowCast/components/DiscreteConfigurator","./ShadowCast/components/DurationConfigurator","./ShadowCast/components/ShadowTooltip","./ShadowCast/components/ThresholdConfigurator","./ShadowCast/components/TimezonePicker","./support/DatePicker","./support/Heading","./support/timeWidgetUtils","./support/widgetUtils","./support/decorators/messageBundle","./support/jsxFactory","../intl/date"],(function(e,i,t,o,s,a,n,l,r,d,c,u,h,p,m,v,S,w,y,_,g,C,f,b,T,M,k,z,V,D,x,P){"use strict";var L;!function(e){e.Slider="slider"}(L||(L={}));const O={hour:"2-digit",minute:"2-digit",timeZone:"UTC"},R=/(.*)\s(.*)/,E={labelFormatFunction:z.formatSliderLabel,min:0,max:1439,steps:15,rangeLabelInputsEnabled:!1,visibleElements:{labels:!1,rangeLabels:!1},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:(e,i,t)=>{i.classList.add(v.CSS.timeRangePrimaryTick),t.classList.add(v.CSS.timeRangePrimaryTickLabel);const o=t.innerText.match(R);o&&(t.innerHTML=`${o[1]}<br><div class="${v.CSS.timeRangeAMPMLabel}">${o[2]}</div>`)}},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:(e,i)=>{i.classList.add(v.CSS.timeRangeSecondaryTick)}}]};let A=function(t){function o(e,i){var o;return(o=t.call(this,e,i)||this).viewModel=null,o.headingLevel=4,o.iconClass=v.CSS.widgetIcon,o.visibleElements=new y,o._handles=new s,o._defaultViewModel=null,o._timeSlider=new p({...E,container:document.createElement("div")}),o._tooltip=null,o._onTimezoneChange=e=>{o.viewModel.utcOffset=e},o._onDateChange=e=>{o.viewModel.date=e},e?.viewModel||(o._defaultViewModel=new w({view:e?.view}),o.viewModel=o._defaultViewModel),o}i._inheritsLoose(o,t);var r=o.prototype;return r.initialize=function(){this._handles.add([n.watch((()=>({viewModel:this.viewModel,slider:this._timeSlider})),(e=>this._connectTimeSlider(e)),n.syncAndInitial),n.watch((()=>({container:a.applySome(this.view,(e=>e.surface)),viewModel:this.viewModel,tooltipVisible:this.visibleElements.tooltip})),(({container:e,viewModel:i,tooltipVisible:t})=>{this._tooltip=a.destroyMaybe(this._tooltip),!a.isNone(e)&&t&&(this._tooltip=new f.ShadowTooltip({viewModel:i,container:e}))}),n.syncAndInitial),n.watch((()=>({viewModel:this.viewModel,visible:this.visible})),(({viewModel:e,visible:i})=>e.setRunning(i)),n.syncAndInitial)])},r.destroy=function(){this._handles=a.destroyMaybe(this._handles),this._timeSlider=a.destroyMaybe(this._timeSlider),a.isSome(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()},r.loadDependencies=function(){return Promise.all([new Promise(((i,t)=>e(["../chunks/calcite-select"],i,t))),new Promise(((i,t)=>e(["../chunks/calcite-option"],i,t)))])},r.render=function(){const{visibleElements:e,viewModel:i}=this,t=i.state===S.ShadowCastState.Disabled;return x.tsx("div",{key:this,class:this.classes(v.CSS.base,v.CSS.esriWidget,{[v.CSS.esriWidgetDisabled]:t})},this._renderTimeRangeSection(),e.visualizationOptions&&this._renderVisualizationOptionsSection())},r._connectTimeSlider=function({viewModel:e,slider:i}){if(this._handles.remove(L.Slider),a.isNone(i))return;const t=e=>l.convertTime(e,"milliseconds","minutes"),o=e=>l.convertTime(e,"minutes","milliseconds"),s=({index:i,value:t})=>{0===i?e.startTimeOfDay=o(t):e.endTimeOfDay=o(t)};this._handles.add([n.watch((()=>[e.startTimeOfDay,e.endTimeOfDay]),(e=>{i.values=e.map(t)}),n.syncAndInitial),i.on("thumb-change",s),i.on("thumb-drag",s),i.on("segment-drag",(()=>{[e.startTimeOfDay,e.endTimeOfDay]=i.values.map(o)}))],L.Slider)},r._renderTimeRangeSection=function(){const{visibleElements:e}=this;return e.timeRangeSlider||e.datePicker?x.tsx("section",{key:"time-range",class:v.CSS.timeRange},x.tsx(k.Heading,{level:this.headingLevel},this.messages.timeLabel),e.timeRangeSlider&&this._renderTimeRange(),e.datePicker&&this._renderDatePicker()):null},r._renderTimeRange=function(){const{messages:e,viewModel:i,visibleElements:t}=this,{startTimeOfDay:o,endTimeOfDay:s}=i,[a,n]=[o,s].map((e=>P.formatDate(new Date(e),O)));return[x.tsx("div",{key:"time-range-indicator",class:v.CSS.timeRangeIndicator},h.substitute(e.timeRange,{start:a,end:n}),t.timezone&&x.tsx(T.TimezonePicker,{value:i.utcOffset,onChange:this._onTimezoneChange})),x.tsx("div",{key:"time-slider-container",bind:this,afterCreate:this._timeSliderContainerAfterCreate,afterRemoved:this._timeSliderContainerAfterRemoved})]},r._timeSliderContainerAfterCreate=function(e){const i=a.unwrap(this._timeSlider)?.container;i&&e.appendChild(i)},r._timeSliderContainerAfterRemoved=function(e){const i=a.unwrap(this._timeSlider)?.container;i&&e.removeChild(i)},r._renderDatePicker=function(){return x.tsx("div",{key:"date-picker",class:v.CSS.datePickerContainer},x.tsx(M,{value:this.viewModel.date,onChange:this._onDateChange}))},r._renderVisualizationOptionsSection=function(){const{headingLevel:e,messages:i,viewModel:t,visibleElements:o}=this,s=o.colorPicker,a=e=>this.classes(t.visualizationType===e?null:v.CSS.visualizationConfigHidden);return x.tsx("section",{key:"visualization",class:v.CSS.visualization},x.tsx(k.Heading,{level:e},i.visualizationLabel),this._renderVisualizationSelect(),x.tsx("div",{key:"threshold-configurator",class:a(_.ShadowVisualizationType.Threshold)},x.tsx(b.ThresholdConfigurator,{options:t.thresholdOptions,colorPickerVisible:s})),x.tsx("div",{key:"duration-configurator",class:a(_.ShadowVisualizationType.Duration)},x.tsx(C.DurationConfigurator,{options:t.durationOptions,colorPickerVisible:s})),x.tsx("div",{key:"discrete-configurator",class:a(_.ShadowVisualizationType.Discrete)},x.tsx(g.DiscreteConfigurator,{options:t.discreteOptions,colorPickerVisible:s})))},r._renderVisualizationSelect=function(){const e=this.messages,i=this.viewModel.visualizationType;return x.tsx("calcite-select",{class:v.CSS.visualizationSelect,key:"visualization-select",label:e.visualizationLabel,bind:this,onCalciteSelectChange:this._onVisualizationTypeChange},[{type:_.ShadowVisualizationType.Threshold,label:e.threshold.label},{type:_.ShadowVisualizationType.Duration,label:e.duration.label},{type:_.ShadowVisualizationType.Discrete,label:e.discrete.label}].map((({type:e,label:t})=>x.tsx("calcite-option",{value:e,selected:e===i},t))))},r._onVisualizationTypeChange=function(e){const i=e.target.selectedOption?.value;this.viewModel.visualizationType=i??_.ShadowVisualizationType.Threshold},i._createClass(o,[{key:"view",get:function(){return this.viewModel?.view},set:function(e){this.viewModel&&(this.viewModel.view=e)}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(e){this._overrideIfSome("label",e)}},{key:"testData",get:function(){return{tooltip:this._tooltip}}}]),o}(m);t.__decorate([r.property()],A.prototype,"viewModel",void 0),t.__decorate([r.property()],A.prototype,"view",null),t.__decorate([r.property()],A.prototype,"headingLevel",void 0),t.__decorate([r.property()],A.prototype,"iconClass",void 0),t.__decorate([r.property()],A.prototype,"label",null),t.__decorate([r.property({type:y,nonNullable:!0})],A.prototype,"visibleElements",void 0),t.__decorate([r.property(),D.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],A.prototype,"messages",void 0),t.__decorate([r.property()],A.prototype,"_defaultViewModel",void 0),t.__decorate([r.property()],A.prototype,"_timeSlider",void 0),t.__decorate([r.property()],A.prototype,"_tooltip",void 0),A=t.__decorate([u.subclass("esri.widgets.ShadowCast")],A);return A}));
