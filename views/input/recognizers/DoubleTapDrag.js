/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/clock","../../../core/MapUtils","../../../core/screenUtils","../DragEventSeparator","../InputHandler","./SingleAndDoubleClick","./support"],(function(e,t,a,n,o,i,r,u,s){"use strict";let l=function(e){function r(t=u.DefaultParameters.maximumDoubleClickDelay,n=u.DefaultParameters.maximumDoubleClickDistance,r=u.DefaultParameters.maximumDoubleTouchDelay,s=u.DefaultParameters.maximumDoubleTouchDistance,l=a.default){var c;return(c=e.call(this,!1)||this).maximumDoubleClickDelay=t,c.maximumDoubleClickDistance=n,c.maximumDoubleTouchDelay=r,c.maximumDoubleTouchDistance=s,c._clock=l,c._doubleTapDragReady=!1,c._doubleTapDragActive=!1,c._dragStartCenter=o.createScreenPoint(0,0),c._pointerState=new Map,c._doubleTapDrag=c.registerOutgoing("double-tap-drag"),c._dragEventSeparator=new i.DragEventSeparator({start:(e,t)=>c._dragStart(e,t),update:(e,t)=>c._dragUpdate(t),end:(e,t)=>c._dragEnd(t)}),c.registerIncoming("drag",(e=>c._dragEventSeparator.handle(e))),c.registerIncoming("pointer-down",(e=>c._handlePointerDown(e))),c.registerIncoming("pointer-up",(()=>c._handlePointerUp())),c}t._inheritsLoose(r,e);var l=r.prototype;return l.onUninstall=function(){this._pointerState.forEach((e=>{null!=e.doubleTapTimeout&&(e.doubleTapTimeout.remove(),e.doubleTapTimeout=null)}))},l._clearPointerDown=function(e){const t=this._pointerState.get(e);t&&(t.doubleTapTimeout.remove(),t.doubleTapTimeout=null,this._pointerState.delete(e),this.refreshHasPendingInputs())},l._createDoubleTapDragData=function(e,t,a){const{button:n,buttons:o,pointer:i,pointers:r,pointerType:u,timestamp:s}=a;return{action:e,delta:t,button:n,buttons:o,pointer:i,pointers:r,pointerType:u,timestamp:s}},l._dragStart=function(e,t){if(!this._doubleTapDragReady||1!==e)return;this._doubleTapDragReady=!1,this._doubleTapDragActive=!0;const{data:a,modifiers:n}=t,{center:i}=a;this._dragStartCenter=i;const r=this._createDoubleTapDragData("begin",o.createScreenPoint(0,0),a);this._doubleTapDrag.emit(r,void 0,n),t.stopPropagation()},l._dragUpdate=function(e){if(!this._doubleTapDragActive)return;const{data:t,modifiers:a}=e,{center:n}=t,i=o.createScreenPoint(n.x-this._dragStartCenter.x,n.y-this._dragStartCenter.y),r=this._createDoubleTapDragData("update",i,t);this._doubleTapDrag.emit(r,void 0,a),e.stopPropagation()},l._dragEnd=function(e){if(!this._doubleTapDragActive)return;const{data:t,modifiers:a}=e,{center:n}=t,i=o.createScreenPoint(n.x-this._dragStartCenter.x,n.y-this._dragStartCenter.y),r=this._createDoubleTapDragData("end",i,t);this._doubleTapDrag.emit(r,void 0,a),this._doubleTapDragActive=!1,e.stopPropagation()},l._handlePointerDown=function(e){const{data:t}=e,a=this._pointerId(t),n=this._pointerState.get(a),{pointerType:o}=t.native;if(n){const i="touch"===o?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;this._clearPointerDown(a),s.manhattanDistance(n.event.data,t)>i?this._storePointerDown(e):this._doubleTapDragReady=!0}else this._storePointerDown(e)},l._handlePointerUp=function(){this._doubleTapDragReady=!1},l._pointerId=function(e){const{native:t}=e,{pointerId:a,button:n,pointerType:o}=t;return"mouse"===o?`${a}:${n}`:`${o}`},l._storePointerDown=function(e){const{data:t}=e,{pointerType:a}=t.native,n=this._pointerId(t),o="touch"===a?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay,i=this._clock.setTimeout((()=>this._clearPointerDown(n)),o);this._pointerState.set(n,{event:e,doubleTapTimeout:i}),this.refreshHasPendingInputs()},t._createClass(r,[{key:"hasPendingInputs",get:function(){return n.someMap(this._pointerState,(e=>null!=e.doubleTapTimeout))}}]),r}(r.InputHandler);e.DoubleTapDrag=l,Object.defineProperty(e,"__esModule",{value:!0})}));
