/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function e(n){return void 0!==n.points}function o(n){return void 0!==n.x&&void 0!==n.y}function i(n){return void 0!==n.paths}function r(n){return void 0!==n.rings}function u(n){function t(t,e){return null==t?e:null==e?t:n(t,e)}return t}const l=u(Math.min),s=u(Math.max);function c(n,u){return i(u)?f(n,u.paths,!1,!1):r(u)?f(n,u.rings,!1,!1):e(u)?x(n,u.points,!1,!1,!1,!1):t(u)?h(n,u):(o(u)&&(n[0]=u.x,n[1]=u.y,n[2]=u.x,n[3]=u.y),n)}function g(n,u){return i(u)?f(n,u.paths,!0,!1):r(u)?f(n,u.rings,!0,!1):e(u)?x(n,u.points,!0,!1,!0,!1):t(u)?h(n,u,!0,!1,!0,!1):(o(u)&&(n[0]=u.x,n[1]=u.y,n[2]=u.z,n[3]=u.x,n[4]=u.y,n[5]=u.z),n)}function f(n,t,e,o){const i=e?3:2;if(!t.length||!t[0].length)return null;let r,u,c,g,[f,h]=t[0][0],[x,d]=t[0][0];for(let m=0;m<t.length;m++){const n=t[m];for(let t=0;t<n.length;t++){const m=n[t],[a,y]=m;if(f=l(f,a),h=l(h,y),x=s(x,a),d=s(d,y),e&&m.length>2){const n=m[2];r=l(r,n),u=s(u,n)}if(o&&m.length>i){const n=m[i];c=l(r,n),g=s(u,n)}}}return e?o?(n[0]=f,n[1]=h,n[2]=r,n[3]=c,n[4]=x,n[5]=d,n[6]=u,n[7]=g,n.length=8,n):(n[0]=f,n[1]=h,n[2]=r,n[3]=x,n[4]=d,n[5]=u,n.length=6,n):o?(n[0]=f,n[1]=h,n[2]=c,n[3]=x,n[4]=d,n[5]=g,n.length=6,n):(n[0]=f,n[1]=h,n[2]=x,n[3]=d,n.length=4,n)}function h(n,t,e,o,i,r){const u=t.xmin,l=t.xmax,s=t.ymin,c=t.ymax;let g=t.zmin,f=t.zmax,h=t.mmin,x=t.mmax;return i?(g=g||0,f=f||0,r?(h=h||0,x=x||0,n[0]=u,n[1]=s,n[2]=g,n[3]=h,n[4]=l,n[5]=c,n[6]=f,n[7]=x,n):(n[0]=u,n[1]=s,n[2]=g,n[3]=l,n[4]=c,n[5]=f,n)):r?(h=h||0,x=x||0,n[0]=u,n[1]=s,n[2]=h,n[3]=l,n[4]=c,n[5]=x,n):(n[0]=u,n[1]=s,n[2]=l,n[3]=c,n)}function x(n,t,e,o,i,r){const u=e?3:2,c=o&&r,g=e&&i;if(!t.length||!t[0].length)return null;let f,h,x,d,[m,a]=t[0],[y,v]=t[0];for(let p=0;p<t.length;p++){const n=t[p],[e,o]=n;if(m=l(m,e),a=l(a,o),y=s(y,e),v=s(v,o),g&&n.length>2){const t=n[2];f=l(f,t),h=s(h,t)}if(c&&n.length>u){const t=n[u];x=l(f,t),d=s(h,t)}}return i?(f=f||0,h=h||0,r?(x=x||0,d=d||0,n[0]=m,n[1]=a,n[2]=f,n[3]=x,n[4]=y,n[5]=v,n[6]=h,n[7]=d,n):(n[0]=m,n[1]=a,n[2]=f,n[3]=y,n[4]=v,n[5]=h,n)):r?(x=x||0,d=d||0,n[0]=m,n[1]=a,n[2]=x,n[3]=y,n[4]=v,n[5]=d,n):(n[0]=m,n[1]=a,n[2]=y,n[3]=v,n)}n.getBoundsXY=c,n.getBoundsXYZ=g,n.getExtentBounds=h,n.getPointsBounds=x,n.getRingsOrPathsBounds=f,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
