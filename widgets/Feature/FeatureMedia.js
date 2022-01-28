/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/events","../../core/watchUtils","../../core/accessorSupport/decorators/aliasOf","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../Widget","./FeatureMedia/FeatureMediaViewModel","./support/FeatureElementInfo","./support/featureUtils","../support/chartUtils","../support/widgetUtils","../support/decorators/messageBundle","../../core/Logger","../support/jsxFactory"],(function(e,t,i,r,a,o,s,n,l,d,c,u,h,p,m,f,_,v,I){"use strict";const M={base:"esri-feature-media",mediaContainer:"esri-feature-media__container",mediaItemContainer:"esri-feature-media__item-container",mediaItem:"esri-feature-media__item",mediaItemTitle:"esri-feature-media__item-title",mediaItemCaption:"esri-feature-media__item-caption",mediaPrevious:"esri-feature-media__previous",mediaPreviousIconLTR:"esri-feature-media__previous-icon",mediaPreviousIconRTL:"esri-feature-media__previous-icon--rtl",mediaNext:"esri-feature-media__next",mediaNextIconLTR:"esri-feature-media__next-icon",mediaNextIconRTL:"esri-feature-media__next-icon--rtl",mediaChart:"esri-feature-media__chart",mediaButton:"esri-feature-media__button",mediaIcon:"esri-feature-media__icon",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",iconRightTriangleArrow:"esri-icon-right-triangle-arrow"},g=.05,w=.95,y=15;let x=function(t){function a(i,r){var a;return(a=t.call(this,i,r)||this)._refreshTimer=null,a._refreshIntervalInfo=null,a._featureElementInfo=null,a.attributes=null,a.activeMediaInfoIndex=null,a.description=null,a.fieldInfoMap=null,a.layer=null,a.mediaInfos=null,a.popupTemplate=null,a.relatedInfos=null,a.title=null,a.viewModel=new u,a.messages=null,a._getChartDependencies=function(){var t=e._asyncToGenerator((function*(t){const i=yield m.loadChartsModule(),{viewModel:r}=e._assertThisInitialized(a);if(!r)return;const{activeMediaInfo:o}=r;a._renderChart({chartDiv:t,mediaInfo:o,chartsModule:i})}));return function(e){return t.apply(this,arguments)}}(),a}e._inheritsLoose(a,t);var o=a.prototype;return o.initialize=function(){this._featureElementInfo=new h,this.own(r.init(this,["viewModel.activeMediaInfo","viewModel.activeMediaInfoIndex"],(()=>this._setupMediaRefreshTimer())),r.init(this,["viewModel.description","viewModel.title"],(()=>this._setupFeatureElementInfo())))},o.destroy=function(){this._clearMediaRefreshTimer(),this._featureElementInfo.destroy()},o.render=function(){var e;return I.tsx("div",{bind:this,class:M.base,onkeyup:this._handleMediaKeyup},null==(e=this._featureElementInfo)?void 0:e.render(),this.renderMedia())},o.renderMedia=function(){const{formattedMediaInfoCount:e}=this.viewModel;return e?I.tsx("div",{key:"media-element-container",class:M.mediaContainer},this.renderMediaPageButton("previous"),this.renderMediaInfo(),this.renderMediaPageButton("next")):null},o.renderImageMediaInfo=function(e){const{_refreshIntervalInfo:t}=this,{activeMediaInfoIndex:i,formattedMediaInfoCount:r}=this.viewModel,{value:a,refreshInterval:o,altText:s,title:n,type:l}=e,{sourceURL:d,linkURL:c}=a,u=p.shouldOpenInNewTab(c)?"_blank":"_self",h="_blank"===u?"noreferrer":"",m=o?t:null,f=m?m.timestamp:0,_=m?m.sourceURL:d,v=I.tsx("img",{alt:s||n,key:`media-${l}-${i}-${r}-${f}`,src:_}),M=c?I.tsx("a",{title:n,href:c,rel:h,target:u},v):null;return M||v},o.renderChartMediaInfo=function(e){const{activeMediaInfoIndex:t,formattedMediaInfoCount:i}=this.viewModel;return I.tsx("div",{key:`media-${e.type}-${t}-${i}`,bind:this,class:M.mediaChart,afterCreate:this._getChartDependencies})},o.renderMediaInfoType=function(){const{activeMediaInfo:e}=this.viewModel;return e?"image"===e.type?this.renderImageMediaInfo(e):-1!==e.type.indexOf("chart")?this.renderChartMediaInfo(e):null:null},o.renderMediaInfo=function(){const{activeMediaInfo:e}=this.viewModel;if(!e)return null;const t=e.title?I.tsx("div",{key:"media-title",class:M.mediaItemTitle,innerHTML:e.title}):null,i=e.caption?I.tsx("div",{key:"media-caption",class:M.mediaItemCaption,innerHTML:e.caption}):null;return I.tsx("div",{key:"media-container",class:M.mediaItemContainer},I.tsx("div",{key:"media-item-container",class:M.mediaItem},this.renderMediaInfoType()),t,i)},o.renderMediaPageButton=function(e){if(this.viewModel.formattedMediaInfoCount<2)return null;const t="previous"===e,i=t?this.messages.previous:this.messages.next,r=t?this.classes(M.mediaButton,M.mediaPrevious):this.classes(M.mediaButton,M.mediaNext),a=t?this.classes(M.mediaIcon,M.mediaPreviousIconLTR,M.iconLeftTriangleArrow):this.classes(M.mediaIcon,M.mediaNextIconLTR,M.iconRightTriangleArrow),o=t?this.classes(M.mediaIcon,M.mediaPreviousIconRTL,M.iconRightTriangleArrow):this.classes(M.mediaIcon,M.mediaNextIconRTL,M.iconLeftTriangleArrow),s=t?"media-previous":"media-next",n=t?this._previous:this._next;return I.tsx("button",{type:"button",key:s,title:i,"aria-label":i,tabIndex:0,class:r,bind:this,onclick:n},I.tsx("span",{"aria-hidden":"true",class:a}),I.tsx("span",{"aria-hidden":"true",class:o}))},o._setupFeatureElementInfo=function(){const{description:e,title:t}=this;this._featureElementInfo.set({description:e,title:t})},o._next=function(){this.viewModel.next()},o._previous=function(){this.viewModel.previous()},o._handleMediaKeyup=function(e){const t=i.eventKey(e);"ArrowLeft"===t&&(e.stopPropagation(),this.viewModel.previous()),"ArrowRight"===t&&(e.stopPropagation(),this.viewModel.next())},o._renderChart=function(e){const{chartsModule:t,chartDiv:i,mediaInfo:r}=e,{value:a,type:o}=r,{am4core:s}=t,n=m.getColorSet(s);function l(e){e instanceof s.ColorSet&&n&&(e.list=n)}f.isDarkTheme()&&s.useTheme(t.am4themes_dark),s.useTheme(t.am4themes_animated),s.useTheme(l);const d="pie-chart"===o?this._createPieChart(e):this._createXYChart(e);i.setAttribute("aria-label",r.altText||r.title),d.data=a.series.map((e=>({tooltip:e.tooltip,value:e.value}))).filter((e=>"pie-chart"!==o||e.value>0))},o._customizeChartTooltip=function(e,t){e.label.wrap=!0,e.label.maxWidth=200,e.autoTextColor=!1,e.getFillFromObject=!1,e.label.fill=t.color("#ffffff"),e.background.fill=t.color({r:0,g:0,b:0,a:.7})},o._createPieChart=function(e){const{chartDiv:t,chartsModule:i}=e,{am4core:r,am4charts:a}=i,o=r.create(t,a.PieChart);o.rtl=f.isRTL(this.container);const s=o.series.push(new a.PieSeries);return s.labels.template.disabled=!0,s.ticks.template.disabled=!0,s.dataFields.value="value",s.dataFields.category="tooltip",this._customizeChartTooltip(s.tooltip,r),o},o._getMinSeriesValue=function(e){let t=0;return e.forEach((e=>t=Math.min(e.value,t))),t},o._createColumnChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=g,l.renderer.maxLabelPosition=w,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueY="value",c.dataFields.categoryX="tooltip",e.cursor=new s.XYCursor,a.series.length>y&&(e.scrollbarX=new o.Scrollbar)},o._createBarChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.yAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.inversed=!0,n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dx=n.tooltip.contentWidth}));const l=e.xAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=g,l.renderer.maxLabelPosition=w,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.ColumnSeries);c.dataFields.valueX="value",c.dataFields.categoryY="tooltip",e.cursor=new s.XYCursor,a.series.length>y&&(e.scrollbarY=new o.Scrollbar)},o._createLineChart=function(e,t){const{chartsModule:i,mediaInfo:r}=t,{value:a}=r,{am4core:o,am4charts:s}=i,n=e.xAxes.push(new s.CategoryAxis);n.dataFields.category="tooltip",n.renderer.labels.template.disabled=!0,this._customizeChartTooltip(n.tooltip,o),n.tooltip.events.on("sizechanged",(()=>{n.tooltip.dy=-n.tooltip.contentHeight}));const l=e.yAxes.push(new s.ValueAxis),d=l.renderer.labels.template;l.renderer.minLabelPosition=g,l.renderer.maxLabelPosition=w,l.min=this._getMinSeriesValue(a.series),this._customizeChartTooltip(l.tooltip,o),d.wrap=!0;const c=e.series.push(new s.LineSeries);c.dataFields.categoryX="tooltip",c.dataFields.valueY="value",e.cursor=new s.XYCursor,a.series.length>y&&(e.scrollbarX=new o.Scrollbar)},o._createXYChart=function(e){const{chartDiv:t,chartsModule:i,mediaInfo:r}=e,{type:a}=r,{am4core:o,am4charts:s}=i,n=o.create(t,s.XYChart);return n.rtl=f.isRTL(this.container),"column-chart"===a&&this._createColumnChart(n,e),"bar-chart"===a&&this._createBarChart(n,e),"line-chart"===a&&this._createLineChart(n,e),n},o._clearMediaRefreshTimer=function(){const{_refreshTimer:e}=this;e&&(clearTimeout(e),this._refreshTimer=null)},o._updateMediaInfoTimestamp=function(e){const t=Date.now();this._refreshIntervalInfo={timestamp:t,sourceURL:this._getImageSource(e,t)},this.scheduleRender()},o._setupMediaRefreshTimer=function(){this._clearMediaRefreshTimer();const{activeMediaInfo:e}=this.viewModel;e&&"image"===e.type&&e.refreshInterval&&this._setRefreshTimeout(e)},o._setRefreshTimeout=function(e){const{refreshInterval:t,value:i}=e;if(!t)return;const r=6e4*t;this._updateMediaInfoTimestamp(i.sourceURL);const a=setInterval((()=>{this._updateMediaInfoTimestamp(i.sourceURL)}),r);this._refreshTimer=a},o._getImageSource=function(e,t){const i=-1!==e.indexOf("?")?"&":"?",[r,a=""]=e.split("#");return`${r}${i}timestamp=${t}${a?"#":""}${a}`},a}(c);t.__decorate([a.aliasOf("viewModel.attributes")],x.prototype,"attributes",void 0),t.__decorate([a.aliasOf("viewModel.activeMediaInfoIndex")],x.prototype,"activeMediaInfoIndex",void 0),t.__decorate([a.aliasOf("viewModel.description")],x.prototype,"description",void 0),t.__decorate([a.aliasOf("viewModel.fieldInfoMap")],x.prototype,"fieldInfoMap",void 0),t.__decorate([a.aliasOf("viewModel.layer")],x.prototype,"layer",void 0),t.__decorate([a.aliasOf("viewModel.mediaInfos")],x.prototype,"mediaInfos",void 0),t.__decorate([a.aliasOf("viewModel.popupTemplate")],x.prototype,"popupTemplate",void 0),t.__decorate([a.aliasOf("viewModel.relatedInfos")],x.prototype,"relatedInfos",void 0),t.__decorate([a.aliasOf("viewModel.title")],x.prototype,"title",void 0),t.__decorate([l.property({type:u})],x.prototype,"viewModel",void 0),t.__decorate([l.property(),_.messageBundle("esri/widgets/Feature/t9n/Feature")],x.prototype,"messages",void 0),x=t.__decorate([d.subclass("esri.widgets.Feature.FeatureMedia")],x);return x}));
