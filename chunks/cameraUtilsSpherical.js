/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/Cyclical","../core/mathUtils","./mat4","./mat4f64","./vec3","./vec3f64","../geometry/ellipsoidUtils","../geometry/Extent","../geometry/SpatialReference","../geometry/support/webMercatorUtils","../views/3d/support/cameraUtilsInternal","../views/3d/support/earthUtils"],(function(e,t,a,n,i,o,r,c,s,l,d,h,u){"use strict";const y=r.fromValues(0,0,1),f=o.normalize(r.create(),r.fromValues(1,1,1)),g=new t.Cyclical(-180,180),p=i.create(),M=r.create(),m=r.create();function T(e,t,i,r=h.createDirectionUp()){o.cross(M,e,y),0===o.dot(M,M)&&o.cross(M,e,f),n.fromRotation(p,-a.deg2rad(t),e),n.rotate(p,p,-a.deg2rad(i),M);const{up:c,direction:s}=r;return o.cross(c,M,e),o.normalize(c,c),o.transformMat4(c,c,p),o.normalize(s,e),o.negate(s,s),o.transformMat4(s,s,p),r}function R(e,t,a,n){const i=M,r=m;return o.normalize(i,e),o.cross(m,i,y),0===o.dot(m,m)&&o.cross(m,i,f),o.cross(r,m,i),h.directionToHeadingTilt(t,a,n,i,r)}function b(e,t,n,i){const c={eye:r.create(),up:null,tilt:i,heading:n},s=M;s[0]=e[0],s[1]=e[2],s[2]=-e[1];const l=t,d=a.deg2rad(n),h=a.deg2rad(i),u=Math.sin(d),y=Math.cos(d),f=Math.sin(h),g=Math.cos(h),p=o.length(s);let m;if(Math.abs(h)<1e-8)m=l+p;else{const e=p/f,t=a.asinClamped(l/e),n=Math.PI-h-t;m=e*Math.sin(n)}const T=g*l,R=l*l*(f*f),b=y*y*R,C=m-T,I=C*C,P=b*(b+I-s[1]*s[1]);if(P<0)return o.scale(c.eye,s,m/p),c.tilt=0,U(c,e);const z=Math.sqrt(P),E=s[1]*C,v=b+I;let w;if(w=y>0?-z+E:z+E,Math.abs(v)<1e-8)return p<1e-8?(c.eye[0]=0,c.eye[1]=0,c.eye[2]=l):o.scale(c.eye,s,m/p),c.tilt=0,x(c.eye),U(c,e);c.eye[1]=w/v;const D=u*u*R,H=f*l,S=y*H*c.eye[1],W=c.eye[1]*c.eye[1],k=1-W,q=Math.sqrt(k),A=b*W+D-2*S*q*C+k*I;return Math.abs(A)<1e-8?(o.scale(c.eye,s,m/p),c.tilt=0,x(c.eye),U(c,e)):(c.eye[0]=(k*(m*s[0]-T*s[0])-H*q*(s[0]*c.eye[1]*y+s[2]*u))/A,c.eye[2]=(k*(m*s[2]-T*s[2])-H*q*(s[2]*c.eye[1]*y-s[0]*u))/A,o.scale(c.eye,c.eye,m),x(c.eye),U(c,e))}function x(e){const t=e[1];e[1]=-e[2],e[2]=t}function U(e,t){const a=T(t,e.heading,e.tilt);return e.up=a.up,e}function C(e,t,n){const i=o.length(t),r=Math.sqrt(n*n+i*i-2*n*i*Math.cos(Math.PI-e)),c=a.asinClamped(n/(r/Math.sin(e)));return a.rad2deg(e-c)}function I(e,t,n){const i=a.deg2rad(e),r=o.length(t);return a.asinClamped(n/(r/Math.sin(i)))+i}function P(e,n,i,o,r){let h,y,f,p;const M=n.latitude,m=c.getReferenceEllipsoid(e.spatialReference).radius,T=n.longitude,R=u.getLonDeltaForDistance(M,i,m)/2;h=T-R,y=T+R;const b=a.deg2rad(M),x=(1+Math.sin(b))/(1-Math.sin(b)),U=(x+1)*Math.tan(o/m/2),C=U*U;function I(e){const a=Math.PI/2;return(e=t.cyclical2PI.normalize(e,-a))>a&&(e=Math.PI-e),e}if(f=1.5*Math.PI-2*Math.atan(.5*(U+Math.sqrt(4*x+C))),p=f+o/m,f=I(f),p=I(p),p<f){const e=p;p=f,f=e}if(f=Math.max(a.rad2deg(f),-90),p=Math.min(a.rad2deg(p),90),y=g.monotonic(h,y),y-h>180){const e=(y-h-180)/2;h+=e,y-=e}const P=e.spatialReference&&e.spatialReference.isGeographic?e.spatialReference:l.WGS84;return r?(r.xmin=h,r.ymin=f,r.xmax=y,r.ymax=p,r.spatialReference=P):r=new s(h,f,y,p,P),e.spatialReference&&e.spatialReference.isWebMercator&&d.geographicToWebMercator(r,!1,r),r}const z=Object.freeze(Object.defineProperty({__proto__:null,directionToHeadingTilt:R,eyeForCenterWithHeadingTilt:b,eyeTiltToLookAtTilt:I,headingTiltToDirectionUp:T,lookAtTiltToEyeTilt:C,toExtent:P},Symbol.toStringTag,{value:"Module"}));e.cameraUtilsSpherical=z,e.directionToHeadingTilt=R,e.eyeForCenterWithHeadingTilt=b,e.eyeTiltToLookAtTilt=I,e.headingTiltToDirectionUp=T,e.lookAtTiltToEyeTilt=C,e.toExtent=P}));
