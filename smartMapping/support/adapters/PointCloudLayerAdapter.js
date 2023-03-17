/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/Error","../../../core/has","../../../core/accessorSupport/decorators/subclass","./SceneLayerAdapter"],(function(e,t,r,s,o,n,i,u,a){"use strict";let p=function(t){function r(e){return t.call(this,e)||this}e._inheritsLoose(r,t);var s=r.prototype;return s.getField=function(e=""){return this.layer.fieldsIndex.get(e)},s.getFieldUsageInfo=function(e){const t=this.getField(e);if(!t)return null;const r=this._hasCachedStatistics(t.name);return{supportsLabelingInfo:r,supportsPopupTemplate:r,supportsRenderer:r,supportsLayerQuery:!1,supportsStatistics:r}},s.getFieldDomain=function(){return null},s.load=function(e){const t=this.layer.load(e).then((()=>{this.geometryType="point",this.objectIdField=null,this.supportsSQLExpression=!1,this.hasQueryEngine=!1}));return this.addResolvingPromise(t),Promise.resolve(this)},r}(a);p=t.__decorate([u.subclass("esri.smartMapping.support.adapters.PointCloudLayerAdapter")],p);return p}));
