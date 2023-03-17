/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/accessorSupport/PropertyOrigin"],(function(e,r,i){"use strict";function n(e,r,i){const n=r.flatten((({sublayers:e})=>e)).length;if(n!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!t(e,r)}function o(e,n,o){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(r.isNone(n.gdbVersion)||n.gdbVersion===o))||e.originIdOf("renderer")>i.OriginId.SERVICE||e.originIdOf("labelingInfo")>i.OriginId.SERVICE||e.originIdOf("opacity")>i.OriginId.SERVICE||e.originIdOf("labelsVisible")>i.OriginId.SERVICE}))||!t(e,n)}function t(e,i){if(!e||!e.length||r.isNone(i))return!0;const n=i.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>n.length)return!1;let o=0;const t=n.length;for(const{id:r}of e){for(;o<t&&n[o]!==r;)o++;if(o>=t)return!1}return!0}function l(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}e.isExportDynamic=o,e.isSublayerOverhaul=l,e.shouldWriteSublayerStructure=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
