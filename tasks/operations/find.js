/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../layers/support/layerUtils"],(function(e,i){"use strict";function n(e){const{contains:n,dynamicLayers:s,geometryPrecision:t,layerDefinitions:r,layerIds:o,maxAllowableOffset:l,outSR:a,returnGeometry:f,searchFields:c,searchText:d}=e.toJSON(),y={contains:n,returnGeometry:f,geometryPrecision:t,maxAllowableOffset:l,searchText:d};if(o&&(y.layers=o.join(",")),c&&(y.searchFields=c.join(",")),a&&(y.sr=a.wkid||JSON.stringify(a)),r){const e=[];for(let i=0;i<r.length;i++){const n=r[i];e[n.id]=n.definitionExpression}y.layerDefs=i.serializeLayerDefinitions(e)}if(s&&s.length){const e=[];for(let n=0;n<s.length;n++){const i=s[n],t=i.id;if(!i.subLayerIds&&o&&-1!==o.indexOf(t)){const n={id:t};n.source=i.source;let s=null;if(r&&r.length){const e=r.filter((e=>e.id===t))[0];s=e&&e.definitionExpression}s&&(n.definitionExpression=s),e.push(n)}}let i=JSON.stringify(e);"[]"===i&&(i="[{}]"),y.dynamicLayers=i}return y}e.findToFindRESTParameters=n,Object.defineProperty(e,"__esModule",{value:!0})}));
