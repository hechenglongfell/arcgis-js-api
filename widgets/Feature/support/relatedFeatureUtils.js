/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../request","../../../core/Error","../../../core/Logger","../../../core/promiseUtils","../../../layers/support/fieldUtils","../../../rest/support/Query","../../../rest/support/RelationshipQuery","../../../rest/support/StatisticDefinition","../../../tasks/QueryTask","./featureUtils"],(function(e,t,r,s,i,n,o,a,l,u,c,d){"use strict";const f="esri.widgets.Feature.support.relatedFeatureUtils",p=i.getLogger(f),y=new Map;function h(e){if(!d.isRelatedField(e))return null;const[t,r]=e.split("/").slice(1);return{layerId:t,fieldName:r}}function F(e,t){if(!t.relationships)return null;let r=null;const{relationships:s}=t;return s.some((t=>t.id===parseInt(e,10)&&(r=t,!0))),r}function I({originRelationship:e,relationships:t,layerId:r}){let s;return t&&t.some((t=>(`${t.relatedTableId}`===r&&t.id===e.id&&(s=t),!!s))),s}function w(e,t){const r=t.toLowerCase();for(const s in e)if(s.toLowerCase()===r)return e[s];return null}function b(e,t){const r=F(e,t);if(!r)return;const s=`${t.url}/${r.relatedTableId}`;return{url:s,queryTask:new c({url:s,sourceSpatialReference:t.spatialReference}),relation:r,relatedFields:[],outStatistics:[]}}function g(e,t){if(!t)return;if(!e)return;const{features:r,statsFeatures:s}=e,i=r&&r.value;t.relatedFeatures=i?i.features:[];const n=s&&s.value;t.relatedStatsFeatures=n?n.features:[]}function S(e,t,r,s){const i=new l;return i.outFields=["*"],i.relationshipId="number"==typeof t.id?t.id:parseInt(t.id,10),i.objectIds=[e.attributes[r.objectIdField]],r.queryRelatedFeatures(i,s)}function R(e,t,r){let s=0;const i=[];for(;s<t.length;)i.push(`${e} IN (${t.slice(s,r+s)})`),s+=r;return i.join(" OR ")}function m(e,t,r,s){return T.apply(this,arguments)}function T(){return(T=t._asyncToGenerator((function*(e,t,r,s){const i=r.layerId.toString(),{layerInfo:l,queryTask:u,relation:c,relatedFields:d,outStatistics:f}=t,p=I({originRelationship:c,relationships:l.relationships,layerId:i});if(p.relationshipTableId&&p.keyFieldInRelationshipTable){const t=(yield S(e,p,r,s))[e.attributes[r.objectIdField]];if(!t)return null;const i=t.features.map((e=>e.attributes[l.objectIdField]));if((null==f?void 0:f.length)>0&&l.supportsStatistics){const e=new a;e.where=R(l.objectIdField,i,1e3),e.outFields=d,e.outStatistics=f;const r={features:Promise.resolve(t),statsFeatures:u.execute(e)};return n.eachAlways(r)}}const y=null==p?void 0:p.keyField;if(y){const r=o.isNumericField(v(l.fields,y)),i=w(e.attributes,c.keyField),d=r?`${y}=${i}`:`${y}='${i}'`,f=u.execute(new a({where:d,outFields:t.relatedFields}),s),p=t.outStatistics&&t.outStatistics.length>0&&l.supportsStatistics?u.execute(new a({where:d,outFields:t.relatedFields,outStatistics:t.outStatistics}),s):null,h={features:f};return p&&(h.statsFeatures=p),n.eachAlways(h)}return null}))).apply(this,arguments)}function $(e,t){return r(e,{query:{f:"json"},signal:t&&t.signal})}function q({relatedInfos:e,layer:t},r){const i={};return e.forEach(((e,n)=>{const{relation:o}=e;if(!o){const e=new s("relation-required","A relation is required on a layer to retrieve related records.");throw p.error(e),e}const{relatedTableId:a}=o;if("number"!=typeof a){const e=new s("A related table ID is required on a layer to retrieve related records.");throw p.error(e),e}const l=`${t.url}/${a}`,u=y.get(l),c=u||$(l,r);u||y.set(l,c),i[n]=c})),n.eachAlways(i)}function j({graphic:e,relatedInfos:t,layer:r},s){const i={};return t.forEach(((t,n)=>{t.layerInfo&&(i[n]=m(e,t,r,s))})),n.eachAlways(i)}function k({relatedInfo:e,fieldName:t,fieldInfo:r}){if(e.relatedFields.push(t),r.statisticType){const s=new u({statisticType:r.statisticType,onStatisticField:t,outStatisticFieldName:t});e.outStatistics.push(s)}}function v(e,t){if(null!=e){t=t.toLowerCase();for(const r of e)if(r&&r.name.toLowerCase()===t)return r}return null}e.createRelatedInfo=b,e.getDestinationRelation=I,e.getRelatedFieldInfo=h,e.queryLayerInfos=q,e.queryRelatedFeatures=j,e.setRelatedFeatures=g,e.updateRelatedInfo=k,Object.defineProperty(e,"__esModule",{value:!0})}));
