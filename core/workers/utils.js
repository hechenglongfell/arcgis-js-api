/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../has"],(function(e,t){"use strict";var s;e.MessageType=void 0,(s=e.MessageType||(e.MessageType={}))[s.HANDSHAKE=0]="HANDSHAKE",s[s.OPEN=1]="OPEN",s[s.OPENED=2]="OPENED",s[s.RESPONSE=3]="RESPONSE",s[s.INVOKE=4]="INVOKE",s[s.ABORT=5]="ABORT",s[s.CLOSE=6]="CLOSE",s[s.OPEN_PORT=7]="OPEN_PORT",s[s.ON=8]="ON";let r=0;function n(){return r++}function a(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}function i(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function o(t,s,r,n){if(s.type===e.MessageType.OPEN_PORT)return void t.postMessage(s,[s.port]);if(s.type!==e.MessageType.INVOKE&&s.type!==e.MessageType.RESPONSE)return void t.postMessage(s);let i;a(r)?(i=f(r.transferList),s.data=r.result):(i=f(n),s.data=r),i?t.postMessage(s,i):t.postMessage(s)}function u(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function f(e){if(!e||!e.length)return null;if(t("esri-workers-arraybuffer-transfer"))return e;const s=e.filter((e=>!O(e)));return s.length?s:null}function O(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}e.isTranferableResult=a,e.newJobId=n,e.postMessage=o,e.receiveMessage=u,e.toInvokeError=i,Object.defineProperty(e,"__esModule",{value:!0})}));
