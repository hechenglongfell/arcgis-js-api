/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../chunks/languageUtils","./fieldStats","../../core/promiseUtils","../../core/sql/WhereClause"],(function(n,t,e,r,u){"use strict";function a(n,a,c,s,o,l){if(1===s.length){if(t.isArray(s[0]))return r.resolve(e.calculateStat(n,s[0],t.defaultUndefined(s[1],-1)));if(t.isImmutableArray(s[0]))return r.resolve(e.calculateStat(n,s[0].toArray(),t.defaultUndefined(s[1],-1)))}else if(2===s.length){if(t.isArray(s[0]))return r.resolve(e.calculateStat(n,s[0],t.defaultUndefined(s[1],-1)));if(t.isImmutableArray(s[0]))return r.resolve(e.calculateStat(n,s[0].toArray(),t.defaultUndefined(s[1],-1)));if(t.isFeatureSet(s[0]))return s[0].load().then((e=>i(u.WhereClause.create(s[1],e.getFieldsIndex()),l,o).then((e=>s[0].calculateStatistic(n,e,t.defaultUndefined(s[2],1e3),a.abortSignal)))))}else if(3===s.length&&t.isFeatureSet(s[0]))return s[0].load().then((e=>i(u.WhereClause.create(s[1],e.getFieldsIndex()),l,o).then((e=>s[0].calculateStatistic(n,e,t.defaultUndefined(s[2],1e3),a.abortSignal)))));return r.resolve(e.calculateStat(n,s,-1))}function i(n,t,e){try{const u=n.getVariables();if(u.length>0){const a=[];for(let n=0;n<u.length;n++){const r={name:u[n]};a.push(t.evaluateIdentifier(e,r))}return r.all(a).then((t=>{const e={};for(let n=0;n<u.length;n++)e[u[n]]=t[n];return n.parameters=e,n}))}return r.resolve(n)}catch(u){return r.reject(u)}}function c(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("stdev",e,r,u,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("variance",e,r,u,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("mean",e,r,u,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("mean",e,r,u,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("sum",e,r,u,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("min",e,r,u,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return a("max",e,r,u,t,n)}))},n.functions.count=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if(t.pcCheck(r,1,1),t.isFeatureSet(r[0]))return r[0].count(n.abortSignal);if(t.isArray(r[0])||t.isString(r[0]))return r[0].length;if(t.isImmutableArray(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")}))})}n.registerFunctions=c,Object.defineProperty(n,"__esModule",{value:!0})}));
