/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/screenUtils"],(function(t,e){"use strict";function n(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function r(t,e){const n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function c(t,n){if(n?(n.radius=0,n.center.x=0,n.center.y=0):n={radius:0,center:e.createScreenPoint()},0===t.length)return n;if(1===t.length)return n.center.x=t[0].x,n.center.y=t[0].y,n;if(2===t.length){const[e,r]=t,[c,i]=[r.x-e.x,r.y-e.y];return n.radius=Math.sqrt(c*c+i*i)/2,n.center.x=(e.x+r.x)/2,n.center.y=(e.y+r.y)/2,n}let r=0,c=0;for(let e=0;e<t.length;e++)r+=t[e].x,c+=t[e].y;r/=t.length,c/=t.length;const i=t.map((t=>t.x-r)),o=t.map((t=>t.y-c));let a=0,s=0,u=0,l=0,y=0,x=0,h=0;for(let e=0;e<i.length;e++){const t=i[e],n=o[e],r=t*t,c=n*n;a+=r,s+=c,u+=t*n,l+=r*t,y+=c*n,x+=t*c,h+=n*r}const f=.5*(l+x),g=.5*(y+h),d=a*s-u*u,p=(f*s-g*u)/d,M=(a*g-u*f)/d,b=e.createScreenPoint(p+r,M+c);return{radius:Math.sqrt(p*p+M*M+(a+s)/t.length),center:b}}function i(t){const{native:e}=t,{pointerId:n,button:r,pointerType:c}=e;return"mouse"===c?`${n}:${r}`:`${c}`}t.euclideanDistance=r,t.fitCircleLSQ=c,t.getPointerId=i,t.manhattanDistance=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
