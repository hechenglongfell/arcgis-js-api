/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,n,t,r=!0){if(n%4!=0||t%4!=0){const i=new ArrayBuffer(4*Math.ceil(t/4)),o=new Uint8Array(i),f=new Uint8Array(e,n,t);if(r)for(let e=0;e<o.length;e+=4)o[e]=f[e+3],o[e+1]=f[e+2],o[e+2]=f[e+1],o[e+3]=f[e];else o.set(f);return new Uint32Array(o.buffer)}if(r){const r=new Uint8Array(e,n,t),i=new Uint8Array(r.length);for(let e=0;e<i.length;e+=4)i[e]=r[e+3],i[e+1]=r[e+2],i[e+2]=r[e+1],i[e+3]=r[e];return new Uint32Array(i.buffer)}return new Uint32Array(e,n,t/4)}function t(){const e=[];for(let n=0;n<=257;n++)e[n]=[n];return e}function r(e,n){for(let t=0;t<n.length;t++)e.push(n[t])}const i=new Set;function o(e,o,f,l=!0){const s=n(e,o,f,l);let c=9,u=t(),a=32,d=u.length,h=[],g=1,w=s[0],y=0;const A=s.length,U=8*(4*A-f),p=[];for(;null!=w;){if(a>=c)a-=c,y=w>>>32-c,w<<=c;else{y=w>>>32-a,w=s[g++];const e=c-a;a=32-e,y=(y<<e)+(w>>>a),w<<=e}if(257===y)break;if(256===y){c=9,u=t(),d=u.length,h=[];continue}const e=u[y];if(null==e){if(y>u.length)throw"data integrity issue: code does not exist on code page";h.push(h[0]),u[d++]=h.slice(),r(p,h)}else r(p,e),h.push(e[0]),h.length>1&&(u[d++]=h.slice()),h=e.slice();if(i.has(d)&&c++,0===a&&(w=s[g++],a=32),g>A||g===A&&a<=U)break}return new Uint8Array(p)}i.add(511),i.add(1023),i.add(2047),i.add(4095),i.add(8191),e.decode=o,Object.defineProperty(e,"__esModule",{value:!0})}));
