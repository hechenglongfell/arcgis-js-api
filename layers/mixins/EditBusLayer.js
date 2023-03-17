/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Evented","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/Error","../../core/has","../../core/accessorSupport/decorators/subclass"],(function(e,t,d,l,r,a,i,s,o,n){"use strict";const c=new l.EventEmitter,u="esri.layers.mixins.EditBusLayer",b=Symbol(u);function I(e){return null!=e&&"object"==typeof e&&b in e}const y=e=>{var l;let a=function(e){function d(...d){var a;return(a=e.call(this,...d)||this)[l]=!0,a.when().then((()=>{a.own([c.on("edits",(e=>{const d="layer"in e?e.layer:null,l="layer"in e?e.layer?.url:e.serviceUrl,i="layer"in e?e.layer?.layerId:e.layerId,s=e.event;if(d===t._assertThisInitialized(a)||l!==a.url)return;if(null!=i&&null!=a.layerId&&i===a.layerId)return void a.emit("edits",r.clone(s));const o=s.editedFeatures?.find((({layerId:e})=>e===a.layerId));if(o){const{adds:e,updates:t,deletes:d}=o.editedFeatures,l={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:e?e.map((({attributes:e})=>({objectId:a.objectIdField&&e[a.objectIdField],globalId:a.globalIdField&&e[a.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:e})=>({objectId:a.objectIdField&&e[a.objectIdField],globalId:a.globalIdField&&e[a.globalIdField]}))):[],updatedFeatures:t?t.map((({current:{attributes:e}})=>({objectId:a.objectIdField&&e[a.objectIdField],globalId:a.globalIdField&&e[a.globalIdField]}))):[],editedFeatures:r.clone(s.editedFeatures),exceededTransferLimit:!1};a.emit("edits",l)}}))])}),(()=>{})),a}return t._inheritsLoose(d,e),d}(e);return l=b,a=d.__decorate([n.subclass(u)],a),a};e.EditBusLayer=y,e.editEventBus=c,e.isEditBusLayer=I,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
