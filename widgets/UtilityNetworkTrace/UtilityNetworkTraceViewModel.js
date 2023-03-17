/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/Error","../../core/Evented","../../core/HandleOwner","../../core/Logger","../../core/maybe","../../core/reactiveUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/Point","../../networks/support/utils","../../rest/networks/trace","../../rest/networks/support/TraceLocation","../../rest/networks/support/TraceParameters","./support/GeometryHandler","./support/GraphicHandler"],(function(e,t,r,s,i,l,a,n,o,c,u,h,p,d,g,y,f,m,_,w){"use strict";let b=function(t){function i(e){var r;return(r=t.call(this,e)||this)._activeProgress=!1,r._clickHandler=null,r._flags=[],r._geometryHandler=null,r._graphicHandler=null,r._highlightHandler=[],r._traces=[],r._traceResults=[],r._unObject=null,r._watchHandler=null,r.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},r.flags=[],r.gdbVersion="sde.DEFAULT",r.selectedTraces=[],r.selectOnComplete=!0,r.showGraphicsOnComplete=!0,r.showSelectionAttributes=!0,r}e._inheritsLoose(i,t);var l=i.prototype;return l.initialize=function(){this._geometryHandler=new _.GeometryHandler,this._graphicHandler=new w.GraphicHandler},l.destroy=function(){this.view=null},l.addFlagByHit=function(e,t){return new Promise(((r,s)=>{this.view.popup.autoOpenEnabled=!1,this._clickHandler&&this._clickHandler.remove(),this.emit("add-flag",{type:e}),this._clickHandler=this.view.on("click",(i=>{this.queryFlagByHitTest(i,e,t).then((s=>{this.view.popup.autoOpenEnabled=!0,this._clickHandler.remove(),this.emit("add-flag-complete",{type:e,symbol:t}),r(s)})).catch((r=>{this.view.popup.autoOpenEnabled=!0,this._clickHandler.remove(),this.emit("add-flag-error",{type:e,symbol:t}),s(r)}))}))}))},l.addFlagsOnLoad=function(){var t=e._asyncToGenerator((function*(){var t=this;return new Promise((r=>{const s=[];this._watchHandler=o.when((()=>!this.view.updating),e._asyncToGenerator((function*(){if(t._flags.length>0)r(s);else{const i=t.flags.map(function(){var r=e._asyncToGenerator((function*(e){if(e.mapPoint){const r=new d({x:e.mapPoint.x,y:e.mapPoint.y,spatialReference:e.mapPoint.spatialReference.wkid}),i={screenPoint:t.view.toScreen(r),mapPoint:r};(yield t.queryFlagByHitTest(i,e.type))||("barrier"===e.type?s.push("barrier"):s.push("starting-point"))}}));return function(e){return r.apply(this,arguments)}}());yield Promise.all(i),r(s)}})),{initial:!0})}))}));function r(){return t.apply(this,arguments)}return r}(),l.addResultGraphicToView=function(){var t=e._asyncToGenerator((function*(e,t){for(const r in e.results.aggregatedGeometry)if("line,multipoint,polygon".includes(r)&&null!==e.results.aggregatedGeometry[r]){e.results.aggregatedGeometry[r].spatialReference=this._unObject.spatialReference,e.graphicEnabled=!0;const s=yield this._geometryHandler.projectGeometry(e.results.aggregatedGeometry[r],this.view.spatialReference),i={globalid:e.trace.globalId};if(null!==s){const e=this._graphicHandler.makeGraphic(s,t.color,i,this.view.spatialReference);this.view.graphics.add(e)}}}));function r(e,r){return t.apply(this,arguments)}return r}(),l.addTerminal=function(e,t){const r=[...this._flags];r.forEach((r=>{r.globalId===t.globalId&&(t.selectedTerminals.includes(parseInt(e,10))||r.selectedTerminals.push(parseInt(e,10)))})),this._flags=r},l.callTrace=function(){var t=e._asyncToGenerator((function*(){var t=this;const r=this._traces.filter((e=>e.selected));return r.length>0&&(this._traceResults.length>0&&this._traceResults.forEach((e=>{this.removeResultGraphicFromView(e)})),this._traceResults=[],this.removeSelection(),yield Promise.all(r.map(function(){var r=e._asyncToGenerator((function*(e,r){const s=e,i=new m({gdbVersion:t.gdbVersion,moment:null,traceType:s.traceType,traceLocations:t._flags,namedTraceConfigurationGlobalId:s.globalId,traceConfiguration:null,outSpatialReference:null,resultTypes:null});yield t.executeTrace(s,t._unObject.networkServiceUrl,i).then((e=>{if(e.hasOwnProperty("results")){const s={...e};if(null!==s.results){const e=[...s.results.elements];s.results.elements.length=0;const i=new Map;for(const t of e)i.has(t.globalId)||(i.set(t.globalId,!0),s.results.elements.push(t));const l=[...t._traceResults];l.splice(r,0,s),t._traceResults=l,null!==s.results&&(t.selectOnComplete&&t.mergeSelection(!0,s.trace),t.showGraphicsOnComplete&&t.addResultGraphicToView(s,s.graphicColor))}else{const s=[...t._traceResults];s.splice(r,0,e),t._traceResults=s}t._activeProgress=!1}else{t._activeProgress=!1;const s=[...t._traceResults];s.splice(r,0,e),t._traceResults=s}})).catch((e=>{throw t._activeProgress=!1,e}))}));return function(e,t){return r.apply(this,arguments)}}())),!0)}));function r(){return t.apply(this,arguments)}return r}(),l.changeResultGraphicColor=function(e,t){const r=[...this._traceResults];r.length>0&&r.forEach((r=>{r.trace.globalId===t.trace.globalId&&(r.graphicColor=e,r.graphicEnabled=!0)})),this._traceResults=r,this.removeResultGraphicFromView(t),this.addResultGraphicToView(t,e)},l.changeFlagSymbol=function(e,t){this._flags.length>0&&this._flags.forEach((r=>{r.type===e&&t&&(r.mapGraphic.symbol=t)}))},l.checkCanTrace=function(){const e={status:!0,issues:[]};let t=!1;const r=this._flags.some((e=>"starting-point"===e.type)),s=this._flags.filter((e=>null!==e.allTerminals));s.length>0&&(t=s.some((e=>e.selectedTerminals.length<=0)));let i=[];return r?(i=this._traces.filter((e=>e.selected)),i.length<=0?(e.status=!1,e.issues=["noTrace"],t&&(e.status=!1,e.issues=["noTrace","noTerminalSelected"])):t&&(e.status=!1,e.issues=["noTerminalSelected"])):(i=this._traces.filter((e=>!0===e.selected)),i.length>0?(e.status=!1,e.issues=["noStart"],t&&(e.status=!1,e.issues=["noStart","noTerminalSelected"])):(e.status=!1,e.issues=["noStart","noTrace"],t&&(e.status=!1,e.issues=["noStart","noTrace","noTerminalSelected"]))),e},l.checkSelectionExist=function(){let e=!1;return this._highlightHandler.some((t=>{t&&(e=!0)})),e},l.clearResult=function(e){let t=this._traceResults;if(t.length>0){const r=t.filter((t=>t.trace.globalId===e.globalId));r.length>0&&this.removeResultGraphicFromView(r[0]),t=t.filter((t=>t.trace.globalId!==e.globalId))}this._traceResults=t,0===t.length?(this.removeSelection(),this.emit("clear-selection",{resultSet:[]})):this.mergeSelection(!1,e)},l.executeTrace=function(e,t,r){const s=this._processFlags(r.traceLocations);return r.traceLocations=s,y.trace(t,r).then((t=>({trace:e,results:t,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:"success"}))).catch((t=>({trace:e,results:null,selectionEnabled:!1,graphicEnabled:!1,graphicColor:this.defaultGraphicColor,status:t.message})))},l.getValidSources=function(){let e=[];const t=this._unObject.dataElement.domainNetworks;for(const r of t)e=e.concat(r.junctionSources),e=e.concat(r.edgeSources);return e},l.loadUtilityNetwork=function(){var t=e._asyncToGenerator((function*(){yield this.view.when();const e=this.view.map;if(e.utilityNetworks?.length){const r=e.utilityNetworks.getItemAt(0);yield r.load(),this._unObject=r;try{yield e.loadAll(),this._populateOutfields()}catch(t){this._populateOutfields()}return r}return null}));function r(){return t.apply(this,arguments)}return r}(),l.manageFilterBarrier=function(e,t){const r=[...this._flags];r.forEach((r=>{r.globalId===t.globalId&&"barrier"===t.type&&r.id===t.id&&(r.isFilterBarrier=e)})),this._flags=r},l.mergeSelection=function(e,t){let r=[];const s=[...this._traceResults],i=t.globalId;s.forEach((t=>{i===t.trace.globalId&&(t.selectionEnabled=e),t.selectionEnabled&&null!==t.results.elements&&(r=r.concat(t.results.elements))})),this.selectResults([...new Set(r)])},l.queryFeaturesById=function(){var t=e._asyncToGenerator((function*(t){var s=this;const i=g.getObjectIdsFromElements(this._unObject,t),l=this._getUniqueMapLayerViews(this.view),a={layerUrl:i[0].layerUrl,objectIds:i[0].objectIds,outFields:["*"]},n=l.filter((e=>e.layer?.parsedUrl?.path===i[0].layerUrl));if(n.length>0){const t=yield Promise.all(n.map(function(){var t=e._asyncToGenerator((function*(e){const t=new r,i=e.layer;t.add(i);const l={layers:t,layerInfos:[a],returnGeometry:!0,outSpatialReference:s.view.spatialReference};return(yield g.getFeaturesFromLayers(l))[0]}));return function(e){return t.apply(this,arguments)}}())),i=t.filter((e=>e.featureSet.features.length>0));return i.length>0?i:null}return null}));function s(e){return t.apply(this,arguments)}return s}(),l.queryFlagByHitTest=function(e,t,r){return this._lookupFlagByHit(e).then((e=>{if(e.length>0){const s=[...this._flags],i=r;return e.forEach((e=>{const r=e.graphic,l=r.attributes.hasOwnProperty("GLOBALID")?r.attributes.GLOBALID:r.attributes.globalid;if(s.filter((e=>e.globalId===l)).length<=0){const e=this._graphicHandler.getFlagGraphic(r.mapPoint,t,r,i);this.view.graphics.add(e),s.push({...r,type:t,globalId:r.attributes.globalid?r.attributes.globalid:r.attributes.GLOBALID,details:r,mapGraphic:e,id:s.length+1})}else if(null!==r.percentAlong){const e=this._graphicHandler.getFlagGraphic(r.mapPoint,t,r,i);this.view.graphics.add(e),s.push({...r,type:t,globalId:r.attributes.globalid?r.attributes.globalid:r.attributes.GLOBALID,details:r,mapGraphic:e,id:s.length+1})}})),this._flags=s,!0}return!1}))},l.removeResultGraphicFromView=function(e){const t=this.view.graphics;e.graphicEnabled=!1;t.filter((t=>t.attributes[t.attributes.hasOwnProperty("GLOBALID")?"GLOBALID":"globalid"]===e.trace.globalId)).forEach((e=>{this.view.graphics.remove(e)}))},l.removeFlag=function(e){const t=this._flags.filter((t=>{if(t.id!==e.id)return t}));this._removeGraphic(e),this._flags=t},l.removeSelection=function(){this._highlightHandler.forEach((e=>{e&&e.remove()})),this._highlightHandler=[]},l.removeTerminal=function(e,t){const r=[...this._flags];r.forEach((r=>{if(r.globalId===t.globalId&&t.selectedTerminals.includes(parseInt(e,10))){const s=t.selectedTerminals.indexOf(parseInt(e,10));r.selectedTerminals.splice(s,1)}})),this._flags=r},l.removeFlagsOnLoadWatcher=function(){this._watchHandler&&null!==this._watchHandler&&this._watchHandler.remove()},l.reset=function(){this._flags=[],this._traceResults=[];const e=[...this._traces];e.forEach((e=>{e.selected=!1})),this._traces=e,this.view&&(this.view.graphics.removeAll(),this.removeSelection(),this.emit("clear-selection",{resultSet:[]}))},l.selectFeaturesById=function(e){const t=g.getObjectIdsFromElements(this._unObject,e);this._getUniqueMapLayerViews(this.view).forEach((e=>{e.layer?.parsedUrl?.path===t[0].layerUrl&&this._highlightHandler.push(e.highlight(t[0].objectIds))}))},l.selectResults=function(e){if(e.length>0){this.removeSelection();const t=this._groupResultsByNetworkSource(e),r=[];for(const e in t)this.selectFeaturesById(t[e]),r.push(this.queryFeaturesById(t[e]));Promise.all(r).then((e=>{this.emit("select-features",{resultSet:e})}))}else this.removeSelection(),this.emit("clear-selection",{resultSet:[]})},l.selectTraces=function(e,t){const r=[...this._traces];r.forEach((r=>{t===r.globalId&&(r.selected=e)})),this._traces=r},l.selectTracesOnLoad=function(){this._unObject.hasOwnProperty("sharedNamedTraceConfigurations")&&(this._traces=[...this._unObject.sharedNamedTraceConfigurations],this._traces.forEach((e=>{e.selected=!1,this.selectedTraces.includes(e.globalId)&&(e.selected=!0)})))},l.zoomToAsset=function(e){this.view.goTo(e).catch((e=>{console.error(e)}))},l._getUniqueMapLayerViews=function(e){const t=[];return e.layerViews.filter((e=>"feature"===e.layer.type||"group"===e.layer.type)).forEach((e=>{"group"===e.type?e.layerViews.forEach((e=>{t.push(e)})):t.some((t=>t.layer.layerId===e.layer.layerId))||t.push(e)})),t},l._processFlags=function(e){const t=[];return e.forEach((e=>{if(null!==e.selectedTerminals&&e.selectedTerminals.length>0)e.selectedTerminals.forEach((r=>{const s=new f({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:r,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(s)}));else{const r=new f({globalId:e.globalId,percentAlong:e.percentAlong,terminalId:null,type:e.type,isFilterBarrier:e.isFilterBarrier});t.push(r)}})),t},l._getDisplayField=function(e){const t=e.layer;let r=t.displayField,s="";for(const i in e.attributes){const l=i.toLowerCase();if(l===r.toLowerCase())if(s=e.attributes[i],"assetgroup"===l||"assettype"===l){let l=e.attributes[t.typeIdField.toUpperCase()];l||(l=e.attributes[t.typeIdField.toLowerCase()]),r=t.typeIdField,s=this._checkSubtype(t,l),""===r&&(t.templates?.length>0?(r=t.templates[0]?.name,s=t.templates[0]?.name):(r=t.displayField,s=e.attributes[i]))}else s=this._checkDomain(t.fields,i,s)}return{field:r,value:s}},l._checkSubtype=function(e,t){let r=t;if(null!==e.types&&e.types.length>0){const s=e.types.filter((e=>e.id===t));s.length>0&&(r=s[0].name)}return r},l._checkDomain=function(e,t,r){let s=r;const i=e.filter((e=>e.name.toLowerCase()===t.toLowerCase()));if(i.length>0&&null!==i[0].domain){const e=i[0].domain.codedValues.filter((e=>e.code===r));e.length>0&&(s=e[0].name)}return s},l._groupBy=function(e,t){return e.reduce(((e,r)=>((e[r[t]]=e[r[t]]||[]).push(r),e)),{})},l._groupResultsByNetworkSource=function(e){if(e.length>0){if(e[0].hasOwnProperty("results")){const t=e[0].results.elements;return this._groupBy(t,"networkSourceId")}return this._groupBy(e,"networkSourceId")}if(e.hasOwnProperty("results")){const t=e.results.elements;return this._groupBy(t,"networkSourceId")}return[]},l._lookupFlagByHit=function(e){return this.view.hitTest(e.screenPoint).then((t=>{const r=[];if(t.results.length>0){const s=t.results.find((e=>null!==e.layer));if(s.graphic&&n.isSome(s.graphic.geometry))if("polyline"===s.graphic.geometry.type){const t=this._geometryHandler.getPercentageAlong(s.graphic.geometry,e.mapPoint,s.graphic.geometry.spatialReference),i=this._getDisplayField(s.graphic);s.graphic.terminalId=null,s.graphic.isFilterBarrier=!1,s.graphic.allTerminals=null,s.graphic.selectedTerminals=null,s.graphic.percentAlong=t,s.graphic.displayValue=i,s.graphic.mapPoint=s.mapPoint,r.push(s)}else if(("point"===s.graphic.geometry.type||"polygon"===s.graphic.geometry.type)&&null!==this._unObject){const e=this._unObject.getTerminalConfiguration(s.graphic),t=this._getDisplayField(s.graphic);s.graphic.terminalId=e?e.terminals[0].id?e.terminals[0].id:null:1,s.graphic.isFilterBarrier=!1,s.graphic.allTerminals=e||null,s.graphic.selectedTerminals=[e?e.terminals[0].id?e.terminals[0].id:null:1],s.graphic.percentAlong=null,s.graphic.displayValue=t,s.graphic.mapPoint=s.mapPoint,r.push(s)}}return r}))},l._populateOutfields=function(){var t=e._asyncToGenerator((function*(){const e=this.view.map,t=this.getValidSources();e.layers.forEach((e=>{"group"===e.type?e.layers.forEach((e=>{t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])})):t.some((t=>t.layerId===e.layerId))&&e.fields.some((e=>"assetgroup"===e.name.toLowerCase()))&&(e.outFields=["assetgroup","assettype","globalid","objectid"])}))}));function r(){return t.apply(this,arguments)}return r}(),l._removeGraphic=function(e){this.view.graphics.remove(e.mapGraphic)},e._createClass(i,[{key:"state",get:function(){return this.view?.ready?"ready":"loading"}},{key:"view",get:function(){return this._get("view")},set:function(e){e&&"2d"!==e.type&&a.getLogger(this.declaredClass).error(new s("view:invalid-view","SceneView is not supported",{view:e})),this._set("view",e)}}]),i}(l.HandleOwnerMixin(i.EventedAccessor));t.__decorate([c.property()],b.prototype,"_activeProgress",void 0),t.__decorate([c.property()],b.prototype,"_flags",void 0),t.__decorate([c.property()],b.prototype,"_traces",void 0),t.__decorate([c.property()],b.prototype,"_traceResults",void 0),t.__decorate([c.property()],b.prototype,"defaultGraphicColor",void 0),t.__decorate([c.property()],b.prototype,"flags",void 0),t.__decorate([c.property()],b.prototype,"gdbVersion",void 0),t.__decorate([c.property()],b.prototype,"selectedTraces",void 0),t.__decorate([c.property()],b.prototype,"selectOnComplete",void 0),t.__decorate([c.property()],b.prototype,"showGraphicsOnComplete",void 0),t.__decorate([c.property()],b.prototype,"showSelectionAttributes",void 0),t.__decorate([c.property({readOnly:!0})],b.prototype,"state",null),t.__decorate([c.property({value:null})],b.prototype,"view",null),b=t.__decorate([p.subclass("esri.widgets.UtilityNetworkTrace.UtilityNetworkTraceViewModel")],b);return b}));
