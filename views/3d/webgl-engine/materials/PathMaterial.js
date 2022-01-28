/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/mathUtils","../../../../core/maybe","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/buffer/BufferView","../../support/buffer/InterleavedLayout","../lib/geometryDataUtils","../lib/GLMaterial","../lib/Material","../lib/PathGeometry","../lib/Util","./PathTechnique","./VisualVariableMaterialParameters","./internal/bufferWriterUtils","./internal/MaterialUtil"],(function(e,t,i,r,a,n,s,u,o,c,l,h,f,p,d,b){"use strict";const m=h.assert;let v=function(e){function n(t){var i;return(i=e.call(this,t,S)||this).supportsEdges=!0,i._vertexAttributeLocations=f.pathVertexAttributeLocations,i.techniqueConfig=new f.PathTechniqueConfiguration,i.vertexBufferLayout=n.getVertexBufferLayout(i.parameters),i}t._inheritsLoose(n,e);var o=n.prototype;return o.getTechniqueConfig=function(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,0!==e&&7!==e||(this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows,this.techniqueConfig.receiveSSAO=!!t.ssaoEnabled&&this.parameters.receiveSSAO),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig},o.getPassParameters=function(){return this.parameters},o.isVisibleInPass=function(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows},o.isVisible=function(){const t=this.parameters;return!!e.prototype.isVisible.call(this)&&t.opacity>0},o.intersect=function(e,t,n,s,u,o,c){const h=e;if(!l.isPathGeometry(h))return;const f=h.path,p=[this.parameters.size[0],this.parameters.size[1]];if(this.parameters.vvSizeEnabled){const e=this.parameters.vvSizeOffset,t=this.parameters.vvSizeFactor,r=this.parameters.vvSizeMinSize,a=this.parameters.vvSizeMaxSize,n=f.sizeAttributeValue;p[0]*=i.clamp(e[0]+n*t[0],r[0],a[0]),p[1]*=i.clamp(e[2]+n*t[2],r[2],a[2])}const d=Math.max(p[0],p[1]),m=e.boundingInfo;if(r.isNone(m))return void this._intersectTriangles(f,p,u,o,c);const v=a.fromValues(m.bbMin[0]-d,m.bbMin[1]-d,m.bbMin[2]-d,m.bbMax[0]+d,m.bbMax[1]+d,m.bbMax[2]+d),g=[o[0]-u[0],o[1]-u[1],o[2]-u[2]],S=Math.sqrt(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]),y=[S/g[0],S/g[1],S/g[2]];b.intersectAabbInvDir(v,u,y,s.tolerance)&&this._intersectTriangles(f,p,u,o,c)},o._intersectTriangles=function(e,t,i,r,a){e.baked.size&&e.baked.size[0]===t[0]&&e.baked.size[1]===t[1]||e.baked.bake(t),e.baked.intersect(i,r,a)},o.computeAttachmentOrigin=function(e,t){const i=e.vertexAttributes;if(!i)return null;const r=i.get("position");return u.computeAttachmentOriginLines(r,null,!1,t)},o.createBufferWriter=function(){return new y(this.vertexBufferLayout)},o.requiresSlot=function(e){return e===(this.parameters.transparent?4:2)||20===e},o.createGLMaterial=function(e){return 0===e.output||7===e.output||1===e.output||2===e.output||4===e.output||3===e.output&&this.parameters.castShadows?new g(e):null},n.getVertexBufferLayout=function(e){let t=s.newLayout().vec3f("position").vec4f("profileRight").vec4f("profileUp").vec4f("profileVertexAndNormal");return(e.vvColorEnabled||e.vvSizeEnabled||e.vvOpacityEnabled)&&(t=t.vec4f("featureValue")),t},n}(c.Material),g=function(e){function i(){return e.apply(this,arguments)||this}t._inheritsLoose(i,e);var a=i.prototype;return a.updateParameters=function(e){return this.ensureTechnique(f.PathTechnique,e)},a._updateOccludeeState=function(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})},a._updateShadowState=function(e){(r.isNone(this.technique)||e.shadowMappingEnabled!==this.technique.configuration.receiveShadows)&&this._material.setParameters({receiveShadows:e.shadowMappingEnabled})},a.beginSlot=function(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)},a.bind=function(e,t){t.bindPass(this._material.getPassParameters(),e)},i}(o);const S={size:[1,1,1],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],specular:[0,0,0],opacity:1,doubleSided:!1,doubleSidedType:"normal",receiveSSAO:!0,receiveShadows:!1,castShadows:!0,slicePlaneEnabled:!1,transparent:!1,sceneHasOcludees:!1,...p.Default,...c.materialParametersDefaults};let y=function(){function e(e){this.vertexBufferLayout=e}var t=e.prototype;return t.allocate=function(e){return this.vertexBufferLayout.createBuffer(e)},t.elementCount=function(e){return e.indices.get("position").length},t.write=function(e,t,i,r){const a=e=>{if(t.vertexAttributes.has(e)){const a=t.vertexAttributes.get(e),s=t.indices.get(e);m(4===a.size);const u=i.getField(e,n.BufferViewVec4f);if(!u)throw new Error("unable to acquire view for "+e);d.writeBufferVec4(s,a.data,u,r)}};a("profileRight"),a("profileUp"),a("profileVertexAndNormal"),this.vertexBufferLayout.hasField("featureValue")&&a("featureValue"),d.writeDefaultAttributes(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)},e}();e.PathMaterial=v,Object.defineProperty(e,"__esModule",{value:!0})}));
