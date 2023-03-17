/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../Color","../../interactive/Manipulator3D","../../interactive/manipulatorUtils","../../interactive/RenderObject","../../interactive/editingTools/manipulatorUtils","../../webgl-engine/lib/GeometryUtil","../../../interactive/interfaces"],(function(e,t,o,r,i,a,n,s){"use strict";function u(e,o,a){return new i.RenderObject(n.createSphereGeometry(r.createManipulatorMaterial(t.toUnitRGBA(o)),e,32,32),a)}function l(e){const t=[];return e.customColor1&&t.push(u(e.size,e.customColor1,s.ManipulatorStateCustomFlags.Custom1)),e.customColor2&&t.push(u(e.size,e.customColor2,s.ManipulatorStateCustomFlags.Custom2)),e.customColor3&&t.push(u(e.size,e.customColor3,s.ManipulatorStateCustomFlags.Custom3)),e.color&&t.push(u(e.size,e.color)),t}function c(e,t){const r=l(t),i=new o.Manipulator3D({view:e,renderObjects:r,elevationInfo:{mode:"absolute-height",offset:0}});return a.disableDisplayOnGrab(i),i}e.createSphereManipulator=c,e.createSphereManipulatorRenderObjects=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
