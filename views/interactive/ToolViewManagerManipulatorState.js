/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/MapUtils","../../core/mathUtils","../../core/maybe","../../core/screenUtils","./interactiveToolUtils","../support/screenUtils"],(function(e,t,o,i,n,r,a){"use strict";let s=function(){function s(){this._pointerLocations=new Map,this._hoveredManipulators=new Map,this._grabbedManipulators=new Map,this._draggedManipulators=new Map,this._stopDrag=!1,this._revertToActiveTool=null,this._cursor=null}var d=s.prototype;return d.handleInputEvent=function(e,t){const n=()=>e.stopPropagation();switch(e.type){case"pointer-move":l(e.pointerType)&&this._pointerLocations.set(e.pointerId,{x:e.x,y:e.y,pointerType:e.pointerType});break;case"drag":this._grabbedManipulators.size>0&&(this._stopDrag=!0),this._stopDrag&&(n(),"end"===e.action&&(this._stopDrag=!1));break;case"pointer-down":{if(!c(e))break;const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,t.forEachTool);if(i.isNone(r))break;const s=this._findToolAndManipulatorByKey(r,t.forEachTool,u),l=i.applySome(s,(e=>e.manipulator)),p=i.applySome(s,(e=>e.tool));!(i.isSome(l)&&i.isSome(p)&&l.interactive)||l.grabbable&&l.grabbableForEvent(e)||!l.grabbing||l.dragging||this._ungrabManipulatorBeforeDragging(l,p,e),i.isSome(l)&&l.interactive&&l.grabbable&&l.grabbableForEvent(e)&&!l.grabbing&&(this._grabbedManipulators.set(e.pointerId,{key:r,start:o}),1===this._grabbedManipulators.size&&(this._revertToActiveTool=t.activeTool,t.setActiveTool(r.tool)),l.grabbing=!0,l.events.emit("grab-changed",{action:"start",screenPoint:o}),n());break}case"pointer-up":this._handlePointerEnd(e,t);break;case"pointer-drag":{if(!c(e))break;const r=this._grabbedManipulators.get(e.pointerId),s=this._draggedManipulators.get(e.pointerId),l=i.applySome(r||s,(({key:e})=>e)),p=this._findManipulatorByKey(l,t.forEachTool);if(i.isNone(p))break;const u=a.createScreenPointFromEvent(e);u.x=o.clamp(u.x,0,t.view.width),u.y=o.clamp(u.y,0,t.view.height);const d=i.unwrap(r||s).start;switch(e.action){case"start":case"update":"update"!==e.action&&1!==this._grabbedManipulators.size||(p.dragging=!0,s?p.events.emit("drag",{action:"update",start:d,screenPoint:u}):p.events.emit("drag",{action:"start",start:d,screenPoint:u,pointerType:e.pointerType}),this._draggedManipulators.set(e.pointerId,{key:i.unwrap(l),start:d}));break;case"end":p.dragging=!1,s&&p.events.emit("drag",{action:"end",start:d,screenPoint:u}),this._draggedManipulators.delete(e.pointerId),this._handlePointerEnd(e,t)}n();break}case"immediate-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,t.forEachTool),s=this._findToolAndManipulatorByKey(r,t.forEachTool,u);if(p(e)||t.forEachTool((e=>{if((!i.isSome(s)||s.tool!==e||!e.selectionManagementDisabled)&&e.manipulators){let t=!1;e.manipulators.forEach((({manipulator:e})=>{e.selected&&(e.selected=!1,t=!0)})),t&&e.manipulatorSelectionChanged&&e.manipulatorSelectionChanged()}})),i.isNone(s))break;const{manipulator:l,tool:c}=s;if(!l.interactive)break;l.selectable&&!c.selectionManagementDisabled&&(l.selected=!l.selected,c.manipulatorSelectionChanged&&c.manipulatorSelectionChanged());const d=e.native.shiftKey;l.events.emit("immediate-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:d,stopPropagation:n});break}case"click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,t.forEachTool),s=this._findManipulatorByKey(r,t.forEachTool);if(i.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit(e.type,{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l}),n();break}case"double-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,t.forEachTool),s=this._findManipulatorByKey(r,t.forEachTool);if(i.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit("double-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l,stopPropagation:n});break}case"immediate-double-click":{const o=a.createScreenPointFromEvent(e),r=this._intersect(o,e.pointerType,t.forEachTool),s=this._findManipulatorByKey(r,t.forEachTool);if(i.isNone(s)||!s.interactive)break;const l=e.native.shiftKey;s.events.emit("immediate-double-click",{screenPoint:o,button:e.button,pointerType:e.pointerType,shiftKey:l,stopPropagation:n});break}}this._updateCursor(t.forEachTool)},d._ungrabManipulatorBeforeDragging=function(e,t,o){e.grabbing=!1,e.events.emit("grab-changed",{action:"end",screenPoint:a.createScreenPointFromEvent(o)}),this._grabbedManipulators.forEach((({key:o},i)=>{o.tool===t&&t.manipulators.findById(o.manipulatorId)===e&&this._grabbedManipulators.delete(i)}))},d._handlePointerEnd=function(e,t){const o=i.applySome(this._grabbedManipulators.get(e.pointerId),(({key:e})=>e)),n=this._findManipulatorByKey(o,t.forEachTool);if(i.isSome(n)&&!n.dragging){const r=i.isSome(t.creatingTool)&&t.creatingTool===i.unwrap(o).tool;1!==this._grabbedManipulators.size||0!==this._draggedManipulators.size||r||(t.setActiveTool(this._revertToActiveTool),this._revertToActiveTool=null),n.grabbing&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",screenPoint:a.createScreenPointFromEvent(e)})),this._grabbedManipulators.delete(e.pointerId)}},d._cursorFromMap=function(e,o){let n=null;return t.someMap(e,(({key:e})=>{const t=this._findManipulatorByKey(e,o);return!!(i.isSome(t)&&t.interactive&&"cursor"in t&&t.cursor)&&(n=t.cursor,!0)})),n},d._updateCursor=function(e){this._grabbedManipulators.size>0?this._cursor=this._cursorFromMap(this._grabbedManipulators,e)||"grabbing":this._hoveredManipulators.size>0?this._cursor=this._cursorFromMap(this._hoveredManipulators,e)||"pointer":this._cursor=null},d.clearPointers=function(e,t,o=!0,n){const r=t=>t.tool===e&&(i.isNone(n)||t.manipulatorId===n);this._grabbedManipulators.forEach((({key:e},o)=>{if(r(e)){this._grabbedManipulators.delete(o);const n=this._findManipulatorByKey(e,t);i.isSome(n)&&(n.grabbing=!1,n.events.emit("grab-changed",{action:"end",screenPoint:null}))}})),this._draggedManipulators.forEach((({key:e},o)=>{if(r(e)){this._draggedManipulators.delete(o);const n=this._findManipulatorByKey(e,t);i.isSome(n)&&(n.dragging=!1,n.events.emit("drag",{action:"cancel"}))}})),o&&this._hoveredManipulators.forEach((({key:e},o)=>{if(r(e)){this._hoveredManipulators.delete(o);const n=this._findManipulatorByKey(e,t);i.isSome(n)&&(n.hovering=!1)}})),this._updateCursor(t)},d._intersect=function(e,t,o){let n=null;return o((o=>{if(null==o.manipulators||!r.areToolManipulatorsEditable(o))return!1;const a=o.manipulators.intersect(e,t);return!i.isNone(a)&&(n={manipulatorId:a.id,tool:o},!0)})),n},d.updateHoveredStateFromKnownPointers=function(e){this._pointerLocations.forEach(((t,o)=>{this._updateHoveredStateForPointerAtScreenPosition(n.createScreenPoint(t.x,t.y),o,t.pointerType,e)}))},d.handleHoverEvent=function(e,t){"pointer-up"!==e.type&&"immediate-click"!==e.type&&"pointer-move"!==e.type||!l(e.pointerType)||this._updateHoveredStateForPointerAtScreenPosition(a.createScreenPointFromEvent(e),e.pointerId,e.pointerType,t)},d._updateHoveredStateForPointerAtScreenPosition=function(e,t,o,n){const r=this._intersect(e,o,n);let a=this._findManipulatorByKey(r,n);const s=i.applySome(this._hoveredManipulators.get(t),(({key:e})=>e)),l=this._findManipulatorByKey(s,n);i.isSome(a)&&!a.interactive&&(a=null),l!==a&&(i.isSome(l)&&(l.hovering=!1),i.isSome(a)?(a.hovering=!0,this._hoveredManipulators.set(t,{key:i.unwrap(r)})):this._hoveredManipulators.delete(t),this._updateCursor(n))},d._findManipulatorByKey=function(e,t){return this._findToolAndManipulatorByKey(e,t,u)?u.manipulator:null},d._findToolAndManipulatorByKey=function(e,t,o){return i.isNone(e)?null:(o.tool=null,o.manipulator=null,t((t=>{if(t!==e.tool||null==t.manipulators||!r.areToolManipulatorsEditable(t))return!1;const n=t.manipulators.findById(e.manipulatorId);return!!i.isSome(n)&&(o.manipulator=n,o.tool=t,!0)})),o.manipulator?o:null)},e._createClass(s,[{key:"cursor",get:function(){return this._cursor}}]),s}();function l(e){return"mouse"===e}function c(e){return"mouse"!==e.pointerType||0===e.button}function p(e){return!!e.native.shiftKey}const u={manipulator:null,tool:null};return s}));
