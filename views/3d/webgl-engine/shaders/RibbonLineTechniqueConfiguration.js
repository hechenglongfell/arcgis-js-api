/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/ShaderOutput","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/TransparencyPassType","../materials/DefaultTechniqueConfiguration"],(function(e,r,t,o,a,p,i){"use strict";var d;e.CapType=void 0,(d=e.CapType||(e.CapType={}))[d.BUTT=0]="BUTT",d[d.SQUARE=1]="SQUARE",d[d.ROUND=2]="ROUND",d[d.COUNT=3]="COUNT";let n=function(t){function a(){var r;return(r=t.apply(this,arguments)||this).output=o.ShaderOutput.Color,r.capType=e.CapType.BUTT,r.transparencyPassType=p.TransparencyPassType.NONE,r.occluder=!1,r.hasSlicePlane=!1,r.hasPolygonOffset=!1,r.writeDepth=!1,r.draped=!1,r.stippleEnabled=!1,r.stippleOffColorEnabled=!1,r.stippleScaleWithLineWidth=!1,r.stipplePreferContinuous=!0,r.roundJoins=!1,r.applyMarkerOffset=!1,r.vvSize=!1,r.vvColor=!1,r.vvOpacity=!1,r.falloffEnabled=!1,r.innerColorEnabled=!1,r.hasOccludees=!1,r.hasMultipassTerrain=!1,r.cullAboveGround=!1,r.wireframe=!1,r.objectAndLayerIdColorInstanced=!1,r}return r._inheritsLoose(a,t),a}(i.DefaultTechniqueConfiguration);t.__decorate([a.parameter({count:o.ShaderOutput.COUNT})],n.prototype,"output",void 0),t.__decorate([a.parameter({count:e.CapType.COUNT})],n.prototype,"capType",void 0),t.__decorate([a.parameter({count:p.TransparencyPassType.COUNT})],n.prototype,"transparencyPassType",void 0),t.__decorate([a.parameter()],n.prototype,"occluder",void 0),t.__decorate([a.parameter()],n.prototype,"hasSlicePlane",void 0),t.__decorate([a.parameter()],n.prototype,"hasPolygonOffset",void 0),t.__decorate([a.parameter()],n.prototype,"writeDepth",void 0),t.__decorate([a.parameter()],n.prototype,"draped",void 0),t.__decorate([a.parameter()],n.prototype,"stippleEnabled",void 0),t.__decorate([a.parameter()],n.prototype,"stippleOffColorEnabled",void 0),t.__decorate([a.parameter()],n.prototype,"stippleScaleWithLineWidth",void 0),t.__decorate([a.parameter()],n.prototype,"stipplePreferContinuous",void 0),t.__decorate([a.parameter()],n.prototype,"roundJoins",void 0),t.__decorate([a.parameter()],n.prototype,"applyMarkerOffset",void 0),t.__decorate([a.parameter()],n.prototype,"vvSize",void 0),t.__decorate([a.parameter()],n.prototype,"vvColor",void 0),t.__decorate([a.parameter()],n.prototype,"vvOpacity",void 0),t.__decorate([a.parameter()],n.prototype,"falloffEnabled",void 0),t.__decorate([a.parameter()],n.prototype,"innerColorEnabled",void 0),t.__decorate([a.parameter()],n.prototype,"hasOccludees",void 0),t.__decorate([a.parameter()],n.prototype,"hasMultipassTerrain",void 0),t.__decorate([a.parameter()],n.prototype,"cullAboveGround",void 0),t.__decorate([a.parameter()],n.prototype,"wireframe",void 0),t.__decorate([a.parameter({constValue:!0})],n.prototype,"stippleRequiresClamp",void 0),t.__decorate([a.parameter({constValue:!0})],n.prototype,"stippleRequiresStretchMeasure",void 0),t.__decorate([a.parameter({constValue:!0})],n.prototype,"hasVvInstancing",void 0),t.__decorate([a.parameter({constValue:!0})],n.prototype,"hasSliceTranslatedView",void 0),t.__decorate([a.parameter()],n.prototype,"objectAndLayerIdColorInstanced",void 0),e.RibbonLineTechniqueConfiguration=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
