/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/quantityUtils","../../core/unitUtils","../../chunks/vec3","../../chunks/vec3f64","../../geometry/projection","../../geometry/support/spatialReferenceUtils","./measurementUtils"],(function(e,t,n,i,r,c,a,o,l){"use strict";var u;function s(e){return h(e,u.Direct)}function f(e){return h(e,u.Horizontal)}function h(e,r){const{hasZ:c,spatialReference:a}=e,o=l.computeEuclideanMeasurementSR(a);let s=0;const f=i.lengthUnitFromSpatialReference(o);if(t.isNone(f))return null;const h=r===u.Direct?v:D;for(const n of e.paths){if(n.length<2)continue;const e=n.length-1;for(let i=0;i<e;++i){const e=n[i];x[0]=e[0],x[1]=e[1],x[2]=c?e[2]:0;const r=n[i+1];Z[0]=r[0],Z[1]=r[1],Z[2]=c?r[2]:0;const o=h(x,Z,a);if(t.isNone(o))return null;s+=o.value}}return n.createLength(s,f)}function d(e,t){const{spatialReference:n}=e;return o.equals(n,t.spatialReference)?(x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,Z[0]=t.x,Z[1]=t.y,Z[2]=t.hasZ?t.z:0,S(x,Z,n)):null}function g(e,t){const{spatialReference:n}=e;return o.equals(n,t.spatialReference)?(x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,Z[0]=t.x,Z[1]=t.y,Z[2]=t.hasZ?t.z:0,v(x,Z,n)):null}function p(e,t){const{spatialReference:n}=e;return o.equals(n,t.spatialReference)?(x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,Z[0]=t.x,Z[1]=t.y,Z[2]=t.hasZ?t.z:0,D(x,Z,n)):null}function z(e,t){const{spatialReference:n}=e;return o.equals(n,t.spatialReference)?(x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,Z[0]=t.x,Z[1]=t.y,Z[2]=t.hasZ?t.z:0,y(x,Z,n)):null}function m(e){return x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,L(x,e.spatialReference)}function S(e,i,r){const c=V(e,i,r);return t.isSome(c)?{direct:n.createLength(c.direct,c.unit),horizontal:n.createLength(c.horizontal,c.unit),vertical:n.createLength(c.vertical,c.unit)}:null}function v(e,i,r){const c=V(e,i,r,u.Direct);return t.isSome(c)?n.createLength(c.direct,c.unit):null}function D(e,i,r){const c=V(e,i,r,u.Horizontal);return t.isSome(c)?n.createLength(c.horizontal,c.unit):null}function R(e,i,r){const c=V(e,i,r,u.Vertical);return t.isSome(c)?n.createLength(Math.abs(c.verticalSigned),c.unit):null}function y(e,i,r){const c=V(e,i,r,u.Vertical);return t.isSome(c)?n.createLength(c.verticalSigned,c.unit):null}function L(e,r){const c=i.verticalLengthUnitFromSpatialReference(r);return t.isSome(c)?n.createLength(e[2],c):null}function V(e,n,c,o){const s=l.computeEuclideanMeasurementSR(c),f=i.lengthUnitFromSpatialReference(s);if(t.isNone(f))return null;const h=n[2]-e[2];if(o===u.Vertical)return{verticalSigned:h,unit:f};if(!a.projectVectorToVector(e,c,H,s)||!a.projectVectorToVector(n,c,U,s))return null;if(o===u.Direct){return{direct:r.distance(U,H),unit:f}}if(r.set(P,e[0],e[1],n[2]),!a.projectVectorToVector(P,c,P,s))return null;const d=r.distance(P,U);if(o===u.Horizontal)return{horizontal:d,unit:f};return{direct:r.distance(U,H),horizontal:d,vertical:Math.abs(h),unit:f}}!function(e){e[e.Direct=0]="Direct",e[e.Horizontal=1]="Horizontal",e[e.Vertical=2]="Vertical"}(u||(u={}));const x=c.create(),Z=c.create(),H=c.create(),U=c.create(),P=c.create();e.elevation=L,e.elevationOfPoint=m,e.euclideanDirectDistance=v,e.euclideanDirectDistanceBetweenPoints=g,e.euclideanDistance=S,e.euclideanDistanceBetweenPoints=d,e.euclideanHorizontalDistance=D,e.euclideanHorizontalDistanceBetweenPoints=p,e.euclideanHorizontalLength=f,e.euclideanLength=s,e.verticalDistance=R,e.verticalSignedDistance=y,e.verticalSignedDistanceBetweenPoints=z,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
