/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../maquette/dom","../maquette/projector","./advanced-projector-options","./utils"],(function(e,t,o,r,n){"use strict";const d=(e,t)=>{const o=[];for(;e&&e!==t;)o.push(e),e=e.parentNode;return o},s=(e,t)=>e.find(t),c=(e,t,o=!1)=>{let r=e;return t.forEach(((e,n)=>{var d;const c=null!=(d=r)&&d.children?s(r.children,(t=>t.domNode===e)):void 0;o&&!c&&n!==t.length-1||(r=c)})),r},i=e=>{let o;const s={...r.defaultAdvancedProjectorOptions,...e},i=n.applyDefaultProjectionOptions(s),a=i.performanceLogger;let l,p=!0,u=!1;const m=[],f=[],v=(e,t,r)=>{let n;i.eventHandlerInterceptor=(e,t,r,i)=>function(e){let t;a("domEvent",e);const r=d(e.currentTarget,n.domNode),i=r.some((e=>{var t;return customElements.get(null==e||null==(t=e.tagName)?void 0:t.toLowerCase())}));if(e.eventPhase===Event.CAPTURING_PHASE||!i)r.reverse(),t=c(n.getLastRender(),r);else{const o=e.composedPath(),r=o.slice(o.indexOf(e.currentTarget),o.indexOf(n.domNode)).filter((e=>e.getRootNode()===e.ownerDocument)).reverse();t=c(n.getLastRender(),r,!0)}let l;return t&&(l=s.handleInterceptedEvent(o,t,this,e)),a("domEventProcessed",e),l},null==s.postProcessProjectionOptions||s.postProcessProjectionOptions(i);const l=r();n=e(t,l,i),m.push(n),f.push(r),s.afterFirstVNodeRendered&&s.afterFirstVNodeRendered(n,l)};let h=()=>{if(l=void 0,p){p=!1,a("renderStart",void 0);for(let e=0;e<m.length;e++){const t=f[e]();a("rendered",void 0),m[e].update(t),a("patched",void 0)}a("renderDone",void 0),p=!0}};return s.modifyDoRenderImplementation&&(h=s.modifyDoRenderImplementation(h,m,f)),o={renderNow:h,scheduleRender:()=>{l||u||(l=requestAnimationFrame(h))},stop:()=>{l&&(cancelAnimationFrame(l),l=void 0),u=!0},resume:()=>{u=!1,p=!0,o.scheduleRender()},append:(e,o)=>{v(t.dom.append,e,o)},insertBefore:(e,o)=>{v(t.dom.insertBefore,e,o)},merge:(e,o)=>{v(t.dom.merge,e,o)},replace:(e,o)=>{v(t.dom.replace,e,o)},detach:e=>{for(let t=0;t<f.length;t++)if(f[t]===e)return f.splice(t,1),m.splice(t,1)[0];throw new Error("renderFunction was not found")}},o};e.createAdvancedProjector=i,Object.defineProperty(e,"__esModule",{value:!0})}));
