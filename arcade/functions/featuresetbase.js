/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../ArcadeDate","../ArcadePortal","../Dictionary","../executionError","../Feature","../featureSetCollection","../featureSetUtils","../ImmutableArray","../../chunks/languageUtils","../portalUtils","../featureset/actions/Adapted","../featureset/actions/AttributeFilter","../featureset/actions/OrderBy","../featureset/actions/Top","../featureset/sources/Empty","../featureset/sources/FeatureLayerMemory","../featureset/support/OrderbyClause","../featureset/support/shared","../featureset/support/sqlUtils","./fieldStats","../../core/promiseUtils","../../core/sql/WhereClause","../../layers/FeatureLayer","../../layers/support/Field"],(function(e,t,r,n,i,a,o,s,l,u,c,d,f,m,p,y,E,h,g,F,x,A,S,I,w,C){"use strict";function b(e,t,r,n){if(1===n.length){if(c.isArray(n[0]))return A.calculateStat(e,n[0],-1);if(c.isImmutableArray(n[0]))return A.calculateStat(e,n[0].toArray(),-1)}return A.calculateStat(e,n,-1)}function D(e,t,r){return T.apply(this,arguments)}function T(){return(T=t._asyncToGenerator((function*(e,t,r){const n=e.getVariables();if(n.length>0){const i=[];for(let e=0;e<n.length;e++){const a={name:n[e]};i.push(yield t.evaluateIdentifier(r,a))}const a={};for(let e=0;e<n.length;e++)a[n[e]]=i[e];return e.parameters=a,e}return e}))).apply(this,arguments)}function N(e,t,r=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return r}function v(e){if(null===e)return null;const t={type:N(e,"type",""),name:N(e,"name","")};if("range"===t.type)t.range=N(e,"range",[]);else{t.codedValues=[];for(const r of N(e,"codedValues",[]))t.codedValues.push({name:N(r,"name",""),code:N(r,"code",null)})}return t}function L(e){if(null===e)return null;const t={},r=N(e,"wkt",null);null!==r&&(t.wkt=r);const n=N(e,"wkid",null);return null!==n&&(t.wkid=n),t}function P(e){if(null===e)return null;const t={hasZ:N(e,"hasz",!1),hasM:N(e,"hasm",!1)},r=N(e,"spatialreference",null);r&&(t.spatialReference=L(r));const n=N(e,"x",null);if(null!==n)return t.x=n,t.y=N(e,"y",null),t;const i=N(e,"rings",null);if(null!==i)return t.rings=i,t;const a=N(e,"paths",null);if(null!==a)return t.paths=a,t;const o=N(e,"points",null);if(null!==o)return t.points=o,t;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=N(e,s,null);null!==r&&(t[s]=r)}return t}function $(e,t){for(const r of t)if(r===e)return!0;return!1}function R(e){return!!e.layerDefinition&&(!!e.featureSet&&(!1!==$(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==c.isArray(e.layerDefinition.fields)&&!1!==c.isArray(e.featureSet.features)))))}function k(e){"async"===e.mode&&(e.functions.timezone=function(n,o){return e.standardFunctionAsync(n,o,function(){var e=t._asyncToGenerator((function*(e,t,s){if(c.pcCheck(s,1,2,n,o),c.isFeatureSet(s[0])){if(yield s[0].load(),1===s.length||null===s[1])return s[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(s[1]instanceof i)||!1===s[1].hasField("type"))throw new a.ArcadeExecutionError(n,a.ExecutionErrorCodes.InvalidParameter,o);const e=s[1].field("type");if(!1===c.isString(e))throw new a.ArcadeExecutionError(n,a.ExecutionErrorCodes.InvalidParameter,o);switch(c.toString(e).toLowerCase()){case"preferredtimezone":return s[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return s[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return s[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(s[1].hasField("fieldname")&&c.isString(s[1].field("fieldname")))return s[0].dateTimeReferenceFieldIndex.fieldTimeZone(c.toString(s[1].field("fieldname")))}throw new a.ArcadeExecutionError(n,a.ExecutionErrorCodes.InvalidParameter,o)}const l=c.toDate(s[0],c.defaultTimeZone(n));if(null===l)return null;const u=l.timeZone;return"system"===u?r.ArcadeDate.systemTimeZoneCanonicalName:u}));return function(t,r,n){return e.apply(this,arguments)}}())},e.functions.sqltimestamp=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){c.pcCheck(i,1,3,r,n);const o=i[0];if(c.isDate(o)){if(1===i.length)return o.toSQLString();if(2===i.length)return o.changeTimeZone(c.toString(i[1])).toSQLString();throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}if(c.isFeatureSet(o)){if(3!==i.length)throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);yield o.load();const e=c.toString(i[1]);if(!1===c.isDate(i[2]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);const t=o.fieldTimeZone(e);return null===t?i[2].toSQLString():i[2].changeTimeZone(t).toSQLString()}throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if(c.pcCheck(i,2,4,t,r),i[0]instanceof s){const e=c.toString(i[1]);let n=c.defaultUndefined(i[2],null);const o=c.toBoolean(c.defaultUndefined(i[3],!0));if(null===n&&(n=["*"]),!1===c.isArray(n))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);return i[0].featureSetById(e,o,n)}throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if(c.pcCheck(i,1,2,t,r),c.isFeature(i[0])){let e=c.defaultUndefined(i[1],"datasource");return null===e&&(e="datasource"),e=c.toString(e).toLowerCase(),l.convertToFeatureSet(i[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,r){return e.standardFunctionAsync(t,r,((e,i,o)=>{if(c.pcCheck(o,2,5,t,r),null===o[0])throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.PortalRequired,r);if(o[0]instanceof n){const e=c.toString(o[1]),n=c.toString(o[2]);let i=c.defaultUndefined(o[3],null);const s=c.toBoolean(c.defaultUndefined(o[4],!0));if(null===i&&(i=["*"]),!1===c.isArray(i))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);let u=null;return t.services&&t.services.portal&&(u=t.services.portal),u=d.getPortal(o[0],u),l.constructFeatureSetFromPortalItem(e,n,t.spatialReference,i,s,u,t.lrucache,t.interceptor)}if(!1===c.isString(o[0]))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.PortalRequired,r);const s=c.toString(o[0]),u=c.toString(o[1]);let f=c.defaultUndefined(o[2],null);const m=c.toBoolean(c.defaultUndefined(o[3],!0));if(null===f&&(f=["*"]),!1===c.isArray(f))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);if(t.services&&t.services.portal)return l.constructFeatureSetFromPortalItem(s,u,t.spatialReference,f,m,t.services.portal,t.lrucache,t.interceptor);throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.PortalRequired,r)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{if(c.pcCheck(i,2,4,t,r),i[0]instanceof s){const e=c.toString(i[1]);let n=c.defaultUndefined(i[2],null);const o=c.toBoolean(c.defaultUndefined(i[3],!0));if(null===n&&(n=["*"]),!1===c.isArray(n))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);return i[0].featureSetByName(e,o,n)}throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,r){return e.standardFunction(t,r,((e,n,o)=>{c.pcCheck(o,1,1,t,r);let s=o[0];const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(c.isString(s))s=JSON.parse(s),void 0!==s.layerDefinition?(l.layerDefinition=s.layerDefinition,l.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(l.featureSet.features=s.features,l.featureSet.geometryType=s.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=s.objectIdFieldName,l.layerDefinition.typeIdField=s.typeIdFieldName,l.layerDefinition.globalIdField=s.globalIdFieldName,l.layerDefinition.fields=s.fields,s.spatialReference&&(l.layerDefinition.spatialReference=s.spatialReference));else{if(!(o[0]instanceof i))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);{s=JSON.parse(o[0].castToText(!0));const e=N(s,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=N(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=N(e,"globalidfield",""),l.layerDefinition.objectIdField=N(e,"objectidfield",""),l.layerDefinition.typeIdField=N(e,"typeidfield","");const t=N(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=L(t));for(const n of N(e,"fields",[])){const e={name:N(n,"name",""),alias:N(n,"alias",""),type:N(n,"type",""),nullable:N(n,"nullable",!0),editable:N(n,"editable",!0),length:N(n,"length",null),domain:v(N(n,"domain"))};l.layerDefinition.fields.push(e)}const r=N(s,"featureset",null);if(r){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of N(r,"features",[])){const r={},n=N(t,"attributes",{});for(const t in n)r[e[t.toLowerCase()]]=n[t];l.featureSet.features.push({attributes:r,geometry:P(N(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=N(s,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=N(s,"objectidfieldname",""),l.layerDefinition.typeIdField=N(s,"typeidfieldname","");const e=N(s,"spatialreference",null);e&&(l.layerDefinition.spatialReference=L(e));for(const r of N(s,"fields",[])){const e={name:N(r,"name",""),alias:N(r,"alias",""),type:N(r,"type",""),nullable:N(r,"nullable",!0),editable:N(r,"editable",!0),length:N(r,"length",null),domain:v(N(r,"domain"))};l.layerDefinition.fields.push(e)}const t={};for(const r of l.layerDefinition.fields)t[r.name.toLowerCase()]=r.name;for(const r of N(s,"features",[])){const e={},n=N(r,"attributes",{});for(const r in n)e[t[r.toLowerCase()]]=n[r];l.featureSet.features.push({attributes:e,geometry:P(N(r,"geometry",null))})}}}}if(!1===R(l))throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,r);return""===(l?.layerDefinition?.geometryType||"")&&(l.layerDefinition.geometryType="esriGeometryNull"),h.create(l,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(r,n){return e.standardFunctionAsync(r,n,function(){var i=t._asyncToGenerator((function*(t,i,o){if(c.pcCheck(o,2,2,r,n),c.isArray(o[0])||c.isImmutableArray(o[0])){const e=[];let t=o[0];t instanceof u&&(t=t.toArray());let i=null;if(!c.isFunctionParameter(o[1]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);i=o[1].createFunction(r);for(const r of t){const t=i(r);S.isPromiseLike(t)?!0===(yield t)&&e.push(r):!0===t&&e.push(r)}return e}if(c.isFeatureSet(o[0])){const t=yield o[0].load(),n=I.WhereClause.create(o[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const a={name:i[n]};t.push(yield e.evaluateIdentifier(r,a))}const a={};for(let e=0;e<i.length;e++)a[i[e]]=t[e];return n.parameters=a,new m({parentfeatureset:o[0],whereclause:n})}return new m({parentfeatureset:o[0],whereclause:n})}throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}));return function(e,t,r){return i.apply(this,arguments)}}())},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){if(c.pcCheck(i,2,2,r,n),c.isFeatureSet(i[0])){const e=new g(i[1]);return new p({parentfeatureset:i[0],orderbyclause:e})}throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){if(c.pcCheck(i,2,2,r,n),c.isFeatureSet(i[0]))return new y({parentfeatureset:i[0],topnum:i[1]});if(c.isArray(i[0]))return c.toNumber(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,c.toNumber(i[1]));if(c.isImmutableArray(i[0]))return c.toNumber(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,c.toNumber(i[1]));throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){if(c.pcCheck(i,1,1,r,n),c.isFeatureSet(i[0])){const t=yield i[0].first(e.abortSignal);if(null!==t){const e=o.createFromGraphicLikeObject(t.geometry,t.attributes,i[0],r.timeReference);return e._underlyingGraphic=t,e}return t}return c.isArray(i[0])?0===i[0].length?null:i[0][0]:c.isImmutableArray(i[0])?0===i[0].length()?null:i[0].get(0):null}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,o){c.pcCheck(o,1,2,r,n);const s={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(o.length>1)if(o[1]instanceof i){if(o[1].hasField("minsize")&&(s.minsize=c.toNumber(o[1].field("minsize"))),o[1].hasField("metadata")&&(s.returnMetadata=c.toBoolean(o[1].field("metadata"))),o[1].hasField("maxsize")&&(s.maxsize=c.toNumber(o[1].field("maxsize"))),o[1].hasField("types")){const e=c.toStringArray(o[1].field("types"),!1);e.length>0&&(s.types=e)}}else if(null!==o[1])throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);if(c.isFeature(o[0])){let e=o[0]._layer;return e instanceof w&&(e=l.constructFeatureSet(e,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===e?[]:!1===c.isFeatureSet(e)?[]:(yield e.load(),e.queryAttachments(o[0].field(e.objectIdField),s.minsize,s.maxsize,s.types,s.returnMetadata))}if(null===o[0])return[];throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){c.pcCheck(i,2,4,r,n);const o=i[0],s=c.toString(i[1]);let u=c.defaultUndefined(i[2],null);const d=c.toBoolean(c.defaultUndefined(i[3],!0));if(null===u&&(u=["*"]),!1===c.isArray(u))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);if(null===i[0])return null;if(!c.isFeature(i[0]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);let f=o._layer;if(f instanceof w&&(f=l.constructFeatureSet(f,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===f)return null;if(!1===c.isFeatureSet(f))return null;f=yield f.load();const m=f.relationshipMetaData().filter((e=>e.name===s));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return l.constructFeatureSetFromRelationship(f,m[0],o.field(f.objectIdField),f.spatialReference,u,d,r.lrucache,r.interceptor);let p=f.serviceUrl();if(!p)return null;p="/"===p.charAt(p.length-1)?p+m[0].relatedTableId.toString():p+"/"+m[0].relatedTableId.toString();const y=yield l.constructFeatureSetFromUrl(p,f.spatialReference,u,d,r.lrucache,r.interceptor);yield y.load();let h=y.relationshipMetaData();if(h=h.filter((e=>e.id===m[0].id)),!1===o.hasField(m[0].keyField)||null===o.field(m[0].keyField)){const e=yield f.getFeatureByObjectId(o.field(f.objectIdField),[m[0].keyField]);if(e){const t=I.WhereClause.create(h[0].keyField+"= @id",y.getFieldsIndex());return t.parameters={id:e.attributes[m[0].keyField]},y.filter(t)}return new E({parentfeatureset:y})}const g=I.WhereClause.create(h[0].keyField+"= @id",y.getFieldsIndex());return g.parameters={id:o.field(m[0].keyField)},y.filter(g)}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(r,n){return e.standardFunctionAsync(r,n,function(){var e=t._asyncToGenerator((function*(e,t,i){c.pcCheck(i,2,3,r,n);const o=i[0],s=c.toString(c.defaultUndefined(i[1],"")).toLowerCase(),u=c.isString(i[2])?c.toString(i[2]):null;if(null===i[0])return null;if(!c.isFeature(i[0]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);let d=o._layer;if(d instanceof w&&(d=l.constructFeatureSet(d,r.spatialReference,["*"],!0,r.lrucache,r.interceptor)),null===d)return null;if(!1===c.isFeatureSet(d))return null;yield d.load();const m=d.serviceUrl(),p=yield l.constructAssociationMetaDataFeatureSetFromUrl(m,r.spatialReference);let y=null,E=null,h=!1;if(null!==u&&""!==u&&void 0!==u){for(const e of p.terminals)e.terminalName===u&&(E=e.terminalId);null===E&&(h=!0)}const g=p.associations.getFieldsIndex(),x=g.get("TOGLOBALID").name,A=g.get("FROMGLOBALID").name,S=g.get("TOTERMINALID").name,b=g.get("FROMTERMINALID").name,D=g.get("FROMNETWORKSOURCEID").name,T=g.get("TONETWORKSOURCEID").name,N=g.get("ASSOCIATIONTYPE").name,v=g.get("ISCONTENTVISIBLE").name,L=g.get("OBJECTID").name;for(const r of d.fields)if("global-id"===r.type){y=o.field(r.name);break}let P=null,$=new f.SqlExpressionAdapted(new C({name:"percentalong",alias:"percentalong",type:"double"}),I.WhereClause.create("0",p.associations.getFieldsIndex())),R=new f.SqlExpressionAdapted(new C({name:"side",alias:"side",type:"string"}),I.WhereClause.create("''",p.associations.getFieldsIndex()));const k="globalid",O="globalId",W={};for(const r in p.lkp)W[r]=p.lkp[r].sourceId;const M=new f.StringToCodeAdapted(new C({name:"classname",alias:"classname",type:"string"}),null,W);let G="";switch(s){case"midspan":{G=`((${x}='${y}') OR ( ${A}='${y}')) AND (${N} IN (5))`,M.codefield=I.WhereClause.create(`CASE WHEN (${x}='${y}') THEN ${D} ELSE ${T} END`,p.associations.getFieldsIndex());const e=F.cloneField(f.AdaptedFeatureSet.findField(p.associations.fields,A));e.name=k,e.alias=k,P=new f.SqlExpressionAdapted(e,I.WhereClause.create(`CASE WHEN (${A}='${y}') THEN ${x} ELSE ${A} END`,p.associations.getFieldsIndex())),$=p.unVersion>=4?new f.OriginalField(f.AdaptedFeatureSet.findField(p.associations.fields,g.get("PERCENTALONG").name)):new f.SqlExpressionAdapted(new C({name:"percentalong",alias:"percentalong",type:"double"}),I.WhereClause.create("0",p.associations.getFieldsIndex()));break}case"junctionedge":{G=`((${x}='${y}') OR ( ${A}='${y}')) AND (${N} IN (4,6))`,M.codefield=I.WhereClause.create(`CASE WHEN (${x}='${y}') THEN ${D} ELSE ${T} END`,p.associations.getFieldsIndex());const e=F.cloneField(f.AdaptedFeatureSet.findField(p.associations.fields,A));e.name=k,e.alias=k,P=new f.SqlExpressionAdapted(e,I.WhereClause.create(`CASE WHEN (${A}='${y}') THEN ${x} ELSE ${A} END`,p.associations.getFieldsIndex())),R=new f.SqlExpressionAdapted(new C({name:"side",alias:"side",type:"string"}),I.WhereClause.create(`CASE WHEN (${N}=4) THEN 'from' ELSE 'to' END`,p.associations.getFieldsIndex()));break}case"connected":{let e=`${x}='@T'`,t=`${A}='@T'`;null!==E&&(e+=` AND ${S}=@A`,t+=` AND ${b}=@A`),G="(("+e+") OR ("+t+"))",G=c.multiReplace(G,"@T",y??""),e=c.multiReplace(e,"@T",y??""),null!==E&&(e=c.multiReplace(e,"@A",E.toString()),G=c.multiReplace(G,"@A",E.toString())),M.codefield=I.WhereClause.create("CASE WHEN "+e+` THEN ${D} ELSE ${T} END`,p.associations.getFieldsIndex());const r=F.cloneField(f.AdaptedFeatureSet.findField(p.associations.fields,A));r.name=k,r.alias=k,P=new f.SqlExpressionAdapted(r,I.WhereClause.create("CASE WHEN "+e+` THEN ${A} ELSE ${x} END`,p.associations.getFieldsIndex()));break}case"container":G=`${x}='${y}' AND ${N} = 2`,null!==E&&(G+=` AND ${S} = `+E.toString()),M.codefield=D,G="( "+G+" )",P=new f.FieldRename(f.AdaptedFeatureSet.findField(p.associations.fields,A),k,k);break;case"content":G=`(${A}='${y}' AND ${N} = 2)`,null!==E&&(G+=` AND ${b} = `+E.toString()),M.codefield=T,G="( "+G+" )",P=new f.FieldRename(f.AdaptedFeatureSet.findField(p.associations.fields,x),k,k);break;case"structure":G=`(${x}='${y}' AND ${N} = 3)`,null!==E&&(G+=` AND ${S} = `+E.toString()),M.codefield=D,G="( "+G+" )",P=new f.FieldRename(f.AdaptedFeatureSet.findField(p.associations.fields,A),k,O);break;case"attached":G=`(${A}='${y}' AND ${N} = 3)`,null!==E&&(G+=` AND ${b} = `+E.toString()),M.codefield=T,G="( "+G+" )",P=new f.FieldRename(f.AdaptedFeatureSet.findField(p.associations.fields,x),k,O);break;default:throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n)}h&&(G="1 <> 1");return new f.AdaptedFeatureSet({parentfeatureset:p.associations,adaptedFields:[new f.OriginalField(f.AdaptedFeatureSet.findField(p.associations.fields,L)),new f.OriginalField(f.AdaptedFeatureSet.findField(p.associations.fields,v)),P,R,M,$],extraFilter:G?I.WhereClause.create(G,p.associations.getFieldsIndex()):null})}));return function(t,r,n){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(r,n){return e.standardFunctionAsync(r,n,function(){var o=t._asyncToGenerator((function*(t,o,s){if(c.pcCheck(s,3,3,r,n),!c.isFeatureSet(s[0]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);const l=yield s[0].load(),u=[],d=[];let f=!1,m=[];if(c.isString(s[1]))m.push(s[1]);else if(s[1]instanceof i)m.push(s[1]);else if(c.isArray(s[1]))m=s[1];else{if(!c.isImmutableArray(s[1]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);m=s[1].toArray()}for(const e of m)if(c.isString(e)){const t=I.WhereClause.create(c.toString(e),l.getFieldsIndex()),r=!0===x.isSingleField(t)?c.toString(e):"%%%%FIELDNAME";u.push({name:r,expression:t}),"%%%%FIELDNAME"===r&&(f=!0)}else{if(!(e instanceof i))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(f=!0),!t)throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);u.push({name:t,expression:I.WhereClause.create(i||t,l.getFieldsIndex())})}}if(m=[],c.isString(s[2]))m.push(s[2]);else if(c.isArray(s[2]))m=s[2];else if(c.isImmutableArray(s[2]))m=s[2].toArray();else{if(!(s[2]instanceof i))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);m.push(s[2])}for(const e of m){if(!(e instanceof i))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);{const t=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",o=e.hasField("expression")?e.field("expression"):"";if(!t||!i||!o)throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);d.push({name:t,statistic:i.toLowerCase(),expression:I.WhereClause.create(o,l.getFieldsIndex())})}}if(f){const e={};for(const r of l.fields)e[r.name.toLowerCase()]=1;for(const r of u)"%%%%FIELDNAME"!==r.name&&(e[r.name.toLowerCase()]=1);for(const r of d)"%%%%FIELDNAME"!==r.name&&(e[r.name.toLowerCase()]=1);let t=0;for(const r of u)if("%%%%FIELDNAME"===r.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,r.name="FIELD_"+t.toString()}}for(const n of u)yield D(n.expression,e,r);for(const n of d)yield D(n.expression,e,r);return s[0].groupby(u,d)}));return function(e,t,r){return o.apply(this,arguments)}}())},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(r,n){return e.standardFunctionAsync(r,n,function(){var o=t._asyncToGenerator((function*(t,o,s){if(c.isFeatureSet(s[0])){c.pcCheck(s,2,2,r,n);const t=yield s[0].load(),o=[];let l=[];if(c.isString(s[1]))l.push(s[1]);else if(s[1]instanceof i)l.push(s[1]);else if(c.isArray(s[1]))l=s[1];else{if(!c.isImmutableArray(s[1]))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);l=s[1].toArray()}let u=!1;for(const e of l)if(c.isString(e)){const r=I.WhereClause.create(c.toString(e),t.getFieldsIndex()),n=!0===x.isSingleField(r)?c.toString(e):"%%%%FIELDNAME";o.push({name:n,expression:r}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof i))throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);{const i=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",s=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===i&&(u=!0),!i)throw new a.ArcadeExecutionError(r,a.ExecutionErrorCodes.InvalidParameter,n);o.push({name:i,expression:I.WhereClause.create(s||i,t.getFieldsIndex())})}}if(u){const e={};for(const n of t.fields)e[n.name.toLowerCase()]=1;for(const t of o)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let r=0;for(const t of o)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+r.toString()];)r++;e["field_"+r.toString()]=1,t.name="FIELD_"+r.toString()}}for(const n of o)yield D(n.expression,e,r);return s[0].groupby(o,[])}return b("distinct",t,o,s)}));return function(e,t,r){return o.apply(this,arguments)}}())})}e.registerFunctions=k,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
