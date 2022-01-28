/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../geometry/projection","../../../support/featureFlags","./FeatureLayerViewBase3D"],(function(e,r,t,a,i,o,s,c,p,n,l){"use strict";let y=function(r){function a(){var e;return(e=r.apply(this,arguments)||this).type="feature-3d",e.direct3DObjectFeatureLayerDisplayEnabled=n.enableDirect3DObjectFeatureLayerDisplay(),e}return e._inheritsLoose(a,r),a.prototype.initialize=function(){this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new t("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),"mesh"!==this.layer.geometryType||p.canProjectWithoutEngine(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new t("layerview:spatial-reference-incompatible","The spatial references of the feature layer layer is incompatible with the spatial reference of the view")))},a}(l);r.__decorate([a.property({constructOnly:!0})],y.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),r.__decorate([a.property()],y.prototype,"layer",void 0),y=r.__decorate([c.subclass("esri.views.3d.layers.FeatureLayerView3D")],y);return y}));
