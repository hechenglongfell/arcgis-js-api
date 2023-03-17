/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec2f64","../../../../chunks/vec4","../../../../chunks/vec4f64"],(function(t,n,e,r){"use strict";const o=r.create();let i=function(){function t(t){this.message=t}return t.prototype.toString=function(){return`AssertException: ${this.message}`},t}();function s(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new i(`${n} at ${t}`)}}function c(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function a(t,n,e,r){let o,i=(e[0]-t[0])/n[0],s=(r[0]-t[0])/n[0];i>s&&(o=i,i=s,s=o);let c=(e[1]-t[1])/n[1],a=(r[1]-t[1])/n[1];if(c>a&&(o=c,c=a,a=o),i>a||c>s)return!1;c>i&&(i=c),a<s&&(s=a);let u=(e[2]-t[2])/n[2],f=(r[2]-t[2])/n[2];return u>f&&(o=u,u=f,f=o),!(i>f||u>s)&&(f<s&&(s=f),!(s<0))}function u(t,e,r,o,i,s=n.create()){const c=(o[i]-r[i])*(e[0]-t[0])-(o[0]-r[0])*(e[i]-t[i]),a=(o[0]-r[0])*(t[i]-r[i])-(o[i]-r[i])*(t[0]-r[0]);if(0===c)return!1;const u=a/c;return s[0]=t[0]+u*(e[0]-t[0]),s[1]=t[i]+u*(e[i]-t[i]),!0}function f(t,n,r,i,c){o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=1,e.transformMat4(o,o,n),c.length>2&&(c[2]=-o[2]),e.transformMat4(o,o,r),s(0!==o[3]),c[0]=o[0]/o[3],c[1]=o[1]/o[3],c[2]=o[2]/o[3],c[0]=(.5*c[0]+.5)*i[2]+i[0],c[1]=(.5*c[1]+.5)*i[3]+i[1]}function l(t,n){return Math.log(t)/Math.log(n)}function h(t,n,e,r){t[12]=n,t[13]=e,t[14]=r}function g(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}t.assert=s,t.isTranslationMatrix=g,t.logWithBase=l,t.project=f,t.rayBoxTest=a,t.rayRay2D=u,t.setMatrixTranslation3=h,t.verify=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
