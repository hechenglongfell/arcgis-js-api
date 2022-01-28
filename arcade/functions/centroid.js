/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../geometry/Point","../../geometry/support/intersectsBase"],(function(t,n,e){"use strict";function r(t,n,e){return Math.sqrt((t[0]-n[0])**2+(t[1]-n[1])**2+(void 0!==t[2]&&void 0!==n[2]?(t[2]*e-n[2]*e)**2:0))}const s=[];for(const v of[[9002,56146130,6131,6132,8050,8051,8228],[9003,5702,6358,6359,6360,8052,8053],[9095,5754]]){const t=v[0];for(let n=1;n<v.length;n++)s[v[n]]=t}const o=[];function i(t){return t.vcsWkid&&void 0!==s[t.vcsWkid]?o[s[t.vcsWkid]]:t.latestVcsWkid&&void 0!==s[t.latestVcsWkid]?o[s[t.latestVcsWkid]]:1}function a(t,n,e){const r={x:0,y:0};n&&(r.z=0),e&&(r.m=0);let s=0,o=t[0];for(let i=0;i<t.length;i++){const a=t[i];if(!1===f(a,o)){const t=h(o,a,n),i=c(o,a,n,e);i.x*=t,i.y*=t,r.x+=i.x,r.y+=i.y,n&&(i.z*=t,r.z+=i.z),e&&(i.m*=t,r.m+=i.m),s+=t,o=a}}return s>0?(r.x/=s,r.y/=s,n&&(r.z/=s),e&&(r.m/=s)):(r.x=t[0][0],r.y=t[0][1],n&&(r.z=t[0][2]),e&&n?r.m=t[0][3]:e&&(r.m=t[0][2])),r}function c(t,n,e,r){const s={x:(t[0]+n[0])/2,y:(t[1]+n[1])/2};return e&&(s.z=(t[2]+n[2])/2),e&&r?s.m=(t[3]+n[3])/2:r&&(s.m=(t[2]+n[2])/2),s}function l(t,n){if(t.length<=1)return 0;let e=0;for(let r=1;r<t.length;r++)e+=h(t[r-1],t[r],n);return e}function h(t,n,e){const r=n[0]-t[0],s=n[1]-t[1];if(e){const t=n[2]-n[2];return Math.sqrt(r*r+s*s+t*t)}return Math.sqrt(r*r+s*s)}function f(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function u(t){const e={x:0,y:0,spatialReference:t.spatialReference.toJSON()},r={x:0,y:0,spatialReference:t.spatialReference.toJSON()};let s=0,o=0;for(let n=0;n<t.paths.length;n++){if(0===t.paths[n].length)continue;const i=l(t.paths[n],!0===t.hasZ);if(0===i){const r=a(t.paths[n],!0===t.hasZ,!0===t.hasM);e.x+=r.x,e.y+=r.y,!0===t.hasZ&&(e.z+=r.z),!0===t.hasM&&(e.m+=r.m),++s}else{const e=a(t.paths[n],!0===t.hasZ,!0===t.hasM);r.x+=e.x*i,r.y+=e.y*i,!0===t.hasZ&&(r.z+=e.z*i),!0===t.hasM&&(r.m+=e.m*i),o+=i}}return o>0?(r.x/=o,r.y/=o,!0===t.hasZ&&(r.z/=o),!0===t.hasM&&(r.m/=o),new n(r)):s>0?(e.x/=s,e.y/=s,!0===t.hasZ&&(r.z/=s),!0===t.hasM&&(e.m/=s),new n(e)):null}function g(t){if(0===t.points.length)return null;let e=0,r=0,s=0,o=0;for(let n=0;n<t.points.length;n++){const i=t.getPoint(n);!0===i.hasZ&&(s+=i.z),!0===i.hasM&&(o+=i.m),e+=i.x,r+=i.y,o+=i.m}const i={x:e/t.points.length,y:r/t.points.length,spatialReference:null};return i.spatialReference=t.spatialReference.toJSON(),!0===t.hasZ&&(i.z=s/t.points.length),!0===t.hasM&&(i.m=o/t.points.length),new n(i)}function y(t,n){return t.x*n.x+t.y*n.y}function x(t,n){return t.x*n.y-n.x*t.y}function M(t,n,e=0){for(;t<e;)t+=n;const r=e+n;for(;t>=r;)t-=n;return t}function m(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function p(t,n){return M(m(t,n),2*Math.PI)*(180/Math.PI)}function d(t,n){return M(Math.PI/2-m(t,n),2*Math.PI)*(180/Math.PI)}function z(t,n,e){const r={x:t.x-n.x,y:t.y-n.y},s={x:e.x-n.x,y:e.y-n.y};return Math.atan2(x(r,s),y(r,s))}function P(t,n,e){return M(z(t,n,e),2*Math.PI)*(180/Math.PI)}function I(t,n,e){return M(-1*z(t,n,e),2*Math.PI)*(180/Math.PI)}o[9002]=.3048,o[9003]=.3048006096012192,o[9095]=.3048007491;const R=[0,0];function Z(t){for(let n=0;n<t.length;n++){const r=t[n];for(let o=0;o<r.length-1;o++){const s=r[o],i=r[o+1];for(let r=n+1;r<t.length;r++)for(let n=0;n<t[r].length-1;n++){const o=t[r][n],a=t[r][n+1];if(e.segmentIntersects(s,i,o,a,R)&&!(R[0]===s[0]&&R[1]===s[1]||R[0]===o[0]&&R[1]===o[1]||R[0]===i[0]&&R[1]===i[1]||R[0]===a[0]&&R[1]===a[1]))return!0}}const s=r.length;if(!(s<3))for(let t=0;t<=s-2;t++){const n=r[t],o=r[t+1];for(let i=t+2;i<=s-2;i++){const t=r[i],s=r[i+1];if(e.segmentIntersects(n,o,t,s,R)&&!(R[0]===n[0]&&R[1]===n[1]||R[0]===t[0]&&R[1]===t[1]||R[0]===o[0]&&R[1]===o[1]||R[0]===s[0]&&R[1]===s[1]))return!0}}}return!1}t.angle2D=p,t.angleBetween2D=P,t.angleBetweenRad=z,t.angleRad=m,t.bearing2D=d,t.bearingBetween2D=I,t.centroidMultiPoint=g,t.centroidPolyline=u,t.getMetersPerVerticalUnitForSR=i,t.pathsSelfIntersecting=Z,t.segmentLength3d=r,Object.defineProperty(t,"__esModule",{value:!0})}));
