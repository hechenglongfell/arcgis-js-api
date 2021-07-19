/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/accessorSupport/ensureType","../elements/AttachmentElement","../elements/Element","../elements/FieldElement","../elements/RelationshipElement"],(function(e,t,p,n,r,u){"use strict";function o(e){return{typesWithGroup:{base:n,key:"type",typeMap:{attachment:p,field:r,group:e,relationship:u}},typesWithoutGroup:{base:n,key:"type",typeMap:{attachment:p,field:r,relationship:u}}}}function i(e,t,p=!0){if(!e)return null;const n=p?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter((e=>n[e.type])).map((e=>n[e.type].fromJSON(e)))}function s(e,t,p=!0){if(!e)return null;const n=p?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter((e=>n[e.type])).map((e=>e.toJSON()))}function y(e,p,n=!0){return e?e.map((e=>t.ensureOneOfType(n?p.typesWithGroup:p.typesWithoutGroup,e))):null}e.buildTypeMaps=o,e.ensureType=y,e.fromJSON=i,e.toJSON=s,Object.defineProperty(e,"__esModule",{value:!0})}));
