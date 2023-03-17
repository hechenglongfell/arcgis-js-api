/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/arrayUtils","../../../../core/Error","../../../../core/has","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/typedArrayUtil","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/quat","../../../../chunks/quatf32","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/ellipsoidUtils","../../../../geometry/projection","../../../../geometry/SpatialReference","../../../../geometry/spatialReferenceEllipsoidUtils","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../../../rest/support/Query","./I3SBinaryReader","./I3SProjectionUtil","../support/edgeUtils","../support/symbolColorUtils","../../support/orientedBoundingBox","../../webgl-engine/lib/Attribute"],(function(e,t,r,n,o,a,i,s,c,l,u,f,p,h,d,y,m,b,g,S,M,w,I,T,R,E,v,x,C,P){"use strict";function k(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function N(e){if(a("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function q(t,r,n,o){n.traverse(r,(r=>{const n=r.mbs;return(null!=n&&O(t,n))!==e.MbsIntersectResult.OUTSIDE&&(o(r),!0)}))}function A(e,t,r){let n=0,o=0;for(let a=0;a<t.length&&n<e.length;a++)e[n]===t[a]&&(r(a)&&(e[o]=e[n],o++),n++);e.length=o}function F(e,t,r){let o=0,a=0;for(;o<r.length;){n.binaryIndexOf(e,r[o])>=0===t&&(r[a]=r[o],a++),o++}r.length=a}const U=w.create();function W(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return U[0]=(e[0]-t.position[0])/t.rotationScale[0],U[1]=(e[1]-t.position[1])/t.rotationScale[4],U[2]=(e[2]-t.position[0])/t.rotationScale[0],U[3]=(e[3]-t.position[1])/t.rotationScale[4],U}var j;function O(t,r){const n=r[0],o=r[1],a=r[3],i=t[0]-n,s=n-t[2],c=t[1]-o,l=o-t[3],u=Math.max(i,s,0),f=Math.max(c,l,0),p=u*u+f*f;if(p>a*a)return e.MbsIntersectResult.OUTSIDE;if(p>0)return e.MbsIntersectResult.INTERSECTS_CENTER_OUTSIDE;return-Math.max(i,s,c,l)>a?e.MbsIntersectResult.INSIDE:e.MbsIntersectResult.INTERSECTS_CENTER_INSIDE}function z(e,t,r){const n=[],o=r&&r.missingFields,a=r&&r.originalFields;for(const i of e){const e=i.toLowerCase();let r=!1;for(const o of t)if(e===o.name.toLowerCase()){n.push(o.name),r=!0,a&&a.push(i);break}!r&&o&&o.push(i)}return n}function B(e,t,r,n,o){return L.apply(this,arguments)}function L(){return(L=t._asyncToGenerator((function*(e,t,r,n,a){if(0===t.length)return[];const s=e.attributeStorageInfo;if(i.isSome(e.associatedLayer))try{return yield D(e.associatedLayer,t,r,n)}catch(c){if(e.associatedLayer.loaded)throw c}if(s){const c=_(t,r,a);if(i.isNone(c))throw new o("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const l=e.parsedUrl.path;return(yield Promise.all(c.map((e=>K(l,s,e.node,e.indices,n).then((t=>{for(let r=0;r<e.graphics.length;r++){const n=e.graphics[r],o=t[r];if(n.attributes)for(const e in n.attributes)e in o||(o[e]=n.attributes[e]);n.attributes=o}return e.graphics})))))).flat()}throw new o("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}))).apply(this,arguments)}function _(e,t,r){const n=new Map,o=[],a=r();for(const i of e){const e=i.attributes[t];for(let t=0;t<a.length;t++){const r=a[t],s=r.featureIds.indexOf(e);if(s>=0){let e=n.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},o.push(e),n.set(r.node,e)),e.indices.push(s),e.graphics.push(i);for(let r=t;r>0;r--)a[r]=a[r-1];a[0]=r;break}}}return o}function D(e,t,r,n){return V.apply(this,arguments)}function V(){return(V=t._asyncToGenerator((function*(e,t,r,n){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const o=t.map((e=>e.attributes[r])),a=[],i=z(n,e.fields,{originalFields:a}),s=yield G(e,o,i);for(let c=0;c<t.length;c++){const e=t[c],r=s[c],n={};if(e.attributes)for(const t in e.attributes)n[t]=e.attributes[t];for(let t=0;t<a.length;t++)n[a[t]]=r[i[t]];e.attributes=n}return t}))).apply(this,arguments)}function G(e,t,r){const a=e.capabilities.query.maxRecordCount;if(null!=a&&t.length>a){const o=n.splitIntoChunks(t,a);return Promise.all(o.map((t=>G(e,t,r)))).then((e=>e.flat()))}const i=new T({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(i).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new o("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function K(e,t,r,n,o){return Q(e,t,r.resources.attributes,n,o)}function Q(e,t,n,o,a){const i=[];for(const r of t)if(r&&a.includes(r.name)){const t=`${e}/nodes/${n}/attributes/${r.key}/0`;i.push({url:t,storageInfo:r})}return s.eachAlways(i.map((e=>r(e.url,{responseType:"array-buffer"}).then((t=>R.readBinaryAttribute(e.storageInfo,t.data)))))).then((e=>{const t=[];for(const r of o){const n={};for(let t=0;t<e.length;t++){const o=e[t].value;null!=o&&(n[i[t].storageInfo.name]=Z(o,r))}t.push(n)}return t}))}e.MbsIntersectResult=void 0,(j=e.MbsIntersectResult||(e.MbsIntersectResult={}))[j.OUTSIDE=0]="OUTSIDE",j[j.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",j[j.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",j[j.INSIDE=3]="INSIDE";const $=-32768,H=-(2**31);function Z(e,t){if(!e)return null;const r=e[t];if(c.isInt16Array(e))return r===$?null:r;if(c.isInt32Array(e))return r===H?null:r;return r!=r?null:r}function J(e){const t=e.store,r=t.indexCRS||t.geographicCRS,n=void 0===r?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=r?new S(k(r)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function X(e){const t=e.store,r=t.vertexCRS||t.projectedCRS,n=void 0===r?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=r?new S(k(r)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function Y(e,t){return i.isNone(t)?"@null":t===M.getSphericalPCPF(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function ee(e,t,r){if(!g.canProjectWithoutEngine(e,t))throw new o("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!re(e,t))throw new o("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function te(e,t,r){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!r.isEmpty||i.applySome(e.associatedLayer,(e=>e.url))!==i.applySome(t.associatedLayer,(e=>e.url)))throw new o("layerview:recycle-failed")}function re(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function ne(e,t,r){const n=J(e),o=X(e);ee(n,t,r),ee(o,t,r)}function oe(e){return(null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position))}function ae(e){if(null==e.store||null==e.store.defaultGeometrySchema||!oe(e.store.defaultGeometrySchema))throw new o("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function ie(e,t){ne(e,t.spatialReference,t.viewingMode)}function se(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position)))}function ce(e){if(null==e.store||null==e.store.defaultGeometrySchema||!se(e.store.defaultGeometrySchema))throw new o("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function le(e,t){ee(e.spatialReference,t.spatialReference,t.viewingMode)}function ue(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function fe(e){return"mesh-3d"===e.type}function pe(e){if(null==e||!ue(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!fe(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||i.isNone(e.material)||i.isNone(e.material.color)||"replace"!==e.material.colorMixMode)return!0}return!1}const he=v.createSolidEdgeMaterial({color:[0,0,0,0],opacity:0});let de=function(){this.edgeMaterial=null,this.material=null,this.castShadows=!0};function ye(e){const t=new de;let r=!1,n=!1;for(const o of e.symbolLayers.items)if("fill"===o.type&&o.enabled){const e=o.material,a=o.edges;if(i.isSome(e)&&!r){const n=e.color,a=x.parseColorMixMode(e.colorMixMode);i.isSome(n)?t.material={color:[n.r/255,n.g/255,n.b/255],alpha:n.a,colorMixMode:a}:t.material={color:[1,1,1],alpha:1,colorMixMode:x.ColorMixModeEnum.Multiply},t.castShadows=o.castShadows,r=!0}i.isSome(a)&&!n&&(t.edgeMaterial=v.createMaterialFromEdges(a,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:x.ColorMixModeEnum.Multiply}),t}function me(e,t){return(0|e)+(0|t)|0}function be(e,t,r,n,o=0){n===M.getSphericalPCPF(n)?t.isGeographic?xe(e,r,t,o):ve(e,r,t,o):t.isWGS84&&(n.isWebMercator||I.isPlateCarree(n))?ge(t,e,n,r,o):t.isWebMercator&&I.isPlateCarree(n)?Re(t,e,n,r,o):e===r?(r.center[2]+=o,g.projectBuffer(r.center,t,0,r.center,n,0,1)):(y.set(r.center,e.center[0],e.center[1],e.center[2]+o),g.projectBuffer(r.center,t,0,r.center,n,0,1),h.copy(r.quaternion,e.quaternion),y.copy(r.halfSize,e.halfSize))}function ge(e,t,r,n,o){y.copy(Ie,t.center),Ie[2]+=o;const a=M.getSphericalPCPF(r);g.projectBuffer(Ie,e,0,Ie,a,0,1),Ee(a,t,Ie,r,n)}const Se=new Array(24),Me=new P.Attribute(Se,3,!0),we=m.create(),Ie=m.create(),Te=u.create();function Re(e,t,r,n,o){y.copy(Ie,t.center),Ie[2]+=o,Ee(e,t,Ie,r,n)}function Ee(e,t,r,n,o){const a=l.fromQuat(Te,t.quaternion);for(let i=0;i<8;++i){for(let e=0;e<3;++e)we[e]=t.halfSize[e]*(0!=(i&1<<e)?-1:1);for(let e=0;e<3;++e){let t=r[e];for(let r=0;r<3;++r)t+=we[r]*a[3*r+e];Se[3*i+e]=t}}g.projectBuffer(Se,e,0,Se,n,0,8),C.compute(Me,o)}function ve(e,t,r,n){C.corners(e,Ue),y.set(t.center,e.center[0],e.center[1],e.center[2]+n),g.computeTranslationToOriginAndRotation(r,t.center,Ae,M.getSphericalPCPF(r)),y.set(t.center,Ae[12],Ae[13],Ae[14]);const o=2*Math.sqrt(1+Ae[0]+Ae[5]+Ae[10]);Fe[0]=(Ae[6]-Ae[9])/o,Fe[1]=(Ae[8]-Ae[2])/o,Fe[2]=(Ae[1]-Ae[4])/o,Fe[3]=.25*o,h.multiply(t.quaternion,Fe,e.quaternion),h.conjugate(Fe,t.quaternion);let a=0,i=0,s=0;for(const c of Ue)c[2]+=n,g.projectBuffer(c,r,0,c,M.getSphericalPCPF(r),0,1),y.sub(ze,c,t.center),y.transformQuat(ze,ze,Fe),a=Math.max(a,Math.abs(ze[0])),i=Math.max(i,Math.abs(ze[1])),s=Math.max(s,Math.abs(ze[2]));y.set(t.halfSize,a,i,s)}function xe(e,t,r,n){const o=b.getReferenceEllipsoid(r),a=1+Math.max(0,n)/(o.radius+e.center[2]);y.set(t.center,e.center[0],e.center[1],e.center[2]+n),g.projectBuffer(t.center,r,0,t.center,M.getSphericalPCPF(r),0,1),h.copy(t.quaternion,e.quaternion),h.conjugate(Fe,e.quaternion),y.set(ze,0,0,1),y.transformQuat(ze,ze,Fe),y.set(ze,e.halfSize[0]*Math.abs(ze[0]),e.halfSize[1]*Math.abs(ze[1]),e.halfSize[2]*Math.abs(ze[2])),y.scale(ze,ze,o.inverseFlattening),y.add(t.halfSize,e.halfSize,ze),y.scale(t.halfSize,t.halfSize,a)}function Ce(e,t,r,n,o,a){if(!a||0===a.length||i.isNone(t)||!e.mbs)return null;const s=E.computeGlobalTransformation(e.mbs,o,r,t);f.invert(Le,s);let c=null;const l=()=>{if(!c)if(c=Ue,w.empty(je),i.isSome(e.serviceObb)){be(e.serviceObb,r,Oe,t,o),C.corners(Oe,c);for(const e of c)y.transformMat4(e,e,Le),w.expandPointInPlace(je,e)}else{const n=e.mbs;if(!n)return;const a=n[3];g.projectVectorToVector(n,r,ze,t),y.transformMat4(ze,ze,Le),ze[2]+=o;for(let e=0;e<8;++e){const t=1&e?a:-a,r=2&e?a:-a,n=4&e?a:-a,o=c[e];y.copy(o,[ze[0]+t,ze[1]+r,ze[2]+n]),w.expandPointInPlace(je,o)}}};let u=1/0,p=-1/0;const h=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r?.hasZ)return;w.empty(We);const o=r.spatialReference||n,a=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>(g.projectVectorToVector(r,o,ze,t),y.transformMat4(ze,ze,Le),w.expandPointInPlace(We,ze),Math.min(ze[2],e))),e)),1/0);l(),w.intersects(je,We)&&(u=Math.min(u,a),p=Math.max(p,a))};if(a.forEach((e=>h(e))),u===1/0)return null;const d=(e,t,r)=>{y.transformMat4(ze,r,s),e[t+0]=ze[0],e[t+1]=ze[1],e[t+2]=ze[2],t+=24,r[2]=u,y.transformMat4(ze,r,s),e[t+0]=ze[0],e[t+1]=ze[1],e[t+2]=ze[2],t+=24,r[2]=p,y.transformMat4(ze,r,s),e[t+0]=ze[0],e[t+1]=ze[1],e[t+2]=ze[2]};for(let i=0;i<8;++i)d(Be.data,3*i,c[i]);return C.compute(Be)}function Pe(e){return i.isSome(e)&&e.halfSize[0]>=0}function ke(e){return e[3]>=0}function Ne(e){i.isSome(e)&&(e.halfSize[0]=-1)}function qe(e){i.isSome(e)&&(e[3]=-1)}const Ae=p.create(),Fe=d.create(),Ue=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],We=w.create(),je=w.create(),Oe=C.create(),ze=m.create(),Be={data:new Array(72),size:3,exclusive:!0,stride:3},Le=p.create();e.SymbolInfo=de,e.addWraparound=me,e.checkPointCloudLayerCompatibleWithView=le,e.checkPointCloudLayerValid=ce,e.checkRecyclable=te,e.checkSceneLayerCompatibleWithView=ie,e.checkSceneLayerValid=ae,e.checkSpatialReference=ee,e.checkSpatialReferences=ne,e.computeVisibilityObb=Ce,e.containsDraco=N,e.extractWkid=k,e.filterInPlace=A,e.findFieldsCaseInsensitive=z,e.findIntersectingNodes=q,e.getCacheKeySuffix=Y,e.getCachedAttributeValue=Z,e.getClipRect=W,e.getIndexCrs=J,e.getSymbolInfo=ye,e.getVertexCrs=X,e.intersectBoundingRectWithMbs=O,e.invalidateMbs=qe,e.invalidateObb=Ne,e.isSupportedLocalModeProjection=re,e.isValidMbs=ke,e.isValidObb=Pe,e.objectIdFilter=F,e.queryAttributesFromCachedAttributesId=Q,e.rendererNeedsTextures=pe,e.transformObb=be,e.transparentEdgeMaterial=he,e.whenGraphicAttributes=B,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
