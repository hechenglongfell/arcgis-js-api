/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","../../../../interactive/dragEventPipeline"],(function(e,t,n){"use strict";function a(e,t,a,r){const i=e.graphic,s=(e,n)=>t({action:e,graphic:i,dxScreen:n.screenDeltaX,dyScreen:n.screenDeltaY});return a(((e,t,a)=>(t.next((e=>("start"===e.action&&s("start",e),e))).next(n.dragGraphic(i,r)).next((e=>{switch(e.action){case"start":case"update":(e.translationX||e.translationY||e.translationZ)&&s("update",e);break;case"end":s("end",e)}return e})),{steps:t,cancel:a=a.next(n.resetGraphic(i)).next((e=>(s("end",{screenDeltaX:0,screenDeltaY:0}),e)))})))}function r(e){if(t.isNone(e)||"polyline"!==e.type&&"polygon"!==e.type)return 0;const n=("polyline"===e.type?e.paths:e.rings)[0];if(!n||n.length<2)return 0;const a=n[0],r=n[1];return Math.atan2(r[1]-a[1],r[0]-a[0])}function i(e){if(t.isNone(e)||t.isNone(e.axis))return 1;const{mapStart:n,mapEnd:a,axis:r}=e,i=[a.x-n.x,a.y-n.y];return i[0]*r[0]+i[1]*r[1]>0?1:-1}e.axisConstrainedDragSign=i,e.createGraphicMoveDragPipeline=a,e.shapeOrientation=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
