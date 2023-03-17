/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../chunks/mat3f64","../../../chunks/vec3","../../../chunks/vec3f64","../MeshComponent","../MeshVertexAttributes","./georeference"],(function(e,t,n,r,o,a,s,i){"use strict";function c(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=d,r=4*e.length,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let c=0,l=0,f=0,u=0;for(let h=0;h<e.length;h++){const r=e[h],w=c/3;for(const e of t)i[u++]=w+e;const p=r.corners;for(let e=0;e<4;e++){const t=p[e];let i=0;s[f++]=.25*n[e][0]+r.uvOrigin[0],s[f++]=r.uvOrigin[1]-.25*n[e][1];for(let e=0;e<3;e++)0!==r.axis[e]?(o[c++]=.5*r.axis[e],a[l++]=r.axis[e]):(o[c++]=.5*t[i++],a[l++]=0)}}return{position:o,normal:a,uv:s,faces:i}}function l(e,n){const r=e.components[0],o=r.faces,s=M[n],i=6*s,c=new Array(6),l=new Array(o.length-6);let f=0,u=0;for(let t=0;t<o.length;t++)t>=i&&t<i+6?c[f++]=o[t]:l[u++]=o[t];if(t.isSome(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),n=4*s*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new a({faces:c,material:r.material}),new a({faces:l})],e}function f(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,f=0,u=0;for(let h=0;h<=t;h++){const e=h/t*Math.PI+.5*Math.PI,r=Math.cos(e),w=Math.sin(e);b[2]=w;const p=0===h||h===t,m=p?n-1:n;for(let g=0;g<=m;g++){const e=g/m*2*Math.PI;b[0]=-Math.sin(e)*r,b[1]=Math.cos(e)*r;for(let t=0;t<3;t++)o[c]=.5*b[t],a[c]=b[t],++c;s[l++]=(g+(p?.5:0))/n,s[l++]=h/t,0!==h&&g!==n&&(h!==t&&(i[f++]=u,i[f++]=u+1,i[f++]=u-n),1!==h&&(i[f++]=u,i[f++]=u-n,i[f++]=u-n-1)),u++}}return{position:o,normal:a,uv:s,faces:i}}function u(e=0){const t=5,n=Math.round(16*2**e),r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let c=0,l=0,f=0,u=0,h=0;for(let w=0;w<=t;w++){const e=0===w||w===t,r=w<=1||w>=t-1,p=2===w||4===w,m=e?n-1:n;for(let g=0;g<=m;g++){const v=g/m*2*Math.PI,y=e?0:.5;b[0]=y*Math.sin(v),b[1]=y*-Math.cos(v),b[2]=w<=2?.5:-.5;for(let e=0;e<3;e++)o[c++]=b[e],a[l++]=r?2===e?w<=1?1:-1:0:2===e?0:b[e]/y;s[f++]=(g+(e?.5:0))/n,s[f++]=w<=1?1*w/3:w<=3?1*(w-2)/3+1/3:1*(w-4)/3+2/3,p||0===w||g===n||(w!==t&&(i[u++]=h,i[u++]=h+1,i[u++]=h-n),1!==w&&(i[u++]=h,i[u++]=h-n,i[u++]=h-n-1)),h++}}return{position:o,normal:a,uv:s,faces:i}}function h(e,t){const n="number"==typeof t?t:null!=t?t.width:1,r="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function w(e){const t=v.facingAxisOrderSwap[e],n=v.position,r=v.normal,o=new Float64Array(n.length),a=new Float32Array(r.length);let s=0;for(let i=0;i<4;i++){const e=s;for(let i=0;i<3;i++){const c=t[i],l=Math.abs(c)-1,f=c>=0?1:-1;o[s]=n[e+l]*f,a[s]=r[e+l]*f,s++}}return{position:o,normal:a,uv:new Float32Array(v.uv),faces:new Uint32Array(v.faces),isPlane:!0}}const p=1,m=2,g=3,v={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[g,p,m],west:[-g,-p,m],north:[-p,g,m],south:[p,-g,m],up:[p,m,g],down:[p,-m,-g]}};function y(e,t,n){e.isPlane||A(e),x(e,n?.size);const{vertexAttributes:r,transform:o}=i.georeferenceByTransform(e,t,n);return{vertexAttributes:new s.MeshVertexAttributes({...r,uv:e.uv}),transform:o,components:[new a({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}function A(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function x(e,t){if(null==t)return;const n="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];F[0]=n[0],F[4]=n[1],F[8]=n[2];for(let o=0;o<e.position.length;o+=3){for(let t=0;t<3;t++)b[t]=e.position[o+t];r.transformMat3(b,b,F);for(let t=0;t<3;t++)e.position[o+t]=b[t]}if(n[0]!==n[1]||n[1]!==n[2]){F[0]=1/n[0],F[4]=1/n[1],F[8]=1/n[2];for(let t=0;t<e.normal.length;t+=3){for(let n=0;n<3;n++)b[n]=e.normal[t+n];r.transformMat3(b,b,F),r.normalize(b,b);for(let n=0;n<3;n++)e.normal[t+n]=b[n]}}}const d={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},M={south:0,east:1,north:2,west:3,up:4,down:5},b=o.create(),F=n.create();e.boxFaceOrder=M,e.convertPlaneSizeParameter=h,e.convertUnitGeometry=y,e.createUnitSizeBox=c,e.createUnitSizeCylinder=u,e.createUnitSizePlane=w,e.createUnitSizeSphere=f,e.extractSingleFaceOfBox=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
