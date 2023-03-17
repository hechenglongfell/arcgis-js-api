/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","../support/GeolocationPositioning"],(function(t,i,r,o,e,s,n){"use strict";const a=15e3;let c=function(i){function r(t){var r;return(r=i.call(this,t)||this)._watchId=null,r._trackStartingTimeoutId=null,r._settingPosition=null,r}t._inheritsLoose(r,i);var o=r.prototype;return o.destroy=function(){this._stopTracking()},o.start=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._startTracking()},o.stop=function(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._stopTracking()},o._stopWatchingPosition=function(){null!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=null)},o._stopTracking=function(){this._clearWaitingTimer(),this._stopWatchingPosition(),this._clear()},o._startTracking=function(){this._stopTracking();const t=navigator.geolocation.watchPosition((i=>{this._watchId=t,this._settingPosition=this._setPosition(i).then((t=>{this._clearWaitingTimer();const{view:i,graphic:r}=this;if(i&&i.graphics.remove(r),r){const t=r.clone();this.graphic=t,i&&i.graphics.push(t)}this.emit("track",{position:t})})).catch((t=>{throw this._emitError(t),this._clearWaitingTimer(),t}))}),this._handleWatchPositionError.bind(this),this.geolocationOptions);this._trackStartingTimeoutId=setTimeout((()=>{this._trackStartingTimeoutId=null}),a)},o._handleWatchPositionError=function(t){this._emitError(t),this._stopTracking()},o._clearWaitingTimer=function(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=null,this._settingPosition=null},o._emitError=function(t){this.emit("track-error",{error:t})},t._createClass(r,[{key:"state",get:function(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||null!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":"ready":"feature-unsupported"}},{key:"tracking",get:function(){return null!==this._watchId}}]),r}(n);i.__decorate([r.property()],c.prototype,"_watchId",void 0),i.__decorate([r.property()],c.prototype,"_trackStartingTimeoutId",void 0),i.__decorate([r.property()],c.prototype,"_settingPosition",void 0),i.__decorate([r.property({readOnly:!0})],c.prototype,"state",null),i.__decorate([r.property({readOnly:!0})],c.prototype,"tracking",null),i.__decorate([r.property()],c.prototype,"start",null),i.__decorate([r.property()],c.prototype,"stop",null),c=i.__decorate([s.subclass("esri.widgets.Track.TrackViewModel")],c);return c}));
