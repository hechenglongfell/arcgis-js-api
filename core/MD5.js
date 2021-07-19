/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n={Base64:0,Hex:1,String:2,Raw:3},e=8,r=(1<<e)-1;function o(t,n){const e=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(e>>16)<<16|65535&e}function u(t){const n=[];for(let o=0,u=t.length*e;o<u;o+=e)n[o>>5]|=(t.charCodeAt(o/e)&r)<<o%32;return n}function c(t){const n=[];for(let o=0,u=32*t.length;o<u;o+=e)n.push(String.fromCharCode(t[o>>5]>>>o%32&r));return n.join("")}function s(t){const n="0123456789abcdef",e=[];for(let r=0,o=4*t.length;r<o;r++)e.push(n.charAt(t[r>>2]>>r%4*8+4&15)+n.charAt(t[r>>2]>>r%4*8&15));return e.join("")}function f(t){const n="=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=[];for(let o=0,u=4*t.length;o<u;o+=3){const u=(t[o>>2]>>o%4*8&255)<<16|(t[o+1>>2]>>(o+1)%4*8&255)<<8|t[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*t.length?r.push(n):r.push(e.charAt(u>>6*(3-c)&63))}return r.join("")}function i(t,n){return t<<n|t>>>32-n}function a(t,n,e,r,u,c){return o(i(o(o(n,t),o(r,c)),u),e)}function h(t,n,e,r,o,u,c){return a(n&e|~n&r,t,n,o,u,c)}function l(t,n,e,r,o,u,c){return a(n&r|e&~r,t,n,o,u,c)}function g(t,n,e,r,o,u,c){return a(n^e^r,t,n,o,u,c)}function p(t,n,e,r,o,u,c){return a(e^(n|~r),t,n,o,u,c)}function d(t,n){t[n>>5]|=128<<n%32,t[14+(n+64>>>9<<4)]=n;let e=1732584193,r=-271733879,u=-1732584194,c=271733878;for(let s=0;s<t.length;s+=16){const n=e,f=r,i=u,a=c;e=h(e,r,u,c,t[s+0],7,-680876936),c=h(c,e,r,u,t[s+1],12,-389564586),u=h(u,c,e,r,t[s+2],17,606105819),r=h(r,u,c,e,t[s+3],22,-1044525330),e=h(e,r,u,c,t[s+4],7,-176418897),c=h(c,e,r,u,t[s+5],12,1200080426),u=h(u,c,e,r,t[s+6],17,-1473231341),r=h(r,u,c,e,t[s+7],22,-45705983),e=h(e,r,u,c,t[s+8],7,1770035416),c=h(c,e,r,u,t[s+9],12,-1958414417),u=h(u,c,e,r,t[s+10],17,-42063),r=h(r,u,c,e,t[s+11],22,-1990404162),e=h(e,r,u,c,t[s+12],7,1804603682),c=h(c,e,r,u,t[s+13],12,-40341101),u=h(u,c,e,r,t[s+14],17,-1502002290),r=h(r,u,c,e,t[s+15],22,1236535329),e=l(e,r,u,c,t[s+1],5,-165796510),c=l(c,e,r,u,t[s+6],9,-1069501632),u=l(u,c,e,r,t[s+11],14,643717713),r=l(r,u,c,e,t[s+0],20,-373897302),e=l(e,r,u,c,t[s+5],5,-701558691),c=l(c,e,r,u,t[s+10],9,38016083),u=l(u,c,e,r,t[s+15],14,-660478335),r=l(r,u,c,e,t[s+4],20,-405537848),e=l(e,r,u,c,t[s+9],5,568446438),c=l(c,e,r,u,t[s+14],9,-1019803690),u=l(u,c,e,r,t[s+3],14,-187363961),r=l(r,u,c,e,t[s+8],20,1163531501),e=l(e,r,u,c,t[s+13],5,-1444681467),c=l(c,e,r,u,t[s+2],9,-51403784),u=l(u,c,e,r,t[s+7],14,1735328473),r=l(r,u,c,e,t[s+12],20,-1926607734),e=g(e,r,u,c,t[s+5],4,-378558),c=g(c,e,r,u,t[s+8],11,-2022574463),u=g(u,c,e,r,t[s+11],16,1839030562),r=g(r,u,c,e,t[s+14],23,-35309556),e=g(e,r,u,c,t[s+1],4,-1530992060),c=g(c,e,r,u,t[s+4],11,1272893353),u=g(u,c,e,r,t[s+7],16,-155497632),r=g(r,u,c,e,t[s+10],23,-1094730640),e=g(e,r,u,c,t[s+13],4,681279174),c=g(c,e,r,u,t[s+0],11,-358537222),u=g(u,c,e,r,t[s+3],16,-722521979),r=g(r,u,c,e,t[s+6],23,76029189),e=g(e,r,u,c,t[s+9],4,-640364487),c=g(c,e,r,u,t[s+12],11,-421815835),u=g(u,c,e,r,t[s+15],16,530742520),r=g(r,u,c,e,t[s+2],23,-995338651),e=p(e,r,u,c,t[s+0],6,-198630844),c=p(c,e,r,u,t[s+7],10,1126891415),u=p(u,c,e,r,t[s+14],15,-1416354905),r=p(r,u,c,e,t[s+5],21,-57434055),e=p(e,r,u,c,t[s+12],6,1700485571),c=p(c,e,r,u,t[s+3],10,-1894986606),u=p(u,c,e,r,t[s+10],15,-1051523),r=p(r,u,c,e,t[s+1],21,-2054922799),e=p(e,r,u,c,t[s+8],6,1873313359),c=p(c,e,r,u,t[s+15],10,-30611744),u=p(u,c,e,r,t[s+6],15,-1560198380),r=p(r,u,c,e,t[s+13],21,1309151649),e=p(e,r,u,c,t[s+4],6,-145523070),c=p(c,e,r,u,t[s+11],10,-1120210379),u=p(u,c,e,r,t[s+2],15,718787259),r=p(r,u,c,e,t[s+9],21,-343485551),e=o(e,n),r=o(r,f),u=o(u,i),c=o(c,a)}return[e,r,u,c]}function j(t,r=n.Hex){const o=r||n.Base64,i=d(u(t),t.length*e);switch(o){case n.Raw:return i;case n.Hex:return s(i);case n.String:return c(i);case n.Base64:return f(i)}}t.createMD5Hash=j,t.outputTypes=n,Object.defineProperty(t,"__esModule",{value:!0})}));
