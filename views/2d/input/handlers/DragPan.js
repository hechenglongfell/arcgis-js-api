/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,n,i,a,e){"use strict";let o=function(t){function a(n,i,a){var e;return(e=t.call(this,!0)||this).view=n,e.pointerAction=i,e.registerIncoming("drag",a,(t=>e._handleDrag(t))),e.registerIncoming("pointer-down",(()=>e.stopMomentumNavigation())),e}n._inheritsLoose(a,t);var o=a.prototype;return o.onInstall=function(n){t.prototype.onInstall.call(this,n),this._dragEventSeparator=new i.DragEventSeparator({start:(t,n)=>{this.view.mapViewNavigation.pan.begin(this.view,n.data),n.stopPropagation()},update:(t,n)=>{this.view.mapViewNavigation.pan.update(this.view,n.data),n.stopPropagation()},end:(t,n)=>{this.view.mapViewNavigation.pan.end(this.view,n.data),n.stopPropagation()},condition:(t,n)=>1===t&&e.eventMatchesPointerAction(n.data,this.pointerAction)})},o._handleDrag=function(t){const n=this.view.mapViewNavigation;n.pinch.zoomMomentum||n.pinch.rotateMomentum?this.stopMomentumNavigation():this._dragEventSeparator.handle(t)},o.stopMomentumNavigation=function(){this.view.mapViewNavigation.pan.stopMomentumNavigation()},a}(a.InputHandler);t.DragPan=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
