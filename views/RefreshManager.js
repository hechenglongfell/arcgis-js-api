/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Evented","../core/Handles","../core/accessorSupport/decorators/property","../core/has","../core/accessorSupport/ensureType","../core/Logger","../core/accessorSupport/decorators/subclass","./layers/RefreshableLayerView"],(function(e,t,r,i,s,a,n,c,h,l){"use strict";const o=6e3;let u=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._handles=new i,e._currentTick=0,e}e._inheritsLoose(r,t);var s=r.prototype;return s.initialize=function(){this._handles.add([this.view.allLayerViews.on("after-changes",(()=>{this.notifyChange("tickInterval"),this._handles.remove("layerViewsUpdating"),this._handles.add(this._getLayerViewHandles(),"layerViewsUpdating")})),this.watch("tickInterval",(()=>this._restartTicking())),this.watch("view.ready",(()=>this._restartTicking()))]),this._restartTicking()},s.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)},s._restartTicking=function(){this._currentTick=0,this._intervalID&&clearInterval(this._intervalID),this.get("view.ready")&&this.tickInterval&&(this._intervalID=setInterval((()=>{const e=Date.now();this._currentTick+=this.tickInterval,this.view.allLayerViews.forEach((t=>{if(l.isRefreshableLayerView(t)){const r=Math.round(6e4*t.refreshInterval),i=this._currentTick%r==0,s=e-t.refreshTimestamp<.9*o;r&&i&&!s&&(t.refresh(e),this.emit("refresh",{layerView:t,timestamp:e,trigger:"interval"}))}}))}),this.tickInterval))},s._getLayerViewHandles=function(){const e=[],t=()=>this.notifyChange("tickInterval");return this.view.allLayerViews.forEach((r=>{l.isRefreshableLayerView(r)&&r.layer&&e.push(r.watch("refreshInterval",t),r.layer.on("refresh",(()=>{const e=Date.now();r.refresh(e),this.emit("refresh",{layerView:r,timestamp:e,trigger:"layer-refresh"})})))})),e},s._getCommonInterval=function(e){const t=(e,r)=>isNaN(e)||isNaN(r)?0:r<=0?e:t(r,e%r);return e.toArray().reduce(((e,r)=>t(Math.round(6e4*r.refreshInterval),e)),0)},e._createClass(r,[{key:"tickInterval",get:function(){const e=this.view.allLayerViews.filter((e=>l.isRefreshableLayerView(e)));return this._getCommonInterval(e)}}]),r}(r.EventedAccessor);return t.__decorate([s.property()],u.prototype,"view",void 0),t.__decorate([s.property({readOnly:!0})],u.prototype,"tickInterval",null),u=t.__decorate([h.subclass("esri.views.RefreshManager")],u),u}));
