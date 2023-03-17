/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../Color","../../../../core/has","../../../../core/maybe","../../../../core/screenUtils","../../../../chunks/vec4f64","./layerUtils","../../webgl-engine/lib/edgeRendering/interfaces"],(function(e,n,r,t,o,s,i,c){"use strict";function a(e){return e&&e.enabled&&(i.isExtrudeSymbol3DLayer(e)||i.isFillSymbol3DLayer(e))&&t.isSome(e.edges)}function l(e){return e&&e.enabled&&e.edges||null}function u(e,n){return y(l(e),n)}function y(e,r){if(t.isNone(e))return null;const i=t.isSome(e.color)?s.fromArray(n.toUnitRGBA(e.color)):s.fromValues(0,0,0,0),c=o.pt2px(e.size),a=o.pt2px(e.extensionLength);switch(e.type){case"solid":return d({color:i,size:c,extensionLength:a,...r});case"sketch":return f({color:i,size:c,extensionLength:a,...r});default:return}}function d(e){return{...g,...e,type:"solid"}}function f(e){return{...p,...e,type:"sketch"}}const g={color:s.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.Transparency.OPAQUE,hasSlicePlane:!1},p={color:s.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.Transparency.OPAQUE,hasSlicePlane:!1};e.createMaterial=u,e.createMaterialFromEdges=y,e.createSolidEdgeMaterial=d,e.hasEdges=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
