/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){const t=e.renderer,n=t&&t.type,o=t&&e.renderer.toJSON()||null;let r=null,i=!1;"point-cloud-unique-value"===n||"point-cloud-stretch"===n||"point-cloud-class-breaks"===n?r=u(e.attributeStorageInfo,t.field):"point-cloud-rgb"===n?(r=l(e.attributeStorageInfo,t.field),i=null!=r):(r=l(e.attributeStorageInfo,"RGB"),i=null!=r);let a=null;return t&&t.colorModulation&&(a=u(e.attributeStorageInfo,t.colorModulation.field)),{rendererJSON:o,isRGBRenderer:i,primaryAttribute:r,modulationAttribute:a}}function n(e){const t=e.filters;return t?t.map((t=>({filterJSON:t.toJSON(),attributeInfo:u(e.attributeStorageInfo,t.field)}))):[]}function o(e){const t=e&&e.pointSizeAlgorithm;return t&&"splat"===t.type?t:null}function r(e){const t=e&&e.pointSizeAlgorithm;return t&&"fixed-size"===t.type?t:null}function i(e){const t=e&&e.pointSizeAlgorithm;return!(!t||!t.type)&&"fixed-size"===t.type}function l(e,t){for(const n of e)if(n.name===t&&null!=n.attributeValues&&"UInt8"===n.attributeValues.valueType&&3===n.attributeValues.valuesPerElement)return{name:t,storageInfo:n,useElevation:!1};return null}function u(e,t){for(const n of e)if(n.name===t){const e="embedded-elevation"===n.encoding;return{name:t,storageInfo:e?null:n,useElevation:e}}return"elevation"===t.toLowerCase()?{name:t,storageInfo:null,useElevation:!0}:null}e.getAttributeInfo=u,e.getFilterInfo=n,e.getFixedSizeAlgorithm=r,e.getRendererInfo=t,e.getSplatSizeAlgorithm=o,e.rendererUsesFixedSizes=i,Object.defineProperty(e,"__esModule",{value:!0})}));
