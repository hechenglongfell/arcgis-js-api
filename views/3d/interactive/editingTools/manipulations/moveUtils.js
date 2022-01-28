/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../interactive/dragEventPipeline"],(function(e,t,n){"use strict";function r(e,t,r,a){const i=e.graphic,c=(e,n)=>t({action:e,graphic:i,dxScreen:n.screenDeltaX,dyScreen:n.screenDeltaY});return r(((e,t,r)=>{const s=t.next((e=>("start"===e.action&&c("start",e),e))).next(n.dragGraphic(i,a)).next((e=>{switch(e.action){case"start":case"update":(e.translationX||e.translationY||e.translationZ)&&c("update",e);break;case"end":c("end",e)}return e}));return r.next(n.resetGraphic(i)).next((()=>{c("end",{screenDeltaX:0,screenDeltaY:0})})),s}))}function a(e){if(t.isNone(e)||"polyline"!==e.type&&"polygon"!==e.type)return 0;const n=("polyline"===e.type?e.paths:e.rings)[0];if(!n||n.length<2)return 0;const r=n[0],a=n[1];return Math.atan2(a[1]-r[1],a[0]-r[0])}e.createGraphicMoveDragPipeline=r,e.shapeOrientation=a,Object.defineProperty(e,"__esModule",{value:!0})}));
