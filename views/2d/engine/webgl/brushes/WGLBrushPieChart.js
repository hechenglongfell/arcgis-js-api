/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","./WGLGeometryBrushMarker","../techniques/utils","../../../../webgl/enums"],(function(e,o,r,t,n){"use strict";let s=function(r){function s(){return r.apply(this,arguments)||this}e._inheritsLoose(s,r);var u=s.prototype;return u.supportsSymbology=function(e){return e===o.WGLSymbologyType.PIE_CHART},u._drawMarkers=function(e,o,r,s,u,i,l){const{context:f}=e,{rendererInfo:c}=e,{rendererSchema:h}=c;t.assertRendererSchema(h,"pie-chart"),r.setUniform4fv("u_colors",h.colors),r.setUniform4fv("u_defaultColor",h.defaultColor),r.setUniform4fv("u_othersColor",h.othersColor),r.setUniform4fv("u_outlineColor",h.outlineColor),r.setUniform1f("u_donutRatio",h.holePercentage),r.setUniform1f("u_sectorThreshold",h.sectorThreshold),r.setUniform1f("u_outlineWidth",h.outlineWidth),f.drawElements(s,u,n.DataType.UNSIGNED_INT,i)},s}(r);return s}));
