/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec2","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../chunks/boundedPlane","../../../../geometry/support/vectorStacks","../operations/MoveVertex","../operations/RotateVertex","../operations/ScaleVertex","../operations/UpdateVertices"],(function(s,e,t,o,i,n,a,r,c,d){"use strict";function b(s,e){return g(s,e,!1)}function u(s,e){return g(s,e,!0)}function g(s,e,t){if(s instanceof d.UpdateVertices){if(s.operation instanceof a.MoveVertex)return l(s.operation,e,t),!0;if(s.operation instanceof r.RotateVertex)return p(s.operation,e,t),!0;if(s.operation instanceof c.ScaleVertex)return f(s.operation,e,t),!0}return!1}function l(s,e,i=!1){const n=i?-1:1,a=o.fromValues(n*s.dx,n*s.dy,n*s.dz);t.add(e.origin,e.origin,a)}function p(s,e,i=!1){const n=i?-s.angle:s.angle;t.rotateZ(e.basis1,e.basis1,o.ZEROS,n),t.rotateZ(e.basis2,e.basis2,o.ZEROS,n)}function f(s,e,o=!1){const i=o?1/s.factor1:s.factor1,n=o?1/s.factor2:s.factor2;t.scale(e.basis1,e.basis1,i),t.scale(e.basis2,e.basis2,n),v(e.origin,s.origin,s.axis1,i),v(e.origin,s.origin,s.axis2,n)}function v(s,t,o,i){const a=n.sv2d.get(),r=e.subtract(a,s,t),c=e.scale(a,o,e.dot(o,r));e.scaleAndAdd(s,s,c,i-1)}function I(s,t,o,a){a||(a=i.create());const r=e.set(n.sv2d.get(),s[1],-s[0]),c=e.set(n.sv2d.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),d=e.set(n.sv2d.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),b=n.sv2d.get();t.components.forEach((t=>t.vertices.forEach((t=>{const o=t.pos;e.set(b,e.dot(s,o),e.dot(r,o)),e.min(c,c,b),e.max(d,d,b)}))));const u=1e-6,g=e.set(n.sv2d.get(),d[0]-c[0]<u?o/2:0,d[1]-c[1]<u?o/2:0);return e.subtract(c,c,g),e.add(d,d,g),e.scale(a.basis1,s,(d[0]-c[0])/2),e.scale(a.basis2,r,(d[1]-c[1])/2),e.set(a.origin,c[0]*s[0]+c[1]*r[0],c[0]*s[1]+c[1]*r[1]),e.add(a.origin,a.origin,a.basis1),e.add(a.origin,a.origin,a.basis2),a}function N(s,e,o,a=0,r){r||(r=i.create()),e.toRenderCoords(s.origin,o,r.origin);const c=n.sv3d.get();t.add(c,s.origin,s.basis1),t.add(c,c,s.basis2),e.toRenderCoords(c,o,c);const d=n.sv3d.get();t.add(d,s.origin,s.basis1),t.subtract(d,d,s.basis2),e.toRenderCoords(d,o,d);const b=n.sv3d.get();t.subtract(b,s.origin,s.basis1),t.subtract(b,b,s.basis2),e.toRenderCoords(b,o,b);const u=n.sv3d.get();t.subtract(u,s.origin,s.basis1),t.add(u,u,s.basis2),e.toRenderCoords(u,o,u);const g=t.lerp(n.sv3d.get(),c,d,.5);t.subtract(g,g,r.origin);const l=t.lerp(n.sv3d.get(),b,u,.5);t.subtract(l,r.origin,l),t.lerp(r.basis1,g,l,.5);const p=t.lerp(n.sv3d.get(),u,c,.5);t.subtract(p,p,r.origin);const f=t.lerp(n.sv3d.get(),d,b,.5);t.subtract(f,r.origin,f),t.lerp(r.basis2,p,f,.5);const v=t.cross(n.sv3d.get(),r.basis1,r.basis2),I=t.cross(v,v,r.basis1);return t.normalize(I,I),t.scale(r.basis2,I,t.dot(r.basis2,I)),t.scale(r.basis1,r.basis1,1+a/t.length(r.basis1)),t.scale(r.basis2,r.basis2,1+a/t.length(r.basis2)),i.updateUnboundedPlane(r),r}s.apply=b,s.calculateOrientedBounds=I,s.mapPlaneToRenderPlane=N,s.unapply=u,Object.defineProperty(s,"__esModule",{value:!0})}));
