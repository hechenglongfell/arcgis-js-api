/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/Accessor","../../../../../core/arrayUtils","../../../../../core/Logger","../../../../../core/mathUtils","../../../../../core/maybe","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/ensureType","../../../../../core/accessorSupport/decorators/subclass","../../../../../chunks/mat3","../../../../../chunks/mat3f64","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../../core/support/WatchUpdatingTracking","../../../../../chunks/sphere","../../../../../chunks/vec33","../../../../ViewingMode","../../collections/Component/Material/shader/ComponentData.glsl","../../core/util/TwoVectorPosition","../GridLocalOriginFactory","../localOriginHelper","../LocalOriginManager","../Object3D","../VertexArrayObject","../VertexAttribute","./bufferLayouts","./edgeBufferWriters","./edgePreprocessing","./EdgeRenderer","./EdgeShaderParameters","./EdgeWorkerHandle","./interfaces","./strokes","./util","../TextureBackedBuffer/BufferManager","../../shaders/sources/edgeRenderer/EdgeUtil.glsl","../../../../webgl/BufferObject","../../../../webgl/enums"],(function(e,t,r,n,i,s,o,a,c,d,l,u,h,g,f,p,m,y,_,b,O,E,T,v,w,R,S,x,j,M,C,A,P,L,I,V,B,D,k,N,G){"use strict";function U(e){a.isSome(e)&&(e.vao.vertexBuffers.instances.dispose(),e.vao.dispose(!1),e.vao=null)}function H(e){let t=null,r=null;for(let n=0;n<e.geometries.length;n++){const s=e.geometries[n];if(s.material.supportsEdges){if(t){if(!i.equals(t,s.transformation))return!1}else t=s.transformation;if(!r&&a.isSome(s.localOrigin))r=s;else if(r&&a.isSome(r.localOrigin)&&a.isSome(s.localOrigin)&&r.localOrigin.id!==s.localOrigin.id)return!1}}return!0}e.EdgeView=function(e){function r(t){var r;return(r=e.call(this,t)||this)._updatingHandles=new m.WatchUpdatingTracking,r._perObjectData=new Map,r._perObjectDataEvictionCache=new Set,r._renderers=new Map,r._gpuMemoryUsage=0,r._workerAbort=new AbortController,r._tmpModelPosition=p.create(),r._localOrigins=new w.LocalOriginManager(new T.GridLocalOriginFactory(t.renderSR)),r}t._inheritsLoose(r,e);var n=r.prototype;return n.initialize=function(){this._worker=new L.EdgeWorkerHandle(this.schedule),this._componentColorManager=new D.BufferManager(this.rctx,3);const e=j.VertexLayout.createBuffer(4);for(let t=0;t<4;t++)e.sideness.set(t,0,0===t||3===t?0:1),e.sideness.set(t,1,0===t||1===t?0:1);this._verticesBufferObject=N.BufferObject.createVertex(this.rctx,G.Usage.STATIC_DRAW,e.buffer)},n.destroy=function(){this.destroyed||(this._perObjectData.forEach((e=>this._discardObjectEntry(e))),this._perObjectData.clear(),this._strokesTexture=a.disposeMaybe(this._strokesTexture),this._componentColorManager=a.destroyMaybe(this._componentColorManager),this._workerAbort.abort(),this._worker.destroy(),this._verticesBufferObject=a.disposeMaybe(this._verticesBufferObject),this._renderers.clear(),this._updatingHandles.destroy())},n.shouldRender=function(){return this._renderers.size>0},n.addComponentObject=function(){var e=t._asyncToGenerator((function*(e,t,r,n,i,s,o,a){if(this.hasObject(e))return this.getObjectMemoryUsage(e);let c;const d=new F(new Promise((e=>c=e)),r.center,r.radius);this._perObjectData.set(e,d);const l=yield this._updatingHandles.addPromise(this._addComponentGeometry(t,d,n,i,s,o,a));return this.setNeedsRender(),c(),l}));function r(t,r,n,i,s,o,a,c){return e.apply(this,arguments)}return r}(),n.addOrUpdateObject3D=function(){var e=t._asyncToGenerator((function*(e,t,r,n){if(this.destroyed)return void s.getLogger(this.declaredClass).warn("Attempt to add an object to a destroyed instance");const i=this._perObjectData.get(e);let o;i?.renderables.length>0&&this._perObjectDataEvictionCache.add(i);const a=e.boundingVolumeWorldSpace.bounds,c=new F(new Promise((e=>o=e)),y.getCenter(a),y.getRadius(a));this._perObjectData.set(e,c);const d=new Array;if(r.mergeGeometries&&e.geometries.length>1&&H(e))d.push(this._addObjectMergedGeometries(e,c,t,r,n));else for(let s=0;s<e.geometries.length;s++){const i=e.geometries[s];i.material.supportsEdges&&d.push(this._addGeometry(e,c,i,t[0],r,n))}yield this._updatingHandles.addPromise(Promise.all(d)),this._perObjectDataEvictionCache.delete(c),this._discardObjectEntry(i),this.setNeedsRender(),o()}));function r(t,r,n,i){return e.apply(this,arguments)}return r}(),n._discardObjectEntry=function(e){e&&(e.renderables.length&&(e.renderables.forEach((e=>this._removeRenderable(e))),this.setNeedsRender()),e.loaded=null)},n.hasObject=function(e){return this._perObjectData.has(e)},n.updateAllComponentOpacities=function(){var e=t._asyncToGenerator((function*(e,t){const r=yield this._updatingHandles.addPromise(this._getObjectEntry(e));if(a.isNone(r))return;const n=t instanceof Array?e=>t[e]:()=>t;r.renderables.forEach((e=>{const t=e.components.meta.length;for(let r=0;r<t;r++){const t=n(r),i=e.components.meta[r],s=i.index;i.material.opacity=t,e.components.buffer.textureBuffer.setDataElement(s,1,3,255*t)}this._updateTransparency(e)})),this.setNeedsRender()}));function r(t,r){return e.apply(this,arguments)}return r}(),n.getObjectMemoryUsage=function(){var e=t._asyncToGenerator((function*(e){const t=yield this._getObjectEntry(e);return a.isSome(t)?t.renderables.reduce(((e,t)=>e+t.statistics.gpuMemoryUsage),0):0}));function r(t){return e.apply(this,arguments)}return r}(),n.updateAllComponentMaterials=function(){var e=t._asyncToGenerator((function*(e,t,r,n){const i=e instanceof R.Object3D,s=!!r.hasSlicePlane,o=B.determineRendererType(t),c=A.EdgeRenderer.getKey(o,s,i),d=yield this._updatingHandles.addPromise(this._getObjectEntry(e));a.isNone(d)||(d.renderables.forEach((e=>{if(c!==e.rendererKey){const t=this._renderers.get(e.rendererKey),r=this._acquireRenderer(o,s,i);t.removeRenderable(e),--t.refCount,e.rendererKey=c,r.addRenderable(e)}for(let r=0;r<t.length;r++)e.components.meta[r].material=t[r];n&&this._updateComponentBuffer(e.components),this._updateTransparency(e)})),this.setNeedsRender())}));function r(t,r,n,i){return e.apply(this,arguments)}return r}(),n.updateAllVerticalOffsets=function(){var e=t._asyncToGenerator((function*(e,t){const r=yield this._updatingHandles.addPromise(this._getObjectEntry(e));a.isNone(r)||(r.renderables.forEach((e=>{const r=e.components.meta;for(let n=0;n<r.length;n++)e.components.meta[n].verticalOffset=t?.[n]??0;this._updateComponentBuffer(e.components)})),this.setNeedsRender())}));function r(t,r){return e.apply(this,arguments)}return r}(),n.updateObjectVisibility=function(){var e=t._asyncToGenerator((function*(e,t){const r=yield this._updatingHandles.addPromise(this._getObjectEntry(e));a.isSome(r)&&(r.renderables.forEach((e=>e.visible=t)),this.setNeedsRender())}));function r(t,r){return e.apply(this,arguments)}return r}(),n.removeObject=function(e){const t=this._perObjectData.get(e);t&&(this._perObjectData.delete(e),this._discardObjectEntry(t))},n._getObjectEntry=function(){var e=t._asyncToGenerator((function*(e){const t=this._perObjectData.get(e);if(!t)throw new Error("no object");return yield t.loaded,null==t.loaded?null:t}));function r(t){return e.apply(this,arguments)}return r}(),n.render=function(e,t){if(a.isNone(this._componentColorManager))return;this._localOrigins.updateViewMatrices(e.camera.viewMatrix);const r=e.camera.viewInverseTransposeMatrix,n=p.create(),i=new E.TwoVectorPosition;let s=0,o=0;if(this._renderers.forEach((r=>{if(0===r.refCount)this._renderers.delete(r.key),r.dispose();else{let n=!0,i=!0;r.forEachRenderable((t=>{t.visible&&(s+=t.statistics.averageEdgeLength,o++,n&&t.regular&&(r.updateTechnique(e,!1),n=!1),i&&t.silhouette&&(r.updateTechnique(e,!0),i=!1))}),t)}})),this._componentColorManager.garbageCollect(),this._componentColorManager.updateTextures(),0===o)return;const c=40*s/o,d=new P.EdgePassParameters(c,t);f.set(n,r[3],r[7],r[11]),i.set(n),f.copy(d.transformWorldFromViewTH,i.high),f.copy(d.transformWorldFromViewTL,i.low),u.fromMat4(d.transformViewFromCameraRelativeRS,e.camera.viewMatrix),u.transpose(ee,d.transformViewFromCameraRelativeRS),u.invert(d.transformNormalViewFromGlobal,ee),d.transformProjFromView=e.camera.projectionMatrix,this._updateObjectCameraDistances(e),this._renderers.forEach((t=>{this._renderRegularEdges(t,e,d),this._renderSilhouetteEdges(t,e,d)}))},n._updateTransparency=function(e){const t=B.determineEdgeTransparency(e.components.meta),r=B.determineObjectTransparency(e.components.meta);t===e.edgeTransparency&&r===e.objectTransparency||(e.edgeTransparency=t,e.objectTransparency=r,this._renderers.get(e.rendererKey).setRenderablesDirty())},n._computeModelTransformWithLocalOrigin=function(e,t,r){e.getCombinedStaticTransformation(t,r);const n=a.isSome(t.localOrigin)?this._localOrigins.register(t.localOrigin):this._localOrigins.acquire(f.set(this._tmpModelPosition,r[12],r[13],r[14]));return t.localOrigin=n.origin,v.applyToModelMatrix(n.origin.vec3,r),n},n._updateComponentBuffer=function(e){const{meta:t,buffer:r}=e,n=new Uint8Array(4);for(let i=0;i<t.length;i++){const e=t[i].material,s=t[i].index,a=o.clamp(Math.round(e.size*A.LINE_WIDTH_FRACTION_FACTOR),0,255),c=o.clamp(e.extensionLength,-A.EXTENSION_LENGTH_OFFSET,255-A.EXTENSION_LENGTH_OFFSET)+A.EXTENSION_LENGTH_OFFSET,d="solid"===e.type?C.EdgeType.SOLID:C.EdgeType.SKETCH,l=255*e.opacity,u=e.color,h=255*u[0],g=255*u[1],f=255*u[2],p=255*u[3];r.textureBuffer.setData(s,0,h,g,f,p),r.textureBuffer.setData(s,1,a,c,d,l),O.encodeElevationOffset(t[i].verticalOffset,n),r.textureBuffer.setData(s,2,n[0],n[1],n[2],n[3])}},n._createComponentBuffers=function(e){if(a.isNone(this._componentColorManager))return null;const t=new Array,r=this._componentColorManager.getBuffer(e.length);for(let i=0;i<e.length;i++){const n=e[i],s=r.acquireIndex();t.push({index:s,verticalOffset:0,material:n})}const n=new W(r,t);return this._updateComponentBuffer(n),n},n._extractEdges=function(e,t,r,n,i,s=i.length){return this._worker.process({data:t,indices:i,indicesLength:s,writerSettings:e,skipDeduplicate:r},this._workerAbort.signal,n)},n._createRenderable=function(e,t,r,n,i){const s=t=>a.isSome(this._verticesBufferObject)?new z(new S.VertexArrayObject(this.rctx,j.EdgeShaderAttributeLocations,{vertices:j.glVertexLayout,instances:t===k.EdgeSilhouette.REGULAR?M.RegularEdgeBufferWriter.glLayout:M.SilhouetteEdgeBufferWriter.glLayout},{vertices:this._verticesBufferObject,instances:N.BufferObject.createVertex(this.rctx,G.Usage.STATIC_DRAW,t===k.EdgeSilhouette.REGULAR?e.regular.instancesData.buffer:e.silhouette.instancesData.buffer)}),t===k.EdgeSilhouette.REGULAR?e.regular.lodInfo:e.silhouette.lodInfo):null,o=e.regular.lodInfo.lengths.length>0?s(k.EdgeSilhouette.REGULAR):null,c=e.silhouette.lodInfo.lengths.length>0?s(k.EdgeSilhouette.SILHOUETTE):null,d=(a.isSome(o)?o.vao.size:0)+(a.isSome(c)?c.vao.size:0);return new K(o,c,{gpuMemoryUsage:d,externalMemoryUsage:i,averageEdgeLength:e.averageEdgeLength},r,B.determineEdgeTransparency(t.meta),B.determineObjectTransparency(t.meta),t,n)},n._addGeometry=function(){var e=t._asyncToGenerator((function*(e,t,r,n,i,s){const o=r.vertexAttributes.get(x.VertexAttribute.POSITION),a=r.indices.get(x.VertexAttribute.POSITION),c=g.create(),d=this._computeModelTransformWithLocalOrigin(e,r,c),l=new $(o,a,c,d);return this._addPositionData(t,l,r.edgeIndicesLength,n,i,s)}));function r(t,r,n,i,s,o){return e.apply(this,arguments)}return r}(),n._addPositionData=function(){var e=t._asyncToGenerator((function*(e,t,r,n,i,s=!1){if(null==e.loaded)return;const o=this._createComponentBuffers([n]);if(a.isNone(o)||r<=0)return;const c=this._acquireRenderer(n.type,!!i.hasSlicePlane,!0),{modelTransform:d,origin:l}=t,u=t.indices,h=t.position,g=h.data.length/h.size,f=j.EdgeInputBufferLayout.createBuffer(g);for(let a=0;a<g;a++)f.position.set(a,0,h.data[a*h.size+0]),f.position.set(a,1,h.data[a*h.size+1]),f.position.set(a,2,h.data[a*h.size+2]);B.fillComponenBufferIndices(o.meta,[0,f.componentIndex.count],f.componentIndex);const p=yield this._updatingHandles.addPromise(this._extractEdges(c.writerSettings,f,!1,s,u,r));if(null==e.loaded)return;const m=this._createRenderable(p,o,new q(d,l),c.key,!1);e.renderables.push(m),c.addRenderable(m),this._gpuMemoryUsage+=m.statistics.gpuMemoryUsage}));function r(t,r,n,i,s){return e.apply(this,arguments)}return r}(),n._addComponentGeometry=function(){var e=t._asyncToGenerator((function*(e,t,r,n,i,s,o){if(null==t.loaded)return 0;const c=this._createComponentBuffers(s);if(a.isNone(c))return 0;const d=B.determineRendererType(s),l=this._acquireRenderer(d,o.hasSlicePlane||!1,!1),u=j.EdgeInputBufferLayout.createBuffer(r.count);_.copy(u.position,r),B.fillComponenBufferIndices(c.meta,i,u.componentIndex,n);const h=!0,g=l.writerSettings,f=yield this._updatingHandles.addPromise(this._extractEdges(g,u,h,!1,n));if(null==t.loaded)return 0;const p=this._createRenderable(f,c,e,l.key,!0);return t.renderables.push(p),l.addRenderable(p),p.statistics.gpuMemoryUsage}));function r(t,r,n,i,s,o,a){return e.apply(this,arguments)}return r}(),n._addObjectMergedGeometries=function(){var e=t._asyncToGenerator((function*(e,t,r,n,i){const s=new Map;let o=0,a=null,c=0;for(let g=0;g<e.geometries.length;g++){const t=e.geometries[g];if(!t.material.supportsEdges)continue;!a&&t.localOrigin&&(a=t);const r=t.vertexAttributes.get(x.VertexAttribute.POSITION);c+=r.data.length/r.size,o+=t.edgeIndicesLength}const d=c>=65536?Uint32Array:Uint16Array,l=o?new d(o):null,u=[];let h=0;for(let g=0;g<e.geometries.length;g++){const t=e.geometries[g];if(!t.material.supportsEdges)continue;const r=t.vertexAttributes.get(x.VertexAttribute.POSITION),n=t.indices.get(x.VertexAttribute.POSITION);let i=s.get(r.data);if(null==i){i=u.length/3;for(let e=0;e<r.data.length;e+=r.size)u.push(r.data[e+0]),u.push(r.data[e+1]),u.push(r.data[e+2]);s.set(r.data,i)}if(n)for(let e=0;e<t.edgeIndicesLength;e++)l[h++]=i+n[e]}const f=a||e.geometries[0],p=g.create(),m=this._computeModelTransformWithLocalOrigin(e,f,p);for(let g=0;g<e.geometries.length;g++)e.geometries[g].localOrigin=m.origin;const y=new $({data:u,size:3},l,p,m);yield this._updatingHandles.addPromise(this._addPositionData(t,y,l.length,r[0],n,i))}));function r(t,r,n,i,s){return e.apply(this,arguments)}return r}(),n._acquireRenderer=function(e,t,r){const n=A.EdgeRenderer.getKey(e,t,r);let i=this._renderers.get(n);return a.isNone(this._strokesTexture)&&(this._strokesTexture=V.generateStrokesTexture(this.rctx)),i||(i=new A.EdgeRenderer(this.rctx,this.techniqueRepository,{type:e,hasSlicePlane:t,strokesTexture:this._strokesTexture,legacy:r,spherical:this.viewingMode===b.ViewingMode.Global}),this._renderers.set(n,i)),++i.refCount,i},n._removeRenderable=function(e){U(e.regular),U(e.silhouette);const t=this._renderers.get(e.rendererKey);if(t){t.removeRenderable(e),--t.refCount,"origin"in e.transform&&this._localOrigins.release(e.transform.origin),this._gpuMemoryUsage-=e.statistics.externalMemoryUsage?0:e.statistics.gpuMemoryUsage;for(const t of e.components.meta)e.components.buffer.releaseIndex(t.index)}},n._updateObjectCameraDistances=function(e){const t=e.camera.eye,r=e.camera.viewForward,n=p.create(),i=e=>{f.sub(n,e.center,t);const i=f.dot(n,r),s=e.radius,o=i<-s?1/0:i<s?0:i-s;e.renderables.forEach((e=>e.distanceToCamera=o))};this._perObjectData.forEach(i),this._perObjectDataEvictionCache.forEach(i)},n._renderRegularEdges=function(e,t,r){const n=e.bindRegularEdges(r,t),i=r.transparency,s=t.camera.perScreenPixelRatio;e.forEachRenderable((i=>{if(!Q(i)||!i.visible)return;const o=Z(i.regular.lod.lengths,i.distanceToCamera,s);e.renderRegularEdges(n,i,r,t,o)}),i)},n._renderSilhouetteEdges=function(e,t,r){const n=e.bindSilhouetteEdges(r,t),i=r.transparency,s=t.camera.perScreenPixelRatio;e.forEachRenderable((i=>{if(!Y(i)||!i.visible)return;const o=Z(i.silhouette.lod.lengths,i.distanceToCamera,s);e.renderSilhouetteEdges(n,i,r,t,o)}),i)},t._createClass(r,[{key:"updating",get:function(){return this._updatingHandles.updating}},{key:"usedMemory",get:function(){return this._gpuMemoryUsage}},{key:"test",get:function(){return{hasRenderedPrimitives:e=>{let t=!1;const r=e.perScreenPixelRatio,n=(e,n)=>e.forEachRenderable((e=>{e.visible&&!t&&(Q(e)&&(t=Z(e.regular.lod.lengths,e.distanceToCamera,r)>0),!t&&Y(e)&&(t=Z(e.silhouette.lod.lengths,e.distanceToCamera,r)>0))}),n);return this._renderers.forEach((e=>{t||(n(e,I.Transparency.OPAQUE),n(e,I.Transparency.TRANSPARENT))})),t}}}}]),r}(n),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"rctx",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"renderSR",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"viewingMode",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"techniqueRepository",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"setNeedsRender",void 0),r.__decorate([c.property({constructOnly:!0})],e.EdgeView.prototype,"schedule",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"_updatingHandles",void 0),r.__decorate([c.property({readOnly:!0})],e.EdgeView.prototype,"updating",null),e.EdgeView=r.__decorate([l.subclass("esri.views.3d.webgl-engine.lib.edgeRendering.EdgeView")],e.EdgeView);let F=function(e,t,r){this.center=t,this.radius=r,this.renderables=new Array,this.loaded=e,this.loaded.then((()=>{null!=this.loaded&&(this.loaded=!0)}))},W=function(e,t){this.buffer=e,this.meta=t},z=function(e,t){this.vao=e,this.lod=t},q=function(e,t){this.modelMatrix=e,this.origin=t},K=function(e,t,r,n,i,s,o,a){this.regular=e,this.silhouette=t,this.statistics=r,this.transform=n,this.edgeTransparency=i,this.objectTransparency=s,this.components=o,this.rendererKey=a,this.distanceToCamera=0,this.visible=!0},X=function(e){function r(){return e.apply(this,arguments)||this}return t._inheritsLoose(r,e),r}(K);function Q(e){return a.isSome(e.regular)}let J=function(e){function r(){return e.apply(this,arguments)||this}return t._inheritsLoose(r,e),r}(K);function Y(e){return a.isSome(e.silhouette)}function Z(e,t,r){const n=t*r,s=i.binaryIndexOf(e,n,!0);return-1===s?n<e[0]?e.length:0:e.length-s}let $=function(e,t,r,n){this.position=e,this.indices=t,this.modelTransform=r,this.origin=n};const ee=h.create();e.LegacyTransform=q,e.RegularRenderable=X,e.Renderable=K,e.SilhouetteRenderable=J,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
