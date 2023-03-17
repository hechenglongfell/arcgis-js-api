/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Logger","../../core/maybe","../../core/Queue","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../3d/support/PropertiesPool","./keys","./handlers/LatestPointer","./handlers/MultiTouch"],(function(e,t,n,r,i,o,s,a,l,p,u,c,d,h,_){"use strict";e.InputManager=function(e){function n(n){var r;return(r=e.call(this,n)||this)._pointerCaptures=new Map,r._nameToGroup={},r._handlers=[],r._handlersPriority=[],r._currentPropagation=null,r._updateDependenciesAfterPropagation=!1,r._sourceEvents=new Set,r._keyModifiers=new Set,r._activeKeyModifiers=new Set,r._stoppedPropagationEventIds=new Set,r.primaryKey=d.primaryKey,r._latestPointerType="mouse",r._propertiesPool=new c.PropertiesPool({latestPointerLocation:P},t._assertThisInitialized(r)),r.latestPointerLocation=null,r.test={timestamp:void 0,hasCurrentPropagation:()=>!!r._currentPropagation},r}t._inheritsLoose(n,e);var r=n.prototype;return r.initialize=function(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()},r.destroy=function(){const e=Object.keys(this._nameToGroup);for(const t of e)this.uninstallHandlers(t);this.eventSource.destroy(),this._currentPropagation=null,this._propertiesPool.destroy()},r.installHandlers=function(e,t,n=y.INTERNAL){if(this._nameToGroup[e])return void i.getLogger(this.declaredClass).error("There is already an InputHandler group registered under the name `"+e+"`");if(0===t.length)return void i.getLogger(this.declaredClass).error("Can't register a group of zero handlers");const r={name:e,handlers:t.map((e=>({handler:e,active:!0,removed:!1,priorityIndex:0,groupPriority:n,eventCallback:null,uninstallCallback:null})))};this._nameToGroup[e]=r;for(let i=r.handlers.length-1;i>=0;i--){const e=r.handlers[i];this._handlers.push(e),e.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(t,n,r,i,o)=>{this._emitInputEvent(e.priorityIndex+1,t,n,r,o,i)},setPointerCapture:(t,n)=>{this._setPointerCapture(r,e,t,n)},setEventCallback:t=>{e.eventCallback=t},setUninstallCallback:t=>{e.uninstallCallback=t},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()},r.uninstallHandlers=function(e){const t=this._nameToGroup[e];t?(t.handlers.forEach((e=>{e.removed=!0,e.uninstallCallback?.()})),delete this._nameToGroup[e],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):i.getLogger(this.declaredClass).error("There is no InputHandler group registered under the name `"+e+"`")},r.hasHandlers=function(e){return void 0!==this._nameToGroup[e]},r.updateDependencies=function(){if(this._currentPropagation)return void(this._updateDependenciesAfterPropagation=!0);this._updateDependenciesAfterPropagation=!1;const e=new Set,t=new Set;this._handlersPriority=[];for(let n=this._handlers.length-1;n>=0;n--){const e=this._handlers[n];e.priorityIndex=n,this._handlersPriority.push(e)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(let n=this._handlersPriority.length-1;n>=0;n--){const r=this._handlersPriority[n];r.priorityIndex=n;let i=r.handler.hasSideEffects;if(!i)for(const t of r.handler.outgoingEventTypes)if(e.has(t)){i=!0;break}if(i)for(const n of r.handler.incomingEventMatches){e.add(n.eventType);for(const e of n.keyModifiers)d.isSystemModifier(e)||t.add(e)}r.active=i}this._sourceEvents=e,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)},r._setLatestPointer=function(e,t,n){this._latestPointerType=e;const r=this._get("latestPointerLocation");if(o.isNone(r)||r.x!==t||r.y!==n){const e=this._propertiesPool.get("latestPointerLocation");e.x=t,e.y=n,this._set("latestPointerLocation",e)}},r._onEventReceived=function(e,t){if("pointer-capture-lost"===e){const e=t;this._pointerCaptures.delete(e.native.pointerId)}this._updateKeyModifiers(e,t);const n=null!=this.test.timestamp?this.test.timestamp:t.native?t.native.timestamp:void 0,r=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(e,t,n,r)},r._updateKeyModifiers=function(e,t){if(!t)return;let n=!1;const r=()=>{if(!n){const e=new Set;this._activeKeyModifiers.forEach((t=>{e.add(t)})),this._activeKeyModifiers=e,n=!0}},i=(e,t)=>{t&&!this._activeKeyModifiers.has(e)?(r(),this._activeKeyModifiers.add(e)):!t&&this._activeKeyModifiers.has(e)&&(r(),this._activeKeyModifiers.delete(e))};if("key-down"===e||"key-up"===e){const n=t.key;this._keyModifiers.has(n)&&i(n,"key-down"===e)}const o=t.native;i("Alt",!(!o||!o.altKey)),i("Ctrl",!(!o||!o.ctrlKey)),i("Shift",!(!o||!o.shiftKey)),i("Meta",!(!o||!o.metaKey)),i("Primary",this._activeKeyModifiers.has(this.primaryKey))},r._installRecognizers=function(){this._latestPointerHandler=new h.LatestPointer(((e,t,n)=>this._setLatestPointer(e,t,n))),this._multiTouchHandler=new _.MultiTouch,this.installHandlers("input-manager-logic",[this._latestPointerHandler,this._multiTouchHandler],y.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,y.INTERNAL)},r._setPointerCapture=function(e,t,n,r){const i=e.name+"-"+t.priorityIndex,o=this._pointerCaptures.get(n.pointerId)||new Set;this._pointerCaptures.set(n.pointerId,o),r?(o.add(i),1===o.size&&this.eventSource&&this.eventSource.setPointerCapture(n,!0)):o.has(i)&&(o.delete(i),0===o.size&&(this._pointerCaptures.delete(n.pointerId),this.eventSource&&this.eventSource.setPointerCapture(n,!1)))},r._garbageCollectRemovedHandlers=function(){this._handlers=this._handlers.filter((e=>!e.removed)),this.updateDependencies()},r._emitInputEventFromSource=function(e,t,n,r){this._emitInputEvent(0,e,t,n,r)},r._emitInputEvent=function(e,t,n,r,i,o){const s=void 0!==r?r:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),a=void 0!==i&&i,l={event:new f(t,n,s,o||this._activeKeyModifiers,a),priorityIndex:e};this._currentPropagation?this._currentPropagation.events.push(l):this._doNewPropagation(l)},r._doNewPropagation=function(e){this._currentPropagation={events:new s,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:e.event.timestamp},this._currentPropagation.events.push(e),this._continuePropagation()},r._continuePropagation=function(){const e=o.unwrapOrThrow(this._currentPropagation);for(;e.events.length>0;){const{event:t,priorityIndex:n}=e.events.pop(),r=t.data&&t.data.eventId;if(!(null!=r&&this._stoppedPropagationEventIds.has(r)))for(e.currentHandler=this._handlersPriority[n];e.currentHandler;){if(e.currentHandler.removed)e.needsHandlerGarbageCollect=!0;else{if(e.currentHandler.active&&!t.shouldStopPropagation()&&e.currentHandler.eventCallback?.(t),t.shouldStopPropagation()){null!=r&&this._stoppedPropagationEventIds.add(r);break}if(t.shouldPausePropagation((()=>this._continuePropagation())))return void this._pausePropagation({event:t,priorityIndex:e.currentHandler.priorityIndex+1})}e.currentHandler=this._handlersPriority[e.currentHandler.priorityIndex+1]}}e.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()},r._pausePropagation=function(e){const t=new s;t.push(e);const n=this._currentPropagation;if(n){for(;n.events.length;)t.push(n.events.pop());n.events=t,n.currentHandler=null}},r._compareHandlerPriority=function(e,t){if(e.handler.hasSideEffects!==t.handler.hasSideEffects)return e.handler.hasSideEffects?1:-1;if(e.groupPriority!==t.groupPriority)return e.groupPriority>t.groupPriority?-1:1;for(const n of e.handler.incomingEventMatches)for(const e of t.handler.incomingEventMatches){if(n.eventType!==e.eventType)continue;const t=n.keyModifiers.filter((t=>e.keyModifiers.includes(t)));if(t.length===n.keyModifiers.length!==(t.length===e.keyModifiers.length))return n.keyModifiers.length>e.keyModifiers.length?-1:1}return e.priorityIndex>t.priorityIndex?-1:1},r._sortHandlersPriority=function(e){const t=[];for(const n of e){let e=0;for(;e<t.length&&this._compareHandlerPriority(n,t[e])>=0;)e++;t.splice(e,0,n)}return t},t._createClass(n,[{key:"hasPendingInputs",get:function(){return this._handlers.some((e=>e.handler.hasPendingInputs))}},{key:"latestPointerType",get:function(){return this._latestPointerType}},{key:"multiTouchActive",get:function(){return this._multiTouchHandler.multiTouchActive}},{key:"debug",get:function(){const e=e=>{const t=this._setPointerCapture;this._setPointerCapture=()=>{},e(),this._setPointerCapture=t};return{injectEvent:(t,n)=>{e((()=>{this._onEventReceived(t,n)}))},disablePointerCapture:e}}}]),n}(r),n.__decorate([a.property({readOnly:!0})],e.InputManager.prototype,"hasPendingInputs",null),n.__decorate([a.property({constructOnly:!0})],e.InputManager.prototype,"eventSource",void 0),n.__decorate([a.property({constructOnly:!0})],e.InputManager.prototype,"recognizers",void 0),n.__decorate([a.property()],e.InputManager.prototype,"_latestPointerType",void 0),n.__decorate([a.property()],e.InputManager.prototype,"latestPointerType",null),n.__decorate([a.property()],e.InputManager.prototype,"multiTouchActive",null),n.__decorate([a.property({readOnly:!0})],e.InputManager.prototype,"latestPointerLocation",void 0),e.InputManager=n.__decorate([u.subclass("esri.views.input.InputManager")],e.InputManager);let f=function(){function e(e,t,n,r,i){this.type=e,this.data=t,this.timestamp=n,this.modifiers=r,this.cancelable=i,this._propagationState=g.NONE,this._resumeCallback=null}var t=e.prototype;return t.stopPropagation=function(){this._propagationState|=g.STOPPED},t.shouldStopPropagation=function(){return 0!=(this._propagationState&g.STOPPED)},t.async=function(e){this._propagationState|=g.PAUSED;const t=(e,t)=>{this._propagationState&=~g.PAUSED;const n=this._resumeCallback;if(this._resumeCallback=null,n&&n(),t)throw e;return e};return("function"==typeof e?e():e).then((e=>t(e,!1)),(e=>t(e,!0)))},t.shouldPausePropagation=function(e){return!!(this._propagationState&g.PAUSED)&&(this._resumeCallback=e,!0)},t.preventDefault=function(){this.data.native.preventDefault()},e}();var g;!function(e){e[e.NONE=0]="NONE",e[e.STOPPED=1]="STOPPED",e[e.PAUSED=2]="PAUSED"}(g||(g={}));const y={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3};const P=function(){};e.ViewEventPriorities=y,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
