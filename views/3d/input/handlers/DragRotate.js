/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler","../../../input/handlers/support"],(function(e,t,r,o,n,a){"use strict";let i=function(e){function n(t,r,o,n){var a;return(a=e.call(this,!0)||this)._view=t,a.pointerAction=r,a._pivot=o,a.registerIncoming("drag",n,(e=>a._handleDrag(e))),a}return t._inheritsLoose(n,e),n.prototype._handleDrag=function(e){const t=e.data;if(t.pointers.size>1)return;if(!a.eventMatchesMousePointerAction(e.data,this.pointerAction))return;const n=r.createScreenPointArray(t.center.x,t.center.y);switch(t.action){case"start":this._cameraController&&(this._cameraController.end(),this._cameraController=null),this._cameraController=new o.RotateController({view:this._view,pivot:this._pivot}),this._view.state.switchCameraController(this._cameraController),this._cameraController.begin(n);break;case"update":this._cameraController&&this._cameraController.update(n);break;case"end":this._cameraController&&(this._cameraController.end(),this._cameraController=null)}e.stopPropagation()},n}(n.InputHandler);Object.defineProperty(e,"PivotPoint",{enumerable:!0,get:()=>o.PivotPoint}),e.DragRotate=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
