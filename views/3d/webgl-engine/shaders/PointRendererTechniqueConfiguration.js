/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ShaderTechniqueConfiguration","../materials/DefaultTechniqueConfiguration"],(function(e,r,t,o,a,i){"use strict";let n=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).output=o.ShaderOutput.Color,r.hasSlicePlane=!1,r.drawScreenSize=!1,r.useFixedSizes=!1,r.hasOccludees=!1,r.clippingEnabled=!1,r}return r._inheritsLoose(t,e),t}(i.DefaultTechniqueConfiguration);t.__decorate([a.parameter({count:o.ShaderOutput.COUNT})],n.prototype,"output",void 0),t.__decorate([a.parameter()],n.prototype,"hasSlicePlane",void 0),t.__decorate([a.parameter()],n.prototype,"drawScreenSize",void 0),t.__decorate([a.parameter()],n.prototype,"useFixedSizes",void 0),t.__decorate([a.parameter()],n.prototype,"hasOccludees",void 0),t.__decorate([a.parameter()],n.prototype,"clippingEnabled",void 0),t.__decorate([a.parameter({constValue:!0})],n.prototype,"hasSliceInVertexProgram",void 0),e.PointRendererTechniqueConfiguration=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
