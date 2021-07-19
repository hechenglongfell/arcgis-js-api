/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler","../../../input/handlers/support"],(function(e,t,r,n,o,a){"use strict";let i=function(e){function o(t,r,n,o){var a;return(a=e.call(this,!0)||this).view=t,a.pointerAction=r,a.pivot=n,a.registerIncoming("drag",o,(e=>a.handleDrag(e))),a}return t._inheritsLoose(o,e),o.prototype.handleDrag=function(e){const t=e.data;if(t.pointers.size>1)return;if(!a.eventMatchesMousePointerAction(e.data,this.pointerAction))return;const o=r.createScreenPointArray(t.center.x,t.center.y);switch(t.action){case"start":this.cameraController&&(this.cameraController.end(),this.cameraController=null),this.cameraController=new n.RotateController({view:this.view,pivot:this.pivot}),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(o);break;case"update":this.cameraController&&this.cameraController.update(o);break;case"end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}e.stopPropagation()},o}(o.InputHandler);e.DragRotate=i,Object.defineProperty(e,"__esModule",{value:!0})}));
