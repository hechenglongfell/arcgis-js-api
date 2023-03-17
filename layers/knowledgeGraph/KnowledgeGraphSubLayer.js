/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../PopupTemplate","../../renderers/ClassBreaksRenderer","../../renderers/DictionaryRenderer","../../renderers/DotDensityRenderer","../../renderers/HeatmapRenderer","../../renderers/PieChartRenderer","../../renderers/Renderer","../../renderers/SimpleRenderer","../../renderers/UniqueValueRenderer","../../renderers/support/jsonUtils","../../renderers/support/types","../../core/maybe","../../core/workers/workers","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../../geometry/projection","../../geometry/support/spatialReferenceUtils","../Layer","../graphics/data/FeatureStore","../graphics/data/QueryEngine","../graphics/sources/support/clientSideDefaults","./KnowledgeGraphLayerDataManager","./KnowledgeGraphSubLayerBase","../mixins/BlendLayer","../mixins/FeatureReductionLayer","../mixins/RefreshableLayer","../mixins/ScaleRangeLayer","../support/Field","../support/fieldUtils","../../rest/support/FeatureSet","../../rest/support/Query","../../support/popupUtils","../../core/workers/RemoteClient","../../geometry/Extent","../../geometry/Polygon","../../geometry/Polyline","../../geometry/support/typeUtils"],(function(e,r,t,o,n,a,i,p,s,y,l,u,c,d,h,g,m,f,_,b,T,S,F,O,L,v,E,w,N,j,M,Q,G,x,C,D,R,I,J,k,q,K){"use strict";let P=function(r){function t(e){var t;if((t=r.call(this,e)||this).capabilities=v.createCapabilities(!1,!1),t.displayField="",t.geometryFieldName=null,t.hasM=!1,t.hasZ=!1,t.objectIdField=E.MOCK_OID_FIELD_NAME,t.popupTemplate=null,t.source={openPorts:()=>t.load().then((()=>{const e=new MessageChannel;return new I(e.port1,{channel:e,client:{queryFeatures:(e,r={})=>{const o=D.fromJSON(e);return t.queryFeaturesJSON(o,r)}}},(()=>null)),[e.port2]}))},t.type="knowledge-graph-sublayer","link-chart"===e.parentCompositeLayer.type)"relationship"===e.graphType?t.geometryType="polyline":t.geometryType="point",t.geometryFieldName=E.MOCK_LAYOUT_GEOMETRY_FIELD_NAME;else if(e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType&&"esriGeometryNull"!==e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType){const r=e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name);t.geometryFieldName=r?.name?r.name:null,t.geometryType=r?.geometryType?K.featureGeometryTypeKebabDictionary.fromJSON(r.geometryType):null,r?.name&&e.objectType.properties&&e.objectType.properties[r.name]?(t.hasM=e.objectType.properties[r.name].hasM,t.hasZ=e.objectType.properties[r.name].hasZ):(t.hasM=!1,t.hasZ=!1)}else t.geometryType=null;return e.objectType.properties?.forEach((e=>{let r=null,o=e.fieldType;"esriFieldTypeOID"===o&&(o="esriFieldTypeInteger"),t.fields.push(G.fromJSON({name:e.name,type:o,alias:e.alias,defaultValue:r,editable:e.editable,nullable:e.nullable}))})),t.fields.push(G.fromJSON({name:t.objectIdField,type:"esriFieldTypeString",alias:t.objectIdField,editable:!1})),e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference&&(t.spatialReference=e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference),"link-chart"===e.parentCompositeLayer.type?"relationship"===e.graphType?t.renderer=c.fromJSON(v.createDrawingInfo(K.featureGeometryTypeKebabDictionary.toJSON("polyline")).renderer):t.renderer=c.fromJSON(v.createDrawingInfo(K.featureGeometryTypeKebabDictionary.toJSON("point")).renderer):t.renderer=c.fromJSON(v.createDrawingInfo(K.featureGeometryTypeKebabDictionary.toJSON(t.geometryType)).renderer),t}e._inheritsLoose(t,r);var o=t.prototype;return o.createPopupTemplate=function(e){return R.createPopupTemplate(this,e)},o.createQuery=function(){return new D({where:"1=1",outFields:["*"]})},o.getField=function(e){for(let r=0;r<this.fields.length;r++)if(this.fields[r].name===e)return this.fields[r];throw new Error("Field not found")},o.getFieldDomain=function(e,r){return null},o.queryFeatures=function(){var r=e._asyncToGenerator((function*(e,r){const{resolvedQuery:t,queryEngine:o}=yield this._setupQueryObjects(e),n=C.fromJSON(yield o.executeQuery(t.toJSON(),r?.signal));return n.features.forEach((e=>{e.sourceLayer=this})),n}));function t(e,t){return r.apply(this,arguments)}return t}(),o.queryFeaturesJSON=function(){var r=e._asyncToGenerator((function*(e,r){const{resolvedQuery:t,queryEngine:o}=yield this._setupQueryObjects(e);return yield o.executeQuery(t.toJSON(),r?.signal)}));function t(e,t){return r.apply(this,arguments)}return t}(),o.queryFeatureCount=function(){var r=e._asyncToGenerator((function*(e,r){const{resolvedQuery:t,queryEngine:o}=yield this._setupQueryObjects(e);return o.executeQueryForCount(t.toJSON(),r?.signal)}));function t(e,t){return r.apply(this,arguments)}return t}(),o.queryExtent=function(){var r=e._asyncToGenerator((function*(e={},r){const t={...e,returnGeometry:!0},{resolvedQuery:o,queryEngine:n}=yield this._setupQueryObjects(t),a=yield n.executeQueryForExtent(o.toJSON(),r?.signal);let i;return i=null!=a.extent?.xmin&&null!=a.extent?.xmax&&null!=a.extent?.ymin&&null!=a.extent?.ymax?new J(a.extent):new J,{count:a.count,extent:i}}));function t(){return r.apply(this,arguments)}return t}(),o.queryObjectIds=function(){var r=e._asyncToGenerator((function*(e,r){const t=D.from(e);let o;if("link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)o=this._cachedQueryEngine;else{const e=yield this.parentCompositeLayer.dataManager.getData(t,this,r);o=this.loadQueryEngine(e)}return o.executeQueryForIds(t.toJSON(),r?.signal)}));function t(e,t){return r.apply(this,arguments)}return t}(),o.loadQueryEngine=function(e){const r=new O({geometryType:K.featureGeometryTypeKebabDictionary.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),t=new L.QueryEngine({fields:this.fields.map((e=>e.toJSON())),geometryType:K.featureGeometryTypeKebabDictionary.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:null,featureStore:r});return t.featureStore.addMany(e),t},o.refreshCachedQueryEngine=function(){var r=e._asyncToGenerator((function*(){const e=yield this.parentCompositeLayer.dataManager.getData(new D({where:"1=1",outFields:[E.MOCK_OID_FIELD_NAME]}),this);this._cachedQueryEngine=this.loadQueryEngine(e)}));function t(){return r.apply(this,arguments)}return t}(),o._setupQueryObjects=function(){var r=e._asyncToGenerator((function*(e,r){const t=D.from(e),o=h.unwrap(t.geometry);let n;if(o&&!o.spatialReference?.isWGS84&&(yield T.initializeProjection(o.spatialReference,S.WGS84),t.geometry=o instanceof k||o instanceof q?T.project(o,S.WGS84):T.project(o.extent,S.WGS84)),"link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)n=this._cachedQueryEngine;else{const e=yield this.parentCompositeLayer.dataManager.getData(t,this,r);n=this.loadQueryEngine(e)}return{resolvedQuery:t,queryEngine:n}}));function t(e,t){return r.apply(this,arguments)}return t}(),e._createClass(t,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){x.fixRendererFields(e,this.fieldsIndex),this._set("renderer",e)}}]),t}(j.FeatureReductionLayer(w.KnowledgeGraphSubLayerBase(N.BlendLayer(Q.ScaleRangeLayer(M.RefreshableLayer(F))))));r.__decorate([m.property()],P.prototype,"capabilities",void 0),r.__decorate([m.property({readOnly:!0})],P.prototype,"defaultPopupTemplate",null),r.__decorate([m.property()],P.prototype,"definitionExpression",void 0),r.__decorate([m.property()],P.prototype,"displayField",void 0),r.__decorate([m.property()],P.prototype,"elevationInfo",void 0),r.__decorate([m.property()],P.prototype,"geometryType",void 0),r.__decorate([m.property()],P.prototype,"geometryFieldName",void 0),r.__decorate([m.property()],P.prototype,"graphType",void 0),r.__decorate([m.property()],P.prototype,"hasM",void 0),r.__decorate([m.property()],P.prototype,"hasZ",void 0),r.__decorate([m.property()],P.prototype,"labelsVisible",void 0),r.__decorate([m.property()],P.prototype,"labelingInfo",void 0),r.__decorate([m.property()],P.prototype,"objectIdField",void 0),r.__decorate([m.property()],P.prototype,"objectType",void 0),r.__decorate([m.property()],P.prototype,"parentCompositeLayer",void 0),r.__decorate([m.property({type:o,json:{name:"popupInfo",write:!0}})],P.prototype,"popupTemplate",void 0),r.__decorate([m.property({types:d.rendererTypes,json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],P.prototype,"renderer",null),r.__decorate([m.property()],P.prototype,"source",void 0),r.__decorate([m.property({json:{read:!1}})],P.prototype,"type",void 0),P=r.__decorate([b.subclass("esri.layers.knowledgeGraph.KnowledgeGraphSubLayer")],P);return P}));
