/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../core/workers/WorkerHandle"],(function(t,r,e,o){"use strict";let u=function(t){function o(r){var e;return e=t.call(this,"PointCloudWorker","transform",{transform:t=>e._getTransferList(t)},r)||this}return r._inheritsLoose(o,t),o.prototype._getTransferList=function(t){const r=[t.geometryBuffer];if(e.isSome(t.primaryAttributeData)&&t.primaryAttributeData.buffer&&r.push(t.primaryAttributeData.buffer),e.isSome(t.modulationAttributeData)&&t.modulationAttributeData.buffer&&r.push(t.modulationAttributeData.buffer),e.isSome(t.filterAttributesData))for(const o of t.filterAttributesData)e.isSome(o)&&o.buffer&&r.push(o.buffer);for(const e of t.userAttributesData)e.buffer&&r.push(e.buffer);return r},o}(o.WorkerHandle);t.PointCloudWorkerHandle=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
