/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../Color","../../../../../core/maybe","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../geometry/support/vectorStacks","../../../../../support/elevationInfoUtils","../../Manipulator3D","../../RenderObject","../dragEventPipeline3D","../ManipulatorType","../settings","./config","./Manipulation","./moveUtils","../snapping/SnapToScene","../../../webgl-engine/lib/basicInterfaces","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/lib/Material","../../../webgl-engine/materials/ColorMaterial","../../../../interactive/dragEventPipeline","../../../../interactive/interfaces"],(function(e,t,a,i,n,r,o,s,l,c,u,p,d,_,h,f,g,M,S,m,v,T,y,w,b){"use strict";let D=function(e){function g(t){var a;return(a=e.call(this)||this)._snapToScene=new S.SnapToScene,a._discMaterial=a._createMaterial(),a._discMaterialTransparent=a._createMaterial(.5),a._scale=1,a._radius=f.DISC_RADIUS,a._view=t.view,a._tool=t.tool,null!=t.snapToScene&&(a.snapToScene=t.snapToScene),null!=t.radius&&(a._radius=t.radius),a._createManipulator(),a.forEachManipulator((e=>a._tool.manipulators.add(e))),a}t._inheritsLoose(g,e);var D=g.prototype;return D.destroy=function(){this.forEachManipulator((e=>{this._tool.manipulators.remove(e),e.destroy()})),this._tool=null,this._view=null,this._manipulator=null},D.forEachManipulator=function(e){e(this._manipulator,_.ManipulatorType.TRANSLATE_XY)},D.createGraphicDragPipeline=function(e,t,a){const n=t.graphic,r=c.getGraphicEffectiveElevationInfo(n),o=i.unwrap(n.geometry).spatialReference;return M.createGraphicMoveDragPipeline(t,a,(t=>this.createDragPipeline(((a,i,n,r,o)=>(({steps:i,cancel:n}=e(a,i,n,r,o)),t(a,i,n))),r,o,n)),this._view.state.viewingMode)},D.createDragPipeline=function(e,t,a,i){const n=this._view;return w.createManipulatorDragEventPipeline(this._manipulator,((r,o,s,l,c)=>{const u=o.next(w.dragAtLocation(n,r.elevationAlignedLocation)).next(d.screenToMapXYAtLocation(n,r.elevationAlignedLocation,t,a,i)).next(...this._snapToScene.createDragEventPipelineStep(n,t)).next((e=>({...e,manipulatorType:_.ManipulatorType.TRANSLATE_XY}))).next(w.addScreenDelta());e(r,u,s,l,c)}))},D._updateManipulatorTransform=function(){const e=n.fromScaling(l.sm4d.get(),o.set(l.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=e},D._createManipulator=function(){const e=this._view;this._manipulator=new u.Manipulator3D({view:e,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:s.fromValues(0,0,1)},worldOriented:!0}),this._updateManipulator()},D._updateManipulator=function(){const e=v.createCylinderGeometry(this._discMaterial,f.DISC_HEIGHT,1,f.GEOMETRY_SEGMENTS,s.fromValues(0,0,1),s.fromValues(0,0,0));e.transformation=n.fromScaling(r.create(),s.fromValues(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new p.RenderObject(e,b.ManipulatorStateFlags.Focused),new p.RenderObject(e.instantiate({material:this._discMaterialTransparent}),b.ManipulatorStateFlags.Unfocused)],this._manipulator.radius=f.DISC_COLLISION_RADIUS*(this._radius/f.DISC_RADIUS)},D._createMaterial=function(e=1){const t=a.toUnitRGBA(h.colors.main);return t[3]*=e,new y.ColorMaterial({color:t,transparent:1!==e,cullFace:m.CullFaceOptions.Back,renderOccluded:T.RenderOccludedFlag.Transparent})},t._createClass(g,[{key:"displayScale",get:function(){return this._scale},set:function(e){this._scale=e,this._updateManipulatorTransform()}},{key:"snapToScene",get:function(){return this._snapToScene.enabled},set:function(e){this._snapToScene.enabled=e}},{key:"radius",get:function(){return this._radius},set:function(e){e!==this._radius&&(this._radius=e,this._updateManipulator())}},{key:"test",get:function(){return{discManipulator:this._manipulator}}}]),g}(g.Manipulation);e.MoveXYDiscManipulation=D,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
