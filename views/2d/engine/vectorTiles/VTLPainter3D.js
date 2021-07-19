/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../brushes","./shaders/VTLMaterialManager"],(function(e,t,r,s){"use strict";const a=1e-6;return function(){function n(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new s}var i=n.prototype;return i.dispose=function(){this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache=null),this._vtlMaterialManager=t.disposeMaybe(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()},i.drawTile=function(e,t,r){const{context:s}=e,a=r.layers;r.backgroundBucketIds.length>0&&(e.renderPass="background",r.backgroundBucketIds.forEach((s=>this._renderStyleLayer(r.getLayerById(s),e,t,!0)))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(515),e.renderPass="opaque";for(let n=a.length-1;n>=0;n--)this._renderStyleLayer(a[n],e,t,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let n=0;n<a.length;n++)this._renderStyleLayer(a[n],e,t,!1);s.setDepthTestEnabled(!1),e.renderPass="symbol";for(let n=0;n<a.length;n++)this._renderStyleLayer(a[n],e,t,!1);s.bindVAO()},i._renderStyleLayer=function(e,t,r,s=!1){if(!(s||e&&r.layerData.has(e.uid)))return;const n=e.getLayoutProperty("visibility");if(n&&1===n.getValue())return;const{renderPass:i}=t;let l;switch(e.type){case 0:if("background"!==i)return;l="vtlBackground";break;case 1:if("opaque"!==i&&"translucent"!==t.renderPass)return;l="vtlFill";break;case 2:if("translucent"!==i)return;l="vtlLine";break;case 4:if("symbol"!==i)return;l="vtlCircle";break;case 3:if("symbol"!==i)return;l="vtlSymbol"}const o=t.displayLevel;void 0!==e.minzoom&&e.minzoom>o+a||void 0!==e.maxzoom&&e.maxzoom<=o-a||(t.styleLayerUID=e.uid,t.styleLayer=e,this.drawWithBrush(t,r,l))},i.drawWithBrush=function(e,t,s){if(!this._brushCache.has(s)){const e=r.vtlBrushes[s];this._brushCache.set(s,new e)}this._brushCache.get(s).drawMany(e,[t])},e._createClass(n,[{key:"vectorTilesMaterialManager",get:function(){return this._vtlMaterialManager}}]),n}()}));
