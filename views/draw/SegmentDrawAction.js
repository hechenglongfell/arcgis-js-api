/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Handles","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../3d/interactive/editingTools/draw/DrawTool","./DrawAction","./input/DrawEvents","./support/surfaceCoordinateSystems","../input/InputManager","../interactive/keybindings","../interactive/editGeometry/EditGeometry","../interactive/editGeometry/EditGeometryHelper","../support/screenUtils","../../geometry/Point"],(function(e,t,i,s,n,r,o,a,d,h,p,c,_,l,v,g,u,w,m,T,y){"use strict";const P=["freehand","click"];function E(e){return"mouse"!==e.pointerType||0===e.button}e.SegmentDrawAction=function(e){function i(t){var i;return(i=e.call(this,t)||this)._isDragging=!1,i._panEnabled=!1,i._viewHandles=new n,i._activePointerId=null,i._addVertexOnPointerUp=!1,i.viewAlignedCoordinateSystem=null,i.mode="freehand",i}t._inheritsLoose(i,e);var s=i.prototype;return s.initialize=function(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool(this.view)},s.destroy=function(){"2d"===this.view.type?(this._removeViewHandles(),this._viewHandles.destroy()):this._removeDrawTool(),this.emit("destroy")},s.complete=function(){"2d"===this.view.type?this._completeDrawing():this._drawTool.completeCreateOperation()},s.getGeometryZValue=function(){return this.vertices.length>0&&this.vertices[0].length>2?this.vertices[0][2]:this._get("defaultZ")},s._addViewHandles=function(){this._removeViewHandles(),"click"===this.mode?this._viewHandles.add(this._getClickModeViewHandles()):this._viewHandles.add(this._getDragModeViewHandles())},s._getDragModeViewHandles=function(){return[this.view.on("immediate-click",(e=>{if(e.stopPropagation(),e.mapPoint&&!this._panEnabled){const t=this.getCoordsFromScreenPoint(T.createScreenPointFromEvent(e));r.isSome(t)&&(this._vertexAddHandler(e),this._drawCompleteHandler(e))}}),g.ViewEventPriorities.TOOL),this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._panEnabled||(this._resetGeometry(),this._addVertexOnPointerUp=!0,this._cursorScreenPoint=T.createScreenPointFromEvent(e),this._activePointerId=e.pointerId,this._vertexAddHandler(e),this._isDragging=!1,"touch"===e.pointerType&&this._updateCursor(e.native)))}),g.ViewEventPriorities.TOOL),this.view.on("pointer-move",(e=>{this._snappingTask=r.abortMaybe(this._snappingTask),r.isNone(this._activePointerId)&&"touch"!==e.pointerType&&(this._cursorScreenPoint=T.createScreenPointFromEvent(e),this._updateCursor(e.native))}),g.ViewEventPriorities.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._isDragging=!0,this._cursorScreenPoint=T.createScreenPointFromEvent(e),this._updateCursor(e.native))}),g.ViewEventPriorities.TOOL),this.view.on("pointer-up",(e=>{this._shouldHandlePointerEvent(e)&&this._addVertexOnPointerUp&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._activePointerId=null,this._isDragging&&this._vertexAddHandler(e),2===this._committedVertices.length&&this._drawCompleteHandler(e),this._isDragging=!1)}),g.ViewEventPriorities.TOOL),this.view.on("key-down",(e=>{e.key===u.SKETCH_KEYS.complete&&this._cursorScreenPoint?(this._snappingTask=r.abortMaybe(this._snappingTask),this._vertexAddHandler(e),this._drawCompleteHandler(e)):e.key===u.SKETCH_KEYS.pan&&(this._panEnabled=!0)}),g.ViewEventPriorities.TOOL),this.view.on("key-up",(e=>{e.key===u.SKETCH_KEYS.pan&&(this._panEnabled=!1)}),g.ViewEventPriorities.TOOL),this.view.on("drag",(e=>{r.isSome(this._activePointerId)&&e.stopPropagation()}),g.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),g.ViewEventPriorities.TOOL)]},s._getClickModeViewHandles=function(){return[this.view.on("pointer-down",(e=>{this._snappingTask=r.abortMaybe(this._snappingTask),this._cursorScreenPoint=T.createScreenPointFromEvent(e),this._activePointerId=e.pointerId,this._isDragging=!1,"touch"===e.pointerType&&this._updateCursor(e.native)}),g.ViewEventPriorities.TOOL),this.view.on("pointer-move",(e=>{this._snappingTask=r.abortMaybe(this._snappingTask),this._cursorScreenPoint=T.createScreenPointFromEvent(e),r.isNone(this._activePointerId)&&"touch"!==e.pointerType&&this._updateCursor(e.native)}),g.ViewEventPriorities.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._isDragging=!0)}),g.ViewEventPriorities.TOOL),this.view.on("pointer-up",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._activePointerId=null,e.stopPropagation(),this._isDragging||this._vertexAddHandler(e),2!==this.vertices.length||this._isDragging||this._drawCompleteHandler(e),this._isDragging=!1)}),g.ViewEventPriorities.TOOL),this.view.on("key-down",(e=>{e.key===u.SKETCH_KEYS.vertexAdd&&this._cursorScreenPoint&&(this._vertexAddHandler(e),2===this.vertices.length&&this._drawCompleteHandler(e)),e.key===u.SKETCH_KEYS.complete&&this._cursorScreenPoint&&2===this.vertices.length&&(this._vertexAddHandler(e),this._drawCompleteHandler(e))}),g.ViewEventPriorities.TOOL)]},s._removeViewHandles=function(){this._viewHandles.removeAll()},s._addDrawTool=function(e){this._drawTool=new c.DrawTool({view:e,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"segment",mode:this.mode}),this.view.toolViewManager.tools.push(this._drawTool),this.view.activeTool=this._drawTool,this._drawTool.on("vertex-add",(e=>{1===e.vertices.length&&this.emit("vertex-add",new l.VertexAddEvent(this.view,null,e.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("cursor-update",(e=>{1===e.vertices.length&&this.emit("cursor-update",new l.CursorUpdateEvent(this.view,null,e.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("complete",(e=>{this.emit("draw-complete",new l.DrawCompleteEvent(null,this._drawTool.getVertexCoords())),this._removeDrawTool()}))},s._removeDrawTool=function(){r.isSome(this._drawTool)&&(this.view.tools.remove(this._drawTool),this._drawTool.destroy(),this._drawTool=null)},s._addVertex=function(e,t){const i=this._coordinateHelper.fromArray(e);if(this._isDuplicateOfLastVertex(i))return;this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometry.appendVertex(i),1===this._committedVertices.length&&(this.viewAlignedCoordinateSystem=v.createViewAlignedCoordinateSystem(this.view,this._committedVertices[0]));const s=this._committedVertices.length-1,n=new l.VertexAddEvent(this.view,t,s,this.vertices);this.emit("vertex-add",n)},s._updateCursor=function(e){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const t=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);if(r.isSome(t)){this._pushCursorVertex(t.vertex);const i=()=>new l.CursorUpdateEvent(this.view,e,this._activeComponent.vertices.length,this.vertices,r.isSome(this._stagedVertex)?new y(this._stagedVertex):null);this.emit("cursor-update",i()),r.isSome(this._snappingTask)&&this._snappingTask.promise.then((e=>{e.valid&&this.emit("cursor-update",i())}),(()=>{}))}},s._completeDrawing=function(e){if(this._activePointerId=null,this._popCursorVertex(),this._cursorScreenPoint=null,this._isDragging=!1,this._snappingTask=r.abortMaybe(this._snappingTask),r.isSome(this._snappingManager)&&this._snappingManager.doneSnapping(),this.vertices.length<1)return;const t=new l.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()},s._resetGeometry=function(){this._editGeometry.destroy(),this._editGeometry=new m.EditGeometryHelper(new w.EditGeometry(this._coordinateHelper),"polygon"),this._activeComponent=new w.Component(this._editGeometry.editGeometry),this._editGeometry.editGeometry.components.push(this._activeComponent)},s._shouldHandlePointerEvent=function(e){return E(e)&&(r.isNone(this._activePointerId)||this._activePointerId===e.pointerId)},i}(_),i.__decorate([o.property({type:P})],e.SegmentDrawAction.prototype,"mode",void 0),e.SegmentDrawAction=i.__decorate([p.subclass("esri/views/2d/engine/markup/SegmentDrawAction")],e.SegmentDrawAction),Object.defineProperty(e,"__esModule",{value:!0})}));
