/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Accessor","../core/Collection","../core/HandleOwner","../core/handleUtils","../core/Logger","../core/maybe","../core/watchUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","./3d/support/TextureCollection","./input/InputManager","./input/ViewEvents","./interactive/interactiveToolUtils","./interactive/ToolViewManagerManipulatorState"],(function(t,o,e,i,a,r,s,n,l,h,c,u,p,d,v,_,f,T,m){"use strict";const y=s.getLogger("esri.views.ToolViewManager"),E="attached",w="tools";let g=function(o){function a(t){var e;return(e=o.call(this,t)||this)._manipulatorState=new m,e.tools=new i,e.cursor=null,e._forEachTool=t=>{for(const o of e.tools.items)if(t(o))return},e}t._inheritsLoose(a,o);var s=a.prototype;return s.initialize=function(){this.handles.add([this.view.on(f.eventTypes,(t=>{this._handleInputEvent(t)}),_.ViewEventPriorities.TOOL),...T.getToolAttachDetachHandles(this.tools),this.tools.on("before-add",(t=>{const o=t.item;if(null==o||this.tools.includes(o))return y.warn("Tool is either already in the list of tools or tool is `null`. Not adding tool."),void t.preventDefault()})),this.tools.on("before-remove",(({item:t})=>{this._manipulatorState.clearPointers(t,this._forEachTool)})),this.tools.on("change",(()=>{this._refreshToolWatchers()}))])},s.destroy=function(){this._forEachTool((t=>t.destroy()))},s.attach=function(){this._forEachTool((t=>t.attach())),"3d"===this.view.type?(this._set("textures",new v.TextureCollection(this.view._stage,this.view.resourceController.scheduler)),this.handles.add([this.view.state.watch("camera",(()=>{this._forEachManipulator((t=>{null!=t.onViewChange&&t.onViewChange()}))})),this.view.elevationProvider.on("elevation-change",(t=>{this._forEachManipulator((o=>{null!=o.onElevationChange&&o.onElevationChange(t)}))})),r.makeHandle((()=>this._set("textures",n.destroyMaybe(this.textures))))],E)):this.handles.add(this.view.watch("extent",(()=>{this._forEachManipulator((t=>{null!=t.onViewChange&&t.onViewChange()}))})))},s.detach=function(){n.isSome(this.activeTool)&&(this.activeTool=null),this._forEachTool((t=>{t.detach(),t.destroy()})),this.tools.removeAll(),this.handles.remove(E)},s._forEachManipulator=function(t){this._forEachTool((o=>{o.manipulators&&o.manipulators.forEach((({manipulator:e})=>t(e,o)))}))},s._handleInputEvent=function(t){let o=!1;const e={...t,stopPropagation:()=>{o=!0,t.stopPropagation()}};n.isSome(this.activeTool)?this.activeTool.handleInputEvent&&this.activeTool.handleInputEvent(e):this._forEachTool((t=>{!o&&t.attached&&t.visible&&t.handleInputEvent(e)})),!o&&"key-down"===t.type&&"Escape"===t.key&&this.activeTool&&(t.stopPropagation(),this.activeTool=null),this._manipulatorState.handleInputEvent(e,{forEachTool:this._forEachTool,activeTool:this.activeTool,setActiveTool:t=>{this.activeTool=t},view:this.view}),!o&&n.isSome(this.activeTool)&&this.activeTool.handleInputEventAfter(e),this._manipulatorState.handleHoverEvent(e,this._forEachTool),this._updateCursor()},s._refreshToolWatchers=function(){this.handles.remove(w),this._forEachTool((t=>{if(t instanceof e){const o=l.watch(t,["cursor","visible","editable"],(()=>{T.areToolManipulatorsEditable(t)||this._manipulatorState.clearPointers(t,this._forEachTool),this._updateCursor()}));this.handles.add(o,w)}t.manipulators&&this.handles.add(t.manipulators.on("change",(o=>{o.removed.forEach((({id:o})=>{this._manipulatorState.clearPointers(t,this._forEachTool,!0,o)})),this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool),this._updateCursor()})),w)})),this._manipulatorState.updateHoveredStateFromKnownPointers(this._forEachTool),this._updateCursor()},s._updateCursor=function(){let t=this._manipulatorState.cursor;this._forEachTool((o=>!(!n.isSome(o.cursor)||!o.visible)&&(t=o.cursor,!0))),this._get("cursor")!==t&&this._set("cursor",t)},s._removeIncompleteTools=function(t){this.tools.filter((o=>(n.isNone(t)||o!==t)&&!o.completed)).forEach((t=>{this.tools.remove(t),t.destroy()}))},t._createClass(a,[{key:"activeTool",set:function(t){if(n.isSome(t)&&!this.view.ready)return void y.error("Cannot set active tool while view is not ready.");if(t===this.activeTool)return void(n.isSome(t)&&y.warn("Tool is already active - ignoring activation request."));n.isSome(this.activeTool)&&this.activeTool.deactivate(),n.isSome(t)&&t.activate(),this._set("activeTool",t),this._removeIncompleteTools(t);const o=n.isNone(this.activeTool);for(const e of this.tools){e.setEditableFlag(1,o||e===this.activeTool);const t=T.areToolManipulatorsEditable(e);!o&&t||this._manipulatorState.clearPointers(e,this._forEachTool,!t)}this._updateCursor()}},{key:"updating",get:function(){return this.updatingHandles.updating||this.tools.some((t=>t.updating))}}]),a}(a.HandleOwner);o.__decorate([h.property({constructOnly:!0,nonNullable:!0})],g.prototype,"view",void 0),o.__decorate([h.property({readOnly:!0,nonNullable:!0})],g.prototype,"textures",void 0),o.__decorate([h.property({value:null})],g.prototype,"activeTool",null),o.__decorate([h.property({readOnly:!0,type:i})],g.prototype,"tools",void 0),o.__decorate([h.property({readOnly:!0})],g.prototype,"cursor",void 0),o.__decorate([h.property({readOnly:!0})],g.prototype,"updating",null),g=o.__decorate([d.subclass("esri.views.ToolViewManager")],g);return g}));
