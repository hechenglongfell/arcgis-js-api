/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Evented","../../../../core/Handles","../../../../core/maybe","../../../../core/PooledArray","./ContentObject","./DirtyEvents","./Octree"],(function(e,t,i,s,n,o,r,a,c){"use strict";let l=function(e){function r(t,n=""){var r,a,c,l;return(l=e.call(this)||this).apiLayerUid=n,l.type=0,l.events=new i,l.isSliceable=!1,l._objects=new o,l._stageHandles=new s,l.apiLayerUid=n,l.isVisible=null==(r=null==t?void 0:t.isVisible)||r,l.isPickable=null==(a=null==t?void 0:t.isPickable)||a,l.updatePolicy=null!=(c=null==t?void 0:t.updatePolicy)?c:0,l}t._inheritsLoose(r,e);var l=r.prototype;return l.destroy=function(){this.detachStage(),this._stage=null},l.attachStage=function(e){this.detachStage(),this._stage=e;for(const t of a.DirtyEventNames)this._stageHandles.add(this.events.on(t,(i=>e.handleEvent(t,i))))},l.detachStage=function(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator()},l.add=function(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),n.isSome(this._octree)&&this._octree.add([e])},l.remove=function(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),n.isSome(this._octree)&&this._octree.remove([e]))},l.addMany=function(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),n.isSome(this._octree)&&this._octree.add(e)},l.removeMany=function(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),n.isSome(this._octree)&&this._octree.remove(t)}},l.sync=function(){n.isSome(this._stage)&&1!==this.updatePolicy&&this._stage.syncLayer(this.id)},l.notifyObjectBBChanged=function(e,t){n.isSome(this._octree)&&this._octree.update(e,t)},l.getSpatialQueryAccelerator=function(){return n.isNone(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree},l.shaderTransformationChanged=function(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)},l.invalidateSpatialQueryAccelerator=function(){this._octree=n.destroyMaybe(this._octree)},l._createOctree=function(){this._octree=new c((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)},t._createClass(r,[{key:"objects",get:function(){return this._objects}}]),r}(r.ContentObject);function h(e){return n.isSome(e)&&0===e.type}e.WebGLLayer=l,e.isWebGLLayer=h,Object.defineProperty(e,"__esModule",{value:!0})}));
