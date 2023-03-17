/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],(function(e,t,r,n,o){"use strict";let i=function(e){function o(t,r=!1){var n;return(n=e.call(this,!0)||this)._view=t,n._invert=r,n.registerIncoming("vertical-two-finger-drag",(e=>n._handleTwoFinger(e))),n}return t._inheritsLoose(o,e),o.prototype._handleTwoFinger=function(e){const t=this._invert?-1:1,o=r.createScreenPointArray(0,e.data.delta*t);switch(e.data.action){case"begin":this._cameraController?.end(),this._cameraController=new n.RotateController({view:this._view,pivot:n.PivotPoint.CENTER}),this._view.state.switchCameraController(this._cameraController),this._cameraController.begin(o);break;case"update":this._cameraController?.update(o);break;case"end":this._cameraController?.end(),this._cameraController=null}},o}(o.InputHandler);e.TwoFingerTilt=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
