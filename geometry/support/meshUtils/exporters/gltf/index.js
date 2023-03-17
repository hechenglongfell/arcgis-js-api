/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/promiseUtils","../../../../Point","./glb","./gltf","./types","./imageutils","./asset","./scene","./node"],(function(e,t,r,u,n,p,o,a,f,i){"use strict";const s="model.gltf",y="model.glb";function c(e,a,f){a=a||{};const i=new n.GLTF(e,a,f);let c=i.params;c?c.origin||(c.origin=new r({x:-1,y:-1,z:-1})):c={origin:new r({x:-1,y:-1,z:-1})};const g=c.origin,l=i.gltf,O=l.extras?.promises??[];let d=1,b=1,m=null;return t.eachAlways(O).then((()=>{const e={origin:g};delete l.extras;const t="number"==typeof a.jsonSpacing?a.jsonSpacing:4,r=JSON.stringify(l,((t,r)=>{if("extras"!==t){if(r instanceof ArrayBuffer){if(o.isArrayBufferPNG(r))switch(a.imageOutputType){case p.ImageOutputType.DataURI:case p.ImageOutputType.GLB:break;case p.ImageOutputType.External:default:{const t=`img${b}.png`;return b++,e[t]=r,t}}switch(a.bufferOutputType){case p.BufferOutputType.DataURI:return o.encodeBase64DataUri(r);case p.BufferOutputType.GLB:if(m)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(m=r);case p.BufferOutputType.External:default:{const t=`data${d}.bin`;return d++,e[t]=r,t}}}return r}}),t);return a.bufferOutputType===p.BufferOutputType.GLB||a.imageOutputType===p.ImageOutputType.GLB?e[y]=new u.GLB(r,m).buffer:e[s]=r,e}))}function g(e,t){return c(e,{bufferOutputType:p.BufferOutputType.GLB,imageOutputType:p.ImageOutputType.GLB,jsonSpacing:0},t)}Object.defineProperty(e,"AlphaMode",{enumerable:!0,get:()=>p.AlphaMode}),Object.defineProperty(e,"AttributeType",{enumerable:!0,get:()=>p.AttributeType}),Object.defineProperty(e,"BufferOutputType",{enumerable:!0,get:()=>p.BufferOutputType}),Object.defineProperty(e,"ColorMode",{enumerable:!0,get:()=>p.ColorMode}),Object.defineProperty(e,"ImageOutputType",{enumerable:!0,get:()=>p.ImageOutputType}),Object.defineProperty(e,"MeshMode",{enumerable:!0,get:()=>p.MeshMode}),e.Asset=a.Asset,e.Scene=f.Scene,e.Node=i.Node,e.MODEL_NAME_GLB=y,e.MODEL_NAME_GLTF=s,e.exportGLB=g,e.exportGLTF=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
