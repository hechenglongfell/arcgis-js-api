/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/Evented","../../../../core/maybe","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/vec4","../../../../chunks/vec4f32","../../../../geometry/projection","../../../../geometry/support/aaBoundingBox","../../../../layers/graphics/dehydratedFeatures","../../../../support/elevationInfoUtils","../../../../symbols/support/ElevationInfo","./EngineVisualElement","./LaserlineVisualElement","../../layers/graphics/ElevationContext","../../support/engineContent/line","../../support/renderInfoUtils/line","../../webgl-engine/lib/DoubleArray","../../webgl-engine/lib/Material","../../webgl-engine/lib/RenderGeometry","../../webgl-engine/lib/VertexAttribute","../../webgl-engine/materials/RibbonLineMaterial"],(function(e,t,r,i,n,s,o,a,l,c,h,u,d,f,p,_,m,g,y,b,O,R,v){"use strict";let C=function(e){function s(t){var i;return(i=e.call(this,t)||this)._attachmentOrigin=h.makeDehydratedPoint(0,0,0,null),i._attachmentOriginDirty=!0,i.events=new r,i._geometry=null,i._width=1,i._color=a.fromValues(1,0,1,1),i._innerWidth=0,i._innerColor=a.fromValues(1,1,1,1),i._stipplePattern=null,i._stippleOffColor=null,i._falloff=0,i._elevationInfo=null,i._laserlineStyle=null,i._laserlineEnabled=!1,i._renderOccluded=b.RenderOccludedFlag.OccludeAndTransparentStencil,i._attachmentOrigin.spatialReference=t.view.spatialReference,i._laserline=new p.LaserlineVisualElement({view:t.view}),i.applyProps(t),i.attached=t.attached??!0,i}t._inheritsLoose(s,e);var f=s.prototype;return f.destroy=function(){this._laserline.destroy(),e.prototype.destroy.call(this)},f.createObject3DResourceFactory=function(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:(e,t)=>{e.geometries.length=0,this._recreateGeometry(t,e.material,e.geometries)}}},f.createDrapedResourceFactory=function(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:e=>{e.geometries=this._createRenderGeometriesDraped(e.material),this._attachmentOriginChanged()}}},f.onAttachedChange=function(e){this._laserline.attached=this._laserlineAttached,e&&this._attachmentOriginChanged()},f._updateMaterial=function(){i.isSome(this.object3dResources.resources)&&this.object3dResources.resources.material.setParameters(this._materialParameters),i.isSome(this.drapedResources.resources)&&this.drapedResources.resources.material.setParameters(this._materialParameters)},f._recreateGeometry=function(e,t,r){this._createRenderGeometries(t,r);for(const i of r)e.addGeometry(i);this._attachmentOriginChanged()},f._attachmentOriginChanged=function(){this._attachmentOriginDirty=!0,this.events.emit("attachment-origin-changed")},f._destroyExternalResources=function(e){e.geometries=[],e.material.dispose()},f._createObject3DResources=function(e){const t=new v.RibbonLineMaterial(this._materialParameters),r=new Array;return this._recreateGeometry(e,t,r),{material:t,geometries:r,forEach:e=>{e(t),r.forEach(e)}}},f._createDrapedResources=function(){const e=new v.RibbonLineMaterial(this._materialParameters);return{material:e,geometries:this._createRenderGeometriesDraped(e)}},f._createRenderGeometriesDraped=function(e){const t=this.geometry;if(i.isNone(t)||i.isNone(this.view.basemapTerrain.spatialReference))return[];const r=g.geometryToRenderInfoDraped(t,this.view.basemapTerrain.spatialReference),n=[];for(const{position:i}of r.lines){const t={overlayInfo:{spatialReference:this.view.basemapTerrain.spatialReference,renderCoordsHelper:this.view.renderCoordsHelper},attributeData:{position:i},removeDuplicateStartEnd:this._isClosed},r=new O.RenderGeometry(m.createGeometry(e,t)),s=c.empty(w);c.expandWithBuffer(s,i),o.set(r.boundingSphere,.5*(s[0]+s[3]),.5*(s[1]+s[4]),0,.5*Math.sqrt((s[3]-s[0])*(s[3]-s[0])+(s[4]-s[1])*(s[4]-s[1]))),n.push(r)}return n},f.calculateMapBounds=function(e){if(i.isNone(this.object3dResources.resources))return!1;const t=this.view.renderCoordsHelper;for(const r of this.object3dResources.resources.geometries){const i=r.vertexAttributes.get(R.VertexAttribute.POSITION),n=y.newDoubleArray(i.data.length);l.projectBuffer(i.data,t.spatialReference,0,n,this.view.spatialReference,0,i.data.length/3),c.expandWithBuffer(e,n)}return!0},f._createRenderGeometries=function(e,t){const r=this.geometry;if(i.isNone(r))return;const n=g.geometryToRenderInfo(r,this.view.elevationProvider,this.view.renderCoordsHelper,_.ElevationContext.fromElevationInfo(this.elevationInfo??new d({mode:u.getGeometryEffectiveElevationMode(r,null)}))),s=new Array;for(const{position:i,mapPositions:o}of n.lines){const r={mapPositions:o,attributeData:{position:i},removeDuplicateStartEnd:this._isClosed};t.push(m.createGeometry(e,r)),s.push(i)}this._laserline.pathVerticalPlane=s},t._createClass(s,[{key:"_laserlineAttached",get:function(){return this.attached&&this.visible&&i.isSome(this._laserlineStyle)&&!this.isDraped&&this.laserlineEnabled}},{key:"geometry",get:function(){return this._geometry},set:function(e){this._geometry=e,this.recreateGeometry()}},{key:"width",get:function(){return this._width},set:function(e){e!==this._width&&(this._width=e,this._updateMaterial())}},{key:"color",get:function(){return this._color},set:function(e){o.exactEquals(e,this._color)||(o.copy(this._color,e),this._updateMaterial())}},{key:"innerWidth",get:function(){return this._innerWidth},set:function(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(e){o.exactEquals(e,this._innerColor)||(o.copy(this._innerColor,e),this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(e){const t=i.isSome(e)!==i.isSome(this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(e){e&&this._stippleOffColor&&o.exactEquals(e,this._stippleOffColor)||(this._stippleOffColor=e?a.clone(e):null,this._updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(e){this._elevationInfo=e,this.recreateGeometry()}},{key:"laserlineStyle",get:function(){return this._laserlineStyle},set:function(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,i.isSome(e)&&(this._laserline.style=e)}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},set:function(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}},{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}},{key:"attachmentOrigin",get:function(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;const e=i.toNullable(this.object3dResources.resources)?.geometries;if(!e||0===e.length)return null;n.set(P,0,0,0);let t=0;for(const r of e)r.computeAttachmentOrigin(E)&&(n.add(P,P,E),t++);return 0===t?null:(n.scale(P,P,1/t),this.view.renderCoordsHelper.fromRenderCoords(P,this._attachmentOrigin),this._attachmentOriginDirty=!1,this._attachmentOrigin)}},{key:"_isClosed",get:function(){return i.isSome(this.geometry)&&"polygon"===this.geometry.type}},{key:"_materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded}}},{key:"_normalizedRenderOccluded",get:function(){return this.isDraped&&this._renderOccluded===b.RenderOccludedFlag.OccludeAndTransparentStencil?b.RenderOccludedFlag.OccludeAndTransparent:this._renderOccluded}}]),s}(f.EngineVisualElement);const w=c.create(),E=s.create(),P=s.create();e.OutlineVisualElement=C,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
