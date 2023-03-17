/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/Logger","./EventMatch"],(function(n,t,e,i){"use strict";const s=e.getLogger("esri.views.input.InputHandler");let o=function(){function n(n){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=n}var e=n.prototype;return e.onInstall=function(n){this._manager?s.error("This InputHandler has already been registered with an InputManager"):(n.setEventCallback((n=>this._handleEvent(n))),n.setUninstallCallback((()=>this._onUninstall())),this._manager=n)},e.onUninstall=function(){},e.registerIncoming=function(n,t,e){let s;"function"==typeof t?(e=t,s=[]):s=t||[];const o="string"==typeof n?new i.EventMatch(n,s):n,r=()=>{this._incomingEventTypes=null,this._incomingEventMatches=null},h=n=>{const t=this._incoming[n.match.eventType];if(t){const e=t.indexOf(n);t.splice(e,1),r(),this._manager&&this._manager.updateDependencies()}},c=new a(o,e,{onPause:h,onRemove:h,onResume:n=>{const t=this._incoming[n.match.eventType];t&&!t.includes(n)&&(t.push(n),r(),this._manager&&this._manager.updateDependencies())}});let u=this._incoming[o.eventType];return u||(u=[],this._incoming[o.eventType]=u),u.push(c),r(),this._manager&&this._manager.updateDependencies(),c},e.registerOutgoing=function(n){if(this._outgoing[n])throw new Error("There is already a callback registered for this outgoing InputEvent: "+n);const t=new r(n,{onEmit:(n,t,e,i)=>{this._manager?.emit(n.eventType,t,e,i)},onRemove:n=>{delete this._outgoing[n.eventType],this._manager?.updateDependencies()}});return this._outgoing[n]=t,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),t},e.startCapturingPointer=function(n){this._manager?.setPointerCapture(n,!0)},e.stopCapturingPointer=function(n){this._manager?.setPointerCapture(n,!1)},e.refreshHasPendingInputs=function(){this._manager?.refreshHasPendingInputs()},e._onUninstall=function(){this._manager?(this.onUninstall(),this._manager=null):s.error("This InputHandler is not registered with an InputManager")},e._handleEvent=function(n){const t=this._incoming[n.type];if(t)for(const e of t)if(e.match.matches(n)&&(e.callback?.(n),n.shouldStopPropagation()))break},t._createClass(n,[{key:"incomingEventMatches",get:function(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const n in this._incoming){const t=this._incoming[n];for(const n of t)this._incomingEventMatches.push(n.match)}}return this._incomingEventMatches}},{key:"incomingEventTypes",get:function(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map((n=>n.eventType))),this._incomingEventTypes}},{key:"outgoingEventTypes",get:function(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}},{key:"hasSideEffects",get:function(){return this._hasSideEffects}},{key:"hasPendingInputs",get:function(){return!1}}]),n}(),a=function(){function n(n,t,e){this.match=n,this._callback=t,this._handler=e}var e=n.prototype;return e.pause=function(){this._handler.onPause(this)},e.resume=function(){this._handler.onResume(this)},e.remove=function(){this._handler.onRemove(this)},t._createClass(n,[{key:"callback",get:function(){return this._callback}}]),n}(),r=function(){function n(n,t){this.eventType=n,this._removed=!1,this._handler=t}var t=n.prototype;return t.emit=function(n,t,e){this._removed||this._handler.onEmit(this,n,t,e)},t.remove=function(){this._removed=!0,this._handler.onRemove(this)},n}();n.InputHandler=o,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
