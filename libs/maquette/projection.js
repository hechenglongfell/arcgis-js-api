/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../widgets/support/widgetUtils"],(function(e,t){"use strict";const r="http://www.w3.org/",o=`${r}2000/svg`,i=`${r}1999/xlink`;let n,l=[],s=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r},p=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),d=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},a=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(p(e[o],t))return o;return-1},f=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let n=i.properties;if(!(n?void 0===n.key?n.bind:n.key:void 0))for(let l=0;l<e.length;l++)if(l!==t){let t=e[l];if(p(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},c=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},u=[],h=!1,v=e=>{(e.children||[]).forEach(v),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},m=()=>{h=!1,u.forEach(v),u.length=0},y=e=>{u.push(e),h||(h=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16))},g=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),y(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),y(e))},b=(e,r,n)=>{if(!r)return;let l=n.eventHandlerInterceptor,s=Object.keys(r),p=s.length;for(let a=0;a<p;a++){let p=s[a],f=r[p];if("className"===p)throw new Error('Property "className" is not supported, use "class".');if("class"===p)S(e,f,!0);else if("classes"===p){let t=Object.keys(f),r=t.length;for(let o=0;o<r;o++){let r=t[o];f[r]&&e.classList.add(r)}}else if("styles"===p){let t=Object.keys(f),r=t.length;for(let o=0;o<r;o++){let r=t[o],i=f[r];i&&(d(i),n.styleApplyer(e,r,i))}}else if("key"!==p&&null!=f){let s=typeof f;"function"===s?(0===p.lastIndexOf("on",0)&&(l&&(f=l(p,f,e,r)),"oninput"===p&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),e[p]=f):n.namespace===o?"href"===p?e.setAttributeNS(i,p,f):e.setAttribute(p,f):"string"===s&&"value"!==p?"innerHTML"===p?e[p]=t.renderingSanitizer.sanitize(f):e.setAttribute(p,f):e[p]=f}}},N=(e,t,r)=>{if(t)for(let o of t)x(o,e,void 0,r)},w=(e,t,r)=>{N(e,t.children,r),t.text&&(e.textContent=t.text),b(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},x=(e,t,r,i)=>{let n,l=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)n=e.domNode=d.createTextNode(e.text),void 0!==r?t.insertBefore(n,r):t.appendChild(n);else{for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(l-1),c=p.slice(l,a);"."===f?n.classList.add(c):"#"===f?n.id=c:("svg"===c&&(i=s(i,{namespace:o})),void 0!==i.namespace?n=e.domNode=d.createElementNS(i.namespace,c):(n=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&n.setAttribute("type",e.properties.type)),void 0!==r?t.insertBefore(n,r):n.parentNode!==t&&t.appendChild(n)),l=a+1}}w(n,e,i)}},S=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))},k=(e,r,n,l)=>{if(!n)return;let s=!1,p=Object.keys(n),a=p.length;for(let f=0;f<a;f++){let a=p[f],c=n[a],u=r[a];if("class"===a)u!==c&&(S(e,u,!1),S(e,c,!0));else if("classes"===a){let t=e.classList,r=Object.keys(c),o=r.length;for(let e=0;e<o;e++){let o=r[e],i=!!c[o];i!==!!u[o]&&(s=!0,i?t.add(o):t.remove(o))}}else if("styles"===a){let t=Object.keys(c),r=t.length;for(let o=0;o<r;o++){let r=t[o],i=c[r];i!==u[r]&&(s=!0,i?(d(i),l.styleApplyer(e,r,i)):l.styleApplyer(e,r,""))}}else if(c||"string"!=typeof u||(c=""),"value"===a){let t=e[a];t!==c&&(e["oninput-value"]?t===e["oninput-value"]:c!==u)&&(e[a]=c,e["oninput-value"]=void 0),c!==u&&(s=!0)}else if(c!==u){let r=typeof c;"function"===r&&l.eventHandlerInterceptor||(l.namespace===o?"href"===a?e.setAttributeNS(i,a,c):e.setAttribute(a,c):"string"===r?"innerHTML"===a?e[a]=t.renderingSanitizer.sanitize(c):"role"===a&&""===c?e.removeAttribute(a):e.setAttribute(a,c):e[a]!==c&&(e[a]=c),s=!0)}}return s},A=(e,t,r,o,i)=>{if(r===o)return!1;o=o||l;let s,d=(r=r||l).length,u=o.length,h=0,v=0,m=!1;for(;v<u;){let l=h<d?r[h]:void 0,u=o[v];if(void 0!==l&&p(l,u))m=n(l,u,i)||m,h++;else{let l=a(r,u,h+1);if(l>=0){for(s=h;s<l;s++)g(r[s]),f(r,s,e,"removed");m=n(r[l],u,i)||m,h=l+1}else x(u,t,h<d?r[h].domNode:void 0,i),c(u),f(o,v,e,"added")}v++}if(d>h)for(s=h;s<d;s++)g(r[s]),f(r,s,e,"removed");return m};n=(e,t,r)=>{let i=e.domNode,n=!1;if(e===t)return!1;let l=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,n=!0,n}t.domNode=i}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(r=s(r,{namespace:o})),e.text!==t.text&&(l=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,l=A(t,i,e.children,t.children,r)||l,l=k(i,e.properties,t.properties,r)||l,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,r,t.vnodeSelector,t.properties,t.children]);return l&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),n};let C=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,n(o,r,t)},domNode:e.domNode});e.createDom=x,e.createProjection=C,e.extend=s,e.initPropertiesAndChildren=w,Object.defineProperty(e,"__esModule",{value:!0})}));
