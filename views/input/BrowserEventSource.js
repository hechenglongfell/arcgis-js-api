/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/has","./keys","./gamepad/GamepadSource","../support/screenUtils"],(function(e,t,n,i,o,a){"use strict";const s=n("trident"),r=n("edge"),h=n("chrome"),u=n("ff"),c=n("safari"),l={touchNone:"esri-view-surface--touch-none",touchPan:"esri-view-surface--touch-pan"};let d=function(){function e(e,t){this.input=t,this._active={},this._activePointerCaptures=new Set,this._keyDownState=new Set,this._eventId=1,this._browserTouchPanningEnabled=!1,this._element=e,e.getAttribute("tabindex")||e.setAttribute("tabindex","0"),this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost},this._updateTouchAction(),this._element.addEventListener("keydown",this._preventAltKeyDefault),this._gamepadSource=new o.GamepadSource(e,this.input),this._gamepadSource.onEvent=e=>this._callback("gamepad",e)}var n=e.prototype;return n.destroy=function(){this._callback=null,this.activeEvents=null,this._activePointerCaptures.forEach((e=>{this._releasePointerCaptureSafe(e)})),this._gamepadSource&&(this._gamepadSource.destroy(),this._gamepadSource=null),this._activePointerCaptures=null,this._removeTouchAction(),this._element.removeEventListener("keydown",this._preventAltKeyDefault)},n.setPointerCapture=function(e,t){t?(this._element.setPointerCapture(e.pointerId),this._activePointerCaptures.add(e.pointerId)):(this._releasePointerCaptureSafe(e.pointerId),this._activePointerCaptures.delete(e.pointerId))},n._updateTouchAction=function(){this._element.classList.remove(this._browserTouchPanningEnabled?l.touchNone:l.touchPan),this._element.classList.add(this._browserTouchPanningEnabled?l.touchPan:l.touchNone)},n._updateTouchEventHandling=function(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)},n._removeTouchAction=function(){this._element.classList.remove(l.touchNone),this._element.classList.remove(l.touchPan),this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)},n._releasePointerCaptureSafe=function(e){try{if(this._element.hasPointerCapture&&!this._element.hasPointerCapture(e))return;this._element.releasePointerCapture(e)}catch(t){}},n._updateNormalizedPointerLikeEvent=function(t,n){const i=a.createScreenPointFromNativeEvent(this._element,t);return e.test.disableSubpixelCoordinates&&(i.x=Math.round(i.x),i.y=Math.round(i.y)),n.x=i.x,n.y=i.y,n},n._handleKey=function(e,t){const n=i.eventKey(t);n&&"key-up"===e&&this._keyDownState.delete(n);const o={native:t,key:n,repeat:n&&this._keyDownState.has(n)};n&&"key-down"===e&&this._keyDownState.add(o.key),this._callback(e,o)},n._handlePointer=function(e,t){const n=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,pointerType:t.pointerType,button:t.button,buttons:t.buttons,eventId:this._eventId++});this._callback(e,n)},n._handlePointerPreventDefault=function(e,t){const n=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,pointerType:t.pointerType,button:t.button,buttons:t.buttons,eventId:this._eventId++});t.preventDefault(),this._callback(e,n)},n._handleMouseWheel=function(e,t){let n=t.deltaY;switch(t.deltaMode){case 0:(s||r)&&(n=n/document.documentElement.clientHeight*600);break;case 1:n*=30;break;case 2:n*=900}s||r?n*=.7:h||c?n*=.6:u&&(n*=1.375);const i=100,o=Math.abs(n);if(o>i){const e=.02;n=n/o*200/(1+Math.exp(-e*(o-i)))}const a=this._updateNormalizedPointerLikeEvent(t,{native:t,x:0,y:0,deltaY:n});this._callback(e,a)},n._handlePointerCaptureLost=function(e,t){this._activePointerCaptures.delete(t.pointerId),this._handleDefault(e,t)},n._handleDefault=function(e,t){const n={native:t};t.preventDefault(),this._callback(e,n)},n._preventAltKeyDefault=function(e){"Alt"===e.key&&e.preventDefault()},n._preventMultiTouchPanning=function(e){e.touches.length>1&&e.preventDefault()},t._createClass(e,[{key:"browserTouchPanningEnabled",get:function(){return this._browserTouchPanningEnabled},set:function(e){this._browserTouchPanningEnabled=e,this._updateTouchAction(),this._updateTouchEventHandling()}},{key:"onEventReceived",set:function(e){this._callback=e}},{key:"activeEvents",set:function(e){for(const t in this._active)if(!e||!e.has(t)){const e=this._active[t];this._element.removeEventListener(p[t],e),delete this._active[t]}e&&e.forEach((e=>{if(!this._active[e]&&p[e]){const t=(this._eventHandlers[e]||this._handleDefault).bind(this,e);this._element.addEventListener(p[e],t),this._active[e]=t}})),this._gamepadSource.hasEventListeners=e&&e.has("gamepad")}}]),e}();d.test={disableSubpixelCoordinates:!1};const p={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"};e.BrowserEventSource=d,Object.defineProperty(e,"__esModule",{value:!0})}));
