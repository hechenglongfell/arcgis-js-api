/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../AggregateGraphic","../../../geometry","../../../Graphic","../../../core/Collection","../../../core/Error","../../../core/has","../../../core/lang","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/reactiveUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../layers/effects/FeatureEffectView","../../../layers/support/FeatureFilter","../../../renderers/support/clickToleranceUtils","../../../rest/support/FeatureSet","../../../rest/support/Query","../engine/webgl/definitions","./LayerView2D","./features/schemaUtils","./features/tileRenderers","./features/support/pixelBuffering","./support/clusterUtils","./support/FeatureCommandQueue","./support/FeatureLayerProxy","./support/util","../tiling/TileManager","../../layers/FeatureLayerView","../../layers/LayerView","../../layers/RefreshableLayerView","../../support/drapedUtils","../../webgl/capabilities","../../../geometry/Extent"],(function(e,t,r,i,s,n,a,o,l,u,h,c,d,y,p,f,_,g,m,v,b,S,R,x,T,w,U,F,C,E,O,I,V,q,G,P,k,L){"use strict";function N(e){return e&&"openPorts"in e}const z=u.getLogger("esri.views.2d.layers.FeatureLayerView2D");let H=function(t){function i(){var r;return(r=t.apply(this,arguments)||this)._pipelineIsUpdating=!0,r._commandsQueue=new C({process:e=>{switch(e.type){case"processed-edit":return r._doEdit(e);case"refresh":return r._doRefresh(e.dataChanged);case"update":return r._doUpdate()}}}),r._visibilityOverrides=new Set,r._highlightIds=new Map,r._lastPixelBuffer=0,r._updateHighlight=c.debounce(e._asyncToGenerator((function*(){return r._proxy.setHighlight(Array.from(r._highlightIds.keys()))}))),r._uploadsLocked=!1,r._needsClusterSizeUpdate=!1,r.featureEffectView=new g,r._lastDefinitionExpression=null,r}e._inheritsLoose(i,t);var u=i.prototype;return u.destroy=function(){var e,t;h.andThen(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy()},u.initialize=function(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges)})),d.react((()=>this.featureEffect),(e=>{this.featureEffectView.featureEffect=e}),{initial:!0,sync:!0})])},u._initProxy=function(){var t=e._asyncToGenerator((function*(){if("isTable"in this.layer&&this.layer.isTable)throw new a("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new E({client:e})),this._proxy.when()}));function r(){return t.apply(this,arguments)}return r}(),u._initServiceOptions=function(){var t=e._asyncToGenerator((function*(){this._set("_serviceOptions",yield this._createServiceOptions())}));function r(){return t.apply(this,arguments)}return r}(),u.fetchPopupFeatures=function(){var r=e._asyncToGenerator((function*(e,r){var i;if(h.isSome(r)&&0===r.clientGraphics.length)return[];if(!("cluster"===(null==(i=this.layer.featureReduction)?void 0:i.type))){const t=v.calculateTolerance({renderer:"renderer"in this.layer&&this.layer.renderer,event:h.isSome(r)&&r.event}),i=P.createQueryGeometry(e,t,this.view),{features:s}=yield this.queryVisibleFeatures(new S({geometry:i,outFields:["*"],returnGeometry:!0}));r=h.isSome(r)?r:{};const n=new Set(r.clientGraphics.map((e=>e.getObjectId())));for(const e of s)n.has(e.getObjectId())||r.clientGraphics.push(e)}return t.prototype.fetchPopupFeatures.call(this,e,r)}));function i(e,t){return r.apply(this,arguments)}return i}(),u.highlight=function(e){var t;let r;return e instanceof s?r=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?r=[e]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>null==e?void 0:e.getObjectId())):n.isCollection(e)&&e.length>0&&(r=e.map((e=>null==e?void 0:e.getObjectId())).toArray()),r=null==(t=r)?void 0:t.filter((e=>null!=e)),r&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):{remove:()=>{}}},u.hasHighlight=function(){return!!this._highlightIds.size},u.hitTest=function(){var t=e._asyncToGenerator((function*(e,t){if(!this.tileRenderer)return null;const i=yield this.tileRenderer.hitTest(t);if(0===i.length)return null;const{features:n,aggregates:a}=yield this._proxy.getFeatures(i);return[...a.map((e=>this._createHittestResult(r.fromJSON(e)))),...n.map((e=>this._createHittestResult(s.fromJSON(e))))]}));function i(e,r){return t.apply(this,arguments)}return i}(),u.queryAggregates=function(){var t=e._asyncToGenerator((function*(){return(yield this._proxy.getAggregates()).map((e=>r.fromJSON(e)))}));function i(){return t.apply(this,arguments)}return i}(),u.queryStatistics=function(){return this._proxy.queryStatistics()},u.querySummaryStatistics=function(){var t=e._asyncToGenerator((function*(e,t,r){const i={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),i,r)}));function r(e,r,i){return t.apply(this,arguments)}return r}(),u.queryUniqueValues=function(){var t=e._asyncToGenerator((function*(e,t,r){const i={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),i,r)}));function r(e,r,i){return t.apply(this,arguments)}return r}(),u.queryClassBreaks=function(){var t=e._asyncToGenerator((function*(e,t,r){const i={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),i,r)}));function r(e,r,i){return t.apply(this,arguments)}return r}(),u.queryHistogram=function(){var t=e._asyncToGenerator((function*(e,t,r){const i={...t,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(e),i,r)}));function r(e,r,i){return t.apply(this,arguments)}return r}(),u.queryFeatures=function(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=b.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))},u.queryVisibleFeatures=function(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then((e=>{const t=b.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))},u.queryFeaturesJSON=function(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)},u.queryObjectIds=function(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)},u.queryFeatureCount=function(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)},u.queryExtent=function(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:L.fromJSON(e.extent)})))},u.setVisibility=function(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()},u.update=function(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:r,removed:i}=this._tileStrategy.update(e);(r.length||i.length)&&this._proxy.updateTiles({added:r,removed:i}),t&&this.requestUpdate(),this.notifyChange("updating")},u.attach=function(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new I.TileManager({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(y.init(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach")},u.detach=function(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null},u.moveStart=function(){this.requestUpdate()},u.viewChange=function(){this.requestUpdate()},u.moveEnd=function(){this.requestUpdate()},u.isUpdating=function(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,r=this._commandsQueue.updating,i=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,a=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),l=t&&(r||i||s||n||a);return o("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${i}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${a}\n`),l},u._createClientOptions=function(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}},u._detectQueryMode=function(){var t=e._asyncToGenerator((function*(e){var t;const r="path"in e,i="editingInfo"in this.layer&&(null==(t=this.layer.editingInfo)?void 0:t.lastEditDate),s=!!this.layer.refreshInterval,n=!i&&s;if(r&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!n&&o("featurelayer-snapshot-enabled"))try{const e=yield this.layer.queryFeatureCount();if(e<=o("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e};const t=o("featurelayer-snapshot-point-max-threshold"),r=o("featurelayer-snapshot-point-coverage"),i=this.view.extent,s=h.unwrap(this.layer.fullExtent),n=null==s?void 0:s.clone().intersection(i),a=h.isSome(n)?n.width*n.height:0,l=(null==s?void 0:s.width)*(null==s?void 0:s.height),u=0===l?0:a/l;if(e<=t&&u>=r)return{mode:"snapshot",featureCount:e}}catch(a){z.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:a})}return{mode:"on-demand"}}));function r(e){return t.apply(this,arguments)}return r}(),u._createServiceOptions=function(){var t=e._asyncToGenerator((function*(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:r,objectIdField:i}=t,s=t.fields.map((e=>e.toJSON())),n=h.isSome(t.fullExtent)&&t.fullExtent.toJSON(),a=O.toJSONGeometryType(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,u=t.spatialReference?t.spatialReference.toJSON():null,c="feature"===t.type?t.globalIdField:null;let d;"ogc-feature"===t.type?d=t.source.getFeatureDefinition():N(t.source)?d=yield t.source.openPorts():t.parsedUrl&&(d=l.clone(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(d.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const y="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,p=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:f,featureCount:_}=yield this._detectQueryMode(d);let g=this.layer.objectIdField;if("feature"===this.layer.type&&h.isSome(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(g=e)}return{type:f,timeReferenceUnknownClient:y,subtypeField:p,featureCount:_,globalIdField:c,maxRecordCount:r.query.maxRecordCount,tileMaxRecordCount:r.query.tileMaxRecordCount,capabilities:r,fields:s,fullExtent:n,geometryType:a,objectIdField:i,source:d,timeInfo:o,spatialReference:u,orderByFields:g}}));function r(){return t.apply(this,arguments)}return r}(),u._createMemoryServiceOptions=function(){var t=e._asyncToGenerator((function*(e){const t=yield e.openPorts();return{...this._createServiceOptions(),type:"memory",source:t}}));function r(e){return t.apply(this,arguments)}return r}(),u._cleanUpQuery=function(e){const t=S.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t},u._update=function(){var t=e._asyncToGenerator((function*(){return this._commandsQueue.push({type:"update"})}));function r(){return t.apply(this,arguments)}return r}(),u._edit=function(){var t=e._asyncToGenerator((function*(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}));function r(e){return t.apply(this,arguments)}return r}(),u.doRefresh=function(){var t=e._asyncToGenerator((function*(e){return this._commandsQueue.push({type:"refresh",dataChanged:e})}));function r(e){return t.apply(this,arguments)}return r}(),u._validateEdit=function(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,r=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),i=t&&this.availableFields.includes(t);return r&&!i?(z.error(new a("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e},u._doUpdate=function(){var t=e._asyncToGenerator((function*(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:t,filter:r}=this;yield this._updateRequiredFields();const{renderer:i}=this._getEffectiveRenderer();this._set("_effectiveRenderer",i);const s=this._createSchemaConfig(),n=O.toJSONGeometryType(this.layer.geometryType),a=yield U.computePxBuffer(i,n,this.view.resourceManager,this.layer.fields,this.layer.spatialReference,this.layer.featureReduction),o=this._createConfiguration(s,r,t.filter),l=this._lastDefinitionExpression!==o.definitionExpression;this._lastDefinitionExpression=o.definitionExpression,this._lastPixelBuffer=0===a?0:Math.max(a,this._lastPixelBuffer),o.schema.source.pixelBuffer=this._lastPixelBuffer;const u=this._createTileRendererHash(i);if("snapshot"===this._serviceOptions.type&&(o.schema.source.featureCount=this._serviceOptions.featureCount),u!==this._tileRendererHash){yield this._initTileRenderer(i);const e=this._serviceOptions;this.tileRenderer.onConfigUpdate(i);const t=this.layer;"stream"!==t.type&&N(t.source)&&(e.source=yield t.source.openPorts()),"stream"===t.type&&(yield this._initServiceOptions());const r={added:this._tileStrategy.tileKeys(),removed:[]};yield this._proxy.startup(this.view.featuresTilingScheme,o,e,r),this.hasHighlight()&&(yield this._proxy.setHighlight(Array.from(this._highlightIds.keys()))),yield this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(i)}else{"snapshot"===this._serviceOptions.type&&l&&(o.schema.source.featureCount=yield this.layer.queryFeatureCount());const t=yield this._proxy.update(o);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{yield this._proxy.applyUpdate(t)}catch(e){c.isAbortError(e)||z.error(e)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(i),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=u,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}));function r(){return t.apply(this,arguments)}return r}(),u._doEdit=function(){var t=e._asyncToGenerator((function*(e){try{yield this._proxy.onEdits(e)}catch(t){c.isAbortError(t),0}}));function r(e){return t.apply(this,arguments)}return r}(),u._doRefresh=function(){var t=e._asyncToGenerator((function*(e){this._lockGPUUploads();try{yield this._proxy.refresh(e)}catch(t){c.isAbortError(t),0}this._unlockGPUUploads()}));function r(e){return t.apply(this,arguments)}return r}(),u._updateClusterSizeVariable=function(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)},u._createUpdateClusterSizeTask=function(t,r){var i=this;return this.watch("_aggregateValueRanges",function(){var s=e._asyncToGenerator((function*(e){i._updateClusterEffectiveRendererSizeVariable(t,r,e),i._needsClusterSizeUpdate=!0,i._uploadsLocked||i._updateClusterSizeVariable()}));return function(e){return s.apply(this,arguments)}}())},u._updateClusterEffectiveRendererSizeVariable=function(){var t=e._asyncToGenerator((function*(e,t,r){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const i=F.findSizeVV(e.visualVariables);if(h.isSome(i)&&"cluster_count"===i.field){const s=e.visualVariables.indexOf(i);e.visualVariables[s]=F.createClusterCountSizeVariable(t,r);const n=e.clone();n.dynamicClusterSize=!0,this._set("_effectiveRenderer",n)}}}));function r(e,r,i){return t.apply(this,arguments)}return r}(),u._getEffectiveRenderer=function(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(h.isSome(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&F.isClusterCompatibleRenderer(e)){const r=t,i=[],s=F.createClusterRenderer(i,e,r,this._aggregateValueRanges);return h.andThen(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,r),{renderer:s,aggregateFields:i,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}},u._acquireTile=function(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate()})),t},u._releaseTile=function(e){this.tileRenderer.releaseTile(e)},u._initTileRenderer=function(){var t=e._asyncToGenerator((function*(e){const t=yield w.createOrReuseTileRenderer(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}));function r(e){return t.apply(this,arguments)}return r}(),u._createTileRendererHash=function(e){return`${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`},u._injectOverrides=function(e){const t=h.isSome(e)?e.timeExtent:null,r=h.isSome(this.timeExtent)&&h.isSome(t)?this.timeExtent.intersection(t):this.timeExtent||t;let i=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=h.isSome(e)&&e.where;i=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!r&&!s)return h.isSome(e)?e.toJSON():null;(e=h.isSome(e)&&e.clone()||new m).timeExtent=r,i&&(e.where=i);const n=e.toJSON();return n.hiddenIds=Array.from(this._visibilityOverrides),n},u._addFloorFilterClause=function(e){const t=this.layer;let r=e||"";if("floorInfo"in t&&t.floorInfo){var i;let e=this.view.floors;if(!e||!e.length)return r;null!=(i=t.floorInfo.viewAllLevelIds)&&i.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const n=t.floorInfo.floorField;let a="("+n+" IN ({ids}) OR "+n+" IS NULL)";if(a=a.replace("{ids}",s.join(", ")),h.isSome(r)&&r.includes(n)){let e=new RegExp("AND \\("+n+".*NULL\\)","g");r=r.replace(e,""),e=new RegExp("\\("+n+".*NULL\\)","g"),r=r.replace(e,""),r=r.replace(/\s+/g," ").trim()}r=""!==r?"("+r+") AND "+a:a}return""!==r?r:null},u._createConfiguration=function(e,t,r){const i="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,n=new Array(R.MAX_FILTERS),a=this._injectOverrides(t);n[0]=a,n[1]=h.isSome(r)?r.toJSON():null;const o=T.createSchema(e);if(h.isNone(o))return null;const l=k();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:i,devicePixelRatio:window.devicePixelRatio||1,filters:n,schema:o,supportsTextureFloat:l.supportsTextureFloat,maxTextureSize:l.maxTextureSize}},u._hasRequiredSupport=function(e){var t;return!("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!k().supportsTextureFloat)||(z.error(new a("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1)},u._onceTilesUpdated=function(){return this.requestUpdate(),y.whenFalseOnce(this,"_pipelineIsUpdating",!1)},u._lockGPUUploads=function(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())},u._unlockGPUUploads=function(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())},u._forceAttributeTextureUpload=function(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()},u._createSchemaConfig=function(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0}}},u._addHighlight=function(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{c.isAbortError(e)||z.error(e)}))},u._removeHighlight=function(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch((e=>{c.isAbortError(e)||z.error(e)}))},u._setLayersForFeature=function(e){const t=this.layer;e.layer=t,e.sourceLayer=t},u._createHittestResult=function(e){return this._setLayersForFeature(e),h.isSome(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e},e._createClass(i,[{key:"orderByFields",get:function(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}},{key:"labelsVisible",get:function(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return!this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}},{key:"queryMode",get:function(){return this._serviceOptions.type}},{key:"renderingConfigHash",get:function(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,r=this.view.floors,{definitionExpression:i}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,n="renderer"in t&&t.renderer,a="feature"===t.type?t.gdbVersion:void 0,o="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:l}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,c="apiKey"in t?t.apiKey:void 0,d="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,y=JSON.stringify(this.clips),p=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),_="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:f,sublayerHash:_,filterHash:h.isSome(this.filter)&&this.filter.toJSON(),effectHash:h.isSome(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:d,gdbVersion:a,definitionExpression:i,historicMoment:o,availableFields:e,renderer:n,labelingInfo:s,timeExtent:l,floors:r,clipsHash:y,featureReduction:p,customParameters:u,apiKey:c})}},{key:"hasFilter",get:function(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}}]),i}(V.FeatureLayerView(G.RefreshableLayerView(x.LayerView2DMixin(q))));t.__decorate([p.property()],H.prototype,"_serviceOptions",void 0),t.__decorate([p.property()],H.prototype,"_proxy",void 0),t.__decorate([p.property()],H.prototype,"_pipelineIsUpdating",void 0),t.__decorate([p.property()],H.prototype,"_effectiveRenderer",void 0),t.__decorate([p.property()],H.prototype,"_aggregateValueRanges",void 0),t.__decorate([p.property()],H.prototype,"_commandsQueue",void 0),t.__decorate([p.property()],H.prototype,"featureEffectView",void 0),t.__decorate([p.property()],H.prototype,"labelsVisible",null),t.__decorate([p.property({readOnly:!0})],H.prototype,"queryMode",null),t.__decorate([p.property()],H.prototype,"renderingConfigHash",null),t.__decorate([p.property()],H.prototype,"tileRenderer",void 0),t.__decorate([p.property()],H.prototype,"updating",void 0),H=t.__decorate([_.subclass("esri.views.2d.layers.FeatureLayerView2D")],H);return H}));
