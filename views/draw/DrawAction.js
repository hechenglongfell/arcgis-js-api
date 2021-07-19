/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Evented","../../core/maybe","../../core/promiseUtils","../../core/screenUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","../../layers/GraphicsLayer","../../layers/graphics/dehydratedFeatures","../2d/interactive/SnappingVisualizer2D","../interactive/coordinateHelper","../interactive/editGeometry/EditGeometry","../interactive/editGeometry/EditGeometryHelper","../interactive/snapping/SnappingContext"],(function(e,t,n,r,i,o,s,a,p,c,d,l,h,y,u,_,m,g){"use strict";var v;let f=v=function(t){function n(e){var n,r;return(r=t.call(this,e)||this)._hasZ=null,r._cursorScreenPoint=null,r._snappingTask=null,r._stagedVertex=null,r._stagedVertexUnsnapped=null,r._lastVertexUnsnapped=null,r._nativeEventHistory={undoStack:[],redoStack:[]},r.interactiveUndoDisabled=!1,r.history=[],r.redoHistory=[],r.snapToScene=!1,r.view=null,r.elevationInfo=null,r.defaultZ=0,r._coordinateHelper=u.createCoordinateHelper(e.hasZ,!1,e.view.spatialReference,"local"),r._snappingManager=e.snappingManager,r._editGeometry=new m.EditGeometryHelper(new _.EditGeometry(r._coordinateHelper),null!=(n=e.editGeometryType)?n:"polygon"),r._snappingGraphicsLayer=new l({id:v.SNAPPING_GRAPHICS_LAYER_ID,listMode:"hide",internal:!0}),r._snappingContext=new g.SnappingContext({geometry:r._editGeometry,elevationInfo:{mode:"on-the-ground",offset:0},pointer:"mouse",visualizer:new y.SnappingVisualizer2D(r._snappingGraphicsLayer)}),r._activeComponent=new _.Component(r._editGeometry.editGeometry),r._editGeometry.editGeometry.components.push(r._activeComponent),r}e._inheritsLoose(n,t);var s=n.prototype;return s.initialize=function(){"2d"===this.view.type&&this.view.map.layers.add(this._snappingGraphicsLayer)},s.destroy=function(){this._snappingTask=r.abortMaybe(this._snappingTask),this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy(),r.isSome(this._snappingManager)&&this._snappingManager.doneSnapping(),this._editGeometry.destroy()},s.canUndo=function(){return this._editGeometry.editGeometry.canUndo},s.canRedo=function(){return this._editGeometry.editGeometry.canRedo},s.undo=function(){this.canUndo()&&this._editGeometry.undo()},s.redo=function(){this.canRedo()&&this._editGeometry.redo()},s.getCoordsFromScreenPoint=function(e){const t=this.screenToMap(e);return r.isSome(t)?t.hasZ?[t.x,t.y,t.z]:[t.x,t.y]:null},s.getCoordsAndPointFromScreenPoint=function(e){const t=this.screenToMap(e);return r.isSome(t)?t.hasZ?{vertex:[t.x,t.y,t.z],mapPoint:t}:{vertex:[t.x,t.y],mapPoint:t}:null},s._pushCursorVertex=function(t){var n=this;const o=h.makeDehydratedPoint(t[0],t[1],null,this.view.spatialReference);this._stagedVertexUnsnapped=o,r.isNone(this._snappingManager)?this._stagedVertex=o:(this._stagedVertex=this._snappingManager.update(o,this._snappingContext),this._snappingTask=i.createTask(function(){var t=e._asyncToGenerator((function*(e){if(r.isSome(n._snappingManager)){const t=yield n._snappingManager.snap(o,n._snappingContext,e);return t.valid&&(n._stagedVertex=t.apply(),n.notifyChange("vertices")),t}return null}));return function(e){return t.apply(this,arguments)}}()))},s._popCursorVertex=function(){this._stagedVertex=null,this._stagedVertexUnsnapped=null,this.notifyChange("vertices")},s.getGeometryZValue=function(){return this.defaultZ},s.screenToMap=function(e){let t=null;if("3d"===this.view.type)if(this.hasZ){const n=r.unwrapOr(this.elevationInfo,G);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(o.createScreenPointArray(e.x,e.y),n,this.getGeometryZValue())}else{const n=r.unwrapOr(this.elevationInfo,x);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(o.createScreenPointArray(e.x,e.y),n,0),r.isSome(t)&&(t.z=void 0)}else t=this.view.toMap(e),r.isSome(t)&&(t.z=this.hasZ?this.getGeometryZValue():void 0);return t},s._isDuplicateOfLastVertex=function(e){const t=this._editGeometry.editGeometry.components[0].getLastVertex();if(r.isSome(t)&&e[0]===t[0]&&e[1]===t[1])return!0;const{x:n,y:i}=this._coordinateHelper.createDehydratedPoint(e);return!(!r.isSome(this._lastVertexUnsnapped)||n!==this._lastVertexUnsnapped.x||i!==this._lastVertexUnsnapped.y)},s._vertexAddHandler=function(e){const t=r.isSome(this._stagedVertex)?this._coordinateHelper.pointToArray(this._stagedVertex):this.getCoordsFromScreenPoint(this._cursorScreenPoint);r.isSome(t)&&this._addVertex(t,e.native)},s._drawCompleteHandler=function(e){this._completeDrawing(e.native)},e._createClass(n,[{key:"_committedVertices",get:function(){return this._editGeometry.editGeometry.components[0].vertices.map((e=>e.pos))}},{key:"vertices",get:function(){return r.isSome(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}},{key:"hasZ",get:function(){return r.isSome(this._hasZ)?this._hasZ:"3d"===this.view.type},set:function(e){this._hasZ=e,this.notifyChange("hasZ")}}]),n}(n.EventedAccessor);f.SNAPPING_GRAPHICS_LAYER_ID="DrawAction-snapping-graphics-layer",t.__decorate([s.property({readOnly:!0})],f.prototype,"vertices",null),t.__decorate([s.property({type:Boolean,nonNullable:!0})],f.prototype,"interactiveUndoDisabled",void 0),t.__decorate([s.property({readOnly:!0})],f.prototype,"history",void 0),t.__decorate([s.property({readOnly:!0})],f.prototype,"redoHistory",void 0),t.__decorate([s.property()],f.prototype,"snapToScene",void 0),t.__decorate([s.property()],f.prototype,"view",void 0),t.__decorate([s.property()],f.prototype,"elevationInfo",void 0),t.__decorate([s.property({nonNullable:!0})],f.prototype,"defaultZ",void 0),t.__decorate([s.property()],f.prototype,"hasZ",null),f=v=t.__decorate([d.subclass("esri.views.draw.DrawAction")],f);const G={mode:"absolute-height",offset:0},x={mode:"on-the-ground",offset:0};return f}));
