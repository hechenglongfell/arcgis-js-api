/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/arrayUtils","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/support/quantizationUtils","../../../geometry/support/spatialReferenceUtils","../../../layers/support/arcgisLayerUrl","../../../layers/support/fieldUtils","../../../rest/support/GenerateRendererParameters","../../../rest/support/QuantizationParameters","../../../rest/support/StatisticDefinition","../../../rest/support/UniqueValueDefinition","../../statistics/support/predominanceUtils","../../statistics/support/utils","../../statistics/support/WorkerClient","../utils","./LayerAdapter","./support/utils","../../../tasks/GenerateRendererTask","../../../geometry/Point"],(function(e,t,r,a,i,n,s,o,l,u,c,m,d,p,h,f,y,F,g,S,v,x,_,w,z,q,E,T,V){"use strict";const L=n.getLogger("esri.smartMapping.support.adapters.FeatureLayerAdapter"),C=5,Q=10,B=2e4,b=4e5;function R(e){return M.apply(this,arguments)}function M(){return(M=e._asyncToGenerator((function*(e){if(!e)throw new i("feature-layer-adapter:insufficient-data","layerView is required to fetch the features");const t=o.createAbortController(),r=l.whenFalseOnce(e,"updating",t.signal);yield o.timeout(r,5e3,t).catch((e=>{throw L.warn("LayerView is taking too long to update. Aborting fetch from layerView."),e}))}))).apply(this,arguments)}let P=function(t){function r(e){return t.call(this,e)||this}e._inheritsLoose(r,t);var n=r.prototype;return n.destroy=function(){var e;this._hasLocalSource=null,null==(e=this.workerClient)||e.destroy()},n._isStatsSupportedOnService=function(){const e=this.layer;return!e.get("capabilities.query.supportsStatistics")||"multipatch"===this.geometryType&&!f.isHostedAgolService(e.url)&&e.version<10.5?Promise.reject(new i("feature-layer-adapter:not-supported","Layer does not support statistics query")):Promise.resolve()},n._fetchFeaturesFromMemory=function(){var t=e._asyncToGenerator((function*(e,t,r,a){const i=this.layer,n="json"===a;if(this._hasLocalSource){const e=yield i.queryFeatures(t);return n?E.ensureFeaturesJSON(e.features):e.features}if(yield R(e),n&&"queryFeaturesJSON"in e&&e.queryFeaturesJSON){const{features:a}=yield e.queryFeaturesJSON(t,{signal:r});return a}const s=yield e.queryFeatures(t,{signal:r});return n?E.ensureFeaturesJSON(s.features):s.features}));function r(e,r,a,i){return t.apply(this,arguments)}return r}(),n._fetchFeaturesFromService=function(e,t){return this.layer.queryFeatures(e,{signal:t}).then((e=>e.features))},n._fetchFeaturesJSONFromService=function(e,t){return this._fetchFeaturesFromService(e,t).then(E.ensureFeaturesJSON)},n._fetchFeaturesForStats=function(e,t){return z.getFieldsList({field:e.field,normalizationField:e.normalizationField,valueExpression:e.valueExpression}).then((r=>this.getSampleFeatures({sampleSize:-1,view:e.view,returnGeometry:e.returnGeometry,requiredFields:r,signal:e.signal},t)))},n._summaryStatsFromGenRend=function(e){const t=e.normalizationType,r=e.normalizationField;return this.classBreaks({field:e.field,numClasses:C,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:t,normalizationField:"field"===t?r:void 0,minValue:e.minValue,maxValue:e.maxValue,signal:e.signal}).then((e=>{let t,r,a;if(e.classBreakInfos.some((e=>(e.hasAvg&&(t=e),!!t))),t){const e=t.maxValue-t.minValue;r=t.minValue+e/2,a=4*e}const i={min:e.minValue,max:e.maxValue,avg:r,stddev:a};return E.processSummaryStatisticsResult(i)}))},n._getSummaryStatsQuery=function(e,t){const{field:r,normalizationType:a,normalizationField:i,normalizationTotal:n,minValue:s,maxValue:o}=e,l=this.supportsSQLExpression&&t?E.msSinceUnixEpochSQL(this,r):e.sqlExpression,u=E.getFieldExpr({field:r,normalizationType:a,normalizationField:i,normalizationTotal:n,layer:this}),c=l||u,m=c?_.getRangeExpr(c,s,o):null,d=_.getSQLFilterForNormalization({field:r,normalizationField:i,normalizationType:a}),p=_.mergeWhereClauses(e.sqlWhere,d),h=_.mergeWhereClauses(p,m),f=_.isNullCountSupported({normalizationField:i,normalizationType:a,sqlExpression:l,supportsSQLExpression:this.supportsSQLExpression,minValue:s,maxValue:o}),F=y.isStringField(this.getField(r)),g=E.statisticTypes.filter((e=>"nullcount"===e?f:!F||"count"===e)),v=this.layer.createQuery();return v.where=_.mergeWhereClauses(v.where,h),v.sqlFormat=l?"standard":null,v.outStatistics=g.map((e=>{const t=new S;let r=null,a=null,i=`${e}_value`;return"variance"===e?(r="var",a=c):"nullcount"===e?(r="count",a=this.layer.objectIdField,i="totalcount_value"):(r=e,a=c),t.statisticType=r,t.onStatisticField=a,t.outStatisticFieldName=i,t})),v},n._summaryStatsFromServiceQuery=function(){var t=e._asyncToGenerator((function*(e,t){yield this._isStatsSupportedOnService(),"percent-of-total"===e.normalizationType&&(e.normalizationTotal=yield this._getNormalizationTotal(e.field,e.normalizationType));const r=this._getSummaryStatsQuery(e,t),a=yield this.layer.queryFeatures(r,{signal:e.signal}),i=E.getSummaryStatisticsFromFeatureSet(a,t);return E.processSummaryStatisticsResult(i)}));function r(e,r){return t.apply(this,arguments)}return r}(),n._summaryStatsFromClientQuery=function(){var t=e._asyncToGenerator((function*(e,t){const r=this._getSummaryStatsQuery(e,t),a=yield this.layer.queryFeatures(r,{signal:e.signal}),i=E.getSummaryStatisticsFromFeatureSet(a,t);return E.processSummaryStatisticsResult(i)}));function r(e,r){return t.apply(this,arguments)}return r}(),n._summaryStatsFromMemory=function(){var t=e._asyncToGenerator((function*(e,t){const{view:r,field:a,signal:n}=e,{featuresJSON:s,layerView:o,query:l}=yield this._processStatsFromMemoryParams(e),u={field:a,valueExpression:e.valueExpression,normalizationType:e.normalizationType,normalizationField:e.normalizationField,normalizationTotal:e.normalizationTotal,minValue:e.minValue,maxValue:e.maxValue};var c;e.valueExpression&&r&&s&&(u.fieldType=null==t?void 0:t.type,u.viewInfoParams={viewingMode:"2d"===r.type?"map":r.viewingMode,scale:r.scale,spatialReference:null==(c=r.spatialReference)?void 0:c.toJSON()});if("percent-of-total"===e.normalizationType&&null==e.normalizationTotal){const e=(!s&&o&&"querySummaryStatistics"in o&&o.querySummaryStatistics?yield o.querySummaryStatistics(l,{field:a},{signal:n}):yield this.workerClient.summaryStatistics({field:a},s)).sum;if(null==e)throw new i("feature-layer-adapter:invalid","invalid normalizationTotal");u.normalizationTotal=e}const m=!s&&o&&"querySummaryStatistics"in o&&o.querySummaryStatistics?yield o.querySummaryStatistics(l,u,{signal:n}):yield this.workerClient.summaryStatistics(u,s);return E.processSummaryStatisticsResult(m)}));function r(e,r){return t.apply(this,arguments)}return r}(),n._processStatsFromMemoryParams=function(){var t=e._asyncToGenerator((function*(e){if(e.features)return{featuresJSON:E.ensureFeaturesJSON(e.features)};if(!e.view)throw new i("feature-layer-adapter:insufficient-data","View is required to fetch the features");const{view:t,field:r,normalizationField:a,valueExpression:n,signal:s}=e,o=yield t.whenLayerView(this.layer);let l="querySummaryStatistics"in o&&"function"==typeof o.querySummaryStatistics,u=null,c=null;if(l)try{yield R(o);const e=yield z.getFieldsList({field:r,normalizationField:a,valueExpression:n});(yield E.getMissingFields(this,e,o)).length?l=!1:(u=this.layer.createQuery(),u.outFields=e,u.returnGeometry=!1),o.suspended&&(l=!1)}catch{l=!1}var m;if(!l&&(c=yield this._fetchFeaturesForStats({field:r,valueExpression:n,normalizationField:a,view:t,signal:s},"json"),null==(m=c)||!m.length))throw new i("feature-layer-adapter:insufficient-data","No features are available to calculate statistics");return{layerView:o,query:u,featuresJSON:c}}));function r(e){return t.apply(this,arguments)}return r}(),n._uvFromGenRenderer=function(e,t){const r=e.field,a=new v;a.attributeField=r;const i=new F;return i.classificationDefinition=a,this.generateRenderer(i,e.signal).then((e=>{const t={},a=this.getField(r);return e.uniqueValues.forEach((e=>{let r=e.value;null!=r&&""!==r&&("string"!=typeof r||""!==r.trim()&&"<null>"!==r.toLowerCase())||(r=null),null==t[r]?t[r]={count:e.count,data:y.isNumericField(a)&&r?Number(r):r}:t[r].count=t[r].count+e.count})),{count:t}})).then((r=>E.createUVResult(r,t,e.returnAllCodedValues)))},n._getUVQuery=function(e){const t=e.field,r=e.sqlExpression,a="countOF"+(t||"Expr"),i=new S;i.statisticType="count",i.onStatisticField=r?"1":t,i.outStatisticFieldName=a;const n=this.layer.createQuery();return n.where=_.mergeWhereClauses(n.where,e.sqlWhere),n.sqlFormat=r?"standard":null,n.outStatistics=[i],n.groupByFieldsForStatistics=[t||r],n},n._uvFromServiceQuery=function(e,t){return this._isStatsSupportedOnService().then((()=>this.layer.queryFeatures(this._getUVQuery(e),{signal:e.signal}))).then((t=>E.getUniqueValuesFromFeatureSet(t,this,e.field,null,e.signal))).then((r=>E.createUVResult(r,t,e.returnAllCodedValues)))},n._uvFromClientQuery=function(){var t=e._asyncToGenerator((function*(e,t){const{signal:r}=e,a=this._getUVQuery(e),i=yield this.layer.queryFeatures(a,{signal:r}),n=yield E.getUniqueValuesFromFeatureSet(i,this,e.field,null,r);return E.createUVResult(n,t,e.returnAllCodedValues)}));function r(e,r){return t.apply(this,arguments)}return r}(),n._uvFromMemory=function(){var t=e._asyncToGenerator((function*(e,t){const{field:r,valueExpression:a,view:i,signal:n}=e,s={field:r,valueExpression:a,view:i,signal:n},o=e.features?e.features:yield this._fetchFeaturesForStats(s);return E.calculateUniqueValuesFromMemory(e,o,t)}));function r(e,r){return t.apply(this,arguments)}return r}(),n._calcBinsSQL=function(e,t,r){const a=[],i=t.length;return t.forEach(((t,n)=>{const[s,o]=t;let l=null;l=0!==n||r?n!==i-1||r?_.mergeWhereClauses(`${e} >= ${s}`,`${e} ${n===i-1?" <= ":" < "} ${o}`):`${e} >= ${s}`:`${e} < ${o}`,a.push("WHEN ("+l+") THEN "+(n+1))})),["CASE",a.join(" "),"ELSE 0","END"].join(" ")},n._getNormalizationTotal=function(e,t,r){return e&&"percent-of-total"===t?this.summaryStatistics({field:e,signal:r}).then((e=>e.sum)):Promise.resolve(null)},n._getQueryParamsForExpr=function(e,t){const r=e.valueExpression||e.sqlExpression,a=e.signal;if(!r){const{field:r,normalizationType:i,normalizationField:n}=e,s=r?this.getField(r):null,o=y.isDateField(s),l={field:r,normalizationType:i,normalizationField:n,normalizationTotal:t,layer:this};return{sqlExpression:o?E.msSinceUnixEpochSQL(this,r):E.getFieldExpr(l),sqlWhere:o?null:e.sqlWhere||_.getSQLFilterForNormalization({field:r,normalizationType:i,normalizationField:n}),signal:a}}return{valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,signal:a}},n._getDataRange=function(e,t,r){return null!=t&&null!=r?Promise.resolve({min:t,max:r}):this.summaryStatistics(e).then((e=>({min:e.min,max:e.max})))},n._histogramForExpr=function(e){return this._getNormalizationTotal(e.field,e.normalizationType,e.signal).then((t=>{const r=this._getQueryParamsForExpr(e,t);return this._getDataRange(r,e.minValue,e.maxValue).then((a=>{const{min:i,max:n}=a,s=e.numBins||Q,o=E.getEqualIntervalBins(i,n,s),l=this._calcBinsSQL(r.sqlExpression,o,null!=e.minValue&&null!=e.maxValue),u=new S({statisticType:"count",outStatisticFieldName:"countOFExpr",onStatisticField:"1"}),c=this.layer.createQuery();return c.where=_.mergeWhereClauses(c.where,r.sqlWhere),c.sqlFormat="standard",c.outStatistics=[u],c.groupByFieldsForStatistics=[l],c.orderByFields=[l],this._isStatsSupportedOnService().then((()=>this.layer.queryFeatures(c,{signal:r.signal}))).then((e=>E.getHistogramFromFeatureSet(e,i,n,s,t)))}))}))},n._histogramForField=function(e){let t=null;return t=null!=e.minValue&&null!=e.maxValue?Promise.resolve({min:e.minValue,max:e.maxValue}):this.summaryStatistics(e).then((e=>{if(!e.count)throw new i("feature-layer-adapter:insufficient-data","Either the layer has no features or none of the features have data for the field");return{min:e.min,max:e.max}})),t.then((t=>this._getBins({min:t.min,max:t.max},e.field,e.numBins,e.signal)))},n._getBins=function(e,t,r=Q,a){const{min:i,max:n,normTotal:s,excludeZerosExpr:o}=e,l=e.intervals||E.getEqualIntervalBins(i,n,r),u=e.sqlExpr||t;return this._queryBins(l,u,o,a).then((e=>({bins:e.map(((e,t)=>({minValue:l[t][0],maxValue:l[t][1],count:e.value}))),minValue:i,maxValue:n,normalizationTotal:s})))},n._queryBins=function(e,t,r,a){const i=[],n=e.length;for(let s=0;s<n;s++){const a=_.mergeWhereClauses(r,_.mergeWhereClauses(t+" >= "+e[s][0],null!==e[s][1]?t+(s===n-1?" <= ":" < ")+e[s][1]:""));i.push(a)}return o.eachAlways(i.map((e=>this.queryFeatureCount(e,a))))},n._binParamsFromGenRend=function(e,t){const{field:r,normalizationType:a,normalizationField:i,signal:n}=e,s=_.getSQLFilterForNormalization({field:r,normalizationType:a,normalizationField:i}),o=new F({classificationDefinition:E.createCBDefn({field:r,normalizationType:a,normalizationField:i,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numBins||Q}),where:_.mergeWhereClauses(s,t)});return this.generateRenderer(o,n).then((e=>{const{normalizationTotal:t,classBreaks:n}=e;return E.generateBinParams({field:r,normalizationType:a,normalizationField:i,normalizationTotal:t,classBreaks:n,where:s,layer:this})}))},n._histogramFromMemory=function(e){const{field:t,normalizationField:r,normalizationType:a,valueExpression:n,classificationMethod:s,minValue:o,maxValue:l,view:u,signal:c}=e,m={field:t,valueExpression:n,normalizationField:r,view:u,signal:c};return(e.features?Promise.resolve(e.features):this._fetchFeaturesForStats(m)).then((r=>{if(!(r&&r.length))throw new i("feature-layer-adapter:insufficient-data","No features are available to calculate histogram");let m=null;if((!s||"equal-interval"===s)&&!a)m=null!=o&&null!=l?Promise.resolve({min:o,max:l,source:"parameters"}):this.summaryStatistics({field:t,valueExpression:n,features:r,view:u,signal:c}).then((e=>e.count?{min:e.min,max:e.max}:Promise.reject(new i("feature-layer-adapter:insufficient-data","No features are available to calculate histogram"))));else{const t={...e};t.features=r,m=this._getBinParamsFromMemory(t)}return m.then((t=>E.calculateHistogramFromMemory(e,t,r)))}))},n._getBinParamsFromMemory=function(){var t=e._asyncToGenerator((function*(e){const{field:t,valueExpression:r,classificationMethod:a,standardDeviationInterval:i,normalizationType:n,normalizationField:s,minValue:o,maxValue:l,features:u,view:c,signal:m}=e;return this._classBreaksFromMemory({field:t,valueExpression:r,normalizationType:n,normalizationField:s,classificationMethod:a,standardDeviationInterval:i,minValue:o,maxValue:l,numClasses:e.numBins,features:u,view:c,signal:m}).then((e=>{const r=e.normalizationTotal,a=e.classBreakInfos,i=_.getSQLFilterForNormalization({field:t,normalizationType:n,normalizationField:s});return E.generateBinParams({field:t,normalizationType:n,normalizationField:s,normalizationTotal:r,classBreaks:a,where:i,layer:this})}))}));function r(e){return t.apply(this,arguments)}return r}(),n._classBreaksFromGenRend=function(e){const{field:t,normalizationType:r,normalizationField:a,normalizationTotal:i,signal:n}=e,s=_.getSQLFilterForNormalization({field:t,normalizationType:r,normalizationField:a}),o=E.getFieldExpr({field:t,normalizationType:r,normalizationField:a,normalizationTotal:i,layer:this}),l=_.getRangeExpr(o,e.minValue,e.maxValue),u=E.createCBDefn({field:t,normalizationType:r,normalizationField:a,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||C}),c=new F;return c.classificationDefinition=u,c.where=_.mergeWhereClauses(s,l),this.generateRenderer(c,n).then((t=>E.resolveCBResult(e,t)))},n._classBreaksFromInterpolation=function(e){const{minValue:t,maxValue:r}=e,a=e.numClasses||C,i=[],n=(r-t)/a;for(let l=0;l<a;l++){const e=t+l*n;i.push({minValue:e,maxValue:e+n})}i[a-1].maxValue=r;const s={classBreaks:i,normalizationTotal:e.normalizationTotal},o=E.resolveCBResult(e,s);return Promise.resolve(o)},n._classBreaksFromMemory=function(){var t=e._asyncToGenerator((function*(e){const{field:t,normalizationField:r,valueExpression:a,view:n,signal:s}=e,o={field:t,valueExpression:a,normalizationField:r,view:n,signal:s},l=e.features||(yield this._fetchFeaturesForStats(o));if(!(l&&l.length))throw new i("feature-layer-adapter:insufficient-data","No features are available to calculate statistics");const u={...e};if("percent-of-total"===u.normalizationType){const e=(yield E.calculateStatsFromMemory({field:t},l)).sum;if(null==e)throw new i("feature-layer-adapter:invalid","invalid normalizationTotal");u.normalizationTotal=e}return E.calculateClassBreaksFromMemory(u,l)}));function r(e){return t.apply(this,arguments)}return r}(),n._heatmapStatsFromMemory=function(){var t=e._asyncToGenerator((function*(e,t){const{blurRadius:r,field:a,view:n,signal:s}=e,{resolution:o,size:l}=n.state,u=new g({extent:n.extent,tolerance:o}),c=this._quantizeFeatures(e.features||(yield this._fetchFeaturesForStats({field:a,view:n,returnGeometry:!0,signal:s})),u,n);if(!c||!c.length)return{count:0,min:null,max:null,avg:null,stddev:null};const m=E.calculateHeatmapStats(c,r,t,a,l[0],l[1]);if(m)return{count:m.count,min:m.min,max:m.max,avg:m.mean,stddev:m.stdDev};throw new i("feature-layer-adapter:invalid","unable to calculate heatmap statistics")}));function r(e,r){return t.apply(this,arguments)}return r}(),n._quantizeFeatures=function(e,t,r){const a=p.toQuantizationTransform(t),{spatialReference:i,size:n}=r,o=h.isWrappable(i)?h.getInfo(i):null,l=o?Math.round((o.valid[1]-o.valid[0])/a.scale[0]):null;return e.map((e=>{const t=new V(s.unwrap(e.geometry));return p.quantizePoint(a,t,t,t.hasZ,t.hasM),e.geometry=o?this._wrapPoint(t,l,n[0]):t,e}))},n._wrapPoint=function(e,t,r){return e.x<0?e.x+=t:e.x>r&&(e.x-=t),e},n.getField=function(e=""){return this.layer.getField(e)},n.getFieldUsageInfo=function(e){return this.getField(e)?{supportsLabelingInfo:!0,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:!0,supportsStatistics:!0}:null},n.getFieldDomain=function(e,t){return this.layer.getFieldDomain(e,t)},n.summaryStatistics=function(e){const{field:t,normalizationType:r,sqlExpression:a,view:n,features:s}=e,l=t?this.getField(t):null,u=y.isDateField(l),c=e.valueExpression||a,m=c&&!a,d=this._hasLocalSource||s,p=n&&"3d"===n.type;if(d||m)return m||s||p?this._summaryStatsFromMemory(e,l):this._summaryStatsFromClientQuery(e,u);if(!this.supportsSQLExpression&&(u||c||"natural-log"===r||"square-root"===r))return Promise.reject(new i("feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries"));return(r&&!this.supportsSQLExpression?this._summaryStatsFromGenRend(e):this._summaryStatsFromServiceQuery(e,u)).catch((()=>(o.throwIfAborted(e.signal),this._summaryStatsFromMemory(e,l))))},n.uniqueValues=function(e){const{field:t,valueExpression:r,sqlExpression:a,signal:i}=e,n=(t?this.getField(t):null)&&this.getFieldDomain(t),s=r&&(!a||!this.supportsSQLExpression),l=this._hasLocalSource||e.features||s,u=e.view,c=u&&"3d"===u.type;return l?s||e.features||c?this._uvFromMemory(e,n):this._uvFromClientQuery(e,n):this._uvFromServiceQuery(e,n).catch((t=>(o.throwIfAborted(i),e.field?this._uvFromGenRenderer(e,n):t))).catch((()=>(o.throwIfAborted(i),s||e.features||c?this._uvFromMemory(e,n):this._uvFromClientQuery(e,n))))},n.histogram=function(e){const{field:t,normalizationType:r,normalizationField:a,classificationMethod:n,signal:s}=e,o=t?this.getField(t):null,l=y.isDateField(o),u=e.valueExpression||e.sqlExpression,c=u&&!e.sqlExpression,m=this._hasLocalSource||e.features||c,d=this.supportsSQLExpression,p=!n||"equal-interval"===n,h=e.minValue,f=e.maxValue,F=null!=h&&null!=f,g=e.numBins||Q;return m?this._histogramFromMemory(e):(u||d)&&p?d||!u&&"natural-log"!==r&&"square-root"!==r?this._histogramForExpr(e):Promise.reject(new i("feature-layer-adapter:not-supported","Layer does not support standardized SQL expression for queries")):l&&p?Promise.reject(new i("feature-layer-adapter:not-supported","Normalization and date field are not allowed when layer does not support standardized SQL expression for queries")):r||!p?this._binParamsFromGenRend(e).then((n=>{if(!F)return this._getBins(n,t,g,s);if(h>n.max||f<n.min)throw new i("histogram:insufficient-data","Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field");if(p)return this._getBins({min:h,max:f,sqlExpr:n.sqlExpr,excludeZerosExpr:n.excludeZerosExpr},t,g,s);{const i={field:t,normalizationType:r,normalizationField:a,normalizationTotal:n.normTotal,layer:this},o=E.getFieldExpr(i),l=_.getRangeExpr(o,h,f);return this._binParamsFromGenRend(e,l).then((e=>this._getBins(e,t,g,s)))}})):this._histogramForField(e)},n.classBreaks=function(e){const t=!1!==e.analyzeData,r=this._hasLocalSource||e.features||e.valueExpression;if(t&&r)return this._classBreaksFromMemory(e);return(t?this._classBreaksFromGenRend(e):this._classBreaksFromInterpolation(e)).catch((()=>(o.throwIfAborted(e.signal),this._classBreaksFromMemory(e))))},n.queryFeatureCount=function(e,t){if(this._hasLocalSource)return Promise.reject(new i("feature-layer-adapter:not-supported","Layer does not support count query"));const r=this.layer,a=r.createQuery();return a.where=_.mergeWhereClauses(a.where,e),r.queryFeatureCount(a,{signal:t})},n.generateRenderer=function(e,t){const r=this.layer;if(this._hasLocalSource||r.version<10.1)return Promise.reject(new i("feature-layer-adapter:not-supported","Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)"));const a=new T({url:r.parsedUrl.path,source:r.dynamicDataSource,gdbVersion:r.gdbVersion}),n=r.createQuery();return e.where=_.mergeWhereClauses(e.where,n.where),a.execute(e,{signal:t})},n.heatmapStatistics=function(e){const{field:t,fieldOffset:r,signal:a}=e;return(t&&null==r?this.summaryStatistics({field:t,signal:a}):Promise.resolve(null)).then((t=>{let a=r||0;if(t){const{count:e,min:r,max:i}=t;e?r===i&&0===r?a=1:i<=0?a="abs":r<0&&(a=-1.01*r):a=1}return this._heatmapStatsFromMemory(e,a).then((e=>({...e,summaryStatistics:t,fieldOffset:a})))}))},n.predominantCategories=function(){var t=e._asyncToGenerator((function*(e){if(!this._hasLocalSource&&!this.supportsSQLExpression)throw new i("feature-layer-adapter:not-supported","Layer does not support advanced SQL expressions and standardized queries");const{fields:t,view:r,signal:a}=e,n=x.getArcadeForPredominantCategory(t),s=x.getSQLForPredominantCategoryName(t),o=(r&&this._hasLocalSource?yield this._uvFromMemory({valueExpression:n,view:r,signal:a}):yield this._uvFromServiceQuery({sqlExpression:s.expression,valueExpression:n,signal:a})).uniqueValueInfos,l=o.map((e=>e.value)),u=t.filter((e=>-1===l.indexOf(e)));for(const i of u)o.push({value:i,count:0});o.sort(((e,r)=>t.indexOf(e.value)-t.indexOf(r.value)));for(const i of o)i.value===x.noDominantCategoryField&&(i.value=null);return{predominantCategoryInfos:o}}));function r(e){return t.apply(this,arguments)}return r}(),n.getSampleFeatures=function(){var t=e._asyncToGenerator((function*(e,t){const{view:r,sampleSize:i,requiredFields:n,returnGeometry:s,signal:l}=e,u=this.layer.createQuery(),c=1,m="json"===t;u.outSpatialReference=e.spatialReference||r&&r.spatialReference,u.returnGeometry=!!s,u.outFields=n;let d=[],p=!1;if(r)try{const e=yield r.whenLayerView(this.layer);if(p=!(yield E.getMissingFields(this,n,e)).length,p&&(d=yield this._fetchFeaturesFromMemory(e,u,l,t),d.length&&i>0&&i<=d.length))return a.pickRandom(d,i,c)}catch(h){o.throwIfAborted(l)}try{if(this._hasLocalSource)return p?d:m?this._fetchFeaturesJSONFromService(u,l):this._fetchFeaturesFromService(u,l);const t=yield this.queryFeatureCount(null,l),n=this.layer.capabilities.query.maxRecordCount;let s=-1===i?t:i;if(s=n&&s>n?n:s,t<=d.length||d.length>=n)return d;const o=r.extent.width/r.width/r.scale*b;if(u.maxAllowableOffset=e.resolution||o,t<=s)return m?this._fetchFeaturesJSONFromService(u,l):this._fetchFeaturesFromService(u,l);if(t<=B){const e=yield this.layer.queryObjectIds();return u.objectIds=a.pickRandom(e,s,c),m?this._fetchFeaturesJSONFromService(u,l):this._fetchFeaturesFromService(u,l)}return this.layer.get("capabilities.query.supportsPagination")&&(u.num=Math.min(s,B)),m?this._fetchFeaturesJSONFromService(u,l):this._fetchFeaturesFromService(u,l)}catch(h){return o.throwIfAborted(l),d}}));function r(e,r){return t.apply(this,arguments)}return r}(),n.load=function(t){var r=this;const a=this.layer.load(t).then(function(){var a=e._asyncToGenerator((function*(e){r.geometryType=e.geometryType,r.objectIdField=e.objectIdField,r.supportsSQLExpression=e.get("capabilities.query.supportsSqlExpression"),r._hasLocalSource=!e.url&&!!e.source,r.hasQueryEngine=r._hasLocalSource,r.minScale=e.minScale,r.maxScale=e.maxScale,r.fullExtent=e.fullExtent,r.workerClient=w.WorkerClient.getInstance(),yield r.workerClient.open(s.unwrap(s.unwrap(t).signal))}));return function(e){return a.apply(this,arguments)}}());return this.addResolvingPromise(a),Promise.resolve(this)},r}(q);return t.__decorate([u.property({constructOnly:!0})],P.prototype,"layer",void 0),P=t.__decorate([d.subclass("esri.smartMapping.support.adapters.FeatureLayerAdapter")],P),P}));
