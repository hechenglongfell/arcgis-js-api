/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Color","../../../../geometry","../../../../analysis/dimensionUtils","../../../../analysis/LengthDimension","../../../../core/HandleOwner","../../../../core/Handles","../../../../core/lang","../../../../core/maybe","../../../../core/memoize","../../../../core/promiseUtils","../../../../core/reactiveUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec3f64","../../../../layers/graphics/hydratedFeatures","./lengthDimensionConstraintUtils","./lengthDimensionManipulatorUtils","./lengthDimensionUtils","./settings","../Slice/images/Factory","../../interactive/SnappingVisualizer3D","../../interactive/visualElements/LineVisualElement","../../interactive/visualElements/VerticesVisualElement","../../webgl-engine/lib/Material","../../webgl-engine/materials/ImageMaterial","../../webgl-engine/materials/lineStippleUtils","../../webgl-engine/materials/RibbonLineMaterial","../../../interactive/coordinateHelper","../../../interactive/editGeometry/EditGeometry","../../../interactive/editGeometry/EditGeometryOperations","../../../interactive/snapping/SceneSnappingManagerPool","../../../interactive/snapping/SnappingContext","../../../interactive/snapping/SnappingDragPipelineStep","../../../interactive/snapping/SnappingOperation","../../../interactive/snapping/snappingUtils","../../../../geometry/Point"],(function(t,e,n,i,a,o,s,r,p,l,u,d,c,g,m,h,_,f,M,y,S,v,b,C,D,w,O,T,P,H,L,G,I,R,V,z,k,x,U,E){"use strict";function N(){const{color:t,opacity:e}=b.settings.offsetManipulator;return new L.RibbonLineMaterial({color:[...i.toUnitRGB(t),e],width:1,renderOccluded:T.RenderOccludedFlag.OccludeAndTransparent,writeDepth:!1,hasPolygonOffset:!0})}t.LengthDimensionSubTool=function(t){function n(e){var n;(n=t.call(this,e)||this)._stagedDimension=null,n._computationManipulators=new Map,n._computationHandles=new p,n._getSnappingContext=d.memoize((t=>new z.SnappingContext({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new R.EditGeometryOperations(new I.EditGeometry("point",G.createCoordinateHelper(!0,!1,n.view.spatialReference))),visualizer:new D.SnappingVisualizer3D}))),n._snappingManagerResult=V.acquire(e.view),n.addHandles(n._snappingManagerResult),n._unfocusedOffsetManipulatorMaterial=N(),n._focusedOffsetManipulatorMaterial=N(),n._thinOffsetManipulatorMaterial=N(),n._thinOffsetManipulatorMaterial.setParameters({stipplePattern:H.createStipplePatternSimple(2)}),n._constraintSnappingIndicator=new w.LineVisualElement({view:e.view,attached:!0,width:1,color:i.toUnitRGBA(b.settings.constraint.color),renderOccluded:T.RenderOccludedFlag.OccludeAndTransparent,stipplePattern:H.createStipplePatternSimple(5)});const a=i.toUnitRGBA(b.settings.disabledPointIndicator.color);return a[3]*=b.settings.disabledPointIndicator.opacity,n._stagedStartIndicator=new O.VerticesVisualElement({view:e.view,attached:!1,color:a,size:2*b.settings.disabledPointIndicator.radius,elevationInfo:{mode:"absolute-height",offset:0},spatialReference:e.view.renderCoordsHelper.spatialReference,outlineSize:0,renderOccluded:T.RenderOccludedFlag.OccludeAndTransparent}),n}e._inheritsLoose(n,t);var a=n.prototype;return a.initialize=function(){this._snappingOperation=new x.SnappingOperation({view:this.view}),this._orientationManipulatorTexture=C.getRotateHeadingTexture(this.view.toolViewManager.textures),this._orientationManipulatorMaterial=new P.ImageMaterial({transparent:!0,writeDepth:!1,textureId:this._orientationManipulatorTexture.texture.id,renderOccluded:T.RenderOccludedFlag.Opaque});const{computations:t}=this.analysisViewData;for(const e of t)this._addComputation(e);this.addHandles([t.on("after-add",(t=>this._addComputation(t.item))),t.on("after-remove",(t=>this._removeComputation(t.item)))]),this.addHandles([g.watch((()=>({stagedPoint:this._snappingOperation.stagedPoint,stagedComputation:this._stagedComputation})),(({stagedPoint:t,stagedComputation:e})=>{if(u.isNone(e)||u.isNone(t))return;const n=M.clonePoint(t,new E);this._applyPointUpdate(e,{endPoint:n})}),g.sync),g.watch((()=>({stagedDimension:this._stagedDimension,selectedComputation:this.analysisViewData.selectedComputation,firstGrabbedManipulator:this.firstGrabbedManipulator})),((t,e)=>{const{stagedDimension:n,selectedComputation:i,firstGrabbedManipulator:a}=t;if(n===e?.stagedDimension&&a===e?.firstGrabbedManipulator){for(const o of[i,e?.selectedComputation])if(u.isSome(o)){const e=this._computationManipulators.get(o);this._updateManipulators(o,e,t)}}else for(const[o,s]of this._computationManipulators)this._updateManipulators(o,s,t)}),g.syncAndInitial),g.watch((()=>this.analysis.style.lineSize),(t=>{this._updateManipulatorStyle(t)}),g.initial),g.watch((()=>this.view.state.camera),(()=>{u.isSome(this._stagedComputation)&&this._updateStagedDimensionOffset(this._stagedComputation)})),g.watch((()=>u.applySome(this._stagedComputation,(t=>{const e=t.elevationAlignedStartPoint,n=f.create();return u.isSome(e)&&this.view.renderCoordsHelper.toRenderCoords(e,n)?n:null}))),(t=>{u.isSome(t)?(this._stagedStartIndicator.vertices=[t],this._stagedStartIndicator.attached=!0):this._stagedStartIndicator.attached=!1}))]),this.addHandles(this._constraintHandles),this.addHandles(this._snappingIndicatorHandles),U.setupSnappingToggleHandles(this,(()=>{const t=this._activeComputation,e=this._stagedComputation;if(u.isNone(t)||u.isSome(e)){const t=u.unwrapOr(this.view.inputManager.latestPointerType,"mouse"),e=this._getSnappingContext(t);this.updatingHandles.addPromise(c.ignoreAbortErrors(this._snappingOperation.resnap(this._snappingManager,e)))}if(u.isSome(t)){const{start:e,end:n}=this._computationManipulators.get(t);if(e.grabbing||n.grabbing){const n=e.grabbing?"start":"end",i=this._computeConstraint(t);y.reapplyConstraint(t,n,{constraint:i,view:this.view})}}}))},a.destroy=function(){this._snappingOperation=u.destroyMaybe(this._snappingOperation),this._computationHandles.destroy(),this._constraintSnappingIndicator.destroy(),this._stagedStartIndicator.destroy(),this._orientationManipulatorMaterial.dispose(),this._orientationManipulatorTexture.release()},a.removeStaged=function(){return!!u.isSome(this._stagedDimension)&&(this.analysis.dimensions.remove(this._stagedDimension),this._stagedDimension=null,!0)},a.onDeactivate=function(){this.removeStaged(),this._resetSnappingState()},a.onClick=function(t){const{_stagedDimension:e}=this;if(u.isNone(e)){const e=this._onUnstagedClick(t);return this.analysis.dimensions.add(e),null}return this._onStagedClick(t),e},a.onPointerMove=function({mapPoint:t,pointerType:e}){if("touch"===e)return;const n=this._getSnappingContext(e);this.updatingHandles.addPromise(c.ignoreAbortErrors(this._snappingOperation.snap({point:t},this._snappingManager,n)))},a.onManipulatorSelectionChanged=function(){if(u.isSome(this.analysisViewData.selectedComputation)){this._computationManipulators.get(this.analysisViewData.selectedComputation).offset.selected||(this.analysisViewData.selectedDimension=null)}},a._onUnstagedClick=function({mapPoint:t,pointerType:e}){let n=t;if("mouse"===e){const i=this._getSnappingContext(e);n=this._snappingManager.update({point:t,context:i})}const i=new s({startPoint:M.clonePoint(n,new E),endPoint:null,measureType:o.LengthDimensionMeasureType.Horizontal});return this._stagedDimension=i,this._resetSnappingState(),i},a._onStagedClick=function({mapPoint:t,pointerType:e}){const n=this._stagedComputation;if(u.isNone(n))return;let i=t;if("mouse"===e){const n=this._getSnappingContext(e);i=this._snappingManager.update({point:t,context:n})}const a=M.clonePoint(i,new E);this._applyPointUpdate(n,{endPoint:a}),this._stagedDimension=null,this._resetSnappingState()},a._resetSnappingState=function(){this._snappingManager.doneSnapping(),this._snappingOperation.abort(),this._snappingOperation.stagedPoint=null},a._addComputation=function(t){if(this._computationManipulators.has(t))return;const e=this._setupPointManipulator(t,{isStart:!0}),n=this._setupPointManipulator(t,{isStart:!1}),i=this._setupOffsetManipulator(t),a=this._setupHeadingManipulator(t),s=this._setupRotationManipulator(t),r=this._setupMeasureTypeManipulator(t,o.LengthDimensionMeasureType.Direct),p=this._setupMeasureTypeManipulator(t,o.LengthDimensionMeasureType.Horizontal),l=this._setupMeasureTypeManipulator(t,o.LengthDimensionMeasureType.Vertical),u=new S.LengthDimensionManipulators({start:e,end:n,offset:i,heading:a,rotation:s,direct:r,horizontal:p,vertical:l});this._setupComputationToManipulatorsSync(t,u),this._computationManipulators.set(t,u),this.manipulators.addMany(u.values())},a._removeComputation=function(t){const e=this._computationManipulators.get(t);if(!u.isNone(e)){this._computationHandles.remove(t),this._computationManipulators.delete(t);for(const t of e.values())this.manipulators.remove(t)}},a._setupComputationToManipulatorsSync=function(t,e){this._computationHandles.add([g.watch((()=>t.geometry),(()=>this._updateManipulators(t,e)),{...g.syncAndInitial,equals:l.equals})],t)},a._setupPointManipulator=function(t,e){const{view:n}=this,{dimension:i}=t,a=S.createPointManipulator(n,{metadata:i}),o=S.pointManipulatorHandles(a,{isStart:e.isStart,createSnappingPipelineStep:t=>k.createSnapDragEventPipelineStep({snappingContext:this._getSnappingContext(t),snappingManager:this._snappingManager,updatingHandles:this.updatingHandles}),dimension:i,onUpdate:e=>this._applyPointUpdate(t,e),view:n});return this._computationHandles.add(o,t),a},a._setupOffsetManipulator=function(t){const{view:e}=this,n=S.createOffsetManipulator(e,{lineSizePt:this.analysis.style.lineSize,unfocusedMaterial:this._unfocusedOffsetManipulatorMaterial,focusedMaterial:this._focusedOffsetManipulatorMaterial,metadata:t.dimension}),i=S.offsetManipulatorHandles(n,{computation:t,view:e});return this._computationHandles.add(i,t),n},a._setupHeadingManipulator=function(t){const{view:e}=this,n=S.createOrientationManipulator(e,{lineSizePt:this.analysis.style.lineSize,material:this._orientationManipulatorMaterial,metadata:t.dimension}),i=S.headingManipulatorHandles(n,{computation:t,view:e});return this._computationHandles.add(i,t),n},a._setupRotationManipulator=function(t){const{view:e}=this,n=S.createOrientationManipulator(e,{lineSizePt:this.analysis.style.lineSize,material:this._orientationManipulatorMaterial,metadata:t.dimension}),i=S.rotationManipulatorHandles(n,{computation:t,view:e});return this._computationHandles.add(i,t),n},a._setupMeasureTypeManipulator=function(t,e){const{view:n}=this,i=S.createMeasureTypeManipulator(n,{lineSizePt:this.analysis.style.lineSize,unfocusedMaterial:this._unfocusedOffsetManipulatorMaterial,focusedMaterial:this._focusedOffsetManipulatorMaterial,thinOffsetManipulatorMaterial:this._thinOffsetManipulatorMaterial,metadata:t.dimension}),a=S.measureTypeManipulatorHandles(i,{computation:t,manipulatorMeasureType:e,view:n});return this._computationHandles.add(a,t),i},a._updateManipulators=function(t,e,n={stagedDimension:this._stagedDimension,selectedComputation:this.analysisViewData.selectedComputation,firstGrabbedManipulator:this.firstGrabbedManipulator}){const{stagedDimension:i,selectedComputation:a,firstGrabbedManipulator:s}=n,{start:r,end:p,offset:l,heading:d,rotation:c}=e,g=a===t,m=v.isValidComputation(t),{dimension:h}=t;for(const o of e.values()){const t=m&&u.isNone(i)&&(u.isNone(s)||o===s);o===l?(o.available=t,o.selected=g):o.available=t&&g}if(!m)return;u.isSome(this._computeConstraint(t))?e.forEachMeasureTypeManipulator((t=>t.available=!1)):e.manipulatorForMeasureType(h.measureType).available=!1;for(const u of[d,c])h.measureType===o.LengthDimensionMeasureType.Direct&&0!==h.offset||(u.available=!1);v.arePointsVerticallyAligned(t)?c.available=!1:d.available=!1;const{geometry:_}=t;r.renderLocation=_.directSegment.startRenderSpace,p.renderLocation=_.directSegment.endRenderSpace;const{renderCoordsHelper:f}=this.view;S.updateOffsetManipulatorTransform(l,_,f),d.available&&S.updateHeadingManipulatorTransform(d,t,f),c.available&&S.updateRotationManipulatorTransform(c,t,f),e.forEachMeasureTypeManipulator(((e,n)=>{e.available&&S.updateMeasureTypeManipulatorTransform(e,t,n,f)}))},a._updateManipulatorStyle=function(t){const e=S.unfocusedOffsetWidth(t),n=S.focusedOffsetWidth(t),i={lineSizePt:t,material:this._orientationManipulatorMaterial};for(const{offset:a,heading:o,rotation:s}of this._computationManipulators.values())a.radius=n/2,S.updateOrientationManipulator(o,i),S.updateOrientationManipulator(s,i);this._unfocusedOffsetManipulatorMaterial.setParameters({width:e}),this._focusedOffsetManipulatorMaterial.setParameters({width:n})},a._applyPointUpdate=function(t,e){const{view:n}=this,i=v.computationToGeometryDependencies(t);"startPoint"in e&&(i.elevationAlignedStartPoint=e.startPoint),"endPoint"in e&&(i.elevationAlignedEndPoint=e.endPoint);const a=v.computeGeometryFromDimension(i,n.renderCoordsHelper);if(u.isNone(a))return;const o=this._computeConstraint({...i,geometry:a});y.applyConstraint(t,e,{...i,constraint:o,unconstrainedGeometry:a,view:n}),t===this._stagedComputation&&this._updateStagedDimensionOffset(t)},a._updateStagedDimensionOffset=function(t){if(u.isNone(t.geometry))return;t.geometry.directSegment.eval(.5,A);const e=this.view.state.camera.computeRenderPixelSizeAt(A);t.dimension.offset=b.settings.initialOffsetPx*e},a._computeConstraint=function(t){return y.computeConstraint(y.constraintDependencies(t,this._snappingManager.options),this.view)},e._createClass(n,[{key:"updating",get:function(){return this.updatingHandles.updating||this._snappingManager.updating}},{key:"firstGrabbedManipulator",get:function(){return this.parentTool.firstGrabbedManipulator}},{key:"hasGrabbedManipulators",get:function(){return this.parentTool.hasGrabbedManipulators}},{key:"snappingOptions",get:function(){return this._snappingManager.options}},{key:"_snappingManager",get:function(){return this._snappingManagerResult.snappingManager}},{key:"_activeComputation",get:function(){if(u.isSome(this._stagedComputation))return this._stagedComputation;const{selectedComputation:t}=this.analysisViewData;return this.hasGrabbedManipulators&&u.isSome(t)?t:null}},{key:"_stagedComputation",get:function(){const t=this._stagedDimension,e=this.analysisViewData.computations.at(-1);return u.isNone(t)||u.isNone(e)||e.dimension!==t?null:e}},{key:"_constraintHandles",get:function(){return[g.when((()=>this.analysisViewData.selectedComputation),(t=>{t.previousConstraint=this._computeConstraint(t)}),{...g.syncAndInitial,equals:l.equals}),g.watch((()=>{const t=this._activeComputation;if(u.isNone(t))return null;const{measureType:e,orientation:n}=t.dimension;return{measureType:e,orientation:n,computation:t}}),((t,e)=>{if(u.isSome(t)&&u.isNone(e)){const{measureType:e,orientation:n,computation:i}=t;switch(i.previousConstraint){case y.LengthDimensionConstraint.Horizontal:i.preConstraintProperties={measureType:o.LengthDimensionMeasureType.Horizontal,orientation:0};break;case y.LengthDimensionConstraint.Vertical:i.preConstraintProperties={measureType:o.LengthDimensionMeasureType.Vertical,orientation:0};break;case y.LengthDimensionConstraint.Direct:i.preConstraintProperties={measureType:o.LengthDimensionMeasureType.Direct,orientation:n};break;default:i.preConstraintProperties={measureType:e,orientation:n}}}u.isNone(t)&&u.isSome(e)&&(e.computation.preConstraintProperties=null)}),g.sync)]}},{key:"_snappingIndicatorHandles",get:function(){const t="snapping-indicator-event-handles";return[g.watch((()=>({stagedComputation:this._stagedComputation,activeComputation:this._activeComputation})),(({stagedComputation:e,activeComputation:n})=>{const i=this._constraintSnappingIndicator;if(this.removeHandles(t),u.isNone(n))i.attached=!1;else if(n===e)i.attached=!0;else{const{start:e,end:a}=this._computationManipulators.get(n),o=()=>{i.attached=e.grabbing||a.grabbing};o(),this.addHandles([e.events.on("grab-changed",o),a.events.on("grab-changed",o)],t)}})),g.watch((()=>{const t=this._activeComputation;return u.isSome(t)?{geometry:t.geometry,constraint:t.previousConstraint}:{}}),(({geometry:t,constraint:e})=>{const n=this._constraintSnappingIndicator;u.isSome(t)&&u.isSome(e)&&e!==y.LengthDimensionConstraint.Direct?(n.visible=!0,n.setGeometryFromSegment(t.directSegment)):n.visible=!1}))]}},{key:"testInfo",get:function(){const t=t=>this.analysisViewData.computations.find((e=>e.dimension===t));return{disableManipulatorPartialOcclusion:()=>{this._stagedStartIndicator.renderOccluded=T.RenderOccludedFlag.Occlude,this.manipulators.forEach((({manipulator:t})=>{for(const{geometry:e}of t.renderObjects)e.material.setParameters({renderOccluded:T.RenderOccludedFlag.Occlude})}))},getManipulatorsForDimension:e=>this._computationManipulators.get(t(e)),getComputationForDimension:e=>t(e),getConstraintForDimension:e=>{const n=t(e);return u.isSome(n)?this._computeConstraint(n):null},stagedDimension:this._stagedDimension,stagedStartIndicator:this._stagedStartIndicator,constraintSnappingIndicator:this._constraintSnappingIndicator,snappingManager:this._snappingManager}}}]),n}(r.HandleOwner),n.__decorate([m.property({constructOnly:!0})],t.LengthDimensionSubTool.prototype,"analysis",void 0),n.__decorate([m.property({constructOnly:!0})],t.LengthDimensionSubTool.prototype,"analysisViewData",void 0),n.__decorate([m.property({constructOnly:!0})],t.LengthDimensionSubTool.prototype,"manipulators",void 0),n.__decorate([m.property({constructOnly:!0})],t.LengthDimensionSubTool.prototype,"parentTool",void 0),n.__decorate([m.property({constructOnly:!0,nonNullable:!0})],t.LengthDimensionSubTool.prototype,"view",void 0),n.__decorate([m.property({readOnly:!0})],t.LengthDimensionSubTool.prototype,"updating",null),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"firstGrabbedManipulator",null),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"hasGrabbedManipulators",null),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"snappingOptions",null),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"_stagedDimension",void 0),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"_activeComputation",null),n.__decorate([m.property()],t.LengthDimensionSubTool.prototype,"_stagedComputation",null),t.LengthDimensionSubTool=n.__decorate([_.subclass("esri.views.3d.analysis.Dimension.LengthDimensionSubTool")],t.LengthDimensionSubTool);const A=f.create();Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
