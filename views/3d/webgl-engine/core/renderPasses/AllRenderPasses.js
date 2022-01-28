/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/mat3f64","../../../../../chunks/vec2f64","../../../../../chunks/vec4f64","../../../../../chunks/boundedPlane","../shaderLibrary/attributes/VertexPosition.glsl"],(function(e,r,t,a,n,s,i){"use strict";let o=function(){this.viewTransform=new i.VertexPosition.ViewProjectionTransform,this.slicePlane=s.create()},c=function(e){function n(){var r;return(r=e.apply(this,arguments)||this).identifier=0,r.slicePlaneEnabled=!0,r.transparent=!1,r.integratedMesh=!1,r.transformNormal_ViewFromGlobal=t.create(),r.cameraNearFar=a.create(),r.inverseViewport=a.create(),r.ambientOcclusionEnabled=!0,r.shadowsEnabled=!0,r.sceneHasOcludees=!1,r.transparencyPassType=3,r}return r._inheritsLoose(n,e),n}(o),l=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).identifier=1,r.cameraNearFar=a.create(),r}return r._inheritsLoose(t,e),t}(o),u=function(e){function t(){var r;return(r=e.apply(this,arguments)||this).identifier=2,r.inverseViewport=a.create(),r.viewport=n.create(),r}return r._inheritsLoose(t,e),t}(o);e.HighlightPassParameters=u,e.MaterialPassesParameters=c,e.PassParameters=o,e.ShadowMapPassParameters=l,Object.defineProperty(e,"__esModule",{value:!0})}));
