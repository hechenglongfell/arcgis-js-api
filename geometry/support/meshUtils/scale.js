/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../../../core/maybe","../../../chunks/vec3","../../../chunks/vec3f64","../../projection","../../projectionEllipsoid","./geographicUtils","./projection"],(function(e,t,r,o,i,n,s,c,a){"use strict";const l=t.getLogger("esri.geometry.support.meshUtils.scale");function p(e,t,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if(r.isSome(e.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==e.transform.geographic&&l.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const r=null!=(n=null==o?void 0:o.origin)?n:e.transform.getOriginPoint(i);g(e.transform,t,r)}else{const r=c.isGeographicMesh(e.spatialReference,o),i=o&&o.origin||e.origin;r?f(e,t,i):u(e,t,i)}}function g(e,t,r){const n=o.set(h,r.x,r.y,r.z),s=o.subtract(h,n,e.origin);e.applyLocalInverse(s,P);const c=o.scale(i.create(),e.scale,t);e.scale=c,e.applyLocalInverse(s,s),o.subtract(s,s,P),e.translation=o.add(i.create(),e.translation,s)}function f(e,t,o){const i=e.spatialReference,c=s.getSphericalPCPF(i),l=d;n.projectPointToVector(o,l,c)||n.projectPointToVector(e.origin,l,c);const p=e.vertexAttributes.position,g=e.vertexAttributes.normal,f=e.vertexAttributes.tangent,u=new Float64Array(p.length),h=r.isSome(g)?new Float32Array(g.length):null,P=r.isSome(f)?new Float32Array(f.length):null;a.projectToPCPF(p,i,u),r.isSome(g)&&a.projectNormalToPCPF(g,p,u,i,h),r.isSome(f)&&a.projectTangentToPCPF(f,p,u,i,P),m(u,t,l),a.projectFromPCPF(u,p,i),r.isSome(g)&&a.projectNormalFromPCPF(h,p,u,i,g),r.isSome(f)&&a.projectTangentFromPCPF(P,p,u,i,f),e.vertexAttributesChanged()}function u(e,t,r){const o=d;if(!n.projectPointToVector(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,l.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}m(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function m(e,t,r=i.ZEROS){if(e)for(let i=0;i<e.length;i+=3){for(let t=0;t<3;t++)h[t]=e[i+t]-r[t];o.scale(h,h,t);for(let t=0;t<3;t++)e[i+t]=h[t]+r[t]}}const h=i.create(),P=i.create(),d=i.create();e.scale=p,Object.defineProperty(e,"__esModule",{value:!0})}));
