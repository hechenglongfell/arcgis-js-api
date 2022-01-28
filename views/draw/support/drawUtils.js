/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/coordsUtils"],(function(t,n,e,o,s){"use strict";function r(t,n,e,o){if(null==o||t.hasZ||(o=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=o&&(t.z+=o),t;if("multipoint"===t.type){const s=t.points;for(let t=0;t<s.length;t++)s[t]=x(s[t],n,e,o);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=o&&(t.zmin+=o,t.zmax+=o),t;const r=s.geometryToCoordinates(t),i="polyline"===t.type?t.paths:t.rings;for(let s=0;s<r.length;s++){const t=r[s];for(let s=0;s<t.length;s++)t[s]=x(t[s],n,e,o)}return"paths"in t?t.paths=i:t.rings=i,t}function i(t,n,e,o,i){const a=t.clone(),l=o.resolution;if("point"===a.type){if(i)r(a,n*l,-e*l);else{const t=o.state.transform,s=o.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],i=t[1]*a.x+t[3]*a.y+t[5];a.x=s[0]*(r+n)+s[2]*(i+e)+s[4],a.y=s[1]*(r+n)+s[3]*(i+e)+s[5]}return a}if("multipoint"===a.type){if(i)r(a,n*l,-e*l);else{const t=a.points,s=o.state.transform,r=o.state.inverseTransform;for(let o=0;o<t.length;o++){const i=t[o],a=s[0]*i[0]+s[2]*i[1]+s[4],l=s[1]*i[0]+s[3]*i[1]+s[5],m=r[0]*(a+n)+r[2]*(l+e)+r[4],x=r[1]*(a+n)+r[3]*(l+e)+r[5];t[o]=y(i,m,x,void 0)}}return a}if("extent"===a.type){if(i)r(a,n*l,-e*l);else{const t=o.state.transform,s=o.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],i=t[1]*a.xmin+t[3]*a.ymin+t[5],l=t[0]*a.xmax+t[2]*a.ymax+t[4],m=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=s[0]*(r+n)+s[2]*(i+e)+s[4],a.ymin=s[1]*(r+n)+s[3]*(i+e)+s[5],a.xmax=s[0]*(l+n)+s[2]*(m+e)+s[4],a.ymax=s[1]*(l+n)+s[3]*(m+e)+s[5]}return a}if(i)r(a,n*l,-e*l);else{const t=s.geometryToCoordinates(a),r="polyline"===a.type?a.paths:a.rings,i=o.state.transform,l=o.state.inverseTransform;for(let o=0;o<t.length;o++){const s=t[o];for(let t=0;t<s.length;t++){const o=s[t],r=i[0]*o[0]+i[2]*o[1]+i[4],a=i[1]*o[0]+i[3]*o[1]+i[5],m=l[0]*(r+n)+l[2]*(a+e)+l[4],x=l[1]*(r+n)+l[3]*(a+e)+l[5];s[t]=y(o,m,x,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function a(t,n,r,i){if("point"===t.type){const{x:e,y:o}=t,s=i?i[0]:e,a=i?i[1]:o,l=t.clone(),m=(e-s)*n+s,x=(o-a)*r+a;return l.x=m,l.y=x,l}if("multipoint"===t.type){const a=s.geometryToCoordinates(t),l=e.create(),[m,x,c,u]=o.getRingsOrPathsBounds(l,[a]),p=i?i[0]:(m+c)/2,f=i?i[1]:(u+x)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const e=g[t],[o,s]=e,i=(o-p)*n+p,a=(s-f)*r+f;g[t]=y(e,i,a,void 0)}return h}if("extent"===t.type){const{xmin:e,xmax:o,ymin:s,ymax:a}=t,l=i?i[0]:(e+o)/2,m=i?i[1]:(a+s)/2,x=t.clone();if(x.xmin=(e-l)*n+l,x.ymax=(a-m)*r+m,x.xmax=(o-l)*n+l,x.ymin=(s-m)*r+m,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=s.geometryToCoordinates(t),l=e.create(),[m,x,c,u]=o.getRingsOrPathsBounds(l,a),p=i?i[0]:(m+c)/2,f=i?i[1]:(u+x)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let e=0;e<a.length;e++){const t=a[e];for(let o=0;o<t.length;o++){const s=t[o],[i,a]=s,l=(i-p)*n+p,m=(a-f)*r+f;g[e][o]=y(s,l,m,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function l(t,n,e,o,s,r){const i=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n))/i}function m(t,e,o){const s=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(t.y-o.y,t.x-o.x),r=Math.atan2(Math.sin(s),Math.cos(s));return n.rad2deg(r)}function x(t,n,e,o){return y(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function y(t,n,e,o){const s=[n,e];return t.length>2&&s.push(null!=o?o:t[2]),t.length>3&&s.push(t[3]),s}t.cloneMove=i,t.getRotationAngle=m,t.getScaleRatio=l,t.move=r,t.scale=a,Object.defineProperty(t,"__esModule",{value:!0})}));
