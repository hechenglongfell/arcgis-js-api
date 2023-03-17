/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/basicInterfaces","../lib/TransparencyPassType","../materials/DefaultTechniqueConfiguration"],(function(e,t,r,a,o,p,n,s){"use strict";let c=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).output=a.ShaderOutput.Color,t.cullFace=p.CullFaceOptions.None,t.hasSlicePlane=!1,t.hasVertexColors=!1,t.transparent=!1,t.polygonOffset=!1,t.enableOffset=!0,t.writeDepth=!0,t.hasOccludees=!1,t.transparencyPassType=n.TransparencyPassType.NONE,t.hasMultipassTerrain=!1,t.cullAboveGround=!1,t.objectAndLayerIdColorInstanced=!1,t}return t._inheritsLoose(r,e),r}(s.DefaultTechniqueConfiguration);r.__decorate([o.parameter({count:a.ShaderOutput.COUNT})],c.prototype,"output",void 0),r.__decorate([o.parameter({count:p.CullFaceOptions.COUNT})],c.prototype,"cullFace",void 0),r.__decorate([o.parameter()],c.prototype,"hasSlicePlane",void 0),r.__decorate([o.parameter()],c.prototype,"hasVertexColors",void 0),r.__decorate([o.parameter()],c.prototype,"transparent",void 0),r.__decorate([o.parameter()],c.prototype,"polygonOffset",void 0),r.__decorate([o.parameter()],c.prototype,"enableOffset",void 0),r.__decorate([o.parameter()],c.prototype,"writeDepth",void 0),r.__decorate([o.parameter()],c.prototype,"hasOccludees",void 0),r.__decorate([o.parameter({count:n.TransparencyPassType.COUNT})],c.prototype,"transparencyPassType",void 0),r.__decorate([o.parameter()],c.prototype,"hasMultipassTerrain",void 0),r.__decorate([o.parameter()],c.prototype,"cullAboveGround",void 0),r.__decorate([o.parameter()],c.prototype,"objectAndLayerIdColorInstanced",void 0),e.ColorMaterialTechniqueConfiguration=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
