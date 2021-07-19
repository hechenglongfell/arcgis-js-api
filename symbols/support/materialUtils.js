/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/screenUtils","../../core/accessorSupport/ensureType","../../webdoc/support/opacityUtils"],(function(r,e,t,n,o){"use strict";function a(r,t){const n=null!=t.transparency?o.transparencyToOpacity(t.transparency):1,a=t.color;return a&&Array.isArray(a)?new e([a[0]||0,a[1]||0,a[2]||0,n]):null}function c(r,e){e.color=r.toJSON().slice(0,3);const t=o.opacityToTransparency(r.a);0!==t&&(e.transparency=t)}const s={type:e,json:{type:[n.Integer],default:null,read:{source:["color","transparency"],reader:a},write:{target:{color:{type:[n.Integer]},transparency:{type:n.Integer}},writer:c}}},p={type:Number,cast:t.toPt,json:{write:!0}},y={type:[Number],cast:r=>null!=r?r:Array.isArray(r)?r.map(t.toPt):null,json:{read:!1,write:!1}};r.colorAndTransparencyProperty=s,r.screenSizeProperty=p,r.stipplePatternProperty=y,Object.defineProperty(r,"__esModule",{value:!0})}));
