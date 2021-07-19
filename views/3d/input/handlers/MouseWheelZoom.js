/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/global/ZoomStepController","../../state/controllers/local/ZoomStepController","../../../input/InputHandler"],(function(e,t,o,r,l,n){"use strict";let i=function(e){function n(t,o){var r;return(r=e.call(this,!0)||this).view=t,r.registerIncoming("mouse-wheel",o,(e=>r.handleMouseWheel(e))),r}return t._inheritsLoose(n,e),n.prototype.handleMouseWheel=function(e){if(!this.view.navigation.mouseWheelZoomEnabled)return;const t=e.data;this.cameraController&&this.cameraController.active||(this.cameraController=this.view.state.isGlobal?new r.ZoomStepController({view:this.view,mode:"interaction"}):new l.ZoomStepController({view:this.view,mode:"interaction"}),this.view.state.switchCameraController(this.cameraController)),this.cameraController.zoomStep(-1/60*t.deltaY,o.createScreenPointArray(t.x,t.y)),e.preventDefault(),e.stopPropagation()},n}(n.InputHandler);e.MouseWheelZoom=i,Object.defineProperty(e,"__esModule",{value:!0})}));
