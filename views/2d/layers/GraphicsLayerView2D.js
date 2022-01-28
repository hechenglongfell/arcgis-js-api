/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../Graphic","../../../core/Collection","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","./LayerView2D","./graphics/GraphicContainer","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,i,r,t,s,a,n,c,h,o,p,u,l){"use strict";const g={remove(){},pause(){},resume(){}};let d=function(i){function s(){return i.apply(this,arguments)||this}e._inheritsLoose(s,i);var a=s.prototype;return a.initialize=function(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new p(this.view.featuresTilingScheme)})},a.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},a.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},a.hitTest=function(){var i=e._asyncToGenerator((function*(e){return this.graphicsView?this.graphicsView.hitTest(e):null}));function r(e){return i.apply(this,arguments)}return r}(),a.fetchPopupFeatures=function(){var i=e._asyncToGenerator((function*(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}));function r(e){return i.apply(this,arguments)}return r}(),a.update=function(e){this.graphicsView.processUpdate(e)},a.moveStart=function(){},a.viewChange=function(){this.graphicsView.viewChange()},a.moveEnd=function(){},a.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},a.highlight=function(e){var i;let s;return"number"==typeof e?s=[e]:e instanceof r?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):t.isCollection(e)&&e.length>0&&(s=e.map((e=>e&&e.uid)).toArray()),s=null==(i=s)?void 0:i.filter((e=>null!=e)),s.length?(this.graphicsView.addHighlight(s),{remove:()=>this.graphicsView.removeHighlight(s)}):g},a.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)},s}(o.LayerView2DMixin(l));i.__decorate([s.property()],d.prototype,"graphicsView",void 0),d=i.__decorate([h.subclass("esri.views.2d.layers.GraphicsLayerView2D")],d);return d}));
