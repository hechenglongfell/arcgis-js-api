/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../kernel","../request","../core/Error","../core/jsonMap","../core/maybe","../core/screenUtils","../core/urlUtils","../geometry/Polygon","../layers/support/fieldUtils","../layers/support/floorFilterUtils","../renderers/visualVariables/support/visualVariableUtils","./utils","./geoprocessor/execute","./geoprocessor/submitJob","./support/fileFormat","./support/layoutTemplate","./support/printTaskUtils","./support/PrintTemplate"],(function(e,t,i,r,n,a,o,l,s,u,y,c,p,d,f,m,g,h,b,S){"use strict";const x={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},w=new a.JSONMap({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),v=new a.JSONMap({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),T=new Map;function D(e,t,i){return I.apply(this,arguments)}function I(){return(I=t._asyncToGenerator((function*(e,t,i){const n=F(e);let a=T.get(n);return Promise.resolve().then((()=>a?{data:a.gpMetadata}:(a={gpServerUrl:n,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},r(n,{query:{f:"json"}})))).then((e=>(a.gpMetadata=e.data,a.cimVersion=a.gpMetadata.cimVersion,a.is11xService=!!a.cimVersion,T.set(n,a),E(t,a)))).then((r=>{const n=xe(a);let o;const l=e=>"sync"===n?e.results&&e.results[0]&&e.results[0].value:o.fetchResultData("Output_File",null,i).then((e=>e.value));return"async"===n?m.submitJob(e,r,void 0,i).then((e=>(o=e,e.waitForJobCompletion({interval:t.updateDelay}).then(l)))):f.execute(e,r,void 0,i).then(l)}))}))).apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return(M=t._asyncToGenerator((function*(e){const t=F(e);return xe(T.get(t))}))).apply(this,arguments)}function E(e,t){return O.apply(this,arguments)}function O(){return(O=t._asyncToGenerator((function*(e,t){t=t||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const r=e.template||new S;null==r.showLabels&&(r.showLabels=!0);const a=r.exportOptions;let o;const l=h.toJSON(r.layout);if(a){if(o={dpi:a.dpi},"map_only"===l.toLowerCase()||""===l){const e=a.width,t=a.height;o.outputSize=null!=e&&null!=t?[e,t]:void 0}}const s=r.layoutOptions;let u;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),u={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,elementOverrides:s.elementOverrides,scaleBarOptions:{metricUnit:w.toJSON(e),metricLabel:e?x[e]:void 0,nonMetricUnit:w.toJSON(t),nonMetricLabel:t?x[t]:void 0}}}let y=null;s?.legendLayers&&(y=s.legendLayers.map((e=>{const i=e.layerId;t.legendLayerNameMap[i]=e.title;const r={id:i};return e.subLayerIds&&(r.subLayerIds=e.subLayerIds),r})));const c=yield V(e,r,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),i=/[\u0600-\u06FF]/,r=t=>{const r=t.text,n=t.font,a=n&&n.family&&n.family.toLowerCase();r&&n&&("arial"===a||"arial unicode ms"===a)&&(n.family=e.test(r)?"Arial Unicode MS":"Arial","normal"!==n.style&&i.test(r)&&(n.family="Arial Unicode MS"))},a=()=>{throw new n("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{e.featureCollection?.layers?e.featureCollection.layers.forEach((e=>{if(e.layerDefinition?.drawingInfo?.renderer?.symbol){const i=e.layerDefinition.drawingInfo.renderer;"esriTS"===i.symbol.type?r(i.symbol):"CIMSymbolReference"!==i.symbol.type||t.is11xService||a()}e.featureSet?.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||t.is11xService||a())}))})):!t.is11xService&&e.layerDefinition?.drawingInfo?.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&a()}))}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:o,layoutOptions:u||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=y?y:t.legendLayers.slice()}}),t.legendLayers.length=0,T.set(t.gpServerUrl,t);const p={Web_Map_as_JSON:JSON.stringify(c),Format:g.toJSON(r.format),Layout_Template:l,Layout_Item_ID:void 0};if(r.layoutItem){delete p.Layout_Template;const e=r.layoutItem;yield e.load(),"public"!==e.access&&i.id&&(yield i.id.getCredential(t.gpServerUrl)),p.Layout_Item_ID=JSON.stringify({id:e.id})}return e.extraParameters&&Object.assign(p,e.extraParameters),p}))).apply(this,arguments)}function V(e,t,i){return P.apply(this,arguments)}function P(){return(P=t._asyncToGenerator((function*(e,t,i){const r=e.view;let n=r.spatialReference;const a={operationalLayers:yield _(r,t,i)};t.includeTables&&(a.tables=yield ae(r));let l=i.ssExtent||e.extent||r.extent;if(n&&n.isWrappable&&(l=l.clone()._normalize(!0),n=l.spatialReference),a.mapOptions={extent:l&&l.toJSON(),spatialReference:n&&n.toJSON(),showAttribution:t.attributionVisible},i.ssExtent=null,r.background&&(a.background=r.background.toJSON()),r.rotation&&(a.mapOptions.rotation=-r.rotation),t.scalePreserved&&(a.mapOptions.scale=t.outScale||r.scale),o.isSome(r.timeExtent)){const e=o.isSome(r.timeExtent.start)?r.timeExtent.start.getTime():null,t=o.isSome(r.timeExtent.end)?r.timeExtent.end.getTime():null;a.mapOptions.time=[e,t]}return a}))).apply(this,arguments)}function F(e){let t=e;const i=t.lastIndexOf("/GPServer/");return i>0&&(t=t.slice(0,i+9)),t}function _(e,t,i){return R.apply(this,arguments)}function R(){return(R=t._asyncToGenerator((function*(e,t,i){const r=[],n={layerView:null,printTemplate:t,view:e};let a=0;t.scalePreserved&&(a=t.outScale||e.scale);const o=b.getVisibleLayerViews(e,a);for(const l of o){const e=l.layer;if(!e.loaded||"group"===e?.type)continue;let t;n.layerView=l,t=b.isScreenshotRequired(l)?yield te(e,n,i):b.isBingMapsLayer(e)?N(e):b.isCSVLayer(e)?yield J(e,n,i):"feature"===e?.type?yield G(e,n,i):"geojson"===e?.type?yield z(e,n,i):"graphics"===e?.type?yield B(e,n,i):"imagery"===e?.type?K(e,i):"imagery-tile"===e?.type?yield W(e,n,i):"kml"===e?.type?yield Q(e,n,i):"map-image"===e?.type?X(e,n,i):"map-notes"===e?.type?yield Y(n,i):"open-street-map"===e?.type?ee():"stream"===e?.type?yield re(e,n,i):"tile"===e?.type?le(e,i):"vector-tile"===e?.type?yield se(e,n,i):"web-tile"===e?.type?ye(e):"wms"===e?.type?ce(e):"wmts"===e?.type?pe(e):yield te(e,n,i),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=i.legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,b.isBlendLayer(e)&&e.blendMode&&"normal"!==e.blendMode&&(t.blendMode=e.blendMode),r.push(t)))}if(a&&r.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const n=yield U(null,e.graphics,t,i);n&&r.push(n)}return r}))).apply(this,arguments)}function N(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}function J(e,t,i){return C.apply(this,arguments)}function C(){return(C=t._asyncToGenerator((function*(e,t,i){e.legendEnabled&&i.legendLayers.push({id:e.id});const r=t.layerView,n=t.printTemplate;let a;if(!i.is11xService||r.filter){return U(e,yield be(r),n,i)}return a={type:"CSV"},e.write(a,{origin:"web-map"}),delete a.popupInfo,delete a.layerType,a.showLabels=n.showLabels&&e.labelsVisible,a}))).apply(this,arguments)}function U(e,t,i,r){return k.apply(this,arguments)}function k(){return(k=t._asyncToGenerator((function*(e,t,i,r){let n;const a=b.createPolygonLayer(),o=b.createPolylineLayer(),l=b.createPointLayer(),s=b.createMultipointLayer(),c=b.createPointLayer();if(c.layerDefinition.name="textLayer",delete c.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?a.layerDefinition.name=o.layerDefinition.name=l.layerDefinition.name=s.layerDefinition.name=r.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON(),i=a.layerDefinition.drawingInfo;i&&(i.renderer=t);const r=o.layerDefinition.drawingInfo;r&&(r.renderer=t);const n=l.layerDefinition.drawingInfo;n&&(n.renderer=t);const u=s.layerDefinition.drawingInfo;u&&(u.renderer=t)}if(i.showLabels&&e.labelsVisible&&"function"==typeof e.write){const t=e.write({},{origin:"web-map"}).layerDefinition?.drawingInfo?.labelingInfo;if(t){n=!0;const e=a.layerDefinition.drawingInfo;e&&(e.labelingInfo=t);const i=o.layerDefinition.drawingInfo;i&&(i.labelingInfo=t);const r=l.layerDefinition.drawingInfo;r&&(r.labelingInfo=t);const u=s.layerDefinition.drawingInfo;u&&(u.labelingInfo=t)}}}let p;e?.renderer||n||(delete a.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo);const d=e?.fieldsIndex,f=e?.renderer;if(d){const t=new Set;n&&(yield y.collectLabelingFields(t,e)),f&&"function"==typeof f.collectRequiredFields&&(yield f.collectRequiredFields(t,d)),p=Array.from(t);const i=d.fields.map((e=>e.toJSON()));a.layerDefinition.fields=i,o.layerDefinition.fields=i,l.layerDefinition.fields=i,s.layerDefinition.fields=i}const m=t&&t.length;let g;for(let y=0;y<m;y++){const n=t[y]||t.getItemAt(y);if(!1===n.visible||!n.geometry)continue;if(g=n.toJSON(),g.hasOwnProperty("popupTemplate")&&delete g.popupTemplate,g.geometry&&g.geometry.z&&delete g.geometry.z,g.symbol&&g.symbol.outline&&"esriCLS"===g.symbol.outline.type&&!r.is11xService)continue;!r.is11xService&&g.symbol&&g.symbol.outline&&g.symbol.outline.color&&g.symbol.outline.color[3]&&(g.symbol.outline.color[3]=255);const d=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!g.symbol&&e&&e.renderer&&d&&!r.is11xService){const t=e.renderer,i=yield t.getSymbolAsync(n);if(!i)continue;g.symbol=i.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&b.applyVisualVariables(g.symbol,{renderer:t,graphic:n,symbol:i})}if(g.symbol&&(g.symbol.angle||delete g.symbol.angle,we(g.symbol)?g.symbol=yield fe(g.symbol,r):g.symbol.text&&delete g.attributes),(!i||!i.forceFeatureAttributes)&&p?.length){const e={};p.forEach((t=>{g.attributes&&g.attributes.hasOwnProperty(t)&&(e[t]=g.attributes[t])})),g.attributes=e}"polygon"===n.geometry.type?a.featureSet.features.push(g):"polyline"===n.geometry.type?o.featureSet.features.push(g):"point"===n.geometry.type?g.symbol&&g.symbol.text?c.featureSet.features.push(g):l.featureSet.features.push(g):"multipoint"===n.geometry.type?s.featureSet.features.push(g):"extent"===n.geometry.type&&(g.geometry=u.fromExtent(n.geometry).toJSON(),a.featureSet.features.push(g))}const h=[a,o,s,l,c].filter((e=>e.featureSet.features.length>0));for(const u of h){const e=u.featureSet.features.every((e=>e.symbol));!e||i&&i.forceFeatureAttributes||u.featureSet.features.forEach((e=>{delete e.attributes})),e&&delete u.layerDefinition.drawingInfo,u.layerDefinition.drawingInfo&&u.layerDefinition.drawingInfo.renderer&&(yield ge(u.layerDefinition.drawingInfo.renderer,r))}return h.length?{featureCollection:{layers:h},showLabels:n}:null}))).apply(this,arguments)}function G(e,t,i){return A.apply(this,arguments)}function A(){return(A=t._asyncToGenerator((function*(e,t,i){let r;const n=e.renderer,a=parseFloat(i.cimVersion);if("binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type&&(!i.is11xService||a<2.9)||"pie-chart"===n?.type||"dot-density"===n?.type&&(!i.is11xService||a<2.6))return te(e,t,i);e.legendEnabled&&i.legendLayers.push({id:e.id});const o=t.layerView,{printTemplate:l,view:s}=t,u=n&&("valueExpression"in n&&n.valueExpression||"hasVisualVariables"in n&&n.hasVisualVariables()),y="feature-layer"!==e.source?.type&&"ogc-feature"!==e.source?.type;if(!i.is11xService&&u||o.filter||y||!n||"field"in n&&null!=n.field&&("string"!=typeof n.field||!e.getField(n.field))){const t=yield be(o);r=yield U(e,t,l,i)}else{if(r={id:(d=e.write()).id,title:d.title,opacity:d.opacity,minScale:d.minScale,maxScale:d.maxScale,url:d.url,layerType:d.layerType,customParameters:d.customParameters,layerDefinition:d.layerDefinition},r.showLabels=l.showLabels&&e.labelsVisible,de(r,e),r.layerDefinition?.drawingInfo?.renderer&&(delete r.layerDefinition.minScale,delete r.layerDefinition.maxScale,yield ge(r.layerDefinition.drawingInfo.renderer,i),"visualVariables"in n&&n.visualVariables&&n.visualVariables[0])){const e=n.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=p.getSizeRangeAtScale(e,s.scale);r.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,r.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=c.getFloorFilterClause(o);t&&(r.layerDefinition||(r.layerDefinition={}),r.layerDefinition.definitionExpression=r.layerDefinition.definitionExpression?`(${r.layerDefinition.definitionExpression}) AND (${t})`:t)}var d;return r}))).apply(this,arguments)}function z(e,t,i){return $.apply(this,arguments)}function $(){return($=t._asyncToGenerator((function*(e,t,i){if("binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type)return te(e,t,i);e.legendEnabled&&i.legendLayers.push({id:e.id});return U(e,yield be(t.layerView),t.printTemplate,i)}))).apply(this,arguments)}function B(e,t,i){return q.apply(this,arguments)}function q(){return(q=t._asyncToGenerator((function*(e,{printTemplate:t},i){return U(e,null,t,i)}))).apply(this,arguments)}function K(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;if(i.bandIds=e.bandIds,i.compressionQuality=e.compressionQuality,i.format=e.format,i.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(i.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(t.is11xService)e.renderingRule&&(i.renderingRule=e.renderingRule.toJSON()),e.renderer&&(i.layerDefinition=i.layerDefinition||{},i.layerDefinition.drawingInfo=i.layerDefinition.drawingInfo||{},i.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(i.renderingRule=t.toJSON())}return de(i,e),i}function W(e,t,i){return j.apply(this,arguments)}function j(){return(j=t._asyncToGenerator((function*(e,t,i){if("flow"===e.renderer?.type)return te(e,t,i);e.legendEnabled&&i.legendLayers.push({id:e.id});const r={bandIds:(n=e.write()||{}).bandIds,customParameters:n.customParameters,interpolation:n.interpolation,layerDefinition:n.layerDefinition};var n;return r.layerType="ArcGISImageServiceLayer",de(r,e),r}))).apply(this,arguments)}function Q(e,t,i){return H.apply(this,arguments)}function H(){return(H=t._asyncToGenerator((function*(e,t,i){const r=t.printTemplate;if(i.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=s.normalize(e.url),t}{const n=[],a=t.layerView;a.allVisibleMapImages.forEach(((t,i)=>{const r={id:`${e.id}_image${i}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?r.imageData=t.href.substr(22):r.url=t.href,n.push(r)}));const o=[...a.allVisiblePoints.items,...a.allVisiblePolylines.items,...a.allVisiblePolygons.items],l={id:e.id,...yield U(null,o,r,i)};return n.push(l),n}}))).apply(this,arguments)}function X(e,{view:t},i){let r;const n={id:e.id,subLayerIds:[]};let a=[];const o=t.scale,l=e=>{const t=0===o,i=0===e.minScale||o<=e.minScale,r=0===e.maxScale||o>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(l);else{const t=e.toExportImageJSON(),i={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};a.unshift(i),n.subLayerIds.push(e.id)}};var s;return e.sublayers&&e.sublayers.forEach(l),a.length&&(a=a.map((({id:e,name:t,layerDefinition:i})=>({id:e,name:t,layerDefinition:i}))),r={layerType:(s=e.write()).layerType,customParameters:s.customParameters},r.layers=a,r.visibleLayers=e.capabilities?.exportMap?.supportsDynamicLayers?void 0:n.subLayerIds,de(r,e),e.legendEnabled&&i.legendLayers.push(n)),r}function Y(e,t){return Z.apply(this,arguments)}function Z(){return(Z=t._asyncToGenerator((function*({layerView:e,printTemplate:t},i){const r=[],n=e.layer;if(o.isSome(n.featureCollections))for(const a of n.featureCollections){const e=yield U(a,a.source,t,i);e&&r.push(...e.featureCollection.layers)}else if(o.isSome(n.sublayers))for(const a of n.sublayers){const e=yield U(null,a.graphics,t,i);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}))).apply(this,arguments)}function ee(){return{type:"OpenStreetMap"}}function te(e,t,i){return ie.apply(this,arguments)}function ie(){return(ie=t._asyncToGenerator((function*(e,{printTemplate:t,view:i},r){const n={type:"image"},a={format:"png",ignoreBackground:!0,layers:[e],rotation:0},o=r.ssExtent||i.extent.clone();let u=96,y=!0,c=!0;if(t.exportOptions){const e=t.exportOptions;null!=e.dpi&&e.dpi>0&&(u=e.dpi),null!=e.width&&e.width>0&&(y=e.width%2==i.width%2),null!=e.height&&e.height>0&&(c=e.height%2==i.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===i.scale)&&96===u&&(!y||!c)&&(a.area={x:0,y:0,width:i.width,height:i.height},y||(a.area.width-=1),c||(a.area.height-=1),!r.ssExtent)){const e=i.toMap(l.createScreenPoint(a.area.width,a.area.height));o.ymin=e.y,o.xmax=e.x,r.ssExtent=o}n.extent=o.clone()._normalize(!0).toJSON();const p=yield i.takeScreenshot(a);return n.imageData=s.dataComponents(p.dataUrl)?.data,n}))).apply(this,arguments)}function re(e,t,i){return ne.apply(this,arguments)}function ne(){return(ne=t._asyncToGenerator((function*(e,{layerView:t,printTemplate:i},r){e.legendEnabled&&r.legendLayers.push({id:e.id});return U(e,yield be(t),i,r)}))).apply(this,arguments)}function ae(e){return oe.apply(this,arguments)}function oe(){return(oe=t._asyncToGenerator((function*(e){const t=[],i=[];for(const n of e.map.allTables)"feature"!==n.type||n.loaded||i.push(n.load());i.length&&(yield Promise.allSettled(i));for(const n of e.map.allTables)if("feature"===n.type&&n.loaded&&n.isTable&&"feature-layer"===n.source?.type){const e={id:(r=n.write()).id,title:r.title,customParameters:r.customParameters,layerDefinition:{definitionExpression:r.layerDefinition?.definitionExpression}};de(e,n),t.push(e)}var r;return t.length?t:void 0}))).apply(this,arguments)}function le(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const i={layerType:(r=e.write()).layerType,customParameters:r.customParameters};var r;return de(i,e),i}function se(e,t,i){return ue.apply(this,arguments)}function ue(){return(ue=t._asyncToGenerator((function*(e,t,i){if(i.is11xService&&e.serviceUrl&&e.styleUrl){const t=d.getToken(e.styleUrl,e.apiKey),r=d.getToken(e.serviceUrl,e.apiKey);if(!t&&!r||"2.1.0"!==i.cimVersion){const i={type:"VectorTileLayer"};return i.styleUrl=s.normalize(e.styleUrl),i.token=t,r!==t&&(i.additionalTokens=[{url:e.serviceUrl,token:r}]),i}}return te(e,t,i)}))).apply(this,arguments)}function ye(e){const t=e.urlTemplate?.replace(/\${/g,"{"),i={type:"WebTiledLayer",urlTemplate:t,credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(i.subDomains=e.subDomains),i}function ce(e){let t;const i=[],r=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(r):e.name&&i.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(r),i.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:s.normalize(e.url),version:e.version}),t}function pe(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:s.normalize(e.url)}}function de(e,t){t.url&&(e.url=s.normalize(e.url||t.url),e.token=d.getToken(e.url,t.apiKey))}function fe(e,t){return me.apply(this,arguments)}function me(){return(me=t._asyncToGenerator((function*(e,t){t.canvas||(t.canvas=document.createElement("canvas"));const i=1024;t.canvas.width=i,t.canvas.height=i;const n=t.canvas.getContext("2d");let a,o;if(e.path){const t=new Path2D(e.path);t.closePath(),n.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",n.fill(t);const r=b.getContextBoundingBox(n);if(!r)return null;n.clearRect(0,0,i,i);const s=l.pt2px(e.size)/Math.max(r.width,r.height);n.scale(s,s);const u=i/s,y=u/2-r.width/2-r.x,c=u/2-r.height/2-r.y;if(n.translate(y,c),Array.isArray(e.color)&&n.fill(t),e.outline?.width&&Array.isArray(e.outline.color)){const i=e.outline;n.lineWidth=l.pt2px(i.width)/s,n.lineJoin="round",n.strokeStyle=`rgba(${i.color[0]},${i.color[1]},${i.color[2]},${i.color[3]/255})`,n.stroke(t),r.width+=n.lineWidth,r.height+=n.lineWidth}r.width*=s,r.height*=s;const p=n.getImageData(i/2-r.width/2,i/2-r.height/2,Math.ceil(r.width),Math.ceil(r.height));a=p.width,o=p.height,n.canvas.width=a,n.canvas.height=o,n.putImageData(p,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,i=(yield r(t,{responseType:"image"})).data;a=l.pt2px(e.width),o=l.pt2px(e.height),n.canvas.width=a,n.canvas.height=o,n.drawImage(i,0,0,n.canvas.width,n.canvas.height)}return{type:"esriPMS",imageData:n.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:l.px2pt(o),width:l.px2pt(a),xoffset:e.xoffset,yoffset:e.yoffset}}))).apply(this,arguments)}function ge(e,t){return he.apply(this,arguments)}function he(){return(he=t._asyncToGenerator((function*(e,t){const i=e.type;if("simple"===i&&we(e.symbol))e.symbol=yield fe(e.symbol,t);else if("uniqueValue"===i||"classBreaks"===i){we(e.defaultSymbol)&&(e.defaultSymbol=yield fe(e.defaultSymbol,t));const r=e["uniqueValue"===i?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)we(e.symbol)&&(e.symbol=yield fe(e.symbol,t))}}))).apply(this,arguments)}function be(e){return Se.apply(this,arguments)}function Se(){return(Se=t._asyncToGenerator((function*(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}))).apply(this,arguments)}function xe(e){return e.gpMetadata&&e.gpMetadata.executionType?v.fromJSON(e.gpMetadata.executionType):"sync"}function we(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}e.execute=D,e.getGpPrintParams=E,e.getGpServerUrl=F,e.getMode=L,e.printCacheMap=T,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
