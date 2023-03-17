/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../intl","../../../core/arrayUtils","../../../core/Error","../../../core/handleUtils","../../../core/maybe","../../../core/promiseUtils","../../../core/unitFormatUtils","../../../core/unitUtils","../css","./constants","./intlUtils","./niceScale","../../support/chartUtils","../../support/widgetUtils","../../../support/themeUtils","../../../intl/substitute","../../../intl/number"],(function(e,i,t,o,n,a,s,l,r,d,c,m,u,p,x,g,f,h,b){"use strict";const v="#f8f8f8",y="#a9a9a9",S="#323232",T="line",C="fill",A=15,L=12,k=30,P=.001,z=.5,w=.5,F=30,M=.02,N=.02,Y={sideSpacing:A,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,axisFontSize:9,axisFontWeight:"400",axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:y,axisTooltipFontSize:12,axisTooltipBackgroundColor:S,axisTooltipLabelColor:v,axisTooltipPaddingTop:Math.round(L/4),axisTooltipPaddingBottom:Math.round(L/4),axisTooltipPaddingHorizontal:Math.round(A/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(L/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(A/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:v,seriesTooltipLabelColor:S,seriesFillLighten:.9,seriesTooltipSpacing:L/2,seriesTooltipPaddingVertical:Math.round(A/4),seriesTooltipPaddingHorizontal:Math.round(A/4),tooltipBorderRadius:0},H={...Y,axisGridStroke:S,axisLabelsColor:y,axisTooltipBackgroundColor:S,axisTooltipLabelColor:v,seriesTooltipBackgroundColor:S,seriesTooltipLabelColor:v,seriesFillLighten:-.75},I={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};function X(e){return O.apply(this,arguments)}function O(){return(O=i._asyncToGenerator((function*(e){const i=yield x.loadChartsModule();if(!i)throw new n("elevation-profile:load-failed","Could not load amCharts");const{am4core:t,am4charts:o}=i;l.throwIfAborted(e.abortOptions);const{options:r}=t;r.minPolylineStep=z,r.autoSetClassName=!0,r.animationsEnabled=!1;const d=f.isDarkTheme(),c=d?H:Y;d&&t.useTheme(i.am4themes_dark);const m=t.create(e.container,o.XYChart);m.arrangeTooltips=!1,m.preloader.disabled=!0,m.zoomOutButton.disabled=!0;const u=g.isRTL(e.container);m.rtl=u,m.padding(c.paddingTop,u?c.paddingLeft:c.paddingRight,c.paddingBottom,u?c.paddingRight:c.paddingLeft);const p=m.plotContainer.background;p.strokeWidth=0,p.strokeOpacity=0,p.stroke=null;const h=m.xAxes.push(new o.ValueAxis),b=m.yAxes.push(new o.ValueAxis),v={params:e,amCharts4Index:i,amChart:m,xAxis:h,yAxis:b,series:new Map,data:null,messages:null,theme:c,zooming:!1,pointerIsOver:!1};m.cursor=W(v),D(v),B(v),U(v);const y=[K(v,e.onRangeChange),ee(v,e.onCursorPositionChange),Q(v)];let S=null,T=!1;const C=()=>{s.isNone(S)||("undefined"!=typeof window&&"cancelIdleCallback"in window?window.cancelIdleCallback(S):clearTimeout(S),S=null)};return{...v,destroy(){T=!0,C(),a.handlesGroup(y).remove(),m.dispose()},update(e){if(e.data===v.data&&e.messages===v.messages)return;if(C(),T)return;const i=()=>{T||(S=null,E(v,e))};S="undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(i,{timeout:F}):setTimeout(i,F)},zoomOut(){T||(v.yAxis.zoom({start:0,end:1},!1,!0),v.xAxis.zoom({start:0,end:1},!1,!0))}}}))).apply(this,arguments)}function W(e){const i=new e.amCharts4Index.am4charts.XYCursor;return i.trackable=!0,i.lineY.disabled=!0,i.behavior="zoomXY",i}function D(e){const i=e.theme,t=e.amChart.tooltip,{am4core:o}=e.amCharts4Index;t.id="series-tooltip",t.fitPointerToBounds=!0,t.pointerOrientation="vertical",t.zIndex=-1,t.getFillFromObject=!1,t.label.fontSize=i.seriesTooltipFontSize,t.label.fill=o.color(i.seriesTooltipLabelColor),t.label.padding(i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal,i.seriesTooltipPaddingVertical,i.seriesTooltipPaddingHorizontal),t.background.cornerRadius=i.tooltipBorderRadius,t.background.stroke=null,t.background.fill=o.color(i.seriesTooltipBackgroundColor),t.background.padding(0,0,0,0),t.adapter.add("dy",(()=>i.seriesTooltipSpacing*(t.background.pointerY<=0?1:-1))),g.isRTL(e.params.container)&&(t.label.textAlign="middle")}function B(e){const{xAxis:i,theme:t}=e,{am4core:o}=e.amCharts4Index;i.numberFormatter=le(e,"distance"),i.strictMinMax=!0,i.cursorTooltipEnabled=!1,i.title.visible=!1;const n=i.renderer;n.line.visible=!1,n.minGridDistance=t.xAxisMinGridDistance,n.minLabelPosition=t.xAxisMinLabelPosition,n.maxLabelPosition=t.xAxisMaxLabelPosition,n.fontWeight=t.axisFontWeight,n.fontSize=t.axisFontSize,n.baseGrid.disabled=!0;const a=n.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=o.color(t.axisLabelsColor),a.paddingTop=t.xAxisLabelsSpacing,a.horizontalCenter="left",a.paddingLeft=0;const s=i.tooltip;s.id="axis-tooltip",s.background.fill=o.color(t.axisTooltipBackgroundColor),s.background.stroke=null,s.background.padding(0,0,0,0),s.label.fontSize=t.axisTooltipFontSize,s.label.fill=o.color(t.axisTooltipLabelColor),s.label.padding(t.axisTooltipPaddingTop,t.axisTooltipPaddingHorizontal,t.axisTooltipPaddingBottom,t.axisTooltipPaddingHorizontal);const l=n.grid.template;l.strokeOpacity=1,l.stroke=o.color(t.axisGridStroke)}function U(e){const{yAxis:i,theme:t}=e,{am4core:o}=e.amCharts4Index;i.numberFormatter=le(e,"elevation"),i.title.visible=!1,i.cursorTooltipEnabled=!1,i.strictMinMax=!0,i.baseValue=m.getConfig().noDataValue;const n=i.renderer;n.inside=!0,n.line.opacity=0,n.line.visible=!1,n.minGridDistance=t.yAxisMinGridDistance,n.minLabelPosition=t.yAxisMinLabelPosition,n.maxLabelPosition=t.yAxisMaxLabelPosition,n.fontWeight=t.axisFontWeight,n.fontSize=t.axisFontSize,n.baseGrid.disabled=!0;const a=n.labels.template;a.fontSize=t.axisLabelsFontSize,a.fontWeight=t.axisLabelsFontWeight,a.fill=o.color(t.axisLabelsColor),a.verticalCenter="bottom",a.paddingLeft=t.yAxisLabelSpacing,a.paddingBottom=0;const s=n.grid.template;s.strokeOpacity=1,s.stroke=o.color(t.axisGridStroke),g.isRTL(e.params.container)&&(n.opposite=!0,a.textAlign="middle",a.paddingLeft=0,a.paddingRight=t.yAxisLabelSpacing)}function E(e,{data:i,messages:t}){const{htmlContainer:o}=e.amChart;if(!o)return;const n=s.isSome(i)&&i.refined;e.amChart.cursor.disabled=!n,o.classList.toggle(c.CHART_CSS.cursorEnabled,n);const a=e.data!==i,l=s.applySome(e.data,(e=>e.effectiveUnits))!==s.applySome(i,(e=>e.effectiveUnits));e.data=i,e.messages=t,a&&(R(e),$(e)),l&&(e.yAxis.invalidateLabels(),e.xAxis.invalidateLabels()),te(e)}function R(e){const{xAxis:i,yAxis:t}=e,{minX:o,maxX:n,minY:a,maxY:s}=G({data:e.data,pixelWidth:i.pixelWidth,pixelHeight:t.pixelHeight});i.min=o,i.max=n,t.min=a,t.max=s}function G({data:e,pixelWidth:i,pixelHeight:t}){if(s.isNone(e))return I;const o=e.statistics,n=0,a=s.applySome(o,(e=>e.maxDistance));let l=s.applySome(o,(e=>e.minElevation)),r=s.applySome(o,(e=>e.maxElevation));if(s.isNone(a)||s.isNone(l)||s.isNone(r))return I;const c=Math.max(a-n,P);let u=Math.max(r-l,P);const x=e.effectiveUnits;if(e.dynamicElevationRange){const e=d.convertUnit(c,x.distance,x.elevation);u=Math.max(u,e/m.getConfig().maxChartRatio)}return l-=N*u,r=l+u+M*u,[l,r]=p.niceScale(l,r,10),u=r-l,e.uniformScaling?V({data:e,bounds:{minX:n,maxX:a,minY:l,maxY:r},pixelWidth:i,pixelHeight:t,centered:!0}):{minX:n,maxX:n+c,minY:l,maxY:l+u}}function V({data:e,bounds:i,pixelWidth:t,pixelHeight:o,centered:n}){if(s.isNone(e))return i;let{minX:a,maxX:l,minY:r,maxY:c}=i;if(null==a||null==l||null==r||null==c)return I;const m=l-a,u=c-r,p=e.effectiveUnits,x=d.convertUnit(u,p.elevation,p.distance)/o/(m/t);return x>=1?[a,l]=Z([a,l],x,n):[r,c]=Z([r,c],1/x,n),{minX:a,maxX:l,minY:r,maxY:c}}function Z([e,i],t,o){const n=(i-e)*t;if(o){const t=(e+i)/2-n/2;return[t,t+n]}return[e,e+n]}function $(e){const{amChart:i,data:t}=e;if(s.isNone(t)||0===t.lines.length)return void i.series.clear();const o=new Map,n=new Set(i.series.values),a=t.lines.length;for(let l=0;l<a;l++){const r=t.lines[l];let d=e.series.get(r.id);d?(s.applySome(d.fill,(e=>n.delete(e))),n.delete(d.line)):(d=q(e,r),s.applySome(d.fill,(e=>i.series.push(e))),i.series.push(d.line)),o.set(d.id,d);const c=a-l-1;s.applySome(d.fill,(e=>e.zIndex=c)),d.line.zIndex=a+c,_(e,d,r)}e.series=o;for(const s of n)i.series.removeValue(s)}function _(e,{line:i,fill:t},o){const{theme:n}=e,{am4core:a}=e.amCharts4Index,{r:l,g:r,b:d,a:c}=o.color,m=a.color({r:l,g:r,b:d,a:c}),u=s.unwrapOr(o.samples,new Array),p=u.length>0;i.stroke=m,i.visible=p,s.applySome(t,(e=>{e.visible=p,e.fill=m.lighten(n.seriesFillLighten)}));const x=u.length,g=i.data;if(g.length===x){let e=!1;for(let i=0;i<x;++i){const t=g[i],o=u[i];e=e||s.isSome(t.elevation)!==s.isSome(o.elevation),j(t,o)}e?(i.invalidateData(),s.applySome(t,(e=>e.invalidateData()))):(i.invalidateRawData(),s.applySome(t,(e=>e.invalidateRawData())))}else i.data=u,s.applySome(t,(e=>e.data=u))}function j(e,i){e.x=i.x,e.y=i.y,e.z=i.z,e.distance=i.distance,e.elevation=i.elevation}function q(e,i){const{id:t}=i,o=J(e,`${T}-${t}`);o.strokeWidth=i.chartStrokeWidth,o.dy=i.chartStrokeOffsetY;let n=null;return i.chartFillEnabled&&(n=J(e,`${C}-${t}`),n.fillOpacity=1),{id:t,line:o,fill:n}}function J(e,i){const t=new e.amCharts4Index.am4charts.LineSeries;t.id=i,t.showOnInit=!1,t.simplifiedProcessing=!0,t.minDistance=w,t.excludeFromTotal=!0,t.clickable=!1,t.contextMenuDisabled=!0,t.cursorHoverEnabled=!1,t.cursorTooltipEnabled=!1,t.connect=!1,t.fill=null,t.stroke=null;const o="distance";t.dataFields.valueX=o;const n="elevation";return t.dataFields.valueY=n,t}function K(e,i){const{amChart:t,xAxis:o,yAxis:n}=e;let l=!1;const r=()=>{const{data:i}=e;if(!l||s.isNone(i)||!i.uniformScaling)return;l=!1;const{minX:a,maxX:r,minY:d,maxY:c}=V({data:e.data,bounds:{minX:o.minZoomed,maxX:o.maxZoomed,minY:n.minZoomed,maxY:n.maxZoomed},pixelWidth:o.pixelWidth,pixelHeight:n.pixelHeight,centered:!0});null!=a&&null!=r&&o.zoomToValues(a,r,!0),null!=d&&null!=c&&n.zoomToValues(d,c,!0),t.validate(),te(e)},d=()=>{i(e.xAxis.zoomFactor,e.yAxis.zoomFactor)},c=i=>{e.zooming=i,te(e)},m=[t.events.on("down",(()=>c(!0))),t.events.on("up",(()=>c(!1))),t.cursor.events.on("zoomended",(()=>{l=!0})),o.events.on("startendchanged",r),n.events.on("startendchanged",r),o.events.on("rangechangeended",d),n.events.on("rangechangeended",d)];return a.makeHandle((()=>{m.forEach((e=>e.dispose()))}))}function Q({xAxis:e,yAxis:i}){const t=e=>()=>{e.renderer.grid.each((e=>{e.visible="none"!==e.dataItem.label.dom.getAttribute("display")}))},o=[e.events.on("rangechangeended",t(e)),e.events.on("validated",t(e)),i.events.on("rangechangeended",t(i)),i.events.on("validated",t(i))];return a.makeHandle((()=>{o.forEach((e=>e.dispose()))}))}function ee(e,i){const{amChart:t,xAxis:o,yAxis:n}=e,{cursor:l,events:r}=t,d=i=>{e.pointerIsOver=i,te(e)},c=()=>{d(!1),i(null,null)},m=[l.events.on("cursorpositionchanged",(()=>{if(!e.pointerIsOver)return;te(e);let t=o.toAxisPosition(l.xPosition),a=n.toAxisPosition(l.yPosition);const r=e.data;if(s.isSome(r)&&s.isSome(r.statistics)){const{maxDistance:e,minElevation:i,maxElevation:l}=r.statistics;s.isSome(e)&&(t=ie(t,o.minZoomed,o.maxZoomed,0,e)),s.isSome(i)&&s.isSome(l)&&(a=ie(a,n.minZoomed,n.maxZoomed,i,l))}i(t,a)})),r.on("over",(()=>d(!0))),r.on("out",c),r.on("blur",c)];return a.makeHandle((()=>{m.forEach((e=>e.dispose()))}))}function ie(e,i,t,o,n){return(i+e*(t-i)-o)/(n-o)}function te(e){const{amChart:i,xAxis:t,data:o,theme:n,zooming:a,pointerIsOver:l}=e;if(e.amChart.tooltip.hide(),e.xAxis.hideTooltip(),!l)return;if(a)return;if(s.isNone(o)||!o.refined)return;const r=oe(e);if(s.isSome(r)){const{cursor:o}=i,a=i.tooltip;o.show(0),o.validate(),a.text=r.text,a.show(0),a.validate();const s=r.y-a.contentHeight-n.seriesTooltipSpacing;a.pointerOrientation=s<k?"up":"down",a.pointTo(r,!0),a.validate();const l=t.tooltip;l.text=se(e),l.show(0),l.validate()}}function oe(e){const{amChart:i,yAxis:t,data:o}=e;if(s.isNone(o))return null;const n=o.lines.map((i=>({line:i,y:s.applySome(re(e,i),(e=>e.elevation))}))).sort(ne),a=n.length?n[0].y:null;if(s.isNone(a))return null;const l=i.cursor,r=t.measuredHeight,d=r+i.pixelPaddingTop;return{text:n.map((({y:i,line:t})=>ae(e,t,i))).join("\n"),x:l.point.x+l.parent.pixelX+i.pixelPaddingLeft,y:d-t.valueToPosition(a)*r}}function ne({y:e},{y:i}){return s.isNone(e)?1:s.isNone(i)?-1:i-e}function ae(e,i,t){const{data:o,messages:n}=e;if(s.isNone(o)||s.isNone(n))return"";const a=m.getConfig().formatPrecision,l=h.substitute(n.chartTooltip,{name:u.getTranslatedLineTitle(i,n),elevation:s.isSome(t)?r.formatDecimal(n,t,o.effectiveUnits.elevation,a):m.NOT_AVAILABLE});return`[${i.color.toHex()}]●[/] ${l}`}function se(e){const{data:i,messages:t}=e;if(s.isNone(i)||s.isNone(t))return"";const o=i.lines[0],n=o?re(e,o):null,a=m.getConfig().formatPrecision;return s.isSome(n)?r.formatDecimal(t,n.distance,i.effectiveUnits.distance,a):"-"}function le(e,i){const t=e.xAxis.numberFormatter.clone();return t.format=(t,o,n)=>{const{messages:a,data:l}=e;if(s.isNone(a)||s.isNone(l)||"string"==typeof t)return"";return`${b.formatNumber(t,{maximumFractionDigits:n})} ${r.unitName(a,l.effectiveUnits[i],"abbr")}`},t}function re({amChart:e,xAxis:i},t){const n=s.unwrapOr(t.samples,[]);if(0===n.length)return null;const a=i.toAxisPosition(e.cursor.xPosition),l=i.positionToValue(a);return o.binaryFindClosest(n,l,(e=>e.distance))}e.createChart=X,e.getAdjustedBounds=G,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
