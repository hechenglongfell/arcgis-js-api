/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Handles","../../../../core/maybe","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f32","../../../../geometry/support/vectorStacks","./Object3DVisualElement","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/materials/ColorMaterial","../../webgl-engine/materials/RibbonLineMaterial"],(function(e,t,i,r,a,n,s,o,u,l,c,h,d,_,m,f){"use strict";let p=function(e){function n(t){var r;return(r=e.call(this,t)||this)._handles=new i,r._quadMaterial=null,r._outlineMaterial=null,r._maxSize=0,r._position=o.create(),r._up=o.create(),r._right=o.create(),r._renderOccluded=4,r._color=l.fromValues(1,0,0,1),r._outlineColor=l.fromValues(0,0,0,1),r._outlineSize=0,r._size=32,r._outlineRenderOccluded=16,r.applyProps(t),r}t._inheritsLoose(n,e);var h=n.prototype;return h.createExternalResources=function(){this._quadMaterial=new m.ColorMaterial(this.quadMaterialParameters),this._outlineMaterial=new f.RibbonLineMaterial(this.outlineMaterialParameters),this._handles.add(this.view.state.watch("camera",(()=>this._updateTransform())))},h.destroyExternalResources=function(){this._quadMaterial=null,this._outlineMaterial=null,this._handles.removeAll()},h.forEachExternalMaterial=function(e){e(this._quadMaterial),e(this._outlineMaterial)},h.createGeometries=function(e){this._createQuadGeometry(e),this._createOutlineGeometry(e),this._updateTransform(e)},h._createQuadGeometry=function(e){const t=this._quadGeometryData(this._up,this._right);e.addGeometry(t,this._quadMaterial)},h._createOutlineGeometry=function(e){if(0===this._outlineSize)return;const t=s.add(c.sv3d.get(),this._up,this._right),i=_.createPolylineGeometry([this._up,t,this._right]);e.addGeometry(i,this._outlineMaterial)},h._updateTransform=function(e=this.object){const t=this.view.state.camera,i=this._size*t.computeScreenPixelSizeAt(this._position),n=Math.min(this._maxSize,i);a.identity(y),a.translate(y,y,this._position),a.scale(y,y,[n,n,n]),r.isSome(e)&&(e.transformation=y)},h._quadGeometryData=function(e,t){const i=s.add(c.sv3d.get(),e,t);return new d.Geometry([["position",{size:3,data:[0,0,0,...t,...e,...i],exclusive:!0}]],[["position",new Uint16Array([0,1,2,1,2,3])]])},h._updateQuadMaterial=function(){this._quadMaterial&&this._quadMaterial.setParameterValues(this.quadMaterialParameters)},h._updateOutlineMaterial=function(){this._outlineMaterial&&this._outlineMaterial.setParameterValues(this.outlineMaterialParameters)},t._createClass(n,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}},{key:"color",get:function(){return this._color},set:function(e){u.copy(this._color,e),this._updateQuadMaterial()}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(e){u.copy(this._outlineColor,e),this._updateOutlineMaterial()}},{key:"outlineSize",get:function(){return this._outlineSize},set:function(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}},{key:"size",get:function(){return this._size},set:function(e){e!==this._size&&(this._size=e,this._updateTransform())}},{key:"outlineRenderOccluded",get:function(){return this._outlineRenderOccluded},set:function(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}},{key:"geometry",set:function({previous:e,center:t,next:i}){this._maxSize=Math.min(s.distance(t,e),s.distance(t,i))/3,s.normalize(this._up,s.subtract(this._up,e,t)),s.normalize(this._right,s.subtract(this._right,i,t)),s.copy(this._position,t),this.recreateGeometry()}},{key:"quadMaterialParameters",get:function(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}},{key:"outlineMaterialParameters",get:function(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}}]),n}(h.Object3DVisualElement);const y=n.create();e.RightAngleQuadVisualElement=p,Object.defineProperty(e,"__esModule",{value:!0})}));
