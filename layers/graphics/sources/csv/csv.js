/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";const e=/^\s*"([\S\s]*)"\s*$/,t=/""/g,o="\n",r=[","," ",";","|","\t"];function i(n,e){const t={},o=n.length;for(let r=0;r<o;r++)t[n[r]]=e[r];return t}function*s(n,e,t){let o=0;for(;o<=n.length;){const r=n.indexOf(e,o),i=n.substring(o,r>-1?r:void 0);o+=i.length+e.length,t&&!i.trim()||(yield i)}}function f(n){const e=n.includes("\r\n")?"\r\n":o;return s(n,e,!0)}function c(n,e){return s(n,e,!1)}function u(n){const e=n.trim();let t=0,o="";for(const i of r){const n=e.split(i).length;n>t&&(t=n,o=i)}return""===o?null:o}function*l(n,r,s){let f="",u="",l=0,a=[];n:for(;;){const{value:g,done:h}=n.next();if(h)return;const p=c(g,s);e:for(;;){const{value:n,done:o}=p.next();if(o)break e;if(f+=u+n,u="",l+=d(n),l%2==0){if(l>0){const n=e.exec(f);if(!n){a=[],f="",l=0;continue n}a.push(n[1].replace(t,'"'))}else a.push(f);f="",l=0}else u=s}0===l?(yield i(r,a),a=[]):u=o}}function d(n){let e=0,t=0;for(t=n.indexOf('"',t);t>=0;)e++,t=n.indexOf('"',t+1);return e}n.inferDelimiter=u,n.parseRows=l,n.readRowParts=c,n.readRows=f,Object.defineProperty(n,"__esModule",{value:!0})}));
