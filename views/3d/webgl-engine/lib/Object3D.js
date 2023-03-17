/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/sphere","../../support/mathUtils","./basicInterfaces","./ContentObject","./ContentObjectType","./Object3DStateID","./Util","../materials/renderers/utils"],(function(t,e,i,n,o,s,a,r,c,h,m,u,l,b,d){"use strict";let f=function(t){function r(e={}){var n;(n=t.call(this)||this).type=u.ContentObjectType.Object,n._geometries=new Array,n._transformation=o.create(),n._bvObjectSpace=new g,n._bvWorldSpace=new g,n._bvDirty=!0,n._hasVolatileTransformation=!1,n._visible=!0,n.castShadow=null==e.castShadow||e.castShadow,n.metadata=e.metadata,n.metadata&&n.metadata.isElevationSource&&(n.metadata.lastValidElevationBB=new _);const s=e.geometries;return i.isSome(s)&&(n._geometries=Array.from(s)),n}e._inheritsLoose(r,t);var m=r.prototype;return m.dispose=function(){this._geometries.length=0},m.addGeometry=function(t){t.visible=this._visible,this._geometries.push(t),this._hasVolatileTransformation=this._hasVolatileTransformation||t.hasVolatileTransformation,this._emit("objectGeometryAdded",{object:this,geometry:t}),this._invalidateBoundingVolume()},m.removeGeometry=function(t){const e=this._geometries.splice(t,1)[0];e&&(this._emit("objectGeometryRemoved",{object:this,geometry:e}),this._invalidateBoundingVolume())},m.removeAllGeometries=function(){for(;this._geometries.length>0;)this.removeGeometry(0)},m.geometryVertexAttrsUpdated=function(t){this._emit("objectGeometryUpdated",{object:this,geometry:t}),this._invalidateBoundingVolume()},m.maskOccludee=function(){const t=new l.Object3DStateID(h.Object3DState.MaskOccludee);for(const e of this._geometries)e.occludees=d.addObject3DStateID(e.occludees,t);return this._emit("occlusionChanged",this),t},m.removeOcclude=function(t){for(const e of this._geometries)e.occludees=d.removeObject3DStateID(e.occludees,t);this._emit("occlusionChanged",this)},m.highlight=function(){const t=new l.Object3DStateID(h.Object3DState.Highlight);for(const e of this._geometries)e.highlights=d.addObject3DStateID(e.highlights,t);return this._emit("highlightChanged",this),t},m.removeHighlight=function(t){for(const e of this._geometries)e.highlights=d.removeObject3DStateID(e.highlights,t);this._emit("highlightChanged",this)},m.getCombinedStaticTransformation=function(t,e){return n.multiply(e,this.transformation,t.transformation)},m._getCombinedShaderTransformation=function(t){return n.multiply(o.create(),this.transformation,t.shaderTransformation)},m.hasVolativeTransformation=function(){return this._hasVolatileTransformation},m._validateBoundingVolume=function(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(const o of this._geometries){const t=o.boundingInfo;i.isSome(t)&&(p(t,this._bvObjectSpace,o.shaderTransformation),p(t,this._bvWorldSpace,this._getCombinedShaderTransformation(o)))}s.lerp(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),s.lerp(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const t=a.create(),e=a.create(),n=c.maxScale(this.transformation);for(const o of this._geometries){const a=o.boundingInfo;if(i.isNone(a))continue;const r=o.shaderTransformation,h=c.maxScale(r);s.transformMat4(t,a.center,r);const m=s.distance(t,this._bvObjectSpace.bounds),u=a.radius*h;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],m+u),s.transformMat4(e,t,this.transformation);const l=s.distance(e,this._bvWorldSpace.bounds),b=u*n;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],l+b)}this._bvDirty=!1},m._invalidateBoundingVolume=function(){this._bvDirty=!0,i.isSome(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds)},m._emit=function(t,e){i.isSome(this._parentLayer)&&this._parentLayer.events.emit(t,e)},e._createClass(r,[{key:"geometries",get:function(){return this._geometries}},{key:"transformation",get:function(){return this._transformation},set:function(t){n.copy(this._transformation,t),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}},{key:"parentLayer",get:function(){return this._parentLayer},set:function(t){b.assert(null==this._parentLayer||null==t,"Object3D can only be added to a single Layer"),this._parentLayer=t}},{key:"visible",get:function(){return this._visible},set:function(t){if(this._visible!==t){this._visible=t;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}},{key:"boundingVolumeWorldSpace",get:function(){return this._validateBoundingVolume(),this._bvWorldSpace}},{key:"boundingVolumeObjectSpace",get:function(){return this._validateBoundingVolume(),this._bvObjectSpace}},{key:"test",get:function(){const t=this;return{hasGeometry:e=>t._geometries.includes(e),getGeometryIndex:e=>t._geometries.indexOf(e)}}}]),r}(m.ContentObject),_=function(){function t(){this.min=a.fromValues(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=a.fromValues(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}return t.prototype.isEmpty=function(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]},t}(),g=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).bounds=r.create(),e}return e._inheritsLoose(i,t),i.prototype.init=function(){s.set(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),s.set(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),r.clear(this.bounds)},i}(_);function p(t,e,i){const o=t.bbMin,a=t.bbMax;if(n.hasIdentityRotation(i)){const t=s.set(v,i[12],i[13],i[14]);s.add(y,o,t),s.add(S,a,t);for(let i=0;i<3;++i)e.min[i]=Math.min(e.min[i],y[i]),e.max[i]=Math.max(e.max[i],S[i])}else if(s.transformMat4(y,o,i),s.exactEquals(o,a))for(let n=0;n<3;++n)e.min[n]=Math.min(e.min[n],y[n]),e.max[n]=Math.max(e.max[n],y[n]);else{s.transformMat4(S,a,i);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],y[t],S[t]),e.max[t]=Math.max(e.max[t],y[t],S[t]);for(let t=0;t<3;++t){s.copy(y,o),s.copy(S,a),y[t]=a[t],S[t]=o[t],s.transformMat4(y,y,i),s.transformMat4(S,S,i);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],y[t],S[t]),e.max[t]=Math.max(e.max[t],y[t],S[t])}}}const v=a.create(),y=a.create(),S=a.create();t.Object3D=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
