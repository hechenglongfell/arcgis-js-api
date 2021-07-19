/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./coordsUtils"],(function(n,t){"use strict";function e(n){return n?n.hasZ?[n.xmax-n.xmin/2,n.ymax-n.ymin/2,n.zmax-n.zmin/2]:[n.xmax-n.xmin/2,n.ymax-n.ymin/2]:null}function l(n){return n?o(n.rings,n.hasZ):null}function o(n,t){if(!n||!n.length)return null;const e=[],l=[],o=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let r=0,u=n.length;r<u;r++){const e=i(n[r],t,o);e&&l.push(e)}if(l.sort(((n,e)=>{let l=n[2]-e[2];return 0===l&&t&&(l=n[4]-e[4]),l})),l.length&&(e[0]=l[0][0],e[1]=l[0][1],t&&(e[2]=l[0][3]),(e[0]<o[0]||e[0]>o[1]||e[1]<o[2]||e[1]>o[3]||t&&(e[2]<o[4]||e[2]>o[5]))&&(e.length=0)),!e.length){const l=n[0]&&n[0].length?r(n[0],t):null;if(!l)return null;e[0]=l[0],e[1]=l[1],t&&l.length>2&&(e[2]=l[2])}return e}function i(n,t,e){let l=0,o=0,i=0,r=0,u=0;const g=n.length?n[0][0]:0,h=n.length?n[0][1]:0,s=n.length&&t?n[0][2]:0;for(let f=0;f<n.length;f++){const c=n[f],d=n[(f+1)%n.length],[x,m,a]=c,y=x-g,p=m-h,C=t?a-s:void 0,[v,z,M]=d,Z=v-g,_=z-h,b=t?M-s:void 0,j=y*_-Z*p;if(r+=j,l+=(y+Z)*j,o+=(p+_)*j,t&&c.length>2&&d.length>2){const n=y*b-Z*C;i+=(C+b)*n,u+=n}x<e[0]&&(e[0]=x),x>e[1]&&(e[1]=x),m<e[2]&&(e[2]=m),m>e[3]&&(e[3]=m),t&&(a<e[4]&&(e[4]=a),a>e[5]&&(e[5]=a))}if(r>0&&(r*=-1),u>0&&(u*=-1),!r)return null;r*=.5,u*=.5;const c=[l/(6*r)+g,o/(6*r)+h,r];return t&&(e[4]===e[5]||0===u?(c[3]=(e[4]+e[5])/2,c[4]=0):(c[3]=i/(6*u)+s,c[4]=u)),c}function r(n,e){const l=e?[0,0,0]:[0,0],o=e?[0,0,0]:[0,0];let i=0,r=0,u=0,g=0;for(let h=0,s=n.length;h<s-1;h++){const s=n[h],c=n[h+1];if(s&&c){l[0]=s[0],l[1]=s[1],o[0]=c[0],o[1]=c[1],e&&s.length>2&&c.length>2&&(l[2]=s[2],o[2]=c[2]);const n=t.getLength(l,o);if(n){i+=n;const l=t.getMidpoint(s,c);r+=n*l[0],u+=n*l[1],e&&l.length>2&&(g+=n*l[2])}}}return i>0?e?[r/i,u/i,g/i]:[r/i,u/i]:n.length?n[0]:null}n.extentCentroid=e,n.lineCentroid=r,n.polygonCentroid=l,n.ringsCentroid=o,Object.defineProperty(n,"__esModule",{value:!0})}));
