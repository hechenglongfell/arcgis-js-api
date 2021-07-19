/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./spatialReferenceUtils"],(function(n,t){"use strict";function e(n){if(!n)return null;if(Array.isArray(n))return n;const t=n.hasZ,e=n.hasM;if("point"===n.type)return e&&t?[n.x,n.y,n.z,n.m]:t?[n.x,n.y,n.z]:e?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){const t=n.clone().normalize();if(!t)return null;let e=!1,o=!1;return t.forEach((n=>{n.hasZ&&(e=!0),n.hasM&&(o=!0)})),t.map((n=>{const t=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(e&&n.hasZ){const e=.5*(n.zmax-n.zmin);for(let n=0;n<t.length;n++)t[n].push(e)}if(o&&n.hasM){const e=.5*(n.mmax-n.mmin);for(let n=0;n<t.length;n++)t[n].push(e)}return t}))}return null}function o(n,t){const e=t[0]-n[0],o=t[1]-n[1];if(n.length>2&&t.length>2){const r=n[2]-t[2];return Math.sqrt(e*e+o*o+r*r)}return Math.sqrt(e*e+o*o)}function r(n,t,e){const o=n[0]+e*(t[0]-n[0]),r=n[1]+e*(t[1]-n[1]);return n.length>2&&t.length>2?[o,r,n[2]+e*(t[2]-n[2])]:[o,r]}function i(n,t,e,o){const[r,i]=t,[s,l]=e[o],[f,a]=e[o+1],u=f-s,c=a-l,h=u*u+c*c,g=(r-s)*u+(i-l)*c,m=Math.min(1,Math.max(0,g/h));return n[0]=s+u*m,n[1]=l+c*m,n}function s(n,t){return r(n,t,.5)}function l(n){const t=n.length;let e=0;for(let r=0;r<t-1;++r)e+=o(n[r],n[r+1]);return e}function f(n,t){if(t<=0)return n[0];const e=n.length;let i=0;for(let s=0;s<e-1;++s){const e=o(n[s],n[s+1]);if(t-i<e){const o=(t-i)/e;return r(n[s],n[s+1],o)}i+=e}return n[e-1]}function a(n,t,e){const o=n.length;let r=0,i=0,s=0;for(let l=0;l<o;l++){const f=n[l],a=n[(l+1)%o];let u=2;r+=f[0]*a[1]-a[0]*f[1],f.length>2&&a.length>2&&e&&(i+=f[0]*a[2]-a[0]*f[2],u=3),f.length>u&&a.length>u&&t&&(s+=f[0]*a[u]-a[0]*f[u])}return r<=0&&i<=0&&s<=0}function u(n){if("rings"in n){for(const t of n.rings)t.length<3||t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]);if(n.rings.length>0){if(!a(n.rings[0],n.hasM,n.hasZ))for(let t=0;t<n.rings.length;++t)n.rings[t]=n.rings[t].reverse()}}}function c(n){if("rings"in n)for(const t of n.rings)t.length<3||t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]])}function h(n){const t=n.length;let e=0;for(let o=0;o<t;o++){const r=n[o],i=n[(o+1)%t];e+=r[0]*i[1]-i[0]*r[1]}return e}function g(n){if("polygon"!==n.type&&"polyline"!==n.type)return n;return m("polygon"===n.type?n.rings:n.paths,n.spatialReference),n}function m(n,e){const o=t.getInfo(e);if(!o)return;const r=o.valid[0],i=o.valid[1],s=i-r;for(const t of n){let n=1/0,e=-1/0;t.forEach((t=>{let o=t[0];for(;o<r;)o+=s;for(;o>i;)o-=s;n=Math.min(n,o),e=Math.max(e,o),t[0]=o}));const o=e-n;s-o<o&&t.forEach((n=>{n[0]<0&&(n[0]+=s)}))}}function p(n,t,e,o){let r=1/0,i=-1/0;n.forEach((n=>{let s=n.pos[0];for(;s<t;)s+=o;for(;s>e;)s-=o;r=Math.min(r,s),i=Math.max(i,s),n.unnormalizedPos[0]=s,n.unnormalizedPos[1]=n.pos[1],n.pos.length>2&&(n.unnormalizedPos[2]=n.pos[2]),n.pos.length>3&&(n.unnormalizedPos[3]=n.pos[3])}));const s=i-r;o-s<s&&n.forEach((n=>{n.unnormalizedPos[0]<0&&(n.unnormalizedPos[0]+=o)}))}n.closeRings=c,n.closeRingsAndFixWinding=u,n.computeUnnormalizedVertexPositionsOnDateLineCrossing=p,n.geometryToCoordinates=e,n.getLength=o,n.getMidpoint=s,n.getPathLength=l,n.getPointOnPath=f,n.getRingArea=h,n.isClockwise=a,n.projectPointOnLine=i,n.unnormalizeGeometryOnDatelineCrossing=g,n.unnormalizeVerticesOnDatelineCrossing=m,Object.defineProperty(n,"__esModule",{value:!0})}));
