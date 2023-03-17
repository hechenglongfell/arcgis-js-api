/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../Error","../maybe"],(function(e,t,r,s){"use strict";let a;function n(e,n){let o=n.responseType;o?"array-buffer"!==o&&"blob"!==o&&"json"!==o&&"native"!==o&&"native-request-init"!==o&&"text"!==o&&(o="text"):o="json",n.responseType=o;const u=s.unwrap(n.signal);return delete n.signal,globalThis.invokeStaticMessage("request",{url:e,options:n},{signal:u}).then(function(){var s=t._asyncToGenerator((function*(t){let s,i,l,c,p;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==o&&"text"!==o&&"blob"!==o||(s=new Blob([t.data]),"json"!==o&&"text"!==o||(a||(a=new FileReaderSync),c=a.readAsText(s),"json"!==o)))){try{i=JSON.parse(c||null)}catch(f){const t={...f,url:e,requestOptions:n};throw new r("request:server",f.message,t)}if(i.error){const t={...i.error,url:e,requestOptions:n};throw new r("request:server",i.error.message,t)}}}else"native"===o&&(t.data.signal=u,l=yield fetch(t.data.url,t.data),t.httpStatus=l.status);switch(o){case"blob":p=s;break;case"json":p=i;break;case"native":p=l;break;case"text":p=c;break;default:p=t.data}return{data:p,httpStatus:t.httpStatus,requestOptions:n,ssl:t.ssl,url:e}}));return function(e){return s.apply(this,arguments)}}())}e.execute=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
