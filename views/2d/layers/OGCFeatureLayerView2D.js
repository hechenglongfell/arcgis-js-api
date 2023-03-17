/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/arrayUtils","../../../core/Error","../../../core/has","../../../core/accessorSupport/decorators/subclass","./FeatureLayerView2D","../../layers/OGCFeatureLayerView"],(function(e,r,s,t,o,a,c,u,i,n){"use strict";let p=function(r){function s(){return r.apply(this,arguments)||this}return e._inheritsLoose(s,r),s.prototype.supportsSpatialReference=function(e){return this.layer.serviceSupportsSpatialReference(e)},s}(n(i));p=r.__decorate([u.subclass("esri.views.2d.layers.OGCFeatureLayerView2D")],p);return p}));
