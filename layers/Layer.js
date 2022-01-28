/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../config","../geometry","../request","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../geometry/Extent","../geometry/SpatialReference"],(function(e,r,t,o,a,n,i,l,p,s,y,c,u,d,b,f,_,h,v,m){"use strict";let g=0;const L=y.getLogger("esri.layers.Layer");let S=function(t){function a(){var e;return(e=t.apply(this,arguments)||this).attributionDataUrl=null,e.fullExtent=new v(-180,-90,180,90,m.WGS84),e.id=Date.now().toString(16)+"-layer-"+g++,e.legendEnabled=!0,e.listMode="show",e.opacity=1,e.parent=null,e.popupEnabled=!0,e.attributionVisible=!0,e.spatialReference=m.WGS84,e.title=null,e.type=null,e.url=null,e.visible=!0,e}r._inheritsLoose(a,t),a.fromArcGISServerUrl=function(){var t=r._asyncToGenerator((function*(r){const t="string"==typeof r?{url:r}:r,o=yield new Promise(((r,t)=>e(["./support/arcgisLayers"],r,t)));try{return yield o.fromUrl(t)}catch(a){throw L.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",a),a}}));function o(e){return t.apply(this,arguments)}return o}(),a.fromPortalItem=function(){var t=r._asyncToGenerator((function*(r){const t="portalItem"in r?r:{portalItem:r},a=yield new Promise(((r,t)=>e(["../portal/support/portalLayers"],r,t)));try{return yield a.fromItem(t)}catch(n){const e=t&&t.portalItem,r=e&&e.id||"unset",a=e&&e.portal&&e.portal.url||o.portalUrl;throw L.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+r+"')",n),n}}));function a(e){return t.apply(this,arguments)}return a}();var l=a.prototype;return l.initialize=function(){this.when().catch((e=>{var r,t;c.isAbortError(e)||y.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(r=this.title)?r:"no title"}', id: '${null!=(t=this.id)?t:"no id"}')`,{error:e})}))},l.destroy=function(){if(this.parent){const e=this,r=this.parent;"layers"in r&&r.layers.includes(e)?r.layers.remove(e):"tables"in r&&r.tables.includes(e)?r.tables.remove(e):"baseLayers"in r&&r.baseLayers.includes(e)?r.baseLayers.remove(e):"baseLayers"in r&&r.referenceLayers.includes(e)&&r.referenceLayers.remove(e)}},l.fetchAttributionData=function(){var e=r._asyncToGenerator((function*(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e){return(yield n(e,{query:{f:"json"},responseType:"json"})).data}throw new i("layer:no-attribution-data","Layer does not have attribution data")}));function t(){return e.apply(this,arguments)}return t}(),r._createClass(a,[{key:"hasAttributionData",get:function(){return null!=this.attributionDataUrl}},{key:"parsedUrl",get:function(){const e=this.url;return e?u.urlToObject(e):null}}]),a}(l.EventedMixin(p.IdentifiableMixin(s)));t.__decorate([d.property({type:String})],S.prototype,"attributionDataUrl",void 0),t.__decorate([d.property({type:v})],S.prototype,"fullExtent",void 0),t.__decorate([d.property({readOnly:!0})],S.prototype,"hasAttributionData",null),t.__decorate([d.property({type:String})],S.prototype,"id",void 0),t.__decorate([d.property({type:Boolean,nonNullable:!0})],S.prototype,"legendEnabled",void 0),t.__decorate([d.property({type:["show","hide","hide-children"]})],S.prototype,"listMode",void 0),t.__decorate([d.property({type:Number,range:{min:0,max:1},nonNullable:!0})],S.prototype,"opacity",void 0),t.__decorate([d.property()],S.prototype,"parent",void 0),t.__decorate([d.property({readOnly:!0})],S.prototype,"parsedUrl",null),t.__decorate([d.property({type:Boolean})],S.prototype,"popupEnabled",void 0),t.__decorate([d.property({type:Boolean})],S.prototype,"attributionVisible",void 0),t.__decorate([d.property({type:m})],S.prototype,"spatialReference",void 0),t.__decorate([d.property({type:String})],S.prototype,"title",void 0),t.__decorate([d.property({type:String,readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),t.__decorate([d.property()],S.prototype,"url",void 0),t.__decorate([d.property({type:Boolean,nonNullable:!0})],S.prototype,"visible",void 0),S=t.__decorate([h.subclass("esri.layers.Layer")],S);return S}));
