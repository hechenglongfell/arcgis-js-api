/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/Error","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./geojson","../support/clientSideDefaults","../support/sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],(function(e,t,n,i,r,s,o,a,u,l,c,d,p,y,f,h,m,g){"use strict";const _={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};let F=function(){function F(){var t=this;this._queryEngine=null,this._snapshotFeatures=function(){var n=e._asyncToGenerator((function*(e){const n=yield t._fetch(e);return t._createFeatures(n)}));return function(e){return n.apply(this,arguments)}}()}var E=F.prototype;return E.destroy=function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null},E.load=function(){var t=e._asyncToGenerator((function*(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];yield this._checkProjection(e.spatialReference);let r=null;e.url&&(r=yield this._fetch(null==t?void 0:t.signal));const s=p.inferLayerProperties(r,{geometryType:e.geometryType}),o=e.fields||s.fields||[],u=null!=e.hasZ?e.hasZ:s.hasZ,c=s.geometryType,f=e.objectIdField||s.objectIdFieldName||"__OBJECTID",F=e.spatialReference||a.WGS84;let E=e.timeInfo;o===s.fields&&s.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});let I=o.find((e=>e.name===f));I?("esriFieldTypeString"!==I.type&&(I.type="esriFieldTypeOID"),I.editable=!1,I.nullable=!1):(I={alias:f,name:f,type:"string"===s.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(I));const T={};for(const a of o){if(null==a.name&&(a.name=a.alias),null==a.alias&&(a.alias=a.name),!a.name)throw new n("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!m.kebabDict.jsonValues.includes(a.type))throw new n("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==I.name){const e=g.getFieldDefaultValue(a);void 0!==e&&(T[a.name]=e)}}this._fieldsIndex=new h(o);const b=this._fieldsIndex.requiredFields.indexOf(I);if(b>-1&&this._fieldsIndex.requiredFields.splice(b,1),E){if(E.startTimeField){const e=this._fieldsIndex.get(E.startTimeField);e?(E.startTimeField=e.name,e.type="esriFieldTypeDate"):E.startTimeField=null}if(E.endTimeField){const e=this._fieldsIndex.get(E.endTimeField);e?(E.endTimeField=e.name,e.type="esriFieldTypeDate"):E.endTimeField=null}if(E.trackIdField){const e=this._fieldsIndex.get(E.trackIdField);e?E.trackIdField=e.name:(E.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:E}}))}E.startTimeField||E.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:E}}),E=null)}const j=c?y.createDrawingInfo(c):null,S={warnings:i,featureErrors:[],layerDefinition:{..._,drawingInfo:j,templates:y.createDefaultTemplate(T),extent:null,geometryType:c,objectIdField:f,fields:o,hasZ:!!u,timeInfo:E}};this._queryEngine=new d.default({fields:o,geometryType:c,hasM:!1,hasZ:u,objectIdField:f,spatialReference:F,timeInfo:E,featureStore:new l({geometryType:c,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=y.createDefaultAttributesFunction(T,f);const q=yield this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,q);const x=this._normalizeFeatures(q,S.warnings,S.featureErrors);if(this._queryEngine.featureStore.addMany(x),S.layerDefinition.extent=this._queryEngine.fullExtent,S.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;S.layerDefinition.timeInfo.timeExtent=[e,t]}return S}));function i(e){return t.apply(this,arguments)}return i}(),E.applyEdits=function(){var t=e._asyncToGenerator((function*(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return yield Promise.all([f.loadGeometryEngineForSimplify(t,n),c.checkProjectionSupport(e.adds,t),c.checkProjectionSupport(e.updates,t)]),yield this._waitSnapshotComplete(),this._applyEdits(e)}));function n(e){return t.apply(this,arguments)}return n}(),E.queryFeatures=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}));function n(){return t.apply(this,arguments)}return n}(),E.queryFeatureCount=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}));function n(){return t.apply(this,arguments)}return n}(),E.queryObjectIds=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}));function n(){return t.apply(this,arguments)}return n}(),E.queryExtent=function(){var t=e._asyncToGenerator((function*(e={},t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}));function n(){return t.apply(this,arguments)}return n}(),E.querySnapping=function(){var t=e._asyncToGenerator((function*(e,t={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}));function n(e){return t.apply(this,arguments)}return n}(),E.refresh=function(){var t=e._asyncToGenerator((function*(e){var t;return this.loadOptions.customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=s.createTask(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),s.isAbortError(e)||i.getLogger("esri.layers.GeoJSONLayer").error(new n("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),yield this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}));function r(e){return t.apply(this,arguments)}return r}(),E._createFeatures=function(){var t=e._asyncToGenerator((function*(e){const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=p.createOptimizedFeatures(e,{geometryType:t,hasZ:n,objectIdField:i});if(!a.equals(this._queryEngine.spatialReference,a.WGS84))for(const o of s)r.isSome(o.geometry)&&(o.geometry=u.convertFromGeometry(c.project(u.convertToGeometry(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),a.WGS84,this._queryEngine.spatialReference)));return s}));function n(e){return t.apply(this,arguments)}return n}(),E._waitSnapshotComplete=function(){var t=e._asyncToGenerator((function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}));function n(){return t.apply(this,arguments)}return n}(),E._fetch=function(){var n=e._asyncToGenerator((function*(e){const{url:n,customParameters:i}=this.loadOptions,r=(yield t(n,{responseType:"json",query:{...i},signal:e})).data;return yield p.validateGeoJSON(r),r}));function i(e){return n.apply(this,arguments)}return i}(),E._normalizeFeatures=function(e,t,n){const{objectIdField:i}=this._queryEngine,r=[];for(const s of e){const e=this._createDefaultAttributes(),o=f.mixAttributes(this._fieldsIndex,e,s.attributes,!0,t);o?null==n||n.push(o):(this._assignObjectId(e,s.attributes,!0),s.attributes=e,s.objectId=e[i],r.push(s))}return r},E._applyEdits=function(e){const{adds:t,updates:n,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){for(const e of i)r.deleteResults.push(f.createFeatureEditSuccessResult(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}},E._applyAddEdits=function(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:a,objectIdField:l,spatialReference:d,featureStore:p}=this._queryEngine,y=[];for(const u of t){if(u.geometry&&i!==o.getJsonType(u.geometry)){n.push(f.createFeatureEditErrorResult("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=f.mixAttributes(this._fieldsIndex,t,u.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[l];e.uidToObjectId[u.uid]=t}r.isSome(u.geometry)&&(u.geometry=c.project(f.simplify(u.geometry,d),u.geometry.spatialReference,d)),y.push(u),n.push(f.createFeatureEditSuccessResult(u.attributes[l]))}}p.addMany(u.convertFromFeatures([],y,i,a,s,l))},E._applyUpdateEdits=function({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:a,spatialReference:l,featureStore:d}=this._queryEngine;for(const p of t){const{attributes:t,geometry:y}=p,h=t&&t[a];if(null==h){e.push(f.createFeatureEditErrorResult(`Identifier field ${a} missing`));continue}if(!d.has(h)){e.push(f.createFeatureEditErrorResult(`Feature with object id ${h} missing`));continue}const m=u.convertToFeature(d.getFeature(h),n,s,i);if(r.isSome(y)){if(n!==o.getJsonType(y)){e.push(f.createFeatureEditErrorResult("Incorrect geometry type."));continue}m.geometry=c.project(f.simplify(y,l),y.spatialReference,l)}if(t){const n=f.mixAttributes(this._fieldsIndex,m.attributes,t);if(n){e.push(n);continue}}d.add(u.convertFromFeature(m,n,s,i,a)),e.push(f.createFeatureEditSuccessResult(h))}},E._createObjectIdGenerator=function(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++},E._assignObjectId=function(e,t,n=!1){const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()},E._checkProjection=function(){var t=e._asyncToGenerator((function*(e){try{yield c.checkProjectionSupport(a.WGS84,e)}catch{throw new n("geojson-layer","Projection not supported")}}));function i(e){return t.apply(this,arguments)}return i}(),F}();return F}));
