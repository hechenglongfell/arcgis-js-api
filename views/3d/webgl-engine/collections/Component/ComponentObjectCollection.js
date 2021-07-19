/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Logger","../../../../../core/maybe","../../../../../chunks/mat3","../../../../../chunks/mat3f32","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../chunks/vec4","../../../../../chunks/vec4f32","../../../layers/support/symbolColorUtils","../../../support/orientedBoundingBox","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","./ComponentData","./ComponentObject","./interface","./IntersectionGeometry","./Renderable","./RenderGeometry","./RenderSubmitSystem","./SourceGeometry","./Material/ComponentMaterial","./Material/ComponentTechnique","../../core/util/BucketedObjectStore","../../core/util/TwoVectorPosition","../../lib/ComponentUtils","../../lib/Util","../../lib/TextureBackedBuffer/BufferManager","../../../../webgl/BufferObject","../../../../webgl/VertexArrayObject"],(function(e,t,o,n,r,i,s,a,c,l,m,u,p,h,f,b,d,g,y,C,S,w,M,_,x,v,B,I,P,D,j){"use strict";const k=o.getLogger("esri.views.3d.webgl-engine.collections.Component.ComponentObjectCollection");let O=function(){function e(e){this._renderManager=e,this._objects=new x.BucketedObjectStore,this._renderSubmit=new S.RenderSubmitSystem(this),this._renderManager.register(this._renderSubmit),this._componentBufferManager=new P.BufferManager(e.rctx)}var o=e.prototype;return o.dispose=function(){I.assert(0===this._objects.count,"ObjectCollection should be empty upon disposal"),this._componentBufferManager.destroy()},o.createObject=function(e){const t=new b;return t.toMapSpace=e.toMapSpace.slice(),t.transform=e.transform,t.obb=u.clone(e.obb),t.components=new f(this._componentBufferManager,e.geometry.componentOffsets),t.renderable=this._createRenderable(e,t.components),t.intersectionGeometry=new g(e.geometry.positionData,t.components),this._objects.add(e.visible?d.VISIBLE_BIT:0,t),t},o.destroyObject=function(e){const t=e;this._objects.remove(t),t.dispose(),this._notifyDirty()},o.setObjectVisibility=function(e,t){const o=e;if(t!==o.visible){const e=t?o.bucketKey|d.VISIBLE_BIT:o.bucketKey&~d.VISIBLE_BIT;this._objects.updateKey(o,e),this._notifyDirty()}},o.preSubmit=function(e){const t=e.camera.eye;this._objects.forEach(((e,o)=>{o&d.VISIBLE_BIT&&e.forEach((e=>{const o=s.squaredDistance(t,e.obb.center);e.renderable.meta.cameraDepthSquared=o}))}))},o.getMaterial=function(e){return e.renderable.material},o.updateMaterial=function(e,t){const o=e.renderable.material;t(o),o.dirty&&this._notifyDirty()},o.setAllComponentVisibilities=function(e,t){const o=e;o.components.visibility.reset(t),o.components.visibilityDirty(),this._notifyDirty()},o.forEachVisibleComponent=function(e,t){return e.components.visibility.forEachComponent(t)},o.getComponentCount=function(e){const t=e,o=t.components.visibility.componentCount();return{visible:o,invisible:t.components.count-o}},o.setComponentData=function(e,t){const o=e,n=o.renderable.material;if(d.isVaryingComponentParameters(t)){const e=o.components,r=e.materialDataBuffer,i=e.materialDataIndices,s={castShadows:!0,pickable:!0,externalColor:l.create(),externalColorMixMode:1},a=r.textureBuffer,c=new Uint8Array(4),u=new Uint32Array(c.buffer);let p=0,h=0,f=0,b=!1,d=0;for(let o=0;o<e.count;o++)t(o,s),p+=+(s.externalColor[3]<1),h+=+(3===s.externalColorMixMode&&1===s.externalColor[3]),f+=+s.castShadows,m.encodeSymbolColor(s.externalColor,s.externalColorMixMode,c),c[2]=254&c[2]|+s.castShadows,a.setData(i[o],0,c[0],c[1],c[2],c[3]),b=b||o>0&&d!==u[0],d=u[0],s.pickable!==B.getVisibility(e.pickability,o)&&(e.pickability=B.updateVisibilityWithCount(e.pickability,e.count,o,s.pickable));b?(n.componentParameters=new M.ComponentParametersVarying,n.componentParameters.castShadows=L(f,e.count),n.componentParameters.transparent=L(p,e.count),n.componentParameters.opaqueOverride=L(h,e.count),n.componentParameters.texture=a,a.updateTexture()):(n.componentParameters=new M.ComponentParametersUniform,n.componentParameters.castShadows=s.castShadows?0:2,n.componentParameters.externalColor=s.externalColor,n.componentParameters.externalColorMixMode=s.externalColorMixMode)}else n.componentParameters=new M.ComponentParametersUniform,n.componentParameters.castShadows=t.castShadows?0:2,n.componentParameters.externalColor=t.externalColor,n.componentParameters.externalColorMixMode=t.externalColorMixMode;this._notifyDirty()},o.getComponentAabb=function(e,t,o){return e.intersectionGeometry.getComponentAabb(t,o)},o.getComponentObb=function(e){return e.obb},o.getObjectTransform=function(e){return e.transform},o.getComponentPositions=function(e,t,o){return e.intersectionGeometry.getComponentPositions(t,o)},o.intersect=function(e,t,o,i,a,c){const l=e;n.isSome(a)&&(a.localOrigin=l.transform.position);const m=r.invert(T,l.transform.rotationScale);s.sub(E,t,l.transform.position),s.sub(U,o,l.transform.position),s.transformMat3(E,E,m),s.transformMat3(U,U,m);const u=r.transpose(T,m);return l.intersectionGeometry.intersect(E,U,i,u,a,c)},o.addEdges=function(e,t,o,n){const r=e,{indices:i,positions:s}=r.intersectionGeometry,a=r.components.offsets;return t.addComponentObject(e,r.transform,r.obb.center,s,i,a,o,n)},o.addComponentHighlight=function(e,t){const o=e.components;n.isNone(o.highlightCounts)&&(o.highlightCounts=new Uint32Array(o.count+1));0===o.highlightCounts[t]++&&(o.highlightsDirty(),this._notifyDirty()),o.highlightCounts[o.count]++},o.removeComponentHighlight=function(e,t){const o=e.components;if(n.isNone(o.highlightCounts))return void k.warn("Removing non-existing highlight.");const r=o.highlightCounts[t],i=o.highlightCounts[o.count];if(0!==r){if(r>1)return o.highlightCounts[t]=r-1,void(o.highlightCounts[o.count]=i-1);o.highlightCounts[t]=0,o.highlightsDirty(),this._notifyDirty(),1===i?o.highlightCounts=null:o.highlightCounts[o.count]=i-1}else k.warn("Removing non-existing highlight.")},o.clearHighlights=function(e){const t=e.components;n.isSome(t.highlightCounts)&&(t.highlightCounts=null,t.highlightsDirty(),this._notifyDirty())},o.getObjectGPUMemoryUsage=function(e){return e.renderable.meta.gpuMemoryEstimate},o._createRenderable=function(e,t){const o=this._renderManager.rctx,a=e.geometry,l=a.vertices.layoutParameters,m=D.createVertex(o,35044,a.vertices.data),u=n.applySome(a.indices,(e=>D.createIndex(o,35044,e))),h=p.glLayout(w.createVertexBufferLayout(l)),f=new Uint16Array(a.vertices.count);for(let r=0;r<t.count;r++){const e=t.offsets[r],o=t.offsets[r+1],i=t.materialDataIndices[r];if(n.isSome(a.indices))for(let t=e;t<o;t++){f[a.indices[t]]=i}else for(let t=e;t<o;t++)f[t]=i}const b=D.createVertex(o,35044,f.buffer),d=new v.TwoVectorPosition(e.transform.position),g=i.clone(e.transform.rotationScale);r.invert(g,g),r.transpose(g,g);const S=new _.ComponentDrawParameters;s.copy(S.worldFromModel_TL,d.low),s.copy(S.worldFromModel_TH,d.high),r.copy(S.worldFromModel_RS,e.transform.rotationScale),r.copy(S.transformNormal_GlobalFromModel,g),c.copy(S.toMapSpace,e.toMapSpace);const x=new M.ComponentMaterial,B=new j(o,x.attributeLocations,{data:h,componentIndices:V},{data:m,componentIndices:b},n.unwrap(u)),I=new C.RenderGeometry(B,4,l,n.isSome(u)),P={cameraDepthSquared:.5,gpuMemoryEstimate:m.byteSize+b.byteSize+(n.isSome(u)?u.byteSize:0)};return new y.Renderable(x,S,I,P)},o._notifyDirty=function(){this._renderManager.notifyDirty()},t._createClass(e,[{key:"visibleObjects",get:function(){return this._objects.getBucket(d.VISIBLE_BIT)}},{key:"performanceInfo",get:function(){const e=this._objects.getPerformanceInfo(d.VISIBLE_BIT);return{shown:e.added,hidden:e.removed}}}]),e}();const V=p.glLayout(h.newLayout().u16("componentIndex"));function L(e,t){return e===t?0:0===e?2:1}const T=i.create(),E=a.create(),U=a.create();e.ComponentObjectCollection=O,Object.defineProperty(e,"__esModule",{value:!0})}));
