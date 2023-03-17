/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/handleUtils","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/quantityUtils","../../../../../core/reactiveUtils","../../../../../core/screenUtils","../../../../../core/unitUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/mat4","../../../../../chunks/vec2","../../../../../chunks/vec2f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingRect","../../../../../chunks/boundedPlane","../../../../../geometry/support/plane","../../../../../geometry/support/ray","../../../../../geometry/support/vectorStacks","../../../../../support/elevationInfoUtils","../../../analysis/Slice/sliceToolUtils","../../../analysis/Slice/images/Factory","../../Manipulator3D","../../manipulatorUtils","../dragEventPipeline3D","../ManipulatorType","../manipulatorUtils","../visualElementUtils","../manipulations/MoveManipulation","../manipulations/MoveXYGraphicManipulation","./PreserveAspectRatio","../../visualElements/OutlineVisualElement","../../../layers/graphics/elevationAlignmentUtils","../../../layers/graphics/ElevationContext","../../../layers/graphics/GraphicState","../../../support/geometryUtils/ray","../../../../interactive/dragEventPipeline","../../../../interactive/InteractiveToolBase","../../../../interactive/editGeometry/EditGeometryOperations","../../../../interactive/editGeometry/interfaces","../../../../interactive/editGeometry/operations/UpdateVertices","../../../../interactive/editGeometry/support/editPlaneUtils","../../../../interactive/sketch/SketchTooltipOptions","../../../../interactive/tooltip/ExtentTooltipInfos","../../../../interactive/tooltip/Tooltip","../../../../interactive/tooltip/TranslateTooltipInfos","../../../../support/automaticLengthMeasurementUtils","../../../../support/euclideanLengthMeasurementUtils"],(function(t,e,i,a,o,n,r,s,l,p,c,h,u,d,_,g,m,y,v,f,S,M,T,E,b,A,x,O,B,R,P,G,D,w,z,I,U,Z,k,C,N,H,L,X,Y,V,F,q,W,j,J,K,Q,$,tt){"use strict";t.ExtentTransformTool=function(t){function i(e){var i;return(i=t.call(this,e)||this).enableZ=!0,i.enableRotation=!0,i.enableScaling=!0,i.tooltipOptions=new j,i._preserveAspectRatio=new Z.PreserveAspectRatio,i.grabbing=!1,i.inputState=null,i.type="transform-3d",i._handles=new o,i._attachmentOrigin=null,i._outlineVisualElement=null,i._mapBounds=T.create(),i._mapBoundsStart=T.create(),i._zmax=0,i._sizeStart=null,i._displayBounds=T.create(),i._displayBoundsStart=T.create(),i._displayBoundsMarginStart=0,i._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],i._moveXYTooltipInfo=null,i._moveZTooltipInfo=null,i._rotateTooltipInfo=null,i._scaleTooltipInfo=null,i._startAngle=0,i._endAngle=0,i._startScale=v.create(),i._endScale=v.create(),i}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){const{view:t,graphic:e,manipulators:i,_handles:a}=this,o=this._graphicState=new H.GraphicState({graphic:e}),r=e.geometry;this._editGeometryOperations=V.EditGeometryOperations.fromGeometry(r,t.state.viewingMode),this._graphicMoveManipulation=new U.MoveXYGraphicManipulation({tool:this,view:t,graphicState:o}),this._moveZManipulator=O.createShiftManipulator(t,O.OffsetMode.CENTER_ON_CALLOUT),this._moveZManipulator.state|=O.IsShiftEdgeOnScreenFlag,a.add([this._createMoveXYGraphicDragPipeline(),p.watch((()=>this.enableZ),(()=>this._updateManipulatorAvailability(this._moveZManipulator,D.ManipulatorType.TRANSLATE_Z))),this._createMoveZDragPipeline()]),i.add(this._moveZManipulator),this._resizeManipulators=this._resizeHandles.map((e=>{const i=O.createResizeManipulator(t,e);return a.add([p.watch((()=>this.enableScaling),(()=>this._updateManipulatorAvailability(i,D.ManipulatorType.SCALE))),i.events.on("grab-changed",(t=>this._onResizeGrab(t))),this._createResizeDragPipeline(i,e)]),i})),i.addMany(this._resizeManipulators),this._rotateManipulatorTexture=B.getRotateHeadingTexture(t.toolViewManager.textures),this._rotateManipulator=P.createRotateManipulator(t,{texture:this._rotateManipulatorTexture.texture}),a.add([p.watch((()=>this.enableRotation),(()=>this._updateManipulatorAvailability(this._rotateManipulator,D.ManipulatorType.ROTATE))),this._rotateManipulator.events.on("grab-changed",(t=>{this._onRotateGrab(t)})),this._createRotateDragPipeline(this._rotateManipulator)]),i.add(this._rotateManipulator),this._calculateMapBounds(),this._updateDisplayBounds();const l=z.createVisualElements({view:t,graphic:e,forEachManipulator:t=>this._forEachManipulator(t),onManipulatorsChanged:()=>n.makeHandle()});s.isSome(l)&&(this._outlineVisualElement=l.visualElement instanceof k.OutlineVisualElement?l.visualElement:null),s.isSome(this._outlineVisualElement)&&a.add(this._outlineVisualElement.events.on("attachment-origin-changed",(()=>this._updateDisplayBounds()))),a.add(l),a.add([o.on("changed",(()=>this._onGeometryChanged())),p.watch((()=>o.displaying),(()=>this._updateAllManipulatorAvailability())),p.watch((()=>o.isDraped),(()=>this._graphicDrapedChanged()),p.initial),t.trackGraphicState(o)]);const c=t.pointsOfInterest;a.add(p.watch((()=>c?.centerOnSurfaceFrequent.location),(()=>this._updateDisplayBounds())));const h=t=>{a.add(t.events.on("grab-changed",(()=>{this.grabbing=t.grabbing,this._updateAllManipulatorAvailability()})))};this._forEachManipulator(h);const u=(t,i)=>{a.add(t.events.on("immediate-click",(t=>{i===D.ManipulatorType.TRANSLATE_XY&&this.emit("immediate-click",{...t,graphic:e}),t.stopPropagation()})))};this._forEachManipulator(u),this._onGeometryChanged(),this._updateAllManipulatorAvailability(),this._initializeTooltip(),this.finishToolCreation()},a.destroy=function(){this._mapBounds=null,this._displayBounds=null,this._rotateManipulatorTexture.release(),this._handles.destroy(),this._graphicMoveManipulation.destroy(),this._editGeometryOperations.destroy(),this._tooltip.destroy(),this._set("view",null),this._set("graphic",null)},a._initializeTooltip=function(){const{_handles:t,view:e}=this,i=this._tooltip=new K.Tooltip({view:e}),a=()=>{i.info=this._getUpdatedTooltipInfo()};t.add([this.on("graphic-translate-start",a),this.on("graphic-translate",a),this.on("graphic-translate-stop",(()=>{this._moveXYTooltipInfo=null,this._moveZTooltipInfo=null,this._tooltip.clear()})),this.on("graphic-rotate-start",(t=>{this._startAngle=t.angle,a()})),this.on("graphic-rotate",(t=>{this._endAngle=t.angle,a()})),this.on("graphic-rotate-stop",(()=>{this._startAngle=0,this._endAngle=0,a()})),this.on("graphic-scale-start",(t=>{y.set(this._startScale,t.xScale,t.yScale),y.set(this._endScale,t.xScale,t.yScale),a()})),this.on("graphic-scale",(t=>{y.set(this._endScale,t.xScale,t.yScale),a()})),this.on("graphic-scale-stop",(()=>{y.set(this._startScale,0,0),y.set(this._endScale,0,0),a()}))]),this._forEachManipulator((e=>{t.add([e.events.on("focus-changed",a),e.events.on("grab-changed",a),e.events.on("drag",(t=>{"cancel"===t.action?this._tooltip.clear():a()}))])}))},a._getUpdatedTooltipInfo=function(){return this.tooltipOptions.enabled?this._graphicMoveManipulation.grabbing||this._graphicMoveManipulation.dragging?this._computeMoveXYTooltipInfo():this._moveZManipulator.focused?this._computeMoveZTooltipInfo():this._rotateManipulator.focused?this._computeRotateTooltipInfo():this._resizeManipulators.some((t=>t.focused))?this._computeScaleTooltipInfo():null:null},a._computeMoveXYTooltipInfo=function(){return this._moveXYTooltipInfo=s.unwrapOr(this._moveXYTooltipInfo,(()=>new Q.TranslateGraphicTooltipInfo({tooltipOptions:this.tooltipOptions})))},a._computeMoveZTooltipInfo=function(){const t=this._moveZTooltipInfo=s.unwrapOr(this._moveZTooltipInfo,(()=>new Q.TranslateGraphicZTooltipInfo({tooltipOptions:this.tooltipOptions}))),e=this._moveUnit;if(this._moveZManipulator.dragging){const e=this._mapBoundsStart.origin,i=this._mapBounds.origin,a=tt.verticalSignedDistance(e,i,this.view.spatialReference);if(s.isNone(a))return null;t.distance=a}else t.distance=l.createLength(0,e);return t},a._computeRotateTooltipInfo=function(){const t=this._rotateTooltipInfo=s.unwrapOr(this._rotateTooltipInfo,(()=>new J.ExtentRotateTooltipInfo({tooltipOptions:this.tooltipOptions})));return t.angle=this._startAngle-this._endAngle,t},a._computeScaleTooltipInfo=function(){const t=this.graphic.geometry;if(s.isNone(t))return null;const e=this._scaleTooltipInfo=s.unwrapOr(this._scaleTooltipInfo,(()=>new J.ExtentScaleTooltipInfo({tooltipOptions:this.tooltipOptions}))),i=W.mapPlaneAutoHorizontalSizeByElevationMode(this._mapBounds,this._zmax,t.spatialReference,this._graphicState.isDraped);return s.isNone(i)?null:(e.xSize=i[0],e.ySize=i[1],s.isSome(this._sizeStart)&&this._resizeManipulators.some((t=>t.dragging))?(e.xScale=i[0].value/this._sizeStart[0].value,e.yScale=i[1].value/this._sizeStart[1].value):(e.xScale=1,e.yScale=1),e)},a._graphicDrapedChanged=function(){this._handles.remove(et),this._updateDisplayBounds(),this._graphicState.isDraped&&this._handles.add(this.view.elevationProvider.on("elevation-change",(t=>{s.isSome(this._attachmentOrigin)&&M.containsXY(t.extent,this._attachmentOrigin.x,this._attachmentOrigin.y)&&this._updateDisplayBounds()})),et)},a._updateAllManipulatorAvailability=function(){this._forEachManipulator(((t,e)=>this._updateManipulatorAvailability(t,e)))},a._updateManipulatorAvailability=function(t,e){const i=this.grabbing&&!t.grabbing;if(t.interactive=!i,t instanceof R.Manipulator3D){const a=this._graphicState.displaying,o=this.enableZ&&w.canMoveZ(this.graphic);switch(e){case D.ManipulatorType.ROTATE:t.available=a&&this.enableRotation;break;case D.ManipulatorType.SCALE:t.available=a&&(this.enableScaling||this.enableRotation||o),t.interactive=!i&&this.enableScaling,t.state=this.enableScaling?O.resizeNormal:O.resizeOutlineOnly;break;case D.ManipulatorType.TRANSLATE_Z:t.available=a&&o;break;default:t.available=a}}},a._forEachManipulator=function(t){this._graphicMoveManipulation.forEachManipulator(t),this._resizeManipulators.forEach((e=>t(e,D.ManipulatorType.SCALE))),t(this._rotateManipulator,D.ManipulatorType.ROTATE),t(this._moveZManipulator,D.ManipulatorType.TRANSLATE_Z)},a.reset=function(){},a._onGeometryChanged=function(){this._updateDisplayBounds()},a._calculateMapBounds=function(){const t=this.graphic.geometry,e=this._editGeometryOperations.data,i=e.components[0].edges[0],a=y.subtract(A.sv2d.get(),i.leftVertex.pos,i.rightVertex.pos);y.normalize(a,a);const o=s.unwrapOr(P.getGraphicAttachmentOrigin(this.view,this.graphic),(()=>t.extent?.center));let n=o?at*this.view.pixelSizeAt(o):0;const r=this.view.spatialReference,l=t.spatialReference;r.equals(l)||(n*=h.getMetersPerUnitForSR(r)/h.getMetersPerUnitForSR(l)),W.calculateOrientedBounds(a,e,n,this._mapBounds),this._updateZMax()},a._updateZMax=function(){const t=this._editGeometryOperations.data;if(!t.geometry.hasZ)return void(this._zmax=0);const e=t.coordinateHelper;let i=Number.NEGATIVE_INFINITY;for(const a of t.components)for(const t of a.vertices){const a=e.getZ(t.pos)??0;i=Math.max(a,i)}this._zmax=i},a._updateDisplayBounds=function(){const{geometry:t}=this.graphic;if(s.isNone(t))return;const{extent:e}=t;if(!e)return;const i=s.isSome(this._outlineVisualElement)&&!this._graphicState.isDraped&&s.isSome(this._outlineVisualElement.attachmentOrigin)?this._outlineVisualElement.attachmentOrigin:P.getGraphicAttachmentOrigin(this.view,this.graphic);this._attachmentOrigin=s.unwrapOr(i,e.center);const a=s.isSome(i)?i.z:C.evaluateElevationAlignmentAtPoint(this._mapBounds.origin,this.view.elevationProvider,N.ElevationContext.fromElevationInfo(x.getGraphicEffectiveElevationInfo(this.graphic)),this.view.renderCoordsHelper),o=T.copy(this._mapBounds);o.origin[2]=a??0,W.mapPlaneToRenderPlane(o,this.view.renderCoordsHelper,t.spatialReference,this._displayBoundsMargin,this._displayBounds),this._updateManipulators()},a._createMoveXYGraphicDragPipeline=function(){return this._graphicMoveManipulation.createDragPipeline(((t,e,i)=>this._applyGraphicMoveSteps(e,i,I.ManipulationType.XY)))},a._createMoveZDragPipeline=function(){const t=this.view,e=this._editGeometryOperations.data.spatialReference;return X.createManipulatorDragEventPipeline(this._moveZManipulator,((i,a,o)=>{const n=S.clone(i.renderLocation),r=a.next(G.screenToZConstrained(t,n,e)).next(X.addScreenDelta());this._applyGraphicMoveSteps(r,o,I.ManipulationType.Z)}))},a._applyGraphicMoveSteps=function(t,e,i){const a=t.next((t=>("start"===t.action&&(this.inputState={type:"move"},this._updateOperationStartProperties(),this.emit("graphic-translate-start",{graphic:this.graphic,dxScreen:t.screenDeltaX,dyScreen:t.screenDeltaY})),t))).next(X.addMapDelta()).next(this._moveDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,dxScreen:t.screenDeltaX,dyScreen:t.screenDeltaY};switch(t.action){case"start":case"update":(t.mapEnd.x-t.mapStart.x||t.mapEnd.y-t.mapStart.y||(t.mapEnd.z??0)-(t.mapStart.z??0))&&this.emit("graphic-translate",e);break;case"end":this.inputState=null,this.emit("graphic-translate-stop",e)}return t})).next((t=>this._updateMoveTooltip(t,i)));return e.next((()=>{s.isSome(this.inputState)&&this.emit("graphic-translate-stop",{graphic:this.graphic,dxScreen:0,dyScreen:0}),this._cancel()})),a},a._updateOperationStartProperties=function(){T.copy(this._displayBounds,this._displayBoundsStart),T.copy(this._mapBounds,this._mapBoundsStart),s.isNone(this.graphic.geometry)?this._sizeStart=null:this._sizeStart=W.mapPlaneAutoHorizontalSizeByElevationMode(this._mapBoundsStart,this._zmax,this.graphic.geometry.spatialReference,this._graphicState.isDraped)},a._moveDragUpdateGeometry=function(){return t=>{if(s.isNone(this.inputState)||"move"!==this.inputState.type)return t;const e=[];for(const o of this._editGeometryOperations.data.components)e.push(...o.vertices);const i="start"===t.action?F.AccumulationBehaviour.NEW_STEP:F.AccumulationBehaviour.ACCUMULATE_STEPS,a=this._editGeometryOperations.moveVertices(e,t.mapDeltaX,t.mapDeltaY,t.mapDeltaZ,i);return W.apply(a,this._mapBounds),this.graphic.geometry=this._editGeometryOperations.data.geometry,t}},a._updateMoveTooltip=function(t,e){if(e===I.ManipulationType.XY||e===I.ManipulationType.XY_AXIS){const e=$.autoHorizontalDistanceByElevationModeBetweenPoints(t.mapStart,t.mapEnd,this._graphicState.isDraped?"on-the-ground":"absolute-height");s.isSome(e)&&s.isSome(this._moveXYTooltipInfo)&&(this._moveXYTooltipInfo.distance=e)}return t},a._onResizeGrab=function({action:t,screenPoint:e}){if("start"!==t||!e)return;const i=this._calculatePickRay(e);E.intersectRay(this._displayBounds.plane,i,A.sv3d.get())&&(this._updateOperationStartProperties(),this._displayBoundsMarginStart=this._displayBoundsMargin,this.inputState={type:"resize"})},a._createResizeDragPipeline=function(t,e){return X.createManipulatorDragEventPipeline(t,((t,i,a)=>{s.isNone(this.inputState)||(i.next((t=>("start"===t.action&&this.emit("graphic-scale-start",{graphic:this.graphic,xScale:1,yScale:1}),t))).next(G.screenToRenderPlane(this.view,this._displayBoundsStart.plane)).next((t=>({...t,handle:e}))).next(this._resizeDragRenderPlaneToFactors()).next(...this._preserveAspectRatio.createDragEventPipelineStep()).next(this._resizeDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,xScale:t.factor1,yScale:t.factor2};switch(t.action){case"start":case"update":this.emit("graphic-scale",e);break;case"end":this.inputState=null,this.emit("graphic-scale-stop",e)}return t})),a.next((()=>{s.isSome(this.inputState)&&this.emit("graphic-scale-stop",{graphic:this.graphic,xScale:1,yScale:1}),this._cancel()})))}))},a._resizeDragRenderPlaneToFactors=function(){return t=>{const e=this._displayBoundsStart,i=t.handle.direction,a=this._displayBoundsMargin,o=this._displayBoundsMarginStart,n=f.copy(A.sv3d.get(),e.origin);f.scaleAndAdd(n,n,e.basis1,-i[0]),f.scaleAndAdd(n,n,e.basis2,-i[1]);const r=f.subtract(A.sv3d.get(),t.renderEnd,n),s=f.subtract(A.sv3d.get(),t.renderStart,n),l=O.isDiagonalResizeHandle(t.handle),p=O.calculateDiagonalResizeHandleScale(e),c=O.calculateDiagonalResizeHandleScale(this._displayBounds)/p,h=(t,e)=>{if(0===t)return 1;let i=f.length(e),n=.5*t*f.dot(e,r)/i;const p=n<0?-1:1;if(l){n+=(i-.5*t*f.dot(e,s)/i)*p*c}const h=i<1.5*o?1:ot;return i=Math.max(i-o,ot),p>0&&(n-=a),p*Math.max(p*(n/i),h)};return{...t,factor1:h(i[0],e.basis1),factor2:h(i[1],e.basis2)}}},a._resizeDragUpdateGeometry=function(){return t=>{const e=f.copy(S.create(),this._mapBoundsStart.origin);f.scaleAndAdd(e,e,this._mapBoundsStart.basis1,-t.handle.direction[0]),f.scaleAndAdd(e,e,this._mapBoundsStart.basis2,-t.handle.direction[1]);const i=y.set(v.create(),this._mapBoundsStart.basis1[0],this._mapBoundsStart.basis1[1]);y.normalize(i,i);const a=[];for(const r of this._editGeometryOperations.data.components)a.push(...r.vertices);const o="start"===t.action?F.AccumulationBehaviour.NEW_STEP:F.AccumulationBehaviour.ACCUMULATE_STEPS,n=this._editGeometryOperations.scaleVertices(a,e,i,t.factor1,t.factor2,o,q.AccumulationType.REPLACE);return T.copy(this._mapBoundsStart,this._mapBounds),W.apply(n,this._mapBounds),this.graphic.geometry=this._editGeometryOperations.data.geometry,t}},a._onRotateGrab=function({action:t,screenPoint:e}){if("start"!==t||!e)return;const i=O.createRotatePlane(this._displayBounds,this.view.renderCoordsHelper,O.RotationAxis.HEADING,E.create()),a=this._calculatePickRay(e);E.intersectRay(i,a,A.sv3d.get())&&(this._updateOperationStartProperties(),this.inputState={type:"rotate",rotatePlane:i})},a._createRotateDragPipeline=function(t){return X.createManipulatorDragEventPipeline(t,((t,e,i)=>{const a=this.inputState;s.isNone(a)||(e.next((t=>("start"===t.action&&this.emit("graphic-rotate-start",{graphic:this.graphic,angle:0}),t))).next(G.screenToRenderPlane(this.view,a.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(a)).next(this._rotateDragUpdateGeometry()).next((t=>{const e={graphic:this.graphic,angle:r.rad2deg(t.rotateAngle)};switch(t.action){case"start":case"update":this.emit("graphic-rotate",e);break;case"end":this.inputState=null,this.emit("graphic-rotate-stop",e)}return t})),i.next((()=>{s.isSome(this.inputState)&&this.emit("graphic-rotate-stop",{graphic:this.graphic,angle:0}),this._cancel()})))}))},a._rotateDragRenderPlaneToRotate=function(t){return e=>{const i=E.normal(t.rotatePlane),a=P.calculateInputRotationTransform(e.renderStart,e.renderEnd,this._displayBounds.origin,i);return{...e,rotateAxis:i,rotateAngle:a}}},a._rotateDragUpdateGeometry=function(){return t=>{const e=f.copy(S.create(),this._mapBoundsStart.origin),i=[];for(const n of this._editGeometryOperations.data.components)i.push(...n.vertices);const a="start"===t.action?F.AccumulationBehaviour.NEW_STEP:F.AccumulationBehaviour.ACCUMULATE_STEPS,o=this._editGeometryOperations.rotateVertices(i,e,t.rotateAngle,a,q.AccumulationType.REPLACE);return T.copy(this._mapBoundsStart,this._mapBounds),W.apply(o,this._mapBounds),this.graphic.geometry=this._editGeometryOperations.data.geometry,t}},a._calculatePickRay=function(t){const e=b.create(),i=c.screenPointObjectToArray(t);return L.fromScreen(this.view.state.camera,i,e),f.normalize(e.direction,e.direction),e},a._updateManipulators=function(){if(!this.visible)return;const t=O.calculateBoundedPlaneTranslateRotate(this._displayBounds,A.sm4d.get());O.updateRotateHeadingHandle(this._rotateManipulator,t,this._displayBounds,this.view.renderCoordsHelper),this._updateZMoveHandle(this._moveZManipulator,t),this._resizeManipulators.forEach(((e,i)=>{O.updateResizeHandle(e,this._resizeHandles[i],t,this._displayBounds)}))},a._updateZMoveHandle=function(t,e){const i=this._displayBounds,a={basis:i.basis1,direction:-1,position:f.subtract(A.sv3d.get(),i.origin,i.basis1),edge:2},o=A.sm4d.get();m.rotateZ(o,e,a.edge*Math.PI/2),o[12]=0,o[13]=0,o[14]=0,t.modelTransform=o,t.renderLocation=a.position},a._cancel=function(){const t=this._editGeometryOperations.lastOperation;s.isNone(t)||(this._editGeometryOperations.undo(),this.graphic.geometry=this._editGeometryOperations.data.geometry,W.unapply(t,this._mapBounds),this._updateDisplayBounds(),this.inputState=null)},a.undo=function(){if(s.isSome(this.inputState))this.view.activeTool=null;else if(this.canUndo){const t=this._editGeometryOperations.undo();this.graphic.geometry=this._editGeometryOperations.data.geometry,W.unapply(s.unwrap(t),this._mapBounds),this._updateDisplayBounds()}},a.redo=function(){if(this.canRedo){const t=this._editGeometryOperations.redo();this.graphic.geometry=this._editGeometryOperations.data.geometry,W.apply(s.unwrap(t),this._mapBounds),this._updateDisplayBounds()}},e._createClass(i,[{key:"preserveAspectRatio",get:function(){return this._preserveAspectRatio.enabled},set:function(t){this._preserveAspectRatio.enabled=t,this._set("preserveAspectRatio",t)}},{key:"_moveUnit",get:function(){return s.unwrapOr(h.lengthUnitFromSpatialReference(this.view.spatialReference),"meters")}},{key:"_displayBoundsMargin",get:function(){const t=this.view.pointsOfInterest,e=t?t.centerOnSurfaceFrequent.location:this._editGeometryOperations.data.geometry.extent?.center;return e?it*this.view.pixelSizeAt(e):0}},{key:"canUndo",get:function(){return this._editGeometryOperations.canUndo}},{key:"canRedo",get:function(){return this._editGeometryOperations.canRedo}},{key:"test",get:function(){return{resizeManipulators:this._resizeManipulators,rotateManipulator:this._rotateManipulator,moveZManipulator:this._moveZManipulator,tooltip:this._tooltip}}}]),i}(a.EventedMixin(Y.InteractiveToolBase)),i.__decorate([u.property({constructOnly:!0,nonNullable:!0})],t.ExtentTransformTool.prototype,"view",void 0),i.__decorate([u.property({constructOnly:!0,nonNullable:!0})],t.ExtentTransformTool.prototype,"graphic",void 0),i.__decorate([u.property({constructOnly:!0,nonNullable:!0})],t.ExtentTransformTool.prototype,"enableZ",void 0),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"enableRotation",void 0),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"enableScaling",void 0),i.__decorate([u.property({constructOnly:!0,type:j})],t.ExtentTransformTool.prototype,"tooltipOptions",void 0),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"preserveAspectRatio",null),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"grabbing",void 0),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"inputState",void 0),i.__decorate([u.property({readOnly:!0})],t.ExtentTransformTool.prototype,"type",void 0),i.__decorate([u.property()],t.ExtentTransformTool.prototype,"_moveUnit",null),t.ExtentTransformTool=i.__decorate([g.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.ExtentTransformTool")],t.ExtentTransformTool);const et="draped-elevation-changes",it=10,at=80,ot=1e-6;t.EPSILON=ot,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
