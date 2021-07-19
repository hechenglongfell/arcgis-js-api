/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../core/lang","../../../../core/maybe","../support/attributeUtils"],(function(t,e,n,r){"use strict";const o={setAttribute(){},rollback(){},commit(){}};function s(t,r){const s=r.attributes[t.objectIdField],i=t.sessions.get(s);if(i)return i;const a=e.clone(r.attributes),u=new Set;if(null==s)return o;const c=t.attributeOverrides.createInteractiveEditSession(s),f=new Map,d=(t,e)=>{const n=f.get(t);if(null==n){const n=e.indexOf(s);return f.set(t,n),n}return n};let l=0;const b={setAttribute(e,o){if(0!==l)return;const s=t.fieldsIndex.get(e);if(n.isNone(s))return;const i=t.attributeStorageInfo.findIndex((t=>t.name===s.name));if(i<0)return;c.set(i,o);const a=t.attributeStorageInfo[i];let f=!1;u.add(e),t.forEachNode(((e,n)=>{const s=d(e,n);if(-1===s)return;const i=t.getAttributeData(e.index);if(i){const n=i[a.name];n&&(n[s]=o,t.setAttributeData(e.index,i,r),f=!0)}})),f&&t.clearMemCache()},rollback(){if(0===l){for(const t of u)this.setAttribute(t,a[t]);c.rollback(),l=1,t.sessions.delete(s)}},commit(){0===l&&(c.commit(),l=2,t.sessions.delete(s))}};return t.sessions.set(s,b),b}function i(t,e){const r=a(t,e);if(0===r.size)return;const o=new Map;for(let n=0;n<t.attributeStorageInfo.length;n++)o.set(t.attributeStorageInfo[n].name,n);let s=!1;r.forEach(((e,r)=>{const i=t.getAttributeData(r);let a=!1;e.forEach(((e,r)=>{const u=n.isSome(i)?i[r]:null,c=o.get(r);for(const{featureIndex:n,value:o,featureId:i}of e)u&&(u[n]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o)})),a&&t.setAttributeData(r,i,null)})),s&&t.clearMemCache()}function a(t,e){const n=e.edits.updateFeatures;if(!n||0===n.length)return new l;const o=f(e),s=new l,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,c=t.objectIdField,d=n.filter((t=>{const e=r.attributeLookup(a,t.attributes,c);return o.has(e)}));return t.forEachNode(((e,n)=>{const o=new Set(n);for(const i of d){const f=r.attributeLookup(a,i.attributes,c);if(!o.has(f))continue;const d=n.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=u(s,e.index,r),a=i.attributes[n];o.push({featureIndex:d,featureId:f,value:a})}}})),s}function u(t,e,n){const r=c(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}function c(t,e){const n=t.get(e);if(n)return n;const r=new d;return t.set(e,r),r}function f(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}const d=Map,l=Map;t.createInteractiveEditSession=s,t.processAttributeEdits=i,Object.defineProperty(t,"__esModule",{value:!0})}));
