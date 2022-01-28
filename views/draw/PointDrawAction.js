/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/deprecate","../../core/Handles","../../core/Logger","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./DrawAction","./DrawTool","./input/DrawEvents","../input/InputManager","../interactive/keybindings","../support/screenUtils","../../geometry/Point"],(function(e,t,i,o,r,s,n,a,p,d,h,c,l,_,u,v,w,g,T,m){"use strict";function P(e){return"mouse"!==e.pointerType||0===e.button}e.PointDrawAction=function(e){function i(t){var i;return(i=e.call(this,t)||this)._addVertexOnPointerUp=!1,i._activePointerId=null,i._viewHandles=new s,i}t._inheritsLoose(i,e);var o=i.prototype;return o.initialize=function(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool(this.view)},o.destroy=function(){"2d"===this.view.type?(this._removeViewHandles(),this._viewHandles.destroy()):this._removeDrawTool(),this.emit("destroy")},o.complete=function(){"2d"===this.view.type?this._cursorScreenPoint&&this._completeDrawing():this._drawTool.completeCreateOperation()},o._addViewHandles=function(){this._removeViewHandles(),this._viewHandles.add([this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=a.abortMaybe(this._snappingTask),this._activePointerId=e.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=T.createScreenPointFromEvent(e),"touch"===e.pointerType&&this._updateCursor(e.native))}),w.ViewEventPriorities.TOOL),this.view.on("pointer-move",(e=>{this._snappingTask=a.abortMaybe(this._snappingTask),this._cursorScreenPoint=T.createScreenPointFromEvent(e),"touch"!==e.pointerType&&this._updateCursor(e.native)}),w.ViewEventPriorities.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=a.abortMaybe(this._snappingTask),this._addVertexOnPointerUp=!1)}),w.ViewEventPriorities.TOOL),this.view.on("pointer-up",(e=>{if(this._shouldHandlePointerEvent(e))if(this._snappingTask=a.abortMaybe(this._snappingTask),this._activePointerId=null,this._addVertexOnPointerUp)e.stopPropagation(),this._vertexAddHandler(e);else{const t="touch"===e.pointerType;this._updateCursor(e.native,t)}}),w.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),w.ViewEventPriorities.TOOL),this.view.on("key-down",(e=>{e.key===g.SKETCH_KEYS.complete&&this._cursorScreenPoint&&(this._snappingTask=a.abortMaybe(this._snappingTask),this._vertexAddHandler(e))}),w.ViewEventPriorities.TOOL)])},o._removeViewHandles=function(){this._viewHandles.removeAll()},o._addDrawTool=function(e){this._drawTool=new u.DrawTool({view:e,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"point",mode:"click"}),this.view.addAndActivateTool(this._drawTool),this._drawTool.on("cursor-update",(e=>{1===e.vertices.length&&this.emit("cursor-update",new v.CursorUpdateEvent(this.view,null,e.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("complete",(e=>{this.emit("draw-complete",new v.DrawCompleteEvent(null,this._drawTool.getVertexCoords())),this._removeDrawTool()}))},o._removeDrawTool=function(){this.view.tools.remove(this._drawTool),this._drawTool=a.destroyMaybe(this._drawTool)},o._addVertex=function(e){const t=this._coordinateHelper.arrayToVector(e);this._isDuplicateOfLastVertex(t)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(t),this.notifyChange("vertices"),this._completeDrawing())},o._updateCursor=function(e,t=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const i=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);if(a.isSome(i)&&!t){this._pushCursorVertex(i.vertex);const t=()=>new v.CursorUpdateEvent(this.view,e,this._activeComponent.vertices.length,this.vertices,a.isSome(this._stagedVertex)?new m(this._stagedVertex):null);this.emit("cursor-update",t()),a.isSome(this._snappingTask)&&this._snappingTask.promise.then((e=>{e.valid&&this.emit("cursor-update",t())}),(()=>{}))}},o._completeDrawing=function(e){this._activePointerId=null,this._popCursorVertex(),this._snappingTask=a.abortMaybe(this._snappingTask),a.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();const t=new v.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()},o._shouldHandlePointerEvent=function(e){return P(e)&&(a.isNone(this._activePointerId)||this._activePointerId===e.pointerId)},t._createClass(i,[{key:"coordinates",get:function(){return r.deprecatedProperty(n.getLogger("esri.views.draw.PointDrawAction"),"coordinates",{replacement:"vertices",version:"4.19"}),this.vertices[0]}}]),i}(_),i.__decorate([p.property({readOnly:!0})],e.PointDrawAction.prototype,"coordinates",null),e.PointDrawAction=i.__decorate([l.subclass("esri.views.draw.PointDrawAction")],e.PointDrawAction),Object.defineProperty(e,"__esModule",{value:!0})}));
