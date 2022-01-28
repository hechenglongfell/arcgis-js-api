/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../Graphic","../../../request","../../Attachment","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../support/stats","../../../core/MD5","../../../kernel","../../../core/promiseUtils","../../../geometry/support/jsonUtils","../../../layers/FeatureLayer","../../../layers/graphics/featureConversionUtils","../../../rest/query/operations/pbfOptimizedFeatureSet","../../../rest/support/FeatureSet","../../../rest/support/Query","../../../rest/support/StatisticDefinition","../../../tasks/QueryTask","../../../rest/query/operations/query","../../Dictionary"],(function(e,t,i,r,s,a,n,l,o,u,d,h,c,p,y,f,_,g,m,S,F,b){"use strict";return function(s){function R(e){var t;return(t=s.call(this,e)||this).declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic",t._removeGeometry=!1,t._overrideFields=null,t.formulaCredential=null,t._pageJustIds=!1,t._requestStandardised=!1,t._useDefinitionExpression=!0,e.spatialReference&&(t.spatialReference=e.spatialReference),t._transparent=!0,t._maxProcessing=1e3,t._layer=e.layer,t._wset=null,void 0!==e.outFields&&(t._overrideFields=e.outFields),void 0!==e.includeGeometry&&(t._removeGeometry=!1===e.includeGeometry),t}e._inheritsLoose(R,s);var D=R.prototype;return D._maxQueryRate=function(){return n.defaultMaxRecords},D.end=function(){return this._layer},D.optimisePagingFeatureQueries=function(e){this._pageJustIds=e},D.convertQueryToLruCacheKey=function(e){const t=n.stableStringify(e.toJSON());return u.createMD5Hash(t,u.outputTypes.String)},D.load=function(){return null===this._loadPromise&&(this._loadPromise=h.create(((e,t)=>{try{if(!0===this._layer.loaded)return this._initialiseFeatureSet(),void e(this);this._layer.when().then((()=>{try{this._initialiseFeatureSet(),e(this)}catch(i){t(i)}}),t),this._layer.load()}catch(i){t(i)}}))),this._loadPromise},D._initialiseFeatureSet=function(){if(null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0),this._layer.outFields)if(1===this._layer.outFields.length&&"*"===this._layer.outFields[0]);else{const e=[];for(const t of this.fields)if("oid"===t.type)e.push(t);else for(const i of this._layer.outFields)if(i.toLowerCase()===t.name.toLowerCase()){e.push(t);break}this.fields=e}else;if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{const e=[],t=[];for(const i of this.fields)if("oid"===i.type)e.push(i),t.push(i.name);else for(const r of this._overrideFields)if(r.toLowerCase()===i.name.toLowerCase()){e.push(i),t.push(i.name);break}this.fields=e,this._overrideFields=t}if(this._layer.source&&this._layer.source.sourceJSON){const e=this._layer.source.sourceJSON.currentVersion;!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=n.FeatureServiceDatabaseType.StandardisedNoInterval,null!=e&&e>=10.61&&(this._databaseType=n.FeatureServiceDatabaseType.Standardised)):null!=e&&(e>=10.5&&(this._databaseType=n.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),e>=10.61&&(this._databaseType=n.FeatureServiceDatabaseType.Standardised))}this.objectIdField=this._layer.objectIdField;for(const e of this.fields)"global-id"===e.type&&(this.globalIdField=e.name);this.hasM=this._layer.supportsM,this.hasZ=this._layer.supportsZ,this.typeIdField=this._layer.typeIdField,this.types=this._layer.types},D._isInFeatureSet=function(){return n.IdState.InFeatureSet},D._refineSetBlock=function(e){return h.resolve(e)},D._candidateIdTransform=function(e){return e},D._getSet=function(e){return null===this._wset?this._ensureLoaded().then((()=>this._getFilteredSet("",null,null,null,e))).then((e=>(this._wset=e,e))):h.resolve(this._wset)},D._runDatabaseProbe=function(e){return h.create(((t,i)=>{try{this._ensureLoaded().then((()=>{try{const r=new g;r.where=e.replace("OBJECTID",this._layer.objectIdField),this._layer.queryObjectIds(r).then((()=>{t(!0)}),(()=>{try{t(!1)}catch(e){i(e)}}))}catch(r){i(r)}}))}catch(r){i(r)}}))},D._canUsePagination=function(){return!(!this._layer.capabilities||!this._layer.capabilities.query||!0!==this._layer.capabilities.query.supportsPagination)},D._cacheableFeatureSetSourceKey=function(){return this._layer.url},D.pbfSupportedForQuery=function(e){return!e.outStatistics&&this._layer&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsFormatPBF&&!0===this._layer.capabilities.query.supportsQuantizationEditMode},D.queryPBF=function(e){return e.quantizationParameters={mode:"edit"},F.executeQueryPBF(this._layer.parsedUrl,e,new f.OptimizedFeatureSetParserContext({})).then((e=>_.fromJSON(y.convertToFeatureSet(e.data)).unquantize()))},D.nativeCapabilities=function(){return{title:this._layer.title,source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}},D.executeQuery=function(e,t){const i=new S({url:this._layer.parsedUrl.path}),r="execute"===t&&this.pbfSupportedForQuery(e);let s=null;if(this.recentlyUsedQueries){const a=this.convertQueryToLruCacheKey(e);s=this.recentlyUsedQueries.getFromCache(a),null===s&&(s=!0!==r?i[t](e):this.queryPBF(e),this.recentlyUsedQueries.addToCache(a,s),s=s.catch((e=>{throw this.recentlyUsedQueries.removeFromCache(a),e})))}return this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:e,method:t}),null===s&&(s=!0!==r?i[t](e):this.queryPBF(e)),s},D._getFilteredSet=function(e,t,i,r,s){return this.databaseType().then((n=>{if(this.isTable()&&t&&null!==e&&""!==e){return new a([],[],!0,null)}if(this._canUsePagination())return this._getFilteredSetUsingPaging(e,t,i,r,s);let o="",u=!1;null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(o=r.constructClause(),u=!0);const d=new g;return d.where=null===i?null===t?"1=1":"":l.toWhereClause(i,n),this._requestStandardised&&(d.sqlFormat="standard"),d.spatialRelationship=this._makeRelationshipEnum(e),d.outSpatialReference=this.spatialReference,d.orderByFields=""!==o?o.split(","):null,d.geometry=null===t?null:t,d.relationParameter=this._makeRelationshipParam(e),this.executeQuery(d,"executeForIds").then((e=>{null===e&&(e=[]),this._checkCancelled(s);return new a([],e,u,null)}))}))},D._expandPagedSet=function(e,t,i,r,s){return this._expandPagedSetFeatureSet(e,t,i,r,s)},D._getFilteredSetUsingPaging=function(e,t,i,r,s){try{let n="",o=!1;return null!==r&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(n=r.constructClause(),o=!0),this.databaseType().then((r=>{let u=null===i?null===t?"1=1":"":l.toWhereClause(i,r);this._layer.definitionExpression&&this._useDefinitionExpression&&(u=""!==u?"(("+this._layer.definitionExpression+") AND ("+u+"))":this._layer.definitionExpression);let d=this._maxQueryRate();const h=this._layer.capabilities.query.maxRecordCount;void 0!==h&&h<d&&(d=h);let c=null;if(!0===this._pageJustIds)c=new a([],["GETPAGES"],o,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:this._layer.objectIdField,resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:u,orderByFields:n,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});else{let i=!0;!0===this._removeGeometry&&(i=!1);const r=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?this._layer.outFields:["*"]);c=new a([],["GETPAGES"],o,{spatialRel:this._makeRelationshipEnum(e),relationParam:this._makeRelationshipParam(e),outFields:r.join(","),resultRecordCount:d,resultOffset:0,geometry:null===t?null:t,where:u,orderByFields:n,returnGeometry:i,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}return this._expandPagedSet(c,d,0,1,s).then((()=>c))}))}catch(n){return h.reject(n)}},D._clonePageDefinition=function(e){return null===e?null:!0!==e.groupbypage?{groupbypage:!1,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,resultOffset:e.resultOffset,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}:{groupbypage:!0,spatialRel:e.spatialRel,relationParam:e.relationParam,outFields:e.outFields,resultRecordCount:e.resultRecordCount,useOIDpagination:e.useOIDpagination,generatedOid:e.generatedOid,groupByFieldsForStatistics:e.groupByFieldsForStatistics,resultOffset:e.resultOffset,outStatistics:e.outStatistics,geometry:e.geometry,where:e.where,orderByFields:e.orderByFields,returnGeometry:e.returnGeometry,returnIdsOnly:e.returnIdsOnly,internal:e.internal}},D._getPhysicalPage=function(e,t,i){try{const t=e.pagesDefinition.internal.lastRetrieved,r=t,s=e.pagesDefinition.internal.lastPage,a=new g;return this._requestStandardised&&(a.sqlFormat="standard"),a.spatialRelationship=e.pagesDefinition.spatialRel,a.relationParameter=e.pagesDefinition.relationParam,a.outFields=e.pagesDefinition.outFields.split(","),a.num=e.pagesDefinition.resultRecordCount,a.start=e.pagesDefinition.internal.lastPage,a.geometry=e.pagesDefinition.geometry,a.where=e.pagesDefinition.where,a.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,a.returnGeometry=e.pagesDefinition.returnGeometry,a.outSpatialReference=this.spatialReference,this.executeQuery(a,"execute").then((a=>{if(this._checkCancelled(i),e.pagesDefinition.internal.lastPage!==s)return"done";for(let t=0;t<a.features.length;t++)e.pagesDefinition.internal.set[r+t]=a.features[t].attributes[this._layer.objectIdField];if(!1===this._pageJustIds)for(let e=0;e<a.features.length;e++)this._featureCache[a.features[e].attributes[this._layer.objectIdField]]=a.features[e];return(void 0===a.exceededTransferLimit&&a.features.length!==e.pagesDefinition.resultRecordCount||!1===a.exceededTransferLimit)&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=t+a.features.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,"done"}))}catch(r){return h.reject(r)}},D._fieldsIncludingObjectId=function(e){if(null===e)return[this.objectIdField];const t=e.slice(0);if(t.indexOf("*")>-1)return t;let i=!1;for(const r of t)if(r.toUpperCase()===this.objectIdField.toUpperCase()){i=!0;break}return!1===i&&t.push(this.objectIdField),t},D._getFeatures=function(e,t,i,r){const s=[];try{if(-1!==t&&void 0===this._featureCache[t]&&s.push(t),!0===this._checkIfNeedToExpandKnownPage(e,this._maxProcessingRate()))return this._expandPagedSet(e,this._maxProcessingRate(),0,0,r).then((()=>this._getFeatures(e,t,i,r)));let n=0;for(let r=e._lastFetchedIndex;r<e._known.length;r++){if(e._lastFetchedIndex+=1,n++,void 0===this._featureCache[e._known[r]]){let i=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){const t=this._layer._mode;if(void 0!==t._featureMap[e._known[r]]){const s=t._featureMap[e._known[r]];null!==s&&(i=!0,this._featureCache[e._known[r]]=s)}}if(!1===i&&(e._known[r]!==t&&s.push(e._known[r]),s.length>=this._maxProcessingRate()-1))break}if(n>=i&&0===s.length)break}if(0===s.length)return h.resolve("success");try{const e=new g;return this._requestStandardised&&(e.sqlFormat="standard"),e.objectIds=s,e.outFields=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?this._layer.outFields:["*"]),e.returnGeometry=!0,!0===this._removeGeometry&&(e.returnGeometry=!1),e.outSpatialReference=this.spatialReference,this.executeQuery(e,"execute").then((e=>{if(this._checkCancelled(r),void 0!==e.error)return h.reject(new Error(e.error));for(let t=0;t<e.features.length;t++)this._featureCache[e.features[t].attributes[this._layer.objectIdField]]=e.features[t];return"success"}))}catch(a){return h.reject(a)}}catch(a){return h.reject(a)}},D._getDistinctPages=function(e,t,i,r,s,a,n,o,u){return this._ensureLoaded().then((()=>this.databaseType())).then((d=>{let c=i.parseTree.column;for(let e=0;e<this._layer.fields.length;e++)if(this._layer.fields[e].name.toLowerCase()===c.toLowerCase()){c=this._layer.fields[e].name;break}const p=new g;this._requestStandardised&&(p.sqlFormat="standard");let y=null===a?null===s?"1=1":"":l.toWhereClause(a,d);return this._layer.definitionExpression&&this._useDefinitionExpression&&(y=""!==y?"(("+this._layer.definitionExpression+") AND ("+y+"))":this._layer.definitionExpression),p.where=y,p.spatialRelationship=this._makeRelationshipEnum(r),p.relationParameter=this._makeRelationshipParam(r),p.geometry=null===s?null:s,p.returnDistinctValues=!0,p.returnGeometry=!1,p.outFields=[c],this.executeQuery(p,"execute").then((l=>{if(this._checkCancelled(u),!l.hasOwnProperty("features"))return h.reject(new Error("Unnexected Result querying statistics from layer"));let d=!1;for(let e=0;e<this._layer.fields.length;e++)if(this._layer.fields[e].name===c){"date"===this._layer.fields[e].type&&(d=!0);break}for(let e=0;e<l.features.length;e++){if(d){const t=l.features[e].attributes[c];null!==t?o.push(new Date(t)):o.push(t)}else o.push(l.features[e].attributes[c]);if(o.length>=n)break}return 0===l.features.length?o:l.features.length===this._layer.capabilities.query.maxRecordCount&&o.length<n?this._getDistinctPages(e+l.features.length,t,i,r,s,a,n,o,u).then((e=>({calculated:!0,result:e}))):o}))}))},D._distinctStat=function(e,t,i,r,s,a,n){return this._getDistinctPages(0,e,t,i,r,s,a,[],n).then((e=>({calculated:!0,result:e})))},D.isTable=function(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType},D._countstat=function(e,t,i,r){return this.databaseType().then((e=>{const s=new g;if(this._requestStandardised&&(s.sqlFormat="standard"),this.isTable()&&i&&null!==t&&""!==t)return{calculated:!0,result:0};let a=null===r?null===i?"1=1":"":l.toWhereClause(r,e);return this._layer.definitionExpression&&this._useDefinitionExpression&&(a=""!==a?"(("+this._layer.definitionExpression+") AND ("+a+"))":this._layer.definitionExpression),s.where=a,s.where=a,s.spatialRelationship=this._makeRelationshipEnum(t),s.relationParameter=this._makeRelationshipParam(t),s.geometry=null===i?null:i,s.returnGeometry=!1,this.executeQuery(s,"executeForCount").then((e=>({calculated:!0,result:e})))}))},D._stats=function(e,t,i,r,s,a,n){return this._ensureLoaded().then((()=>{const u=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression,d=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics,c=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsDistinct;return"count"===e?c?this._countstat(e,i,r,s):{calculated:!1}:!1===d||!1===l.isSingleField(t)&&!1===u||!1===t.isStandardized?""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,a,n):"distinct"===e?!1===c?""!==i||null!==s?{calculated:!1}:this._manualStat(e,t,a,n):this._distinctStat(e,t,i,r,s,a,n):this.databaseType().then((a=>{if(this.isTable()&&r&&null!==i&&""!==i)return{calculated:!0,result:null};const n=new g;this._requestStandardised&&(n.sqlFormat="standard");let u=null===s?null===r?"1=1":"":l.toWhereClause(s,a);this._layer.definitionExpression&&this._useDefinitionExpression&&(u=""!==u?"(("+this._layer.definitionExpression+") AND ("+u+"))":this._layer.definitionExpression),n.where=u,n.spatialRelationship=this._makeRelationshipEnum(i),n.relationParameter=this._makeRelationshipParam(i),n.geometry=null===r?null:r;const d=new m;d.statisticType=o.decodeStatType(e),d.onStatisticField=l.toWhereClause(t,a),d.outStatisticFieldName="ARCADE_STAT_RESULT",n.returnGeometry=!1;let c="ARCADE_STAT_RESULT";return n.outStatistics=[d],this.executeQuery(n,"execute").then((e=>{if(!e.hasOwnProperty("features")||0===e.features.length)return h.reject(new Error("Unnexected Result querying statistics from layer"));let t=!1;for(let i=0;i<e.fields.length;i++)if("ARCADE_STAT_RESULT"===e.fields[i].name.toUpperCase()){c=e.fields[i].name,"date"===e.fields[i].type&&(t=!0);break}if(t){let t=e.features[0].attributes[c];return null!==t&&(t=new Date(e.features[0].attributes[c])),{calculated:!0,result:t}}return{calculated:!0,result:e.features[0].attributes[c]}}))}))}))},D._stat=function(e,t,i,r,s,a,n){return this._stats(e,t,i,r,s,a,n)},D._canDoAggregates=function(e,t){return this._ensureLoaded().then((()=>{let e=!1;const i=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsSqlExpression;if(void 0!==this._layer.capabilities&&null!==this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics&&!0===this._layer.capabilities.query.supportsOrderBy&&(e=!0),e)for(let r=0;r<t.length-1;r++)null!==t[r].workingexpr&&(!1===t[r].workingexpr.isStandardized||!1===l.isSingleField(t[r].workingexpr)&&!1===i)&&(e=!1);return!1!==e}))},D._makeRelationshipEnum=function(e){if(e.indexOf("esriSpatialRelRelation")>=0)return"relation";switch(e){case"esriSpatialRelRelation":return"relation";case"esriSpatialRelIntersects":return"intersects";case"esriSpatialRelContains":return"contains";case"esriSpatialRelOverlaps":return"overlaps";case"esriSpatialRelWithin":return"within";case"esriSpatialRelTouches":return"touches";case"esriSpatialRelCrosses":return"crosses";case"esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return e},D._makeRelationshipParam=function(e){return e.indexOf("esriSpatialRelRelation")>=0?e.split(":")[1]:""},D._getAggregatePagesDataSourceDefinition=function(e,t,i,r,s,n,o){return this._ensureLoaded().then((()=>this.databaseType())).then((u=>{let d="",h=!1,c=!1;null!==n&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(d=n.constructClause(),c=!0),this._layer.capabilities&&this._layer.capabilities.query&&!1===this._layer.capabilities.query.supportsPagination&&(c=!1,h=!0,d=this._layer.objectIdField);const p=[];for(let e=0;e<t.length;e++){const i=new m;i.onStatisticField=null!==t[e].workingexpr?l.toWhereClause(t[e].workingexpr,u):"",i.outStatisticFieldName=t[e].field,i.statisticType=t[e].toStatisticsName(),p.push(i)}""===d&&(d=e.join(","));let y=this._maxQueryRate();const f=this._layer.capabilities.query.maxRecordCount;void 0!==f&&f<y&&(y=f);let _=null===s?null===r?"1=1":"":l.toWhereClause(s,u);this._layer.definitionExpression&&this._useDefinitionExpression&&(_=""!==_?"(("+this._layer.definitionExpression+") AND ("+_+"))":this._layer.definitionExpression);return new a([],["GETPAGES"],c,{groupbypage:!0,spatialRel:this._makeRelationshipEnum(i),relationParam:this._makeRelationshipParam(i),outFields:["*"],useOIDpagination:h,generatedOid:o,resultRecordCount:y,resultOffset:0,groupByFieldsForStatistics:e,outStatistics:p,geometry:null===r?null:r,where:_,orderByFields:d,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}))},D._getAgregagtePhysicalPage=function(e,i,r){try{let i=e.pagesDefinition.where;!0===e.pagesDefinition.useOIDpagination&&(i=""!==i?"("+i+") AND ("+e.pagesDefinition.generatedOid+">"+e.pagesDefinition.internal.lastMaxId.toString()+")":e.pagesDefinition.generatedOid+">"+e.pagesDefinition.internal.lastMaxId.toString());const s=e.pagesDefinition.internal.lastRetrieved,a=s,n=e.pagesDefinition.internal.lastPage,l=new g;return this._requestStandardised&&(l.sqlFormat="standard"),l.where=i,l.spatialRelationship=e.pagesDefinition.spatialRel,l.relationParameter=e.pagesDefinition.relationParam,l.outFields=e.pagesDefinition.outFields,l.outStatistics=e.pagesDefinition.outStatistics,l.geometry=e.pagesDefinition.geometry,l.groupByFieldsForStatistics=e.pagesDefinition.groupByFieldsForStatistics,l.num=e.pagesDefinition.resultRecordCount,l.start=e.pagesDefinition.internal.lastPage,l.returnGeometry=e.pagesDefinition.returnGeometry,l.orderByFields=""!==e.pagesDefinition.orderByFields?e.pagesDefinition.orderByFields.split(","):null,this.isTable()&&l.geometry&&l.spatialRelationship?h.resolve([]):this.executeQuery(l,"execute").then((i=>{if(this._checkCancelled(r),!i.hasOwnProperty("features"))return h.reject(new Error("Unnexected Result querying aggregates from layer"));const l=[];if(e.pagesDefinition.internal.lastPage!==n)return[];for(let t=0;t<i.features.length;t++)e.pagesDefinition.internal.set[a+t]=i.features[t].attributes[e.pagesDefinition.generatedOid];for(let e=0;e<i.features.length;e++)l.push(new t({attributes:i.features[e].attributes,geometry:null}));return!0===e.pagesDefinition.useOIDpagination?0===i.features.length?e.pagesDefinition.internal.fullyResolved=!0:e.pagesDefinition.internal.lastMaxId=i.features[i.features.length-1].attributes[e.pagesDefinition.generatedOid]:(void 0===i.exceededTransferLimit&&i.features.length!==e.pagesDefinition.resultRecordCount||!1===i.exceededTransferLimit)&&(e.pagesDefinition.internal.fullyResolved=!0),e.pagesDefinition.internal.lastRetrieved=s+i.features.length,e.pagesDefinition.internal.lastPage+=e.pagesDefinition.resultRecordCount,l}))}catch(s){return h.reject(s)}},R.create=function(e,t,i,r,s){return new R({layer:new p({url:e,outFields:null===t?["*"]:t}),spatialReference:i,lrucache:r,interceptor:s})},D.relationshipMetaData=function(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON&&this._layer.source.sourceJSON.relationships?this._layer.source.sourceJSON.relationships:[]},D.serviceUrl=function(){return n.extractServiceUrl(this._layer.parsedUrl.path)},D.queryAttachments=function(e,t,i,s,a){if(this._layer.capabilities.data.supportsAttachment&&this._layer.capabilities.operations.supportsQueryAttachments){const n={objectIds:[e],returnMetadata:a};return(t&&t>0||i&&i>0)&&(n.size=[t&&t>0?t:0,i&&i>0?i:t+1]),s&&s.length>0&&(n.attachmentTypes=s),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:n,method:"attachments"}),this._layer.queryAttachments(n).then((t=>{const i=[];return t&&t[e]&&t[e].forEach((t=>{const s=this._layer.parsedUrl.path+"/"+e.toString()+"/attachments/"+t.id.toString();let n=null;a&&t.exifInfo&&(n=b.convertJsonToArcade(t.exifInfo,!0)),i.push(new r(t.id,t.name,t.contentType,t.size,s,n))})),i}))}return h.resolve([])},D.queryRelatedFeatures=function(e){const r={f:"json",relationshipId:e.relationshipId.toString(),definitionExpression:e.where,outFields:e.outFields.join(","),returnGeometry:e.returnGeometry.toString()};return void 0!==e.resultOffset&&null!==e.resultOffset&&(r.resultOffset=e.resultOffset.toString()),void 0!==e.resultRecordCount&&null!==e.resultRecordCount&&(r.resultRecordCount=e.resultRecordCount.toString()),e.orderByFields&&(r.orderByFields=e.orderByFields.join(",")),e.objectIds.length>0&&(r.objectIds=e.objectIds.join(",")),e.outSpatialReference&&(r.outSR=JSON.stringify(e.outSpatialReference.toJSON())),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preRequestCallback({layer:this._layer,queryPayload:r,method:"relatedrecords",url:this._layer.parsedUrl.path+"/queryRelatedRecords"}),i(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:r}).then((e=>{if(e.data){const i={},r=e.data;if(r&&r.relatedRecordGroups){const e=r.spatialReference;for(const s of r.relatedRecordGroups){const a=s.objectId,n=[];for(const i of s.relatedRecords){i.geometry&&(i.geometry.spatialReference=e);const r=new t({geometry:i.geometry?c.fromJSON(i.geometry):null,attributes:i.attributes});n.push(r)}i[a]={features:n,exceededTransferLimit:!0===r.exceededTransferLimit}}}return i}return h.reject("Invalid Request")}))},D.getFeatureByObjectId=function(e,t){const i=new S({url:this._layer.parsedUrl.path}),r=new g;return r.outFields=t,r.returnGeometry=!1,r.outSpatialReference=this.spatialReference,r.where=this.objectIdField+"="+e.toString(),this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:r,method:"execute"}),i.execute(r).then((e=>1===e.features.length?e.features[0]:null))},D.getIdentityUser=function(){return this.load().then((()=>{var e;const t=null==(e=d.id)?void 0:e.findCredential(this._layer.url);return t?t.userId:null}))},D.getOwningSystemUrl=function(){return this.load().then((()=>{var e;const t=null==(e=d.id)?void 0:e.findServerInfo(this._layer.url);if(t)return h.resolve(t.owningSystemUrl);let r=this._layer.url;const s=r.toLowerCase().indexOf("/rest/services");return r=s>-1?r.substring(0,s):r,r?(r+="/rest/info",h.create(((e,t)=>{i(r,{query:{f:"json"}}).then((t=>{let i="";t.data&&t.data.owningSystemUrl&&(i=t.data.owningSystemUrl),e(i)}),(t=>{e("")}))}))):h.resolve("")}))},D.getDataSourceFeatureSet=function(){const e=new R({layer:this._layer,spatialReference:this.spatialReference,outFields:this._overrideFields,includeGeometry:!this._removeGeometry,lrucache:this.recentlyUsedQueries,interceptor:this.featureSetQueryInterceptor});return e._useDefinitionExpression=!1,e},e._createClass(R,[{key:"gdbVersion",get:function(){return this._layer&&this._layer.capabilities&&this._layer.capabilities.data&&this._layer.capabilities.data.isVersioned?this._layer.gdbVersion?this._layer.gdbVersion:"SDE.DEFAULT":""}}]),R}(s)}));
