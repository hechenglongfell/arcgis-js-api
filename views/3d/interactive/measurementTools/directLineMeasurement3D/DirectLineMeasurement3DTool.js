/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../geometry","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/memoize","../../../../../core/reactiveUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/support/WatchUpdatingTracking","../../../../../layers/graphics/hydratedFeatures","../../../analysis/support/measurementUtils","../../SnappingVisualizer3D","../../editingTools/dragEventPipeline3D","./DirectLineMeasurement3DView","../../../support/ElevationProvider","../../../../interactive/AnalysisToolBase","../../../../interactive/coordinateHelper","../../../../interactive/dragEventPipeline","../../../../interactive/editGeometry/EditGeometry","../../../../interactive/editGeometry/EditGeometryOperations","../../../../interactive/snapping/SceneSnappingManagerPool","../../../../interactive/snapping/SnappingContext","../../../../interactive/snapping/SnappingDragPipelineStep","../../../../interactive/snapping/snappingUtils","../../../../support/screenUtils","../../../../../geometry/Point"],(function(t,e,n,i,a,r,o,s,l,u,c,p,d,h,g,y,m,_,v,P,f,S,w,M,D,b,k,L,T){"use strict";let E=function(e){function n(t){var n;return(n=e.call(this,t)||this)._handles=new i,n._updatingHandles=new p.WatchUpdatingTracking,n._emulatedDrag=null,n.lineState="initial",n.startPointSurfaceLocation=null,n.endPointSurfaceLocation=null,n.cursorPointSurfaceLocation=null,n.startManipulator=null,n.endManipulator=null,n.cursorManipulator=null,n._getSnappingContext=r.memoize((t=>new D.SnappingContext({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new w.EditGeometryOperations(new S.EditGeometry("point",P.createCoordinateHelper(!0,!1,n.view.spatialReference))),visualizer:new g.SnappingVisualizer3D}))),n}t._inheritsLoose(n,e);var s=n.prototype;return s.initialize=function(){const{view:t,analysis:e,analysisViewData:n,visible:i}=this;this.measurementView=new m.DirectLineMeasurement3DView({toolState:this,view:t,analysis:e,analysisViewData:n,visible:i});const r=M.acquire(t);this._snappingManagerResult=r,this._handles.add(r);const{start:s,end:l,cursor:u}=this.measurementView.createManipulators(),c=(t,e,n)=>f.createManipulatorDragEventPipeline(t,((t,i,r,o)=>{const s=y.hideManipulatorWhileDragging(t),l=this._snappingManager,u=this._getSnappingContext(o),c=this._updatingHandles,{lineState:p}=this;r=r.next(s).next(f.resetProperties(this,[n,e])).next((n=>(t.location=a.unwrap(this.analysis[e]),n)));const h=y.screenToMap3D(this.view),g=t=>{const i=h(t);return i||"drawing"!==this.lineState&&"initial"!==this.lineState||(this[e]=null,this[n]=null),i};let m=i.next(s).next(g);if("touch"!==o||"editing"===p){const{snappingStep:t,cancelSnapping:e}=b.createSnapDragEventPipelineStep({snappingManager:l,snappingContext:u,updatingHandles:c});r=r.next(e),m=m.next(...t)}m.next((t=>"start"!==t.action?t:null)).next((i=>{const a=d.clonePoint(i.mapEnd,new T);this[e]=a,t.location=a,this[n]=this._surfaceLocation(a,i.surfaceType)}))})),p=t=>t.events.on("grab-changed",(()=>{const t=s.grabbing||l.grabbing;this.lineState=t?"editing":"measured"}));this._handles.add([c(s,"startPoint","startPointSurfaceLocation"),c(l,"endPoint","endPointSurfaceLocation"),c(u,"cursorPoint","cursorPointSurfaceLocation"),p(s),p(l)]),this.manipulators.add(s),this.manipulators.add(l),this.manipulators.add(u),this.startManipulator=s,this.endManipulator=l,this.cursorManipulator=u,this._handles.add(o.watch((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),o.syncAndInitial)),k.setupSnappingToggleHandles(this)},s.destroy=function(){this._handles=a.destroyMaybe(this._handles),this._updatingHandles=a.destroyMaybe(this._updatingHandles),this.measurementView=a.destroyMaybe(this.measurementView)},s.onShow=function(){this.measurementView.show(),this._updateManipulatorAvailability()},s.onHide=function(){this.measurementView.hide()},s.onDeactivate=function(){this._emulatedDrag?.cancel(),this._emulatedDrag=null},s.onInputEvent=function(t){switch(t.type){case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t)}this._updateManipulatorAvailability()},s._handlePointerMove=function(t){if(!this.active||this.view.navigating)return;const{pointerType:e}=t;if("mouse"!==e)return;const n=L.createScreenPointFromEvent(t),{lineState:i,cursorManipulator:r,endManipulator:o}=this;let s=!1;a.isNone(this.cursorPoint)&&(this._emulatedDrag?.cancel(),this._emulatedDrag=V(r,e,n),s=!0),"initial"===i&&(this._emulatedDrag?.update(n),s=!0),"drawing"===i&&(o.events.emit("drag",{action:"update",start:n,screenPoint:n}),s=!0),s&&t.stopPropagation()},s._handleImmediateClick=function(t){if(!this.active)return;if(!h.isPrimaryPointerAction(t))return;const e=L.createScreenPointFromEvent(t),{pointerType:n}=t,{cursorManipulator:i,startManipulator:r,endManipulator:o,lineState:s}=this;let l=!1;switch(a.isNone(this.cursorPoint)&&(this._emulatedDrag?.cancel(),this._emulatedDrag=V(i,n,e)),s){case"initial":if(this._emulatedDrag?.update(e),a.isSome(this.cursorPoint)){this._emulatedDrag?.end(e),this._emulatedDrag=null;const{cursorPoint:t}=this;this.startPoint=t,this.startPointSurfaceLocation=this.cursorPointSurfaceLocation,r.location=t,r.interactive=!1,o.interactive=!1,this.lineState="drawing",this._emulatedDrag=V(o,n,e),l=!0}break;case"drawing":this._emulatedDrag?.update(e),a.isSome(this.endPoint)&&(this._emulatedDrag?.end(e),this._emulatedDrag=null,r.interactive=!0,o.interactive=!0,this.lineState="measured",l=!0)}l&&t.stopPropagation()},s._surfaceLocation=function(t,e){return e===y.SurfaceType.GROUND?"on-the-surface":(t.z??0)>=this._getElevation(t)?"above-the-surface":"below-the-surface"},s._updateManipulatorAvailability=function(){this.startManipulator.available=a.isSome(this.analysis.startPoint),this.endManipulator.available=a.isSome(this.analysis.endPoint)},s._getElevation=function(t){return this.view.basemapTerrain.ready?a.unwrapOr(_.getElevationAtPoint(this.view.elevationProvider,t),0):0},t._createClass(n,[{key:"_snappingManager",get:function(){return this._snappingManagerResult.snappingManager}},{key:"state",get:function(){const{analysis:t}=this;if(a.isNone(t.startPoint)&&a.isNone(t.endPoint))return"ready";const{lineState:e}=this;return this.validMeasurement&&"editing"!==e&&"drawing"!==e?"measured":"measuring"}},{key:"cursor",get:function(){const{lineState:t}=this;return"initial"===t||"drawing"===t?"crosshair":null}},{key:"startPoint",get:function(){return this.analysis.startPoint},set:function(t){this.analysis.startPoint=t}},{key:"endPoint",get:function(){return this.analysis.endPoint},set:function(t){this.analysis.endPoint=t}},{key:"cursorPoint",get:function(){return this.measurementView.cursorPoint},set:function(t){this.measurementView.cursorPoint=t}},{key:"snappingOptions",get:function(){return this._snappingManager.options}},{key:"validMeasurement",get:function(){return a.isSome(this.analysis.startPoint)&&a.isSome(this.analysis.endPoint)}},{key:"updating",get:function(){return this._updatingHandles.updating||this._snappingManager.updating}},{key:"test",get:function(){return{snappingManager:this._snappingManager}}}]),n}(v.AnalysisToolBase);function V(t,e,n){return t.events.emit("drag",{action:"start",pointerType:e,start:n,screenPoint:n}),{update:e=>t.events.emit("drag",{action:"update",start:e,screenPoint:e}),end:e=>t.events.emit("drag",{action:"end",start:e,screenPoint:e}),cancel:()=>t.events.emit("drag",{action:"cancel"})}}e.__decorate([s.property({readOnly:!0})],E.prototype,"state",null),e.__decorate([s.property()],E.prototype,"lineState",void 0),e.__decorate([s.property({readOnly:!0})],E.prototype,"cursor",null),e.__decorate([s.property()],E.prototype,"startPoint",null),e.__decorate([s.property()],E.prototype,"endPoint",null),e.__decorate([s.property()],E.prototype,"cursorPoint",null),e.__decorate([s.property({constructOnly:!0})],E.prototype,"analysis",void 0),e.__decorate([s.property({constructOnly:!0})],E.prototype,"analysisViewData",void 0),e.__decorate([s.property()],E.prototype,"measurementView",void 0),e.__decorate([s.property({constructOnly:!0})],E.prototype,"view",void 0),e.__decorate([s.property({readOnly:!0})],E.prototype,"validMeasurement",null),e.__decorate([s.property({value:null})],E.prototype,"startPointSurfaceLocation",void 0),e.__decorate([s.property({value:null})],E.prototype,"endPointSurfaceLocation",void 0),e.__decorate([s.property({value:null})],E.prototype,"cursorPointSurfaceLocation",void 0),e.__decorate([s.property()],E.prototype,"updating",null),E=e.__decorate([c.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],E);return E}));
