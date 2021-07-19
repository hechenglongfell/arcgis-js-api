/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/collectionUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./LayerView"],(function(e,i,r,s,t,a,l,n,o,h){"use strict";let y=function(i){function t(e){var s;return(s=i.call(this,e)||this).type="group",s.layerViews=new r,s}e._inheritsLoose(t,i);var a=t.prototype;return a.initialize=function(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},a.isUpdating=function(){return this.layerViews.some((e=>e.updating))},a._hasLayerViewVisibleOverrides=function(){return this.layerViews.some((e=>e._isOverridden("visible")))},a._findLayerViewForLayer=function(e){return e&&this.layerViews.find((i=>i.layer===e))},a._firstVisibleOnLayerOrder=function(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)},a._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e})))},a._layerViewsChangeHandler=function(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let r=null;i&&i.visible&&(r=i),this._enforceVisibility(r)},a._layerViewsAfterChangesHandler=function(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating()},a._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}},a._visibilityModeHandler=function(){this._enforceVisibility()},a._layerViewVisibleHandler=function(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}},a._visibleHandler=function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()},a._updateUpdating=function(){this.notifyChange("updating")},e._createClass(t,[{key:"layerViews",set:function(e){this._set("layerViews",s.referenceSetter(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}}]),t}(h);return i.__decorate([t.property({cast:s.castForReferenceSetter})],y.prototype,"layerViews",null),i.__decorate([t.property()],y.prototype,"view",void 0),i.__decorate([t.property({readOnly:!0})],y.prototype,"updatingProgress",null),y=i.__decorate([o.subclass("esri.views.layers.GroupLayerView")],y),y}));
