/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/ObjectStack","../../chunks/vec2","../../chunks/vec3","../../chunks/vec3f64","./lineSegment","./vectorStacks"],(function(t,e,c,n,r,s,o){"use strict";function u(t){return t?{p0:r.clone(t.p0),p1:r.clone(t.p1),p2:r.clone(t.p2)}:{p0:r.create(),p1:r.create(),p2:r.create()}}function a(t,e,c){const n=k.get();return n.p0=t,n.p1=e,n.p2=c,n}function p(t,e=u()){return i(t.p0,t.p1,t.p2,e)}function i(t,e,c,r=u()){return n.copy(r.p0,t),n.copy(r.p1,e),n.copy(r.p2,c),r}function d(t,e){const c=t.p0,r=t.p1,u=t.p2,a=n.subtract(o.sv3d.get(),r,c),p=n.subtract(o.sv3d.get(),u,r),i=n.subtract(o.sv3d.get(),c,u),d=n.subtract(o.sv3d.get(),e,c),f=n.subtract(o.sv3d.get(),e,r),l=n.subtract(o.sv3d.get(),e,u),g=n.cross(a,a,i),v=n.dot(n.cross(o.sv3d.get(),a,g),d),k=n.dot(n.cross(o.sv3d.get(),p,g),f),h=n.dot(n.cross(o.sv3d.get(),i,g),l);if(v>0&&k>0&&h>0){const t=n.dot(g,d);return t*t/n.dot(g,g)}const m=s.distance2(s.fromValues(c,a,b.get()),e),y=s.distance2(s.fromValues(r,p,b.get()),e),S=s.distance2(s.fromValues(u,i,b.get()),e);return Math.min(m,y,S)}function f(t,e,c){const r=1e-5,{direction:s,origin:o}=e,{p0:u,p1:a,p2:p}=t,i=a[0]-u[0],d=a[1]-u[1],f=a[2]-u[2],l=p[0]-u[0],g=p[1]-u[1],v=p[2]-u[2],b=s[1]*v-g*s[2],k=s[2]*l-v*s[0],h=s[0]*g-l*s[1],m=i*b+d*k+f*h;if(m>-r&&m<r)return!1;const y=1/m,S=o[0]-u[0],j=o[1]-u[1],O=o[2]-u[2],V=y*(S*b+j*k+O*h);if(V<0||V>1)return!1;const w=j*f-d*O,M=O*i-f*S,P=S*d-i*j,_=y*(s[0]*w+s[1]*M+s[2]*P);if(_<0||V+_>1)return!1;if(c){const t=y*(l*w+g*M+v*P);n.scale(c,s,t),n.add(c,o,c)}return!0}function l(t,e,n){const r=c.distance(t,e),s=c.distance(e,n),o=c.distance(n,t),u=(r+s+o)/2,a=u*(u-r)*(u-s)*(u-o);return a<=0?0:Math.sqrt(a)}function g(t){return l(t.p0,t.p1,t.p2)}function v(t,e,c){return n.subtract(h,e,t),n.subtract(m,c,t),n.length(n.cross(h,h,m))/2}const b=new e.ObjectStack(s.create),k=new e.ObjectStack((()=>({p0:null,p1:null,p2:null}))),h=r.create(),m=r.create();t.area2d=g,t.areaPoints2d=l,t.areaPoints3d=v,t.copy=p,t.create=u,t.distance2=d,t.fromValues=i,t.intersectRay=f,t.wrap=a,Object.defineProperty(t,"__esModule",{value:!0})}));
