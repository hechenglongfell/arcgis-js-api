/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../Graphic","../../core/maybe","../../geometry/Extent","../../geometry/Mesh","../../geometry/Point","../../geometry/support/axisAngleDegrees","../../geometry/support/MeshTransform","./FeatureSet"],(function(e,t,r,n,s,o,a,i,u){"use strict";function l(e,n,s){const o=s.features;s.features=[],delete s.geometryType;const a=u.fromJSON(s);a.geometryType="mesh";const i=a.spatialReference,l=r.isNone(e.outFields)||!e.outFields.length?()=>({}):c(e.outFields.includes("*")?null:new Set(e.outFields));for(const u of o){const e=f(u,i,n);r.isSome(e)&&a.features.push(new t({geometry:e,attributes:l(u)}))}return a}function c(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function f(e,t,r){const{status:o,source:a}=g(e);if(0===o)return null;const i=m(e,t,r),u=n.fromJSON(e.geometry);u.spatialReference=t;const l=p(e,r);return 1===o?s.createIncomplete(i,{extent:u,transform:l}):s.createWithExternalSource(i,a,{extent:u,transform:l})}function m({attributes:e},t,{transformFieldRoles:r}){return new o({x:e[r.originX],y:e[r.originY],z:e[r.originZ],spatialReference:t})}function p({attributes:e,assetMappings:t},{transformFieldRoles:r}){var n;return new i({translation:[e[r.translationX],e[r.translationY],e[r.translationZ]],rotation:a.fromAxisAndAngle([e[r.rotationX],e[r.rotationY],e[r.rotationZ]],e[r.rotationDeg]),scale:[e[r.scaleX],e[r.scaleY],e[r.scaleZ]],geographic:!(null!=(n=t.flags)&&n.includes("PROJECT_VERTICES"))})}function g(e){if(!e.assetMappings)return{status:0};const t=[],r=new Map;for(const n of e.assetMappings){const e=n.seqNo,s=n.assetName,o=n.assetURL,a=n.conversionStatus;if("FAILED"===a)return{status:0};if("COMPLETED"!==a)return{status:1};if(null==e)t.push({name:s,source:o});else{const n=r.get(s);let a;n?a=n.multipart:(a=[],t.push({name:s,source:{multipart:a}}),r.set(s,{multipart:a})),a[e]=o}}return{status:2,source:t}}e.meshFeatureSetFromJSON=l,Object.defineProperty(e,"__esModule",{value:!0})}));
