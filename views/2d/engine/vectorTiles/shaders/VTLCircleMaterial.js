/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","./enums","./VTLMaterial","../../../../webgl/enums","../../../../webgl/VertexElementDescriptor"],(function(e,r,t,c,o,i){"use strict";let n=function(e){function t(r){return e.call(this,r)||this}r._inheritsLoose(t,e);var c=t.prototype;return c.geometryInfo=function(){return t.GEOMETRY_LAYOUT},c.opacityInfo=function(){return null},c.attributes=function(){return t.ATTRIBUTES},c.attributesInfo=function(){return t.ATTRIBUTES_INFO},t}(c.VTLMaterial);n.ATTRIBUTES=["circle-radius","circle-color","circle-opacity","circle-stroke-width","circle-stroke-color","circle-stroke-opacity","circle-blur"],n.GEOMETRY_LAYOUT=[new i.VertexElementDescriptor("a_pos",2,o.DataType.SHORT,0,4)],n.ATTRIBUTES_INFO={"circle-radius":{name:"radius",type:t.EncodingType.R8_UNSIGNED},"circle-color":{name:"color",type:t.EncodingType.R8G8B8A8_COLOR},"circle-opacity":{name:"opacity",type:t.EncodingType.R8_UNSIGNED,precisionFactor:100},"circle-stroke-width":{name:"stroke_width",type:t.EncodingType.R8_UNSIGNED,precisionFactor:4},"circle-stroke-color":{name:"stroke_color",type:t.EncodingType.R8G8B8A8_COLOR},"circle-stroke-opacity":{name:"stroke_opacity",type:t.EncodingType.R8_UNSIGNED,precisionFactor:100},"circle-blur":{name:"blur",type:t.EncodingType.R8_UNSIGNED,precisionFactor:32}},e.VTLCircleMaterial=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
