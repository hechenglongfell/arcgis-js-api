/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../Color","../../core/has","../../chunks/mat2df32","../../chunks/mat2d","../../widgets/support/widgetUtils","../../core/Logger","../../widgets/support/jsxFactory"],(function(t,e,i,r,o,n,s,a){"use strict";const l="http://www.w3.org/2000/svg";let h=0,c=0;const d=i("android"),f=i("chrome")||d&&d>=4?"auto":"optimizeLegibility",y={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},u=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let x={},g={};const p={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},m=Math.PI;function w(t,e){const i=t*(m/180);return Math.abs(e*Math.sin(i))+Math.abs(e*Math.cos(i))}function k(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function b(t,e,i,r){if(t){if("circle"===t.type)return a.tsx("circle",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return a.tsx("ellipse",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return a.tsx("rect",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return a.tsx("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const r="string"!=typeof t.path?k(t.path):t.path;return a.tsx("path",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===t.type)return a.tsx("text",{fill:e,"fill-rule":"evenodd",stroke:i.color,"stroke-width":i.width,"stroke-linecap":i.cap,"stroke-linejoin":i.join,"stroke-dasharray":i.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":f,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:t.x,y:t.y},t.text)}return null}function v(t){const i={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const e="patternId-"+ ++h;i.fill=`url(#${e})`,i.pattern={id:e,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const r="linearGradientId-"+ ++c;i.fill=`url(#${r})`,i.linearGradient={id:r,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new e(t.color).toString()})))}}else if(t){const r=new e(t);i.fill=r.toString()}return i}function j(t){const i={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(i.width=t.width),t.cap&&(i.cap=t.cap),t.join&&(i.join=t.join.toString()),t.color&&(i.color=new e(t.color).toString()),t.style)){let e=null;if(t.style in p&&(e=p[t.style]),Array.isArray(e)){e=e.slice(0);for(let i=0;i<e.length;++i)e[i]*=t.width;if("butt"!==t.cap){for(let i=0;i<e.length;i+=2)e[i]-=t.width,e[i]<1&&(e[i]=1);for(let i=1;i<e.length;i+=2)e[i]+=t.width}e=e.join(",")}i.dashArray=e}return i}function A(t,e){const i={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(i.align=t.align,i.decoration=t.decoration,i.kerning=t.kerning?"auto":"0",i.rotate=t.rotated?"90":"0",i.font.style=e.style||"normal",i.font.variant=e.variant||"normal",i.font.weight=e.weight||"normal",i.font.size=e.size&&e.size.toString()||"10pt",i.font.family=e.family||"serif"),i}function M(t){const{pattern:e,linearGradient:i}=t;if(e)return a.tsx("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},a.tsx("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(i){const t=i.stops.map(((t,e)=>a.tsx("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return a.tsx("linearGradient",{id:i.id,gradientUnits:"userSpaceOnUse",x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2},t)}return null}function S(t,e,i){return o.translate(t,o.identity(t),[e,i])}function I(t,e,i,r,n){return o.scale(t,o.identity(t),[e,i]),t[4]=t[4]*e-r*e+r,t[5]=t[5]*i-n*i+n,t}function N(t,e,i,r){const n=e%360*Math.PI/180;o.rotate(t,o.identity(t),n);const s=Math.cos(n),a=Math.sin(n),l=t[4],h=t[5];return t[4]=l*s-h*a+r*a-i*s+i,t[5]=h*s+l*a-i*a-r*s+r,t}function z(t,e){x&&"left"in x?(x.left>t&&(x.left=t),x.right<t&&(x.right=t),x.top>e&&(x.top=e),x.bottom<e&&(x.bottom=e)):x={left:t,bottom:e,right:t,top:e}}function $(t){const e=t.args,i=e.length;let r;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(r=0;r<i;r+=2)z(e[r],e[r+1]);g.x=e[i-2],g.y=e[i-1];break;case"H":for(r=0;r<i;++r)z(e[r],g.y);g.x=e[i-1];break;case"V":for(r=0;r<i;++r)z(g.x,e[r]);g.y=e[i-1];break;case"m":{let t=0;"x"in g||(z(g.x=e[0],g.y=e[1]),t=2);for(r=t;r<i;r+=2)z(g.x+=e[r],g.y+=e[r+1]);break}case"l":case"t":for(r=0;r<i;r+=2)z(g.x+=e[r],g.y+=e[r+1]);break;case"h":for(r=0;r<i;++r)z(g.x+=e[r],g.y);break;case"v":for(r=0;r<i;++r)z(g.x,g.y+=e[r]);break;case"c":for(r=0;r<i;r+=6)z(g.x+e[r],g.y+e[r+1]),z(g.x+e[r+2],g.y+e[r+3]),z(g.x+=e[r+4],g.y+=e[r+5]);break;case"s":case"q":for(r=0;r<i;r+=4)z(g.x+e[r],g.y+e[r+1]),z(g.x+=e[r+2],g.y+=e[r+3]);break;case"A":for(r=0;r<i;r+=7)z(e[r+5],e[r+6]);g.x=e[i-2],g.y=e[i-1];break;case"a":for(r=0;r<i;r+=7)z(g.x+=e[r+5],g.y+=e[r+6])}}function G(t,e,i){const r=y[t.toLowerCase()];let o;"number"==typeof r&&(r?e.length>=r&&(o={action:t,args:e.slice(0,e.length-e.length%r)},i.push(o),$(o)):(o={action:t,args:[]},i.push(o),$(o)))}function T(t){const e=("string"!=typeof t.path?k(t.path):t.path).match(u),i=[];if(x={},g={},!e)return null;let r="",o=[];const n=e.length;for(let a=0;a<n;++a){const t=e[a],n=parseFloat(t);isNaN(n)?(r&&G(r,o,i),o=[],r=t):o.push(n)}G(r,o,i);const s={x:0,y:0,width:0,height:0};return x&&"left"in x&&(s.x=x.left,s.y=x.top,s.width=x.right-x.left,s.height=x.bottom-x.top),s}function F(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const i=T(t);e.x=i.x,e.y=i.y,e.width=i.width,e.height=i.height}return e}function E(t){const e={x:0,y:0,width:0,height:0};let i=null,r=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const n of t)i?(i.x=Math.min(i.x,n.x),i.y=Math.min(i.y,n.y),r=Math.max(r,n.x+n.width),o=Math.max(o,n.y+n.height)):(i=e,i.x=n.x,i.y=n.y,r=n.x+n.width,o=n.y+n.height);return i&&(i.width=r-i.x,i.height=o-i.y),i}function U(t,e,i,n,s,a,l,h){const c=(l&&a?w(a,e):e)/2,d=(l&&a?w(a,i):i)/2,f=t.width+n,y=t.height+n,u=r.create(),x=r.create();let g=!1;if(s&&0!==f&&0!==y){const t=f/y,r=e>i?e:i;let n=1,s=1;isNaN(r)||(t>1?(n=r/f,s=r/t/y):(s=r/y,n=r*t/f)),o.multiply(x,x,I(u,n,s,c,d)),g=!0}const p=t.x+(f-n)/2,m=t.y+(y-n)/2,k=c-p,b=d-m;if(o.multiply(x,x,S(u,k,b)),!g&&(f>e||y>i)){const t=f/e>y/i,r=(t?e:i)/(t?f:y);o.multiply(x,x,I(u,r,r,p,m))}return a&&o.multiply(x,x,N(u,a,p,m)),h&&o.multiply(x,x,S(u,h[0],h[1])),`matrix(${x[0]},${x[1]},${x[2]},${x[3]},${x[4]},${x[5]})`}function B(t,e,i,r){const o=[],n=[];for(const s of t){const t=[],l=[];let h=0,c=0,d=0;for(const e of s){const{shape:i,fill:r,stroke:n,font:s,offset:a}=e;h+=n&&n.width||0;const f=v(r),y=j(n),u="text"===i.type?A(i,s):null;o.push(M(f)),t.push(b(i,f.fill,y,u)),l.push(F(i)),a&&(c+=a[0],d+=a[1])}const f=U(E(l),e,i,h,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[c,d]);n.push(a.tsx("g",{transform:f},t))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(e=w(null==r?void 0:r.rotation,e),i=w(null==r?void 0:r.rotation,i)),a.tsx("svg",{xmlns:l,width:e,height:i},a.tsx("defs",null,o),n)}t.computeBBox=E,t.generateFillAttributes=v,t.generateStrokeAttributes=j,t.generateTextAttributes=A,t.getBoundingBox=F,t.getTransformMatrix=U,t.renderDef=M,t.renderSVG=B,t.renderShape=b,Object.defineProperty(t,"__esModule",{value:!0})}));
