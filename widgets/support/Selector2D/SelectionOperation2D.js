/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../symbols","../../../core/Collection","../../../core/Evented","../../../core/Handles","../../../core/accessorSupport/decorators/property","../../../core/arrayUtils","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/subclass","../../../layers/GraphicsLayer","../../Sketch/SketchViewModel","./selectorUtils","../../../symbols/SimpleFillSymbol","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleMarkerSymbol"],(function(e,t,o,n,i,s,l,r,c,a,p,d,y,h,_,u,m){"use strict";let v=function(t){function o({candidates:o,options:i,view:l}){var r;(r=t.call(this)||this)._activeOptions=null,r._dashedFillSymbol=new _({color:[0,0,0,0],outline:{style:"dash",color:[12,207,255],width:2}}),r._dashedLineSymbol=new u({style:"dash",color:[12,207,255],width:2}),r._defaultOptions={createTool:"rectangle",createOptions:null,selectionOptions:{overlaps:!0,intersects:!0,contains:!1}},r._completed=!1,r._handles=new s,r._sketchViewModel=new y,r._sketchGraphicsLayer=new d({listMode:"hide",internal:!0}),r._transparentPointSymbol=new m({color:[0,0,0,0],outline:{style:"none",width:0}}),r.candidates=null,r.geometry=null,r.options=null,r.selection=new n,r.view=null,r.candidates=o,r.options=i,r.view=l;const{_dashedFillSymbol:c,_dashedLineSymbol:a,_sketchViewModel:p,_sketchGraphicsLayer:h,_transparentPointSymbol:v}=e._assertThisInitialized(r);return p.set({layer:h,view:r.view,activePointSymbol:v,activeLineSymbol:a,activeVertexSymbol:v,activeFillSymbol:c,pointSymbol:v,polygonSymbol:c,polylineSymbol:a,vertexSymbol:v}),r._handles.add([p.on("create",(e=>r._onSketchEvent(e))),p.on(["undo","redo"],(e=>r._onSketchEvent(e)))]),r}e._inheritsLoose(o,t);var i=o.prototype;return i.initialize=function(){this._load()},i.destroy=function(){this._handles.destroy(),this._handles=null},i.cancel=function(){this._sketchViewModel.cancel()},i._load=function(){var t=e._asyncToGenerator((function*(){yield this.view.whenReady();const{options:e}=this,{createTool:t,createOptions:o}=this._activeOptions={...this._defaultOptions,...e};this._sketchViewModel.create(t,o)}));function o(){return t.apply(this,arguments)}return o}(),i._onSketchEvent=function(e){const t="create"===e.type?e.graphic:e.graphics[0],o=(null==t?void 0:t.geometry)||null,n="create"===e.type&&"cancel"===e.state,i="create"===e.type&&"complete"===e.state;this._processSelectionGeometry(o,i,n)},i._processSelectionGeometry=function(e,t,o){if(this._set("geometry",e),(t||o)&&(this._completed=!0),o)return void this._onComplete([],!0);const{_activeOptions:n,candidates:i,selection:s,view:l}=this;h.updateSelection({selector:e,candidates:i,currentSelection:s,options:n.selectionOptions,view:l}).then((({added:e,removed:o})=>{t?this._onComplete(this.selection.toArray(),!1):(e.length||o.length)&&this.emit("selection-change",{added:e,removed:o,type:"selection-change"})}))},i._onComplete=function(e,t){this._handles.removeAll(),this.notifyChange("state"),this.emit("complete",{aborted:t,selection:e,type:"complete"})},e._createClass(o,[{key:"state",get:function(){const{_completed:e,_sketchViewModel:{state:t}}=this;return e?"complete":"active"===t?"active":"disabled"}}]),o}(i.EventedAccessor);t.__decorate([l.property()],v.prototype,"_completed",void 0),t.__decorate([l.property()],v.prototype,"candidates",void 0),t.__decorate([l.property({readOnly:!0})],v.prototype,"geometry",void 0),t.__decorate([l.property()],v.prototype,"options",void 0),t.__decorate([l.property({readOnly:!0})],v.prototype,"selection",void 0),t.__decorate([l.property({readOnly:!0})],v.prototype,"state",null),t.__decorate([l.property({value:null})],v.prototype,"view",void 0),v=t.__decorate([p.subclass("esri.widgets.support.Selector2D.SelectionOperation2D")],v);return v}));
