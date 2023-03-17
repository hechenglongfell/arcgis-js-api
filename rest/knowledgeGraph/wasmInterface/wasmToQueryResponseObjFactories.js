/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/Logger","../Entity","../GraphObject","../ObjectValue","../Path","../Relationship","./KnowledgeWasmInterface","./WasmQueryWrapperInterfaces","./wasmToGeometryFactories"],(function(e,t,n,r,o,s,a,u,i,p){"use strict";const y=t.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");function c(e,t){const n=[],r=e.count();for(let o=0;o<r;o++){const t=e.get_value_at(o);n.push(l(t))}return n}function l(e,t){if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_POINT:return p.wasmToPointGeometry(e);case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTIPOINT:return p.wasmToMultipointGeometry(e);case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE:return p.wasmToPolylineGeometry(e);case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON:return p.wasmToPolygonGeometry(e);case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_ENVELOPE:case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTI_PATCH:return y.warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected.  Result interpreted as null"),null;case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_NULL:case u.WasmGeometryTypeCodes.ESRI_GEOMETRY_ANY:default:return y.warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return y.warnOnce("A decoded value came back of a type that is not supported.  Result interpreted as null"),null;switch(e.object_value_type.value){case i.WasmGraphQueryResponseTypeCodes.OBJECT:return T(e);case i.WasmGraphQueryResponseTypeCodes.ENTITY:return m(e);case i.WasmGraphQueryResponseTypeCodes.RELATIONSHIP:return R(e);case i.WasmGraphQueryResponseTypeCodes.PATH:return E(e);case i.WasmGraphQueryResponseTypeCodes.ARRAY:return c(e);default:return y.warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}function m(e,t){const r=e.type_name,o=_(e),s=e.get_id();return new n(Object.assign({typeName:r,id:s},o))}function d(e,t){return new r(_(e))}function _(e,t){const n={},r=e.key_count();for(let o=0;o<r;o++)n[e.get_key_at(o)]=l(e.get_value_at(o));return{properties:n}}function T(e,t){return new o(_(e))}function E(e,t){const n=e.entity_count(),r=e.relationship_count(),o=[];for(let s=0;s<n;s++)o.push(m(e.get_entity_at(s))),s<r&&o.push(R(e.get_relationship_at(s)));return new s({path:o})}function R(e,t){const n=e.type_name,r=_(e);return new a(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},r))}e.decodedWasmObjToQueryResponseObj=l,e.wasmArrayToArray=c,e.wasmToEntity=m,e.wasmToGraphObject=d,e.wasmToObjectValue=T,e.wasmToPath=E,e.wasmToRelationship=R,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
