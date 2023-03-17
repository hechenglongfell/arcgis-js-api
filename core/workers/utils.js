/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../has"],(function(e,t){"use strict";var r;e.MessageType=void 0,(r=e.MessageType||(e.MessageType={}))[r.HANDSHAKE=0]="HANDSHAKE",r[r.OPEN=1]="OPEN",r[r.OPENED=2]="OPENED",r[r.RESPONSE=3]="RESPONSE",r[r.INVOKE=4]="INVOKE",r[r.ABORT=5]="ABORT",r[r.CLOSE=6]="CLOSE",r[r.OPEN_PORT=7]="OPEN_PORT",r[r.ON=8]="ON";let s=0;function n(){return s++}function a(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function o(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function i(r,s,n,f){if(s.type===e.MessageType.OPEN_PORT)return void r.postMessage(s,[s.port]);if(s.type!==e.MessageType.INVOKE&&s.type!==e.MessageType.RESPONSE)return void r.postMessage(s);let g;if(a(n)?(g=u(n.transferList),s.data=n.result):(g=u(f),s.data=n),g){if(t("ff"))for(const t of g)if("byteLength"in t&&t.byteLength>267386880){const t="Worker call with large ArrayBuffer would crash Firefox";switch(s.type){case e.MessageType.INVOKE:throw t;case e.MessageType.RESPONSE:return void i(r,{type:e.MessageType.RESPONSE,jobId:s.jobId,error:o(t)})}}r.postMessage(s,g)}else r.postMessage(s)}function f(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function u(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;const r=e.filter((e=>!g(e)));return r.length?r:null}function g(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}e.isTranferableResult=a,e.newJobId=n,e.postMessage=i,e.receiveMessage=f,e.toInvokeError=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
