/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/accessorSupport/decorators/property","../../../../core/arrayUtils","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","./Deconflictor"],(function(e,t,r,o,c,s,n,i,a){"use strict";const l=2e3;e.LabelDeconflictor=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).visibilityGroup=1,t.iconMarginFactor=0,t._lastDeconfliction=0,t}t._inheritsLoose(r,e);var o=r.prototype;return o.runTask=function(t){if(this.parent.running)return;const r=performance.now();(2===t.state||r-this._lastDeconfliction>l)&&(e.prototype.runTask.call(this,t),0===this.state&&(this._lastDeconfliction=r))},o.enabledChanged=function(e,t){this.modifyGraphics(t,e.labelsEnabled)},o.getGraphicsLayers=function(e){return e.labelGraphics},t._createClass(r,[{key:"viewState",get:function(){return this.parent.viewState}}]),r}(a.Deconflictor),r.__decorate([o.property({constructOnly:!0})],e.LabelDeconflictor.prototype,"parent",void 0),e.LabelDeconflictor=r.__decorate([i.subclass("esri.views.3d.layers.graphics.LabelDeconflictor")],e.LabelDeconflictor),Object.defineProperty(e,"__esModule",{value:!0})}));
