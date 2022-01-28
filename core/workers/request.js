/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../Error","../maybe"],(function(e,t,r,s){"use strict";let n;function a(e,a){let o=a.responseType;o?"array-buffer"!==o&&"blob"!==o&&"json"!==o&&"native"!==o&&"native-request-init"!==o&&"text"!==o&&(o="text"):o="json",a.responseType=o;const i=s.unwrap(a.signal);return delete a.signal,globalThis.invokeStaticMessage("request",{url:e,options:a},{signal:i}).then(function(){var s=t._asyncToGenerator((function*(t){let s,l,u,c,f;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==o&&"text"!==o&&"blob"!==o||(s=new Blob([t.data]),"json"!==o&&"text"!==o||(n||(n=new FileReaderSync),c=n.readAsText(s),"json"!==o)))){try{l=JSON.parse(c||null)}catch(b){const t={...b,url:e,requestOptions:a};throw new r("request:server",b.message,t)}if(l.error){const t={...l.error,url:e,requestOptions:a};throw new r("request:server",l.error.message,t)}}}else"native"===o&&(t.data.signal=i,u=yield fetch(t.data.url,t.data));switch(o){case"blob":f=s;break;case"json":f=l;break;case"native":f=u;break;case"text":f=c;break;default:f=t.data}return{data:f,requestOptions:a,ssl:t.ssl,url:e}}));return function(e){return s.apply(this,arguments)}}())}e.execute=a,Object.defineProperty(e,"__esModule",{value:!0})}));
