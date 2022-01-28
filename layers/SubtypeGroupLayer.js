/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../renderers/ClassBreaksRenderer","../renderers/DictionaryRenderer","../renderers/DotDensityRenderer","../renderers/HeatmapRenderer","../renderers/Renderer","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../renderers/support/types","../request","../symbols","../core/Collection","../core/Error","../core/HandleOwner","../core/Handles","../core/has","../core/jsonMap","../core/Logger","../core/maybe","../core/MultiOriginJSONSupport","../core/object","../core/promiseUtils","../core/sql","../core/urlUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","../core/accessorSupport/extensions/serializableProperty/reader","../form/FormTemplate","../geometry/Extent","../geometry/HeightModelInfo","../geometry/SpatialReference","./Layer","./graphics/sources/MemorySource","./mixins/ArcGISService","./mixins/BlendLayer","./mixins/CustomParametersMixin","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./mixins/TemporalLayer","./support/arcgisLayerUrl","./support/commonProperties","./support/FeatureIndex","./support/featureReductionUtils","./support/fieldProperties","./support/fieldUtils","./support/GeometryFieldsInfo","./support/LayerFloorInfo","./support/Relationship","./support/SubtypeSublayer","./support/TimeInfo","./support/source/DataLayerSource","../renderers/support/styleUtils","../rest/support/AttachmentQuery","../rest/support/FeatureSet","../rest/support/Query","../rest/support/RelationshipQuery"],(function(e,t,r,i,o,n,s,a,p,l,u,d,c,y,h,f,m,b,_,g,v,w,S,I,F,x,E,D,C,T,M,O,R,L,A,P,j,Q,q,G,U,V,B,z,k,N,W,$,J,Z,H,K,X,Y,ee,te,re,ie,oe,ne,se,ae,pe,le,ue){"use strict";const de=e=>Object.freeze({__proto__:null,default:e}),ce=new g.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),ye={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},he="SubtypeGroupLayer",fe=v.getLogger("esri.layers.SubtypeGroupLayer");function me(e){return e&&e instanceof h}function be(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function _e(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const ge=X.defineFieldProperties();function ve(e,t,r){const i=!(null==r||!r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let we=function(r){function i(...e){var t;return(t=r.call(this,...e)||this)._handles=new b,t.capabilities=null,t.charts=null,t.copyright=null,t.displayField=null,t.definitionExpression=null,t.dynamicDataSource=null,t.editFieldsInfo=null,t.editingEnabled=!0,t.editingInfo=null,t.elevationInfo=null,t.featureReduction=null,t.fields=null,t.fieldsIndex=null,t.floorInfo=null,t.formTemplate=null,t.fullExtent=null,t.gdbVersion=null,t.geometryFieldsInfo=null,t.geometryType=null,t.hasM=void 0,t.hasZ=void 0,t.heightModelInfo=null,t.historicMoment=null,t.isTable=!1,t.layerId=void 0,t.legendEnabled=!0,t.minScale=0,t.maxScale=0,t.globalIdField=null,t.objectIdField=null,t.outFields=null,t.path=null,t.relationships=null,t.sourceJSON=null,t.returnM=void 0,t.returnZ=void 0,t.screenSizePerspectiveEnabled=!0,t.serviceDefinitionExpression=null,t.spatialReference=Q.WGS84,t.subtypeField=null,t.sublayers=new(h.ofType(ie)),t.timeInfo=null,t.title=null,t.sublayerTitleMode="item-title",t.trackIdField=null,t.type="subtype-group",t.typeIdField=null,t.indexes=new(h.ofType(H.FeatureIndex)),t.userIsAdmin=!1,t.version=void 0,t.visible=!0,t._handles.add(t.watch("sublayers",((e,r)=>t._handleSublayersChange(e,r)),!0)),t}t._inheritsLoose(i,r);var o=i.prototype;return o.destroy=function(){var e;null==(e=this.source)||e.destroy(),this._handles=w.destroyMaybe(this._handles)},o.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},o.load=function(e){var r=this;const i=w.isSome(e)?e.signal:null;if(this.portalItem&&this.portalItem.loaded&&this.source)return void this.addResolvingPromise(this.createGraphicsSource(i).then((e=>this._initLayerProperties(e))));const o=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch(F.throwIfAbortError).then(t._asyncToGenerator((function*(){if(r.url&&null==r.layerId&&/FeatureServer|MapServer\/*$/i.test(r.url)){const e=yield r._fetchFirstLayerId(i);null!=e&&(r.layerId=e)}if(!r.url&&!r._hasMemorySource())throw new f("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return r._initLayerProperties(yield r.createGraphicsSource(i))}))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(o),Promise.resolve(this)},o.readCapabilities=function(e,t){return t=t.layerDefinition||t,{attachment:this._readAttachmentCapabilities(t.attachmentProperties),data:this._readDataCapabilities(t),metadata:this._readMetadataCapabilities(t),operations:this._readOperationsCapabilities(t.capabilities||e,t),query:this._readQueryCapabilities(t),queryRelated:this._readQueryRelatedCapabilities(t),editing:this._readEditingCapabilities(t)}},o.readEditingEnabled=function(e,t){return this._readEditingEnabled(t,!1)},o.readEditingEnabledFromWebMap=function(e,t,r){return this._readEditingEnabled(t,!0,r)},o.writeEditingEnabled=function(e,t){this._writeEditingEnabled(e,t,!1)},o.writeEditingEnabledToWebMap=function(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)},o.readEditingInfo=function(e,t){const{editingInfo:r}=t;return r?{lastEditDate:null!=r.lastEditDate?new Date(r.lastEditDate):null}:null},o.readIsTable=function(e,t){return"Table"===(t=t&&t.layerDefinition||t).type||!t.geometryType},o.writeIsTable=function(e,t,r,i){null!=i&&i.writeLayerSchema&&I.setDeepValue(r,e?"Table":"Feature Layer",t)},o.readMinScale=function(e,t){return t.effectiveMinScale||e||0},o.readMaxScale=function(e,t){return t.effectiveMaxScale||e||0},o.readGlobalIdFieldFromService=function(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeGlobalID"===r.type)return r.name},o.readObjectIdFieldFromService=function(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeOID"===r.type)return r.name},o.readRenderer=function(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=u.read(i,t,r)||void 0;return e||fe.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new l({defaultSymbol:Se(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:Se(e.symbol,e,r)})))}):new p({symbol:Se(t.defaultSymbol,t,r)})},o.castSource=function(e){return e?Array.isArray(e)||e instanceof h?new G.default({layer:this,items:e}):e:null},o.readSource=function(e,t){const r=pe.fromJSON(t.featureSet);return new G.default({layer:this,items:r&&r.features||[]})},o.readServiceDefinitionExpression=function(e,t){return t.definitionQuery||t.definitionExpression},o.readTitle=function(e,t){const r=t.layerDefinition&&t.layerDefinition.name||t.name,i=t.title||t.layerDefinition&&t.layerDefinition.title;if(r){const e=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?J.titleFromUrlAndName(this.url,r):r;let t=r;if(!t&&this.url){const e=J.parse(this.url);w.isSome(e)&&(t=e.title)}if(!t)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==t&&(t=e+" - "+t),J.cleanTitle(t)}if("item-title"===this.sublayerTitleMode&&i)return i},o.readTitleFromWebMap=function(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name},o.readTypeIdField=function(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return r},o.writeUrl=function(e,t,r,i){J.writeUrlWithLayerId(this,e,null,t,i)},o.readVersion=function(e,t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3},o.readVisible=function(e,t){return t.layerDefinition&&null!=t.layerDefinition.defaultVisibility?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0},o.addAttachment=function(e,t){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("addAttachment"in this.source))throw new f(he,"Layer source does not support addAttachment capability");return this.source.addAttachment(e,t)}))},o.updateAttachment=function(e,t,r){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("updateAttachment"in this.source))throw new f(he,"Layer source does not support updateAttachment capability");return this.source.updateAttachment(e,t,r)}))},o.applyEdits=function(){var r=t._asyncToGenerator((function*(t,r){const i=yield new Promise(((t,r)=>e(["./graphics/editingSupport"],t,r)));return yield this.load(),i.applyEdits(this,this.source,t,r)}));function i(e,t){return r.apply(this,arguments)}return i}(),o.on=function(e,t){return r.prototype.on.call(this,e,t)},o.createGraphicsSource=function(){var r=t._asyncToGenerator((function*(t){if(this._hasMemorySource())return this.emit("graphics-source-create",{graphicsSource:this.source}),this.source.load({signal:t});const r=yield new Promise(((t,r)=>e(["./graphics/sources/FeatureLayerSource"],(e=>t(de(e))),r)));F.throwIfAborted(t);const i=yield new r.default({layer:this}).load({signal:t});return this.emit("graphics-source-create",{graphicsSource:i}),i}));function i(e){return r.apply(this,arguments)}return i}(),o.createQuery=function(){const e=new le,t=this.get("capabilities.data"),r=this.sublayers.map((e=>e.subtypeCode));e.dynamicDataSource=this.dynamicDataSource,e.gdbVersion=this.gdbVersion,e.historicMoment=this.historicMoment,e.returnGeometry=!0,t&&(t.supportsZ&&null!=this.returnZ&&(e.returnZ=this.returnZ),t.supportsM&&null!=this.returnM&&(e.returnM=this.returnM)),e.outFields=["*"],e.where=`${this.subtypeField} IN (${r.join(",")})`,this.definitionExpression&&(e.where+=` AND (${this.definitionExpression})`);const{timeOffset:i,timeExtent:o}=this;return e.timeExtent=null!=i&&null!=o?o.offset(-i.value,i.unit):o||null,e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e},o.deleteAttachments=function(e,t){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("deleteAttachments"in this.source))throw new f(he,"Layer source does not support deleteAttachments capability");return this.source.deleteAttachments(e,t)}))},o.fetchRecomputedExtents=function(e){return this.load({signal:null==e?void 0:e.signal}).then((()=>{if(this.source.fetchRecomputedExtents)return this.source.fetchRecomputedExtents(e);throw new f(he,"Layer source does not support fetchUpdates capability")}))},o.getFieldDomain=function(e,t){return this._getLayerDomain(e)},o.getField=function(e){return this.fieldsIndex.get(e)},o.queryAttachments=function(e,t){return e=ae.from(e),this.load().then((()=>{if(!this.get("capabilities.data.supportsAttachment"))throw new f(he,"this layer doesn't support attachments");const{attachmentTypes:t,objectIds:r,globalIds:i,num:o,size:n,start:s,where:a}=e;if(!this.get("capabilities.operations.supportsQueryAttachments")){const p=r&&r.length>1,l=t&&t.length,u=i&&i.length,d=n&&n.length;if(p||l||u||d||o||s||a)throw new f(he,"when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",e)}if(!(r&&r.length||a))throw new f(he,"'objectIds' or 'where' are required to perform attachment query",e);if(!("queryAttachments"in this.source))throw new f(he,"Layer source does not support queryAttachments capability",e);return this.source.queryAttachments(e)}))},o.queryFeatures=function(e,t){const r=le.from(e)||this.createQuery(),i=w.unwrapOr(r.outFields,[]);return i.find((e=>e===this.subtypeField))||(i.push(this.subtypeField),r.outFields=i),this.load().then((()=>this.source.queryFeatures(r,t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this._findSublayerForFeature(t),t.sourceLayer=this;return e}))},o._findSublayerForFeature=function(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.sublayers.find((e=>e.subtypeCode===r))},o.queryObjectIds=function(e,t){return this.load().then((()=>{if(this.source.queryObjectIds)return this.source.queryObjectIds(le.from(e)||this.createQuery(),t);throw new f(he,"Layer source does not support queryObjectIds capability")}))},o.queryFeatureCount=function(e,t){return this.load().then((()=>{if(this.source.queryFeatureCount)return this.source.queryFeatureCount(le.from(e)||this.createQuery(),t);throw new f(he,"Layer source does not support queryFeatureCount capability")}))},o.queryExtent=function(e,t){return this.load().then((()=>{if(this.source.queryExtent)return this.source.queryExtent(le.from(e)||this.createQuery(),t);throw new f(he,"Layer source does not support queryExtent capability")}))},o.queryRelatedFeatures=function(e,t){return this.load().then((()=>{if("queryRelatedFeatures"in this.source)return this.source.queryRelatedFeatures(ue.from(e),t);throw new f(he,"Layer source does not support queryRelatedFeatures capability")}))},o.queryRelatedFeaturesCount=function(e,t){return this.load().then((()=>{if("queryRelatedFeaturesCount"in this.source)return this.source.queryRelatedFeaturesCount(ue.from(e),t);throw new f(he,"Layer source does not support queryRelatedFeaturesCount capability")}))},o.read=function(e,t){const i=e.featureCollection;if(i){const e=i.layers;e&&1===e.length&&(r.prototype.read.call(this,e[0],t),null!=i.showLegend&&r.prototype.read.call(this,{showLegend:i.showLegend},t))}r.prototype.read.call(this,e,t),t&&"service"===t.origin&&this.revert(["objectIdField","fields","timeInfo","spatialReference"],"service")},o.write=function(e,t){var i,o;const n=(t={...t,writeLayerSchema:null!=(i=null==(o=t)?void 0:o.writeLayerSchema)?i:this._hasMemorySource()}).origin,s=t.layerContainerType,a=t.messages;if(this.isTable){if("web-scene"===n||"web-map"===n&&"tables"!==s)return a&&a.push(new f("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,{layer:this})),null;if(this._hasMemorySource())return a&&a.push(new f("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,{layer:this})),null}else if(this.loaded&&"web-map"===n&&"tables"===s)return a&&a.push(new f("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,{layer:this})),null;return r.prototype.write.call(this,e,t)},o._readEditingEnabled=function(e,t,r){var i;let o=null==(i=e.layerDefinition)?void 0:i.capabilities;return o?this._hasEditingCapability(o):(o=e.capabilities,!(t&&"web-map"===(null==r?void 0:r.origin)&&!this._hasMemorySource()&&o)||this._hasEditingCapability(o))},o._hasEditingCapability=function(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")},o._writeEditingEnabled=function(e,t,r,i){if(!e){var o,n;const e=null!=(o=this.capabilities)&&null!=(n=o.operations)&&n.supportsSync?"Query,Sync":"Query";I.setDeepValue("layerDefinition.capabilities",e,t),!r||null!=i&&i.writeLayerSchema||(t.capabilities=e)}},o._checkAttachmentSupport=function(e){const{attributes:t}=e,{objectIdField:r}=this;return this.get("capabilities.data.supportsAttachment")?e?t?t[r]?void 0:Promise.reject(new f(he,`feature is missing the identifying attribute ${r}`)):Promise.reject(new f(he,"'attributes' are required on a feature to query attachments")):Promise.reject(new f(he,"A feature is required to add/delete/update attachments")):Promise.reject(new f(he,"this layer doesn't support attachments"))},o._getLayerDomain=function(e){const t=this.fieldsIndex.get(e);return t?t.domain:null},o._fetchFirstLayerId=function(e){return c(this.url,{query:{f:"json",...this.customParameters},responseType:"json",signal:e}).then((e=>{const t=e.data;if(t)return Array.isArray(t.layers)&&t.layers.length>0?t.layers[0].id:Array.isArray(t.tables)&&t.tables.length>0?t.tables[0].id:void 0}))},o._initLayerProperties=function(){var e=t._asyncToGenerator((function*(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",url:this.parsedUrl})),this._verifySource(),this._verifyFields(),Y.fixRendererFields(this.renderer,this.fieldsIndex),Y.fixTimeInfoFields(this.timeInfo,this.fieldsIndex),se.loadStyleRenderer(this,{origin:"service"})}));function r(t){return e.apply(this,arguments)}return r}(),o.hasDataChanged=function(){var e=t._asyncToGenerator((function*(){var e;if(null!=(e=this.source)&&e.refresh)try{var t;const{dataChanged:e,updates:r}=yield null==(t=this.source)?void 0:t.refresh();if(w.isSome(r)&&(this.sourceJSON={...this.sourceJSON,...r},this.read(r,{origin:"service",url:this.parsedUrl})),e)return!0}catch{}if(this.definitionExpression)try{return(yield x.parseWhereClause(this.definitionExpression,this.fieldsIndex)).hasDateFunctions}catch{}return!1}));function r(){return e.apply(this,arguments)}return r}(),o._verifyFields=function(){const e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields&&this.fields.some((function(e){return"geometry"===e.type}))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")},o._verifySource=function(){if(this._hasMemorySource()){if(this.url)throw new f("feature-layer:mixed-source-and-url","SubtypeGroupLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new f("feature-layer:source-or-url-required","SubtypeGroupLayer requires either a url, a valid portal item or a source")},o._initMemorySource=function(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this._handles.add([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")},o._resetMemorySource=function(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this._handles.remove("fl-source")},o._hasMemorySource=function(){return!(this.url||!this.source)},o._readAttachmentCapabilities=function(e){const t={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1};return e&&Array.isArray(e)&&e.forEach((e=>{const r=ye[e.name];r&&(t[r]=!!e.isEnabled)})),t},o._readDataCapabilities=function(e){return{isVersioned:be(e,"isDataVersioned",!1),supportsAttachment:be(e,"hasAttachments",!1),supportsM:be(e,"hasM",!1),supportsZ:be(e,"hasZ",!1)}},o._readMetadataCapabilities=function(e){return{supportsAdvancedFieldProperties:be(e,"supportsFieldDescriptionProperty",!1)}},o._readOperationsCapabilities=function(e,t){const r=e?e.toLowerCase().split(",").map((e=>e.trim())):[],i=-1!==r.indexOf("editing");let o=i&&-1!==r.indexOf("create"),n=i&&-1!==r.indexOf("delete"),s=i&&-1!==r.indexOf("update");const a=-1!==r.indexOf("changetracking");return i&&!(o||n||s)&&(o=n=s=!0),{supportsCalculate:be(t,"supportsCalculate",!1),supportsTruncate:be(t,"supportsTruncate",!1),supportsValidateSql:be(t,"supportsValidateSql",!1),supportsAdd:o,supportsDelete:n,supportsEditing:i,supportsChangeTracking:a,supportsQuery:-1!==r.indexOf("query"),supportsQueryAttachments:be(t.advancedQueryCapabilities,"supportsQueryAttachments",!1),supportsResizeAttachments:be(t,"supportsAttachmentsResizing",!1),supportsSync:-1!==r.indexOf("sync"),supportsUpdate:s,supportsExceedsLimitStatistics:be(t,"supportsExceedsLimitStatistics",!1)}},o._readQueryCapabilities=function(e){var t;const r=e.advancedQueryCapabilities,i=e.ownershipBasedAccessControlForFeatures,o=e.archivingInfo,n=null==(t=this.url)?void 0:t.includes("MapServer"),s=!_("mapserver-pbf-enabled")&&n&&this.version<10.81,a=(e.supportedQueryFormats||"").split(",").reduce(((e,t)=>{const r=t.toLowerCase().trim();return r&&e.add(r),e}),new Set);return{supportsStatistics:be(r,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:be(r,"supportsPercentileStatistics",!1),supportsCentroid:be(r,"supportsReturningGeometryCentroid",!1),supportsDistance:be(r,"supportsQueryWithDistance",!1),supportsDistinct:be(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:be(r,"supportsReturningQueryExtent",!1),supportsGeometryProperties:be(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:be(r,"supportsHavingClause",!1),supportsOrderBy:be(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:be(r,"supportsPagination",!1),supportsQuantization:be(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:be(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:be(e,"supportsReturningQueryGeometry",!1),supportsResultType:be(r,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:be(r,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:be(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:be(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:be(r,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:be(i,"allowOthersToQuery",!0),supportsHistoricMoment:be(o,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:!s&&a.has("pbf"),supportsDisjointSpatialRelationship:be(r,"supportsDisjointSpatialRel",!1),supportsCacheHint:be(r,"supportsQueryWithCacheHint",!1),maxRecordCountFactor:_e(e,"maxRecordCountFactor",void 0),maxRecordCount:_e(e,"maxRecordCount",void 0),standardMaxRecordCount:_e(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:_e(e,"tileMaxRecordCount",void 0)}},o._readQueryRelatedCapabilities=function(e){const t=e.advancedQueryCapabilities,r=be(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:be(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r}},o._readEditingCapabilities=function(e){const t=e.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:be(e,"allowGeometryUpdates",!0),supportsGlobalId:be(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:be(e,"supportsReturnServiceEditsInSourceSpatialReference",!1),supportsRollbackOnFailure:be(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:be(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:be(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:be(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:be(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:be(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:be(t,"allowOthersToUpdate",!0)}},o._handleSublayersChange=function(e,t){t&&(t.forEach((e=>{e.parent=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this})),e.on("after-remove",(({item:e})=>{e.parent=null}))],"sublayers-owner"))},t._createClass(i,[{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")||0)+1}},{key:"parsedUrl",get:function(){const e=this.url?E.urlToObject(this.url):null;return null!=e&&(null!=this.dynamicDataSource?e.path=E.join(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=E.join(e.path,this.layerId.toString()))),e}},{key:"renderer",set:function(e){Y.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}},{key:"source",set:function(e){const t=this._get("source");t!==e&&(me(t)&&this._resetMemorySource(t),me(e)&&this._initMemorySource(e),this._set("source",e))}},{key:"url",set:function(e){const t=J.sanitizeUrlWithLayerId({layer:this,url:e,nonStandardUrlAllowed:!0,logger:fe});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}}]),i}(V.BlendLayer($.TemporalLayer(W.ScaleRangeLayer(N.RefreshableLayer(U.ArcGISService(z.OperationalLayer(k.PortalLayer(S.MultiOriginJSONMixin(B.CustomParametersMixin(m.HandleOwnerMixin(q)))))))))));r.__decorate([D.property({readOnly:!0,json:{read:!1}})],we.prototype,"capabilities",void 0),r.__decorate([M.reader("service","capabilities",["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"])],we.prototype,"readCapabilities",null),r.__decorate([D.property({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],we.prototype,"charts",void 0),r.__decorate([D.property({readOnly:!0})],we.prototype,"createQueryVersion",null),r.__decorate([D.property({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],we.prototype,"copyright",void 0),r.__decorate([D.property({type:String,json:{read:{source:"layerDefinition.displayField"},origins:{service:{read:{source:"displayField"}}}}})],we.prototype,"displayField",void 0),r.__decorate([D.property({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],we.prototype,"definitionExpression",void 0),r.__decorate([D.property({types:y.symbolTypes,readOnly:!0})],we.prototype,"defaultSymbol",void 0),r.__decorate([D.property({type:ne.DataLayerSource})],we.prototype,"dynamicDataSource",void 0),r.__decorate([D.property({readOnly:!0})],we.prototype,"editFieldsInfo",void 0),r.__decorate([D.property({type:Boolean})],we.prototype,"editingEnabled",void 0),r.__decorate([M.reader(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],we.prototype,"readEditingEnabled",null),r.__decorate([M.reader("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],we.prototype,"readEditingEnabledFromWebMap",null),r.__decorate([R.writer(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],we.prototype,"writeEditingEnabled",null),r.__decorate([R.writer("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],we.prototype,"writeEditingEnabledToWebMap",null),r.__decorate([D.property({readOnly:!0})],we.prototype,"editingInfo",void 0),r.__decorate([M.reader("editingInfo")],we.prototype,"readEditingInfo",null),r.__decorate([D.property(Z.elevationInfo)],we.prototype,"elevationInfo",void 0),r.__decorate([D.property(K.featureReductionProperty)],we.prototype,"featureReduction",void 0),r.__decorate([D.property({...ge.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{read:!0},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:ve}}}}})],we.prototype,"fields",void 0),r.__decorate([D.property(ge.fieldsIndex)],we.prototype,"fieldsIndex",void 0),r.__decorate([D.property({type:te,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"},origins:{"web-scene":{write:!1}}}})],we.prototype,"floorInfo",void 0),r.__decorate([D.property({type:A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],we.prototype,"formTemplate",void 0),r.__decorate([D.property({type:P,json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],we.prototype,"fullExtent",void 0),r.__decorate([D.property()],we.prototype,"gdbVersion",void 0),r.__decorate([D.property({readOnly:!0,type:ee,json:{read:{source:"geometryProperties"}}})],we.prototype,"geometryFieldsInfo",void 0),r.__decorate([D.property({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ce.read},"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:ve,writer(e,t,r){const i=e?ce.toJSON(e):null;i&&I.setDeepValue(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:ce.read}}})],we.prototype,"geometryType",void 0),r.__decorate([D.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],we.prototype,"hasM",void 0),r.__decorate([D.property({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],we.prototype,"hasZ",void 0),r.__decorate([D.property({readOnly:!0,type:j})],we.prototype,"heightModelInfo",void 0),r.__decorate([D.property({type:Date})],we.prototype,"historicMoment",void 0),r.__decorate([D.property(Z.id)],we.prototype,"id",void 0),r.__decorate([D.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],we.prototype,"isTable",void 0),r.__decorate([M.reader("service","isTable",["type","geometryType"]),M.reader("isTable",["layerDefinition.type","layerDefinition.geometryType"])],we.prototype,"readIsTable",null),r.__decorate([R.writer("web-map","isTable")],we.prototype,"writeIsTable",null),r.__decorate([D.property(Z.opacityDrawingInfo)],we.prototype,"opacity",void 0),r.__decorate([D.property({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],we.prototype,"layerId",void 0),r.__decorate([D.property(Z.legendEnabled)],we.prototype,"legendEnabled",void 0),r.__decorate([D.property({type:["show","hide"]})],we.prototype,"listMode",void 0),r.__decorate([D.property(Z.minScale)],we.prototype,"minScale",void 0),r.__decorate([M.reader("service","minScale",["minScale","effectiveMinScale"])],we.prototype,"readMinScale",null),r.__decorate([D.property(Z.maxScale)],we.prototype,"maxScale",void 0),r.__decorate([M.reader("service","maxScale",["maxScale","effectiveMaxScale"])],we.prototype,"readMaxScale",null),r.__decorate([D.property({type:String})],we.prototype,"globalIdField",void 0),r.__decorate([M.reader("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),M.reader("service","globalIdField",["globalIdField","fields"])],we.prototype,"readGlobalIdFieldFromService",null),r.__decorate([D.property({type:String,json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:ve}}}}})],we.prototype,"objectIdField",void 0),r.__decorate([M.reader("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),M.reader("service","objectIdField",["objectIdField","fields"])],we.prototype,"readObjectIdFieldFromService",null),r.__decorate([D.property({value:"ArcGISSubtypeGroupLayer",type:["ArcGISSubtypeGroupLayer"]})],we.prototype,"operationalLayerType",void 0),r.__decorate([D.property(ge.outFields)],we.prototype,"outFields",void 0),r.__decorate([D.property({readOnly:!0})],we.prototype,"parsedUrl",null),r.__decorate([D.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],we.prototype,"path",void 0),r.__decorate([D.property({type:[re],readOnly:!0})],we.prototype,"relationships",void 0),r.__decorate([D.property({types:d.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:d.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:(e,t,r)=>({ignoreOrigin:null==r?void 0:r.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:null==r?void 0:r.writeLayerSchema})}}})],we.prototype,"renderer",null),r.__decorate([M.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),M.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],we.prototype,"readRenderer",null),r.__decorate([D.property()],we.prototype,"sourceJSON",void 0),r.__decorate([D.property({type:Boolean})],we.prototype,"returnM",void 0),r.__decorate([D.property({type:Boolean})],we.prototype,"returnZ",void 0),r.__decorate([D.property(Z.screenSizePerspectiveEnabled)],we.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([D.property()],we.prototype,"source",null),r.__decorate([T.cast("source")],we.prototype,"castSource",null),r.__decorate([M.reader("portal-item","source",["featureSet"]),M.reader("web-map","source",["featureSet"])],we.prototype,"readSource",null),r.__decorate([D.property({readOnly:!0})],we.prototype,"serviceDefinitionExpression",void 0),r.__decorate([M.reader("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],we.prototype,"readServiceDefinitionExpression",null),r.__decorate([D.property({type:Q,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],we.prototype,"spatialReference",void 0),r.__decorate([D.property({type:String})],we.prototype,"subtypeField",void 0),r.__decorate([D.property({type:h.ofType(ie),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>new ie({subtypeCode:e.code,renderer:u.read(t.drawingInfo.renderer,t,r),title:e.name})));return new(h.ofType(ie))(i)}}}}}})],we.prototype,"sublayers",void 0),r.__decorate([D.property({type:oe})],we.prototype,"timeInfo",void 0),r.__decorate([D.property()],we.prototype,"title",void 0),r.__decorate([M.reader("service","title",["name"]),M.reader("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],we.prototype,"readTitle",null),r.__decorate([M.reader("web-map","title",["layerDefinition.name","title"])],we.prototype,"readTitleFromWebMap",null),r.__decorate([D.property({type:String})],we.prototype,"sublayerTitleMode",void 0),r.__decorate([D.property({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],we.prototype,"trackIdField",void 0),r.__decorate([D.property({json:{read:!1}})],we.prototype,"type",void 0),r.__decorate([D.property({type:String})],we.prototype,"typeIdField",void 0),r.__decorate([M.reader("service","typeIdField"),M.reader("typeIdField",["layerDefinition.typeIdField"])],we.prototype,"readTypeIdField",null),r.__decorate([D.property({readOnly:!0,json:{write:!1}})],we.prototype,"serverGens",void 0),r.__decorate([D.property({type:h.ofType(H.FeatureIndex),readOnly:!0})],we.prototype,"indexes",void 0),r.__decorate([D.property(Z.url)],we.prototype,"url",null),r.__decorate([R.writer("url")],we.prototype,"writeUrl",null),r.__decorate([D.property({readOnly:!0})],we.prototype,"userIsAdmin",void 0),r.__decorate([D.property({json:{origins:{service:{read:!0}},read:!1}})],we.prototype,"version",void 0),r.__decorate([M.reader("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],we.prototype,"readVersion",null),r.__decorate([D.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],we.prototype,"visible",void 0),r.__decorate([M.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],we.prototype,"readVisible",null),we=r.__decorate([O.subclass("esri.layers.SubtypeGroupLayer")],we);const Se=L.createTypeReader({types:y.symbolTypesRenderer});return we}));
