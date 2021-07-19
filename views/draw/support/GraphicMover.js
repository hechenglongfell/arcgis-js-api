/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../symbols","../../../core/Evented","../../../core/Handles","../../../core/lang","../../../core/maybe","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/ensureType","../../../core/has","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../layers/GraphicsLayer","./drawUtils","./layerUtils","./input/GraphicMoverEvents","../../input/InputManager","../../interactive/GraphicManipulator","../../support/screenUtils","../../../symbols/SimpleMarkerSymbol","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleFillSymbol"],(function(i,t,e,r,o,s,a,n,c,h,l,p,d,v,u,_,y,g,G,f,m,w,b){"use strict";let k=function(t){function e(i){var e;return(e=t.call(this,i)||this)._activeGraphic=null,e._indicators=[],e._dragEvent=null,e._handles=new o,e._hoverGraphic=null,e._initialDragGeometry=null,e._viewHandles=new o,e._manipulators=[],e.type="graphic-mover",e.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},e.enableMoveAllGraphics=!1,e.graphics=[],e.indicatorsEnabled=!0,e.layer=new v({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),e.view=null,e}i._inheritsLoose(e,t);var r=e.prototype;return r.initialize=function(){_.addUniqueLayer(this.view,this.layer),this.refresh(),this._handles.add([n.watch(this,["graphics","graphics.length"],(()=>this.refresh())),n.whenOnce(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(i=>this._clickHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("double-click",(i=>this._doubleClickHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("pointer-down",(i=>this._pointerDownHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("pointer-move",(i=>this._pointerMoveHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("pointer-up",(i=>this._pointerUpHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("drag",(i=>this._dragHandler(i)),g.ViewEventPriorities.TOOL),this.view.on("key-down",(i=>this._keyDownHandler(i)),g.ViewEventPriorities.TOOL)])}))])},r.destroy=function(){var i;this._removeIndicators(),null==(i=this.view.map)||i.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((i=>i.destroy())),this._manipulators=null,this._handles=a.destroyMaybe(this._handles),this._viewHandles=a.destroyMaybe(this._viewHandles)},r.refresh=function(){this._setUpIndicators(),this._setUpManipulators()},r.reset=function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null},r.updateGeometry=function(i,t){const e=this.graphics[i];e&&(e.set("geometry",t),this._setUpIndicators())},r._clickHandler=function(i){const t=this._findTargetGraphic(f.createScreenPointFromEvent(i));if(t){const e=new y.GraphicClickEvent(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}},r._doubleClickHandler=function(i){const t=this._findTargetGraphic(f.createScreenPointFromEvent(i));if(t){const e=new y.GraphicDoubleClickEvent(t,this.graphics.indexOf(t),i.x,i.y,i);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}},r._pointerDownHandler=function(i){const t=this._findTargetGraphic(f.createScreenPointFromEvent(i));if(t){this._activeGraphic=t;const{x:e,y:r}=i,o=new y.GraphicPointerDownEvent(t,this.graphics.indexOf(t),e,r,i);this.emit("graphic-pointer-down",o),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(o)}else this._activeGraphic=null},r._pointerUpHandler=function(i){if(this._activeGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._activeGraphic),o=new y.GraphicPointerUpEvent(this._activeGraphic,r,t,e,i);this.emit("graphic-pointer-up",o),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(o)}},r._pointerMoveHandler=function(i){if(this._dragEvent)return;const t=this._findTargetGraphic(f.createScreenPointFromEvent(i));if(t){const{x:e,y:r}=i;if(this._hoverGraphic){if(this._hoverGraphic===t)return;const o=this.graphics.indexOf(this._hoverGraphic),s=new y.GraphicPointerOutEvent(this.graphics[o],o,e,r,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",s),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(s)}const o=this.graphics.indexOf(t),s=new y.GraphicPointerOverEvent(t,o,e,r,i);return this._hoverGraphic=t,this.emit("graphic-pointer-over",s),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(s))}if(this._hoverGraphic){const{x:t,y:e}=i,r=this.graphics.indexOf(this._hoverGraphic),o=new y.GraphicPointerOutEvent(this.graphics[r],r,t,e,i);this._hoverGraphic=null,this.emit("graphic-pointer-out",o),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(o)}},r._dragHandler=function(i){if("start"!==i.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===i.action&&this._removeIndicators(),i.stopPropagation();const{action:t,x:e,y:r}=i,o=this.graphics.indexOf(this._activeGraphic),a=this._activeGraphic.geometry,n=this._dragEvent?e-this._dragEvent.x:0,c=this._dragEvent?r-this._dragEvent.y:0,h=e-i.origin.x,l=r-i.origin.y,p=u.cloneMove(a,n,c,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((i=>{i!==this._activeGraphic&&(i.geometry=u.cloneMove(i.geometry,n,c,this.view))})),this._dragEvent=i,"start"===t){this._initialDragGeometry=s.clone(a);const t=new y.GraphicMoveStartEvent(this._activeGraphic,this.graphics,o,e,r,n,c,h,l,i);this.emit("graphic-move-start",t),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(t),t.defaultPrevented&&this._activeGraphic.set("geometry",a)}else if("update"===t){const t=new y.GraphicMoveEvent(this._activeGraphic,this.graphics,o,e,r,n,c,h,l,i);this.emit("graphic-move",t),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(t),t.defaultPrevented&&(this._activeGraphic.geometry=a)}else{const t=new y.GraphicMoveStopEvent(this._activeGraphic,this.graphics,o,e,r,n,c,h,l,i);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",t),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(t),t.defaultPrevented&&(this.graphics[o].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}},r._keyDownHandler=function(i){"a"!==i.key&&"d"!==i.key&&"n"!==i.key||"moving"!==this.state||i.stopPropagation()},r._findTargetGraphic=function(i){let t=null,e=Number.MAX_VALUE;return this._manipulators.forEach((r=>{const o=r.intersectionDistance(i);a.isSome(o)&&o<e&&(e=o,t=r.graphic)})),t},r._setUpManipulators=function(){const{graphics:i,view:t}=this;this._manipulators.forEach((i=>i.destroy())),this._manipulators=null!=i&&i.length?i.map((i=>new G.GraphicManipulator({graphic:i,view:t}))):[]},r._setUpIndicators=function(){var i;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(i=this.graphics)?void 0:i.map((i=>{const t=i.clone();return t.symbol=this._getSymbolForIndicator(i),t})))||[],this.layer.addMany(this._indicators))},r._removeIndicators=function(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((i=>i.destroy())),this._indicators=[])},r._getSymbolForIndicator=function(i){const t=12;if(a.isNone(i.symbol))return null;switch(i.symbol.type){case"cim":return new m({style:"circle",size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:t,yoffset:e,height:r,width:o}=i.symbol,s=r===o?o:Math.max(r,o);return new m({xoffset:t,yoffset:e,size:s,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:t,yoffset:e,size:r,style:o}=i.symbol;return new m({xoffset:t,yoffset:e,style:"circle"===o?"circle":"square",size:r+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new b({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new w({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:e,yoffset:r}=i.symbol;return new m({xoffset:e,yoffset:r,size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}},i._createClass(e,[{key:"state",get:function(){const i=!!this.get("view.ready"),t=!!this.get("graphics.length"),e=this._activeGraphic;return i&&t?e?"moving":"active":i?"ready":"disabled"}}]),e}(r.EventedAccessor);return t.__decorate([c.property()],k.prototype,"_activeGraphic",void 0),t.__decorate([c.property({readOnly:!0})],k.prototype,"type",void 0),t.__decorate([c.property()],k.prototype,"callbacks",void 0),t.__decorate([c.property()],k.prototype,"enableMoveAllGraphics",void 0),t.__decorate([c.property()],k.prototype,"graphics",void 0),t.__decorate([c.property()],k.prototype,"indicatorsEnabled",void 0),t.__decorate([c.property()],k.prototype,"layer",void 0),t.__decorate([c.property({readOnly:!0})],k.prototype,"state",null),t.__decorate([c.property()],k.prototype,"view",void 0),k=t.__decorate([d.subclass("esri.views.draw.support.GraphicMover")],k),k}));
