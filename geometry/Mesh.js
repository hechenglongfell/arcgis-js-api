/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/HandleOwner","../core/Loadable","../core/Logger","../core/maybe","../core/Promise","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","../chunks/vec3f64","./Extent","./Geometry","./Point","./Polygon","./support/axisAngleDegrees","./support/MeshComponent","./support/MeshTransform","./support/MeshVertexAttributes","./support/triangulationUtils","./support/meshUtils/centerAt","./support/meshUtils/loadExternal","./support/meshUtils/offset","./support/meshUtils/primitives","./support/meshUtils/rotate","./support/meshUtils/scale"],(function(e,t,n,r,o,s,i,a,c,l,p,u,h,m,d,f,x,g,y,b,v,w,_,A,P,M,S,L,z,C,U){"use strict";var R;const F="esri.geometry.Mesh";let O=R=function(n){function o(e){var t;return(t=n.call(this,e)||this).components=null,t.transform=null,t.external=null,t.hasZ=!0,t.hasM=!1,t.vertexAttributes=new A.MeshVertexAttributes,t.type="mesh",t}t._inheritsLoose(o,n);var s=o.prototype;return s.initialize=function(){(a.isNone(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add(p.watch((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._set("external",null)),{once:!0,sync:!0}))}))},s.addComponent=function(e){this.loaded?(this.components||(this.components=[]),this.components.push(w.from(e)),this.notifyChange("components")):i.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")},s.removeComponent=function(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}i.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else i.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")},s.rotate=function(e,t,n,r){return v.fromAxisAndAngle(G.x,e,E),v.fromAxisAndAngle(G.y,t,T),v.fromAxisAndAngle(G.z,n,j),v.compose(E,T,E),v.compose(E,j,E),C.rotate(this,E,r),this},s.offset=function(e,t,n,r){return this.loaded?(k[0]=e,k[1]=t,k[2]=n,L.offset(this,k,r),this):(i.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)},s.scale=function(e,t){return this.loaded?(U.scale(this,e,t),this):(i.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)},s.centerAt=function(e,t){return this.loaded?(M.centerAt(this,e,t),this):(i.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)},s.load=function(e){return a.isSome(this.external)&&this.addResolvingPromise(S.loadExternal(this,this.external.source,e)),Promise.resolve(this)},s.updateExternalSource=function(e){this._set("external",e)},s.clone=function(){let e=null;if(this.components){const t=new Map,n=new Map;e=this.components.map((e=>e.cloneWithDeduplication(t,n)))}const t={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:a.isSome(this.transform)?this.transform.clone():null,external:a.isSome(this.external)?{source:this.external.source,extent:a.isSome(this.external.extent)?this.external.extent.clone():null}:null};return new R(t)},s.vertexAttributesChanged=function(){this.notifyChange("vertexAttributes")},s.toBinaryGLTF=function(){var n=t._asyncToGenerator((function*(t){const n=new Promise(((t,n)=>e(["./support/meshUtils/exporters/gltf/gltfexport"],t,n))),r=this.load(),o=yield Promise.all([n,r]),{toBinaryGLTF:s}=o[0];return s(this,t)}));function r(e){return n.apply(this,arguments)}return r}(),o.createBox=function(e,t){if(!(e instanceof y))return i.getLogger(F).error(".createBox()","expected location to be a Point instance"),null;const n=new R(z.convertUnitGeometry(z.createUnitSizeBox(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?z.extractSingleFaceOfBox(n,t.imageFace):n},o.createSphere=function(e,t){return e instanceof y?new R(z.convertUnitGeometry(z.createUnitSizeSphere(t&&t.densificationFactor||0),e,t)):(i.getLogger(F).error(".createSphere()","expected location to be a Point instance"),null)},o.createCylinder=function(e,t){return e instanceof y?new R(z.convertUnitGeometry(z.createUnitSizeCylinder(t&&t.densificationFactor||0),e,t)):(i.getLogger(F).error(".createCylinder()","expected location to be a Point instance"),null)},o.createPlane=function(e,t){if(!(e instanceof y))return i.getLogger(F).error(".createPlane()","expected location to be a Point instance"),null;const n=t?.facing??"up",r=z.convertPlaneSizeParameter(n,t?.size);return new R(z.convertUnitGeometry(z.createUnitSizePlane(n),e,{...t,size:r}))},o.createFromPolygon=function(e,t){if(!(e instanceof b))return i.getLogger(F).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=P.triangulate(e);return new R({vertexAttributes:new A.MeshVertexAttributes({position:n.position}),components:[new w({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference})},o.createFromGLTF=function(){var n=t._asyncToGenerator((function*(t,n,o){if(!(t instanceof y))throw i.getLogger(F).error(".createfromGLTF()","expected location to be a Point instance"),new r("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:s}=yield l.whenOrAbort(new Promise(((t,n)=>e(["./support/meshUtils/loadGLTFMesh"],t,n))),o);return new R(yield s(t,n,o))}));function o(e,t,r){return n.apply(this,arguments)}return o}(),o.createWithExternalSource=function(e,t,n){const r=n?.extent??null,o=n?.transform?.clone()??new _;o.origin=[e.x,e.y,e.z??0];const s=e.spatialReference;return new R({external:{source:t,extent:r},transform:o,spatialReference:s})},o.createIncomplete=function(e,t){const n=t?.transform?.clone()??new _;n.origin=[e.x,e.y,e.z??0];const o=e.spatialReference,s=new R({transform:n,spatialReference:o});return s.addResolvingPromise(Promise.reject(new r("mesh-incomplete","Mesh resources are not complete"))),s},t._createClass(o,[{key:"hasExtent",get:function(){return!this.loaded&&a.isSome(this.external)&&a.isSome(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}},{key:"_boundingInfo",get:function(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return{extent:new x({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new y({x:0,y:0,z:0,spatialReference:t})};const n=a.isSome(this.transform)?this.transform.project(e,t):e;let r=1/0,o=1/0,s=1/0,i=-1/0,c=-1/0,l=-1/0,p=0,u=0,h=0;const m=n.length,d=1/(m/3);let f=0;for(;f<m;){const e=n[f++],t=n[f++],a=n[f++];r=Math.min(r,e),o=Math.min(o,t),s=Math.min(s,a),i=Math.max(i,e),c=Math.max(c,t),l=Math.max(l,a),p+=d*e,u+=d*t,h+=d*a}return{extent:new x({xmin:r,ymin:o,zmin:s,xmax:i,ymax:c,zmax:l,spatialReference:t}),center:new y({x:p,y:u,z:h,spatialReference:t})}}},{key:"anchor",get:function(){if(a.isSome(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new y({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}},{key:"origin",get:function(){return a.isSome(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}},{key:"extent",get:function(){return!this.loaded&&a.isSome(this.external)&&a.isSome(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}}]),o}(o.HandleOwnerMixin(s.LoadableMixin(c.EsriPromiseMixin(g))));n.__decorate([u.property({type:[w],json:{write:!0}})],O.prototype,"components",void 0),n.__decorate([u.property({type:_,json:{write:!0}})],O.prototype,"transform",void 0),n.__decorate([u.property({constructOnly:!0})],O.prototype,"external",void 0),n.__decorate([u.property({readOnly:!0})],O.prototype,"hasExtent",null),n.__decorate([u.property({readOnly:!0})],O.prototype,"_boundingInfo",null),n.__decorate([u.property({readOnly:!0})],O.prototype,"anchor",null),n.__decorate([u.property({readOnly:!0})],O.prototype,"origin",null),n.__decorate([u.property({readOnly:!0,json:{read:!1}})],O.prototype,"extent",null),n.__decorate([u.property({readOnly:!0,json:{read:!1,write:!0,default:!0}})],O.prototype,"hasZ",void 0),n.__decorate([u.property({readOnly:!0,json:{read:!1,write:!0,default:!1}})],O.prototype,"hasM",void 0),n.__decorate([u.property({type:A.MeshVertexAttributes,nonNullable:!0,json:{write:!0}})],O.prototype,"vertexAttributes",void 0),O=R=n.__decorate([d.subclass(F)],O);const G={x:f.fromValues(1,0,0),y:f.fromValues(0,1,0),z:f.fromValues(0,0,1)},E=v.create(),T=v.create(),j=v.create(),k=f.create();return O}));
