/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass"],(function(e,r,t,o,n,s,c,p,u){"use strict";var i;e.FeatureIndex=i=function(e){function t(r){return e.call(this,r)||this}return r._inheritsLoose(t,e),t.prototype.clone=function(){const{name:e,fields:r,isAscending:t,isUnique:o,description:n}=this;return new i({name:e,fields:r,isAscending:t,isUnique:o,description:n})},t}(o.JSONSupport),t.__decorate([n.property({constructOnly:!0})],e.FeatureIndex.prototype,"name",void 0),t.__decorate([n.property({constructOnly:!0})],e.FeatureIndex.prototype,"fields",void 0),t.__decorate([n.property({constructOnly:!0})],e.FeatureIndex.prototype,"isAscending",void 0),t.__decorate([n.property({constructOnly:!0})],e.FeatureIndex.prototype,"isUnique",void 0),t.__decorate([n.property({constructOnly:!0})],e.FeatureIndex.prototype,"description",void 0),e.FeatureIndex=i=t.__decorate([u.subclass("esri.layers.support.FeatureIndex")],e.FeatureIndex);var d=e.FeatureIndex;e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}));
