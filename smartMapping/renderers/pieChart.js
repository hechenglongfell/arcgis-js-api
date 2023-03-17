/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../Color","../../renderers/ClassBreaksRenderer","../../renderers/DictionaryRenderer","../../renderers/DotDensityRenderer","../../renderers/HeatmapRenderer","../../renderers/PieChartRenderer","../../renderers/Renderer","../../renderers/SimpleRenderer","../../renderers/UniqueValueRenderer","../../renderers/support/jsonUtils","../../symbols","../../core/Error","../../core/maybe","../../core/screenUtils","../../intl/messages","../../layers/support/AggregateField","../../layers/support/ExpressionInfo","../../renderers/support/AttributeColorInfo","../heuristics/outline","../heuristics/sizeRange","./size","./support/utils","../statistics/predominantCategories","../statistics/support/utils","../support/binningUtils","../support/utils","../support/adapters/support/layerUtils","../symbology/pieChart","../../symbols/support/cimSymbolUtils","../../symbols/SimpleLineSymbol"],(function(e,r,n,a,t,i,s,l,o,u,p,c,d,m,f,y,h,b,g,w,v,S,E,z,T,C,V,x,$,L,I,k){"use strict";const B=[$.LayerType.CSVLayer,$.LayerType.FeatureLayer,$.LayerType.OGCFeatureLayer,$.LayerType.GeoJSONLayer,$.LayerType.WFSLayer];function O(e){return q.apply(this,arguments)}function q(){return(q=r._asyncToGenerator((function*(e){if(!(e&&e.layer&&e.view&&e.attributes?.length))throw new m("pie-chart-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(e.attributes.length>10)throw new m("pie-chart-renderer:invalid-parameters","PieChart renderer does not support more than 10 attributes");e.forBinning&&V.verifyBinningParams(e,"pie-chart-renderer");const r={...e};r.shape=r.shape||"pie",r.othersCategoryEnabled=null==r.othersCategoryEnabled||r.othersCategoryEnabled,r.includeSizeVariable=e.includeSizeVariable||!1;const n=e.forBinning?$.binningCapableLayerTypes:B,a=$.createLayerAdapter(r.layer,n,e.forBinning);if(r.layer=a,!a)throw new m("pie-chart-renderer:invalid-parameters","'layer' must be one of these types: "+$.getLayerTypeLabels(n).join(", "));const t=f.isSome(r.signal)?{signal:r.signal}:null;yield Promise.all([r.view.when(),a.load(t)]);const i=a.geometryType,s="polygon"===i,l="point"===i||"multipoint"===i||s;if(r.outlineOptimizationEnabled=!!s&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=!!l&&r.sizeOptimizationEnabled,!l)throw new m("pie-chart-renderer:not-supported","PieChart renderer is only supported for point and polygon layers");const o=[],u=r.attributes;for(const c of u){const e=yield x.getFieldsList({field:c.field,valueExpression:c.valueExpression});o.push(...e)}const p=z.verifyBasicFieldValidity(a,o.filter(Boolean),"pie-chart-renderer:invalid-parameters");if(p)throw p;return r}))).apply(this,arguments)}function F(e){return P.apply(this,arguments)}function P(){return(P=r._asyncToGenerator((function*(e){let r=e.pieChartScheme,n=null,a=null;const t=yield z.getBasemapInfo(e.basemap,e.view);if(n=f.isSome(t.basemapId)?t.basemapId:null,a=f.isSome(t.basemapTheme)?t.basemapTheme:null,r)return{scheme:L.cloneScheme(r),basemapId:n,basemapTheme:a};const i=L.getSchemes({basemap:n,numColors:e.attributes.length,geometryType:e.layer.geometryType,basemapTheme:a});return i&&(r=i.primaryScheme,n=i.basemapId,a=i.basemapTheme),{scheme:r,basemapId:n,basemapTheme:a}}))).apply(this,arguments)}function R(e,r){return M.apply(this,arguments)}function M(){return(M=r._asyncToGenerator((function*(e,r){const{valueExpression:n,sqlExpression:a,sqlWhere:t}=C.getSumOfAttributesExpr(e.attributes),i=yield h.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return E.createVisualVariables({layer:e.layer,basemap:e.basemap,valueExpression:n,sqlExpression:a,sqlWhere:t,sizeScheme:r,sizeOptimizationEnabled:e.sizeOptimizationEnabled,legendOptions:{title:i.sumOfCategories},view:e.view,signal:e.signal})}))).apply(this,arguments)}function _(e){return U.apply(this,arguments)}function U(){return(U=r._asyncToGenerator((function*(e){const[r,n]=yield Promise.all([O(e),h.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),a=yield F(r),t=a?.scheme;if(!t)throw new m("pie-chart-renderer:insufficient-info","Unable to find pie-chart scheme");const i=r.layer,{includeSizeVariable:s,sizeOptimizationEnabled:o,outlineOptimizationEnabled:u,view:p,signal:c}=r,d=t.sizeScheme,f=r.attributes,b=f.map((e=>e.field)),[g,w,E,C]=yield Promise.all([b.length>1?T({layer:i,fields:b,view:p,signal:c}):null,s?R(r,d):null,!s&&o?S({layer:i,view:p,signal:c}):null,u?v({layer:i,view:p,signal:c}):null]),V=g&&g.predominantCategoryInfos?{uniqueValueInfos:g.predominantCategoryInfos}:{uniqueValueInfos:b.map((e=>({value:e,count:0})))},x=z.createColors(t.colors,f.length),$=f.map(((e,r)=>({field:e.field,valueExpression:e.valueExpression,label:e.label,valueExpressionTitle:e.valueExpressionTitle,color:x[r]}))),I=i.geometryType,B="background"in d&&d.background,q=new l({attributes:$,othersCategory:{label:n.other,color:r.othersCategoryEnabled?t.colorForOthersCategory:null,threshold:.04},holePercentage:"donut"===r.shape?.45:0,backgroundFillSymbol:B?z.createSymbol(I,{type:"2d",color:B.color,outline:z.getSymbolOutlineFromScheme(B,I,C?.opacity)}):null,size:y.toPt(t.size),outline:new k(z.getSymbolOutlineFromScheme(t,"point",C?.opacity)),legendOptions:r.legendOptions});if(w&&(o||w.visualVariables.forEach((e=>{"number"==typeof e.minSize&&"number"==typeof e.maxSize&&(e.minSize*=2.5,e.maxSize*=1.8)})),o&&"point"===I&&w.visualVariables.forEach((e=>{e?.minSize&&"object"==typeof e.minSize&&e.minSize?.stops.forEach((e=>{e.size*=1.8}))})),q.authoringInfo=w.authoringInfo.clone(),q.visualVariables=w.visualVariables?.map((e=>e.clone()))),C?.visualVariables?.length){const e=C.visualVariables.map((e=>e.clone()));q.visualVariables?q.visualVariables.push(...e):q.visualVariables=e}return E?.minSize&&("point"===I&&E.minSize.stops.forEach((e=>{e.size*=2.5})),"polygon"===I&&E.minSize.stops.forEach((e=>{e.size*=1.8})),q.visualVariables?q.visualVariables.push(E.minSize):q.visualVariables=[E.minSize]),{renderer:q,pieChartScheme:L.cloneScheme(t),size:w,basemapId:a.basemapId,basemapTheme:a.basemapTheme,statistics:V}}))).apply(this,arguments)}const G=["unique-value","class-breaks"],j=new n("#aaaaaa"),A=new n("#5c5c5c"),N=[new n("#e60049"),new n("#0bb4ff"),new n("#50e991"),new n("#e6d800"),new n("#9b19f5"),new n("#ffa300"),new n("#dc0ab4"),new n("#b3d4ff"),new n("#00bfa0"),new n("#f0cccc")];function D(e){return W.apply(this,arguments)}function W(){return(W=r._asyncToGenerator((function*(e){if(!e||!e.layer)throw new m("pie-chart-cluster-renderer:missing-parameters","'layer' parameter is required");const r={...e};r.shape=r.shape||"pie",r.defaultSymbolEnabled??(r.defaultSymbolEnabled=!0);const n=e.layer;if(!$.getLayerTypes(B).includes(n.type))throw new m("pie-chart-cluster-renderer:invalid-parameters","'layer' must be one of these types: "+$.getLayerTypeLabels(B).join(", "));const a=f.isSome(r.signal)?{signal:r.signal}:null;yield n.load(a);if(!("point"===n.geometryType))throw new m("pie-chart-cluster-renderer:invalid-parameters","Cluster renderers are only supported for point layers");const{renderer:t}=n;if(!t)throw new m("pie-chart-cluster-renderer:invalid-parameters","input layer does not have a renderer.");if(!G.includes(t.type))throw new m("pie-chart-cluster-renderer:invalid-parameters",`Cannot create a pie chart renderer for clusters based on a ${t.type} renderer.`);if("valueExpression"in t&&t.valueExpression)throw new m("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer whose renderer contains a valueExpression.");if("unique-value"===t.type){if(t.field2)throw new m("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a UniqueValueRenderer using more than one field.");if(t.uniqueValueInfos.length>10)throw new m("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer cannot be created from a UniqueValueRenderer with more than 10 unique value infos.")}if("class-breaks"===t.type){if(t.classBreakInfos.length<2)throw new m("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer renderer with a continuous color or size gradient.");if(t.classBreakInfos.length>10)throw new m("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with more than 10 class break infos.");if("class-breaks-size"===t?.authoringInfo?.type)throw new m("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with breaks varied by size instead of color.")}return r}))).apply(this,arguments)}function H(e){return J.apply(this,arguments)}function J(){return(J=r._asyncToGenerator((function*(e){const r=yield D(e),{layer:n,shape:a,defaultSymbolEnabled:t,legendOptions:i}=r,{renderer:s}=n,o=(yield h.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")).other;let u=[];"unique-value"===s.type&&(u=Z({renderer:s,defaultSymbolEnabled:t,defaultLabelBackup:o})),"class-breaks"===s.type&&(u=K({renderer:s,defaultSymbolEnabled:t,defaultLabelBackup:o}));const p=[],c=[];for(const l of u){const{field:e,color:r}=l;p.push(e),c.push(new w({color:r,field:e.name,label:e.alias}))}return{fields:p,renderer:new l({attributes:c,legendOptions:i,holePercentage:"donut"===a?.45:0,outline:null,size:18,othersCategory:null})}}))).apply(this,arguments)}function Z(e){const{renderer:r,defaultSymbolEnabled:n,defaultLabelBackup:a}=e,{field:t,uniqueValueInfos:i,defaultSymbol:s,defaultLabel:l}=r,o=s&&n,u=o?9:10,p=z.createColors(N,u),c=i.slice(0,u).map(((e,r)=>{const n=e.label,a=p[r];return{field:new b({name:Q(e.value?.toString()),alias:n,onStatisticExpression:new g({title:`Field definition - ${n}`,expression:Y(t,e),returnType:"number"}),statisticType:"sum"}),color:X(e.symbol,a)}}));if(o){const e="cluster_default",r=l||a;c.push({field:new b({name:Q(e),alias:r,onStatisticExpression:new g({title:`Field definition - ${r}`,expression:ee(t,i),returnType:"number"}),statisticType:"sum"}),color:X(s,A)})}return c}function K(e){const{renderer:r,defaultSymbolEnabled:n,defaultLabelBackup:a}=e,{field:t,classBreakInfos:i,defaultSymbol:s,defaultLabel:l}=r,o=s&&n,u=o?9:10,p=z.createColors(N,u),c=i.slice(0,u).map(((e,r)=>{const n=e.label||`${e.minValue} - ${e.maxValue}`,a=p[r];return{field:new b({name:Q(n),alias:n,onStatisticExpression:new g({title:`Field definition - ${n}`,expression:re(t,e),returnType:"number"}),statisticType:"sum"}),color:X(e.symbol,a)}}));if(o){const e="cluster_default",r=l||a;c.push({field:new b({name:Q(e),alias:r,onStatisticExpression:new g({title:`Field definition - ${r}`,expression:ne(t,i),returnType:"number"}),statisticType:"sum"}),color:X(s,A)})}return c}function Q(e){return"SUM_"+(e+"").replace(/[^a-zA-Z0-9_]/g,"_")}function X(e,r){if("simple-marker"===e.type&&e.color)return e.color.clone();if("cim"===e.type){const r=I.getCIMSymbolColor(e);if(r)return r.clone()}return r?r.clone():j.clone()}function Y(e,r){return`Number(Text($feature["${e}"]) == "${r.value+""}")`}function ee(e,r){return`Number(!(${r.map((r=>`(Text($feature["${e}"]) == "${r.value+""}")`)).join(" || ")}))`}function re(e,r){return`Number($feature["${e}"] >= ${r.minValue} && $feature["${e}"] < ${r.maxValue})`}function ne(e,r){return`Number(!(${r.map((r=>`($feature["${e}"] >= ${r.minValue} && $feature["${e}"] < ${r.maxValue})`)).join(" || ")}))`}e.createRenderer=_,e.createRendererForClustering=H,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
