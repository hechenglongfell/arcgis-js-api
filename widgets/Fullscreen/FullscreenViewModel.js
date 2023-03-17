/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Logger","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,n,s,o,l,i){"use strict";let c=function(t){function r(r){var n;return(n=t.call(this,r)||this)._vendorInfo=null,n._fullscreenStyle="width: 100%; height: 100%;",n.view=null,n._errorHandler=n._errorHandler.bind(e._assertThisInitialized(n)),n._stateHandler=n._stateHandler.bind(e._assertThisInitialized(n)),n}e._inheritsLoose(r,t);var s=r.prototype;return s.destroy=function(){this._removeFullscreenListeners(),this.view=null},s.enter=function(){this._enterFullscreen()},s.exit=function(){this._exitFullscreen()},s.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()},s._isSupported=function(){this._removeFullscreenListeners();const e=this._getVendorInfo(this.element);return this._addFullscreenListeners(e),this._vendorInfo=e,!!e},s._isActive=function(){return!!this._vendorInfo&&!!document[this._vendorInfo.propertyName]},s._stateHandler=function(){this.notifyChange("state"),"active"===this.state?this._addStyle():this._removeStyle()},s._errorHandler=function(e){n.getLogger(this.declaredClass).error("fullscreen request failed",e)},s._getVendorInfo=function(e){if(e)return e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:e.msRequestFullscreen?{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",errorEventName:"MSFullscreenError",changeEventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}:void 0},s._enterFullscreen=function(){if("feature-unsupported"===this.state)return void n.getLogger(this.declaredClass).warn("The fullscreen API is not supported in this browser.");const{element:e}=this;e&&(this._vendorInfo&&e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))},s._addStyle=function(){const{element:e}=this;e&&e.setAttribute("style",this._fullscreenStyle)},s._removeStyle=function(){const{element:e}=this;e&&e.removeAttribute("style")},s._exitFullscreen=function(){if("feature-unsupported"===this.state)return;const{element:e}=this;e&&(this._vendorInfo&&document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))},s._addFullscreenListeners=function(e){e&&(document.addEventListener(e.changeEventName,this._stateHandler),document.addEventListener(e.errorEventName,this._errorHandler))},s._removeFullscreenListeners=function(){const{_vendorInfo:e}=this;e&&(document.removeEventListener(e.changeEventName,this._stateHandler),document.removeEventListener(e.errorEventName,this._errorHandler))},e._createClass(r,[{key:"element",get:function(){return this.view?.container??null},set:function(e){this._override("element",e)}},{key:"state",get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"}}]),r}(r);t.__decorate([s.property()],c.prototype,"element",null),t.__decorate([s.property({readOnly:!0})],c.prototype,"state",null),t.__decorate([s.property()],c.prototype,"view",void 0),t.__decorate([s.property()],c.prototype,"enter",null),t.__decorate([s.property()],c.prototype,"exit",null),t.__decorate([s.property()],c.prototype,"toggle",null),c=t.__decorate([i.subclass("esri.widgets.Fullscreen.FullscreenViewModel")],c);return c}));
