/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../geometry","../../../../Graphic","../../../../symbols","../../../../core/analysisThemeUtils","../../../../core/maybe","../../../../core/reactiveUtils","../../../../core/unitUtils","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/ensureType","../../../../core/arrayUtils","../../../../core/accessorSupport/decorators/subclass","../../../../chunks/vec2","../../../../chunks/vec2f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/projection","../../../../chunks/boundedPlane","../../../../geometry/support/spatialReferenceUtils","../../../../layers/GraphicsLayer","../../../ViewingMode","./manipulations/DragManipulation","./manipulations/RotateManipulation","./manipulations/ScaleManipulation","./manipulations/utils","../../../input/keys","../../../interactive/InteractiveToolBase","../../../interactive/editGeometry/EditGeometry","../../../interactive/editGeometry/EditGeometryOperations","../../../interactive/editGeometry/interfaces","../../../interactive/editGeometry/operations/UpdateVertices","../../../interactive/editGeometry/support/editPlaneUtils","../../../support/hitTestSelectUtils","../../../support/screenUtils","../../../../geometry/Polygon","../../../../geometry/Point","../../../../symbols/SimpleFillSymbol","../../../../symbols/SimpleMarkerSymbol"],(function(e,t,i,o,r,a,s,n,c,l,p,h,u,_,d,y,g,f,m,v,G,w,R,b,T,k,P,A,S,C,M,O,U,E,D,B,x,L,H,V){"use strict";const j={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",plus:"+",minus:"-",toggleOpacity:"t",shift:"Shift",primaryKey:A.primaryKey},z=80,I=10,F=30,K=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],N=1,q=10;e.TransformTool=function(e){function i(t){var i;return(i=e.call(this,t)||this)._initialControlPoints=null,i._initialGeometry=null,i._graphic=null,i._planeCache=v.create(),i._displayPlaneCache=v.create(),i._mainAxisCache=y.create(),i._rotationHandleCache=f.create(),i._cornerA=f.create(),i._cornerB=f.create(),i._cornerC=f.create(),i._cornerD=f.create(),i._avgAB=f.create(),i._avgBC=f.create(),i._avgCD=f.create(),i._avgDA=f.create(),i._preserveAspectRatio=new P.PreserveAspectRatio,i._snapRotation=new P.SnapRotation,i._graphicsLayer=new w({internal:!0,listMode:"hide",visible:!1}),i._sharedUndoStack=[],i._sharedRedoStack=[],i._isOpacityToggled=!1,i._isModifierActive=!1,i._factor=1,i.preserveAspectRatio=null,i.snapRotation=null,i}t._inheritsLoose(i,e);var o=i.prototype;return o.initialize=function(){this._initialize()},o.destroy=function(){const{map:e}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach((e=>e.destroy())),this._editGeometryOperations.destroy(),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=n.destroyMaybe(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null},o.onActivate=function(){this.visible=!0},o.onDeactivate=function(){this.visible=!1},o.onShow=function(){this._graphicsLayer.visible=!0},o.onHide=function(){this._graphicsLayer.visible=!1},o.canUndo=function(){return this._editGeometryOperations.canUndo},o.canRedo=function(){return this._editGeometryOperations.canRedo},o.undo=function(){this._editGeometryOperations.undo(),this.updateGraphics()},o.redo=function(){this._editGeometryOperations.redo(),this.updateGraphics()},o.refresh=function(){const{view:e,target:t}=this,i="georeference"in t?n.unwrap(n.unwrap(t.georeference).coords):t.geometry,o=this._editGeometryOperations,r=o.data.components[0].vertices,a=C.EditGeometry.fromGeometry(m.project(i,e.spatialReference),R.ViewingMode.Local).components[0].vertices;r.forEach(((e,t)=>{o.setVertexPosition(e,a[t].pos)})),this.updateGraphics()},o.reset=function(){const{target:e}=this;if("georeference"in e){const t=n.unwrap(e.georeference);"control-points"===t.type&&(t.controlPoints=this._initialControlPoints)}else e.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0},o.updateGraphics=function(){const e=this._editGeometryOperations.data.geometry;if("georeference"in this.target){n.unwrap(this.target.georeference).coords=e}this._graphic.geometry=e,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach(((e,t)=>{this._scaleGraphics[t].geometry=e}))},o.setSharedUndoStack=function(e){this._sharedUndoStack=e},o.setSharedRedoStack=function(e){this._sharedRedoStack=e},o._initialize=function(){var e=t._asyncToGenerator((function*(){var e=this;const{view:i,target:o}=this;if("georeference"in o){const e=n.unwrap(o.georeference);this._graphic=new r({geometry:n.unwrap(e.coords)}),this._initialControlPoints="control-points"===e.type?e.controlPoints:null}else this._graphic=o,this._initialGeometry=n.unwrap(o.geometry);i.map.addMany([this._graphicsLayer]),i.focus(),this.visible=!1,this.finishToolCreation(),yield this._loadProjectionEngine(),this._editGeometryOperations=M.EditGeometryOperations.fromGeometry(m.project(this._graphic.geometry,i.spatialReference),R.ViewingMode.Local),this._backgroundGraphic=new r({symbol:new H({color:"transparent",outline:{type:"simple-line",color:s.getAccentColor(),width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new r({symbol:new V({color:s.getContrastColor(),outline:{type:"simple-line",color:s.getAccentColor(),width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map((e=>new r({symbol:new V({size:6,style:"square",color:s.getContrastColor(),outline:{type:"simple-line",color:s.getAccentColor(),width:1}}),geometry:e}))),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new b.DragManipulation({tool:this,view:i,graphic:this._graphic}),this._rotateManipulation=new T.RotateManipulation({tool:this,view:i,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map(((e,t)=>new k.ScaleManipulation({tool:this,view:i,graphic:e,direction:K[t],preserveAspectRatio:this._preserveAspectRatio}))),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map((e=>e.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)))),c.watch((()=>this.view.scale),(()=>this.active?this.updateGraphics():null)),i.on("click",function(){var r=t._asyncToGenerator((function*(t){if(null!=i.activeTool&&i.activeTool!==e)return;const r=B.createScreenPointFromEvent(t),a=[];i.map.allLayers.forEach((e=>{"vector-tile"!==e.type&&"imagery"!==e.type||a.push(e)}));const s=yield e.view.hitTest(r,{exclude:a}),c=s.results;if(0===c.length)i.activeTool=null;else{const t=D.findFirstGraphicHit(s.results),r="georeference"in o,a=c.map((e=>"media"===e.type?e.element:null)).filter(Boolean),l=[...e._graphicsLayer.graphics,r?null:o].filter(Boolean);r&&a.includes(o)||n.isSome(t)&&l.includes(t.graphic)?null==i.activeTool&&(i.activeTool=e):i.activeTool=null}}));return function(e){return r.apply(this,arguments)}}())]);const a=e=>{this.addHandles(e.events.on("grab-changed",(e=>{"georeference"in o&&("start"===e.action?o.opacity*=.5:"end"===e.action&&(o.opacity*=2))})))};this._dragManipulation.forEachManipulator(a),this._rotateManipulation.forEachManipulator(a),this._scaleManipulations.forEach((e=>e.forEachManipulator(a))),this.addHandles([i.on("key-down",(e=>{i.activeTool===this&&(e.key!==j.shift||e.repeat||(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!0,e.stopPropagation()),e.key!==j.toggleOpacity||e.repeat||("georeference"in o&&(o.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled),e.stopPropagation()),e.key!==j.primaryKey||e.repeat||(this._factor=q,e.stopPropagation()),this._isModifierActive&&(e.key===j.plus&&(this._scale(this._factor),e.stopPropagation()),e.key===j.minus&&(this._scale(-this._factor),e.stopPropagation()),e.key===j.up&&(this._move(0,this._factor),e.stopPropagation()),e.key===j.down&&(this._move(0,-this._factor),e.stopPropagation()),e.key===j.left&&(this._move(-this._factor,0),e.stopPropagation()),e.key===j.right&&(this._move(this._factor,0),e.stopPropagation())))})),i.on("key-up",(e=>{i.activeTool===this&&(e.key===j.shift&&(null==this.preserveAspectRatio&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),null==this.snapRotation&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!1,e.stopPropagation()),e.key===j.primaryKey&&(this._factor=N,e.stopPropagation()))}))])}));function i(){return e.apply(this,arguments)}return i}(),o._loadProjectionEngine=function(){var e=t._asyncToGenerator((function*(){const e=n.unwrap(this._graphic.geometry);return m.initializeProjection(e.spatialReference,this.view.spatialReference)}));function i(){return e.apply(this,arguments)}return i}(),o._updateDisplayPlaneConrers=function(e){const{basis1:t,basis2:i,origin:o}=e,r=this._cornerA;g.add(r,o,t),g.add(r,r,i);const a=this._cornerB;g.add(a,o,t),g.subtract(a,a,i);const s=this._cornerC;g.subtract(s,o,t),g.subtract(s,s,i);const n=this._cornerD;g.subtract(n,o,t),g.add(n,n,i)},o._getInfo=function(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}},o._updateGraphics=function(e,t){"start"===e.action&&(this._sharedUndoStack.push({tool:this,operation:t}),this._sharedRedoStack.length=0),this.updateGraphics()},o._scale=function(e){const t=this._editGeometryOperations,i=[];for(const s of t.data.components)i.push(...s.vertices);const o=t.data.geometry.extent?.width,r=(o+e*this.view.resolution)/o,a=t.scaleVertices(i,this._plane.origin,y.UNIT_X,r,r,O.AccumulationBehaviour.NEW_STEP,U.AccumulationType.REPLACE);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()},o._move=function(e,t){const i=this._editGeometryOperations,o=[];for(const a of i.data.components)o.push(...a.vertices);const r=i.moveVertices(o,e*this.view.resolution,t*this.view.resolution,0,O.AccumulationBehaviour.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()},t._createClass(i,[{key:"_plane",get:function(){const e=this._graphic.geometry;if(!n.isSome(e))return null;const t=this._editGeometryOperations.data,i=t.components[0].edges[0],o=d.subtract(this._mainAxisCache,i.leftVertex.pos,i.rightVertex.pos);d.normalize(o,o);let r=z*this.view.resolution;const a=this.view.spatialReference;return G.equals(a,e.spatialReference)&&(r*=l.getMetersPerUnitForSR(a)/l.getMetersPerUnitForSR(e.spatialReference)),E.calculateOrientedBounds(o,t,r,this._planeCache)}},{key:"_displayPlane",get:function(){const e=this._plane;if(!e)return null;const t=this._displayPlaneCache;v.copy(e,t);const i=I*this.view.resolution;return g.scale(t.basis1,t.basis1,1+i/g.length(t.basis1)),g.scale(t.basis2,t.basis2,1+i/g.length(t.basis2)),t}},{key:"_backgroundGraphicGeometry",get:function(){const e=this._displayPlane;if(!e)return null;const t=this.view.spatialReference;return this._updateDisplayPlaneConrers(e),new x({spatialReference:t,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}},{key:"_rotateGraphicGeometry",get:function(){const e=this._plane;if(!e)return null;const t=this._rotationHandleCache;return g.normalize(t,e.basis1),g.scale(t,t,F*this.view.resolution),g.add(t,t,e.origin),g.add(t,t,e.basis1),new L({x:t[0],y:t[1],spatialReference:this.view.spatialReference})}},{key:"_scaleGraphicGeometries",get:function(){const e=this._displayPlane;if(!e)return[];const t=this.view.spatialReference;this._updateDisplayPlaneConrers(e);const{_cornerA:i,_cornerB:o,_cornerC:r,_cornerD:a}=this,s=g.lerp(this._avgAB,i,o,.5),n=g.lerp(this._avgBC,o,r,.5),c=g.lerp(this._avgCD,r,a,.5),l=g.lerp(this._avgDA,a,i,.5);return[new L({x:i[0],y:i[1],spatialReference:t}),new L({x:o[0],y:o[1],spatialReference:t}),new L({x:r[0],y:r[1],spatialReference:t}),new L({x:a[0],y:a[1],spatialReference:t}),new L({x:s[0],y:s[1],spatialReference:t}),new L({x:n[0],y:n[1],spatialReference:t}),new L({x:c[0],y:c[1],spatialReference:t}),new L({x:l[0],y:l[1],spatialReference:t})]}}]),i}(S.InteractiveToolBase),i.__decorate([p.property()],e.TransformTool.prototype,"_plane",null),i.__decorate([p.property()],e.TransformTool.prototype,"_backgroundGraphicGeometry",null),i.__decorate([p.property()],e.TransformTool.prototype,"_rotateGraphicGeometry",null),i.__decorate([p.property()],e.TransformTool.prototype,"_scaleGraphicGeometries",null),i.__decorate([p.property()],e.TransformTool.prototype,"preserveAspectRatio",void 0),i.__decorate([p.property()],e.TransformTool.prototype,"snapRotation",void 0),i.__decorate([p.property({constructOnly:!0,nonNullable:!0})],e.TransformTool.prototype,"target",void 0),i.__decorate([p.property({constructOnly:!0})],e.TransformTool.prototype,"view",void 0),e.TransformTool=i.__decorate([_.subclass("esri.views.2d.interactive.editingTools.TransformTool")],e.TransformTool),e.KEYS=j,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
