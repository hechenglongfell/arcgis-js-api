/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/HandleOwner","../../../../../core/handleUtils","../../../../../core/maybe","../../../../../core/quantityUtils","../../../../../core/reactiveUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/arrayUtils","../../../../../core/accessorSupport/decorators/subclass","../../../../../layers/graphics/dehydratedFeatures","../../../../../support/elevationInfoUtils","../../manipulatorUtils","../../SnappingVisualizer3D","../isSupportedGraphicUtils","../manipulatorUtils","../visualElementUtils","../manipulations/config","../manipulations/MoveManipulation","../manipulations/moveUtils","../manipulations/MoveXYGraphicManipulation","./isSupportedGraphic","../../visualElements/OutlineVisualElement","../../../layers/graphics/GraphicState","../../../../interactive/dragEventPipeline","../../../../interactive/InteractiveToolBase","../../../../interactive/editGeometry/EditGeometryOperations","../../../../interactive/sketch/SketchTooltipOptions","../../../../interactive/snapping/SnappingContext","../../../../interactive/snapping/SnappingDragPipelineStep","../../../../interactive/tooltip/Tooltip","../../../../interactive/tooltip/TranslateTooltipInfos","../../../../support/automaticLengthMeasurementUtils","../../../../support/euclideanLengthMeasurementUtils"],(function(t,e,i,n,a,o,s,p,r,l,c,h,u,d,g,v,M,m,f,y,_,w,T,S,E,G,b,x,O,D,P,z,A,I,X,k,Y,U){"use strict";let C=function(t){this.allGraphics=t,this.type="graphic-move-start"},H=function(t,e,i){this.dx=t,this.dy=e,this.allGraphics=i,this.type="graphic-move"},R=function(t){this.allGraphics=t,this.type="graphic-move-stop"};t.GraphicMoveTool=function(t){function i(e){var i;return(i=t.call(this,e)||this).graphics=new n,i.enableZ=!0,i.tooltipOptions=new z,i.type="move-3d",i._tooltip=null,i}e._inheritsLoose(i,t);var a=i.prototype;return a.initialize=function(){const{graphics:t,view:e}=this;this.addHandles([t.on("change",(()=>this._refreshManipulators())),l.watch((()=>this.tooltipOptions.enabled),(t=>{this._tooltip=t?new X.Tooltip({view:e}):p.destroyMaybe(this._tooltip)}),l.syncAndInitial)]),this._refreshManipulators(),this.finishToolCreation()},a.destroy=function(){this._tooltip=p.destroyMaybe(this._tooltip),this._moveManipulation=p.destroyMaybe(this._moveManipulation),this.graphics.removeAll(),this._set("view",null)},a.reset=function(){},a._refreshManipulators=function(){this.handles.removeAll(),this._moveManipulation?.destroy(),this.manipulators.removeAll();const t=this.graphics.toArray().filter((t=>G.isSupportedGraphic(t)===f.SupportedGraphicResult.SUPPORTED)).map((t=>new V(t)));t.length&&(this._createManipulators(t),this._createVisualElements(t),this.handles.add(t.map((t=>this.view.trackGraphicState(t.state)))),this._updateMoveManipulation(t))},a._createManipulators=function(t){for(const e of t){const i=e.state;e.manipulationXY=new E.MoveXYGraphicManipulation({tool:this,view:this.view,graphicState:i}),e.manipulationXY.forEachManipulator((t=>this.handles.add([t.events.on("immediate-click",(t=>{this.emit("immediate-click",{...t,graphic:i.graphic}),t.stopPropagation()})),t.events.on("grab-changed",(({action:t})=>{const{tooltipOptions:e,_tooltip:i}=this;p.isNone(i)||("start"===t?i.info=new k.TranslateGraphicTooltipInfo({tooltipOptions:e}):i.clear())}))]))),this.handles.add(e.manipulationXY.createDragPipeline(((e,i,n,a)=>this._buildDragEventPipeline(t,T.ManipulationType.XY,e,i,n,a))))}this._createMoveManipulation(t)},a._createMoveManipulation=function(t){const e=new T.MoveManipulation({tool:this,view:this.view,snapToScene:!1,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:!0,radius:1===t.length?T.MoveManipulation.radiusForSymbol(t[0].graphic.symbol):w.DISC_RADIUS});this._moveManipulation=e,e.elevationInfo={mode:"absolute-height",offset:0},e.forEachManipulator((t=>{this.handles.add(t.events.on("immediate-click",(i=>{e.zManipulation.hasManipulator(t)||1!==this.graphics.length||this.emit("immediate-click",{...i,graphic:this.graphics.getItemAt(0)}),i.stopPropagation()})))}));const i=e=>i=>{this.handles.add(i.events.on("focus-changed",(({action:i})=>{const n=this._tooltip;p.isNone(n)||("focus"===i?this._updateMoveTooltip(t,e):n.clear())})))};this._moveManipulation.xyManipulation.forEachManipulator(i(T.ManipulationType.XY)),this._moveManipulation.xyAxisManipulation.forEachManipulator(i(T.ManipulationType.XY_AXIS)),this._moveManipulation.zManipulation.forEachManipulator(i(T.ManipulationType.Z));const n=()=>this._updateMoveManipulation(t);for(const o of t)this.handles.add([o.state.on("changed",n),l.watch((()=>o.state.displaying),n)]);const a=t[t.length-1];this.handles.add(a.state.on("changed",(()=>this._updateMoveManipulationAngle(a)))),this.handles.add(e.createDragPipeline(((e,i,n,a,o)=>this._buildDragEventPipeline(t,e,i,n,a,o)),v.getGraphicEffectiveElevationInfo(a.graphic),p.unwrap(a.graphic.geometry).spatialReference,a.graphic)),this._updateMoveManipulationAngle(a)},a._createVisualElements=function(t){for(const e of t){const i=e.graphic,n=_.createVisualElements({view:this.view,graphic:i,forEachManipulator:t=>{e.manipulationXY?.forEachManipulator(t),this._moveManipulation.forEachManipulator(t)},onManipulatorsChanged:()=>s.makeHandle()});p.isNone(n)||(e.geometryRepresentation=n.visualElement,e.geometryRepresentation instanceof b.OutlineVisualElement&&this.handles.add([e.geometryRepresentation.events.on("attachment-origin-changed",(()=>{e.state.isDraped||this._updateMoveManipulation(t)})),l.watch((()=>e.state.isDraped),(()=>this._updateMoveManipulation(t)))]),this.handles.add(n))}},a._updateMoveManipulationAngle=function(t){this._moveManipulation.angle=S.shapeOrientation(t.graphic.geometry)},a._updateMoveManipulation=function(t){const e=g.makeDehydratedPoint(0,0,0,this.view.spatialReference);let i=0,n=!1;const a=this._moveManipulation;for(const o of t){if(!o.state.displaying)continue;const t=o.state.graphic;this.enableZ&&y.canMoveZ(t)&&(n=!0);const a=o.geometryRepresentation instanceof b.OutlineVisualElement&&!o.state.isDraped?o.geometryRepresentation.attachmentOrigin:M.getGraphicAttachmentOrigin(this.view,t);if(p.isSome(a)){const{x:t,y:n,z:o}=a;e.x+=t,e.y+=n,o&&(e.z??(e.z=0),e.z+=o),i++}}i>0?(e.x/=i,e.y/=i,e.z??(e.z=0),e.z/=i,a.location=e,a.xyManipulation.available=!0,a.xyAxisManipulation.available=!0,a.zManipulation.available=n):a.available=!1},a._buildDragEventPipeline=function(t,e,i,n,a,o){const s=[],p=[];let r=null,l=null;const c=()=>{for(const t of s)t.dragging=!1;s.length=0,p.length=0,r=null,l=null,this._moveManipulation.interactive=!0};if(1===t.length&&e===T.ManipulationType.XY){const e=t[0].graphic;({steps:n,cancel:a}=this._buildSnappingPipelineSteps(e,v.getGraphicEffectiveElevationInfo(e),n,a,o))}return a=a.next((t=>l?.(t))).next((()=>(this.emit("graphic-move-stop",new R(p)),this.destroyed||c(),null))),{steps:n=n.next((e=>{if("start"===e.action){s.length=0,p.length=0;for(const e of t)e.dragging||!e.manipulationXY?.hasManipulator(i)&&e.manipulationXY?.grabbing||(s.push(e),p.push(e.graphic),e.dragging=!0);if(0!==p.length&&(this._moveManipulation.interactive=!1,r=O.dragGraphicMany(p,this.view.state.viewingMode),l=O.resetGraphicMany(p),this.emit("graphic-move-start",new C(p)),this.destroyed))return null}return 0!==p.length?e:null})).next((t=>r?.(t))).next((i=>(this._updateMoveTooltip(t,e,i),i))).next((t=>{switch(t.action){case"start":case"update":if(t.translationX||t.translationY||t.translationZ){const e=this.view.toScreen(t.mapStart),i=this.view.toScreen(t.mapEnd),n=i.x-e.x,a=i.y-e.y;if(this.emit("graphic-move",new H(n,a,p)),this.destroyed)return null}break;case"end":if(this.emit("graphic-move-stop",new R(p)),this.destroyed)return null;c()}return null})),cancel:a}},a._updateMoveTooltip=function(t,e,i){const{tooltipOptions:n,_tooltip:a}=this;if(p.isNone(a))return;a.clear();const o=0===t.length?"absolute-height":t[0].state.isDraped?"on-the-ground":"absolute-height";switch(e){case T.ManipulationType.XY:a.info=new k.TranslateGraphicTooltipInfo({tooltipOptions:n}),this._updateMoveTooltipDistance(a.info,i,((t,e)=>Y.autoHorizontalDistanceByElevationModeBetweenPoints(t,e,o)));break;case T.ManipulationType.XY_AXIS:a.info=new k.TranslateGraphicXYTooltipInfo({tooltipOptions:n}),this._updateMoveTooltipDistance(a.info,i,((t,e)=>{const n=Y.autoHorizontalDistanceByElevationModeBetweenPoints(t,e,o);return r.scale(n,S.axisConstrainedDragSign(i))}));break;case T.ManipulationType.Z:a.info=new k.TranslateGraphicZTooltipInfo({tooltipOptions:n}),this._updateMoveTooltipDistance(a.info,i,U.verticalSignedDistanceBetweenPoints)}},a._updateMoveTooltipDistance=function(t,e,i){if(p.isSome(e)&&"end"!==e.action){const{mapStart:n,mapEnd:a}=e,o=i(n,a);t.distance=p.isSome(o)?o:r.zeroMeters}},a._buildSnappingPipelineSteps=function(t,e,i,n,a){const o=t.geometry;if(p.isNone(o)||"point"!==o.type&&"mesh"!==o.type)return{steps:i,cancel:n};const s=("point"===o.type?o:o.anchor).clone(),r=new A.SnappingContext({elevationInfo:e,pointer:a,editGeometryOperations:P.EditGeometryOperations.fromGeometry(s,this.view.state.viewingMode),visualizer:new m.SnappingVisualizer3D,excludeFeature:t}),l=this.snappingManager,{snappingStep:c,cancelSnapping:h}=I.createSnapDragEventPipelineStep({snappingContext:r,snappingManager:l,updatingHandles:this.updatingHandles});return n=n.next(h),{steps:i=i.next((e=>{s.z=v.getConvertedElevation(this.view,s,v.getGraphicEffectiveElevationInfo(t),{mode:"absolute-height",offset:0});return{...e,snapOrigin:r.coordinateHelper.pointToVector(s)}})).next(...c),cancel:n}},e._createClass(i,[{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"test",get:function(){return{tooltip:this._tooltip}}}]),i}(o.HandleOwnerMixin(a.EventedMixin(D.InteractiveToolBase))),i.__decorate([c.property({constructOnly:!0,nonNullable:!0})],t.GraphicMoveTool.prototype,"view",void 0),i.__decorate([c.property()],t.GraphicMoveTool.prototype,"graphics",void 0),i.__decorate([c.property({constructOnly:!0,nonNullable:!0})],t.GraphicMoveTool.prototype,"enableZ",void 0),i.__decorate([c.property({constructOnly:!0,type:z})],t.GraphicMoveTool.prototype,"tooltipOptions",void 0),i.__decorate([c.property({constructOnly:!0})],t.GraphicMoveTool.prototype,"snappingManager",void 0),i.__decorate([c.property()],t.GraphicMoveTool.prototype,"type",void 0),i.__decorate([c.property()],t.GraphicMoveTool.prototype,"updating",null),t.GraphicMoveTool=i.__decorate([d.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMoveTool")],t.GraphicMoveTool);let V=function(){function t(t){this.geometryRepresentation=null,this.manipulationXY=null,this.dragging=!1,this.state=new x.GraphicState({graphic:t})}return e._createClass(t,[{key:"graphic",get:function(){return this.state.graphic}}]),t}();t.GraphicMoveEvent=H,t.GraphicMoveStartEvent=C,t.GraphicMoveStopEvent=R,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
