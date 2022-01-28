/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/Error","../../core/promiseUtils","../../core/uuid","../../portal/support/resourceUtils"],(function(e,r,t,o,s,n,c){"use strict";function u(e,r,t){return a.apply(this,arguments)}function a(){return(a=r._asyncToGenerator((function*(e,r,t){if(!r||!r.resources)return;const u=r.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=r.portalItem;const a=new Set(r.resources.toKeep.map((e=>e.resource.path))),i=new Set,l=[];a.forEach((r=>{u.delete(r),e.paths.push(r)}));for(const o of r.resources.toUpdate)if(u.delete(o.resource.path),a.has(o.resource.path)||i.has(o.resource.path)){const{resource:r,content:s,finish:u,error:a}=o,i=c.getSiblingOfSameTypeI(r,n.generateUUID());e.paths.push(i.path),l.push(p({resource:i,content:s,finish:u,error:a},t))}else e.paths.push(o.resource.path),l.push(h(o,t)),i.add(o.resource.path);for(const o of r.resources.toAdd)l.push(p(o,t)),e.paths.push(o.resource.path);if(u.forEach((e=>{const t=r.portalItem.resourceFromPath(e);l.push(t.portalItem.removeResource(t).catch((()=>{})))})),0===l.length)return;const f=yield s.eachAlways(l);s.throwIfAborted(t);const d=f.filter((e=>"error"in e)).map((e=>e.error));if(d.length>0)throw new o("save:resources","Failed to save one or more resources",{errors:d})}))).apply(this,arguments)}function p(e,r){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(e,r){const o=yield t.result(e.resource.portalItem.addResource(e.resource,e.content,r));if(!0!==o.ok)throw e.error&&e.error(o.error),o.error;e.finish&&e.finish(e.resource)}))).apply(this,arguments)}function h(e,r){return l.apply(this,arguments)}function l(){return(l=r._asyncToGenerator((function*(e,r){const o=yield t.result(e.resource.update(e.content,r));if(!0!==o.ok)throw e.error(o.error),o.error;e.finish(e.resource)}))).apply(this,arguments)}e.saveResources=u,Object.defineProperty(e,"__esModule",{value:!0})}));
