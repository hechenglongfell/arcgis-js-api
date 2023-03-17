/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../geometry","../request","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/Logger","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/arrayUtils","../core/accessorSupport/decorators/subclass","./support/fromPortalItem","../geometry/Extent","../geometry/SpatialReference"],(function(e,t,r,o,a,n,i,p,l,s,y,c,u,d,b,_,f,h,v){"use strict";let g=0,m=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).attributionDataUrl=null,e.fullExtent=new h(-180,-90,180,90,v.WGS84),e.id=Date.now().toString(16)+"-layer-"+g++,e.legendEnabled=!0,e.listMode="show",e.opacity=1,e.parent=null,e.popupEnabled=!0,e.attributionVisible=!0,e.spatialReference=v.WGS84,e.title=null,e.type=null,e.url=null,e.visible=!0,e}t._inheritsLoose(o,r),o.fromArcGISServerUrl=function(){var r=t._asyncToGenerator((function*(t){const r="string"==typeof t?{url:t}:t;return(yield new Promise(((t,r)=>e(["./support/arcgisLayers"],t,r)))).fromUrl(r)}));function o(e){return r.apply(this,arguments)}return o}(),o.fromPortalItem=function(e){return f.fromPortalItem(e)};var i=o.prototype;return i.initialize=function(){this.when().catch((e=>{y.isAbortError(e)||s.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))},i.destroy=function(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}},i.fetchAttributionData=function(){var e=t._asyncToGenerator((function*(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e){return(yield a(e,{query:{f:"json"},responseType:"json"})).data}throw new n("layer:no-attribution-data","Layer does not have attribution data")}));function r(){return e.apply(this,arguments)}return r}(),t._createClass(o,[{key:"hasAttributionData",get:function(){return null!=this.attributionDataUrl}},{key:"parsedUrl",get:function(){return c.urlToObject(this.url)}}]),o}(i.EventedMixin(p.IdentifiableMixin(l)));r.__decorate([u.property({type:String})],m.prototype,"attributionDataUrl",void 0),r.__decorate([u.property({type:h})],m.prototype,"fullExtent",void 0),r.__decorate([u.property({readOnly:!0})],m.prototype,"hasAttributionData",null),r.__decorate([u.property({type:String,clonable:!1})],m.prototype,"id",void 0),r.__decorate([u.property({type:Boolean,nonNullable:!0})],m.prototype,"legendEnabled",void 0),r.__decorate([u.property({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),r.__decorate([u.property({type:Number,range:{min:0,max:1},nonNullable:!0})],m.prototype,"opacity",void 0),r.__decorate([u.property({clonable:!1})],m.prototype,"parent",void 0),r.__decorate([u.property({readOnly:!0})],m.prototype,"parsedUrl",null),r.__decorate([u.property({type:Boolean})],m.prototype,"popupEnabled",void 0),r.__decorate([u.property({type:Boolean})],m.prototype,"attributionVisible",void 0),r.__decorate([u.property({type:v})],m.prototype,"spatialReference",void 0),r.__decorate([u.property({type:String})],m.prototype,"title",void 0),r.__decorate([u.property({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),r.__decorate([u.property()],m.prototype,"url",void 0),r.__decorate([u.property({type:Boolean,nonNullable:!0})],m.prototype,"visible",void 0),m=r.__decorate([_.subclass("esri.layers.Layer")],m);return m}));
