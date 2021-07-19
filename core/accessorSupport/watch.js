/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../ArrayPool","../lang","../ReentrantObjectPool","../scheduling","../SetUtils","./get","./trackingUtils","./utils"],(function(e,t,r,o,n,l,u,a,s){"use strict";let i=function(){function e(){this.uid=0,this.target=null,this.path=null,this.oldValue=null,this.callback=null,this.getValue=null,this.removed=!1,this.propertyPath=null}var t=e.prototype;return t.acquire=function(t,r,o,n,l){this.target=t,this.path=r,this.oldValue=o,this.callback=n,this.getValue=l,this.propertyPath=s.pathToStringOrArray(r),this.uid=++e.uid,this.removed=!1},t.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null,this.uid=++e.uid,this.removed=!0},e}();i.pool=new o.ReentrantObjectPool(i),i.uid=0;const c=new t,d=new Set;let h;function f(e){d.delete(e),d.add(e),h||(h=n.schedule(_))}function p(e){if(e.removed)return;const{callback:t,path:r,oldValue:o,target:n}=e,l=e.getValue();v(o,l)&&(e.oldValue=l,t.call(n,l,o,r,n))}function v(e,t){return!r.equals(e,t)}function g(e){const t=Array.from(d);for(let r=0;r<t.length;r++){const o=t[r];o.target===e&&(p(o),d.delete(o))}}function m(e){for(const t of d.values())t.target===e&&(t.removed=!0)}function _(){let e=10;for(;h&&e--;){h=null;const e=y(),t=c.acquire();for(const r of e){const e=r.uid;p(r),e===r.uid&&r.removed&&t.push(r)}for(const r of d)r.removed&&(t.push(r),d.delete(r));for(let r=0;r<t.length;r++)i.pool.release(t[r]);c.release(t),c.release(e),V.forEach((e=>e()))}}function y(){const e=c.acquire();e.length=d.size;let t=0;for(const r of d)e[t]=r,++t;return d.clear(),e}const V=new Set;function b(e){return V.add(e),{remove(){V.delete(e)}}}function P(e,t,r){let o=s.parse(e,t,r,((e,t,r)=>{let n,l,c=a.reactionAsync((()=>u.valueOf(e,t)),((u,a)=>{e.__accessor__.destroyed||n&&n.uid!==l?o.remove():(n||(n=i.pool.acquire(e,t,u,r,a),l=n.uid),f(n))}));return{remove:s.once((function(){c.remove(),n&&(n.uid!==l||n.removed||(n.removed=!0,f(n)),n=null),o=c=null}))}}));return o}function O(e,t,r){const o=s.parse(e,t,r,((e,t,r)=>{let n=!1;return a.reaction((()=>u.valueOf(e,t)),((l,u)=>{e.__accessor__.destroyed?o.remove():n||(n=!0,v(u,l)&&r.call(e,l,u,t,e),n=!1)}))}));return o}function k(e,t,r,o=!1){return!e.__accessor__||e.__accessor__.destroyed?{remove(){}}:o?O(e,t,r):P(e,t,r)}function q(e){return l.someSet(d,(t=>t.oldValue===e))}e.afterDispatch=b,e.default=k,e.dispatch=_,e.dispatchTarget=g,e.isValueInUse=q,e.removeTarget=m,e.watch=k,Object.defineProperty(e,"__esModule",{value:!0})}));
