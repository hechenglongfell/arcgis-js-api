/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/arrayUtils","../../core/accessorSupport/decorators/subclass","./ZoomConditions2D","./ZoomConditions3D"],(function(o,t,e,r,n,i,s,c,a,u,p){"use strict";let d=function(t){function e(o){return t.call(this,o)||this}o._inheritsLoose(e,t);var i=e.prototype;return i.destroy=function(){this.view=null},i.zoomIn=function(){if(!this.canZoomIn)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomIn():n.ignoreAbortErrors(o.goTo({zoomFactor:2}))},i.zoomOut=function(){if(!this.canZoomOut)return;const o=this.view;"2d"===o.type?o.mapViewNavigation.zoomOut():n.ignoreAbortErrors(o.goTo({zoomFactor:.5}))},o._createClass(e,[{key:"canZoomIn",get:function(){return r.isSome(this._zoomConditions)&&this._zoomConditions.canZoomIn}},{key:"canZoomOut",get:function(){return r.isSome(this._zoomConditions)&&this._zoomConditions?.canZoomOut}},{key:"state",get:function(){return this.view?.ready?"ready":"disabled"}},{key:"view",set:function(o){o?"2d"===o.type?this._zoomConditions=new u({view:o}):"3d"===o.type&&(this._zoomConditions=new p({view:o})):this._zoomConditions=null,this._set("view",o)}}]),e}(e);t.__decorate([i.property()],d.prototype,"_zoomConditions",void 0),t.__decorate([i.property()],d.prototype,"canZoomIn",null),t.__decorate([i.property()],d.prototype,"canZoomOut",null),t.__decorate([i.property({readOnly:!0})],d.prototype,"state",null),t.__decorate([i.property()],d.prototype,"view",null),d=t.__decorate([a.subclass("esri.widgets.Zoom.ZoomViewModel")],d);return d}));
