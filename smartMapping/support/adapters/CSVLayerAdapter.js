/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/decorators/subclass","../../../rest/support/generateRendererUtils","../../statistics/support/utils","../../statistics/support/WorkerClient","../utils","./FeatureLayerAdapter","./support/utils"],(function(e,t,r,n,i,a,s,o,l,u,c,p,d,f,y){"use strict";let h=function(t){function i(e){return t.call(this,e)||this}e._inheritsLoose(i,t);var a=i.prototype;return a._createGenerateRendererResult=function(){var t=e._asyncToGenerator((function*(e,t,n,i,a){const s=e?.features,o=s?.length;if(!o)throw new r("csv-layer-adapter:insufficient-data","No features are available to calculate statistics");const l=y.ensureFeaturesJSON(s);let p=null;if("percent-of-total"===i){if(p=(yield this.workerClient.summaryStatistics({field:t},l)).sum,null==p)throw new r("csv-layer-adapter:invalid","invalid normalizationTotal")}if("class-breaks-definition"===a.type){const e=(yield c.getDataValues({field:t,normalizationType:i,normalizationField:n,normalizationTotal:p},l)).filter((e=>Number.isFinite(e)));return u.createGenerateRendererClassBreaks({definition:a,values:e,normalizationTotal:p})}const d=(yield c.getDataValues({field:t},l)).filter((e=>null!=e&&"string"==typeof e&&""!==e.trim()));return u.createGenerateRendererUniqueValues(d)}));function n(e,r,n,i,a){return t.apply(this,arguments)}return n}(),a.generateRenderer=function(e,t){const r=e.classificationDefinition;let n=null,i=null,a=null;"class-breaks-definition"===r.type?(n=r.classificationField,i=r.normalizationField,a=r.normalizationType):n=r.attributeField;const s=this.layer;return d.getFieldsList({field:n,normalizationField:i}).then((o=>{const l=s.createQuery();return l.returnGeometry=!1,l.outFields=o,l.where=c.mergeWhereClauses(l.where,e.where),s.queryFeatures(l,{signal:t}).then((e=>this._createGenerateRendererResult(e,n,i,a,r)))}))},a.load=function(t){var r=this;const i=this.layer.load(t).then(function(){var i=e._asyncToGenerator((function*(e){r.geometryType=e.geometryType,r.objectIdField=e.objectIdField,r.supportsSQLExpression=!0,r._hasLocalSource=!1,r.hasQueryEngine=!0,r.workerClient=p.WorkerClient.getInstance(),yield r.workerClient.open(n.unwrap(n.unwrap(t).signal))}));return function(e){return i.apply(this,arguments)}}());return this.addResolvingPromise(i),Promise.resolve(this)},i}(f);h=t.__decorate([l.subclass("esri.smartMapping.support.adapters.CSVLayerAdapter")],h);return h}));
