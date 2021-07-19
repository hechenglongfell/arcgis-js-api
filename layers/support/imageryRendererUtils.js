/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/lang","./RasterFunction","../../renderers/support/colorRampUtils","../../renderers/support/stretchRendererUtils","../../renderers/visualVariables/SizeVariable"],(function(e,t,n,r,a,o){"use strict";const i={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]},u={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},s=new Set(["raster-stretch","unique-value","class-breaks","raster-shaded-relief","vector-field","raster-colormap"]);function l(e){return s.has(e.type)}function c(e,n){if(!e||!n)return t.clone(e||n);const r=t.clone(e);if("none"!==n.functionName.toLowerCase()){p(r.functionArguments).Raster=n}return r}function m(e,t){switch(t=t||{},e.type){case"raster-stretch":return h(e,t);case"class-breaks":return b(e,t);case"unique-value":return S(e,t);case"raster-colormap":return v(e,t);case"vector-field":return d(e,t);case"raster-shaded-relief":return g(e,t)}}function p(e){const t=e.Raster;return t&&"esri.layers.support.RasterFunction"===t.declaredClass?p(t.functionArguments):e}const f={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};function d(e,t){const r=new n;r.functionName="VectorFieldRenderer";const{dataType:a,bandProperties:i}=t,s="vector-uv"===a;let l,c;i&&2===i.length&&(l=i.map((e=>e.BandName.toLowerCase())).indexOf("magnitude"),c=i.map((e=>e.BandName.toLowerCase())).indexOf("direction")),-1!==l&&null!==l||(l=0,c=1);const m="arithmetic"===e.rotationType?1:2,p="flow-from"===e.flowRepresentation?0:1,f=e.visualVariables?e.visualVariables.filter((e=>"Magnitude"===e.field))[0]:new o,d={magnitudeBandID:l,directionBandID:c,isUVComponents:s,referenceSystem:m,massFlowAngleRepresentation:p,symbolTileSize:50,symbolTileSizeUnits:100,calculationMethod:"Vector Average",symbologyName:u[e.style.toLowerCase().replace("-","_")],minimumMagnitude:f.minDataValue,maximumMagnitude:f.maxDataValue,minimumSymbolSize:f.minSize,maximumSymbolSize:f.maxSize};return r.functionArguments=d,r}function g(e,t){if("elevation"!==t.dataType)return new n;const a=new n;a.functionName="Hillshade";const o="traditional"===e.hillshadeType?0:1,i="none"===e.scalingType?1:3,u={HillshadeType:o,SlopeType:i,ZFactor:e.zFactor};return 0===o&&(u.Azimuth=e.azimuth,u.Altitude=e.altitude),3===i&&(u.PSPower=e.pixelSizePower,u.PSZFactor=e.pixelSizeFactor),a.functionArguments=u,a.variableName="Raster",e.colorRamp&&(a.functionName="ShadedRelief",u.Colormap=r.convertColorRampToColormap(e.colorRamp,256)),a}function h(e,t){const o=new n;o.functionName="Stretch";const i=f[a.stretchTypeJSONDict.toJSON(e.stretchType)],u="u8",s={StretchType:i,Statistics:C(e.statistics),DRA:e.dynamicRangeAdjustment,UseGamma:e.useGamma,Gamma:e.gamma,ComputeGamma:e.computeGamma};if(null!=e.outputMin&&(s.Min=e.outputMin),null!=e.outputMax&&(s.Max=e.outputMax),i===f.standardDeviation?(s.NumberOfStandardDeviations=e.numberOfStandardDeviations,o.outputPixelType=u):i===f.percentClip?(s.MinPercent=e.minPercent,s.MaxPercent=e.maxPercent,o.outputPixelType=u):i===f.minMax?o.outputPixelType=u:i===f.sigmoid&&(s.SigmoidStrengthLevel=e.sigmoidStrengthLevel),o.functionArguments=s,o.variableName="Raster",e.colorRamp){const a=e.colorRamp,i=new n,u=r.getColorRampName(a);return u?i.functionArguments={colorRamp:u}:!t.convertColorRampToColormap||"algorithmic"!==a.type&&"multipart"!==a.type?i.functionArguments={colorRamp:e.colorRamp.toJSON()}:i.functionArguments={Colormap:r.convertColorRampToColormap(a,256)},i.variableName="Raster",i.functionName="Colormap",i.functionArguments.Raster=o,i}return o}function b(e,t){const r=[],a=[],o=[],i=[],u=1e-6,{pixelType:s,rasterAttributeTable:l}=t,c=l&&l.features,m=R(l);if(c&&Array.isArray(c)&&e.classBreakInfos){e.classBreakInfos.forEach(((t,n)=>{const r=t.symbol.color;let a;r.a&&c.forEach((o=>{a=o.attributes[e.field],(a>=t.minValue&&a<t.maxValue||n===e.classBreakInfos.length-1&&a>=t.minValue)&&i.push([o.attributes[m],r.r,r.g,r.b])}))}));const t=s?y(i,s):i,r=new n;return r.functionName="Colormap",r.functionArguments={},r.functionArguments.Colormap=t,r.variableName="Raster",r}e.classBreakInfos.forEach(((e,t)=>{const n=e.symbol&&e.symbol.color;n.a?(0===t?r.push(e.minValue,e.maxValue+u):r.push(e.minValue+u,e.maxValue+u),a.push(t),i.push([t,n.r,n.g,n.b])):o.push(e.minValue,e.maxValue)}));const p=s?y(i,s):i,f=new n;f.functionName="Remap",f.functionArguments={InputRanges:r,OutputValues:a,NoDataRanges:o},f.variableName="Raster";const d=new n;return d.functionName="Colormap",d.functionArguments={Colormap:p,Raster:f},d}function y(e,t){const n=i[String(t).toLowerCase()];return n&&e.push([Math.floor(n[0]-1),0,0,0],[Math.ceil(n[1]+1),0,0,0]),e}function R(e){if(!e)return;const{fields:t}=e,n=t&&t.find((e=>e&&e.name&&"value"===e.name.toLowerCase()));return n&&n.name}function S(e,t){const r=[],{pixelType:a,rasterAttributeTable:o}=t,i=o&&o.features,u=R(o);let s=!1;if(e.uniqueValueInfos&&e.uniqueValueInfos.forEach((t=>{const n=t.symbol.color;null!=n&&n.a&&(e.field!==u&&i?i&&i.forEach((a=>{String(a.attributes[e.field])===String(t.value)&&r.push([a.attributes[u],n.r,n.g,n.b])})):isNaN(+t.value)?s=!0:r.push([+t.value,n.r,n.g,n.b]))})),s)return null;const l=a&&r.length>0?y(r,a):r,c=new n;return c.functionName="Colormap",c.functionArguments={},c.functionArguments.Colormap=l,c.variableName="Raster",c}function v(e,t){const r=e.extractColormap();if(!r||0===r.length)return;const{pixelType:a}=t,o=a?y(r,a):r,i=new n;return i.functionName="Colormap",i.functionArguments={},i.functionArguments.Colormap=o,i}function C(e){const t=[];return e.forEach((e=>{const n=e;if(Array.isArray(n))t.push(n);else{if(null==n.min||null==n.max)return;const e=[n.min,n.max,n.avg||0,n.stddev||0];t.push(e)}})),t}e.combineRenderingRules=c,e.convertRendererToRenderingRule=m,e.isSupportedRendererType=l,e.pixelTypeRanges=i,Object.defineProperty(e,"__esModule",{value:!0})}));
